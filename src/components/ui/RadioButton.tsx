import React from 'react'
import styled, { css } from 'styled-components'

export interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
  icon?: React.ReactNode
}

export interface RadioButtonProps {
  // Single radio button props
  value?: string
  checked?: boolean
  onChange?: (checked: boolean, value: string) => void
  label?: string
  description?: string
  disabled?: boolean
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'card' | 'button'
  
  // Standard props
  className?: string
  id?: string
  name?: string
  required?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
}

export interface RadioGroupProps {
  // Group configuration
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  name?: string
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'card' | 'button'
  orientation?: 'horizontal' | 'vertical'
  
  // States
  disabled?: boolean
  required?: boolean
  error?: boolean
  
  // Labels and help text
  label?: string
  helperText?: string
  errorMessage?: string
  
  // Standard props
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

const getRadioSize = (size: RadioButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        .radio-indicator {
          width: 16px;
          height: 16px;
        }
        
        .radio-content {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
          gap: ${({ theme }) => theme.spacing[2]};
        }
        
        .radio-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .radio-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
    case 'lg':
      return css`
        .radio-indicator {
          width: 24px;
          height: 24px;
        }
        
        .radio-content {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
          gap: ${({ theme }) => theme.spacing[4]};
        }
        
        .radio-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .radio-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
      `
    default:
      return css`
        .radio-indicator {
          width: 20px;
          height: 20px;
        }
        
        .radio-content {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
          gap: ${({ theme }) => theme.spacing[3]};
        }
        
        .radio-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .radio-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
  }
}

const RadioContainer = styled.label<{
  size: RadioButtonProps['size']
  variant: RadioButtonProps['variant']
  disabled?: boolean
  checked?: boolean
}>`
  display: flex;
  align-items: flex-start;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ size }) => getRadioSize(size)}
  
  ${({ variant, checked, theme }) => {
    switch (variant) {
      case 'card':
        return css`
          padding: ${theme.spacing[4]};
          border: 1px solid ${theme.colors.gray.light};
          border-radius: ${theme.radius.base};
          background: ${checked ? 'rgba(74, 158, 255, 0.1)' : theme.colors.gray.base};
          
          ${checked &&
            css`
              border-color: ${theme.colors.innovation.primaryBlue};
            `}
          
          &:hover:not([disabled]) {
            border-color: ${theme.colors.innovation.primaryBlue};
            background: ${checked ? 'rgba(74, 158, 255, 0.15)' : 'rgba(74, 158, 255, 0.05)'};
          }
          
          &:focus-within {
            outline: 2px solid ${theme.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
        `
      case 'button':
        return css`
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          border: 1px solid ${theme.colors.gray.light};
          border-radius: ${theme.radius.base};
          background: ${checked ? theme.colors.innovation.primaryBlue : 'transparent'};
          color: ${checked ? theme.colors.foundation.white : theme.colors.foundation.white};
          justify-content: center;
          
          &:hover:not([disabled]) {
            background: ${checked ? theme.colors.innovation.primaryBlue : 'rgba(74, 158, 255, 0.1)'};
            border-color: ${theme.colors.innovation.primaryBlue};
          }
          
          &:focus-within {
            outline: 2px solid ${theme.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
          
          .radio-indicator {
            display: none;
          }
        `
      default:
        return css`
          &:hover:not([disabled]) .radio-indicator {
            border-color: ${theme.colors.innovation.primaryBlue};
          }
          
          &:focus-within .radio-indicator {
            outline: 2px solid ${theme.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
        `
    }
  }}
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

const RadioIndicator = styled.div<{
  checked?: boolean
}>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray.base};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  flex-shrink: 0;
  
  ${({ checked, theme }) =>
    checked &&
    css`
      border-color: ${theme.colors.innovation.primaryBlue};
      background: ${theme.colors.innovation.primaryBlue};
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background: ${theme.colors.foundation.white};
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`

const RadioContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
`

const RadioLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
  line-height: ${({ theme }) => theme.typography.lineHeights.snug};
`

const RadioDescription = styled.span`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin-top: ${({ theme }) => theme.spacing[1]};
`

const RadioIcon = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-right: ${({ theme }) => theme.spacing[2]};
`

export const RadioButton: React.FC<RadioButtonProps> = ({
  value = '',
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
  variant = 'default',
  className,
  id,
  name,
  required = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, value)
  }
  
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <RadioContainer
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      checked={checked}
      htmlFor={radioId}
      {...props}
    >
      <RadioInput
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      />
      
      <RadioIndicator
        className="radio-indicator"
        checked={checked}
      />
      
      {(label || description) && (
        <RadioContent className="radio-content">
          {label && (
            <RadioLabel className="radio-label">{label}</RadioLabel>
          )}
          {description && (
            <RadioDescription className="radio-description">
              {description}
            </RadioDescription>
          )}
        </RadioContent>
      )}
    </RadioContainer>
  )
}

// RadioGroup Component
const GroupContainer = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.body};
`

const GroupLabel = styled.legend<{
  required?: boolean
  disabled?: boolean
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: block;
  
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

const GroupFieldset = styled.fieldset<{
  orientation: RadioGroupProps['orientation']
  variant: RadioGroupProps['variant']
}>`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ theme, variant }) => {
    switch (variant) {
      case 'button':
        return theme.spacing[2]
      case 'card':
        return theme.spacing[3]
      default:
        return theme.spacing[4]
    }
  }};
  
  ${({ orientation, variant }) =>
    orientation === 'horizontal' && variant === 'button' &&
    css`
      flex-wrap: wrap;
    `}
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

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  size = 'md',
  variant = 'default',
  orientation = 'vertical',
  disabled = false,
  required = false,
  error = false,
  label,
  helperText,
  errorMessage,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const handleChange = (optionValue: string) => {
    onChange?.(optionValue)
  }
  
  const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`
  const helperTextId = `${groupId}-helper`
  const errorId = `${groupId}-error`
  
  const describedBy = [
    ariaDescribedBy,
    helperText && !error ? helperTextId : undefined,
    error && errorMessage ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(' ') || undefined
  
  return (
    <GroupContainer className={className} {...props}>
      <GroupFieldset
        orientation={orientation}
        variant={variant}
        aria-label={ariaLabel || label}
        aria-describedby={describedBy}
        aria-invalid={error}
        disabled={disabled}
      >
        {label && (
          <GroupLabel required={required} disabled={disabled}>
            {label}
          </GroupLabel>
        )}
        
        {options.map((option, index) => (
          <RadioContainer
            key={option.value}
            size={size}
            variant={variant}
            disabled={disabled || option.disabled}
            checked={value === option.value}
            htmlFor={`${groupId}-${index}`}
          >
            <RadioInput
              id={`${groupId}-${index}`}
              name={name || groupId}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled || option.disabled}
              required={required}
            />
            
            {variant !== 'button' && (
              <RadioIndicator
                className="radio-indicator"
                checked={value === option.value}
              />
            )}
            
            <RadioContent className="radio-content">
              {option.icon && variant !== 'button' && (
                <RadioIcon>{option.icon}</RadioIcon>
              )}
              <div>
                <RadioLabel className="radio-label">
                  {option.icon && variant === 'button' && (
                    <RadioIcon style={{ display: 'inline-flex', marginRight: '8px', marginBottom: '0' }}>
                      {option.icon}
                    </RadioIcon>
                  )}
                  {option.label}
                </RadioLabel>
                {option.description && (
                  <RadioDescription className="radio-description">
                    {option.description}
                  </RadioDescription>
                )}
              </div>
            </RadioContent>
          </RadioContainer>
        ))}
      </GroupFieldset>
      
      {((helperText && !error) || (error && errorMessage)) && (
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
      )}
    </GroupContainer>
  )
}