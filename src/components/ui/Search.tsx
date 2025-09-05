import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

export interface SearchOption {
  value: string
  label: string
  category?: string
  description?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface SearchProps {
  // Basic props
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSelect?: (option: SearchOption | null) => void
  
  // Options
  options?: SearchOption[]
  loading?: boolean
  
  // Autocomplete behavior
  autocomplete?: boolean
  showDropdown?: boolean
  filterOptions?: boolean
  minQueryLength?: number
  maxResults?: number
  
  // Search behavior  
  onSearch?: (query: string) => void
  searchDelay?: number
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'borderless'
  
  // Display options
  showIcon?: boolean
  showClear?: boolean
  showCategories?: boolean
  
  // States
  disabled?: boolean
  error?: boolean
  
  // Styling
  width?: string | number
  
  // Standard props
  className?: string
  'aria-label'?: string
  id?: string
  name?: string
}

const getSearchSize = (size: SearchProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        height: 36px;
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        
        input {
          padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
          padding-left: ${({ theme }) => theme.spacing[8]};
        }
        
        .search-icon {
          left: ${({ theme }) => theme.spacing[2]};
          width: 16px;
          height: 16px;
        }
        
        .clear-button {
          right: ${({ theme }) => theme.spacing[2]};
          width: 20px;
          height: 20px;
        }
      `
    case 'lg':
      return css`
        height: 52px;
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        
        input {
          padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
          padding-left: ${({ theme }) => theme.spacing[12]};
        }
        
        .search-icon {
          left: ${({ theme }) => theme.spacing[4]};
          width: 20px;
          height: 20px;
        }
        
        .clear-button {
          right: ${({ theme }) => theme.spacing[4]};
          width: 24px;
          height: 24px;
        }
      `
    default:
      return css`
        height: 44px;
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        
        input {
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
          padding-left: ${({ theme }) => theme.spacing[10]};
        }
        
        .search-icon {
          left: ${({ theme }) => theme.spacing[3]};
          width: 18px;
          height: 18px;
        }
        
        .clear-button {
          right: ${({ theme }) => theme.spacing[3]};
          width: 22px;
          height: 22px;
        }
      `
  }
}

const getSearchVariant = (variant: SearchProps['variant'], error?: boolean) => {
  const baseStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.gray.base};
    
    &:focus-within {
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
    
    ${error &&
      css`
        border-color: ${({ theme }) => theme.colors.semantic.error};
        
        &:focus-within {
          border-color: ${({ theme }) => theme.colors.semantic.error};
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }
      `}
  `

  switch (variant) {
    case 'filled':
      return css`
        ${baseStyles}
        background-color: ${({ theme }) => theme.colors.gray.dark};
      `
    case 'borderless':
      return css`
        border: none;
        background-color: transparent;
        
        &:focus-within {
          background-color: ${({ theme }) => theme.colors.gray.base};
        }
      `
    default:
      return baseStyles
  }
}

const SearchContainer = styled.div<{
  size: SearchProps['size']
  variant: SearchProps['variant']
  width?: string | number
  disabled?: boolean
  error?: boolean
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.base};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  
  ${({ size }) => getSearchSize(size)}
  ${({ variant, error }) => getSearchVariant(variant, error)}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.foundation.white};
  font-family: inherit;
  font-size: inherit;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.light};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray.light};
  pointer-events: none;
`

const ClearButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray.light};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
    outline-offset: 2px;
  }
`

const DropdownContainer = styled.div<{
  width?: string | number
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.gray.base};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  max-height: 300px;
  overflow-y: auto;
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
`

const DropdownSection = styled.div`
  padding: ${({ theme }) => theme.spacing[2]} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
  }
`

const CategoryHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.gray.light};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const OptionItem = styled.div<{
  isHighlighted?: boolean
  disabled?: boolean
}>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ isHighlighted, theme }) =>
    isHighlighted &&
    css`
      background-color: ${theme.colors.innovation.primaryBlue};
      color: ${theme.colors.foundation.white};
    `}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  
  &:hover:not([disabled]) {
    background-color: ${({ isHighlighted, theme }) =>
      isHighlighted ? theme.colors.innovation.primaryBlue : 'rgba(255, 255, 255, 0.05)'};
  }
`

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`

const OptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`

const OptionText = styled.div`
  flex: 1;
  min-width: 0;
`

const OptionLabel = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
`

const OptionDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray.light};
  margin-top: ${({ theme }) => theme.spacing[1]};
`

const LoadingOption = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`

const NoResults = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`

const DefaultSearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

const ClearIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

export const Search: React.FC<SearchProps> = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSelect,
  options = [],
  loading = false,
  autocomplete = true,
  showDropdown = true,
  filterOptions = true,
  minQueryLength = 0,
  maxResults = 10,
  onSearch,
  searchDelay = 300,
  size = 'md',
  variant = 'default',
  showIcon = true,
  showClear = true,
  showCategories = false,
  disabled = false,
  error = false,
  width,
  className,
  'aria-label': ariaLabel,
  id,
  name,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [filteredOptions, setFilteredOptions] = useState<SearchOption[]>([])
  
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const searchTimeoutRef = useRef<number | null>(null)
  
  // Filter options based on query
  const filterOptionsFunc = useCallback((query: string, opts: SearchOption[]) => {
    if (!filterOptions) return opts
    if (query.length < minQueryLength) return []
    
    const filtered = opts.filter(option => 
      !option.disabled &&
      (option.label.toLowerCase().includes(query.toLowerCase()) ||
       option.value.toLowerCase().includes(query.toLowerCase()) ||
       option.description?.toLowerCase().includes(query.toLowerCase()))
    )
    
    return filtered.slice(0, maxResults)
  }, [filterOptions, minQueryLength, maxResults])
  
  // Group options by category
  const groupedOptions = useCallback((opts: SearchOption[]) => {
    if (!showCategories) return { '': opts }
    
    const grouped = opts.reduce((acc, option) => {
      const category = option.category || ''
      if (!acc[category]) acc[category] = []
      acc[category].push(option)
      return acc
    }, {} as Record<string, SearchOption[]>)
    
    return grouped
  }, [showCategories])
  
  // Update filtered options when query or options change
  useEffect(() => {
    const filtered = filterOptionsFunc(inputValue, options)
    setFilteredOptions(filtered)
    setHighlightedIndex(-1)
  }, [inputValue, options, filterOptionsFunc])
  
  // Handle search with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }
    
    if (onSearch && inputValue.length >= minQueryLength) {
      searchTimeoutRef.current = window.setTimeout(() => {
        onSearch(inputValue)
      }, searchDelay)
    }
    
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [inputValue, onSearch, minQueryLength, searchDelay])
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange?.(newValue)
    
    if (autocomplete && showDropdown) {
      setIsOpen(newValue.length >= minQueryLength)
    }
  }
  
  // Handle option selection
  const handleOptionSelect = (option: SearchOption) => {
    if (option.disabled) return
    
    setInputValue(option.value)
    setIsOpen(false)
    onChange?.(option.value)
    onSelect?.(option)
  }
  
  // Handle clear
  const handleClear = () => {
    setInputValue('')
    setIsOpen(false)
    onChange?.('')
    onSelect?.(null)
    inputRef.current?.focus()
  }
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return
    
    const flatOptions = filteredOptions.filter(opt => !opt.disabled)
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => (prev + 1) % flatOptions.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => prev <= 0 ? flatOptions.length - 1 : prev - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && flatOptions[highlightedIndex]) {
          handleOptionSelect(flatOptions[highlightedIndex])
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
    }
  }
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Sync external value changes
  useEffect(() => {
    setInputValue(value)
  }, [value])
  
  const shouldShowDropdown = isOpen && autocomplete && showDropdown && !disabled
  const shouldShowClear = showClear && inputValue.length > 0 && !disabled
  const grouped = groupedOptions(filteredOptions)
  
  return (
    <SearchContainer
      ref={containerRef}
      size={size}
      variant={variant}
      width={width}
      disabled={disabled}
      error={error}
      className={className}
      {...props}
    >
      {showIcon && (
        <SearchIcon className="search-icon">
          <DefaultSearchIcon />
        </SearchIcon>
      )}
      
      <SearchInput
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => autocomplete && showDropdown && setIsOpen(inputValue.length >= minQueryLength)}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-expanded={shouldShowDropdown}
        aria-haspopup="listbox"
        aria-autocomplete="list"
        autoComplete="off"
      />
      
      {shouldShowClear && (
        <ClearButton
          className="clear-button"
          onClick={handleClear}
          aria-label="Clear search"
          type="button"
        >
          <ClearIcon />
        </ClearButton>
      )}
      
      {shouldShowDropdown && (
        <DropdownContainer width={width} role="listbox">
          {loading ? (
            <LoadingOption>Loading...</LoadingOption>
          ) : filteredOptions.length === 0 ? (
            <NoResults>No results found</NoResults>
          ) : (
            Object.entries(grouped).map(([category, categoryOptions]) => (
              <DropdownSection key={category}>
                {category && showCategories && (
                  <CategoryHeader>{category}</CategoryHeader>
                )}
                {categoryOptions.map((option) => {
                  const flatIndex = filteredOptions.indexOf(option)
                  return (
                    <OptionItem
                      key={option.value}
                      isHighlighted={highlightedIndex === flatIndex}
                      disabled={option.disabled}
                      onClick={() => handleOptionSelect(option)}
                      role="option"
                      aria-selected={highlightedIndex === flatIndex}
                    >
                      <OptionContent>
                        {option.icon && (
                          <OptionIcon>{option.icon}</OptionIcon>
                        )}
                        <OptionText>
                          <OptionLabel>{option.label}</OptionLabel>
                          {option.description && (
                            <OptionDescription>{option.description}</OptionDescription>
                          )}
                        </OptionText>
                      </OptionContent>
                    </OptionItem>
                  )
                })}
              </DropdownSection>
            ))
          )}
        </DropdownContainer>
      )}
    </SearchContainer>
  )
}