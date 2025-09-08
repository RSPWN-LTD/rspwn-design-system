import React from 'react'
import { Grid, GridProps } from './Grid'

/**
 * ResponsiveGrid provides common responsive grid patterns with sensible defaults for AI usage.
 * It automatically handles responsive columns and spacing without requiring manual specification.
 */
export interface ResponsiveGridProps extends Omit<GridProps, 'variant'> {
  /** Override the default gap */
  gap?: number
  /** 
   * Predefined responsive patterns that work well for most use cases
   * - cards: Responsive card grid (1->2->3->4 columns)  
   * - features: Feature grid (1->2->3 columns)
   * - articles: Article/blog grid (1->2 columns)
   * - stats: Statistics grid (2->4 columns)
   */
  pattern?: 'cards' | 'features' | 'articles' | 'stats' | 'sidebar' | 'holy-grail' | 'dashboard' | 'masonry' | 'custom'
  /** 
   * For custom pattern, specify responsive columns
   * @example { xs: 1, md: 2, lg: 3 }
   */
  responsiveColumns?: {
    xs?: number
    sm?: number  
    md?: number
    lg?: number
    xl?: number
  }
  /** Minimum column width for auto-fit grids */
  minColumnWidth?: string
}


export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  pattern = 'cards',
  gap = 6,
  responsiveColumns,
  minColumnWidth,
  children,
  ...props
}) => {
  const gridVariant = pattern === 'cards' ? 'cards' : pattern === 'sidebar' ? 'sidebar' : 'auto'
  
  return (
    <Grid
      variant={gridVariant}
      {...props}
    >
      {children}
    </Grid>
  )
}