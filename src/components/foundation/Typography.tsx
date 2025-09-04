import React from 'react'
import styled, { css } from 'styled-components'

export interface TypographyProps {
  variant?: 'brand' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'
  color?: 'primary' | 'secondary' | 'muted' | 'white' | 'blue' | 'purple'
  align?: 'left' | 'center' | 'right'
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
  style?: React.CSSProperties
  // Margin props
  mb?: keyof typeof import('../../tokens/spacing').spacing
  mt?: keyof typeof import('../../tokens/spacing').spacing
  mr?: keyof typeof import('../../tokens/spacing').spacing
  ml?: keyof typeof import('../../tokens/spacing').spacing
  mx?: keyof typeof import('../../tokens/spacing').spacing
  my?: keyof typeof import('../../tokens/spacing').spacing
}

const getVariantStyles = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'brand':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.brand};
        font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.tight};
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
        text-transform: uppercase;
      `
    case 'h1':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
        line-height: ${({ theme }) => theme.typography.lineHeights.tight};
      `
    case 'h2':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
        font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
        line-height: ${({ theme }) => theme.typography.lineHeights.tight};
      `
    case 'h3':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.xl};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.snug};
      `
    case 'h4':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.snug};
      `
    case 'h5':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
    case 'h6':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
        text-transform: uppercase;
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
      `
    case 'body2':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
    case 'caption':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
    case 'overline':
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
        text-transform: uppercase;
        letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
      `
    default: // body1
      return css`
        font-family: ${({ theme }) => theme.typography.fonts.body};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        line-height: ${({ theme }) => theme.typography.lineHeights.normal};
      `
  }
}

const getColorStyles = (color: TypographyProps['color']) => {
  switch (color) {
    case 'secondary':
      return css`color: ${({ theme }) => theme.colors.text.secondary};`
    case 'muted':
      return css`color: ${({ theme }) => theme.colors.text.muted};`
    case 'white':
      return css`color: ${({ theme }) => theme.colors.foundation.white};`
    case 'blue':
      return css`color: ${({ theme }) => theme.colors.innovation.primaryBlue};`
    case 'purple':
      return css`color: ${({ theme }) => theme.colors.innovation.secondaryPurple};`
    default: // primary
      return css`color: ${({ theme }) => theme.colors.text.primary};`
  }
}

const StyledTypography = styled.p<TypographyProps>`
  margin: 0;
  ${({ variant }) => getVariantStyles(variant)}
  ${({ color }) => getColorStyles(color)}
  text-align: ${({ align }) => align || 'left'};
  
  ${({ mb, theme }) => mb && css`margin-bottom: ${theme.spacing[mb]};`}
  ${({ mt, theme }) => mt && css`margin-top: ${theme.spacing[mt]};`}
  ${({ mr, theme }) => mr && css`margin-right: ${theme.spacing[mr]};`}
  ${({ ml, theme }) => ml && css`margin-left: ${theme.spacing[ml]};`}
  ${({ mx, theme }) => mx && css`margin-left: ${theme.spacing[mx]}; margin-right: ${theme.spacing[mx]};`}
  ${({ my, theme }) => my && css`margin-top: ${theme.spacing[my]}; margin-bottom: ${theme.spacing[my]};`}
`

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  align = 'left',
  children,
  as,
  className,
  style,
  mb,
  mt,
  mr,
  ml,
  mx,
  my,
  ...props
}) => {
  const defaultElement = variant === 'brand' ? 'h1' : 
                         variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements :
                         variant === 'caption' || variant === 'overline' ? 'span' : 'p'

  return (
    <StyledTypography
      as={as || defaultElement}
      variant={variant}
      color={color}
      align={align}
      className={className}
      style={style}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
      mx={mx}
      my={my}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}