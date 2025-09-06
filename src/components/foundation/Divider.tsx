import React from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface DividerProps {
  // Orientation
  orientation?: 'horizontal' | 'vertical'
  
  // Visual styling
  thickness?: 'thin' | 'medium' | 'thick'
  color?: 'light' | 'medium' | 'dark'
  variant?: 'solid' | 'dashed' | 'dotted' // Renamed from 'style' to avoid conflict
  
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

const StyledDivider = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp([
    'orientation', 'thickness', 'color', 'variant', 'length', 'margin'
  ])
})<{
  $orientation?: 'horizontal' | 'vertical'
  $thickness?: 'thin' | 'medium' | 'thick'
  $color?: 'light' | 'medium' | 'dark'
  $variant?: 'solid' | 'dashed' | 'dotted'
  $length?: string | number
  $margin?: keyof typeof import('../../tokens/spacing').spacing
}>`
  ${({ $orientation = 'horizontal', $thickness = 'thin', $color = 'light', $variant = 'solid', $length }) => {
    const thicknessValue = getDividerThickness($thickness)
    
    if ($orientation === 'horizontal') {
      return css`
        width: ${$length ? (typeof $length === 'number' ? `${$length}px` : $length) : '100%'};
        height: ${thicknessValue};
        border-top: ${thicknessValue} ${$variant} currentColor;
        ${getDividerColor($color)}
      `
    } else {
      return css`
        width: ${thicknessValue};
        height: ${$length ? (typeof $length === 'number' ? `${$length}px` : $length) : '100%'};
        border-left: ${thicknessValue} ${$variant} currentColor;
        ${getDividerColor($color)}
      `
    }
  }}
  
  ${({ $margin, theme }) => $margin && css`
    margin: ${theme.spacing[$margin]};
  `}
`

const StyledDividerWithLabel = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp([
    'thickness', 'color', 'variant', 'labelPosition', 'margin'
  ])
})<{
  $thickness?: 'thin' | 'medium' | 'thick'
  $color?: 'light' | 'medium' | 'dark'
  $variant?: 'solid' | 'dashed' | 'dotted'
  $labelPosition?: 'left' | 'center' | 'right'
  $margin?: keyof typeof import('../../tokens/spacing').spacing
}>`
  display: flex;
  align-items: center;
  width: 100%;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: ${({ $thickness }) => getDividerThickness($thickness)};
    border-top: ${({ $thickness }) => getDividerThickness($thickness)} ${({ $variant = 'solid' }) => $variant} currentColor;
    ${({ $color }) => getDividerColor($color)}
  }
  
  ${({ $labelPosition = 'center' }) => {
    if ($labelPosition === 'left') {
      return css`
        &::before {
          flex: 0;
          margin-right: ${({ theme }) => theme.spacing[4]};
          width: ${({ theme }) => theme.spacing[4]};
        }
      `
    } else if ($labelPosition === 'right') {
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
  
  ${({ $margin, theme }) => $margin && css`
    margin: ${theme.spacing[$margin]};
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
  variant = 'solid', // Renamed from style
  margin,
  length,
  className,
  ...props 
}) => {
  if (label && orientation === 'horizontal') {
    return (
      <StyledDividerWithLabel
        className={className}
        $labelPosition={labelPosition}
        $thickness={thickness}
        $color={color}
        $variant={variant}
        $margin={margin}
        {...props}
      >
        <DividerLabel>{label}</DividerLabel>
      </StyledDividerWithLabel>
    )
  }

  return (
    <StyledDivider
      className={className}
      $orientation={orientation}
      $thickness={thickness}
      $color={color}
      $variant={variant}
      $margin={margin}
      $length={length}
      {...props}
    />
  )
}