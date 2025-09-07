import React from 'react'
import { Section, SectionProps } from './Section'
import { ResponsiveContainer, ResponsiveContainerProps } from './ResponsiveContainer'

/**
 * ResponsiveSection combines Section + ResponsiveContainer for easy AI usage.
 * It provides automatic responsive padding and content width constraints.
 */
export interface ResponsiveSectionProps extends Omit<SectionProps, 'children'> {
  /** Container size that controls max-width and padding */
  containerSize?: ResponsiveContainerProps['size']
  /** Override container max-width */
  maxWidth?: ResponsiveContainerProps['maxWidth']
  /** Override container padding */
  containerPx?: ResponsiveContainerProps['px']
  /** Section content */
  children: React.ReactNode
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  containerSize = 'md',
  maxWidth,
  containerPx,
  children,
  py = { xs: 8, md: 12, lg: 16 }, // Default responsive section padding
  ...sectionProps
}) => {
  return (
    <Section py={py} {...sectionProps}>
      <ResponsiveContainer 
        size={containerSize}
        maxWidth={maxWidth}
        px={containerPx}
      >
        {children}
      </ResponsiveContainer>
    </Section>
  )
}