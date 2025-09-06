import React from 'react'
import styled, { css } from 'styled-components'
import { propFilters } from '../../utils/propFilters'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const getVariantStyles = (variant: ButtonProps['variant'], disabled?: boolean) => {
  if (disabled) {
    return css`
      background-color: ${({ theme }) => theme.colors.gray.light};
      color: ${({ theme }) => theme.colors.text.muted};
      border: 1px solid ${({ theme }) => theme.colors.gray.light};
      cursor: not-allowed;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.text.muted};
        border-color: ${({ theme }) => theme.colors.gray.light};
      }
    `
  }

  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.base};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        
        &:hover {
          background-color: ${({ theme }) => theme.colors.gray.light};
          border-color: ${({ theme }) => theme.colors.gray.light};
        }
        
        &:active {
          background-color: ${({ theme }) => theme.colors.gray.dark};
        }
      `
    case 'outline':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        border: 1px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
        
        &:hover {
          background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          color: ${({ theme }) => theme.colors.foundation.white};
        }
        
        &:active {
          background-color: rgba(74, 158, 255, 0.8);
        }
      `
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid transparent;
        
        &:hover {
          background-color: ${({ theme }) => theme.colors.gray.base};
        }
        
        &:active {
          background-color: ${({ theme }) => theme.colors.gray.light};
        }
      `
    case 'danger':
      return css`
        background-color: ${({ theme }) => theme.colors.semantic.error};
        color: ${({ theme }) => theme.colors.foundation.white};
        border: 1px solid ${({ theme }) => theme.colors.semantic.error};
        
        &:hover {
          background-color: rgba(239, 68, 68, 0.9);
          border-color: rgba(239, 68, 68, 0.9);
        }
        
        &:active {
          background-color: rgba(239, 68, 68, 0.8);
        }
      `
    default: // primary
      return css`
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        color: ${({ theme }) => theme.colors.foundation.white};
        border: 1px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
        
        &:hover {
          background-color: rgba(74, 158, 255, 0.9);
          border-color: rgba(74, 158, 255, 0.9);
          transform: translateY(-1px);
          box-shadow: ${({ theme }) => theme.shadows.md};
        }
        
        &:active {
          background-color: rgba(74, 158, 255, 0.8);
          transform: translateY(0);
          box-shadow: ${({ theme }) => theme.shadows.sm};
        }
      `
  }
}

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        height: 32px;
      `
    case 'lg':
      return css`
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        height: 48px;
      `
    default: // md
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        height: 40px;
      `
  }
}

const StyledButton = styled.button.withConfig({
  shouldForwardProp: propFilters.button
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: 1;
  
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  ${({ variant, disabled }) => getVariantStyles(variant, disabled)}
  ${({ size }) => getSizeStyles(size)}
  
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  ${({ loading }) => loading && css`
    cursor: wait;
    opacity: 0.7;
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }
  
  &:disabled {
    ${({ variant }) => getVariantStyles(variant, true)}
  }
`

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  )
}