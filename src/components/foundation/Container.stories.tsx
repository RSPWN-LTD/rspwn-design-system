import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Container> = {
  title: 'Foundation/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'narrow', 'wide', 'prose', 'full'],
      description: 'Pre-designed container variants with optimal widths and responsive padding for different content types',
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

const ContentBox = ({ children }: { children: React.ReactNode }) => (
  <Box variant="card">
    <Typography color="white">{children}</Typography>
  </Box>
)

export const Default: Story = {
  args: {
    children: (
      <ContentBox>
        Default Container - Standard 1280px max-width with responsive padding. Perfect for most content layouts and general use cases.
      </ContentBox>
    ),
  },
  render: (args) => (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '2rem 0' }}>
      <Container {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ background: '#0a0a0a', padding: '2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <Container variant="default">
          <ContentBox>
            <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Default (1280px)</Typography>
            <Typography color="white">Standard container width suitable for most content layouts. Includes responsive padding that adapts from mobile to desktop.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="narrow">
          <ContentBox>
            <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Narrow (768px)</Typography>
            <Typography color="white">Perfect for forms, login pages, and focused content that doesn't need full width. Keeps users focused on the task at hand.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="wide">
          <ContentBox>
            <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Wide (1536px)</Typography>
            <Typography color="white">Extra wide container ideal for dashboards, data tables, and content that benefits from more horizontal space. Perfect for complex interfaces.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="prose">
          <ContentBox>
            <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Prose (65 characters)</Typography>
            <Typography color="white">Optimized for reading text content. The width is set in character units which ensures optimal line length for readability according to typography best practices. Perfect for blog posts, articles, and documentation where reading experience is paramount.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="full">
          <ContentBox>
            <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Full Width (100%)</Typography>
            <Typography color="white">Full-width container that takes up all available space. Great for hero sections, full-width backgrounds, and layouts that need to extend to the viewport edges.</Typography>
          </ContentBox>
        </Container>
      </div>
    </div>
  ),
}

export const PracticalExamples: Story = {
  render: () => (
    <div style={{ background: '#0a0a0a' }}>
      {/* Hero Section */}
      <Box variant="section">
        <Container variant="default">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Typography variant="h1" color="white" style={{ marginBottom: '1.5rem' }}>
              Welcome to RSPWN Gaming
            </Typography>
            <Typography color="white" style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.8 }}>
              Professional gaming platform for competitive esports
            </Typography>
            <Box variant="inline" style={{ background: '#4A9EFF', padding: '1rem 2rem', borderRadius: '0.5rem' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>Get Started</Typography>
            </Box>
          </div>
        </Container>
      </Box>
      
      {/* Article Section */}
      <div style={{ padding: '4rem 0', background: '#111' }}>
        <Container variant="prose">
          <Typography variant="h2" color="white" style={{ marginBottom: '2rem' }}>
            The Future of Competitive Gaming
          </Typography>
          <Typography color="white" style={{ marginBottom: '1.5rem', lineHeight: 1.7, opacity: 0.9 }}>
            Esports has evolved from a niche hobby to a global phenomenon, attracting millions of viewers and generating billions in revenue. 
            The prose container provides optimal reading width for articles like this one, ensuring comfortable reading experience across all devices.
          </Typography>
          <Typography color="white" style={{ marginBottom: '1.5rem', lineHeight: 1.7, opacity: 0.9 }}>
            Professional gamers now train with the same dedication as traditional athletes, spending countless hours perfecting their craft. 
            The industry has created new career opportunities and transformed how we think about competition and entertainment.
          </Typography>
        </Container>
      </div>
      
      {/* Login Form */}
      <div style={{ padding: '4rem 0', background: '#0a0a0a' }}>
        <Container variant="narrow">
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Typography variant="h3" color="white" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Sign In to Your Account
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Box variant="default" style={{ background: '#222', padding: '1rem', borderRadius: '0.5rem' }}>
                <Typography color="white" style={{ opacity: 0.7 }}>Email</Typography>
              </Box>
              <Box variant="default" style={{ background: '#222', padding: '1rem', borderRadius: '0.5rem' }}>
                <Typography color="white" style={{ opacity: 0.7 }}>Password</Typography>
              </Box>
              <Box variant="inline" style={{ background: '#4A9EFF', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <Typography color="white" style={{ fontWeight: 600 }}>Sign In</Typography>
              </Box>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Dashboard */}
      <div style={{ padding: '4rem 0', background: '#111' }}>
        <Container variant="wide">
          <Typography variant="h2" color="white" style={{ marginBottom: '2rem' }}>
            Gaming Dashboard
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Box variant="card" style={{ background: '#4A9EFF' }}>
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Active Players</Typography>
              <Typography variant="h1" color="white">12,847</Typography>
            </Box>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Matches Today</Typography>
              <Typography variant="h1" color="white">3,291</Typography>
            </Box>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Tournament Prize Pool</Typography>
              <Typography variant="h1" color="white">$50K</Typography>
            </Box>
            <Box variant="card">
              <Typography color="white" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Global Ranking</Typography>
              <Typography variant="h1" color="white">#47</Typography>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  ),
}

export const SemanticElements: Story = {
  render: () => (
    <div style={{ background: '#0a0a0a', padding: '2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h3" color="white" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Semantic HTML Support
        </Typography>
        
        <Container variant="default" as="main">
          <ContentBox>
            <Typography color="white">This is a semantic &lt;main&gt; element using the default container variant</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="narrow" as="section">
          <ContentBox>
            <Typography color="white">This is a semantic &lt;section&gt; element using the narrow container variant</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="prose" as="article">
          <ContentBox>
            <Typography color="white">This is a semantic &lt;article&gt; element using the prose container variant, perfect for readable content</Typography>
          </ContentBox>
        </Container>
      </div>
    </div>
  ),
}