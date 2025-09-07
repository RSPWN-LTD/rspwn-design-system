import React, { createContext, useContext } from 'react'
import { TemplateConfig } from './types'

interface TemplateContextValue extends TemplateConfig {
  updateConfig?: (config: Partial<TemplateConfig>) => void
}

const defaultTemplateConfig: TemplateConfig = {
  spacing: 'normal',
  theme: 'light',
  layout: 'wide'
}

const TemplateContext = createContext<TemplateContextValue>(defaultTemplateConfig)

export interface TemplateProviderProps {
  children: React.ReactNode
  config?: TemplateConfig
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({ 
  children, 
  config = defaultTemplateConfig 
}) => {
  const [templateConfig, setTemplateConfig] = React.useState<TemplateConfig>(config)

  const updateConfig = React.useCallback((newConfig: Partial<TemplateConfig>) => {
    setTemplateConfig(prev => ({ ...prev, ...newConfig }))
  }, [])

  const contextValue = React.useMemo(() => ({
    ...templateConfig,
    updateConfig
  }), [templateConfig, updateConfig])

  return (
    <TemplateContext.Provider value={contextValue}>
      {children}
    </TemplateContext.Provider>
  )
}

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

interface ConfigurableComponentProps {
  children: (config: TemplateConfig) => React.ReactNode
}

export const ConfigurableComponent: React.FC<ConfigurableComponentProps> = ({ children }) => {
  const config = useTemplateConfig()
  return <>{children(config)}</>
}