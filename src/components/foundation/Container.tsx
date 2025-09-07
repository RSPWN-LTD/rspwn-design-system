import React from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { createShouldForwardProp } from '../../utils/propFilters'

type ResponsiveSpacing = keyof typeof import('../../tokens/spacing').spacing

type ResponsivePaddingValue = ResponsiveSpacing | {
  xs?: ResponsiveSpacing
  sm?: ResponsiveSpacing
  md?: ResponsiveSpacing
  lg?: ResponsiveSpacing
  xl?: ResponsiveSpacing
}

type BreakpointPadding = {
  paddingX?: ResponsiveSpacing
  paddingY?: ResponsiveSpacing
}

export interface ContainerProps extends Omit<BoxProps, 'maxWidth' | 'paddingX' | 'paddingY'> {
  // Legacy size prop (kept for backward compatibility)
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  
  // New variant system
  variant?: 'default' | 'prose' | 'narrow' | 'wide' | 'fluid'
  
  // Custom constraints
  maxWidth?: string | number
  minWidth?: string | number
  
  // Responsive padding system
  paddingX?: ResponsivePaddingValue
  paddingY?: ResponsivePaddingValue
  
  // Breakpoint-specific padding
  xs?: BreakpointPadding
  sm?: BreakpointPadding
  md?: BreakpointPadding
  lg?: BreakpointPadding
  xl?: BreakpointPadding
  
  // Gutter control
  disableGutters?: boolean
  gutters?: ResponsivePaddingValue
  
  // Legacy props
  centerContent?: boolean
  
  // Standard props
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getMaxWidth = (size: ContainerProps['size']) => {
  switch (size) {
    case 'sm':
      return '640px'
    case 'md':
      return '768px'
    case 'lg':
      return '1024px'
    case 'xl':
      return '1280px'
    case '2xl':
      return '1536px'
    case 'full':
      return '100%'
    default:
      return '1280px' // xl as default
  }
}

const getVariantMaxWidth = (variant: ContainerProps['variant']) => {
  switch (variant) {
    case 'prose':
      return '65ch' // Optimized for reading
    case 'narrow':
      return '48rem' // 768px - good for forms
    case 'wide':
      return '96rem' // 1536px - for dashboards
    case 'fluid':
      return '100%' // Full width
    default:
      return '1280px' // default - same as xl
  }
}

const getResponsivePadding = (
  value: ResponsivePaddingValue | undefined, 
  property: 'padding-left' | 'padding-right' | 'padding-top' | 'padding-bottom'
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

const getBreakpointPadding = (
  padding: BreakpointPadding | undefined,
  breakpoint: string
) => {
  if (!padding) return ''
  
  return css`
    @media (min-width: ${breakpoint}) {
      ${padding.paddingX && css`
        padding-left: ${({ theme }) => theme.spacing[padding.paddingX!]};
        padding-right: ${({ theme }) => theme.spacing[padding.paddingX!]};
      `}
      ${padding.paddingY && css`
        padding-top: ${({ theme }) => theme.spacing[padding.paddingY!]};
        padding-bottom: ${({ theme }) => theme.spacing[padding.paddingY!]};
      `}
    }
  `
}

const StyledContainer = styled(Box).withConfig({
  shouldForwardProp: createShouldForwardProp([
    'size', 'variant', 'maxWidth', 'minWidth', 'paddingX', 'paddingY', 
    'xs', 'sm', 'md', 'lg', 'xl', 'disableGutters', 'gutters', 'centerContent'
  ])
})<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  /* Max width - variant takes precedence over size */
  max-width: ${({ variant, size, maxWidth }) => {
    if (maxWidth) {
      return typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
    }
    return variant ? getVariantMaxWidth(variant) : getMaxWidth(size)
  }};
  
  /* Min width */
  ${({ minWidth }) => minWidth && css`
    min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
  `}
  
  /* Default gutters (can be overridden) */
  ${({ disableGutters, gutters, paddingX }) => {
    if (disableGutters) return ''
    
    // If custom gutters or paddingX is provided, use those
    if (gutters) {
      return css`
        ${getResponsivePadding(gutters, 'padding-left')}
        ${getResponsivePadding(gutters, 'padding-right')}
      `
    }
    
    if (paddingX) {
      return css`
        ${getResponsivePadding(paddingX, 'padding-left')}
        ${getResponsivePadding(paddingX, 'padding-right')}
      `
    }
    
    // Default responsive gutters
    return css`
      padding-left: ${({ theme }) => theme.spacing[4]};
      padding-right: ${({ theme }) => theme.spacing[4]};
      
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-left: ${({ theme }) => theme.spacing[6]};
        padding-right: ${({ theme }) => theme.spacing[6]};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-left: ${({ theme }) => theme.spacing[8]};
        padding-right: ${({ theme }) => theme.spacing[8]};
      }
    `
  }}
  
  /* Responsive paddingY */
  ${({ paddingY }) => paddingY && css`
    ${getResponsivePadding(paddingY, 'padding-top')}
    ${getResponsivePadding(paddingY, 'padding-bottom')}
  `}
  
  /* Breakpoint-specific padding */
  ${({ xs, theme }) => xs && getBreakpointPadding(xs, theme.breakpoints.xs)}
  ${({ sm, theme }) => sm && getBreakpointPadding(sm, theme.breakpoints.sm)}
  ${({ md, theme }) => md && getBreakpointPadding(md, theme.breakpoints.md)}
  ${({ lg, theme }) => lg && getBreakpointPadding(lg, theme.breakpoints.lg)}
  ${({ xl, theme }) => xl && getBreakpointPadding(xl, theme.breakpoints.xl)}
  
  /* Center content */
  ${({ centerContent }) => 
    centerContent && css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
  }
`

export const Container: React.FC<ContainerProps> = ({
  // Legacy props
  size = 'xl',
  centerContent = false,
  
  // New props
  variant,
  maxWidth,
  minWidth,
  paddingX,
  paddingY,
  xs,
  sm,
  md,
  lg,
  xl,
  disableGutters = false,
  gutters,
  
  children,
  ...props
}) => {
  return (
    <StyledContainer 
      size={size}
      variant={variant}
      maxWidth={maxWidth}
      minWidth={minWidth}
      paddingX={paddingX}
      paddingY={paddingY}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      disableGutters={disableGutters}
      gutters={gutters}
      centerContent={centerContent}
      {...props}
    >
      {children}
    </StyledContainer>
  )
}