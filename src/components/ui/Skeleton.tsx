import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export interface SkeletonProps {
  // Shape presets
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  
  // Dimensions
  width?: string | number
  height?: string | number
  
  // Animation
  animation?: 'pulse' | 'wave' | 'none'
  speed?: 'slow' | 'normal' | 'fast'
  
  // Multiple lines for text variant
  lines?: number
  
  // Standard props
  className?: string
  style?: React.CSSProperties
  'aria-label'?: string
  'aria-describedby'?: string
}

// Animation keyframes
const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const getAnimationSpeed = (speed: SkeletonProps['speed']) => {
  switch (speed) {
    case 'slow':
      return '2s'
    case 'fast':
      return '1s'
    default:
      return '1.5s'
  }
}

const getVariantStyles = (variant: SkeletonProps['variant']) => {
  switch (variant) {
    case 'text':
      return css`
        height: 1em;
        border-radius: ${({ theme }) => theme.radius.sm};
      `
    case 'circular':
      return css`
        border-radius: 50%;
      `
    case 'rounded':
      return css`
        border-radius: ${({ theme }) => theme.radius.lg};
      `
    case 'rectangular':
    default:
      return css`
        border-radius: ${({ theme }) => theme.radius.base};
      `
  }
}

const SkeletonBase = styled.div<{
  variant: SkeletonProps['variant']
  width?: string | number
  height?: string | number
  animation: SkeletonProps['animation']
  speed: SkeletonProps['speed']
}>`
  display: block;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-radius: ${({ theme }) => theme.radius.base};
  
  ${({ variant }) => getVariantStyles(variant)}
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  
  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === 'number' ? `${height}px` : height};
    `}
  
  ${({ animation, speed }) => {
    if (animation === 'none') return css``
    
    const animationDuration = getAnimationSpeed(speed)
    
    if (animation === 'pulse') {
      return css`
        animation: ${pulseAnimation} ${animationDuration} ease-in-out infinite;
      `
    }
    
    if (animation === 'wave') {
      return css`
        position: relative;
        overflow: hidden;
        
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: ${waveAnimation} ${animationDuration} ease-in-out infinite;
          content: '';
        }
      `
    }
    
    return css``
  }}
`

const SkeletonContainer = styled.div<{
  lines?: number
}>`
  ${({ lines }) =>
    lines &&
    lines > 1 &&
    css`
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[2]};
    `}
`

const TextSkeletonLine = styled(SkeletonBase)<{
  isLast?: boolean
}>`
  ${({ isLast }) =>
    isLast &&
    css`
      width: 75%; /* Last line is typically shorter */
    `}
`

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
  speed = 'normal',
  lines = 1,
  className,
  style,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  // Set default dimensions based on variant
  const getDefaultDimensions = () => {
    if (width !== undefined || height !== undefined) {
      return { width, height }
    }
    
    switch (variant) {
      case 'text':
        return { width: '100%', height: undefined }
      case 'circular':
        return { width: '40px', height: '40px' }
      case 'rectangular':
      case 'rounded':
      default:
        return { width: '100%', height: '20px' }
    }
  }
  
  const { width: defaultWidth, height: defaultHeight } = getDefaultDimensions()
  
  // For text variant with multiple lines
  if (variant === 'text' && lines > 1) {
    return (
      <SkeletonContainer
        className={className}
        style={style}
        lines={lines}
        role="progressbar"
        aria-label={ariaLabel || 'Loading content'}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {Array.from({ length: lines }, (_, index) => (
          <TextSkeletonLine
            key={index}
            variant={variant}
            width={defaultWidth}
            height={defaultHeight}
            animation={animation}
            speed={speed}
            isLast={index === lines - 1}
          />
        ))}
      </SkeletonContainer>
    )
  }
  
  return (
    <SkeletonBase
      className={className}
      style={style}
      variant={variant}
      width={width || defaultWidth}
      height={height || defaultHeight}
      animation={animation}
      speed={speed}
      role="progressbar"
      aria-label={ariaLabel || 'Loading content'}
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}