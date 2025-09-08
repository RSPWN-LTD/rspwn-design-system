import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['brand', 'heading', 'subheading', 'body', 'caption', 'label'],
      description: 'Pre-designed typography variants optimized for gaming platform content',
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'muted', 'blue'],
      description: 'Professional color palette for optimal contrast and hierarchy',
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'Default body text optimized for gaming platform readability with professional typography',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="brand">RSPWN</Typography>
        <Typography variant="caption" color="muted">
          Brand variant - Audiowide font exclusively for brand name, responsive scaling
        </Typography>
      </div>
      
      <div>
        <Typography variant="heading">Gaming Performance Analytics</Typography>
        <Typography variant="caption" color="muted">
          Heading variant - Bold Inter font for major page sections, responsive sizing
        </Typography>
      </div>
      
      <div>
        <Typography variant="subheading">Tournament Statistics Overview</Typography>
        <Typography variant="caption" color="muted">
          Subheading variant - Semibold weight for subsections and content groupings
        </Typography>
      </div>
      
      <div>
        <Typography variant="body">
          This is the primary body text variant optimized for extended reading. It features comfortable line height, 
          responsive font sizing, and high contrast for gaming platforms. Perfect for descriptions, articles, and general content.
        </Typography>
        <Typography variant="caption" color="muted">
          Body variant - Primary text with optimal readability and responsive scaling
        </Typography>
      </div>
      
      <div>
        <Typography variant="caption">
          Match ended 2 minutes ago • Player statistics updated
        </Typography>
        <Typography variant="caption" color="muted">
          Caption variant - Reduced opacity for timestamps, metadata, and secondary information
        </Typography>
      </div>
      
      <div>
        <Typography variant="label">Tournament Status</Typography>
        <Typography variant="caption" color="muted">
          Label variant - Uppercase, letterspaced for form labels and UI categories
        </Typography>
      </div>
    </div>
  ),
}

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="heading">Color System</Typography>
        <Typography variant="body" color="muted" style={{ marginBottom: '2rem' }}>
          Professional color palette designed for optimal contrast and information hierarchy
        </Typography>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <Typography variant="subheading" color="white">White (Default)</Typography>
            <Typography variant="body" color="white">
              Primary content color with maximum contrast for essential information and headings
            </Typography>
          </div>
          
          <div>
            <Typography variant="subheading" color="muted">Muted</Typography>
            <Typography variant="body" color="muted">
              Secondary content color for supporting information, captions, and metadata
            </Typography>
          </div>
          
          <div>
            <Typography variant="subheading" color="blue">Blue</Typography>
            <Typography variant="body" color="blue">
              Brand accent color reserved for primary actions, links, and key interactive elements
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const PracticalExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', background: '#0a0a0a', padding: '2rem' }}>
      <div>
        <Typography variant="heading">Gaming Platform Interface</Typography>
        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <Typography variant="brand">RSPWN</Typography>
          <Typography variant="body" style={{ marginBottom: '2rem' }}>
            Welcome back to the ultimate competitive gaming platform. Ready to dominate the leaderboards?
          </Typography>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <Typography variant="label">Current Tournament</Typography>
              <Typography variant="subheading">Championship Finals</Typography>
              <Typography variant="caption">
                16 teams remaining • Prize pool: $50,000
              </Typography>
            </div>
            
            <div>
              <Typography variant="label">Your Rank</Typography>
              <Typography variant="subheading">#127 Global</Typography>
              <Typography variant="caption">
                +23 positions this week
              </Typography>
            </div>
            
            <div>
              <Typography variant="label">Match History</Typography>
              <Typography variant="subheading">Win Rate: 78%</Typography>
              <Typography variant="caption">
                Last 30 games • 4 game win streak
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Typography variant="heading">Article Content Layout</Typography>
        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem', marginTop: '1rem', maxWidth: '600px' }}>
          <Typography variant="subheading">
            Advanced Strategies for Competitive Gaming
          </Typography>
          <Typography variant="caption" style={{ marginBottom: '1.5rem' }}>
            Published March 15, 2024 • 5 min read
          </Typography>
          
          <Typography variant="body">
            Professional gaming requires more than quick reflexes. Understanding map control, team coordination, 
            and strategic positioning separates champions from casual players.
          </Typography>
          
          <Typography variant="body">
            Elite players focus on three core principles: consistent practice routines, data-driven improvement, 
            and mental resilience during high-pressure situations.
          </Typography>
          
          <div style={{ background: '#0f0f0f', padding: '1.5rem', borderRadius: '0.375rem', borderLeft: '3px solid #4A9EFF' }}>
            <Typography variant="caption" color="blue" style={{ marginBottom: '0.5rem' }}>
              PRO TIP
            </Typography>
            <Typography variant="body">
              Record and review your gameplay sessions weekly. Most improvement comes from identifying 
              patterns in your decision-making under pressure.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
}