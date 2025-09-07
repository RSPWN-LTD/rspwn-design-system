import React from 'react'
import { TemplateConfig } from './types'
import { TemplateContext } from './context'
import type { TemplateContextValue } from './context'

const defaultTemplateConfig: TemplateConfig = {
  spacing: 'normal',
  theme: 'light',
  layout: 'wide'
}

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



interface ConfigurableComponentProps {
  children: (config: TemplateConfig) => React.ReactNode
}

export const ConfigurableComponent: React.FC<ConfigurableComponentProps> = ({ children }) => {
  const config = useTemplateConfig()
  return <>{children(config)}</>
}