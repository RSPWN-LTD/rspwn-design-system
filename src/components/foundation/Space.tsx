import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { SpacingKey } from '../../tokens/spacing'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpacingKey | 'contextual'
  direction?: 'horizontal' | 'vertical' | 'both'
  context?: 'tight' | 'normal' | 'loose' | 'section'
}

const getSpaceStyles = (
  size: SpaceProps['size'],
  direction: SpaceProps['direction'],
  context: SpaceProps['context']
) => {
  const getSpacingValue = () => {
    if (size === 'contextual') {
      // Use context-based spacing
      switch (context) {
        case 'tight': return 'tight'
        case 'normal': return 'normal'
        case 'loose': return 'loose'
        case 'section': return 'section'
        default: return 'normal'
      }
    }
    return size || 'md'
  }

  const spacingKey = getSpacingValue()

  switch (direction) {
    case 'horizontal':
      return css`
        width: ${({ theme }) => theme.spacing[spacingKey as keyof typeof theme.spacing]};
        height: 0;
        display: inline-block;
      `
    case 'vertical':
      return css`
        height: ${({ theme }) => theme.spacing[spacingKey as keyof typeof theme.spacing]};
        width: 0;
        display: block;
      `
    case 'both':
      return css`
        width: ${({ theme }) => theme.spacing[spacingKey as keyof typeof theme.spacing]};
        height: ${({ theme }) => theme.spacing[spacingKey as keyof typeof theme.spacing]};
        display: block;
      `
    default: // vertical is default
      return css`
        height: ${({ theme }) => theme.spacing[spacingKey as keyof typeof theme.spacing]};
        width: 0;
        display: block;
      `
  }
}

const StyledSpace = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['size', 'direction', 'context'])
})<SpaceProps>`
  flex-shrink: 0;
  ${({ size = 'md', direction = 'vertical', context = 'normal' }) =>
    getSpaceStyles(size, direction, context)
  }
`

export const Space = forwardRef<HTMLDivElement, SpaceProps>(({
  size = 'md',
  direction = 'vertical',
  context = 'normal',
  ...props
}, ref) => {
  return (
    <StyledSpace
      ref={ref}
      size={size}
      direction={direction}
      context={context}
      aria-hidden="true"
      {...props}
    />
  )
})

Space.displayName = 'Space'