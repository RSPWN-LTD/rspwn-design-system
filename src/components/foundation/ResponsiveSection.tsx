import React from 'react'
import { Section, SectionProps } from './Section'
import { ResponsiveContainer, ResponsiveContainerProps } from './ResponsiveContainer'
import { SpacingKey } from '../../tokens/spacing'

type ResponsiveSectionSpacing = SpacingKey | {
  xs?: SpacingKey
  sm?: SpacingKey
  md?: SpacingKey
  lg?: SpacingKey
  xl?: SpacingKey
}

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
  containerPx?: ResponsiveContainerProps['paddingX']
  /** Section content */
  children: React.ReactNode
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  containerSize = 'md',
  maxWidth,
  containerPx,
  children,
  paddingY = { xs: 8, md: 12, lg: 16 } as ResponsiveSectionSpacing, // Default responsive section padding
  ...sectionProps
}) => {
  return (
    <Section paddingY={paddingY} {...sectionProps}>
      <ResponsiveContainer 
        size={containerSize}
        maxWidth={maxWidth}
        paddingX={containerPx}
      >
        {children}
      </ResponsiveContainer>
    </Section>
  )
}