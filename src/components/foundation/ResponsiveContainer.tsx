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
export interface ResponsiveContainerProps extends Omit<ContainerProps, 'paddingX' | 'maxWidth'> {
  /** Override the default responsive padding */
  paddingX?: ResponsiveSpacing
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
        paddingX: { xs: 4, md: 6 } as ResponsiveSpacing
      }
    case 'lg':
      return {
        maxWidth: 'xl' as const,
        paddingX: { xs: 4, md: 6, lg: 8 } as ResponsiveSpacing
      }
    case 'xl':
      return {
        maxWidth: 'xxl' as const,
        paddingX: { xs: 4, md: 6, lg: 8, xl: 10 } as ResponsiveSpacing
      }
    default: // 'md'
      return {
        maxWidth: 'lg' as const,
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
      maxWidth={maxWidth || defaults.maxWidth}
      paddingX={paddingX || defaults.paddingX}
      {...props}
    >
      {children}
    </Container>
  )
}