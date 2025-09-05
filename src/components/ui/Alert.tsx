import React from 'react'
import styled, { css } from 'styled-components'

export interface AlertProps {
  // Content
  title?: string
  children?: React.ReactNode
  
  // Visual variants
  severity?: 'info' | 'success' | 'warning' | 'error'
  variant?: 'filled' | 'outlined' | 'subtle'
  
  // Behavior
  dismissible?: boolean
  onClose?: () => void
  
  // Actions
  action?: React.ReactNode
  
  // Icon
  icon?: React.ReactNode
  showIcon?: boolean
  
  // Standard props
  className?: string
  role?: string
}

const getAlertColors = (severity: AlertProps['severity'], variant: AlertProps['variant']) => {
  const colors = {
    info: {
      main: css`${({ theme }) => theme.colors.innovation.primaryBlue}`,
      light: '#1e3a8a20',
      dark: '#1e3a8a',
    },
    success: {
      main: '#22c55e',
      light: '#22c55e20',
      dark: '#166534',
    },
    warning: {
      main: '#f59e0b',
      light: '#f59e0b20',
      dark: '#92400e',
    },
    error: {
      main: '#ef4444',
      light: '#ef444420',
      dark: '#dc2626',
    },
  }

  const severityColors = colors[severity || 'info']

  switch (variant) {
    case 'filled':
      return css`
        background-color: ${severityColors.main};
        color: ${({ theme }) => theme.colors.foundation.white};
        border: 1px solid ${severityColors.main};
      `
    case 'outlined':
      return css`
        background-color: transparent;
        color: ${severityColors.main};
        border: 1px solid ${severityColors.main};
      `
    case 'subtle':
    default:
      return css`
        background-color: ${severityColors.light};
        color: ${severityColors.main};
        border: 1px solid ${severityColors.light};
      `
  }
}

const getDefaultIcon = (severity: AlertProps['severity']) => {
  const iconProps = {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }

  switch (severity) {
    case 'success':
      return (
        <svg {...iconProps}>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    case 'warning':
      return (
        <svg {...iconProps}>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
      )
    case 'error':
      return (
        <svg {...iconProps}>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      )
    case 'info':
    default:
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      )
  }
}

const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ severity, variant }) => getAlertColors(severity, variant)}
  
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
`

const AlertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
`

const AlertContent = styled.div`
  flex: 1;
  min-width: 0;
`

const AlertTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeights.snug};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const AlertMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

const AlertActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
`

const CloseButton = styled.button<{ variant?: AlertProps['variant'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[1]};
  margin: -${({ theme }) => theme.spacing[1]} -${({ theme }) => theme.spacing[1]} -${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const Alert: React.FC<AlertProps> = ({
  title,
  children,
  severity = 'info',
  variant = 'subtle',
  dismissible = false,
  onClose,
  action,
  icon,
  showIcon = true,
  className,
  role = 'alert',
  ...props
}) => {
  const displayIcon = showIcon ? (icon || getDefaultIcon(severity)) : null

  return (
    <StyledAlert
      className={className}
      severity={severity}
      variant={variant}
      role={role}
      {...props}
    >
      {displayIcon && (
        <AlertIcon>
          {displayIcon}
        </AlertIcon>
      )}
      
      <AlertContent>
        {title && (
          <AlertTitle>{title}</AlertTitle>
        )}
        {children && (
          <AlertMessage>{children}</AlertMessage>
        )}
      </AlertContent>

      {action && (
        <AlertActions>
          {action}
        </AlertActions>
      )}

      {dismissible && onClose && (
        <CloseButton
          variant={variant}
          onClick={onClose}
          aria-label="Close alert"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </CloseButton>
      )}
    </StyledAlert>
  )
}