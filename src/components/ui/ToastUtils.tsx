import { css } from 'styled-components'
import { ToastProps } from './Toast'

export const getVariantStyles = (variant: ToastProps['variant'] = 'default') => {
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

export const getIcon = (variant: ToastProps['variant'] = 'default') => {
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