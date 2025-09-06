import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface AvatarProps {
  // Content options
  src?: string
  alt?: string
  name?: string
  icon?: React.ReactNode
  
  // Visual variants
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'circular' | 'square'
  
  // Status indicator
  status?: 'online' | 'offline' | 'away' | 'busy'
  showStatus?: boolean
  
  // Loading state
  loading?: boolean
  
  // Event handlers
  onError?: () => void
  
  // Standard props
  className?: string
  onClick?: () => void
}

const getAvatarSize = (size: AvatarProps['size']) => {
  switch (size) {
    case 'xs':
      return css`
        width: 24px;
        height: 24px;
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
      `
    case 'sm':
      return css`
        width: 32px;
        height: 32px;
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
      `
    case 'lg':
      return css`
        width: 56px;
        height: 56px;
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
      `
    case 'xl':
      return css`
        width: 72px;
        height: 72px;
        font-size: ${({ theme }) => theme.typography.fontSizes.xl};
      `
    case '2xl':
      return css`
        width: 96px;
        height: 96px;
        font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
      `
    default: // md
      return css`
        width: 40px;
        height: 40px;
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
      `
  }
}

const getStatusColor = (status: AvatarProps['status']) => {
  switch (status) {
    case 'online':
      return '#22c55e'
    case 'away':
      return '#f59e0b'
    case 'busy':
      return '#ef4444'
    case 'offline':
    default:
      return '#6b7280'
  }
}

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const StyledAvatar = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp([
    'size', 'variant', 'src', 'alt', 'name', 'icon', 'status', 'showStatus', 'loading', 'onError'
  ])
})<{
  $size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  $variant?: 'circular' | 'square'
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.foundation.white};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
  
  ${({ $size }) => getAvatarSize($size)}
  
  ${({ $variant = 'circular' }) =>
    $variant === 'circular'
      ? css`border-radius: ${({ theme }) => theme.radius.full};`
      : css`border-radius: ${({ theme }) => theme.radius.sm};`
  }
  
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      transition: opacity ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
      
      &:hover {
        opacity: 0.8;
      }
    `
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StatusIndicator = styled.div.withConfig({
  shouldForwardProp: (prop) => !['status', 'size'].includes(prop)
})<{ 
  $status: AvatarProps['status']
  $size: AvatarProps['size'] 
}>`
  position: absolute;
  border: 2px solid ${({ theme }) => theme.colors.foundation.black};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ $status }) => getStatusColor($status)};
  
  ${({ $size }) => {
    switch ($size) {
      case 'xs':
      case 'sm':
        return css`
          width: 8px;
          height: 8px;
          bottom: 0;
          right: 0;
        `
      case 'lg':
      case 'xl':
      case '2xl':
        return css`
          width: 16px;
          height: 16px;
          bottom: 2px;
          right: 2px;
        `
      default:
        return css`
          width: 12px;
          height: 12px;
          bottom: 0;
          right: 0;
        `
    }
  }}
`

const LoadingSpinner = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop)
})<{ $size: AvatarProps['size'] }>`
  ${({ $size }) => {
    const spinnerSize = $size === 'xs' || $size === 'sm' ? '16px' : $size === 'lg' || $size === 'xl' || $size === '2xl' ? '24px' : '20px'
    return css`
      width: ${spinnerSize};
      height: ${spinnerSize};
    `
  }}
  border: 2px solid ${({ theme }) => theme.colors.gray.light};
  border-top: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray.light};
`

export const Avatar: React.FC<AvatarProps> = ({ 
  src,
  alt,
  name,
  icon,
  size = 'md',
  variant = 'circular',
  status,
  showStatus = false,
  loading = false,
  onError,
  className,
  onClick,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
    onError?.()
  }

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner $size={size} />
    }

    if (src && !imageError) {
      return (
        <AvatarImage
          src={src}
          alt={alt || name || 'Avatar'}
          onError={handleImageError}
        />
      )
    }

    if (name) {
      return getInitials(name)
    }

    if (icon) {
      return <IconWrapper>{icon}</IconWrapper>
    }

    // Default user icon
    return (
      <IconWrapper>
        <svg 
          width="60%" 
          height="60%" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </IconWrapper>
    )
  }

  return (
    <StyledAvatar
      className={className}
      $size={size}
      $variant={variant}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
      {showStatus && status && (
        <StatusIndicator $status={status} $size={size} />
      )}
    </StyledAvatar>
  )
}