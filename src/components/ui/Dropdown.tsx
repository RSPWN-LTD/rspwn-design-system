import React, { createContext, forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  trigger?: 'click' | 'hover' | 'manual'
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
  offset?: number
  closeOnSelect?: boolean
  closeOnBlur?: boolean
  children: React.ReactNode
}

export interface DropdownTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
}

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  minWidth?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  children: React.ReactNode
  disabled?: boolean
  destructive?: boolean
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
  onSelect?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export interface MenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
  children: React.ReactNode
  disabled?: boolean
}

interface DropdownContextValue {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  triggerRef: React.RefObject<HTMLElement>
  contentRef: React.RefObject<HTMLDivElement>
  closeOnSelect: boolean
  trigger: 'click' | 'hover' | 'manual'
  placement: string
  offset: number
  closeOnBlur: boolean
}

const DropdownContext = createContext<DropdownContextValue | undefined>(undefined)

const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown')
  }
  return context
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownTriggerButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const DropdownContentContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['isOpen', 'placement', 'offset', 'minWidth', 'maxWidth', 'maxHeight'])
})<{
  isOpen?: boolean
  placement?: string
  offset?: number
  minWidth?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
}>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  background: ${({ theme }) => theme.colors.gray.base};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  ${({ minWidth }) => minWidth && css`min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight}; overflow-y: auto;`}

  ${({ placement = 'bottom-start', offset = 8 }) => {
    const [position, alignment] = placement.split('-')
    
    const positionStyles = {
      bottom: css`top: 100%; margin-top: ${offset}px;`,
      top: css`bottom: 100%; margin-bottom: ${offset}px;`,
      left: css`right: 100%; margin-right: ${offset}px;`,
      right: css`left: 100%; margin-left: ${offset}px;`
    }

    const alignmentStyles = {
      start: css`left: 0;`,
      end: css`right: 0;`,
      center: css`left: 50%; transform: translateX(-50%);`
    }

    return css`
      ${positionStyles[position as keyof typeof positionStyles]}
      ${alignmentStyles[alignment as keyof typeof alignmentStyles] || alignmentStyles.start}
    `
  }}
`

const MenuContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: 200px;
`

const MenuItemContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['disabled', 'destructive'])
})<{ disabled?: boolean; destructive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.light};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray.light};
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.text.muted};

    &:hover {
      background-color: transparent;
    }
  `}

  ${({ destructive }) => destructive && css`
    color: ${({ theme }) => theme.colors.semantic.error};

    &:hover {
      background-color: ${({ theme }) => theme.colors.semantic.error}20;
    }
  `}
`

const MenuItemContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`

const MenuItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

const MenuItemRightIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-left: auto;
  flex-shrink: 0;
`

const MenuSeparatorDiv = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray.light};
  margin: ${({ theme }) => theme.spacing[1]} 0;
`

const SubMenuContainer = styled.div`
  position: relative;
`

const SubMenuContent = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  margin-left: ${({ theme }) => theme.spacing[1]};
  z-index: ${({ theme }) => theme.zIndices.dropdown + 1};
`

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  isOpen: controlledIsOpen,
  onToggle,
  trigger = 'click',
  placement = 'bottom-start',
  offset = 8,
  closeOnSelect = true,
  closeOnBlur = true,
  children,
  ...props
}, ref) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const setIsOpen = useCallback((newIsOpen: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen)
    }
    onToggle?.(newIsOpen)
  }, [controlledIsOpen, onToggle])

  // Handle click outside
  useEffect(() => {
    if (!closeOnBlur || !isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        triggerRef.current &&
        contentRef.current &&
        !triggerRef.current.contains(target) &&
        !contentRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeOnBlur, setIsOpen])

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, setIsOpen])

  const contextValue: DropdownContextValue = {
    isOpen,
    setIsOpen,
    triggerRef,
    contentRef,
    closeOnSelect,
    trigger,
    placement,
    offset,
    closeOnBlur
  }

  return (
    <DropdownContext.Provider value={contextValue}>
      <DropdownContainer ref={ref} {...props}>
        {children}
      </DropdownContainer>
    </DropdownContext.Provider>
  )
})

Dropdown.displayName = 'Dropdown'

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({
  children,
  asChild = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}, ref) => {
  const { isOpen, setIsOpen, triggerRef, trigger } = useDropdownContext()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (trigger === 'click') {
      setIsOpen(!isOpen)
    }
    onClick?.(event)
  }

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (trigger === 'hover') {
      setIsOpen(true)
    }
    onMouseEnter?.(event)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (trigger === 'hover') {
      setIsOpen(false)
    }
    onMouseLeave?.(event)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: (node: HTMLElement) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        triggerRef.current = node
      },
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      ...children.props
    })
  }

  return (
    <DropdownTriggerButton
      ref={(node) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        triggerRef.current = node
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-expanded={isOpen}
      aria-haspopup={true}
      {...props}
    >
      {children}
    </DropdownTriggerButton>
  )
})

DropdownTrigger.displayName = 'DropdownTrigger'

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({
  children,
  minWidth,
  maxWidth,
  maxHeight,
  ...props
}, ref) => {
  const { isOpen, contentRef, placement, offset } = useDropdownContext()

  return (
    <DropdownContentContainer
      ref={(node) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        contentRef.current = node
      }}
      isOpen={isOpen}
      placement={placement}
      offset={offset}
      minWidth={minWidth}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      role="menu"
      {...props}
    >
      {children}
    </DropdownContentContainer>
  )
})

DropdownContent.displayName = 'DropdownContent'

export const Menu = forwardRef<HTMLDivElement, MenuProps>(({
  children,
  ...props
}, ref) => {
  return (
    <MenuContainer ref={ref} {...props}>
      {children}
    </MenuContainer>
  )
})

Menu.displayName = 'Menu'

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(({
  children,
  disabled = false,
  destructive = false,
  icon,
  rightIcon,
  onSelect,
  onClick,
  ...props
}, ref) => {
  const { setIsOpen, closeOnSelect } = useDropdownContext()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return

    onSelect?.(event)
    onClick?.(event)

    if (closeOnSelect) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick(event as any)
    }
  }

  return (
    <MenuItemContainer
      ref={ref}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      destructive={destructive}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <MenuItemIcon>{icon}</MenuItemIcon>}
      <MenuItemContent>{children}</MenuItemContent>
      {rightIcon && <MenuItemRightIcon>{rightIcon}</MenuItemRightIcon>}
    </MenuItemContainer>
  )
})

MenuItem.displayName = 'MenuItem'

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(({
  ...props
}, ref) => {
  return <MenuSeparatorDiv ref={ref} role="separator" {...props} />
})

MenuSeparator.displayName = 'MenuSeparator'

export const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(({
  trigger,
  children,
  disabled = false,
  ...props
}, ref) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const { closeOnSelect } = useDropdownContext()

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsSubMenuOpen(true)
    }
  }

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <SubMenuContainer
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <MenuItemContainer disabled={disabled}>
        {trigger}
        <MenuItemRightIcon>→</MenuItemRightIcon>
      </MenuItemContainer>
      {isSubMenuOpen && (
        <SubMenuContent>
          <DropdownContentContainer
            isOpen={true}
            placement="right-start"
            offset={0}
          >
            <MenuContainer>
              {children}
            </MenuContainer>
          </DropdownContentContainer>
        </SubMenuContent>
      )}
    </SubMenuContainer>
  )
})

SubMenu.displayName = 'SubMenu'