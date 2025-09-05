import { useContext, useCallback } from 'react'
import { ToastContext, ToastContextType } from './ToastContext'
import { ToastProps } from './Toast'

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const useToastHelpers = () => {
  const { toast } = useToast()
  
  return {
    success: useCallback((props: Omit<ToastProps, 'id' | 'variant'>) => 
      toast({ ...props, variant: 'success' }), [toast]),
    error: useCallback((props: Omit<ToastProps, 'id' | 'variant'>) => 
      toast({ ...props, variant: 'error' }), [toast]),
    warning: useCallback((props: Omit<ToastProps, 'id' | 'variant'>) => 
      toast({ ...props, variant: 'warning' }), [toast]),
    info: useCallback((props: Omit<ToastProps, 'id' | 'variant'>) => 
      toast({ ...props, variant: 'info' }), [toast]),
  }
}