import React from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { Container, ContainerProps } from './Container'
import { createShouldForwardProp } from '../../utils/propFilters'

type ResponsiveSpacing = keyof typeof import('../../tokens/spacing').spacing

type ResponsivePaddingValue = ResponsiveSpacing | {
  xs?: ResponsiveSpacing
  sm?: ResponsiveSpacing
  md?: ResponsiveSpacing
  lg?: ResponsiveSpacing
  xl?: ResponsiveSpacing
}

export interface SectionProps extends Omit<BoxProps, 'as' | 'paddingY' | 'marginY'> {
  // Semantic element type
  as?: 'section' | 'header' | 'main' | 'aside' | 'footer' | 'article'
  
  // Layout variants
  variant?: 'default' | 'hero' | 'feature' | 'content' | 'footer'
  
  // Container integration
  container?: boolean | ContainerProps['size'] | ContainerProps['variant']
  
  // Spacing system
  paddingY?: ResponsivePaddingValue
  marginY?: ResponsivePaddingValue
  
  // Background options
  background?: 'default' | 'subtle' | 'accent' | 'dark' | 'transparent'
  
  // Borders
  bordered?: boolean | 'top' | 'bottom' | 'both'
  
  // Full-height sections
  minHeight?: 'screen' | 'auto' | string
  
  // Standard props
  children?: React.ReactNode
  className?: string
}

const sectionVariants = {
  default: {
    paddingY: { xs: 8, lg: 12 } as ResponsivePaddingValue,
    background: 'transparent' as const
  },
  hero: {
    paddingY: { xs: 16, lg: 24 } as ResponsivePaddingValue,
    minHeight: '100vh',
    background: 'dark' as const
  },
  feature: {
    paddingY: { xs: 12, lg: 20 } as ResponsivePaddingValue,
    background: 'subtle' as const
  },
  content: {
    paddingY: { xs: 8, lg: 12 } as ResponsivePaddingValue,
    background: 'transparent' as const
  },
  footer: {
    paddingY: { xs: 8, lg: 10 } as ResponsivePaddingValue,
    background: 'dark' as const,
    bordered: 'top' as const
  }
}

const getBackgroundColor = (background: SectionProps['background']) => {
  switch (background) {
    case 'subtle':
      return css`background-color: ${({ theme }) => theme.colors.gray.light};`
    case 'accent':
      return css`background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};`
    case 'dark':
      return css`background-color: ${({ theme }) => theme.colors.gray.dark};`
    case 'transparent':
      return css`background-color: transparent;`
    default:
      return css`background-color: ${({ theme }) => theme.colors.foundation.white};`
  }
}

const getBorders = (bordered: SectionProps['bordered']) => {
  if (!bordered) return ''
  
  const borderStyle = css`1px solid ${({ theme }) => theme.colors.gray.base}`
  
  switch (bordered) {
    case 'top':
      return css`border-top: ${borderStyle};`
    case 'bottom':
      return css`border-bottom: ${borderStyle};`
    case 'both':
      return css`
        border-top: ${borderStyle};
        border-bottom: ${borderStyle};
      `
    default:
      return css`
        border-top: ${borderStyle};
        border-bottom: ${borderStyle};
      `
  }
}

const getResponsivePadding = (
  value: ResponsivePaddingValue | undefined, 
  property: 'padding-top' | 'padding-bottom' | 'margin-top' | 'margin-bottom'
) => {
  if (!value) return ''
  
  if (typeof value === 'string' || typeof value === 'number') {
    return css`${property}: ${({ theme }) => theme.spacing[value as ResponsiveSpacing]};`
  }
  
  return css`
    ${value.xs && css`${property}: ${({ theme }) => theme.spacing[value.xs!]};`}
    ${value.sm && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        ${property}: ${({ theme }) => theme.spacing[value.sm!]};
      }
    `}
    ${value.md && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        ${property}: ${({ theme }) => theme.spacing[value.md!]};
      }
    `}
    ${value.lg && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        ${property}: ${({ theme }) => theme.spacing[value.lg!]};
      }
    `}
    ${value.xl && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        ${property}: ${({ theme }) => theme.spacing[value.xl!]};
      }
    `}
  `
}

const getMinHeight = (minHeight: SectionProps['minHeight']) => {
  switch (minHeight) {
    case 'screen':
      return css`min-height: 100vh;`
    case 'auto':
      return css`min-height: auto;`
    default:
      return minHeight ? css`min-height: ${minHeight};` : ''
  }
}

const StyledSection = styled(Box).withConfig({
  shouldForwardProp: createShouldForwardProp([
    'variant', 'container', 'paddingY', 'marginY', 'background', 'bordered', 'minHeight'
  ])
})<SectionProps>`
  width: 100%;
  
  /* Background */
  ${({ background }) => getBackgroundColor(background)}
  
  /* Borders */
  ${({ bordered }) => getBorders(bordered)}
  
  /* Min height */
  ${({ minHeight }) => getMinHeight(minHeight)}
  
  /* Responsive paddingY */
  ${({ paddingY }) => paddingY && css`
    ${getResponsivePadding(paddingY, 'padding-top')}
    ${getResponsivePadding(paddingY, 'padding-bottom')}
  `}
  
  /* Responsive marginY */
  ${({ marginY }) => marginY && css`
    ${getResponsivePadding(marginY, 'margin-top')}
    ${getResponsivePadding(marginY, 'margin-bottom')}
  `}
`

export const Section: React.FC<SectionProps> = ({
  as = 'section',
  variant = 'default',
  container = false,
  paddingY,
  marginY,
  background,
  bordered,
  minHeight,
  children,
  ...props
}) => {
  // Get variant configuration
  const variantConfig = sectionVariants[variant]
  
  // Merge props with variant defaults
  const finalPaddingY = paddingY ?? variantConfig.paddingY
  const finalBackground = background ?? variantConfig.background
  const finalBordered = bordered ?? (variantConfig as any).bordered
  const finalMinHeight = minHeight ?? (variantConfig as any).minHeight
  
  const sectionContent = container ? (
    <Container
      size={typeof container === 'boolean' ? 'xl' : container as ContainerProps['size']}
      variant={typeof container === 'string' && ['prose', 'narrow', 'wide', 'fluid'].includes(container) ? container as ContainerProps['variant'] : undefined}
    >
      {children}
    </Container>
  ) : children
  
  return (
    <StyledSection
      as={as}
      variant={variant}
      paddingY={finalPaddingY}
      marginY={marginY}
      background={finalBackground}
      bordered={finalBordered}
      minHeight={finalMinHeight}
      {...props}
    >
      {sectionContent}
    </StyledSection>
  )
}