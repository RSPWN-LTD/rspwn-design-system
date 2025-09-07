import { createContext } from 'react'
import { TemplateConfig } from './types'

export interface TemplateContextValue extends TemplateConfig {
  updateConfig?: (config: Partial<TemplateConfig>) => void
}

const defaultTemplateConfig: TemplateConfig = {
  spacing: 'normal',
  theme: 'light',
  layout: 'wide'
}

export const TemplateContext = createContext<TemplateContextValue>(defaultTemplateConfig)