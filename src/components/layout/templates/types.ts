import React from 'react'
import { Breakpoint } from '../../../utils/responsive'

export interface BaseTemplateProps {
  children?: React.ReactNode
  className?: string
  id?: string
}

export interface TemplateConfig {
  spacing?: 'compact' | 'normal' | 'relaxed'
  theme?: 'light' | 'dark' | 'gaming'
  layout?: 'narrow' | 'wide' | 'full'
}

export interface ConfigurableTemplateProps extends BaseTemplateProps {
  config?: TemplateConfig
}

export interface SectionProps extends BaseTemplateProps {
  variant?: 'hero' | 'feature' | 'content' | 'accent' | 'footer' | 'sidebar'
  background?: 'default' | 'subtle' | 'dark' | 'accent' | 'transparent'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  as?: keyof JSX.IntrinsicElements
}

export interface ResponsiveLayoutProps extends BaseTemplateProps {
  columns?: number | Record<Breakpoint, number>
  gap?: string | Record<Breakpoint, string>
  minHeight?: string
}

export interface HeaderProps extends BaseTemplateProps {
  sticky?: boolean
  height?: string
  background?: 'default' | 'dark' | 'transparent'
  border?: boolean
}

export interface SidebarProps extends BaseTemplateProps {
  width?: string | Record<Breakpoint, string>
  position?: 'left' | 'right'
  collapsible?: boolean
  collapsed?: boolean
  onToggle?: () => void
}

export interface MainContentProps extends BaseTemplateProps {
  maxWidth?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface FooterProps extends BaseTemplateProps {
  sticky?: boolean
  background?: 'default' | 'dark' | 'subtle'
  border?: boolean
}