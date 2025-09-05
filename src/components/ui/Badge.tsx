import React from 'react'
import styled, { css } from 'styled-components'

export interface BadgeProps {
  // Content and display
  children?: React.ReactNode
  
  // Visual variants
  variant?: 'solid' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  
  // Color options using RSPWN design tokens
  color?: 'gray' | 'blue' | 'purple' | 'success' | 'warning' | 'error'
  
  // Special variants
  dot?: boolean
  
  // Standard props
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getBadgeColors = (color: BadgeProps['color'], variant: BadgeProps['variant']) => {
  const baseColors = {
    gray: {
      solid: css`
        background-color: ${({ theme }) => theme.colors.gray.dark};
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: ${({ theme }) => theme.colors.gray.dark};
      `,
      outline: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.gray.light};
        border-color: ${({ theme }) => theme.colors.gray.light};
      `,
      subtle: css`
        background-color: ${({ theme }) => theme.colors.gray.dark}20;
        color: ${({ theme }) => theme.colors.gray.light};
        border-color: transparent;
      `,
    },
    blue: {
      solid: css`
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      `,
      outline: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      `,
      subtle: css`
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue}20;
        color: ${({ theme }) => theme.colors.innovation.primaryBlue};
        border-color: transparent;
      `,
    },
    purple: {
      solid: css`
        background-color: ${({ theme }) => theme.colors.innovation.secondaryPurple};
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: ${({ theme }) => theme.colors.innovation.secondaryPurple};
      `,
      outline: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.innovation.secondaryPurple};
        border-color: ${({ theme }) => theme.colors.innovation.secondaryPurple};
      `,
      subtle: css`
        background-color: ${({ theme }) => theme.colors.innovation.secondaryPurple}20;
        color: ${({ theme }) => theme.colors.innovation.secondaryPurple};
        border-color: transparent;
      `,
    },
    success: {
      solid: css`
        background-color: #22c55e;
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: #22c55e;
      `,
      outline: css`
        background-color: transparent;
        color: #22c55e;
        border-color: #22c55e;
      `,
      subtle: css`
        background-color: #22c55e20;
        color: #22c55e;
        border-color: transparent;
      `,
    },
    warning: {
      solid: css`
        background-color: #f59e0b;
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: #f59e0b;
      `,
      outline: css`
        background-color: transparent;
        color: #f59e0b;
        border-color: #f59e0b;
      `,
      subtle: css`
        background-color: #f59e0b20;
        color: #f59e0b;
        border-color: transparent;
      `,
    },
    error: {
      solid: css`
        background-color: #ef4444;
        color: ${({ theme }) => theme.colors.foundation.white};
        border-color: #ef4444;
      `,
      outline: css`
        background-color: transparent;
        color: #ef4444;
        border-color: #ef4444;
      `,
      subtle: css`
        background-color: #ef444420;
        color: #ef4444;
        border-color: transparent;
      `,
    },
  }

  return baseColors[color || 'gray'][variant || 'solid']
}

const getBadgeSize = (size: BadgeProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
        min-height: 20px;
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        min-height: 32px;
      `
    default: // md
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
        min-height: 24px;
      `
  }
}

const StyledBadge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: 1;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ size }) => getBadgeSize(size)}
  ${({ color, variant }) => getBadgeColors(color, variant)}
  
  ${({ dot }) => dot && css`
    width: 8px;
    height: 8px;
    min-height: 8px;
    padding: 0;
    border-radius: ${({ theme }) => theme.radius.full};
  `}
`

export const Badge: React.FC<BadgeProps> = ({ 
  children,
  variant = 'solid',
  size = 'md',
  color = 'gray',
  dot = false,
  className,
  ...props 
}) => {
  return (
    <StyledBadge
      className={className}
      variant={variant}
      size={size}
      color={color}
      dot={dot}
      {...props}
    >
      {!dot && children}
    </StyledBadge>
  )
}