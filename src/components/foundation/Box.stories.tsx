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
    display: {
      control: { type: 'select' },
      options: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none'],
    },
    bg: {
      control: { type: 'select' },
      options: ['black', 'white', 'dark', 'gray', 'light', 'blue', 'purple'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography>Box content</Typography>,
    p: '4',
    bg: 'gray',
    borderRadius: 'md',
  },
}

export const Backgrounds: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box bg="black" p="4" borderRadius="md" border>
        <Typography color="white">Black</Typography>
      </Box>
      <Box bg="dark" p="4" borderRadius="md">
        <Typography color="white">Dark</Typography>
      </Box>
      <Box bg="gray" p="4" borderRadius="md">
        <Typography color="white">Gray</Typography>
      </Box>
      <Box bg="light" p="4" borderRadius="md">
        <Typography color="white">Light</Typography>
      </Box>
      <Box bg="blue" p="4" borderRadius="md">
        <Typography color="white">Blue</Typography>
      </Box>
      <Box bg="purple" p="4" borderRadius="md">
        <Typography color="white">Purple</Typography>
      </Box>
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box bg="gray" p="2" borderRadius="md">
        <Typography>Padding 2</Typography>
      </Box>
      <Box bg="gray" p="4" borderRadius="md">
        <Typography>Padding 4</Typography>
      </Box>
      <Box bg="gray" p="6" borderRadius="md">
        <Typography>Padding 6</Typography>
      </Box>
      <Box bg="gray" p="8" borderRadius="md">
        <Typography>Padding 8</Typography>
      </Box>
    </div>
  ),
}

export const FlexLayout: Story = {
  render: () => (
    <Box display="flex" gap="4" bg="dark" p="4" borderRadius="md">
      <Box bg="blue" p="4" borderRadius="base" flex="1">
        <Typography color="white">Flex 1</Typography>
      </Box>
      <Box bg="purple" p="4" borderRadius="base" flex="1">
        <Typography color="white">Flex 1</Typography>
      </Box>
      <Box bg="gray" p="4" borderRadius="base" flex="2">
        <Typography color="white">Flex 2</Typography>
      </Box>
    </Box>
  ),
}

export const GridLayout: Story = {
  render: () => (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap="4"
      bg="dark"
      p="4"
      borderRadius="md"
    >
      <Box bg="blue" p="4" borderRadius="base">
        <Typography color="white">Grid 1</Typography>
      </Box>
      <Box bg="purple" p="4" borderRadius="base">
        <Typography color="white">Grid 2</Typography>
      </Box>
      <Box bg="gray" p="4" borderRadius="base">
        <Typography color="white">Grid 3</Typography>
      </Box>
    </Box>
  ),
}