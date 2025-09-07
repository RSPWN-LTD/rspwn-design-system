import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem } from './Grid'
import { Box } from './Box'
import { Typography } from './Typography'
import { Card } from '../ui/Card'

const meta: Meta<typeof Grid> = {
  title: 'Foundation/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Grid component provides a powerful CSS Grid implementation with advanced layout patterns and responsive controls.

## Features

- **CSS Grid Foundation**: Full CSS Grid support with columns, rows, and gap control
- **Responsive Design**: Breakpoint-specific grid configurations
- **Named Grid Areas**: Define layout areas for complex designs
- **Predefined Patterns**: Ready-to-use layouts (holy-grail, sidebar, dashboard, etc.)
- **Masonry Layouts**: Pinterest-style grid layouts
- **Auto-sizing**: Auto-fit and auto-fill column behaviors
- **Grid Items**: GridItem component for precise positioning and spanning

## Best Practices

- Use named areas for complex layouts
- Leverage predefined patterns for common designs
- Combine with responsive props for mobile-first design
- Use GridItem for precise control over positioning
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Number of columns or CSS Grid template',
      control: { type: 'text' }
    },
    rows: {
      description: 'Number of rows or CSS Grid template',
      control: { type: 'text' }
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64],
      description: 'Gap between grid items'
    },
    pattern: {
      control: 'select',
      options: ['sidebar', 'holy-grail', 'dashboard', 'cards', 'masonry'],
      description: 'Predefined grid layout pattern'
    },
    areas: {
      description: 'Grid template areas (supports responsive object)',
      control: { type: 'text' }
    },
    masonry: {
      description: 'Enable masonry (Pinterest-style) layout',
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof Grid>

const StoryGridItem = ({ children, ...props }: { children: React.ReactNode }) => (
  <Box 
    bg="dark" 
    p="md" 
    borderRadius="sm" 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    {...props}
  >
    <span style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>{children}</span>
  </Box>
)

export const Basic: Story = {
  args: {
    columns: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <StoryGridItem>Item 1</StoryGridItem>
      <StoryGridItem>Item 2</StoryGridItem>
      <StoryGridItem>Item 3</StoryGridItem>
      <StoryGridItem>Item 4</StoryGridItem>
      <StoryGridItem>Item 5</StoryGridItem>
      <StoryGridItem>Item 6</StoryGridItem>
    </Grid>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Grid 
      columns={1} 
      sm={2} 
      md={3} 
      lg={4} 
      gap="md"
    >
      <StoryGridItem>Responsive 1</StoryGridItem>
      <StoryGridItem>Responsive 2</StoryGridItem>
      <StoryGridItem>Responsive 3</StoryGridItem>
      <StoryGridItem>Responsive 4</StoryGridItem>
      <StoryGridItem>Responsive 5</StoryGridItem>
      <StoryGridItem>Responsive 6</StoryGridItem>
      <StoryGridItem>Responsive 7</StoryGridItem>
      <StoryGridItem>Responsive 8</StoryGridItem>
    </Grid>
  ),
}

export const AutoFit: Story = {
  render: () => (
    <Grid 
      autoFit 
      minColumnWidth="200px" 
      gap="md"
    >
      <StoryGridItem>Auto-fit 1</StoryGridItem>
      <StoryGridItem>Auto-fit 2</StoryGridItem>
      <StoryGridItem>Auto-fit 3</StoryGridItem>
      <StoryGridItem>Auto-fit 4</StoryGridItem>
      <StoryGridItem>Auto-fit 5</StoryGridItem>
    </Grid>
  ),
}

export const AutoFill: Story = {
  render: () => (
    <Grid 
      autoFill 
      minColumnWidth="150px" 
      gap="sm"
    >
      <StoryGridItem>Auto-fill 1</StoryGridItem>
      <StoryGridItem>Auto-fill 2</StoryGridItem>
      <StoryGridItem>Auto-fill 3</StoryGridItem>
    </Grid>
  ),
}

export const CustomColumns: Story = {
  render: () => (
    <Grid 
      columns="1fr 2fr 1fr" 
      gap="md"
    >
      <StoryGridItem>Sidebar</StoryGridItem>
      <StoryGridItem>Main Content</StoryGridItem>
      <StoryGridItem>Sidebar</StoryGridItem>
    </Grid>
  ),
}

export const WithRowsAndColumns: Story = {
  render: () => (
    <Grid 
      columns={3} 
      rows={2} 
      gap="md" 
      height="300px"
    >
      <StoryGridItem>1</StoryGridItem>
      <StoryGridItem>2</StoryGridItem>
      <StoryGridItem>3</StoryGridItem>
      <StoryGridItem>4</StoryGridItem>
      <StoryGridItem>5</StoryGridItem>
      <StoryGridItem>6</StoryGridItem>
    </Grid>
  ),
}

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Small Gap</h3>
        <Grid columns={3} gap="xs">
          <StoryGridItem>1</StoryGridItem>
          <StoryGridItem>2</StoryGridItem>
          <StoryGridItem>3</StoryGridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Medium Gap</h3>
        <Grid columns={3} gap="md">
          <StoryGridItem>1</StoryGridItem>
          <StoryGridItem>2</StoryGridItem>
          <StoryGridItem>3</StoryGridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Large Gap</h3>
        <Grid columns={3} gap="xl">
          <StoryGridItem>1</StoryGridItem>
          <StoryGridItem>2</StoryGridItem>
          <StoryGridItem>3</StoryGridItem>
        </Grid>
      </div>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Center Items</h3>
        <Grid 
          columns={3} 
          gap="md" 
          height="200px" 
          justifyItems="center" 
          alignItems="center"
          style={{ border: '1px solid #4A4A4A' }}
        >
          <StoryGridItem>Center</StoryGridItem>
          <StoryGridItem>Center</StoryGridItem>
          <StoryGridItem>Center</StoryGridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Stretch Items</h3>
        <Grid 
          columns={3} 
          gap="md" 
          height="200px" 
          justifyItems="stretch" 
          alignItems="stretch"
          style={{ border: '1px solid #4A4A4A' }}
        >
          <StoryGridItem>Stretch</StoryGridItem>
          <StoryGridItem>Stretch</StoryGridItem>
          <StoryGridItem>Stretch</StoryGridItem>
        </Grid>
      </div>
    </div>
  ),
}

// Advanced Pattern Examples
export const NamedGridAreas: Story = {
  render: () => (
    <Grid
      areas={`
        "header header header"
        "sidebar main aside"
        "footer footer footer"
      `}
      columns="200px 1fr 200px"
      rows="auto 1fr auto"
      gap={4}
      minHeight="400px"
      style={{ border: '1px solid #333' }}
    >
      <GridItem area="header">
        <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
          <Typography color="white" align="center" fontWeight="medium">
            Header Area
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="sidebar">
        <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
          <Typography color="white" align="center">
            Sidebar
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box bg="gray.base" p={6} borderRadius="sm" height="100%">
          <Typography color="white" align="center">
            Main Content Area<br />
            This area expands to fill available space
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="aside">
        <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
          <Typography color="white" align="center">
            Aside
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="footer">
        <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
          <Typography color="white" align="center" fontWeight="medium">
            Footer Area
          </Typography>
        </Box>
      </GridItem>
    </Grid>
  )
}

export const ResponsiveGridAreas: Story = {
  render: () => (
    <Grid
      areas={{
        xs: `
          "header"
          "main"
          "sidebar"
          "aside"
          "footer"
        `,
        md: `
          "header header"
          "sidebar main"
          "aside main"
          "footer footer"
        `,
        lg: `
          "header header header"
          "sidebar main aside"
          "footer footer footer"
        `
      }}
      columns={{ xs: '1fr', md: '200px 1fr', lg: '200px 1fr 200px' }}
      rows={{ xs: 'repeat(5, auto)', md: 'auto 1fr auto auto', lg: 'auto 1fr auto' }}
      gap={4}
      minHeight="500px"
      style={{ border: '1px solid #333' }}
    >
      <GridItem area="header">
        <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
          <Typography color="white" align="center" fontWeight="medium">
            Responsive Header
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="sidebar">
        <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
          <Typography color="white" align="center" fontSize="sm">
            Sidebar<br />
            (Stacks on mobile)
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box bg="gray.base" p={6} borderRadius="sm" height="100%">
          <Typography color="white" align="center">
            Main Content<br />
            Responsive layout changes at md and lg breakpoints
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="aside">
        <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
          <Typography color="white" align="center" fontSize="sm">
            Aside<br />
            (Moves around)
          </Typography>
        </Box>
      </GridItem>
      <GridItem area="footer">
        <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
          <Typography color="white" align="center" fontWeight="medium">
            Responsive Footer
          </Typography>
        </Box>
      </GridItem>
    </Grid>
  )
}

export const PredefinedPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Holy Grail Pattern */}
      <div>
        <Typography variant="h4" marginBottom={4} color="white">Holy Grail Layout</Typography>
        <Grid pattern="holy-grail" gap={4} minHeight="300px" style={{ border: '1px solid #333' }}>
          <GridItem area="header">
            <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
              <Typography color="white" align="center">Header</Typography>
            </Box>
          </GridItem>
          <GridItem area="nav">
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Navigation</Typography>
            </Box>
          </GridItem>
          <GridItem area="main">
            <Box bg="gray.base" p={6} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Main Content</Typography>
            </Box>
          </GridItem>
          <GridItem area="aside">
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Aside</Typography>
            </Box>
          </GridItem>
          <GridItem area="footer">
            <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
              <Typography color="white" align="center">Footer</Typography>
            </Box>
          </GridItem>
        </Grid>
      </div>

      {/* Sidebar Pattern */}
      <div>
        <Typography variant="h4" marginBottom={4} color="white">Sidebar Layout</Typography>
        <Grid pattern="sidebar" gap={4} minHeight="200px" style={{ border: '1px solid #333' }}>
          <GridItem area="sidebar">
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Sidebar</Typography>
            </Box>
          </GridItem>
          <GridItem area="main">
            <Box bg="gray.base" p={6} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Main Content</Typography>
            </Box>
          </GridItem>
        </Grid>
      </div>

      {/* Dashboard Pattern */}
      <div>
        <Typography variant="h4" marginBottom={4} color="white">Dashboard Layout</Typography>
        <Grid pattern="dashboard" gap={4} minHeight="250px" style={{ border: '1px solid #333' }}>
          <GridItem area="header">
            <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
              <Typography color="white" align="center">Dashboard Header</Typography>
            </Box>
          </GridItem>
          <GridItem area="sidebar">
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Menu</Typography>
            </Box>
          </GridItem>
          <GridItem area="main">
            <Box bg="gray.base" p={6} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Dashboard Content</Typography>
            </Box>
          </GridItem>
        </Grid>
      </div>
    </div>
  )
}

export const GridItemPositioning: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Column and Row Spanning */}
      <div>
        <Typography variant="h4" marginBottom={4} color="white">Column & Row Spanning</Typography>
        <Grid columns={4} rows={3} gap={4} style={{ border: '1px solid #333' }}>
          <GridItem columnSpan={2} rowSpan={2}>
            <Box bg="innovation.primaryBlue" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">
                Spans 2 columns<br />& 2 rows
              </Typography>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">1</Typography>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">2</Typography>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">3</Typography>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">4</Typography>
            </Box>
          </GridItem>
          <GridItem columnSpan={2}>
            <Box bg="innovation.secondaryPurple" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">
                Spans 2 columns
              </Typography>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">5</Typography>
            </Box>
          </GridItem>
        </Grid>
      </div>

      {/* Precise Positioning */}
      <div>
        <Typography variant="h4" marginBottom={4} color="white">Precise Grid Positioning</Typography>
        <Grid columns={4} rows={4} gap={4} style={{ border: '1px solid #333' }}>
          <GridItem columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>
            <Box bg="innovation.primaryBlue" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Col 1-3, Row 1</Typography>
            </Box>
          </GridItem>
          <GridItem columnStart={3} columnEnd={5} rowStart={1} rowEnd={3}>
            <Box bg="innovation.secondaryPurple" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Col 3-5, Row 1-3</Typography>
            </Box>
          </GridItem>
          <GridItem columnStart={1} columnEnd={2} rowStart={2} rowEnd={4}>
            <Box bg="semantic.success" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">Col 1, Row 2-4</Typography>
            </Box>
          </GridItem>
          <GridItem columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
            <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
              <Typography color="white" align="center">2,2</Typography>
            </Box>
          </GridItem>
        </Grid>
      </div>
    </div>
  )
}

export const MasonryLayout: Story = {
  render: () => (
    <div>
      <Typography variant="h4" marginBottom={4} color="white">Masonry Layout (Pinterest-style)</Typography>
      <Grid masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        {Array.from({ length: 12 }, (_, i) => (
          <Card key={i} padding={4}>
            <Box height={`${120 + (i % 4) * 60}px`} bg="gray.dark" borderRadius="sm" marginBottom={3}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <Typography color="white">Image {i + 1}</Typography>
              </Box>
            </Box>
            <Typography variant="body2" marginBottom={2}>Card {i + 1}</Typography>
            <Typography variant="caption" color="muted">
              {i % 3 === 0 ? 'Short content here.' : 
               i % 3 === 1 ? 'Medium length content that takes up more space and demonstrates varying heights.' :
               'Long content that really shows how masonry layouts handle different content lengths gracefully, creating a Pinterest-like experience.'}
            </Typography>
          </Card>
        ))}
      </Grid>
    </div>
  )
}

export const EnhancedResponsive: Story = {
  render: () => (
    <Grid
      responsive={{
        xs: { columns: 1, gap: 2 },
        sm: { columns: 2, gap: 4 },
        md: { columns: 3, gap: 6 },
        lg: { columns: 4, gap: 8 }
      }}
      style={{ border: '1px solid #333' }}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i}>
          <Box bg="gray.dark" p={4} borderRadius="sm">
            <Typography color="white" align="center">
              Responsive {i + 1}
            </Typography>
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}

export const DashboardExample: Story = {
  render: () => (
    <div>
      <Typography variant="h4" marginBottom={4} color="white">Dashboard Layout Example</Typography>
      <Grid
        areas={`
          "header header header header"
          "sidebar stats stats stats"
          "sidebar chart chart metrics"
          "sidebar recent recent metrics"
        `}
        columns="200px 1fr 1fr 200px"
        rows="auto auto 1fr auto"
        gap={4}
        minHeight="600px"
        style={{ border: '1px solid #333' }}
      >
        <GridItem area="header">
          <Box bg="innovation.primaryBlue" p={4} borderRadius="sm">
            <Typography color="white" variant="h5" align="center">
              Gaming Dashboard
            </Typography>
          </Box>
        </GridItem>
        
        <GridItem area="sidebar">
          <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
            <Typography color="white" variant="h6" marginBottom={4}>Navigation</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography color="gray.light" fontSize="sm">Overview</Typography>
              <Typography color="gray.light" fontSize="sm">Players</Typography>
              <Typography color="gray.light" fontSize="sm">Games</Typography>
              <Typography color="gray.light" fontSize="sm">Analytics</Typography>
              <Typography color="gray.light" fontSize="sm">Settings</Typography>
            </Box>
          </Box>
        </GridItem>
        
        <GridItem area="stats">
          <Box bg="gray.base" p={4} borderRadius="sm" height="100%">
            <Typography color="white" variant="h6" marginBottom={4}>Key Stats</Typography>
            <Grid columns={3} gap={3}>
              <Box bg="innovation.primaryBlue" p={3} borderRadius="sm">
                <Typography color="white" fontSize="lg" fontWeight="bold">1.2K</Typography>
                <Typography color="gray.light" fontSize="sm">Active Players</Typography>
              </Box>
              <Box bg="semantic.success" p={3} borderRadius="sm">
                <Typography color="white" fontSize="lg" fontWeight="bold">87%</Typography>
                <Typography color="gray.light" fontSize="sm">Uptime</Typography>
              </Box>
              <Box bg="innovation.secondaryPurple" p={3} borderRadius="sm">
                <Typography color="white" fontSize="lg" fontWeight="bold">15</Typography>
                <Typography color="gray.light" fontSize="sm">Live Games</Typography>
              </Box>
            </Grid>
          </Box>
        </GridItem>
        
        <GridItem area="chart">
          <Box bg="gray.base" p={4} borderRadius="sm" height="100%">
            <Typography color="white" variant="h6" marginBottom={4}>Performance Chart</Typography>
            <Box bg="gray.dark" borderRadius="sm" height="200px" display="flex" alignItems="center" justifyContent="center">
              <Typography color="gray.light">Chart visualization</Typography>
            </Box>
          </Box>
        </GridItem>
        
        <GridItem area="metrics">
          <Box bg="gray.dark" p={4} borderRadius="sm" height="100%">
            <Typography color="white" variant="h6" marginBottom={4}>Metrics</Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box>
                <Typography color="white" fontSize="sm">CPU Usage</Typography>
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop={1}>
                  <Box bg="semantic.warning" width="65%" height="100%" borderRadius="full" />
                </Box>
              </Box>
              <Box>
                <Typography color="white" fontSize="sm">Memory</Typography>
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop={1}>
                  <Box bg="innovation.primaryBlue" width="45%" height="100%" borderRadius="full" />
                </Box>
              </Box>
              <Box>
                <Typography color="white" fontSize="sm">Network</Typography>
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop={1}>
                  <Box bg="semantic.success" width="80%" height="100%" borderRadius="full" />
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
        
        <GridItem area="recent">
          <Box bg="gray.base" p={4} borderRadius="sm" height="100%">
            <Typography color="white" variant="h6" marginBottom={4}>Recent Activity</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography color="gray.light" fontSize="sm">• Player joined game #1</Typography>
              <Typography color="gray.light" fontSize="sm">• Server updated to v2.1</Typography>
              <Typography color="gray.light" fontSize="sm">• New tournament started</Typography>
              <Typography color="gray.light" fontSize="sm">• Performance optimized</Typography>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  )
}