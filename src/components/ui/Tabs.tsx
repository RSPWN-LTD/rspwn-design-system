import React, { createContext, forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  orientation?: 'horizontal' | 'vertical'
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  variant?: 'line' | 'enclosed' | 'soft-rounded'
  size?: 'sm' | 'md' | 'lg'
  lazyMount?: boolean
  isLazy?: boolean
  children: React.ReactNode
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface TabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string | number
  children: React.ReactNode
  isDisabled?: boolean
}

export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  children: React.ReactNode
}

interface TabsContextValue {
  selectedValue: string | number | undefined
  orientation: 'horizontal' | 'vertical'
  variant: 'line' | 'enclosed' | 'soft-rounded'
  size: 'sm' | 'md' | 'lg'
  lazyMount: boolean
  isLazy: boolean
  onSelect: (value: string | number) => void
  focusedIndex: number
  setFocusedIndex: (index: number) => void
  tabsData: Array<{ value: string | number; disabled?: boolean }>
  setTabsData: (data: Array<{ value: string | number; disabled?: boolean }>) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component')
  }
  return context
}

const TabsContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation'])
})<{ orientation?: 'horizontal' | 'vertical' }>`
  display: flex;
  ${({ orientation = 'horizontal' }) => 
    orientation === 'vertical' ? css`
      flex-direction: row;
    ` : css`
      flex-direction: column;
    `
  }
`

const getTabListStyles = (orientation: 'horizontal' | 'vertical', variant: 'line' | 'enclosed' | 'soft-rounded') => {
  const baseStyles = css`
    display: flex;
    position: relative;
    ${orientation === 'vertical' ? css`
      flex-direction: column;
      border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
      min-width: 200px;
    ` : css`
      flex-direction: row;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
    `}
  `

  const variantStyles = {
    line: css``,
    enclosed: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border-radius: ${({ theme }) => theme.radius.md};
      padding: ${({ theme }) => theme.spacing[1]};
      gap: ${({ theme }) => theme.spacing[1]};
    `,
    'soft-rounded': css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border-radius: ${({ theme }) => theme.radius.full};
      padding: ${({ theme }) => theme.spacing[1]};
      gap: ${({ theme }) => theme.spacing[1]};
    `
  }

  return css`
    ${baseStyles}
    ${variantStyles[variant]}
  `
}

const StyledTabList = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation', 'variant'])
})<{ orientation?: 'horizontal' | 'vertical'; variant?: 'line' | 'enclosed' | 'soft-rounded' }>`
  ${({ orientation = 'horizontal', variant = 'line' }) => 
    getTabListStyles(orientation, variant)
  }
`

const getTabStyles = (
  orientation: 'horizontal' | 'vertical',
  variant: 'line' | 'enclosed' | 'soft-rounded',
  size: 'sm' | 'md' | 'lg',
  isSelected: boolean,
  isDisabled: boolean
) => {
  const sizeStyles = {
    sm: css`
      padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
      font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    `,
    md: css`
      padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
      font-size: ${({ theme }) => theme.typography.fontSizes.base};
    `,
    lg: css`
      padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
      font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    `
  }

  const baseStyles = css`
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.fonts.body};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.secondary};
    transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
    position: relative;
    white-space: nowrap;
    
    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.text.primary};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
    }

    ${isDisabled && css`
      cursor: not-allowed;
      opacity: 0.5;
      color: ${({ theme }) => theme.colors.text.muted};
    `}

    ${sizeStyles[size]}
  `

  const selectedStyles = isSelected ? css`
    color: ${({ theme }) => theme.colors.innovation.primaryBlue};
  ` : css``

  const variantStyles = {
    line: css`
      ${isSelected && css`
        &::after {
          content: '';
          position: absolute;
          background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          ${orientation === 'horizontal' ? css`
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
          ` : css`
            right: -1px;
            top: 0;
            bottom: 0;
            width: 2px;
          `}
        }
      `}
    `,
    enclosed: css`
      border-radius: ${({ theme }) => theme.radius.sm};
      ${isSelected && css`
        background-color: ${({ theme }) => theme.colors.gray.base};
        box-shadow: ${({ theme }) => theme.shadows.sm};
      `}
    `,
    'soft-rounded': css`
      border-radius: ${({ theme }) => theme.radius.full};
      ${isSelected && css`
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        color: white;
      `}
    `
  }

  return css`
    ${baseStyles}
    ${selectedStyles}
    ${variantStyles[variant]}
  `
}

const StyledTab = styled.button.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation', 'variant', 'size', 'isSelected', 'isDisabled'])
})<{
  orientation?: 'horizontal' | 'vertical'
  variant?: 'line' | 'enclosed' | 'soft-rounded'
  size?: 'sm' | 'md' | 'lg'
  isSelected?: boolean
  isDisabled?: boolean
}>`
  ${({ orientation = 'horizontal', variant = 'line', size = 'md', isSelected = false, isDisabled = false }) =>
    getTabStyles(orientation, variant, size, isSelected, isDisabled)
  }
`

const TabPanelsContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation'])
})<{ orientation?: 'horizontal' | 'vertical' }>`
  flex: 1;
  ${({ orientation = 'horizontal' }) => 
    orientation === 'vertical' ? css`
      margin-left: ${({ theme }) => theme.spacing[6]};
    ` : css`
      margin-top: ${({ theme }) => theme.spacing[6]};
    `
  }
`

const TabPanelContainer = styled.div`
  outline: none;
`

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
  orientation = 'horizontal',
  value,
  defaultValue,
  onChange,
  variant = 'line',
  size = 'md',
  lazyMount = false,
  isLazy = false,
  children,
  ...props
}, ref) => {
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [tabsData, setTabsData] = useState<Array<{ value: string | number; disabled?: boolean }>>([])

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleSelect = useCallback((newValue: string | number) => {
    if (value === undefined) {
      setSelectedValue(newValue)
    }
    onChange?.(newValue)
  }, [value, onChange])

  const contextValue: TabsContextValue = {
    selectedValue,
    orientation,
    variant,
    size,
    lazyMount,
    isLazy,
    onSelect: handleSelect,
    focusedIndex,
    setFocusedIndex,
    tabsData,
    setTabsData
  }

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsContainer ref={ref} orientation={orientation} {...props}>
        {children}
      </TabsContainer>
    </TabsContext.Provider>
  )
})

Tabs.displayName = 'Tabs'

export const TabListComponent = forwardRef<HTMLDivElement, TabListProps>(({
  children,
  ...props
}, ref) => {
  const { orientation, variant } = useTabsContext()

  return (
    <StyledTabList ref={ref} orientation={orientation} variant={variant} {...props}>
      {children}
    </StyledTabList>
  )
})

TabListComponent.displayName = 'TabList'

export const Tab = forwardRef<HTMLButtonElement, TabProps>(({
  value,
  children,
  isDisabled = false,
  onKeyDown,
  onFocus,
  ...props
}, ref) => {
  const {
    selectedValue,
    orientation,
    variant,
    size,
    onSelect,
    setFocusedIndex,
    tabsData,
    setTabsData
  } = useTabsContext()

  const tabRef = useRef<HTMLButtonElement>(null)
  const isSelected = selectedValue === value

  // Register this tab with the context
  useEffect(() => {
    setTabsData((prev: Array<{ value: string | number; disabled?: boolean }>) => {
      const exists = prev.some((tab: { value: string | number; disabled?: boolean }) => tab.value === value)
      if (!exists) {
        return [...prev, { value, disabled: isDisabled }]
      }
      return prev.map((tab: { value: string | number; disabled?: boolean }) => 
        tab.value === value ? { ...tab, disabled: isDisabled } : tab
      )
    })

    return () => {
      setTabsData((prev: Array<{ value: string | number; disabled?: boolean }>) => prev.filter((tab: { value: string | number; disabled?: boolean }) => tab.value !== value))
    }
  }, [value, isDisabled, setTabsData])

  const handleClick = () => {
    if (!isDisabled) {
      onSelect(value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const enabledTabs = tabsData.filter((tab: { value: string | number; disabled?: boolean }) => !tab.disabled)
    const currentIndex = enabledTabs.findIndex((tab: { value: string | number; disabled?: boolean }) => tab.value === value)

    let newIndex = currentIndex
    
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        newIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1
        break
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        newIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        event.preventDefault()
        newIndex = 0
        break
      case 'End':
        event.preventDefault()
        newIndex = enabledTabs.length - 1
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!isDisabled) {
          onSelect(value)
        }
        return
      default:
        onKeyDown?.(event)
        return
    }

    const newTab = enabledTabs[newIndex]
    if (newTab) {
      onSelect(newTab.value)
      setFocusedIndex(newIndex)
    }

    onKeyDown?.(event)
  }

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    const enabledTabs = tabsData.filter((tab: { value: string | number; disabled?: boolean }) => !tab.disabled)
    const currentIndex = enabledTabs.findIndex((tab: { value: string | number; disabled?: boolean }) => tab.value === value)
    if (currentIndex >= 0) {
      setFocusedIndex(currentIndex)
    }
    onFocus?.(event)
  }

  return (
    <StyledTab
      ref={ref || tabRef}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      orientation={orientation}
      variant={variant}
      size={size}
      isSelected={isSelected}
      isDisabled={isDisabled}
      {...props}
    >
      {children}
    </StyledTab>
  )
})

Tab.displayName = 'Tab'

export const TabPanelsComponent = forwardRef<HTMLDivElement, TabPanelsProps>(({
  children,
  ...props
}, ref) => {
  const { orientation } = useTabsContext()

  return (
    <TabPanelsContainer ref={ref} orientation={orientation} {...props}>
      {children}
    </TabPanelsContainer>
  )
})

TabPanelsComponent.displayName = 'TabPanels'

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({
  value,
  children,
  ...props
}, ref) => {
  const { selectedValue, lazyMount, isLazy } = useTabsContext()
  const isSelected = selectedValue === value
  const [hasBeenSelected, setHasBeenSelected] = useState(!lazyMount && !isLazy)

  useEffect(() => {
    if (isSelected && !hasBeenSelected) {
      setHasBeenSelected(true)
    }
  }, [isSelected, hasBeenSelected])

  if (!isSelected && (lazyMount || isLazy) && !hasBeenSelected) {
    return null
  }

  return (
    <TabPanelContainer
      ref={ref}
      role="tabpanel"
      aria-hidden={!isSelected}
      style={{ display: isSelected ? 'block' : 'none' }}
      {...props}
    >
      {children}
    </TabPanelContainer>
  )
})

TabPanel.displayName = 'TabPanel'

// Export compound component with proper typing
export const TabList = TabListComponent
export const TabPanels = TabPanelsComponent