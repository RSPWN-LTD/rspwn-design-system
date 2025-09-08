import type { Meta, StoryObj } from '@storybook/react'
import { Section } from './Section'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Section> = {
  title: 'Foundation/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'hero', 'feature', 'content', 'footer'],
      description: 'Pre-designed section variants with optimal styling and built-in containers for different page areas',
    },
    as: {
      control: { type: 'select' },
      options: ['section', 'header', 'main', 'aside', 'footer', 'article'],
      description: 'Semantic HTML element type',
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  args: {
    children: (
      <Typography color="white">
        Default Section - Basic section with standard padding and built-in container. Perfect for general content areas.
      </Typography>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div>
      <Section variant="hero">
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h1" color="white" style={{ marginBottom: '1.5rem' }}>
            Hero Section
          </Typography>
          <Typography color="white" style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '1.25rem' }}>
            Full-height hero section with dark background and center alignment. Perfect for landing page headers and major announcements.
          </Typography>
          <Box variant="inline" style={{ background: '#4A9EFF', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
            <Typography color="white" style={{ fontWeight: 600 }}>Get Started</Typography>
          </Box>
        </div>
      </Section>
      
      <Section variant="feature">
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h2" color="white" style={{ marginBottom: '1.5rem' }}>
            Feature Section
          </Typography>
          <Typography color="white" style={{ marginBottom: '2rem', opacity: 0.8 }}>
            Feature section with dark background, ideal for showcasing key features and benefits. Includes generous padding and optimal contrast.
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Lightning Fast</Typography>
              <Typography color="white" style={{ opacity: 0.8 }}>Optimized performance for competitive gaming</Typography>
            </Box>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Secure Platform</Typography>
              <Typography color="white" style={{ opacity: 0.8 }}>Enterprise-grade security and anti-cheat</Typography>
            </Box>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>24/7 Support</Typography>
              <Typography color="white" style={{ opacity: 0.8 }}>Round-the-clock technical assistance</Typography>
            </Box>
          </div>
        </div>
      </Section>
      
      <Section variant="content">
        <Typography variant="h2" color="white" style={{ marginBottom: '2rem' }}>
          Content Section
        </Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', lineHeight: 1.7, opacity: 0.9 }}>
          Content section with prose container width, optimized for readability. Perfect for articles, blog posts, and text-heavy content where reading experience is paramount.
        </Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', lineHeight: 1.7, opacity: 0.9 }}>
          The prose variant automatically constrains content to an optimal reading width of 65 characters, ensuring comfortable line lengths that don't strain the eyes. This makes it ideal for documentation, news articles, and any long-form written content.
        </Typography>
      </Section>
      
      <Section variant="footer">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>RSPWN</Typography>
            <Typography color="white" style={{ opacity: 0.7 }}>
              The ultimate gaming platform for professionals and enthusiasts.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Product</Typography>
            <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 2 }}>
              Features<br />Pricing<br />API<br />Support
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Company</Typography>
            <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 2 }}>
              About<br />Careers<br />News<br />Contact
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Legal</Typography>
            <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 2 }}>
              Privacy<br />Terms<br />Security<br />Compliance
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  ),
}

export const SemanticElements: Story = {
  render: () => (
    <div>
      <Section as="header" variant="default">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" color="white">RSPWN</Typography>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Typography color="white" style={{ opacity: 0.8 }}>Home</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>About</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>Contact</Typography>
          </div>
        </div>
      </Section>
      
      <Section as="main" variant="content">
        <Typography color="white">
          Main Content Area - Uses semantic &lt;main&gt; element with prose container for optimal readability
        </Typography>
      </Section>
      
      <Section as="footer" variant="footer">
        <Typography color="white" style={{ textAlign: 'center', opacity: 0.7 }}>
          © 2024 RSPWN. All rights reserved. - Uses semantic &lt;footer&gt; element
        </Typography>
      </Section>
    </div>
  ),
}

export const LandingPageExample: Story = {
  render: () => (
    <div>
      <Section variant="hero">
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h1" color="white" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
            Welcome to RSPWN
          </Typography>
          <Typography color="white" style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.8 }}>
            The ultimate gaming platform designed for professionals and enthusiasts alike.
            Experience next-generation gaming with our cutting-edge technology.
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Box variant="inline" style={{ background: '#4A9EFF', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>Get Started</Typography>
            </Box>
            <Box variant="inline" style={{ border: '1px solid #4A9EFF', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>Learn More</Typography>
            </Box>
          </div>
        </div>
      </Section>

      <Section variant="feature">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography variant="h2" color="white" style={{ marginBottom: '1rem' }}>
            Everything You Need
          </Typography>
          <Typography color="white" style={{ opacity: 0.8, fontSize: '1.125rem' }}>
            Comprehensive tools and features designed to elevate your gaming experience
          </Typography>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#4A9EFF', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography style={{ fontSize: '2rem' }}>⚡</Typography>
            </div>
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Lightning Fast</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>
              Ultra-low latency gaming with optimized performance for competitive play.
            </Typography>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#8B5CF6', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography style={{ fontSize: '2rem' }}>🎯</Typography>
            </div>
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Precision Control</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>
              Advanced input systems and customizable controls for every gaming style.
            </Typography>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#374151', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography style={{ fontSize: '2rem' }}>🛡️</Typography>
            </div>
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Secure Platform</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>
              Enterprise-grade security with advanced anti-cheat and data protection.
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="footer">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>RSPWN</Typography>
            <Typography color="white" style={{ opacity: 0.7 }}>
              The ultimate gaming platform for professionals and enthusiasts.
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Product</Typography>
            <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 2 }}>
              Features<br />Pricing<br />API<br />Support
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Company</Typography>
            <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 2 }}>
              About<br />Careers<br />News<br />Contact
            </Typography>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '2rem', paddingTop: '2rem' }}>
          <Typography color="white" style={{ textAlign: 'center', opacity: 0.7 }}>
            © 2024 RSPWN. All rights reserved.
          </Typography>
        </div>
      </Section>
    </div>
  ),
}