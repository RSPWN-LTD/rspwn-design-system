import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, FlexProps } from './Flex'
import { Divider } from './Divider'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface StackProps extends Omit<FlexProps, 'direction' | 'gap' | 'wrap' | 'sm' | 'md' | 'lg' | 'xl'> {
  // Core stack properties
  direction?: 'vertical' | 'horizontal'
  spacing?: keyof typeof import('../../tokens/spacing').spacing
  align?: 'start' | 'center' | 'end' | 'stretch'
  
  // Divider support
  divider?: React.ReactElement | boolean
  
  // Responsive direction switching
  sm?: 'vertical' | 'horizontal'
  md?: 'vertical' | 'horizontal'  
  lg?: 'vertical' | 'horizontal'
  xl?: 'vertical' | 'horizontal'

  // Wrapping support  
  wrap?: boolean

  // Standard props
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getFlexDirection = (direction: 'vertical' | 'horizontal') => {
  return direction === 'vertical' ? 'column' : 'row'
}

const getResponsiveDirection = (breakpoint: string, direction: 'vertical' | 'horizontal') => css`
  @media (min-width: ${breakpoint}) {
    flex-direction: ${getFlexDirection(direction)};
    
    ${direction === 'vertical' ? css`
      & > .stack-divider {
        width: 100%;
        height: 1px;
        margin: 0;
      }
    ` : css`
      & > .stack-divider {
        width: 1px;
        height: auto;
        min-height: 1em;
        margin: 0;
      }
    `}
  }
`

const StyledStack = styled(Flex).withConfig({
  shouldForwardProp: createShouldForwardProp(['spacing', 'divider', 'sm', 'md', 'lg', 'xl'])
})<StackProps>`
  ${({ direction = 'vertical' }) => css`
    flex-direction: ${getFlexDirection(direction)};
  `}

  ${({ direction = 'vertical' }) => direction === 'vertical' ? css`
    & > .stack-divider {
      width: 100%;
      height: 1px;
      margin: 0;
    }
  ` : css`
    & > .stack-divider {
      width: 1px;
      height: auto;
      min-height: 1em;
      margin: 0;
    }
  `}

  // Responsive direction changes
  ${({ sm, theme }) => sm && getResponsiveDirection(theme.breakpoints.sm, sm)}
  ${({ md, theme }) => md && getResponsiveDirection(theme.breakpoints.md, md)}
  ${({ lg, theme }) => lg && getResponsiveDirection(theme.breakpoints.lg, lg)}
  ${({ xl, theme }) => xl && getResponsiveDirection(theme.breakpoints.xl, xl)}
`

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  spacing = '4',
  align,
  divider,
  wrap = false,
  sm,
  md,
  lg,
  xl,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children)
  
  // Convert Stack props to Flex props
  const flexProps: any = {
    direction: getFlexDirection(direction),
    gap: spacing,
    align,
    wrap: wrap ? 'wrap' as const : 'nowrap' as const,
    sm: sm ? { direction: getFlexDirection(sm) } : undefined,
    md: md ? { direction: getFlexDirection(md) } : undefined,
    lg: lg ? { direction: getFlexDirection(lg) } : undefined,
    xl: xl ? { direction: getFlexDirection(xl) } : undefined,
    ...props
  }

  // If no divider, just use regular spacing
  if (!divider) {
    return (
      <StyledStack {...flexProps}>
        {children}
      </StyledStack>
    )
  }

  // With dividers, we need to intersperse divider elements
  const elementsWithDividers: React.ReactNode[] = []
  
  childrenArray.forEach((child, index) => {
    elementsWithDividers.push(child)
    
    // Add divider after each element except the last
    if (index < childrenArray.length - 1) {
      if (divider === true) {
        // Default divider
        elementsWithDividers.push(
          <Divider 
            key={`divider-${index}`}
            orientation={direction === 'vertical' ? 'horizontal' : 'vertical'}
            className="stack-divider"
          />
        )
      } else {
        // Custom divider element
        elementsWithDividers.push(
          React.cloneElement(divider as React.ReactElement, {
            key: `divider-${index}`,
            className: `stack-divider ${(divider as React.ReactElement).props?.className || ''}`.trim(),
          })
        )
      }
    }
  })

  return (
    <StyledStack {...flexProps}>
      {elementsWithDividers}
    </StyledStack>
  )
}