import React from 'react'
import styled from 'styled-components'
import { SectionProps } from './types'

const StyledSection = styled.section<{ 
  $variant: SectionProps['variant']
  $background: SectionProps['background']
  $padding: SectionProps['padding']
}>`
  width: 100%;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'hero':
        return `
          padding: ${theme.spacing['16']} ${theme.spacing['4']};
          text-align: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['24']} ${theme.spacing['8']};
          }
        `
      case 'feature':
        return `
          padding: ${theme.spacing['12']} ${theme.spacing['4']};
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['16']} ${theme.spacing['8']};
          }
        `
      case 'content':
        return `
          padding: ${theme.spacing['8']} ${theme.spacing['4']};
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['12']} ${theme.spacing['8']};
          }
        `
      case 'accent':
        return `
          padding: ${theme.spacing['12']} ${theme.spacing['4']};
          text-align: center;
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['16']} ${theme.spacing['8']};
          }
        `
      case 'footer':
        return `
          padding: ${theme.spacing['8']} ${theme.spacing['4']};
          margin-top: auto;
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['12']} ${theme.spacing['8']};
          }
        `
      case 'sidebar':
        return `
          padding: ${theme.spacing['6']} ${theme.spacing['4']};
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['8']} ${theme.spacing['6']};
          }
        `
      default:
        return `
          padding: ${theme.spacing['8']} ${theme.spacing['4']};
          
          @media (min-width: ${theme.breakpoints.md}) {
            padding: ${theme.spacing['8']} ${theme.spacing['8']};
          }
        `
    }
  }}
  
  ${({ $background, theme }) => {
    switch ($background) {
      case 'subtle':
        return `background-color: ${theme.colors.gray.light};`
      case 'dark':
        return `
          background-color: ${theme.colors.gray.dark};
          color: ${theme.colors.foundation.white};
        `
      case 'accent':
        return `
          background-color: ${theme.colors.innovation.primaryBlue};
          color: ${theme.colors.foundation.white};
        `
      case 'transparent':
        return 'background-color: transparent;'
      case 'default':
      default:
        return `background-color: ${theme.colors.foundation.white};`
    }
  }}
  
  ${({ $padding, theme }) => {
    if ($padding) {
      switch ($padding) {
        case 'none':
          return 'padding: 0;'
        case 'sm':
          return `padding: ${theme.spacing['4']};`
        case 'md':
          return `padding: ${theme.spacing['6']};`
        case 'lg':
          return `padding: ${theme.spacing['8']};`
        case 'xl':
          return `padding: ${theme.spacing['12']};`
        default:
          return ''
      }
    }
    return ''
  }}
`

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'content',
  background = 'default',
  padding,
  as = 'section',
  className,
  id
}) => {
  return (
    <StyledSection
      as={as}
      $variant={variant}
      $background={background}
      $padding={padding}
      className={className}
      id={id}
    >
      {children}
    </StyledSection>
  )
}