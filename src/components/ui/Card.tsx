import React from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from '../foundation/Box'

export interface CardProps extends Omit<BoxProps, 'bg'> {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  hoverable?: boolean
  clickable?: boolean
  children: React.ReactNode
}

const getVariantStyles = (variant: CardProps['variant']) => {
  switch (variant) {
    case 'elevated':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.base};
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        box-shadow: ${({ theme }) => theme.shadows.lg};
      `
    case 'outlined':
      return css`
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
      `
    case 'filled':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.light};
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
      `
    default: // default
      return css`
        background-color: ${({ theme }) => theme.colors.gray.base};
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        box-shadow: ${({ theme }) => theme.shadows.base};
      `
  }
}

const StyledCard = styled(Box).withConfig({
  shouldForwardProp: (prop) => {
    // Let Box handle its own props, only filter Card-specific props
    return !['variant', 'hoverable', 'clickable'].includes(prop)
  }
})<CardProps>`
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  
  ${({ variant }) => getVariantStyles(variant)}
  
  ${({ hoverable }) => hoverable && css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.xl};
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}40;
    }
  `}
  
  ${({ clickable }) => clickable && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.xl};
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}40;
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: ${({ theme }) => theme.shadows.base};
    }
  `}
`

const CardHeader = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
`

const CardContent = styled(Box)``

const CardFooter = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
`

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader
  Content: typeof CardContent
  Footer: typeof CardFooter
} = ({
  variant = 'default',
  hoverable = false,
  clickable = false,
  children,
  p = 6,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      hoverable={hoverable}
      clickable={clickable}
      p={p}
      {...props}
    >
      {children}
    </StyledCard>
  )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter