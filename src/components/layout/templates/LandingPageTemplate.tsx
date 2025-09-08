import React from 'react'
import { BaseTemplate } from './BaseTemplate'
import { Section } from '../../foundation/Section'
import { Stack } from '../../foundation/Stack'
import { Typography } from '../../foundation/Typography'

export interface LandingPageTemplateProps {
  children: React.ReactNode
  className?: string
}

interface LandingSectionProps {
  children: React.ReactNode
  className?: string
}

const LandingPageRoot: React.FC<LandingPageTemplateProps> = ({ 
  children, 
  className
}) => (
  <BaseTemplate variant="fullscreen" className={className}>
    <Stack variant="loose">
      {children}
    </Stack>
  </BaseTemplate>
)

const Hero: React.FC<LandingSectionProps> = ({ children, className }) => (
  <Section as="header" variant="hero" className={className}>
    <div style={{ textAlign: 'center' }}>
      {children}
    </div>
  </Section>
)

const Features: React.FC<LandingSectionProps> = ({ children, className }) => (
  <Section variant="feature" className={className}>
    <Stack variant="loose">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography variant="heading">Why Choose RSPWN?</Typography>
        <Typography color="muted">
          The competitive advantages that set our platform apart
        </Typography>
      </div>
      {children}
    </Stack>
  </Section>
)

const About: React.FC<LandingSectionProps> = ({ children, className }) => (
  <Section variant="content" className={className}>
    <Stack variant="default">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="heading">About RSPWN</Typography>
        <Typography color="muted">
          The story behind the ultimate gaming platform
        </Typography>
      </div>
      {children}
    </Stack>
  </Section>
)

const CTA: React.FC<LandingSectionProps> = ({ children, className }) => (
  <Section variant="feature" className={className}>
    <div style={{ textAlign: 'center' }}>
      {children}
    </div>
  </Section>
)

const Footer: React.FC<LandingSectionProps> = ({ children, className }) => (
  <Section as="footer" variant="footer" className={className}>
    {children}
  </Section>
)

export const LandingPageTemplate = Object.assign(LandingPageRoot, {
  Hero,
  Features,
  About,
  CTA,
  Footer
})