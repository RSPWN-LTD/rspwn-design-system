import React from 'react'
import { useBreakpoint } from '../../hooks/useMediaQuery'
import { Breakpoint } from '../../utils/responsive'

export interface ShowProps {
  /**
   * Show content only above this breakpoint
   */
  above?: Breakpoint
  
  /**
   * Show content only below this breakpoint
   */
  below?: Breakpoint
  
  /**
   * Show content only at specific breakpoint(s)
   */
  only?: Breakpoint | Breakpoint[]
  
  /**
   * Show content only between two breakpoints (inclusive)
   */
  between?: [Breakpoint, Breakpoint]
  
  /**
   * Content to show/hide based on conditions
   */
  children: React.ReactNode
  
  /**
   * Fallback content to show when main content is hidden
   */
  fallback?: React.ReactNode
}

/**
 * Show component conditionally renders children based on breakpoint conditions.
 * Useful for responsive design where content should appear or disappear at specific screen sizes.
 * 
 * @example
 * // Show only on desktop and larger
 * <Show above="lg">
 *   <DesktopNavigation />
 * </Show>
 * 
 * // Show only on mobile
 * <Show below="md">
 *   <MobileMenu />
 * </Show>
 * 
 * // Show only at specific breakpoints
 * <Show only={['sm', 'md']}>
 *   <TabletLayout />
 * </Show>
 * 
 * // Show between two breakpoints
 * <Show between={['md', 'xl']}>
 *   <MediumToLargeContent />
 * </Show>
 */
export const Show: React.FC<ShowProps> = ({
  above,
  below,
  only,
  between,
  children,
  fallback
}) => {
  // Always call all possible hooks at the top level
  const breakpointOrder: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  
  // Call useBreakpoint for all possible breakpoints
  const xs = useBreakpoint('xs')
  const sm = useBreakpoint('sm')
  const md = useBreakpoint('md')
  const lg = useBreakpoint('lg')
  const xl = useBreakpoint('xl')
  const xxl = useBreakpoint('2xl')
  
  const breakpointMap = { xs, sm, md, lg, xl, '2xl': xxl }

  // Now determine if content should be shown
  let shouldShow = true

  // Check 'above' condition
  if (above && !breakpointMap[above]) {
    shouldShow = false
  }

  // Check 'below' condition  
  if (below && breakpointMap[below]) {
    shouldShow = false
  }

  // Check 'only' condition
  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only]
    const matchesAny = onlyBreakpoints.some(bp => {
      const nextBp = getNextBreakpoint(bp)
      return breakpointMap[bp] && (!nextBp || !breakpointMap[nextBp])
    })
    if (!matchesAny) {
      shouldShow = false
    }
  }

  // Check 'between' condition
  if (between) {
    const [min, max] = between
    const nextBp = getNextBreakpoint(max)
    const isInRange = breakpointMap[min] && (!nextBp || !breakpointMap[nextBp])
    if (!isInRange) {
      shouldShow = false
    }
  }

  if (shouldShow) {
    return <>{children}</>
  }

  return fallback ? <>{fallback}</> : null
}

/**
 * Hide component is the inverse of Show - it hides content based on breakpoint conditions
 */
export interface HideProps extends Omit<ShowProps, 'fallback'> {}

export const Hide: React.FC<HideProps> = ({ above, below, only, between, children }) => {
  // Always call all possible hooks at the top level
  const xs = useBreakpoint('xs')
  const sm = useBreakpoint('sm')
  const md = useBreakpoint('md')
  const lg = useBreakpoint('lg')
  const xl = useBreakpoint('xl')
  const xxl = useBreakpoint('2xl')
  
  const breakpointMap = { xs, sm, md, lg, xl, '2xl': xxl }

  // Inverse logic - hide when Show would show
  let shouldHide = false

  if (above && breakpointMap[above]) {
    shouldHide = true
  }

  if (below && !breakpointMap[below]) {
    shouldHide = true
  }

  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only]
    const matchesAny = onlyBreakpoints.some(bp => {
      const nextBp = getNextBreakpoint(bp)
      return breakpointMap[bp] && (!nextBp || !breakpointMap[nextBp])
    })
    if (matchesAny) {
      shouldHide = true
    }
  }

  if (between) {
    const [min, max] = between
    const nextBp = getNextBreakpoint(max)
    const isInRange = breakpointMap[min] && (!nextBp || !breakpointMap[nextBp])
    if (isInRange) {
      shouldHide = true
    }
  }

  return shouldHide ? null : <>{children}</>
}

/**
 * Helper function to get the next breakpoint in sequence
 */
function getNextBreakpoint(current: Breakpoint): Breakpoint | null {
  const order: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  const index = order.indexOf(current as any)
  return index !== -1 && index < order.length - 1 ? order[index + 1] : null
}

/**
 * Convenience components for common use cases
 */

/**
 * Show content only on mobile devices (below 'md' breakpoint)
 */
export const ShowOnMobile: React.FC<Pick<ShowProps, 'children' | 'fallback'>> = ({ children, fallback }) => (
  <Show below="md" fallback={fallback}>{children}</Show>
)

/**
 * Show content only on tablet devices (between 'md' and 'lg' breakpoints)
 */
export const ShowOnTablet: React.FC<Pick<ShowProps, 'children' | 'fallback'>> = ({ children, fallback }) => (
  <Show between={['md', 'lg']} fallback={fallback}>{children}</Show>
)

/**
 * Show content only on desktop devices ('lg' breakpoint and above)
 */
export const ShowOnDesktop: React.FC<Pick<ShowProps, 'children' | 'fallback'>> = ({ children, fallback }) => (
  <Show above="lg" fallback={fallback}>{children}</Show>
)

/**
 * Hide content on mobile devices (below 'md' breakpoint)
 */
export const HideOnMobile: React.FC<Pick<HideProps, 'children'>> = ({ children }) => (
  <Hide below="md">{children}</Hide>
)

/**
 * Hide content on tablet devices (between 'md' and 'lg' breakpoints)  
 */
export const HideOnTablet: React.FC<Pick<HideProps, 'children'>> = ({ children }) => (
  <Hide between={['md', 'lg']}>{children}</Hide>
)

/**
 * Hide content on desktop devices ('lg' breakpoint and above)
 */
export const HideOnDesktop: React.FC<Pick<HideProps, 'children'>> = ({ children }) => (
  <Hide above="lg">{children}</Hide>
)