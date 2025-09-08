import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from './Container'

export type SectionVariant = 'default' | 'hero' | 'feature' | 'content' | 'footer'

export interface SectionProps {
  variant?: SectionVariant
  children?: React.ReactNode
  className?: string
  as?: 'section' | 'header' | 'main' | 'aside' | 'footer' | 'article'
}

const getVariantStyles = (variant: SectionVariant) => {
  switch (variant) {
    case 'hero':
      return css`
        background-color: ${({ theme }) => theme.colors.foundation.black};
        padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[6]};
        min-height: 100vh;
        display: flex;
        align-items: center;
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[8]};
        }
      `
    case 'feature':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.dark};
        padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[8]};
        }
      `
    case 'content':
      return css`
        background-color: transparent;
        padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
        }
      `
    case 'footer':
      return css`
        background-color: ${({ theme }) => theme.colors.foundation.black};
        border-top: 1px solid ${({ theme }) => theme.colors.gray.base}40;
        padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
        }
      `
    default: // 'default'
      return css`
        background-color: transparent;
        padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[8]};
        }
      `
  }
}

const StyledSection = styled.div<SectionProps>`
  width: 100%;
  box-sizing: border-box;
  
  ${({ variant = 'default' }) => getVariantStyles(variant)}
`

export const Section: React.FC<SectionProps> = ({ 
  as = 'section', 
  variant = 'default', 
  children, 
  ...props 
}) => {
  // Each section variant includes its own appropriate container
  const sectionContent = variant === 'hero' || variant === 'feature' || variant === 'footer' ? (
    <Container variant={variant === 'hero' ? 'default' : variant === 'footer' ? 'wide' : 'default'}>
      {children}
    </Container>
  ) : variant === 'content' ? (
    <Container variant="prose">
      {children}
    </Container>
  ) : (
    <Container>
      {children}
    </Container>
  )
  
  return (
    <StyledSection as={as} variant={variant} {...props}>
      {sectionContent}
    </StyledSection>
  )
}