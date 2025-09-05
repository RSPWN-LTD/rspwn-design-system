import React from 'react'
import styled, { css } from 'styled-components'

export interface DividerProps {
  // Orientation
  orientation?: 'horizontal' | 'vertical'
  
  // Visual styling
  thickness?: 'thin' | 'medium' | 'thick'
  color?: 'light' | 'medium' | 'dark'
  style?: 'solid' | 'dashed' | 'dotted'
  
  // Text/label support
  label?: string
  labelPosition?: 'left' | 'center' | 'right'
  
  // Spacing
  margin?: keyof typeof import('../../tokens/spacing').spacing
  
  // Size props
  length?: string | number
  
  // Standard props
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getDividerColor = (color: DividerProps['color']) => css`
  color: ${({ theme }) => {
    switch (color) {
      case 'light':
        return theme.colors.gray.light
      case 'medium':
        return theme.colors.gray.base
      case 'dark':
        return theme.colors.gray.dark
      default:
        return theme.colors.gray.light
    }
  }};
`

const getDividerThickness = (thickness: DividerProps['thickness']) => {
  switch (thickness) {
    case 'thin':
      return '1px'
    case 'medium':
      return '2px'
    case 'thick':
      return '4px'
    default:
      return '1px'
  }
}

const StyledDivider = styled.div<DividerProps>`
  ${({ orientation = 'horizontal', thickness = 'thin', color = 'light', style = 'solid', length }) => {
    const thicknessValue = getDividerThickness(thickness)
    
    if (orientation === 'horizontal') {
      return css`
        width: ${length ? (typeof length === 'number' ? `${length}px` : length) : '100%'};
        height: ${thicknessValue};
        border-top: ${thicknessValue} ${style} currentColor;
        ${getDividerColor(color)}
      `
    } else {
      return css`
        width: ${thicknessValue};
        height: ${length ? (typeof length === 'number' ? `${length}px` : length) : '100%'};
        border-left: ${thicknessValue} ${style} currentColor;
        ${getDividerColor(color)}
      `
    }
  }}
  
  ${({ margin, theme }) => margin && css`
    margin: ${theme.spacing[margin]};
  `}
`

const StyledDividerWithLabel = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: ${({ thickness }) => getDividerThickness(thickness)};
    border-top: ${({ thickness }) => getDividerThickness(thickness)} ${({ style = 'solid' }) => style} currentColor;
    ${({ color }) => getDividerColor(color)}
  }
  
  ${({ labelPosition = 'center' }) => {
    if (labelPosition === 'left') {
      return css`
        &::before {
          flex: 0;
          margin-right: ${({ theme }) => theme.spacing[4]};
          width: ${({ theme }) => theme.spacing[4]};
        }
      `
    } else if (labelPosition === 'right') {
      return css`
        &::after {
          flex: 0;
          margin-left: ${({ theme }) => theme.spacing[4]};
          width: ${({ theme }) => theme.spacing[4]};
        }
      `
    } else {
      return css`
        &::before {
          margin-right: ${({ theme }) => theme.spacing[4]};
        }
        &::after {
          margin-left: ${({ theme }) => theme.spacing[4]};
        }
      `
    }
  }}
  
  ${({ margin, theme }) => margin && css`
    margin: ${theme.spacing[margin]};
  `}
`

const DividerLabel = styled.span`
  color: ${({ theme }) => theme.colors.foundation.white};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  white-space: nowrap;
`

export const Divider: React.FC<DividerProps> = ({ 
  label,
  labelPosition = 'center',
  orientation = 'horizontal',
  thickness = 'thin',
  color = 'light',
  style = 'solid',
  margin,
  length,
  className,
  ...props 
}) => {
  if (label && orientation === 'horizontal') {
    return (
      <StyledDividerWithLabel
        className={className}
        labelPosition={labelPosition}
        thickness={thickness}
        color={color}
        style={style}
        margin={margin}
        {...props}
      >
        <DividerLabel>{label}</DividerLabel>
      </StyledDividerWithLabel>
    )
  }

  return (
    <StyledDivider
      className={className}
      orientation={orientation}
      thickness={thickness}
      color={color}
      style={style}
      margin={margin}
      length={length}
      {...props}
    />
  )
}