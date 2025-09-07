import React from 'react'
import { Grid, GridProps } from './Grid'

/**
 * ResponsiveGrid provides common responsive grid patterns with sensible defaults for AI usage.
 * It automatically handles responsive columns and spacing without requiring manual specification.
 */
export interface ResponsiveGridProps extends Omit<GridProps, 'templateColumns' | 'gap'> {
  /** Override the default gap */
  gap?: GridProps['gap']
  /** 
   * Predefined responsive patterns that work well for most use cases
   * - cards: Responsive card grid (1->2->3->4 columns)  
   * - features: Feature grid (1->2->3 columns)
   * - articles: Article/blog grid (1->2 columns)
   * - stats: Statistics grid (2->4 columns)
   */
  pattern?: 'cards' | 'features' | 'articles' | 'stats' | 'custom'
  /** 
   * For custom pattern, specify responsive columns
   * @example { xs: 1, md: 2, lg: 3 }
   */
  columns?: {
    xs?: number
    sm?: number  
    md?: number
    lg?: number
    xl?: number
  }
  /** Minimum column width for auto-fit grids */
  minColumnWidth?: string
}

const getPatternColumns = (pattern: ResponsiveGridProps['pattern'], minColumnWidth?: string) => {
  if (minColumnWidth) {
    return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`
  }
  
  switch (pattern) {
    case 'cards':
      return {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)', 
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)'
      }
    case 'features':
      return {
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      }
    case 'articles':
      return {
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)'
      }
    case 'stats':
      return {
        xs: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)'
      }
    default:
      return 'repeat(auto-fit, minmax(280px, 1fr))'
  }
}

const convertColumnsToTemplate = (columns: ResponsiveGridProps['columns']) => {
  if (!columns) return undefined
  
  const template: Record<string, string> = {}
  
  Object.entries(columns).forEach(([breakpoint, count]) => {
    template[breakpoint] = `repeat(${count}, 1fr)`
  })
  
  return template
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  pattern = 'cards',
  gap = 6,
  columns,
  minColumnWidth,
  children,
  ...props
}) => {
  let templateColumns: GridProps['templateColumns']
  
  if (columns) {
    templateColumns = convertColumnsToTemplate(columns)
  } else {
    templateColumns = getPatternColumns(pattern, minColumnWidth)
  }
  
  return (
    <Grid
      templateColumns={templateColumns}
      gap={gap}
      {...props}
    >
      {children}
    </Grid>
  )
}