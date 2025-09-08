import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Box> = {
  title: 'Foundation/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'section', 'inline'],
      description: 'Pre-designed box variants with optimal styling for common use cases',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography>Default Box - Basic container with minimal styling</Typography>,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" style={{ marginBottom: '1rem' }}>Default</Typography>
        <Box>
          <Typography>Basic container with transparent background and standard padding. Perfect for general layout purposes.</Typography>
        </Box>
      </div>

      <div>
        <Typography variant="h3" style={{ marginBottom: '1rem' }}>Card</Typography>
        <Box variant="card">
          <Typography color="white">Elevated card with dark background, rounded corners, subtle border, and generous padding. Ideal for content containers and feature highlights.</Typography>
        </Box>
      </div>

      <div>
        <Typography variant="h3" style={{ marginBottom: '1rem' }}>Section</Typography>
        <Box variant="section">
          <Typography color="white">Full-width section with black background and large padding. Perfect for major content areas and page sections.</Typography>
        </Box>
      </div>

      <div>
        <Typography variant="h3" style={{ marginBottom: '1rem' }}>Inline</Typography>
        <Typography>
          Use inline boxes like <Box variant="inline" as="span"><Typography as="span" color="white">this inline element</Typography></Box> within text content for badges, tags, or inline highlights.
        </Typography>
      </div>
    </div>
  ),
}

export const InteractiveBox: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h3">Clickable Boxes</Typography>
      <Box variant="card" onClick={() => alert('Card clicked!')}>
        <Typography color="white">Click me! This card has hover and active states.</Typography>
      </Box>
      
      <Box variant="inline" onClick={() => alert('Inline clicked!')} as="button">
        <Typography as="span" color="white">Clickable inline box</Typography>
      </Box>
    </div>
  ),
}

export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h3">Semantic HTML Elements</Typography>
      
      <Box variant="section" as="section">
        <Typography color="white">This is a semantic &lt;section&gt; element</Typography>
      </Box>
      
      <Box variant="card" as="article">
        <Typography color="white">This is a semantic &lt;article&gt; element</Typography>
      </Box>
      
      <Box as="aside">
        <Typography>This is a semantic &lt;aside&gt; element</Typography>
      </Box>
    </div>
  ),
}