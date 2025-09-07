import React from 'react'
import styled from 'styled-components'
import { ConfigurableTemplateProps, TemplateConfig } from './types'

const StyledTemplate = styled.div<{ $config: TemplateConfig }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  ${({ $config, theme }) => {
    switch ($config.theme) {
      case 'dark':
        return `
          background-color: ${theme.colors.gray.dark};
          color: ${theme.colors.foundation.white};
        `
      case 'gaming':
        return `
          background: linear-gradient(135deg, 
            ${theme.colors.gray.dark} 0%, 
            ${theme.colors.gray.base} 100%);
          color: ${theme.colors.foundation.white};
        `
      case 'light':
      default:
        return `
          background-color: ${theme.colors.foundation.white};
          color: ${theme.colors.gray.dark};
        `
    }
  }}
  
  > * {
    ${({ $config }) => {
      switch ($config.spacing) {
        case 'compact':
          return 'margin-bottom: 0.5rem;'
        case 'relaxed':
          return 'margin-bottom: 2rem;'
        case 'normal':
        default:
          return 'margin-bottom: 1rem;'
      }
    }}
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${({ $config }) => {
    switch ($config.layout) {
      case 'narrow':
        return 'max-width: 800px; margin: 0 auto;'
      case 'full':
        return 'max-width: 100%; width: 100%;'
      case 'wide':
      default:
        return 'max-width: 1200px; margin: 0 auto;'
    }
  }}
`

const defaultConfig: TemplateConfig = {
  spacing: 'normal',
  theme: 'light',
  layout: 'wide'
}

export interface BaseTemplateProps extends ConfigurableTemplateProps {
  children: React.ReactNode
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ 
  children, 
  config = {}, 
  className,
  id 
}) => {
  const mergedConfig = { ...defaultConfig, ...config }
  
  return (
    <StyledTemplate 
      $config={mergedConfig}
      className={className}
      id={id}
    >
      {children}
    </StyledTemplate>
  )
}