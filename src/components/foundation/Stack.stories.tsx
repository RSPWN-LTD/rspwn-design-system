import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Stack> = {
  title: 'Foundation/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'tight', 'loose', 'divided', 'nav'],
      description: 'Pre-designed stack variants optimized for common stacking patterns',
    },
  },
}

export default meta
type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: {
    children: (
      <>
        <Box variant="card">
          <Typography color="white">Default Stack - Standard spacing with responsive behavior</Typography>
        </Box>
        <Box variant="card">
          <Typography color="white">Perfect for general content stacking with optimal visual hierarchy</Typography>
        </Box>
        <Box variant="card">
          <Typography color="white">Vertical on mobile, enhanced spacing on larger screens</Typography>
        </Box>
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
          Standard vertical stack with responsive spacing. Optimized for general content layouts.
        </Typography>
        <Stack>
          <Box variant="card">
            <Typography color="white">Feature Overview</Typography>
          </Box>
          <Box variant="card">
            <Typography color="white">Technical Specifications</Typography>
          </Box>
          <Box variant="card">
            <Typography color="white">Getting Started Guide</Typography>
          </Box>
        </Stack>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Tight</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Minimal spacing, responsive layout. Perfect for compact UI elements and form controls.
        </Typography>
        <Stack variant="tight">
          <Box variant="inline" style={{ background: '#4A9EFF', padding: '0.75rem 1.5rem', borderRadius: '0.375rem' }}>
            <Typography color="white">Primary Action</Typography>
          </Box>
          <Box variant="inline" style={{ border: '1px solid #4A9EFF', padding: '0.75rem 1.5rem', borderRadius: '0.375rem' }}>
            <Typography color="white">Secondary Action</Typography>
          </Box>
          <Box variant="inline" style={{ padding: '0.75rem 1.5rem' }}>
            <Typography color="white">Tertiary Action</Typography>
          </Box>
        </Stack>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Loose</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Generous spacing for visual breathing room. Ideal for major content sections.
        </Typography>
        <Stack variant="loose">
          <Box variant="section">
            <Typography variant="h4" color="white" style={{ marginBottom: '0.5rem' }}>Gaming Performance</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>
              Ultra-low latency gaming optimized for competitive play
            </Typography>
          </Box>
          <Box variant="section">
            <Typography variant="h4" color="white" style={{ marginBottom: '0.5rem' }}>Advanced Security</Typography>
            <Typography color="white" style={{ opacity: 0.8 }}>
              Enterprise-grade protection and anti-cheat systems
            </Typography>
          </Box>
        </Stack>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Divided</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Visual separators between elements. Great for menu items and structured lists.
        </Typography>
        <div style={{ maxWidth: '300px' }}>
          <Stack variant="divided">
            <Box variant="inline">
              <Typography color="white" style={{ fontWeight: 600 }}>Profile Settings</Typography>
              <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Manage your account</Typography>
            </Box>
            <Box variant="inline">
              <Typography color="white" style={{ fontWeight: 600 }}>Privacy Controls</Typography>
              <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Data and visibility</Typography>
            </Box>
            <Box variant="inline">
              <Typography color="white" style={{ fontWeight: 600 }}>Notifications</Typography>
              <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Email and alerts</Typography>
            </Box>
          </Stack>
        </div>
      </div>

      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '1rem' }}>Nav</Typography>
        <Typography color="white" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Optimized for navigation elements. Tight mobile, spaced horizontal on desktop.
        </Typography>
        <Stack variant="nav">
          <Typography color="white" style={{ fontWeight: 600, color: '#4A9EFF' }}>Dashboard</Typography>
          <Typography color="white" style={{ opacity: 0.8 }}>Players</Typography>
          <Typography color="white" style={{ opacity: 0.8 }}>Tournaments</Typography>
          <Typography color="white" style={{ opacity: 0.8 }}>Analytics</Typography>
          <Typography color="white" style={{ opacity: 0.8 }}>Settings</Typography>
        </Stack>
      </div>
    </div>
  ),
}

export const PracticalExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '2rem' }}>Gaming Dashboard Layout</Typography>
        <Stack variant="loose">
          <Box variant="section">
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Player Statistics</Typography>
            <Stack variant="tight">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <Box variant="card">
                  <Typography color="white" style={{ fontWeight: 600, fontSize: '1.5rem' }}>2,847</Typography>
                  <Typography color="white" style={{ opacity: 0.7, fontSize: '0.8rem' }}>Active Players</Typography>
                </Box>
                <Box variant="card">
                  <Typography color="white" style={{ fontWeight: 600, fontSize: '1.5rem' }}>98.5%</Typography>
                  <Typography color="white" style={{ opacity: 0.7, fontSize: '0.8rem' }}>Uptime</Typography>
                </Box>
                <Box variant="card">
                  <Typography color="white" style={{ fontWeight: 600, fontSize: '1.5rem' }}>1.2ms</Typography>
                  <Typography color="white" style={{ opacity: 0.7, fontSize: '0.8rem' }}>Avg Latency</Typography>
                </Box>
              </div>
            </Stack>
          </Box>
          
          <Box variant="section">
            <Typography variant="h4" color="white" style={{ marginBottom: '1rem' }}>Tournament Schedule</Typography>
            <Stack variant="divided">
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>RSPWN Championship Finals</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>March 15, 2024 - 8:00 PM EST</Typography>
              </Box>
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>Weekly Qualifier #12</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>March 18, 2024 - 6:00 PM EST</Typography>
              </Box>
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>Pro League Match Day</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>March 20, 2024 - 7:30 PM EST</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" color="white" style={{ marginBottom: '2rem' }}>Application Interface</Typography>
        <Box variant="card" style={{ maxWidth: '400px' }}>
          <Stack variant="default">
            <Typography variant="h4" color="white">Account Settings</Typography>
            
            <Stack variant="divided">
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>Profile Information</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Update your personal details</Typography>
              </Box>
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>Gaming Preferences</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Configure gameplay settings</Typography>
              </Box>
              <Box variant="inline">
                <Typography color="white" style={{ fontWeight: 600 }}>Privacy & Security</Typography>
                <Typography color="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Manage your data and security</Typography>
              </Box>
            </Stack>
            
            <Stack variant="tight">
              <Box variant="inline" style={{ background: '#4A9EFF', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', textAlign: 'center' }}>
                <Typography color="white" style={{ fontWeight: 600 }}>Save Changes</Typography>
              </Box>
              <Box variant="inline" style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', textAlign: 'center' }}>
                <Typography color="white">Cancel</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </div>
    </div>
  ),
}

