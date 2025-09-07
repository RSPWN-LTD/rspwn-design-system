import React from 'react'
import { BaseTemplate } from './BaseTemplate'
import { Section } from './Section'
import { ConfigurableTemplateProps, SectionProps } from './types'

interface LandingPageTemplateProps extends ConfigurableTemplateProps {}

interface LandingPageSectionProps extends Omit<SectionProps, 'variant'> {}

const LandingPageRoot: React.FC<LandingPageTemplateProps> = ({ 
  children, 
  config,
  className,
  id 
}) => (
  <BaseTemplate config={config} className={className} id={id}>
    {children}
  </BaseTemplate>
)

const Hero: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="hero" background="default" {...props}>
    {children}
  </Section>
)

const Features: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="feature" background="subtle" {...props}>
    {children}
  </Section>
)

const Testimonials: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="content" background="default" {...props}>
    {children}
  </Section>
)

const CTA: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="accent" background="accent" {...props}>
    {children}
  </Section>
)

const Footer: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="footer" background="dark" as="footer" {...props}>
    {children}
  </Section>
)

const About: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="content" background="default" {...props}>
    {children}
  </Section>
)

const Pricing: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="content" background="subtle" {...props}>
    {children}
  </Section>
)

const FAQ: React.FC<LandingPageSectionProps> = ({ children, ...props }) => (
  <Section variant="content" background="default" {...props}>
    {children}
  </Section>
)

export const LandingPageTemplate = Object.assign(LandingPageRoot, {
  Hero,
  Features,
  About,
  Testimonials,
  Pricing,
  FAQ,
  CTA,
  Footer
})