import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'

export interface RatingProps {
  // Value control
  value?: number
  onChange?: (value: number) => void
  
  // Configuration
  maxRating?: number
  allowHalf?: boolean
  readOnly?: boolean
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  
  // Custom icons
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  
  // States
  disabled?: boolean
  
  // Labels and help text
  label?: string
  helperText?: string
  
  // Standard props
  className?: string
  id?: string
  name?: string
  'aria-label'?: string
  'aria-describedby'?: string
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
}

const getRatingSize = (size: RatingProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        .rating-star {
          width: 16px;
          height: 16px;
          font-size: 16px;
        }
        
        .rating-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .rating-helper {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
    case 'lg':
      return css`
        .rating-star {
          width: 32px;
          height: 32px;
          font-size: 32px;
        }
        
        .rating-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .rating-helper {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
      `
    default:
      return css`
        .rating-star {
          width: 24px;
          height: 24px;
          font-size: 24px;
        }
        
        .rating-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .rating-helper {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
  }
}

const RatingContainer = styled.div<{
  size: RatingProps['size']
  disabled?: boolean
}>`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ size }) => getRatingSize(size)}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`

const RatingLabel = styled.label<{
  disabled?: boolean
}>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foundation.white};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`

const StarsContainer = styled.div<{
  readOnly?: boolean
  disabled?: boolean
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ readOnly, disabled }) => 
    disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer'
  };
  
  ${({ readOnly, disabled }) =>
    !readOnly && !disabled &&
    css`
      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
        outline-offset: 2px;
        border-radius: ${({ theme }) => theme.radius.sm};
      }
    `}
`

const StarButton = styled.div<{
  filled: number // 0, 0.5, or 1
  hover?: boolean
  readOnly?: boolean
  disabled?: boolean
}>`
  position: relative;
  cursor: ${({ readOnly, disabled }) => 
    disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer'
  };
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  border-radius: ${({ theme }) => theme.radius.sm};
  
  ${({ readOnly, disabled }) =>
    !readOnly && !disabled &&
    css`
      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
        outline-offset: 2px;
      }
    `}
  
  .star-bg {
    color: ${({ theme }) => theme.colors.gray.light};
  }
  
  .star-fill {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.innovation.primaryBlue};
    overflow: hidden;
    transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
    
    ${({ filled }) => css`
      width: ${filled * 100}%;
    `}
  }
  
  ${({ hover, theme }) =>
    hover &&
    css`
      .star-fill {
        color: ${theme.colors.innovation.primaryBlue};
        filter: brightness(1.1);
      }
    `}
`

const StarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const HelperText = styled.div`
  color: ${({ theme }) => theme.colors.gray.light};
  margin-top: ${({ theme }) => theme.spacing[2]};
`

// Default star icon
const DefaultStarIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  onChange,
  maxRating = 5,
  allowHalf = false,
  readOnly = false,
  size = 'md',
  icon,
  emptyIcon,
  disabled = false,
  label,
  helperText,
  className,
  id,
  name,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  onFocus,
  onBlur,
  ...props
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  
  const isInteractive = !readOnly && !disabled
  const currentRating = hoverRating !== null ? hoverRating : value
  
  const handleStarClick = useCallback((starValue: number) => {
    if (!isInteractive) return
    onChange?.(starValue)
  }, [isInteractive, onChange])
  
  const handleStarHover = useCallback((starValue: number | null) => {
    if (!isInteractive) return
    setHoverRating(starValue)
  }, [isInteractive])
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent, starIndex: number) => {
    if (!isInteractive) return
    
    const step = allowHalf ? 0.5 : 1
    let newValue = value
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault()
        newValue = Math.min(maxRating, value + step)
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault()
        newValue = Math.max(0, value - step)
        break
      case 'Home':
        e.preventDefault()
        newValue = allowHalf ? 0.5 : 1
        break
      case 'End':
        e.preventDefault()
        newValue = maxRating
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        newValue = starIndex + 1
        break
      default:
        return
    }
    
    onChange?.(newValue)
  }, [isInteractive, allowHalf, maxRating, value, onChange])
  
  const getStarFillAmount = useCallback((starIndex: number): number => {
    const starValue = starIndex + 1
    
    if (currentRating >= starValue) return 1
    if (currentRating > starIndex && currentRating < starValue) {
      return currentRating - starIndex
    }
    return 0
  }, [currentRating])
  
  const ratingId = id || `rating-${Math.random().toString(36).substr(2, 9)}`
  const helperTextId = `${ratingId}-helper`
  
  const describedBy = [
    ariaDescribedBy,
    helperText ? helperTextId : undefined,
  ]
    .filter(Boolean)
    .join(' ') || undefined
  
  const StarComponent = icon || <DefaultStarIcon />
  const EmptyStarComponent = emptyIcon || <DefaultStarIcon />
  
  return (
    <RatingContainer
      className={className}
      size={size}
      disabled={disabled}
      {...props}
    >
      {label && (
        <RatingLabel 
          htmlFor={ratingId}
          disabled={disabled}
          className="rating-label"
        >
          {label}
        </RatingLabel>
      )}
      
      <StarsContainer
        id={ratingId}
        readOnly={readOnly}
        disabled={disabled}
        tabIndex={isInteractive ? 0 : -1}
        role="slider"
        aria-label={ariaLabel || `Rating: ${value} out of ${maxRating} stars`}
        aria-describedby={describedBy}
        aria-valuemin={0}
        aria-valuemax={maxRating}
        aria-valuenow={value}
        aria-readonly={readOnly}
        aria-disabled={disabled}
        onFocus={onFocus}
        onBlur={(e) => {
          setHoverRating(null)
          onBlur?.(e)
        }}
        onMouseLeave={() => handleStarHover(null)}
        onKeyDown={(e) => handleKeyDown(e, Math.floor(value))}
      >
        {Array.from({ length: maxRating }, (_, index) => {
          const starIndex = index
          const fillAmount = getStarFillAmount(starIndex)
          const isHovered = hoverRating !== null && hoverRating > starIndex
          
          return (
            <StarButton
              key={starIndex}
              filled={fillAmount}
              hover={isHovered}
              readOnly={readOnly}
              disabled={disabled}
              className="rating-star"
              tabIndex={-1}
              onClick={() => {
                if (allowHalf) {
                  // For half stars, we need to determine if click was on left or right half
                  handleStarClick(starIndex + 1)
                } else {
                  handleStarClick(starIndex + 1)
                }
              }}
              onMouseEnter={() => handleStarHover(starIndex + 1)}
              onMouseMove={(e) => {
                if (!allowHalf) return
                
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const isLeftHalf = x < rect.width / 2
                const hoverValue = starIndex + (isLeftHalf ? 0.5 : 1)
                handleStarHover(hoverValue)
              }}
            >
              <StarIcon className="star-bg">
                {EmptyStarComponent}
              </StarIcon>
              <StarIcon className="star-fill">
                {StarComponent}
              </StarIcon>
            </StarButton>
          )
        })}
      </StarsContainer>
      
      {helperText && (
        <HelperText id={helperTextId} className="rating-helper">
          {helperText}
        </HelperText>
      )}
    </RatingContainer>
  )
}