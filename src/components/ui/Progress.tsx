import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export interface ProgressProps {
  // Progress value
  value?: number
  max?: number
  
  // Visual variants
  variant?: 'linear' | 'circular'
  size?: 'sm' | 'md' | 'lg'
  
  // State
  indeterminate?: boolean
  
  // Visual styling
  color?: 'blue' | 'success' | 'warning' | 'error' | 'purple'
  showLabel?: boolean
  showPercentage?: boolean
  
  // Content
  label?: string
  
  // Standard props
  className?: string
  'aria-label'?: string
}

const getProgressColor = (color: ProgressProps['color']) => {
  switch (color) {
    case 'success':
      return '#22c55e'
    case 'warning':
      return '#f59e0b'
    case 'error':
      return '#ef4444'
    case 'purple':
      return css`${({ theme }) => theme.colors.innovation.secondaryPurple}`
    case 'blue':
    default:
      return css`${({ theme }) => theme.colors.innovation.primaryBlue}`
  }
}

const getLinearSize = (size: ProgressProps['size']) => {
  switch (size) {
    case 'sm':
      return '4px'
    case 'lg':
      return '12px'
    default:
      return '8px'
  }
}

const getCircularSize = (size: ProgressProps['size']) => {
  switch (size) {
    case 'sm':
      return { width: '32px', strokeWidth: '2' }
    case 'lg':
      return { width: '64px', strokeWidth: '4' }
    default:
      return { width: '48px', strokeWidth: '3' }
  }
}

// Animations
const indeterminateLinear = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const indeterminateCircular = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`

const circularRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

// Linear Progress Components
const LinearProgressContainer = styled.div<{ size: ProgressProps['size'] }>`
  position: relative;
  width: 100%;
  height: ${({ size }) => getLinearSize(size)};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-radius: ${({ theme }) => theme.radius.full};
  overflow: hidden;
`

const LinearProgressBar = styled.div<{
  value: number
  max: number
  color: ProgressProps['color']
  indeterminate?: boolean
}>`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: width ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  
  ${({ indeterminate, color, value, max }) =>
    indeterminate
      ? css`
          position: absolute;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            ${getProgressColor(color)},
            transparent
          );
          animation: ${indeterminateLinear} 2s ease-in-out infinite;
        `
      : css`
          width: ${(value / max) * 100}%;
          background-color: ${getProgressColor(color)};
        `}
`

// Circular Progress Components
const CircularProgressContainer = styled.div<{ size: ProgressProps['size'] }>`
  position: relative;
  display: inline-block;
`

const CircularProgressSvg = styled.svg<{
  indeterminate?: boolean
}>`
  ${({ indeterminate }) =>
    indeterminate &&
    css`
      animation: ${circularRotate} 2s linear infinite;
    `}
`

const CircularProgressTrack = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.gray.dark};
`

const CircularProgressIndicator = styled.circle<{
  value: number
  max: number
  color: ProgressProps['color']
  indeterminate?: boolean
  circumference: number
}>`
  fill: none;
  stroke: ${({ color }) => getProgressColor(color)};
  stroke-linecap: round;
  transition: stroke-dashoffset ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  
  ${({ indeterminate, circumference, value, max }) =>
    indeterminate
      ? css`
          animation: ${indeterminateCircular} 1.4s ease-in-out infinite;
        `
      : css`
          stroke-dasharray: ${circumference};
          stroke-dashoffset: ${circumference - (value / max) * circumference};
        `}
`

const ProgressLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
`

const ProgressPercentage = styled.span`
  color: ${({ theme }) => theme.colors.gray.light};
`

const CircularProgressLabel = styled.div<{ size: ProgressProps['size'] }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
  
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        `
      case 'lg':
        return css`
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        `
      default:
        return css`
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        `
    }
  }}
`

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  variant = 'linear',
  size = 'md',
  indeterminate = false,
  color = 'blue',
  showLabel = false,
  showPercentage = false,
  label,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const percentage = indeterminate ? 0 : Math.round((value / max) * 100)
  const circularSizes = getCircularSize(size)
  const radius = (parseInt(circularSizes.width) - parseInt(circularSizes.strokeWidth)) / 2
  const circumference = radius * 2 * Math.PI

  if (variant === 'circular') {
    return (
      <CircularProgressContainer
        className={className}
        size={size}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel || label}
        {...props}
      >
        <CircularProgressSvg
          width={circularSizes.width}
          height={circularSizes.width}
          indeterminate={indeterminate}
        >
          <CircularProgressTrack
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth={circularSizes.strokeWidth}
          />
          <CircularProgressIndicator
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth={circularSizes.strokeWidth}
            value={value}
            max={max}
            color={color}
            indeterminate={indeterminate}
            circumference={circumference}
          />
        </CircularProgressSvg>
        {(showPercentage || label) && !indeterminate && (
          <CircularProgressLabel size={size}>
            {label && <div>{label}</div>}
            {showPercentage && <div>{percentage}%</div>}
          </CircularProgressLabel>
        )}
      </CircularProgressContainer>
    )
  }

  return (
    <div className={className}>
      {(showLabel || showPercentage) && (label || showPercentage) && (
        <ProgressLabel>
          {showLabel && label && <span>{label}</span>}
          {showPercentage && !indeterminate && (
            <ProgressPercentage>{percentage}%</ProgressPercentage>
          )}
        </ProgressLabel>
      )}
      <LinearProgressContainer
        size={size}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel || label}
        {...props}
      >
        <LinearProgressBar
          value={value}
          max={max}
          color={color}
          indeterminate={indeterminate}
        />
      </LinearProgressContainer>
    </div>
  )
}