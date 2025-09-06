import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { propFilters } from '../../utils/propFilters'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  fullWidth?: boolean
  label?: string
  helperText?: string
  errorText?: string
}

const getVariantStyles = (variant: InputProps['variant'], error?: boolean) => {
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

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.muted};
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

const getSizeStyles = (size: InputProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        height: 32px;
      `
    case 'lg':
      return css`
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        height: 48px;
      `
    default: // md
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        height: 40px;
      `
  }
}

const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth'].includes(prop)
})<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`

const StyledInput = styled.input.withConfig({
  shouldForwardProp: propFilters.input
})<InputProps>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  ${({ variant, error }) => getVariantStyles(variant, error)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
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

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  size = 'md',
  error = false,
  fullWidth = false,
  label,
  helperText,
  errorText,
  className,
  ...props
}, ref) => {
  const displayHelperText = error && errorText ? errorText : helperText

  return (
    <InputWrapper fullWidth={fullWidth} className={className}>
      {label && <Label>{label}</Label>}
      <StyledInput
        ref={ref}
        variant={variant}
        size={size}
        error={error}
        fullWidth={fullWidth}
        {...props}
      />
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
    </InputWrapper>
  )
})

Input.displayName = 'Input'