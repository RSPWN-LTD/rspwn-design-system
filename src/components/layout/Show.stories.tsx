import type { Meta, StoryObj } from '@storybook/react'
import { Show, Hide, ShowOnMobile, ShowOnTablet, ShowOnDesktop, HideOnMobile, HideOnTablet, HideOnDesktop } from './Show'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Grid } from '../foundation/Grid'
import { Card } from '../ui/Card'
import { useScreenSize, useBreakpointValue, useCurrentBreakpoint } from '../../hooks/useMediaQuery'

const meta: Meta<typeof Show> = {
  title: 'Layout/Show',
  component: Show,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Show/Hide components provide conditional rendering based on breakpoint conditions. Perfect for responsive design where content should appear or disappear at specific screen sizes.

## Features

- **Breakpoint Conditions**: Show above, below, only at, or between specific breakpoints
- **Multiple Breakpoints**: Support for arrays of breakpoints in 'only' condition
- **Fallback Content**: Optional fallback content when main content is hidden
- **Convenience Components**: Pre-configured components for common use cases
- **TypeScript Support**: Full type safety with responsive value types

## Breakpoint System

- **xs**: 480px+ (extra small)
- **sm**: 640px+ (small / mobile)
- **md**: 768px+ (medium / tablet)
- **lg**: 1024px+ (large / desktop)
- **xl**: 1280px+ (extra large)
- **2xl**: 1536px+ (2x extra large)

## Semantic Breakpoints

- **mobile**: 640px+ (equivalent to sm)
- **tablet**: 768px+ (equivalent to md)
- **desktop**: 1024px+ (equivalent to lg)
- **wide**: 1280px+ (equivalent to xl)

## Best Practices

- Use semantic breakpoint names for better readability
- Combine with responsive props for complete responsive design
- Test across different screen sizes during development
- Consider performance implications of conditional rendering
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    above: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'mobile', 'tablet', 'desktop', 'wide'],
      description: 'Show content above this breakpoint'
    },
    below: {
      control: 'select', 
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'mobile', 'tablet', 'desktop', 'wide'],
      description: 'Show content below this breakpoint'
    }
  }
}

export default meta
type Story = StoryObj<typeof Show>

// Helper component to show current screen info
const ScreenInfo = () => {
  const screenSize = useScreenSize()
  const currentBreakpoint = useCurrentBreakpoint()
  
  return (
    <Card padding="4" marginBottom="6" background="subtle">
      <Typography variant="h6" marginBottom="3">Current Screen Info</Typography>
      <Grid columns={2} gap="4">
        <Box>
          <Typography variant="body2" color="muted">Screen Width:</Typography>
          <Typography fontWeight="medium">{screenSize.width}px</Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="muted">Breakpoint:</Typography>
          <Typography fontWeight="medium">{currentBreakpoint}</Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="muted">Device Type:</Typography>
          <Typography fontWeight="medium">
            {screenSize.isMobile ? 'Mobile' : screenSize.isTablet ? 'Tablet' : 'Desktop'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="muted">Screen Height:</Typography>
          <Typography fontWeight="medium">{screenSize.height}px</Typography>
        </Box>
      </Grid>
    </Card>
  )
}

export const Basic: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Box display="flex" flexDirection="column" gap="4">
        <Show above="md">
          <Card padding="4" background="semantic.success" color="white">
            <Typography>✅ Visible on medium screens and larger (md+)</Typography>
          </Card>
        </Show>
        
        <Show below="md">
          <Card padding="4" background="semantic.info" color="white">
            <Typography>📱 Visible on small screens only (below md)</Typography>
          </Card>
        </Show>
        
        <Show only="lg">
          <Card padding="4" background="semantic.warning" color="white">
            <Typography>🖥️ Visible only on large screens (lg only)</Typography>
          </Card>
        </Show>
      </Box>
    </div>
  )
}

export const MultipleBreakpoints: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Box display="flex" flexDirection="column" gap="4">
        <Show only={['sm', 'md']}>
          <Card padding="4" background="innovation.primaryBlue" color="white">
            <Typography>📱 Visible on small and medium screens (sm, md)</Typography>
          </Card>
        </Show>
        
        <Show between={['lg', 'xl']}>
          <Card padding="4" background="innovation.secondaryPurple" color="white">
            <Typography>🖥️ Visible between large and extra large (lg to xl)</Typography>
          </Card>
        </Show>
      </Box>
    </div>
  )
}

export const WithFallback: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Show 
        above="lg"
        fallback={
          <Card padding="4" background="gray.dark" color="white">
            <Typography>📱 Fallback content for smaller screens</Typography>
          </Card>
        }
      >
        <Card padding="4" background="semantic.success" color="white">
          <Typography>🖥️ Desktop content with fallback</Typography>
        </Card>
      </Show>
    </div>
  )
}

export const SemanticBreakpoints: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Box display="flex" flexDirection="column" gap="4">
        <Show below="mobile">
          <Card padding="4" background="semantic.error" color="white">
            <Typography>📱 Extra small screens (below mobile)</Typography>
          </Card>
        </Show>
        
        <Show only="tablet">
          <Card padding="4" background="semantic.warning" color="white">
            <Typography>📱 Tablet screens only</Typography>
          </Card>
        </Show>
        
        <Show above="desktop">
          <Card padding="4" background="semantic.success" color="white">
            <Typography>🖥️ Desktop screens and larger</Typography>
          </Card>
        </Show>
        
        <Show above="wide">
          <Card padding="4" background="innovation.primaryBlue" color="white">
            <Typography>🖥️ Wide screens (1280px+)</Typography>
          </Card>
        </Show>
      </Box>
    </div>
  )
}

export const ConvenienceComponents: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Box display="flex" flexDirection="column" gap="4">
        <ShowOnMobile>
          <Card padding="4" background="semantic.info" color="white">
            <Typography>📱 Mobile Only Content</Typography>
          </Card>
        </ShowOnMobile>
        
        <ShowOnTablet>
          <Card padding="4" background="semantic.warning" color="white">
            <Typography>📱 Tablet Only Content</Typography>
          </Card>
        </ShowOnTablet>
        
        <ShowOnDesktop>
          <Card padding="4" background="semantic.success" color="white">
            <Typography>🖥️ Desktop Only Content</Typography>
          </Card>
        </ShowOnDesktop>
      </Box>
    </div>
  )
}

export const HideComponents: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Box display="flex" flexDirection="column" gap="4">
        <Card padding="4" background="gray.base" color="white">
          <Typography>🔍 Always Visible Content</Typography>
        </Card>
        
        <HideOnMobile>
          <Card padding="4" background="semantic.error" color="white">
            <Typography>❌ Hidden on Mobile</Typography>
          </Card>
        </HideOnMobile>
        
        <HideOnTablet>
          <Card padding="4" background="semantic.warning" color="white">
            <Typography>❌ Hidden on Tablet</Typography>
          </Card>
        </HideOnTablet>
        
        <HideOnDesktop>
          <Card padding="4" background="semantic.info" color="white">
            <Typography>❌ Hidden on Desktop</Typography>
          </Card>
        </HideOnDesktop>
      </Box>
    </div>
  )
}

export const ResponsiveNavigation: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      <Card padding="4" background="dark" marginBottom="6">
        <Box display="flex" alignItems="center" justifyContent="between" gap="4">
          <Typography variant="h5" color="white">RSPWN</Typography>
          
          <Show above="md">
            <Box display="flex" gap="6">
              <Typography color="gray.light">Home</Typography>
              <Typography color="gray.light">About</Typography>
              <Typography color="gray.light">Services</Typography>
              <Typography color="gray.light">Contact</Typography>
            </Box>
          </Show>
          
          <Show below="md">
            <Card padding="2" background="innovation.primaryBlue">
              <Typography color="white" fontSize="sm">☰ Menu</Typography>
            </Card>
          </Show>
        </Box>
      </Card>
      
      <Show below="md">
        <Card padding="4" background="gray.light" marginBottom="4">
          <Typography variant="h6" marginBottom="3">Mobile Menu</Typography>
          <Box display="flex" flexDirection="column" gap="3">
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Services</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Card>
      </Show>
      
      <Typography variant="body1">
        Resize your browser window to see the responsive navigation in action.
        The horizontal menu appears on desktop, while a mobile menu button appears on smaller screens.
      </Typography>
    </div>
  )
}

export const ResponsiveGrid: Story = {
  render: () => {
    const columns = useBreakpointValue({ xs: 1, sm: 2, md: 3, lg: 4 })
    
    return (
      <div>
        <ScreenInfo />
        
        <Card padding="4" background="subtle" marginBottom="6">
          <Typography variant="h6" marginBottom="2">Dynamic Grid Columns</Typography>
          <Typography variant="body2">Current columns: {columns}</Typography>
        </Card>
        
        <Grid columns={columns} gap="4">
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} padding="4">
              <Box height="100px" background="innovation.primaryBlue" borderRadius="sm" marginBottom="3" />
              <Typography variant="body2">Card {i + 1}</Typography>
            </Card>
          ))}
        </Grid>
        
        <Box marginTop="6">
          <Show above="lg">
            <Typography variant="body1">
              🖥️ Desktop view: Showing {columns} columns for optimal desktop experience
            </Typography>
          </Show>
          
          <Show only={['sm', 'md']}>
            <Typography variant="body1">
              📱 Tablet view: Showing {columns} columns for comfortable tablet browsing
            </Typography>
          </Show>
          
          <Show below="sm">
            <Typography variant="body1">
              📱 Mobile view: Single column layout for mobile optimization
            </Typography>
          </Show>
        </Box>
      </div>
    )
  }
}

export const ComplexResponsiveLayout: Story = {
  render: () => (
    <div>
      <ScreenInfo />
      
      {/* Header */}
      <Card padding="4" background="dark" marginBottom="4">
        <Box display="flex" alignItems="center" justifyContent="between">
          <Typography variant="h4" color="white">Dashboard</Typography>
          
          <Show above="md">
            <Box display="flex" gap="4">
              <Card padding="2" background="innovation.primaryBlue">
                <Typography color="white" fontSize="sm">Profile</Typography>
              </Card>
              <Card padding="2" background="semantic.success">
                <Typography color="white" fontSize="sm">Settings</Typography>
              </Card>
            </Box>
          </Show>
          
          <Show below="md">
            <Card padding="2" background="gray.base">
              <Typography color="white" fontSize="sm">⚙️</Typography>
            </Card>
          </Show>
        </Box>
      </Card>
      
      {/* Main Content */}
      <Grid columns={{ xs: 1, lg: 3 }} gap="4">
        {/* Sidebar */}
        <Show above="lg">
          <Card padding="4" background="gray.light">
            <Typography variant="h6" marginBottom="4">Sidebar</Typography>
            <Box display="flex" flexDirection="column" gap="2">
              <Typography fontSize="sm">Dashboard</Typography>
              <Typography fontSize="sm">Analytics</Typography>
              <Typography fontSize="sm">Reports</Typography>
              <Typography fontSize="sm">Settings</Typography>
            </Box>
          </Card>
        </Show>
        
        {/* Main Content Area */}
        <Box gridColumn={{ lg: 'span 2' }}>
          <Grid columns={{ xs: 1, sm: 2 }} gap="4" marginBottom="4">
            <Card padding="4">
              <Typography variant="h6" marginBottom="2">Stats</Typography>
              <Typography variant="h3" color="innovation.primaryBlue">1,234</Typography>
              
              <Show above="sm">
                <Typography variant="body2" color="muted">↗️ +12% from last month</Typography>
              </Show>
            </Card>
            
            <Card padding="4">
              <Typography variant="h6" marginBottom="2">Revenue</Typography>
              <Typography variant="h3" color="semantic.success">$45.6K</Typography>
              
              <Show above="sm">
                <Typography variant="body2" color="muted">↗️ +8% from last month</Typography>
              </Show>
            </Card>
          </Grid>
          
          <Card padding="4">
            <Typography variant="h6" marginBottom="4">Recent Activity</Typography>
            <Box display="flex" flexDirection="column" gap="3">
              {Array.from({ length: 3 }, (_, i) => (
                <Box key={i} display="flex" alignItems="center" gap="3">
                  <Box width="40px" height="40px" background="innovation.primaryBlue" borderRadius="full" />
                  <Box flex="1">
                    <Typography variant="body2">Activity {i + 1}</Typography>
                    
                    <Show above="sm">
                      <Typography variant="caption" color="muted">
                        Detailed description of the activity that happened recently
                      </Typography>
                    </Show>
                    
                    <Show below="sm">
                      <Typography variant="caption" color="muted">2h ago</Typography>
                    </Show>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Grid>
      
      {/* Mobile Navigation */}
      <Show below="lg">
        <Card 
          position="fixed" 
          bottom="0" 
          left="0" 
          right="0" 
          padding="3" 
          background="dark"
          style={{ zIndex: 1000 }}
        >
          <Box display="flex" justifyContent="around">
            {['🏠', '📊', '📋', '⚙️'].map((icon, i) => (
              <Box key={i} padding="2">
                <Typography fontSize="lg">{icon}</Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Show>
    </div>
  )
}