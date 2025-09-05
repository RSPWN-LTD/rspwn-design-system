import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styled, { css, keyframes } from 'styled-components'
import { ToastContext, ToastContextType } from './ToastContext'

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
  onDismiss?: () => void
  dismissible?: boolean
}


const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

const swipeOut = keyframes`
  from {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  to {
    transform: translateX(100%);
  }
`

const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  width: 420px;
  max-width: 100vw;
  padding: ${({ theme }) => theme.spacing[4]};
  pointer-events: none;
  
  @media (max-width: 640px) {
    left: 0;
    right: 0;
    width: auto;
    padding: ${({ theme }) => theme.spacing[3]};
  }
`

const getVariantStyles = (variant: ToastProps['variant'] = 'default') => {
  const variants = {
    default: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border: 1px solid ${({ theme }) => theme.colors.gray.light};
      
      &::before {
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      }
    `,
    success: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border: 1px solid ${({ theme }) => theme.colors.semantic.success}40;
      
      &::before {
        background-color: ${({ theme }) => theme.colors.semantic.success};
      }
    `,
    error: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border: 1px solid ${({ theme }) => theme.colors.semantic.error}40;
      
      &::before {
        background-color: ${({ theme }) => theme.colors.semantic.error};
      }
    `,
    warning: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border: 1px solid ${({ theme }) => theme.colors.semantic.warning}40;
      
      &::before {
        background-color: ${({ theme }) => theme.colors.semantic.warning};
      }
    `,
    info: css`
      background-color: ${({ theme }) => theme.colors.gray.base};
      border: 1px solid ${({ theme }) => theme.colors.innovation.primaryBlue}40;
      
      &::before {
        background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      }
    `,
  }
  
  return variants[variant]
}

const ToastItem = styled.div<{ 
  variant?: ToastProps['variant']
  isRemoving?: boolean 
}>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray.base};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  pointer-events: auto;
  overflow: hidden;
  
  ${({ variant }) => getVariantStyles(variant)}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.sm} 0 0 ${({ theme }) => theme.radius.sm};
  }
  
  animation: ${({ isRemoving }) => isRemoving ? slideOut : slideIn} 
             ${({ theme }) => theme.durations.normal} 
             ${({ theme }) => theme.easings.easeOut} forwards;
  
  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  
  &[data-swipe="end"] {
    animation: ${swipeOut} ${({ theme }) => theme.durations.fast} ease-out;
  }
`

const ToastContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-left: ${({ theme }) => theme.spacing[2]};
`

const ToastIcon = styled.div<{ variant?: ToastProps['variant'] }>`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  
  svg {
    width: 100%;
    height: 100%;
    
    ${({ variant }) => {
      switch (variant) {
        case 'success':
          return `color: ${({ theme }: any) => theme.colors.semantic.success};`
        case 'error':
          return `color: ${({ theme }: any) => theme.colors.semantic.error};`
        case 'warning':
          return `color: ${({ theme }: any) => theme.colors.semantic.warning};`
        case 'info':
          return `color: ${({ theme }: any) => theme.colors.innovation.primaryBlue};`
        default:
          return `color: ${({ theme }: any) => theme.colors.innovation.primaryBlue};`
      }
    }}
  }
`

const ToastText = styled.div`
  flex: 1;
  min-width: 0;
`

const ToastTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const ToastDescription = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

const ToastActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`

const ToastAction = styled.button`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.light}20;
    border-color: ${({ theme }) => theme.colors.innovation.primaryBlue}60;
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }
`

const DismissButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[2]};
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  cursor: pointer;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.light}30;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray.light}30;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`

const getIcon = (variant: ToastProps['variant'] = 'default') => {
  const icons = {
    success: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  }
  
  return icons[variant]
}

interface ToastItemComponentProps {
  toast: ToastProps
  isRemoving: boolean
  onDismiss: (id: string) => void
}

const ToastItemComponent: React.FC<ToastItemComponentProps> = ({ 
  toast, 
  isRemoving, 
  onDismiss 
}) => {
  return (
    <ToastItem variant={toast.variant} isRemoving={isRemoving}>
      <ToastContent>
        <ToastIcon variant={toast.variant}>
          {getIcon(toast.variant)}
        </ToastIcon>
        <ToastText>
          {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
          {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          {toast.action && (
            <ToastActions>
              <ToastAction onClick={toast.action.onClick}>
                {toast.action.label}
              </ToastAction>
            </ToastActions>
          )}
        </ToastText>
      </ToastContent>
      {toast.dismissible !== false && (
        <DismissButton
          onClick={() => onDismiss(toast.id)}
          aria-label="Close notification"
        >
          <svg viewBox="0 0 14 14" fill="none">
            <path
              d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DismissButton>
      )}
    </ToastItem>
  )
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const [removingToasts, setRemovingToasts] = useState<Set<string>>(new Set())

  const dismiss = useCallback((id: string) => {
    setRemovingToasts(prev => new Set([...prev, id]))
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
      setRemovingToasts(prev => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })
    }, 300) // Match animation duration
  }, [])

  const toast = useCallback((props: Omit<ToastProps, 'id'>): string => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: ToastProps = {
      id,
      duration: 4000,
      dismissible: true,
      ...props,
    }

    setToasts(prev => [...prev, newToast])

    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        dismiss(id)
      }, newToast.duration)
    }

    return id
  }, [dismiss])

  const dismissAll = useCallback(() => {
    const allIds = toasts.map(t => t.id)
    setRemovingToasts(new Set(allIds))
    
    setTimeout(() => {
      setToasts([])
      setRemovingToasts(new Set())
    }, 300)
  }, [toasts])

  const contextValue: ToastContextType = {
    toasts,
    toast,
    dismiss,
    dismissAll,
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <ToastContainer>
          {toasts.map(t => (
            <ToastItemComponent
              key={t.id}
              toast={t}
              isRemoving={removingToasts.has(t.id)}
              onDismiss={dismiss}
            />
          ))}
        </ToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export { ToastProvider as Toaster }