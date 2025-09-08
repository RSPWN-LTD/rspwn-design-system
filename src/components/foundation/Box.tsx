import React from 'react'
import styled, { css } from 'styled-components'

export type BoxVariant = 'default' | 'card' | 'section' | 'inline'

export interface BoxProps {
  variant?: BoxVariant
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  as?: keyof JSX.IntrinsicElements
}

const getVariantStyles = (variant: BoxVariant) => {
  switch (variant) {
    case 'card':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.dark};
        border-radius: ${({ theme }) => theme.radius.lg};
        padding: ${({ theme }) => theme.spacing[6]};
        border: 1px solid ${({ theme }) => theme.colors.gray.light}20;
      `
    case 'section':
      return css`
        background-color: ${({ theme }) => theme.colors.foundation.black};
        padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        margin-bottom: ${({ theme }) => theme.spacing[6]};
      `
    case 'inline':
      return css`
        display: inline-block;
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        background-color: ${({ theme }) => theme.colors.gray.base};
        border-radius: ${({ theme }) => theme.radius.base};
      `
    default: // 'default'
      return css`
        display: block;
        padding: ${({ theme }) => theme.spacing[4]};
        background-color: transparent;
      `
  }
}

const StyledBox = styled.div<BoxProps>`
  box-sizing: border-box;
  
  ${({ variant = 'default' }) => getVariantStyles(variant)}
  
  ${({ onClick }) => onClick && css`
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.9;
    }
    
    &:active {
      opacity: 0.8;
    }
  `}
`

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}