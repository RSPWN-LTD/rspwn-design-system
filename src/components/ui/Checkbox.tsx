import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  label?: string
  helperText?: string
  errorText?: string
  indeterminate?: boolean
}

const getSizeStyles = (size: CheckboxProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        width: 16px;
        height: 16px;
      `
    case 'lg':
      return css`
        width: 24px;
        height: 24px;
      `
    default: // md
      return css`
        width: 20px;
        height: 20px;
      `
  }
}

const CheckboxWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  
  &:hover {
    input:not(:disabled) + span {
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
    }
  }
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`

const StyledCheckbox = styled.span<{ 
  checked?: boolean
  indeterminate?: boolean
  error?: boolean
  disabled?: boolean
  size?: CheckboxProps['size']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  background-color: ${({ theme }) => theme.colors.gray.base};
  border: 2px solid ${({ theme, error }) => 
    error ? theme.colors.semantic.error : theme.colors.gray.light
  };
  border-radius: ${({ theme }) => theme.radius.sm};
  
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  ${({ size }) => getSizeStyles(size)}
  
  ${({ checked, indeterminate, theme }) => (checked || indeterminate) && css`
    background-color: ${theme.colors.innovation.primaryBlue};
    border-color: ${theme.colors.innovation.primaryBlue};
  `}
  
  ${({ disabled, theme }) => disabled && css`
    background-color: ${theme.colors.gray.dark};
    border-color: ${theme.colors.gray.base};
    cursor: not-allowed;
    
    ${({ checked, indeterminate }) => (checked || indeterminate) && css`
      background-color: ${theme.colors.text.muted};
      border-color: ${theme.colors.text.muted};
    `}
  `}
  
  ${HiddenCheckbox}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme, error }) => 
      error ? theme.colors.semantic.error : theme.colors.innovation.primaryBlue
    }40;
  }

  &::after {
    content: '';
    display: ${({ checked, indeterminate }) => (checked || indeterminate) ? 'block' : 'none'};
    width: ${({ size }) => {
      switch (size) {
        case 'sm': return '8px'
        case 'lg': return '12px'
        default: return '10px'
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'sm': return '8px'
        case 'lg': return '12px'
        default: return '10px'
      }
    }};
    
    ${({ indeterminate, theme }) => indeterminate ? css`
      background-color: ${theme.colors.foundation.white};
      height: 2px;
      border-radius: 1px;
    ` : css`
      border: solid ${theme.colors.foundation.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      width: ${({ size }) => {
        switch (size) {
          case 'sm': return '4px'
          case 'lg': return '6px'
          default: return '5px'
        }
      }};
      height: ${({ size }) => {
        switch (size) {
          case 'sm': return '8px'
          case 'lg': return '10px'
          default: return '9px'
        }
      }};
      margin-top: -2px;
    `}
  }
`

const LabelText = styled.span<{ disabled?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, disabled }) => 
    disabled ? theme.colors.text.muted : theme.colors.text.primary
  };
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

const HelperText = styled.span<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ error, theme }) => 
    error ? theme.colors.semantic.error : theme.colors.text.muted
  };
  margin-left: ${({ theme }) => theme.spacing[6]}; // Align with checkbox content
`

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  size = 'md',
  error = false,
  label,
  helperText,
  errorText,
  indeterminate = false,
  disabled = false,
  checked = false,
  className,
  ...props
}, ref) => {
  const displayHelperText = error && errorText ? errorText : helperText

  React.useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.indeterminate = indeterminate
    }
  }, [ref, indeterminate])

  return (
    <CheckboxWrapper className={className}>
      <CheckboxContainer>
        <HiddenCheckbox
          ref={ref}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <StyledCheckbox
          checked={checked}
          indeterminate={indeterminate}
          error={error}
          disabled={disabled}
          size={size}
        />
        {label && (
          <LabelText disabled={disabled}>
            {label}
          </LabelText>
        )}
      </CheckboxContainer>
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
    </CheckboxWrapper>
  )
})

Checkbox.displayName = 'Checkbox'