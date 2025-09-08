import React from 'react'
import styled from 'styled-components'
import { Container } from '../../foundation/Container'

export type BaseTemplateVariant = 'app' | 'website' | 'fullscreen'

export interface BaseTemplateProps {
  variant?: BaseTemplateVariant
  children: React.ReactNode
  className?: string
}

const StyledTemplate = styled.div<{ $variant: BaseTemplateVariant }>`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  box-sizing: border-box;
  overflow-x: hidden;
  
  ${({ $variant }) => $variant === 'fullscreen' && `
    width: 100%;
    max-width: 100vw;
  `}
`

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ 
  variant = 'app',
  children, 
  className
}) => {
  if (variant === 'fullscreen') {
    return (
      <StyledTemplate $variant={variant} className={className}>
        {children}
      </StyledTemplate>
    )
  }

  return (
    <StyledTemplate $variant={variant} className={className}>
      <Container variant={variant === 'website' ? 'wide' : 'default'}>
        {children}
      </Container>
    </StyledTemplate>
  )
}