import React from 'react'
import styled, { css } from 'styled-components'

export type TypographyVariant = 'brand' | 'heading' | 'subheading' | 'body' | 'caption' | 'label'

export interface TypographyProps {
  variant?: TypographyVariant
  color?: 'white' | 'muted' | 'blue'
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}

const getVariantStyles = (variant: TypographyVariant) => {
  switch (variant) {
    case 'brand':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.brand};
        font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.tight};
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
        text-transform: uppercase;
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: ${({ theme }) => theme.typography.fontSizes['6xl']};
        }
      `
    case 'heading':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
        line-height: ${({ theme }) => theme.typography.lineHeights.tight};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
        }
      `
    case 'subheading':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.snug};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: ${({ theme }) => theme.typography.fontSizes.xl};
        }
      `
    case 'caption':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
        opacity: 0.8;
      `
    case 'label':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
        text-transform: uppercase;
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
      `
    default: // body
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        }
      `
  }
}

const getColorStyles = (color: TypographyProps['color']) => {
  switch (color) {
    case 'muted':
      return css`color: ${({ theme }) => theme.colors.text.muted};`
    case 'blue':
      return css`color: ${({ theme }) => theme.colors.innovation.primaryBlue};`
    default: // white
      return css`color: ${({ theme }) => theme.colors.foundation.white};`
  }
}

const StyledTypography = styled.p<TypographyProps>`
  margin: 0; /* No margins - spacing handled by parent components */
  ${({ variant = 'body' }) => getVariantStyles(variant)}
  ${({ color = 'white' }) => getColorStyles(color)}
`

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body',
  color = 'white',
  children,
  as,
  className,
  ...props 
}) => {
  const defaultElement = variant === 'brand' ? 'h1' : 
                         variant === 'heading' ? 'h2' :
                         variant === 'subheading' ? 'h3' :
                         variant === 'caption' || variant === 'label' ? 'span' : 'p'

  return (
    <StyledTypography
      as={as || defaultElement}
      variant={variant}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}