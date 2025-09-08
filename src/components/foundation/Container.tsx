import React from 'react'
import styled, { css } from 'styled-components'

export type ContainerVariant = 'default' | 'narrow' | 'wide' | 'prose' | 'full'

export interface ContainerProps {
  variant?: ContainerVariant
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getVariantStyles = (variant: ContainerVariant) => {
  switch (variant) {
    case 'narrow':
      return css`
        max-width: min(48rem, 100vw); /* 768px - perfect for forms and focused content */
        margin: 0 auto;
        padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        }
      `
    case 'wide':
      return css`
        max-width: min(96rem, 100vw); /* 1536px - for dashboards and data-heavy layouts */
        margin: 0 auto;
        padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        }
        
        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
          padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[8]};
        }
      `
    case 'prose':
      return css`
        max-width: min(65ch, 100vw); /* Optimal reading width in character units */
        margin: 0 auto;
        padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[6]};
        }
      `
    case 'full':
      return css`
        max-width: 100%;
        width: 100%;
        padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        }
      `
    default: // 'default'
      return css`
        max-width: min(80rem, 100vw); /* 1280px - standard container width */
        margin: 0 auto;
        padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        }
        
        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
          padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[8]};
        }
      `
  }
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  box-sizing: border-box;
  
  ${({ variant = 'default' }) => getVariantStyles(variant)}
`

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}