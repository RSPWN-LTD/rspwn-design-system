import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  label?: string
  helperText?: string
  errorText?: string
  labelPosition?: 'left' | 'right'
}

const getSizeStyles = (size: SwitchProps['size']) => {
  switch (size) {
    case 'sm':
      return {
        width: '36px',
        height: '20px',
        thumbSize: '16px',
        thumbOffset: '2px',
      }
    case 'lg':
      return {
        width: '56px',
        height: '32px',
        thumbSize: '28px',
        thumbOffset: '2px',
      }
    default: // md
      return {
        width: '44px',
        height: '24px',
        thumbSize: '20px',
        thumbOffset: '2px',
      }
  }
}

const SwitchWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`

const SwitchContainer = styled.label<{ labelPosition?: SwitchProps['labelPosition'] }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  
  ${({ labelPosition }) => labelPosition === 'right' && css`
    flex-direction: row-reverse;
  `}
  
  &:hover {
    input:not(:disabled) + span {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}20;
    }
  }
`

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`

const SwitchTrack = styled.span<{ 
  checked?: boolean
  error?: boolean
  disabled?: boolean
  size?: SwitchProps['size']
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  
  ${({ size }) => {
    const styles = getSizeStyles(size)
    return css`
      width: ${styles.width};
      height: ${styles.height};
      border-radius: ${styles.height};
    `
  }}
  
  background-color: ${({ theme, checked, disabled }) => {
    if (disabled) {
      return checked 
        ? theme.colors.text.muted 
        : theme.colors.gray.base
    }
    return checked 
      ? theme.colors.innovation.primaryBlue 
      : theme.colors.gray.light
  }};
  
  border: 2px solid ${({ theme, error, checked, disabled }) => {
    if (error) return theme.colors.semantic.error
    if (disabled) {
      return checked 
        ? theme.colors.text.muted 
        : theme.colors.gray.base
    }
    return checked 
      ? theme.colors.innovation.primaryBlue 
      : theme.colors.gray.light
  }};
  
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  ${HiddenInput}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme, error }) => 
      error ? theme.colors.semantic.error : theme.colors.innovation.primaryBlue
    }40;
  }

  &::after {
    content: '';
    position: absolute;
    left: ${({ size }) => getSizeStyles(size).thumbOffset};
    
    ${({ size }) => {
      const styles = getSizeStyles(size)
      return css`
        width: ${styles.thumbSize};
        height: ${styles.thumbSize};
        border-radius: ${styles.thumbSize};
      `
    }}
    
    background-color: ${({ theme, disabled }) => 
      disabled ? theme.colors.gray.dark : theme.colors.foundation.white
    };
    
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: transform ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
    
    ${({ checked, size }) => {
      if (checked) {
        const styles = getSizeStyles(size)
        const translateX = `calc(${styles.width} - ${styles.thumbSize} - ${styles.thumbOffset} * 2)`
        return css`
          transform: translateX(${translateX});
        `
      }
      return css`
        transform: translateX(0);
      `
    }}
  }
`

const LabelText = styled.span<{ disabled?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, disabled }) => 
    disabled ? theme.colors.text.muted : theme.colors.text.primary
  };
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

const HelperText = styled.span<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ error, theme }) => 
    error ? theme.colors.semantic.error : theme.colors.text.muted
  };
`

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  size = 'md',
  error = false,
  label,
  helperText,
  errorText,
  labelPosition = 'right',
  disabled = false,
  checked,
  onChange,
  className,
  ...props
}, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(checked ?? false)
  const isControlled = checked !== undefined
  const checkedState = isControlled ? checked : internalChecked

  // Update internal state when controlled value changes
  React.useEffect(() => {
    if (!isControlled && checked !== undefined) {
      setInternalChecked(checked)
    }
  }, [checked, isControlled])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked)
    }
    onChange?.(e)
  }

  const displayHelperText = error && errorText ? errorText : helperText

  return (
    <SwitchWrapper className={className}>
      <SwitchContainer labelPosition={labelPosition}>
        <HiddenInput
          ref={ref}
          checked={checkedState}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <SwitchTrack
          checked={checkedState}
          error={error}
          disabled={disabled}
          size={size}
        />
        {label && (
          <LabelText disabled={disabled}>
            {label}
          </LabelText>
        )}
      </SwitchContainer>
      {displayHelperText && (
        <HelperText error={error}>{displayHelperText}</HelperText>
      )}
    </SwitchWrapper>
  )
})

Switch.displayName = 'Switch'