import type { Meta, StoryObj } from '@storybook/react'
import { Section } from './Section'
import { Box } from './Box'
import { Typography } from './Typography'
import { Stack } from './Stack'
import { Grid } from './Grid'

const meta: Meta<typeof Section> = {
  title: 'Foundation/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['section', 'header', 'main', 'aside', 'footer', 'article'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'hero', 'feature', 'content', 'footer'],
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'accent', 'dark', 'transparent'],
    },
    bordered: {
      control: { type: 'select' },
      options: [false, true, 'top', 'bottom', 'both'],
    },
    minHeight: {
      control: { type: 'select' },
      options: ['auto', 'screen', '400px', '600px'],
    },
    container: {
      control: { type: 'select' },
      options: [false, true, 'sm', 'md', 'lg', 'xl', '2xl', 'prose', 'narrow', 'wide', 'fluid'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

const ContentBox = ({ children, height = "auto" }: { children: React.ReactNode, height?: string }) => (
  <Box bg="blue" p={6} borderRadius="md" height={height} display="flex" alignItems="center" justifyContent="center">
    <Typography color="white" align="center">{children}</Typography>
  </Box>
)

export const Default: Story = {
  args: {
    variant: 'default',
    container: true,
  },
  render: (args) => (
    <Section {...args}>
      <ContentBox>
        Default Section - Basic section with standard padding and transparent background
      </ContentBox>
    </Section>
  ),
}

export const Variants: Story = {
  render: () => (
    <div>
      <Section variant="hero" container="xl">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Typography variant="h1" color="white" mb={4}>Hero Section</Typography>
          <Typography color="gray.light" mb={6} maxWidth="600px">
            Full-height hero section with dark background, perfect for landing page headers.
            Features large padding and center-aligned content.
          </Typography>
          <Box bg="blue" p={4} borderRadius="base" minWidth="160px">
            <Typography color="white" fontWeight="medium" align="center">Call to Action</Typography>
          </Box>
        </Box>
      </Section>
      
      <Section variant="feature" container="lg">
        <Stack spacing={8} align="center">
          <Typography variant="h2" align="center" color="dark">Feature Section</Typography>
          <Typography align="center" color="gray.dark" maxWidth="600px">
            Feature section with subtle background, ideal for showcasing key features and benefits.
          </Typography>
          <Grid columns={{ xs: 1, md: 3 }} gap={6} width="100%">
            <ContentBox>Feature 1</ContentBox>
            <ContentBox>Feature 2</ContentBox>
            <ContentBox>Feature 3</ContentBox>
          </Grid>
        </Stack>
      </Section>
      
      <Section variant="content" container="prose">
        <Stack spacing={6}>
          <Typography variant="h2" color="dark">Content Section</Typography>
          <Typography color="gray.dark">
            Content section optimized for readability with prose container width.
            Perfect for articles, blog posts, and text-heavy content.
          </Typography>
          <Typography color="gray.dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Stack>
      </Section>
      
      <Section variant="footer" container="xl">
        <Grid columns={{ xs: 1, md: 4 }} gap={8}>
          <Stack spacing={4}>
            <Typography variant="h5" color="white">Company</Typography>
            <Stack spacing={2}>
              <Typography color="gray.light">About</Typography>
              <Typography color="gray.light">Careers</Typography>
              <Typography color="gray.light">Contact</Typography>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Typography variant="h5" color="white">Product</Typography>
            <Stack spacing={2}>
              <Typography color="gray.light">Features</Typography>
              <Typography color="gray.light">Pricing</Typography>
              <Typography color="gray.light">Support</Typography>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Typography variant="h5" color="white">Resources</Typography>
            <Stack spacing={2}>
              <Typography color="gray.light">Documentation</Typography>
              <Typography color="gray.light">Blog</Typography>
              <Typography color="gray.light">Community</Typography>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Typography variant="h5" color="white">Legal</Typography>
            <Stack spacing={2}>
              <Typography color="gray.light">Privacy</Typography>
              <Typography color="gray.light">Terms</Typography>
              <Typography color="gray.light">Security</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Section>
    </div>
  ),
}

export const SemanticElements: Story = {
  render: () => (
    <div>
      <Section as="header" variant="default" container="xl" background="dark">
        <Box display="flex" justifyContent="between" alignItems="center" py={4}>
          <Typography variant="h4" color="white">RSPWN</Typography>
          <Box display="flex" gap={6}>
            <Typography color="gray.light">Home</Typography>
            <Typography color="gray.light">About</Typography>
            <Typography color="gray.light">Contact</Typography>
          </Box>
        </Box>
      </Section>
      
      <Section as="main" variant="content" container="lg">
        <ContentBox height="300px">
          Main Content Area - Uses semantic &lt;main&gt; element
        </ContentBox>
      </Section>
      
      <Section as="aside" variant="feature" container="narrow">
        <ContentBox height="200px">
          Sidebar Content - Uses semantic &lt;aside&gt; element
        </ContentBox>
      </Section>
      
      <Section as="footer" variant="footer" container="xl">
        <Typography color="gray.light" align="center">
          © 2024 RSPWN. All rights reserved. - Uses semantic &lt;footer&gt; element
        </Typography>
      </Section>
    </div>
  ),
}

export const BackgroundOptions: Story = {
  render: () => (
    <Stack spacing={0}>
      <Section background="default" paddingY={8} container="lg">
        <ContentBox>Default Background (White)</ContentBox>
      </Section>
      
      <Section background="subtle" paddingY={8} container="lg">
        <Box bg="dark" p={6} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
          <Typography color="white" align="center">Subtle Background (Light Gray)</Typography>
        </Box>
      </Section>
      
      <Section background="dark" paddingY={8} container="lg">
        <ContentBox>Dark Background</ContentBox>
      </Section>
      
      <Section background="accent" paddingY={8} container="lg">
        <Box bg="white" p={6} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
          <Typography color="dark" align="center">Accent Background (Blue)</Typography>
        </Box>
      </Section>
      
      <Section background="transparent" paddingY={8} container="lg" style={{ backgroundColor: '#f0f0f0' }}>
        <ContentBox>Transparent Background</ContentBox>
      </Section>
    </Stack>
  ),
}

export const Borders: Story = {
  render: () => (
    <Stack spacing={0}>
      <Section paddingY={6} container="lg" bordered="top">
        <ContentBox>Top Border Only</ContentBox>
      </Section>
      
      <Section paddingY={6} container="lg" bordered="bottom">
        <ContentBox>Bottom Border Only</ContentBox>
      </Section>
      
      <Section paddingY={6} container="lg" bordered="both">
        <ContentBox>Top and Bottom Borders</ContentBox>
      </Section>
      
      <Section paddingY={6} container="lg" bordered={true}>
        <ContentBox>Boolean Border (Both)</ContentBox>
      </Section>
    </Stack>
  ),
}

export const ContainerIntegration: Story = {
  render: () => (
    <Stack spacing={8}>
      <div>
        <Typography variant="h3" mb={4} align="center" color="dark">Container Integration</Typography>
        
        <Section paddingY={6} background="subtle">
          <ContentBox>No Container - Full Width</ContentBox>
        </Section>
      </div>
      
      <Section paddingY={6} container="sm" background="subtle">
        <ContentBox>Small Container (640px)</ContentBox>
      </Section>
      
      <Section paddingY={6} container="lg" background="subtle">
        <ContentBox>Large Container (1024px)</ContentBox>
      </Section>
      
      <Section paddingY={6} container="prose" background="subtle">
        <Box bg="dark" p={6} borderRadius="md">
          <Typography color="white">
            Prose Container (65ch) - Optimized for reading. This text demonstrates 
            the optimal line length for readability. The prose container ensures 
            text doesn't get too wide, making it easier to read long-form content.
          </Typography>
        </Box>
      </Section>
      
      <Section paddingY={6} container="wide" background="subtle">
        <ContentBox>Wide Container (1536px) - Great for dashboards</ContentBox>
      </Section>
    </Stack>
  ),
}

export const ResponsivePadding: Story = {
  render: () => (
    <Stack spacing={6}>
      <Section 
        paddingY={{ xs: '4', md: '8', lg: '16' }}
        container="lg"
        background="subtle"
      >
        <ContentBox>
          Responsive Vertical Padding<br/>
          XS: 16px, MD: 32px, LG: 64px
        </ContentBox>
      </Section>
      
      <Section 
        paddingY={12}
        marginY={{ xs: '4', lg: '8' }}
        container="lg"
        background="dark"
      >
        <ContentBox>
          Fixed Padding with Responsive Margin<br/>
          Padding: 48px, Margin: 16px → 32px
        </ContentBox>
      </Section>
    </Stack>
  ),
}

export const MinHeight: Story = {
  render: () => (
    <Stack spacing={0}>
      <Section minHeight="screen" background="dark" container="xl">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <Typography variant="h1" color="white" mb={4}>Full Screen Height</Typography>
          <Typography color="gray.light" align="center">
            This section uses minHeight="screen" to fill the viewport height
          </Typography>
        </Box>
      </Section>
      
      <Section minHeight="400px" background="subtle" container="lg">
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <ContentBox>Fixed Height (400px)</ContentBox>
        </Box>
      </Section>
    </Stack>
  ),
}

export const LandingPageExample: Story = {
  render: () => (
    <div>
      {/* Hero Section */}
      <Section variant="hero" container="xl">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Typography variant="h1" color="white" mb={6} style={{ fontSize: '3.5rem' }}>
            Welcome to RSPWN
          </Typography>
          <Typography color="gray.light" mb={8} maxWidth="600px" variant="h5">
            The ultimate gaming platform designed for professionals and enthusiasts alike.
            Experience next-generation gaming with our cutting-edge technology.
          </Typography>
          <Stack direction="horizontal" spacing={4} align="center">
            <Box bg="blue" p={4} borderRadius="base" minWidth="160px">
              <Typography color="white" fontWeight="medium" align="center">Get Started</Typography>
            </Box>
            <Box border="1px solid" borderColor="gray.base" p={4} borderRadius="base" minWidth="160px">
              <Typography color="gray.light" fontWeight="medium" align="center">Learn More</Typography>
            </Box>
          </Stack>
        </Box>
      </Section>

      {/* Features Section */}
      <Section variant="feature" container="xl">
        <Stack spacing={12} align="center">
          <Stack spacing={4} align="center" maxWidth="800px">
            <Typography variant="h2" align="center" color="dark">
              Everything You Need
            </Typography>
            <Typography align="center" color="gray.dark" variant="body1">
              Comprehensive tools and features designed to elevate your gaming experience
              to professional levels with industry-leading performance.
            </Typography>
          </Stack>
          
          <Grid columns={{ xs: 1, md: 3 }} gap={8}>
            <Stack spacing={4} align="center">
              <Box bg="blue" p={4} borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">
                <Typography color="white" variant="h3">⚡</Typography>
              </Box>
              <Typography variant="h4" color="dark" align="center">Lightning Fast</Typography>
              <Typography color="gray.dark" align="center">
                Ultra-low latency gaming with optimized performance for competitive play.
              </Typography>
            </Stack>
            
            <Stack spacing={4} align="center">
              <Box bg="purple" p={4} borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">
                <Typography color="white" variant="h3">🎯</Typography>
              </Box>
              <Typography variant="h4" color="dark" align="center">Precision Control</Typography>
              <Typography color="gray.dark" align="center">
                Advanced input systems and customizable controls for every gaming style.
              </Typography>
            </Stack>
            
            <Stack spacing={4} align="center">
              <Box bg="gray.dark" p={4} borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">
                <Typography color="white" variant="h3">🛡️</Typography>
              </Box>
              <Typography variant="h4" color="dark" align="center">Secure Platform</Typography>
              <Typography color="gray.dark" align="center">
                Enterprise-grade security with advanced anti-cheat and data protection.
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Section>

      {/* Stats Section */}
      <Section paddingY={16} background="dark" container="xl">
        <Grid columns={{ xs: 1, sm: 2, lg: 4 }} gap={8}>
          <Stack spacing={2} align="center">
            <Typography variant="h1" color="blue" fontWeight="bold">1M+</Typography>
            <Typography color="gray.light" align="center">Active Players</Typography>
          </Stack>
          <Stack spacing={2} align="center">
            <Typography variant="h1" color="blue" fontWeight="bold">99.9%</Typography>
            <Typography color="gray.light" align="center">Uptime</Typography>
          </Stack>
          <Stack spacing={2} align="center">
            <Typography variant="h1" color="blue" fontWeight="bold">50+</Typography>
            <Typography color="gray.light" align="center">Game Titles</Typography>
          </Stack>
          <Stack spacing={2} align="center">
            <Typography variant="h1" color="blue" fontWeight="bold">24/7</Typography>
            <Typography color="gray.light" align="center">Support</Typography>
          </Stack>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section paddingY={20} background="subtle" container="narrow">
        <Stack spacing={8} align="center">
          <Typography variant="h2" align="center" color="dark">
            Ready to Level Up?
          </Typography>
          <Typography align="center" color="gray.dark" maxWidth="500px">
            Join millions of gamers already using RSPWN to dominate the competition.
            Start your journey today with our free tier.
          </Typography>
          <Box bg="blue" p={5} borderRadius="base" minWidth="200px">
            <Typography color="white" fontWeight="medium" align="center" variant="h5">
              Start Free Trial
            </Typography>
          </Box>
        </Stack>
      </Section>

      {/* Footer */}
      <Section variant="footer" container="xl">
        <Stack spacing={8}>
          <Grid columns={{ xs: 1, sm: 2, lg: 4 }} gap={8}>
            <Stack spacing={4}>
              <Typography variant="h4" color="white">RSPWN</Typography>
              <Typography color="gray.light">
                The ultimate gaming platform for professionals and enthusiasts.
              </Typography>
            </Stack>
            <Stack spacing={4}>
              <Typography variant="h5" color="white">Product</Typography>
              <Stack spacing={2}>
                <Typography color="gray.light">Features</Typography>
                <Typography color="gray.light">Pricing</Typography>
                <Typography color="gray.light">API</Typography>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Typography variant="h5" color="white">Support</Typography>
              <Stack spacing={2}>
                <Typography color="gray.light">Documentation</Typography>
                <Typography color="gray.light">Help Center</Typography>
                <Typography color="gray.light">Contact</Typography>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Typography variant="h5" color="white">Company</Typography>
              <Stack spacing={2}>
                <Typography color="gray.light">About</Typography>
                <Typography color="gray.light">Careers</Typography>
                <Typography color="gray.light">News</Typography>
              </Stack>
            </Stack>
          </Grid>
          
          <Box borderTop="1px solid" borderColor="gray.base" pt={6}>
            <Typography color="gray.light" align="center">
              © 2024 RSPWN. All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Section>
    </div>
  ),
}