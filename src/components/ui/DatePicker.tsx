import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  fullWidth?: boolean
  label?: string
  helperText?: string
  errorText?: string
  showCalendarIcon?: boolean
}

const getVariantStyles = (variant: DatePickerProps['variant'], error?: boolean) => {
  const errorStyles = css`
    border-color: ${({ theme }) => theme.colors.semantic.error};
    &:focus {
      border-color: ${({ theme }) => theme.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.semantic.error}40;
    }
  `

  const baseStyles = css`
    background-color: ${({ theme }) => theme.colors.gray.base};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray.dark};
      border-color: ${({ theme }) => theme.colors.gray.base};
      color: ${({ theme }) => theme.colors.text.muted};
      cursor: not-allowed;
    }

    /* Custom styles for date input */
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      opacity: 0.6;
      cursor: pointer;
    }

    &::-webkit-calendar-picker-indicator:hover {
      opacity: 1;
    }
  `

  switch (variant) {
    case 'filled':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.light};
        border: 1px solid transparent;
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
          background-color: ${({ theme }) => theme.colors.gray.light};
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          background-color: ${({ theme }) => theme.colors.gray.base};
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: ${({ theme }) => theme.colors.gray.dark};
          border-color: transparent;
          color: ${({ theme }) => theme.colors.text.muted};
          cursor: not-allowed;
        }

        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
        }

        ${error && errorStyles}
      `
    case 'outline':
      return css`
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.colors.gray.light};
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: transparent;
          border-color: ${({ theme }) => theme.colors.gray.base};
          color: ${({ theme }) => theme.colors.text.muted};
          cursor: not-allowed;
        }

        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
        }

        ${error && errorStyles}
      `
    default:
      return css`
        ${baseStyles}
        ${error && errorStyles}
      `
  }
}

const getSizeStyles = (size: DatePickerProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        height: 32px;
      `
    case 'lg':
      return css`
        padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        height: 48px;
      `
    default: // md
      return css`
        padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        height: 40px;
      `
  }
}

const DatePickerWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`

const StyledDateInput = styled.input<DatePickerProps>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  ${({ variant, error }) => getVariantStyles(variant, error)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}

  /* Hide the default calendar icon to prevent overlap with custom icon */
  &::-webkit-calendar-picker-indicator {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const CalendarIcon = styled.div.attrs<{ size?: DatePickerProps['size'] }>((props) => ({
  size: props.size || 'md'
}))<{ size?: DatePickerProps['size'] }>`
  position: absolute;
  right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size === 'sm' ? '16px' : props.size === 'lg' ? '20px' : '18px'};
  height: ${props => props.size === 'sm' ? '16px' : props.size === 'lg' ? '20px' : '18px'};
  z-index: 2;
  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23CCCCCC'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E") center/contain no-repeat;
  }
  
  &:hover::before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234A9EFF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
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

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({
  variant = 'default',
  size = 'md',
  error = false,
  fullWidth = false,
  label,
  helperText,
  errorText,
  showCalendarIcon = true,
  className,
  ...props
}, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const displayHelperText = error && errorText ? errorText : helperText

  // Use the forwarded ref or the internal ref
  const actualRef = ref || inputRef

  const handleIconClick = () => {
    if (actualRef && 'current' in actualRef && actualRef.current) {
      actualRef.current.showPicker?.()
    }
  }

  return (
    <DatePickerWrapper fullWidth={fullWidth} className={className}>
      {label && <Label>{label}</Label>}
      <InputContainer fullWidth={fullWidth}>
        <StyledDateInput
          ref={actualRef}
          type="date"
          variant={variant}
          size={size}
          error={error}
          fullWidth={fullWidth}
          showCalendarIcon={showCalendarIcon}
          {...props}
        />
        {showCalendarIcon && !props.disabled && (
          <CalendarIcon size={size} onClick={handleIconClick} />
        )}
      </InputContainer>
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
    </DatePickerWrapper>
  )
})

DatePicker.displayName = 'DatePicker'