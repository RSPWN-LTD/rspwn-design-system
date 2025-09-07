import React from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

type ResponsiveValue<T> = T | {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export interface GridProps {
  // Grid Layout
  columns?: string | number
  templateColumns?: string | ResponsiveValue<string>  // Alias for grid-template-columns
  rows?: string | number
  gap?: keyof typeof import('../../tokens/spacing').spacing
  columnGap?: keyof typeof import('../../tokens/spacing').spacing
  rowGap?: keyof typeof import('../../tokens/spacing').spacing
  
  // Named grid areas and lines
  areas?: string | ResponsiveValue<string>
  columnLines?: string[]
  rowLines?: string[]
  
  // Predefined patterns
  pattern?: 'sidebar' | 'holy-grail' | 'dashboard' | 'cards' | 'masonry'
  
  // Masonry support
  masonry?: boolean
  masonryRows?: number
  
  // Responsive columns (based on breakpoints)
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
  
  // Enhanced responsive props
  responsive?: {
    xs?: Partial<Pick<GridProps, 'columns' | 'rows' | 'gap' | 'areas'>>
    sm?: Partial<Pick<GridProps, 'columns' | 'rows' | 'gap' | 'areas'>>
    md?: Partial<Pick<GridProps, 'columns' | 'rows' | 'gap' | 'areas'>>
    lg?: Partial<Pick<GridProps, 'columns' | 'rows' | 'gap' | 'areas'>>
    xl?: Partial<Pick<GridProps, 'columns' | 'rows' | 'gap' | 'areas'>>
  }
  
  // Grid alignment
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  
  // Auto-fit and auto-fill options
  autoFit?: boolean
  autoFill?: boolean
  minColumnWidth?: string
  
  // Layout properties
  width?: string | number
  height?: string | number
  minHeight?: string | number
  
  // Spacing
  m?: keyof typeof import('../../tokens/spacing').spacing
  mt?: keyof typeof import('../../tokens/spacing').spacing
  mr?: keyof typeof import('../../tokens/spacing').spacing
  mb?: keyof typeof import('../../tokens/spacing').spacing
  ml?: keyof typeof import('../../tokens/spacing').spacing
  mx?: keyof typeof import('../../tokens/spacing').spacing
  my?: keyof typeof import('../../tokens/spacing').spacing
  p?: keyof typeof import('../../tokens/spacing').spacing
  pt?: keyof typeof import('../../tokens/spacing').spacing
  pr?: keyof typeof import('../../tokens/spacing').spacing
  pb?: keyof typeof import('../../tokens/spacing').spacing
  pl?: keyof typeof import('../../tokens/spacing').spacing
  px?: keyof typeof import('../../tokens/spacing').spacing
  py?: keyof typeof import('../../tokens/spacing').spacing
  
  // Standard props
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export interface GridItemProps {
  // Grid item positioning
  area?: string
  column?: string | number
  row?: string | number
  columnSpan?: number
  rowSpan?: number
  columnStart?: string | number
  columnEnd?: string | number
  rowStart?: string | number
  rowEnd?: string | number
  
  // Grid item alignment
  justifySelf?: 'start' | 'end' | 'center' | 'stretch'
  alignSelf?: 'start' | 'end' | 'center' | 'stretch'
  
  // Standard props
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// Predefined grid patterns
const gridPatterns = {
  'holy-grail': {
    areas: `
      "header header header"
      "nav main aside"  
      "footer footer footer"
    `,
    columns: "200px 1fr 200px",
    rows: "auto 1fr auto"
  },
  'sidebar': {
    areas: `
      "sidebar main"
    `,
    columns: "250px 1fr",
    rows: "1fr"
  },
  'dashboard': {
    areas: `
      "header header"
      "sidebar main"
    `,
    columns: "280px 1fr",
    rows: "auto 1fr"
  },
  'cards': {
    columns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 4
  },
  'masonry': {
    columns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 4
  }
}

const getGridColumns = (columns: string | number) => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`
  }
  return columns
}

const getResponsiveColumns = (value: string | number, breakpoint: string) => css`
  @media (min-width: ${breakpoint}) {
    grid-template-columns: ${getGridColumns(value)};
  }
`

const getResponsiveAreas = (areas: string | ResponsiveValue<string>) => {
  if (typeof areas === 'string') {
    return css`grid-template-areas: ${areas.replace(/\s+/g, ' ').trim()};`
  }
  
  return css`
    ${areas.xs && css`grid-template-areas: ${areas.xs.replace(/\s+/g, ' ').trim()};`}
    ${areas.sm && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-areas: ${areas.sm!.replace(/\s+/g, ' ').trim()};
      }
    `}
    ${areas.md && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-areas: ${areas.md!.replace(/\s+/g, ' ').trim()};
      }
    `}
    ${areas.lg && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-areas: ${areas.lg!.replace(/\s+/g, ' ').trim()};
      }
    `}
    ${areas.xl && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        grid-template-areas: ${areas.xl!.replace(/\s+/g, ' ').trim()};
      }
    `}
  `
}

const getResponsiveTemplateColumns = (templateColumns: string | ResponsiveValue<string>) => {
  if (typeof templateColumns === 'string') {
    return css`grid-template-columns: ${templateColumns};`
  }
  
  return css`
    ${templateColumns.xs && css`grid-template-columns: ${templateColumns.xs};`}
    ${templateColumns.sm && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: ${templateColumns.sm!};
      }
    `}
    ${templateColumns.md && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: ${templateColumns.md!};
      }
    `}
    ${templateColumns.lg && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: ${templateColumns.lg!};
      }
    `}
    ${templateColumns.xl && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        grid-template-columns: ${templateColumns.xl!};
      }
    `}
  `
}

const getNamedGridLines = (lines: string[]) => {
  return lines.map((line) => `[${line}] 1fr`).join(' ')
}

const getResponsiveProps = (responsive: GridProps['responsive'], breakpoint: keyof NonNullable<GridProps['responsive']>, theme: any) => {
  const props = responsive?.[breakpoint]
  if (!props) return ''
  
  return css`
    @media (min-width: ${theme.breakpoints[breakpoint]}) {
      ${props.columns && css`grid-template-columns: ${getGridColumns(props.columns)};`}
      ${props.rows && css`grid-template-rows: ${typeof props.rows === 'number' ? `repeat(${props.rows}, 1fr)` : props.rows};`}
      ${props.gap && css`gap: ${theme.spacing[props.gap]};`}
      ${props.areas && css`grid-template-areas: ${(props.areas as string).replace(/\s+/g, ' ').trim()};`}
    }
  `
}

const StyledGrid = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp([
    'columns', 'templateColumns', 'rows', 'gap', 'columnGap', 'rowGap', 'areas', 'columnLines', 'rowLines',
    'pattern', 'masonry', 'masonryRows', 'xs', 'sm', 'md', 'lg', 'xl', 'responsive',
    'justifyItems', 'alignItems', 'justifyContent', 'alignContent', 'autoFit', 'autoFill', 'minColumnWidth'
  ])
})<GridProps>`
  display: grid;
  
  ${({ columns }) => columns && css`
    grid-template-columns: ${getGridColumns(columns)};
  `}
  
  ${({ templateColumns }) => templateColumns && getResponsiveTemplateColumns(templateColumns)}
  
  ${({ rows }) => rows && css`
    grid-template-rows: ${typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows};
  `}
  
  ${({ gap, theme }) => gap && css`
    gap: ${theme.spacing[gap]};
  `}
  
  ${({ columnGap, theme }) => columnGap && css`
    column-gap: ${theme.spacing[columnGap]};
  `}
  
  ${({ rowGap, theme }) => rowGap && css`
    row-gap: ${theme.spacing[rowGap]};
  `}
  
  /* Named grid areas */
  ${({ areas }) => areas && getResponsiveAreas(areas)}
  
  /* Named grid lines */
  ${({ columnLines }) => columnLines && css`
    grid-template-columns: ${getNamedGridLines(columnLines)};
  `}
  
  ${({ rowLines }) => rowLines && css`
    grid-template-rows: ${getNamedGridLines(rowLines)};
  `}
  
  /* Predefined patterns */
  ${({ pattern, theme }) => pattern && css`
    ${(gridPatterns[pattern] as any).areas && css`
      grid-template-areas: ${(gridPatterns[pattern] as any).areas.replace(/\s+/g, ' ').trim()};
    `}
    ${(gridPatterns[pattern] as any).columns && css`
      grid-template-columns: ${(gridPatterns[pattern] as any).columns};
    `}
    ${(gridPatterns[pattern] as any).rows && css`
      grid-template-rows: ${(gridPatterns[pattern] as any).rows};
    `}
    ${(gridPatterns[pattern] as any).gap && css`
      gap: ${theme.spacing[(gridPatterns[pattern] as any).gap as keyof typeof theme.spacing]};
    `}
  `}
  
  /* Masonry layout */
  ${({ masonry, masonryRows }) => masonry && css`
    grid-template-rows: repeat(${masonryRows || 'auto-fit'}, min-content);
    grid-auto-flow: column;
    
    /* Fallback for browsers that don't support masonry */
    @supports not (grid-template-rows: masonry) {
      display: grid;
      grid-template-rows: repeat(${masonryRows || 4}, min-content);
    }
    
    /* Future masonry support */
    @supports (grid-template-rows: masonry) {
      grid-template-rows: masonry;
    }
  `}
  
  ${({ autoFit, minColumnWidth }) => autoFit && minColumnWidth && css`
    grid-template-columns: repeat(auto-fit, minmax(${minColumnWidth}, 1fr));
  `}
  
  ${({ autoFill, minColumnWidth }) => autoFill && minColumnWidth && css`
    grid-template-columns: repeat(auto-fill, minmax(${minColumnWidth}, 1fr));
  `}
  
  ${({ justifyItems }) => justifyItems && css`
    justify-items: ${justifyItems};
  `}
  
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
  
  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}
  
  ${({ alignContent }) => alignContent && css`
    align-content: ${alignContent};
  `}
  
  ${({ width }) => width && css`
    width: ${typeof width === 'number' ? `${width}px` : width};
  `}
  
  ${({ height }) => height && css`
    height: ${typeof height === 'number' ? `${height}px` : height};
  `}
  
  ${({ minHeight }) => minHeight && css`
    min-height: ${typeof minHeight === 'number' ? `${minHeight}px` : minHeight};
  `}
  
  ${({ m, theme }) => m && css`margin: ${theme.spacing[m]};`}
  ${({ mt, theme }) => mt && css`margin-top: ${theme.spacing[mt]};`}
  ${({ mr, theme }) => mr && css`margin-right: ${theme.spacing[mr]};`}
  ${({ mb, theme }) => mb && css`margin-bottom: ${theme.spacing[mb]};`}
  ${({ ml, theme }) => ml && css`margin-left: ${theme.spacing[ml]};`}
  ${({ mx, theme }) => mx && css`margin-left: ${theme.spacing[mx]}; margin-right: ${theme.spacing[mx]};`}
  ${({ my, theme }) => my && css`margin-top: ${theme.spacing[my]}; margin-bottom: ${theme.spacing[my]};`}
  
  ${({ p, theme }) => p && css`padding: ${theme.spacing[p]};`}
  ${({ pt, theme }) => pt && css`padding-top: ${theme.spacing[pt]};`}
  ${({ pr, theme }) => pr && css`padding-right: ${theme.spacing[pr]};`}
  ${({ pb, theme }) => pb && css`padding-bottom: ${theme.spacing[pb]};`}
  ${({ pl, theme }) => pl && css`padding-left: ${theme.spacing[pl]};`}
  ${({ px, theme }) => px && css`padding-left: ${theme.spacing[px]}; padding-right: ${theme.spacing[px]};`}
  ${({ py, theme }) => py && css`padding-top: ${theme.spacing[py]}; padding-bottom: ${theme.spacing[py]};`}
  
  // Legacy responsive breakpoints
  ${({ xs, theme }) => xs && getResponsiveColumns(xs, theme.breakpoints.xs)}
  ${({ sm, theme }) => sm && getResponsiveColumns(sm, theme.breakpoints.sm)}
  ${({ md, theme }) => md && getResponsiveColumns(md, theme.breakpoints.md)}
  ${({ lg, theme }) => lg && getResponsiveColumns(lg, theme.breakpoints.lg)}
  ${({ xl, theme }) => xl && getResponsiveColumns(xl, theme.breakpoints.xl)}
  
  // Enhanced responsive props
  ${({ responsive, theme }) => responsive && css`
    ${getResponsiveProps(responsive, 'xs', theme)}
    ${getResponsiveProps(responsive, 'sm', theme)}
    ${getResponsiveProps(responsive, 'md', theme)}
    ${getResponsiveProps(responsive, 'lg', theme)}
    ${getResponsiveProps(responsive, 'xl', theme)}
  `}
`

const StyledGridItem = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp([
    'area', 'column', 'row', 'columnSpan', 'rowSpan', 'columnStart', 'columnEnd', 
    'rowStart', 'rowEnd', 'justifySelf', 'alignSelf'
  ])
})<GridItemProps>`
  ${({ area }) => area && css`
    grid-area: ${area};
  `}
  
  ${({ column }) => column && css`
    grid-column: ${column};
  `}
  
  ${({ row }) => row && css`
    grid-row: ${row};
  `}
  
  ${({ columnSpan }) => columnSpan && css`
    grid-column: span ${columnSpan};
  `}
  
  ${({ rowSpan }) => rowSpan && css`
    grid-row: span ${rowSpan};
  `}
  
  ${({ columnStart, columnEnd }) => (columnStart || columnEnd) && css`
    grid-column: ${columnStart || 'auto'} / ${columnEnd || 'auto'};
  `}
  
  ${({ rowStart, rowEnd }) => (rowStart || rowEnd) && css`
    grid-row: ${rowStart || 'auto'} / ${rowEnd || 'auto'};
  `}
  
  ${({ justifySelf }) => justifySelf && css`
    justify-self: ${justifySelf};
  `}
  
  ${({ alignSelf }) => alignSelf && css`
    align-self: ${alignSelf};
  `}
`

export const Grid: React.FC<GridProps> = ({ children, gap = 4, ...props }) => {
  return <StyledGrid gap={gap} {...props}>{children}</StyledGrid>
}

export const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  return <StyledGridItem {...props}>{children}</StyledGridItem>
}