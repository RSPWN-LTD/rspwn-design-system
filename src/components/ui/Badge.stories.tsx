import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['gray', 'blue', 'purple', 'success', 'warning', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'solid',
    size: 'md',
    color: 'gray',
  },
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      <div>
        <Typography variant="small" mb="sm" color="gray">Solid Variants</Typography>
        <Box display="flex" gap="sm" alignItems="center" flexWrap="wrap">
          <Badge color="gray" variant="solid">Gray</Badge>
          <Badge color="blue" variant="solid">Blue</Badge>
          <Badge color="purple" variant="solid">Purple</Badge>
          <Badge color="success" variant="solid">Success</Badge>
          <Badge color="warning" variant="solid">Warning</Badge>
          <Badge color="error" variant="solid">Error</Badge>
        </Box>
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Outline Variants</Typography>
        <Box display="flex" gap="sm" alignItems="center" flexWrap="wrap">
          <Badge color="gray" variant="outline">Gray</Badge>
          <Badge color="blue" variant="outline">Blue</Badge>
          <Badge color="purple" variant="outline">Purple</Badge>
          <Badge color="success" variant="outline">Success</Badge>
          <Badge color="warning" variant="outline">Warning</Badge>
          <Badge color="error" variant="outline">Error</Badge>
        </Box>
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Subtle Variants</Typography>
        <Box display="flex" gap="sm" alignItems="center" flexWrap="wrap">
          <Badge color="gray" variant="subtle">Gray</Badge>
          <Badge color="blue" variant="subtle">Blue</Badge>
          <Badge color="purple" variant="subtle">Purple</Badge>
          <Badge color="success" variant="subtle">Success</Badge>
          <Badge color="warning" variant="subtle">Warning</Badge>
          <Badge color="error" variant="subtle">Error</Badge>
        </Box>
      </div>
    </Box>
  ),
}

export const DotVariant: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Box display="flex" alignItems="center" gap="sm">
        <Badge dot color="gray" />
        <Typography variant="body">Gray indicator</Typography>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Badge dot color="blue" />
        <Typography variant="body">Blue indicator</Typography>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Badge dot color="success" />
        <Typography variant="body">Success indicator</Typography>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Badge dot color="warning" />
        <Typography variant="body">Warning indicator</Typography>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Badge dot color="error" />
        <Typography variant="body">Error indicator</Typography>
      </Box>
    </Box>
  ),
}

export const WithNumbers: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Badge color="blue">1</Badge>
      <Badge color="blue">42</Badge>
      <Badge color="blue">99+</Badge>
      <Badge color="error">!</Badge>
      <Badge color="success">✓</Badge>
    </Box>
  ),
}

export const InContext: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      <Box display="flex" alignItems="center" gap="sm">
        <Typography variant="body">Notifications</Typography>
        <Badge color="blue" size="sm">3</Badge>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Typography variant="body">Messages</Typography>
        <Badge color="error" size="sm">12</Badge>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Typography variant="body">Status:</Typography>
        <Badge color="success" variant="subtle" size="sm">Online</Badge>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Typography variant="body">Version:</Typography>
        <Badge color="purple" variant="outline" size="sm">v2.1.0</Badge>
      </Box>
      
      <Box display="flex" alignItems="center" gap="sm">
        <Typography variant="body">Active users</Typography>
        <Badge dot color="success" />
        <Typography variant="small" color="gray">1,234</Typography>
      </Box>
    </Box>
  ),
}

export const AllSizesAllColors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size}>
          <Typography variant="small" mb="sm" color="gray">{size.toUpperCase()} Size</Typography>
          <Box display="flex" gap="sm" alignItems="center" flexWrap="wrap">
            {(['gray', 'blue', 'purple', 'success', 'warning', 'error'] as const).map(color => (
              <Badge key={color} size={size} color={color}>
                {color}
              </Badge>
            ))}
          </Box>
        </div>
      ))}
    </Box>
  ),
}