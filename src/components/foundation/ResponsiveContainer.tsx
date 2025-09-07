import React from 'react'
import { Container, ContainerProps } from './Container'

/**
 * ResponsiveContainer provides sensible responsive defaults for AI usage.
 * It automatically applies responsive padding and max-width without requiring manual specification.
 */
export interface ResponsiveContainerProps extends Omit<ContainerProps, 'px' | 'maxWidth'> {
  /** Override the default responsive padding */
  px?: ContainerProps['px']
  /** Override the default max width */
  maxWidth?: ContainerProps['maxWidth']
  /** Size variant that applies different responsive patterns */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const getSizeDefaults = (size: ResponsiveContainerProps['size']) => {
  switch (size) {
    case 'sm':
      return {
        maxWidth: 'md' as const,
        px: { xs: 4, md: 6 } as const
      }
    case 'lg':
      return {
        maxWidth: 'xl' as const,
        px: { xs: 4, md: 6, lg: 8 } as const
      }
    case 'xl':
      return {
        maxWidth: 'xxl' as const,
        px: { xs: 4, md: 6, lg: 8, xl: 10 } as const
      }
    default: // 'md'
      return {
        maxWidth: 'lg' as const,
        px: { xs: 4, md: 6, lg: 8 } as const
      }
  }
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  size = 'md',
  px,
  maxWidth,
  children,
  ...props 
}) => {
  const defaults = getSizeDefaults(size)
  
  return (
    <Container 
      maxWidth={maxWidth || defaults.maxWidth}
      px={px || defaults.px}
      {...props}
    >
      {children}
    </Container>
  )
}