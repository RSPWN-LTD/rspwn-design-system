import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'
import { Box } from './Box'
import { Typography } from './Typography'
import { Stack } from './Stack'

const meta: Meta<typeof Container> = {
  title: 'Foundation/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'prose', 'narrow', 'wide', 'fluid'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

const ContentBox = ({ children, height = "200px" }: { children: React.ReactNode, height?: string }) => (
  <Box bg="dark" p={6} borderRadius="md" height={height}>
    <Typography color="white">{children}</Typography>
  </Box>
)

export const Default: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <Container {...args}>
        <ContentBox>
          Default Container (xl) - This container has responsive padding and is centered with max-width of 1280px
        </ContentBox>
      </Container>
    </div>
  ),
}

export const LegacySizes: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={8}>
        <Container size="sm">
          <ContentBox>Small Container (640px)</ContentBox>
        </Container>
        
        <Container size="md">
          <ContentBox>Medium Container (768px)</ContentBox>
        </Container>
        
        <Container size="lg">
          <ContentBox>Large Container (1024px)</ContentBox>
        </Container>
        
        <Container size="xl">
          <ContentBox>Extra Large Container (1280px)</ContentBox>
        </Container>
        
        <Container size="2xl">
          <ContentBox>2XL Container (1536px)</ContentBox>
        </Container>
        
        <Container size="full">
          <ContentBox>Full Width Container (100%)</ContentBox>
        </Container>
      </Stack>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={8}>
        <Container variant="default">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Default Variant (1280px)</Typography>
            <Typography color="gray.light">Standard container width suitable for most content layouts and general use cases.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="prose">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Prose Variant (65ch)</Typography>
            <Typography color="gray.light">
              Optimized for reading text content. The width is set in character units (65ch) which ensures 
              optimal line length for readability according to typography best practices. Perfect for blog posts, 
              articles, and documentation.
            </Typography>
          </ContentBox>
        </Container>
        
        <Container variant="narrow">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Narrow Variant (768px)</Typography>
            <Typography color="gray.light">Compact width perfect for forms, modals, and focused content that doesn't need the full width.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="wide">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Wide Variant (1536px)</Typography>
            <Typography color="gray.light">Extra wide container ideal for dashboards, data tables, and content that benefits from more horizontal space.</Typography>
          </ContentBox>
        </Container>
        
        <Container variant="fluid">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Fluid Variant (100%)</Typography>
            <Typography color="gray.light">Full-width container that takes up all available space. Great for backgrounds and full-width layouts.</Typography>
          </ContentBox>
        </Container>
      </Stack>
    </div>
  ),
}

export const ResponsivePadding: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={8}>
        <Container 
          variant="default" 
          paddingY={12}
        >
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Vertical Padding (paddingY)</Typography>
            <Typography color="gray.light">This container has vertical padding of 48px (paddingY={12})</Typography>
          </ContentBox>
        </Container>
        
        <Container 
          variant="default" 
          paddingX={{ xs: 2, md: 6, lg: 12 }}
        >
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Responsive Horizontal Padding</Typography>
            <Typography color="gray.light">
              Responsive horizontal padding: 8px on mobile, 24px on tablet, 48px on desktop
            </Typography>
          </ContentBox>
        </Container>
        
        <Container 
          variant="default" 
          paddingY={{ xs: 4, lg: 10 }}
        >
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Responsive Vertical Padding</Typography>
            <Typography color="gray.light">
              Responsive vertical padding: 16px on mobile, 40px on desktop
            </Typography>
          </ContentBox>
        </Container>
      </Stack>
    </div>
  ),
}

export const BreakpointPadding: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Container 
        variant="default"
        xs={{ paddingX: 2, paddingY: 4 }}
        sm={{ paddingX: 4, paddingY: 6 }}
        md={{ paddingX: 6, paddingY: 8 }}
        lg={{ paddingX: 8, paddingY: 10 }}
        xl={{ paddingX: 12, paddingY: 12 }}
      >
        <ContentBox height="300px">
          <Typography variant="h4" color="white" mb={4}>Breakpoint-Specific Padding</Typography>
          <Typography color="gray.light" mb={4}>
            This container has different padding at each breakpoint:
          </Typography>
          <Stack spacing={2}>
            <Typography color="gray.light" variant="body2">• XS: 8px horizontal, 16px vertical</Typography>
            <Typography color="gray.light" variant="body2">• SM: 16px horizontal, 24px vertical</Typography>
            <Typography color="gray.light" variant="body2">• MD: 24px horizontal, 32px vertical</Typography>
            <Typography color="gray.light" variant="body2">• LG: 32px horizontal, 40px vertical</Typography>
            <Typography color="gray.light" variant="body2">• XL: 48px horizontal, 48px vertical</Typography>
          </Stack>
        </ContentBox>
      </Container>
    </div>
  ),
}

export const CustomConstraints: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={8}>
        <Container maxWidth="600px">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Custom Max Width (600px)</Typography>
            <Typography color="gray.light">Container with custom maximum width of 600 pixels.</Typography>
          </ContentBox>
        </Container>
        
        <Container maxWidth="50rem">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Custom Max Width (50rem)</Typography>
            <Typography color="gray.light">Container with custom maximum width of 50rem (800px at default font size).</Typography>
          </ContentBox>
        </Container>
        
        <Container minWidth="800px" maxWidth="1200px">
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Min + Max Width</Typography>
            <Typography color="gray.light">
              Container with minimum width of 800px and maximum width of 1200px. 
              Resize the window to see the constraints in action.
            </Typography>
          </ContentBox>
        </Container>
      </Stack>
    </div>
  ),
}

export const GutterControl: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={8}>
        <div>
          <Typography variant="h3" mb={4} style={{ textAlign: 'center', color: '#333' }}>
            Default Gutters
          </Typography>
          <Container variant="default">
            <ContentBox>
              Container with default responsive gutters (16px → 24px → 32px)
            </ContentBox>
          </Container>
        </div>
        
        <div>
          <Typography variant="h3" mb={4} style={{ textAlign: 'center', color: '#333' }}>
            Custom Gutters
          </Typography>
          <Container variant="default" gutters={{ xs: 2, md: 8, lg: 16 }}>
            <ContentBox>
              Container with custom responsive gutters (8px → 32px → 64px)
            </ContentBox>
          </Container>
        </div>
        
        <div>
          <Typography variant="h3" mb={4} style={{ textAlign: 'center', color: '#333' }}>
            No Gutters
          </Typography>
          <Container variant="default" disableGutters>
            <ContentBox>
              Container with gutters disabled - extends to viewport edges
            </ContentBox>
          </Container>
        </div>
      </Stack>
    </div>
  ),
}

export const CenterContent: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <Container variant="narrow" centerContent style={{ minHeight: '100vh' }}>
        <Box bg="dark" p={8} borderRadius="lg" textAlign="center" maxWidth="400px">
          <Typography variant="h2" color="white" mb={4}>Centered Content</Typography>
          <Typography color="gray.light" mb={6}>
            This container uses centerContent to vertically and horizontally center its content.
          </Typography>
          <Box bg="blue" p={3} borderRadius="base" display="inline-block">
            <Typography color="white" fontWeight="medium">Call to Action</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box bg="dark" py={20}>
        <Container variant="default" centerContent>
          <Stack spacing={6} align="center" maxWidth="600px">
            <Typography variant="h1" color="white" align="center">
              Welcome to RSPWN
            </Typography>
            <Typography color="gray.light" align="center" variant="body1">
              The ultimate gaming platform designed for professionals and enthusiasts alike.
            </Typography>
            <Box bg="blue" p={4} borderRadius="base" minWidth="160px">
              <Typography color="white" fontWeight="medium" align="center">Get Started</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      
      {/* Article Section */}
      <Box py={16}>
        <Container variant="prose">
          <ContentBox height="auto">
            <Typography variant="h2" color="white" mb={6}>Article Layout</Typography>
            <Typography color="gray.light" mb={4}>
              This section uses the prose variant, which is optimized for reading with a maximum width of 65 characters. 
              This ensures optimal readability and follows typography best practices for long-form content.
            </Typography>
            <Typography color="gray.light" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
            <Typography color="gray.light">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </Typography>
          </ContentBox>
        </Container>
      </Box>
      
      {/* Form Section */}
      <Box bg="gray.light" py={16}>
        <Container variant="narrow" centerContent>
          <Box bg="white" p={8} borderRadius="lg" width="100%" maxWidth="400px">
            <Typography variant="h3" mb={6} align="center" color="dark">Sign Up</Typography>
            <Stack spacing={4}>
              <Box bg="gray.light" p={3} borderRadius="base">
                <Typography color="gray.dark">Email Address</Typography>
              </Box>
              <Box bg="gray.light" p={3} borderRadius="base">
                <Typography color="gray.dark">Password</Typography>
              </Box>
              <Box bg="blue" p={3} borderRadius="base">
                <Typography color="white" fontWeight="medium" align="center">Create Account</Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
      
      {/* Dashboard Section */}
      <Box py={16}>
        <Container variant="wide">
          <ContentBox height="auto">
            <Typography variant="h2" color="white" mb={6}>Dashboard Layout</Typography>
            <Typography color="gray.light" mb={8}>
              This section uses the wide variant for dashboard-style layouts that need more horizontal space.
            </Typography>
            <Box display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <Box bg="blue" p={4} borderRadius="base">
                <Typography color="white" fontWeight="medium" mb={2}>Active Users</Typography>
                <Typography variant="h1" color="white">1,234</Typography>
              </Box>
              <Box bg="purple" p={4} borderRadius="base">
                <Typography color="white" fontWeight="medium" mb={2}>Revenue</Typography>
                <Typography variant="h1" color="white">$45K</Typography>
              </Box>
              <Box bg="gray.base" p={4} borderRadius="base">
                <Typography color="white" fontWeight="medium" mb={2}>Conversion</Typography>
                <Typography variant="h1" color="white">12.5%</Typography>
              </Box>
              <Box bg="gray.base" p={4} borderRadius="base">
                <Typography color="white" fontWeight="medium" mb={2}>Growth</Typography>
                <Typography variant="h1" color="white">+8.2%</Typography>
              </Box>
            </Box>
          </ContentBox>
        </Container>
      </Box>
    </div>
  ),
}

export const BackwardCompatibility: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '2rem 0' }}>
      <Stack spacing={6}>
        <Typography variant="h2" align="center" color="dark" mb={4}>
          Backward Compatibility Test
        </Typography>
        
        {/* Old API should still work */}
        <Container size="md" centerContent>
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Legacy API Still Works</Typography>
            <Typography color="gray.light">
              This container uses the old API (size="md" centerContent) and should work exactly as before.
            </Typography>
          </ContentBox>
        </Container>
        
        {/* Mixed old and new props */}
        <Container size="lg" paddingY={8}>
          <ContentBox>
            <Typography variant="h4" color="white" mb={3}>Mixed API</Typography>
            <Typography color="gray.light">
              This container mixes legacy (size="lg") with new props (paddingY="8").
            </Typography>
          </ContentBox>
        </Container>
      </Stack>
    </div>
  ),
}