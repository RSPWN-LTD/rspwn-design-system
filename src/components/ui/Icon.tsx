import React from 'react'
import styled, { css } from 'styled-components'
import { iconPaths, IconName } from './iconPaths'

export interface IconProps {
  // Core props
  name: IconName
  
  // Size variants
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  
  // Color customization
  color?: string
  
  // Accessibility
  'aria-label'?: string
  role?: string
  
  // Standard props
  className?: string
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
}

const getIconSize = (size: IconProps['size']) => {
  if (typeof size === 'number') {
    return css`
      width: ${size}px;
      height: ${size}px;
    `
  }
  
  switch (size) {
    case 'xs':
      return css`
        width: 12px;
        height: 12px;
      `
    case 'sm':
      return css`
        width: 16px;
        height: 16px;
      `
    case 'lg':
      return css`
        width: 32px;
        height: 32px;
      `
    case 'xl':
      return css`
        width: 40px;
        height: 40px;
      `
    default: // md
      return css`
        width: 24px;
        height: 24px;
      `
  }
}

const StyledIcon = styled.svg<{
  size: IconProps['size']
  color?: string
  clickable: boolean
}>`
  ${({ size }) => getIconSize(size)}
  
  fill: ${({ color, theme }) => 
    color || theme.colors.foundation.white
  };
  
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: opacity ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
      
      &:hover {
        opacity: 0.8;
      }
      
      &:active {
        opacity: 0.6;
      }
    `}
`

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  'aria-label': ariaLabel,
  role = 'img',
  className,
  style,
  onClick,
  ...props
}) => {
  const path = iconPaths[name]
  const isClickable = !!onClick
  
  if (!path) {
    console.warn(`Icon "${name}" not found in icon set`)
    return null
  }
  
  return (
    <StyledIcon
      viewBox="0 0 24 24"
      size={size}
      color={color}
      clickable={isClickable}
      className={className}
      style={style}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel || `${name} icon`}
      {...props}
    >
      <path d={path} />
    </StyledIcon>
  )
}

// Helper component for displaying all available icons
export const IconCatalog: React.FC<{
  size?: IconProps['size']
  color?: string
}> = ({ size = 'md', color }) => {
  const iconNames = Object.keys(iconPaths) as IconName[]
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
      gap: '16px',
      padding: '16px'
    }}>
      {iconNames.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          <Icon name={iconName} size={size} color={color} />
          <span style={{ 
            marginTop: '8px', 
            fontSize: '12px', 
            color: '#9CA3AF',
            wordBreak: 'break-word'
          }}>
            {iconName}
          </span>
        </div>
      ))}
    </div>
  )
}