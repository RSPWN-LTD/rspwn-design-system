import React, { useState, useRef, useCallback } from 'react'
import styled, { css } from 'styled-components'

export interface TextAreaProps {
  // Basic props
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  
  // Visual variants
  variant?: 'default' | 'filled' | 'borderless'
  size?: 'sm' | 'md' | 'lg'
  
  // Sizing
  rows?: number
  minRows?: number
  maxRows?: number
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  autoResize?: boolean
  
  // Character limits
  maxLength?: number
  showCharCount?: boolean
  
  // States
  disabled?: boolean
  error?: boolean
  required?: boolean
  readOnly?: boolean
  
  // Labels and help text
  label?: string
  helperText?: string
  errorMessage?: string
  
  // Styling
  width?: string | number
  height?: string | number
  
  // Standard props
  className?: string
  id?: string
  name?: string
  'aria-label'?: string
  'aria-describedby'?: string
  autoFocus?: boolean
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const getTextAreaSize = (size: TextAreaProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
        line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
      `
    default:
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
  }
}

const getTextAreaVariant = (variant: TextAreaProps['variant'], error?: boolean, disabled?: boolean) => {
  const baseStyles = css`
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    background-color: ${({ theme }) => theme.colors.gray.base};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
    
    ${error &&
      css`
        border-color: ${({ theme }) => theme.colors.semantic.error};
        
        &:focus {
          border-color: ${({ theme }) => theme.colors.semantic.error};
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }
      `}
    
    ${disabled &&
      css`
        background-color: ${({ theme }) => theme.colors.gray.dark};
        border-color: ${({ theme }) => theme.colors.gray.dark};
        cursor: not-allowed;
        opacity: 0.6;
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
        
        &:focus {
          background-color: ${({ theme }) => theme.colors.gray.base};
          box-shadow: none;
        }
      `
    default:
      return baseStyles
  }
}

const TextAreaContainer = styled.div<{
  width?: string | number
}>`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
`

const Label = styled.label<{
  required?: boolean
  disabled?: boolean
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
  
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: ' *';
        color: ${({ theme }) => theme.colors.semantic.error};
      }
    `}
`

const StyledTextArea = styled.textarea<{
  variant: TextAreaProps['variant']
  size: TextAreaProps['size']
  error?: boolean
  disabled?: boolean
  autoResize?: boolean
  width?: string | number
  height?: string | number
}>`
  border-radius: ${({ theme }) => theme.radius.base};
  color: ${({ theme }) => theme.colors.foundation.white};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  min-height: 80px;
  
  ${({ size }) => getTextAreaSize(size)}
  ${({ variant, error, disabled }) => getTextAreaVariant(variant, error, disabled)}
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  
  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === 'number' ? `${height}px` : height};
    `}
  
  ${({ autoResize }) =>
    autoResize &&
    css`
      overflow: hidden;
      resize: none;
    `}
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.light};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  &:read-only {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`

const HelperText = styled.div<{
  error?: boolean
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  margin-top: ${({ theme }) => theme.spacing[2]};
  
  ${({ error, theme }) =>
    error
      ? css`
          color: ${theme.colors.semantic.error};
        `
      : css`
          color: ${theme.colors.gray.light};
        `}
`

const CharacterCount = styled.div<{
  isNearLimit?: boolean
  isOverLimit?: boolean
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  margin-top: ${({ theme }) => theme.spacing[2]};
  text-align: right;
  
  ${({ isOverLimit, isNearLimit, theme }) => {
    if (isOverLimit) {
      return css`
        color: ${theme.colors.semantic.error};
      `
    }
    if (isNearLimit) {
      return css`
        color: ${theme.colors.semantic.warning};
      `
    }
    return css`
      color: ${theme.colors.gray.light};
    `
  }}
`

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`

export const TextArea: React.FC<TextAreaProps> = ({
  value = '',
  onChange,
  placeholder,
  variant = 'default',
  size = 'md',
  rows,
  minRows = 3,
  maxRows,
  resize = 'vertical',
  autoResize = false,
  maxLength,
  showCharCount = false,
  disabled = false,
  error = false,
  required = false,
  readOnly = false,
  label,
  helperText,
  errorMessage,
  width,
  height,
  className,
  id,
  name,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  autoFocus,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  // Use controlled value or internal state
  const currentValue = onChange ? value : internalValue
  
  // Auto-resize functionality
  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea || !autoResize) return
    
    // Reset height to calculate scrollHeight
    textarea.style.height = 'auto'
    
    let newHeight = textarea.scrollHeight
    
    // Apply min/max constraints
    if (minRows) {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight)
      const padding = parseInt(getComputedStyle(textarea).paddingTop) + parseInt(getComputedStyle(textarea).paddingBottom)
      const minHeight = lineHeight * minRows + padding
      newHeight = Math.max(newHeight, minHeight)
    }
    
    if (maxRows) {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight)
      const padding = parseInt(getComputedStyle(textarea).paddingTop) + parseInt(getComputedStyle(textarea).paddingBottom)
      const maxHeight = lineHeight * maxRows + padding
      newHeight = Math.min(newHeight, maxHeight)
    }
    
    textarea.style.height = `${newHeight}px`
  }, [autoResize, minRows, maxRows])
  
  // Handle value changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    
    // Check max length
    if (maxLength && newValue.length > maxLength) {
      return
    }
    
    if (onChange) {
      onChange(newValue)
    } else {
      setInternalValue(newValue)
    }
    
    // Auto-resize after state update
    setTimeout(adjustHeight, 0)
  }
  
  // Initial auto-resize setup
  React.useEffect(() => {
    if (autoResize) {
      adjustHeight()
    }
  }, [adjustHeight, currentValue, autoResize])
  
  // Sync external value
  React.useEffect(() => {
    if (onChange) {
      setInternalValue(value)
    }
  }, [value, onChange])
  
  // Character count calculations
  const charCount = currentValue.length
  const isNearLimit = maxLength && charCount >= maxLength * 0.9
  const isOverLimit = maxLength && charCount > maxLength
  
  // Generate IDs for accessibility
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const helperTextId = `${textareaId}-helper`
  const errorId = `${textareaId}-error`
  
  const describedBy = [
    ariaDescribedBy,
    helperText && !error ? helperTextId : undefined,
    error && errorMessage ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(' ') || undefined
  
  return (
    <TextAreaContainer width={width} className={className}>
      {label && (
        <Label 
          htmlFor={textareaId}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
      
      <StyledTextArea
        ref={textareaRef}
        id={textareaId}
        name={name}
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        variant={variant}
        size={size}
        error={error}
        disabled={disabled}
        rows={rows || (autoResize ? minRows : undefined)}
        style={{
          resize: (autoResize ? 'none' : resize) as React.CSSProperties['resize'],
        }}
        width={width}
        height={height}
        autoResize={autoResize}
        required={required}
        readOnly={readOnly}
        maxLength={maxLength}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-invalid={error}
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        {...props}
      />
      
      {((helperText && !error) || (error && errorMessage) || showCharCount) && (
        <FooterRow>
          <div>
            {helperText && !error && (
              <HelperText id={helperTextId}>
                {helperText}
              </HelperText>
            )}
            {error && errorMessage && (
              <HelperText id={errorId} error>
                {errorMessage}
              </HelperText>
            )}
          </div>
          
          {showCharCount && maxLength && (
            <CharacterCount
              isNearLimit={!!isNearLimit}
              isOverLimit={!!isOverLimit}
            >
              {charCount}/{maxLength}
            </CharacterCount>
          )}
        </FooterRow>
      )}
    </TextAreaContainer>
  )
}