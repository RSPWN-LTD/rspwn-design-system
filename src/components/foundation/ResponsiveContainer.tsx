import React from 'react'
import { Container, ContainerProps } from './Container'
import { SpacingKey } from '../../tokens/spacing'

type ResponsiveSpacing = SpacingKey | {
  xs?: SpacingKey
  sm?: SpacingKey
  md?: SpacingKey
  lg?: SpacingKey
  xl?: SpacingKey
}

/**
 * ResponsiveContainer provides sensible responsive defaults for AI usage.
 * It automatically applies responsive padding and max-width without requiring manual specification.
 */
export interface ResponsiveContainerProps extends Omit<ContainerProps, 'variant'> {
  /** Override the default responsive padding */
  paddingX?: ResponsiveSpacing
  /** Override the default max width */
  maxWidth?: string
  /** Size variant that applies different responsive patterns */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const getSizeDefaults = (size: ResponsiveContainerProps['size']) => {
  switch (size) {
    case 'sm':
      return {
        variant: 'narrow' as const,
        paddingX: { xs: 4, md: 6 } as ResponsiveSpacing
      }
    case 'lg':
      return {
        variant: 'wide' as const,
        paddingX: { xs: 4, md: 6, lg: 8 } as ResponsiveSpacing
      }
    case 'xl':
      return {
        variant: 'full' as const,
        paddingX: { xs: 4, md: 6, lg: 8, xl: 10 } as ResponsiveSpacing
      }
    default: // 'md'
      return {
        variant: 'default' as const,
        paddingX: { xs: 4, md: 6, lg: 8 } as ResponsiveSpacing
      }
  }
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  size = 'md',
  paddingX,
  maxWidth,
  children,
  ...props 
}) => {
  const defaults = getSizeDefaults(size)
  
  return (
    <Container 
      variant={defaults.variant}
      {...props}
    >
      {children}
    </Container>
  )
}