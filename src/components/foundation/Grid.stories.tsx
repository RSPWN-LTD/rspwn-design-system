import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem } from './Grid'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Grid> = {
  title: 'Foundation/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'cards', 'sidebar', 'dashboard', 'auto'],
      description: 'Pre-designed grid variants optimized for common layout patterns',
    },
  },
}

export default meta
type Story = StoryObj<typeof Grid>

const GridCard = ({ children, ...props }: { children: React.ReactNode }) => (
  <Box variant="card" {...props}>
    <Typography color="white">{children}</Typography>
  </Box>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <GridCard>Item 1</GridCard>
        <GridCard>Item 2</GridCard>
        <GridCard>Item 3</GridCard>
        <GridCard>Item 4</GridCard>
        <GridCard>Item 5</GridCard>
        <GridCard>Item 6</GridCard>
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Default</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          3-column responsive grid that stacks on mobile. Perfect for general content layouts.
        </Typography>
        <Grid>
          <GridCard>Content 1</GridCard>
          <GridCard>Content 2</GridCard>
          <GridCard>Content 3</GridCard>
          <GridCard>Content 4</GridCard>
          <GridCard>Content 5</GridCard>
          <GridCard>Content 6</GridCard>
        </Grid>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Cards</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Auto-fit card layout with responsive column sizing. Ideal for product grids and card collections.
        </Typography>
        <Grid variant="cards">
          <GridCard>Gaming Laptop</GridCard>
          <GridCard>Mechanical Keyboard</GridCard>
          <GridCard>Gaming Mouse</GridCard>
          <GridCard>Headset Pro</GridCard>
          <GridCard>Monitor 4K</GridCard>
        </Grid>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Auto</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Auto-fill layout that creates columns based on minimum width. Great for dynamic content.
        </Typography>
        <Grid variant="auto">
          <GridCard>Feature A</GridCard>
          <GridCard>Feature B</GridCard>
          <GridCard>Feature C</GridCard>
          <GridCard>Feature D</GridCard>
        </Grid>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Sidebar</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Fixed sidebar with main content area. Stacks on mobile for responsive behavior.
        </Typography>
        <div style={{ height: '300px' }}>
          <Grid variant="sidebar">
            <GridCard>
              <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Navigation</Typography>
              <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                • Dashboard<br />
                • Players<br />
                • Settings<br />
                • Analytics
              </Typography>
            </GridCard>
            <GridCard>
              <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Main Content</Typography>
              <Typography color="white" style={{ opacity: 0.8 }}>
                This is the main content area that takes up the remaining space. Perfect for application layouts.
              </Typography>
            </GridCard>
          </Grid>
        </div>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Dashboard</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Complete dashboard layout with header, sidebar, and main areas using CSS Grid areas.
        </Typography>
        <div style={{ height: '400px' }}>
          <Grid variant="dashboard">
            <GridItem style={{ gridArea: 'header' }}>
              <GridCard>
                <Typography variant="h4" color="white" style={{ textAlign: 'center' }}>
                  RSPWN Gaming Dashboard
                </Typography>
              </GridCard>
            </GridItem>
            <GridItem style={{ gridArea: 'sidebar' }}>
              <GridCard>
                <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Menu</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                  • Overview<br />
                  • Players<br />
                  • Matches<br />
                  • Tournaments<br />
                  • Analytics
                </Typography>
              </GridCard>
            </GridItem>
            <GridItem style={{ gridArea: 'main' }}>
              <GridCard>
                <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Analytics</Typography>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Box variant="inline" style={{ background: '#4A9EFF', padding: '1rem', borderRadius: '0.5rem' }}>
                    <Typography color="white" style={{ fontWeight: 600, fontSize: '1.5rem' }}>2,847</Typography>
                    <Typography color="white" style={{ opacity: 0.8, fontSize: '0.8rem' }}>Active Players</Typography>
                  </Box>
                  <Box variant="inline" style={{ background: '#8B5CF6', padding: '1rem', borderRadius: '0.5rem' }}>
                    <Typography color="white" style={{ fontWeight: 600, fontSize: '1.5rem' }}>98.5%</Typography>
                    <Typography color="white" style={{ opacity: 0.8, fontSize: '0.8rem' }}>Uptime</Typography>
                  </Box>
                </div>
              </GridCard>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  ),
}

export const PracticalExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '2rem' }}>Gaming Product Showcase</Typography>
        <Grid variant="cards">
          <GridCard>
            <div style={{ background: '#4A9EFF', height: '120px', borderRadius: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>GPU</Typography>
            </div>
            <Typography variant="h5" color="white" style={{ marginBottom: '0.5rem' }}>RTX 4090</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Ultimate gaming performance</Typography>
          </GridCard>
          <GridCard>
            <div style={{ background: '#8B5CF6', height: '120px', borderRadius: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>CPU</Typography>
            </div>
            <Typography variant="h5" color="white" style={{ marginBottom: '0.5rem' }}>Intel i9-13900K</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>High-performance processor</Typography>
          </GridCard>
          <GridCard>
            <div style={{ background: '#10B981', height: '120px', borderRadius: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="white" style={{ fontWeight: 600 }}>RAM</Typography>
            </div>
            <Typography variant="h5" color="white" style={{ marginBottom: '0.5rem' }}>32GB DDR5</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Lightning fast memory</Typography>
          </GridCard>
        </Grid>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '2rem' }}>Tournament Features</Typography>
        <Grid variant="auto">
          <GridCard>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Live Streaming</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Watch tournaments live with minimal delay
            </Typography>
          </GridCard>
          <GridCard>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Real-time Stats</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Get instant player and match statistics
            </Typography>
          </GridCard>
          <GridCard>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Chat Integration</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Interactive chat with other viewers
            </Typography>
          </GridCard>
          <GridCard>
            <Typography variant="h5" color="white" style={{ marginBottom: '1rem' }}>Mobile Support</Typography>
            <Typography color="white" style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Full experience on any device
            </Typography>
          </GridCard>
        </Grid>
      </div>
    </div>
  ),
}