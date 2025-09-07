// Template Types
export type { 
  BaseTemplateProps,
  TemplateConfig,
  ConfigurableTemplateProps,
  SectionProps,
  ResponsiveLayoutProps,
  HeaderProps,
  SidebarProps,
  MainContentProps,
  FooterProps
} from './types'

// Base Components
export { BaseTemplate } from './BaseTemplate'
export { Section } from './Section'

// Configuration System
export { 
  TemplateProvider, 
  useTemplateConfig,
  useTemplateSpacing,
  useTemplateTheme,
  useTemplateLayout,
  ConfigurableComponent
} from './TemplateProvider'

// Template Layouts
export { LandingPageTemplate } from './LandingPageTemplate'
export { DashboardTemplate } from './DashboardTemplate'
export { ArticleTemplate } from './ArticleTemplate'
export { ProductGridTemplate, CheckoutTemplate } from './EcommerceTemplate'

// Convenience Exports
export const Templates = {
  LandingPage: 'LandingPageTemplate',
  Dashboard: 'DashboardTemplate', 
  Article: 'ArticleTemplate',
  ProductGrid: 'ProductGridTemplate',
  Checkout: 'CheckoutTemplate'
} as const