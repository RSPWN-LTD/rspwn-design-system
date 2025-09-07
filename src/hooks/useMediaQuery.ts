import { useState, useEffect } from 'react'
import { 
  Breakpoint, 
  breakpoints, 
  getCurrentBreakpoint, 
  resolveResponsiveValue, 
  matchesBreakpoint,
  ResponsiveValue
} from '../utils/responsive'

/**
 * Hook to check if a media query matches
 * 
 * @param query CSS media query string
 * @returns boolean indicating if the media query matches
 * 
 * @example
 * const isLargeScreen = useMediaQuery('(min-width: 1024px)')
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // Server-side rendering guard
    if (typeof window === 'undefined') {
      return
    }

    const mediaQueryList = window.matchMedia(query)
    const updateMatches = () => setMatches(mediaQueryList.matches)

    // Set initial value
    updateMatches()

    // Listen for changes
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', updateMatches)
      return () => mediaQueryList.removeEventListener('change', updateMatches)
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(updateMatches)
      return () => mediaQueryList.removeListener(updateMatches)
    }
  }, [query])

  return matches
}

/**
 * Hook to check if the current screen size is at or above a breakpoint
 * 
 * @param breakpoint The breakpoint to check against
 * @returns boolean indicating if current screen is at or above the breakpoint
 * 
 * @example
 * const isDesktop = useBreakpoint('lg')
 * const isMobile = !useBreakpoint('sm')
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const query = `(min-width: ${breakpoints[breakpoint]})`
  return useMediaQuery(query)
}

/**
 * Hook to get the current breakpoint
 * 
 * @returns current breakpoint name
 * 
 * @example
 * const currentBreakpoint = useCurrentBreakpoint()
 * // Returns 'xs', 'sm', 'md', 'lg', 'xl', or '2xl'
 */
export function useCurrentBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs')

  useEffect(() => {
    // Server-side rendering guard
    if (typeof window === 'undefined') {
      return
    }

    const updateBreakpoint = () => {
      const width = window.innerWidth
      const current = getCurrentBreakpoint(width)
      setBreakpoint(current)
    }

    // Set initial value
    updateBreakpoint()

    // Listen for resize events
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}

/**
 * Hook to resolve a responsive value to a single value based on current breakpoint
 * 
 * @param values Responsive value object or single value
 * @returns resolved value for current breakpoint
 * 
 * @example
 * const columns = useBreakpointValue({ xs: 1, sm: 2, lg: 3 })
 * const padding = useBreakpointValue({ xs: '1rem', md: '2rem' })
 */
export function useBreakpointValue<T>(values: ResponsiveValue<T>): T {
  const currentBreakpoint = useCurrentBreakpoint()
  return resolveResponsiveValue(values, currentBreakpoint)
}

/**
 * Hook to get screen size information and breakpoint details
 * 
 * @returns object with screen dimensions and breakpoint information
 * 
 * @example
 * const { width, height, breakpoint, isMobile, isTablet, isDesktop } = useScreenSize()
 */
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    breakpoint: 'xs' as Breakpoint,
    isMobile: true,
    isTablet: false,
    isDesktop: false
  })

  useEffect(() => {
    // Server-side rendering guard
    if (typeof window === 'undefined') {
      return
    }

    const updateScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const breakpoint = getCurrentBreakpoint(width)
      
      setScreenSize({
        width,
        height,
        breakpoint,
        isMobile: !matchesBreakpoint(breakpoint, 'sm'),
        isTablet: matchesBreakpoint(breakpoint, 'md') && !matchesBreakpoint(breakpoint, 'lg'),
        isDesktop: matchesBreakpoint(breakpoint, 'lg')
      })
    }

    // Set initial value
    updateScreenSize()

    // Listen for resize events
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}

/**
 * Hook to check if screen matches specific breakpoint conditions
 * 
 * @param condition Breakpoint condition
 * @returns boolean indicating if condition matches
 * 
 * @example
 * const isAboveMd = useBreakpointMatch('above', 'md')
 * const isBelowLg = useBreakpointMatch('below', 'lg')
 * const isExactlyMd = useBreakpointMatch('only', 'md')
 */
export function useBreakpointMatch(
  condition: 'above' | 'below' | 'only' | Breakpoint,
  targetBreakpoint?: Breakpoint
): boolean {
  const currentBreakpoint = useCurrentBreakpoint()
  
  // Always call useMediaQuery at the top level - calculate query regardless of condition
  const nextBreakpoint = targetBreakpoint ? getNextBreakpoint(targetBreakpoint) : null
  const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : '9999px'
  const onlyQuery = targetBreakpoint 
    ? `(min-width: ${breakpoints[targetBreakpoint]}) and (max-width: calc(${maxWidth} - 1px))`
    : '(min-width: 0px)'
  const onlyMatches = useMediaQuery(onlyQuery)
  
  if (condition === 'only' && targetBreakpoint) {
    return onlyMatches
  }
  
  if (condition === 'above' && targetBreakpoint) {
    return matchesBreakpoint(currentBreakpoint, 'above', targetBreakpoint)
  }
  
  if (condition === 'below' && targetBreakpoint) {
    return matchesBreakpoint(currentBreakpoint, 'below', targetBreakpoint)
  }
  
  // Direct breakpoint match
  if (typeof condition === 'string' && condition in breakpoints) {
    return matchesBreakpoint(currentBreakpoint, condition as Breakpoint)
  }
  
  return false
}

/**
 * Helper function to get the next breakpoint in the sequence
 */
function getNextBreakpoint(current: Breakpoint): Breakpoint | null {
  const order: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  const index = order.indexOf(current as any)
  return index !== -1 && index < order.length - 1 ? order[index + 1] : null
}

/**
 * Hook for responsive orientation detection
 * 
 * @returns object with orientation information
 * 
 * @example
 * const { isPortrait, isLandscape, orientation } = useOrientation()
 */
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')

  useEffect(() => {
    // Server-side rendering guard
    if (typeof window === 'undefined') {
      return
    }

    const updateOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth
      setOrientation(isPortrait ? 'portrait' : 'landscape')
    }

    // Set initial value
    updateOrientation()

    // Listen for resize events
    window.addEventListener('resize', updateOrientation)
    
    // Listen for orientation change events (mobile devices)
    if ('orientation' in window) {
      window.addEventListener('orientationchange', updateOrientation)
      return () => {
        window.removeEventListener('resize', updateOrientation)
        window.removeEventListener('orientationchange', updateOrientation)
      }
    }

    return () => window.removeEventListener('resize', updateOrientation)
  }, [])

  return {
    orientation,
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape'
  }
}