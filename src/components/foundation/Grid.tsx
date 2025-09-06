import React from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface GridProps {
  // Grid Layout
  columns?: string | number
  rows?: string | number
  gap?: keyof typeof import('../../tokens/spacing').spacing
  columnGap?: keyof typeof import('../../tokens/spacing').spacing
  rowGap?: keyof typeof import('../../tokens/spacing').spacing
  
  // Responsive columns (based on breakpoints)
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
  
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

const StyledGrid = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['columns', 'rows', 'columnGap', 'rowGap', 'xs', 'sm', 'md', 'lg', 'xl', 'justifyItems', 'alignContent', 'autoFit', 'autoFill', 'minColumnWidth'])
})<GridProps>`
  display: grid;
  
  ${({ columns }) => columns && css`
    grid-template-columns: ${getGridColumns(columns)};
  `}
  
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
  
  // Responsive breakpoints
  ${({ xs, theme }) => xs && getResponsiveColumns(xs, theme.breakpoints.xs)}
  ${({ sm, theme }) => sm && getResponsiveColumns(sm, theme.breakpoints.sm)}
  ${({ md, theme }) => md && getResponsiveColumns(md, theme.breakpoints.md)}
  ${({ lg, theme }) => lg && getResponsiveColumns(lg, theme.breakpoints.lg)}
  ${({ xl, theme }) => xl && getResponsiveColumns(xl, theme.breakpoints.xl)}
`

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>
}