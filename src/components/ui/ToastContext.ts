import { createContext } from 'react'
import { ToastProps } from './Toast'

export interface ToastContextType {
  toasts: ToastProps[]
  toast: (props: Omit<ToastProps, 'id'>) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)