import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  fullWidth?: boolean
  label?: string
  helperText?: string
  errorText?: string
  options: SelectOption[]
  placeholder?: string
}

const getVariantStyles = (variant: SelectProps['variant'], error?: boolean) => {
  const errorStyles = css`
    border-color: ${({ theme }) => theme.colors.semantic.error};
    &:focus {
      border-color: ${({ theme }) => theme.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.semantic.error}40;
    }
  `

  const baseStyles = css`
    background-color: ${({ theme }) => theme.colors.gray.base};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray.dark};
      border-color: ${({ theme }) => theme.colors.gray.base};
      color: ${({ theme }) => theme.colors.text.muted};
      cursor: not-allowed;
    }
  `

  switch (variant) {
    case 'filled':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.light};
        border: 1px solid transparent;
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
          background-color: ${({ theme }) => theme.colors.gray.light};
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          background-color: ${({ theme }) => theme.colors.gray.base};
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: ${({ theme }) => theme.colors.gray.dark};
          border-color: transparent;
          color: ${({ theme }) => theme.colors.text.muted};
          cursor: not-allowed;
        }

        ${error && errorStyles}
      `
    case 'outline':
      return css`
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: transparent;
          border-color: ${({ theme }) => theme.colors.gray.base};
          color: ${({ theme }) => theme.colors.text.muted};
          cursor: not-allowed;
        }

        ${error && errorStyles}
      `
    default:
      return css`
        ${baseStyles}
        ${error && errorStyles}
      `
  }
}

const getSizeStyles = (size: SelectProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        height: 32px;
      `
    case 'lg':
      return css`
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        height: 48px;
      `
    default: // md
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        height: 40px;
      `
  }
}

const SelectWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`

const SelectContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: inline-block;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`

interface StyledSelectProps extends Omit<SelectProps, 'options' | 'label' | 'helperText' | 'errorText'> {}

const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  cursor: pointer;
  
  ${({ variant, error }) => getVariantStyles(variant, error)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}

  &:disabled {
    cursor: not-allowed;
  }

  option {
    background-color: ${({ theme }) => theme.colors.gray.base};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing[2]};

    &:disabled {
      color: ${({ theme }) => theme.colors.text.muted};
    }

    &:checked {
      background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
    }
  }
`

const ChevronIcon = styled.div<{ size?: SelectProps['size'] }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  width: ${({ size }) => {
    switch (size) {
      case 'sm': return '12px'
      case 'lg': return '16px'
      default: return '14px'
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'sm': return '12px'
      case 'lg': return '16px'
      default: return '14px'
    }
  }};
  
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: ${({ size }) => {
      switch (size) {
        case 'sm': return '4px'
        case 'lg': return '6px'
        default: return '5px'
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'sm': return '4px'
        case 'lg': return '6px'
        default: return '5px'
      }
    }};
    border-right: 2px solid ${({ theme }) => theme.colors.text.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary};
  }
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`

const HelperText = styled.span<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ error, theme }) => 
    error ? theme.colors.semantic.error : theme.colors.text.muted
  };
`

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  variant = 'default',
  size = 'md',
  error = false,
  fullWidth = false,
  label,
  helperText,
  errorText,
  options,
  placeholder,
  className,
  ...props
}, ref) => {
  const displayHelperText = error && errorText ? errorText : helperText

  return (
    <SelectWrapper fullWidth={fullWidth} className={className}>
      {label && <Label>{label}</Label>}
      <SelectContainer fullWidth={fullWidth}>
        <StyledSelect
          ref={ref}
          variant={variant}
          size={size}
          error={error}
          fullWidth={fullWidth}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <ChevronIcon size={size} />
      </SelectContainer>
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
    </SelectWrapper>
  )
})

Select.displayName = 'Select'