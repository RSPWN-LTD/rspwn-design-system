import { useContext } from 'react'
import { TemplateContext } from './context'
import type { TemplateContextValue } from './context'

export const useTemplateConfig = (): TemplateContextValue => {
  const context = useContext(TemplateContext)
  if (!context) {
    throw new Error('useTemplateConfig must be used within a TemplateProvider')
  }
  return context
}

export const useTemplateSpacing = () => {
  const { spacing } = useTemplateConfig()
  return spacing
}

export const useTemplateTheme = () => {
  const { theme } = useTemplateConfig()
  return theme
}

export const useTemplateLayout = () => {
  const { layout } = useTemplateConfig()
  return layout
}