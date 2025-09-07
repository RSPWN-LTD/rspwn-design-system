import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  variant?: 'single' | 'range'
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  min?: number
  max?: number
  step?: number
  value?: number | number[]
  defaultValue?: number | number[]
  onChange?: (value: number | number[]) => void
  showTicks?: boolean
  showLabels?: boolean
  tickLabels?: string[]
  label?: string
  helperText?: string
  error?: boolean
  errorText?: string
  fullWidth?: boolean
}

const SliderContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['fullWidth', 'orientation'])
})<{ fullWidth?: boolean; orientation?: 'horizontal' | 'vertical' }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  ${({ orientation }) => orientation === 'vertical' && css`
    height: 200px;
    width: auto;
  `}
`

const SliderWrapper = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation'])
})<{ orientation?: 'horizontal' | 'vertical' }>`
  position: relative;
  display: flex;
  align-items: center;
  ${({ orientation }) => orientation === 'vertical' && css`
    height: 100%;
    flex-direction: column;
    justify-content: center;
  `}
`

const getSliderTrackStyles = (orientation: 'horizontal' | 'vertical') => css`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.full};
  ${orientation === 'horizontal' ? css`
    width: 100%;
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
  ` : css`
    height: 100%;
    width: 4px;
    left: 50%;
    transform: translateX(-50%);
  `}
`

const SliderTrack = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation'])
})<{ orientation?: 'horizontal' | 'vertical' }>`
  ${({ orientation = 'horizontal' }) => getSliderTrackStyles(orientation)}
`

const getSliderFillStyles = (orientation: 'horizontal' | 'vertical', fillPercentage: number, startPercentage = 0) => css`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
  border-radius: ${({ theme }) => theme.radius.full};
  ${orientation === 'horizontal' ? css`
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
    left: ${startPercentage}%;
    width: ${fillPercentage - startPercentage}%;
  ` : css`
    width: 4px;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${startPercentage}%;
    height: ${fillPercentage - startPercentage}%;
  `}
`

const SliderFill = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation', 'fillPercentage', 'startPercentage'])
})<{ 
  orientation?: 'horizontal' | 'vertical'
  fillPercentage: number
  startPercentage?: number
}>`
  ${({ orientation = 'horizontal', fillPercentage, startPercentage }) => 
    getSliderFillStyles(orientation, fillPercentage, startPercentage)
  }
`

const getThumbStyles = (size: 'sm' | 'md' | 'lg') => {
  const sizeMap = {
    sm: '16px',
    md: '20px',
    lg: '24px'
  }
  
  return css`
    width: ${sizeMap[size]};
    height: ${sizeMap[size]};
  `
}

const SliderThumb = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['size', 'orientation', 'position'])
})<{ 
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  position: number
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
  border: 2px solid ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  ${({ size = 'md' }) => getThumbStyles(size)}
  
  ${({ orientation = 'horizontal', position }) => 
    orientation === 'horizontal' ? css`
      left: ${position}%;
      top: 50%;
      transform: translate(-50%, -50%);
    ` : css`
      bottom: ${position}%;
      left: 50%;
      transform: translate(-50%, 50%);
    `
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.innovation.primaryBlue}DD;
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.innovation.primaryBlue}20;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.innovation.primaryBlue}BB;
    transform: ${({ orientation = 'horizontal' }) => 
      orientation === 'horizontal' 
        ? 'translate(-50%, -50%) scale(1.1)' 
        : 'translate(-50%, 50%) scale(1.1)'
    };
  }
`

const TicksContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['orientation'])
})<{ orientation?: 'horizontal' | 'vertical' }>`
  position: absolute;
  ${({ orientation = 'horizontal' }) => 
    orientation === 'horizontal' ? css`
      width: 100%;
      top: calc(50% + 12px);
      display: flex;
      justify-content: space-between;
    ` : css`
      height: 100%;
      left: calc(50% + 12px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `
  }
`

const Tick = styled.div`
  width: 2px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.gray.light};
`

const TickLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-top: ${({ theme }) => theme.spacing[1]};
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`

const HelperText = styled.span<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ error, theme }) => 
    error ? theme.colors.semantic.error : theme.colors.text.muted
  };
`

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const Slider = forwardRef<HTMLInputElement, SliderProps>(({
  variant = 'single',
  orientation = 'horizontal',
  size = 'md',
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  showTicks = false,
  showLabels = false,
  tickLabels,
  label,
  helperText,
  error = false,
  errorText,
  fullWidth = false,
  disabled = false,
  ...props
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [activeThumb, setActiveThumb] = useState(0)

  // Initialize values based on variant
  const getInitialValue = () => {
    if (value !== undefined) return value
    if (defaultValue !== undefined) return defaultValue
    return variant === 'range' ? [min, max] : min
  }

  const [internalValue, setInternalValue] = useState(getInitialValue())

  // Update internal value when prop changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const normalizeValue = useCallback((val: number) => {
    return Math.min(max, Math.max(min, Math.round(val / step) * step))
  }, [min, max, step])

  const getPercentage = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100
  }, [min, max])

  const getValueFromPercentage = useCallback((percentage: number) => {
    const val = min + (percentage / 100) * (max - min)
    return normalizeValue(val)
  }, [min, max, normalizeValue])

  const getPositionFromEvent = useCallback((event: MouseEvent | React.MouseEvent) => {
    if (!containerRef.current) return 0

    const rect = containerRef.current.getBoundingClientRect()
    if (orientation === 'horizontal') {
      const x = event.clientX - rect.left
      return (x / rect.width) * 100
    } else {
      const y = event.clientY - rect.top
      return 100 - ((y / rect.height) * 100)
    }
  }, [orientation])

  const handleMouseDown = (event: React.MouseEvent, thumbIndex = 0) => {
    if (disabled) return
    
    event.preventDefault()
    setIsDragging(true)
    setActiveThumb(thumbIndex)
  }

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isDragging || disabled) return

    const percentage = Math.min(100, Math.max(0, getPositionFromEvent(event)))
    const newValue = getValueFromPercentage(percentage)

    if (variant === 'range' && Array.isArray(internalValue)) {
      const newRange = [...internalValue] as number[]
      newRange[activeThumb] = newValue
      
      // Ensure the range values don't cross
      if (activeThumb === 0 && newRange[0] > newRange[1]) {
        newRange[0] = newRange[1]
      } else if (activeThumb === 1 && newRange[1] < newRange[0]) {
        newRange[1] = newRange[0]
      }
      
      setInternalValue(newRange)
      onChange?.(newRange)
    } else {
      setInternalValue(newValue)
      onChange?.(newValue)
    }
  }, [isDragging, disabled, getPositionFromEvent, variant, internalValue, activeThumb, onChange, getValueFromPercentage])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTrackClick = (event: React.MouseEvent) => {
    if (disabled) return
    
    const percentage = getPositionFromEvent(event)
    const newValue = getValueFromPercentage(percentage)

    if (variant === 'range' && Array.isArray(internalValue)) {
      // Find the closest thumb
      const [min, max] = internalValue
      const minDistance = Math.abs(newValue - min)
      const maxDistance = Math.abs(newValue - max)
      const thumbIndex = minDistance <= maxDistance ? 0 : 1
      
      const newRange = [...internalValue] as number[]
      newRange[thumbIndex] = newValue
      setInternalValue(newRange)
      onChange?.(newRange)
    } else {
      setInternalValue(newValue)
      onChange?.(newValue)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, thumbIndex = 0) => {
    if (disabled) return

    let delta = 0
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        delta = step
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        delta = -step
        break
      case 'PageUp':
        delta = step * 10
        break
      case 'PageDown':
        delta = -step * 10
        break
      case 'Home':
        delta = min - (Array.isArray(internalValue) ? internalValue[thumbIndex] : internalValue)
        break
      case 'End':
        delta = max - (Array.isArray(internalValue) ? internalValue[thumbIndex] : internalValue)
        break
      default:
        return
    }

    event.preventDefault()

    if (variant === 'range' && Array.isArray(internalValue)) {
      const newRange = [...internalValue] as number[]
      newRange[thumbIndex] = normalizeValue(newRange[thumbIndex] + delta)
      setInternalValue(newRange)
      onChange?.(newRange)
    } else {
      const currentValue = typeof internalValue === 'number' ? internalValue : min
      const newValue = normalizeValue(currentValue + delta)
      setInternalValue(newValue)
      onChange?.(newValue)
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const displayHelperText = error && errorText ? errorText : helperText

  const renderTicks = () => {
    if (!showTicks) return null

    const tickCount = Math.floor((max - min) / step) + 1
    const ticks = Array.from({ length: tickCount }, (_, i) => i * step + min)

    return (
      <TicksContainer orientation={orientation}>
        {ticks.map((tickValue, index) => (
          <div key={tickValue}>
            <Tick />
            {showLabels && (
              <TickLabel>
                {tickLabels?.[index] || tickValue}
              </TickLabel>
            )}
          </div>
        ))}
      </TicksContainer>
    )
  }

  const currentValue = Array.isArray(internalValue) ? internalValue : [internalValue]
  const fillStart = variant === 'range' && Array.isArray(internalValue) ? getPercentage(internalValue[0]) : 0
  const fillEnd = variant === 'range' && Array.isArray(internalValue) ? getPercentage(internalValue[1]) : getPercentage(typeof internalValue === 'number' ? internalValue : min)

  return (
    <SliderContainer fullWidth={fullWidth} orientation={orientation}>
      {label && <Label>{label}</Label>}
      <SliderWrapper 
        ref={containerRef}
        orientation={orientation}
        onClick={handleTrackClick}
      >
        <SliderTrack orientation={orientation} />
        <SliderFill 
          orientation={orientation}
          fillPercentage={fillEnd}
          startPercentage={fillStart}
        />
        {currentValue.map((val, index) => (
          <SliderThumb
            key={index}
            size={size}
            orientation={orientation}
            position={getPercentage(val)}
            onMouseDown={(e) => handleMouseDown(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={disabled ? -1 : 0}
            role="slider"
            aria-valuenow={val}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-disabled={disabled}
          />
        ))}
        {renderTicks()}
      </SliderWrapper>
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
      <HiddenInput
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={typeof internalValue === 'number' ? internalValue : internalValue[0]}
        disabled={disabled}
        {...props}
      />
    </SliderContainer>
  )
})

Slider.displayName = 'Slider'