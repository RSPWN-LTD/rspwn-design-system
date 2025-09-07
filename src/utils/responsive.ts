import { css } from 'styled-components'
import { theme } from '../tokens/theme'

/**
 * Extended breakpoint system with semantic names
 */
export const breakpoints = {
  ...theme.breakpoints,
  // Semantic breakpoints for better developer experience
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
} as const

export type Breakpoint = keyof typeof breakpoints

/**
 * Responsive value type that can be a single value or breakpoint-specific values
 */
export type ResponsiveValue<T> = T | {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
  mobile?: T
  tablet?: T
  desktop?: T
  wide?: T
}

/**
 * Media query utilities for different breakpoint conditions
 */
export const mediaQueries = {
  /**
   * Creates a media query for screen widths at or above the specified breakpoint
   */
  up: (breakpoint: Breakpoint) => `@media (min-width: ${breakpoints[breakpoint]})`,
  
  /**
   * Creates a media query for screen widths below the specified breakpoint
   */
  down: (breakpoint: Breakpoint) => {
    const value = parseInt(breakpoints[breakpoint])
    return `@media (max-width: ${value - 1}px)`
  },
  
  /**
   * Creates a media query for screen widths only at the specified breakpoint range
   */
  only: (breakpoint: Breakpoint) => {
    const breakpointOrder: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    const currentIndex = breakpointOrder.indexOf(breakpoint as any)
    
    if (currentIndex === -1) {
      // For semantic breakpoints, fall back to 'up' behavior
      return mediaQueries.up(breakpoint)
    }
    
    const nextBreakpoint = breakpointOrder[currentIndex + 1]
    if (!nextBreakpoint) {
      return mediaQueries.up(breakpoint)
    }
    
    const currentValue = parseInt(breakpoints[breakpoint])
    const nextValue = parseInt(breakpoints[nextBreakpoint])
    return `@media (min-width: ${currentValue}px) and (max-width: ${nextValue - 1}px)`
  },
  
  /**
   * Creates a media query for screen widths between two breakpoints
   */
  between: (min: Breakpoint, max: Breakpoint) => {
    const minValue = parseInt(breakpoints[min])
    const maxValue = parseInt(breakpoints[max])
    return `@media (min-width: ${minValue}px) and (max-width: ${maxValue - 1}px)`
  }
}

/**
 * Creates responsive CSS properties from a responsive value
 */
export function createResponsiveProps<T>(
  value: ResponsiveValue<T>,
  cssProperty: string,
  transform?: (val: T) => string
): ReturnType<typeof css> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    // Simple value
    const finalValue = transform ? transform(value as T) : String(value)
    return css`${cssProperty}: ${finalValue};`
  }

  // Responsive object
  const responsiveValue = value as Record<string, T>
  
  return css`
    ${responsiveValue.xs && css`${cssProperty}: ${transform ? transform(responsiveValue.xs) : responsiveValue.xs};`}
    ${responsiveValue.mobile && css`${cssProperty}: ${transform ? transform(responsiveValue.mobile) : responsiveValue.mobile};`}
    
    ${responsiveValue.sm && css`
      ${mediaQueries.up('sm')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.sm) : responsiveValue.sm};
      }
    `}
    
    ${responsiveValue.md && css`
      ${mediaQueries.up('md')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.md) : responsiveValue.md};
      }
    `}
    ${responsiveValue.tablet && css`
      ${mediaQueries.up('tablet')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.tablet) : responsiveValue.tablet};
      }
    `}
    
    ${responsiveValue.lg && css`
      ${mediaQueries.up('lg')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.lg) : responsiveValue.lg};
      }
    `}
    ${responsiveValue.desktop && css`
      ${mediaQueries.up('desktop')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.desktop) : responsiveValue.desktop};
      }
    `}
    
    ${responsiveValue.xl && css`
      ${mediaQueries.up('xl')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.xl) : responsiveValue.xl};
      }
    `}
    ${responsiveValue.wide && css`
      ${mediaQueries.up('wide')} {
        ${cssProperty}: ${transform ? transform(responsiveValue.wide) : responsiveValue.wide};
      }
    `}
    
    ${responsiveValue['2xl'] && css`
      ${mediaQueries.up('2xl')} {
        ${cssProperty}: ${transform ? transform(responsiveValue['2xl']) : responsiveValue['2xl']};
      }
    `}
  `
}

/**
 * Generates responsive spacing CSS from theme spacing tokens
 */
export function createResponsiveSpacing(
  value: ResponsiveValue<keyof typeof theme.spacing>,
  property: 'margin' | 'padding' | 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left' | 
            'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left'
) {
  return createResponsiveProps(
    value,
    property,
    (spacingKey) => theme.spacing[spacingKey]
  )
}

/**
 * Utility to get current breakpoint from window width
 */
export function getCurrentBreakpoint(width: number): Breakpoint {
  const sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => ({ key: key as Breakpoint, value: parseInt(value) }))
    .sort((a, b) => b.value - a.value) // Sort descending

  for (const { key, value } of sortedBreakpoints) {
    if (width >= value) {
      return key
    }
  }
  
  return 'xs' // Default fallback
}

/**
 * Utility to resolve a responsive value to a single value based on current breakpoint
 */
export function resolveResponsiveValue<T>(
  value: ResponsiveValue<T>,
  currentBreakpoint: Breakpoint
): T {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return value as T
  }

  const responsiveValue = value as Record<string, T>
  
  // Breakpoint priority order (semantic names map to their equivalents)
  const breakpointOrder: Array<keyof typeof responsiveValue> = [
    '2xl', 'xl', 'wide', 'lg', 'desktop', 'md', 'tablet', 'sm', 'mobile', 'xs'
  ]
  
  // Current breakpoint mapping
  const breakpointMapping: Record<Breakpoint, number> = {
    'xs': 0,
    'sm': 1,
    'md': 2,
    'lg': 3,
    'xl': 4,
    '2xl': 5,
    'mobile': 1,  // maps to sm
    'tablet': 2,  // maps to md  
    'desktop': 3, // maps to lg
    'wide': 4     // maps to xl
  }
  
  const currentLevel = breakpointMapping[currentBreakpoint] || 0
  
  // Find the most specific value that applies to current breakpoint
  for (const bp of breakpointOrder) {
    if (responsiveValue[bp] !== undefined) {
      const bpLevel = breakpointMapping[bp as Breakpoint] || 0
      if (bpLevel <= currentLevel) {
        return responsiveValue[bp]
      }
    }
  }
  
  // Fallback to any available value
  for (const bp of breakpointOrder.reverse()) {
    if (responsiveValue[bp] !== undefined) {
      return responsiveValue[bp]
    }
  }
  
  // Should never reach here, but return undefined as fallback
  return undefined as any
}

/**
 * Check if current breakpoint matches a condition
 */
export function matchesBreakpoint(
  currentBreakpoint: Breakpoint,
  condition: Breakpoint | 'above' | 'below',
  targetBreakpoint?: Breakpoint
): boolean {
  const breakpointMapping: Record<Breakpoint, number> = {
    'xs': 0,
    'sm': 1, 
    'mobile': 1,
    'md': 2,
    'tablet': 2,
    'lg': 3,
    'desktop': 3,
    'xl': 4,
    'wide': 4,
    '2xl': 5
  }
  
  const currentLevel = breakpointMapping[currentBreakpoint] || 0
  
  if (condition === 'above' && targetBreakpoint) {
    const targetLevel = breakpointMapping[targetBreakpoint] || 0
    return currentLevel > targetLevel
  }
  
  if (condition === 'below' && targetBreakpoint) {
    const targetLevel = breakpointMapping[targetBreakpoint] || 0
    return currentLevel < targetLevel
  }
  
  // Direct match
  if (typeof condition === 'string' && condition in breakpointMapping) {
    return currentLevel >= breakpointMapping[condition as Breakpoint]
  }
  
  return false
}