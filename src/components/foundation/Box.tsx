import React from 'react'
import styled, { css } from 'styled-components'
import { propFilters } from '../../utils/propFilters'

export interface BoxProps {
  // Layout
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  width?: string | number
  height?: string | number
  minWidth?: string | number
  minHeight?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  
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
  
  // Background
  bg?: 'black' | 'white' | 'dark' | 'gray' | 'light' | 'blue' | 'purple'
  
  // Border
  border?: boolean
  borderRadius?: keyof typeof import('../../tokens/radius').radius
  
  // Position
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: number
  
  // Flex
  flex?: string | number
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: keyof typeof import('../../tokens/spacing').spacing
  
  // Grid
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridGap?: keyof typeof import('../../tokens/spacing').spacing
  
  // Other
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  cursor?: 'pointer' | 'default' | 'text' | 'grab' | 'grabbing' | 'not-allowed'
  
  // Standard props
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  as?: keyof JSX.IntrinsicElements
}

const getBackgroundColor = (bg: BoxProps['bg']) => {
  switch (bg) {
    case 'white':
      return css`background-color: ${({ theme }) => theme.colors.foundation.white};`
    case 'dark':
      return css`background-color: ${({ theme }) => theme.colors.gray.dark};`
    case 'gray':
      return css`background-color: ${({ theme }) => theme.colors.gray.base};`
    case 'light':
      return css`background-color: ${({ theme }) => theme.colors.gray.light};`
    case 'blue':
      return css`background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};`
    case 'purple':
      return css`background-color: ${({ theme }) => theme.colors.innovation.secondaryPurple};`
    default: // black
      return css`background-color: ${({ theme }) => theme.colors.foundation.black};`
  }
}

const StyledBox = styled.div.withConfig({
  shouldForwardProp: propFilters.layout
})<BoxProps>`
  ${({ display }) => display && css`display: ${display};`}
  
  ${({ width }) => width && css`width: ${typeof width === 'number' ? `${width}px` : width};`}
  ${({ height }) => height && css`height: ${typeof height === 'number' ? `${height}px` : height};`}
  ${({ minWidth }) => minWidth && css`min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ minHeight }) => minHeight && css`min-height: ${typeof minHeight === 'number' ? `${minHeight}px` : minHeight};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight};`}
  
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
  
  ${({ bg }) => bg && getBackgroundColor(bg)}
  
  ${({ border, theme }) => border && css`border: 1px solid ${theme.colors.gray.light};`}
  ${({ borderRadius, theme }) => borderRadius && css`border-radius: ${theme.radius[borderRadius]};`}
  
  ${({ position }) => position && css`position: ${position};`}
  ${({ top }) => top && css`top: ${typeof top === 'number' ? `${top}px` : top};`}
  ${({ right }) => right && css`right: ${typeof right === 'number' ? `${right}px` : right};`}
  ${({ bottom }) => bottom && css`bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom};`}
  ${({ left }) => left && css`left: ${typeof left === 'number' ? `${left}px` : left};`}
  ${({ zIndex }) => zIndex && css`z-index: ${zIndex};`}
  
  ${({ flex }) => flex && css`flex: ${flex};`}
  ${({ alignItems }) => alignItems && css`align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && css`justify-content: ${justifyContent};`}
  ${({ flexDirection }) => flexDirection && css`flex-direction: ${flexDirection};`}
  ${({ flexWrap }) => flexWrap && css`flex-wrap: ${flexWrap};`}
  ${({ gap, theme }) => gap && css`gap: ${theme.spacing[gap]};`}
  
  ${({ gridTemplateColumns }) => gridTemplateColumns && css`grid-template-columns: ${gridTemplateColumns};`}
  ${({ gridTemplateRows }) => gridTemplateRows && css`grid-template-rows: ${gridTemplateRows};`}
  ${({ gridGap, theme }) => gridGap && css`grid-gap: ${theme.spacing[gridGap]};`}
  
  ${({ overflow }) => overflow && css`overflow: ${overflow};`}
  ${({ cursor }) => cursor && css`cursor: ${cursor};`}
`

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}