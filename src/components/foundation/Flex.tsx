import React from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box'
import { createShouldForwardProp } from '../../utils/propFilters'

type ResponsiveFlexProps = {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

export interface FlexProps extends Omit<BoxProps, 'display'> {
  // Core flex properties
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: keyof typeof import('../../tokens/spacing').spacing
  inline?: boolean

  // Convenience prop for centering
  center?: boolean

  // Responsive props
  sm?: Partial<ResponsiveFlexProps>
  md?: Partial<ResponsiveFlexProps>
  lg?: Partial<ResponsiveFlexProps>
  xl?: Partial<ResponsiveFlexProps>

  // Standard props
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getFlexValue = (value: FlexProps['justify'] | FlexProps['align']) => {
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    case 'evenly':
      return 'space-evenly'
    default:
      return value
  }
}

const getResponsiveFlexStyles = (breakpoint: string, props: Partial<ResponsiveFlexProps>) => css`
  @media (min-width: ${breakpoint}) {
    ${props.direction && css`flex-direction: ${props.direction};`}
    ${props.align && css`align-items: ${getFlexValue(props.align)};`}
    ${props.justify && css`justify-content: ${getFlexValue(props.justify)};`}
    ${props.wrap && css`flex-wrap: ${props.wrap};`}
  }
`

const StyledFlex = styled(Box).withConfig({
  shouldForwardProp: createShouldForwardProp([
    'direction', 'align', 'justify', 'wrap', 'inline', 'center', 'sm', 'md', 'lg', 'xl'
  ])
})<FlexProps>`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  
  ${({ direction }) => direction && css`flex-direction: ${direction};`}
  ${({ align, center }) => (align || center) && css`align-items: ${center ? 'center' : getFlexValue(align)};`}
  ${({ justify, center }) => (justify || center) && css`justify-content: ${center ? 'center' : getFlexValue(justify)};`}
  ${({ wrap }) => wrap && css`flex-wrap: ${wrap};`}
  ${({ gap, theme }) => gap && css`gap: ${theme.spacing[gap]};`}

  // Responsive styles
  ${({ sm, theme }) => sm && getResponsiveFlexStyles(theme.breakpoints.sm, sm)}
  ${({ md, theme }) => md && getResponsiveFlexStyles(theme.breakpoints.md, md)}
  ${({ lg, theme }) => lg && getResponsiveFlexStyles(theme.breakpoints.lg, lg)}
  ${({ xl, theme }) => xl && getResponsiveFlexStyles(theme.breakpoints.xl, xl)}
`

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  align,
  justify,
  wrap = 'nowrap',
  gap,
  inline = false,
  center = false,
  sm,
  md,
  lg,
  xl,
  children,
  ...props
}) => {
  return (
    <StyledFlex
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      gap={gap}
      inline={inline}
      center={center}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      {...props}
    >
      {children}
    </StyledFlex>
  )
}