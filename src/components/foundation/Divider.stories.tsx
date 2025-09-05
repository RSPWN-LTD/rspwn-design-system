import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Divider> = {
  title: 'Foundation/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: { type: 'select' },
      options: ['thin', 'medium', 'thick'],
    },
    color: {
      control: { type: 'select' },
      options: ['light', 'medium', 'dark'],
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 'thin',
    color: 'light',
  },
  render: (args) => (
    <Box p="md">
      <Typography variant="body" mb="md">Content above divider</Typography>
      <Divider {...args} />
      <Typography variant="body" mt="md">Content below divider</Typography>
    </Box>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    thickness: 'thin',
    color: 'light',
    length: '100px',
  },
  render: (args) => (
    <Box display="flex" alignItems="center" gap="md" p="md" height="120px">
      <Typography variant="body">Left content</Typography>
      <Divider {...args} />
      <Typography variant="body">Right content</Typography>
    </Box>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Box p="md">
      <Typography variant="body" mb="md">Section above</Typography>
      <Divider label="OR" />
      <Typography variant="body" mt="md">Section below</Typography>
    </Box>
  ),
}

export const LabelPositions: Story = {
  render: () => (
    <Box p="md" display="flex" flexDirection="column" gap="xl">
      <div>
        <Typography variant="body" mb="md">Left positioned label</Typography>
        <Divider label="Left" labelPosition="left" />
        <Typography variant="body" mt="md">Content below</Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Center positioned label</Typography>
        <Divider label="Center" labelPosition="center" />
        <Typography variant="body" mt="md">Content below</Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Right positioned label</Typography>
        <Divider label="Right" labelPosition="right" />
        <Typography variant="body" mt="md">Content below</Typography>
      </div>
    </Box>
  ),
}

export const Thickness: Story = {
  render: () => (
    <Box p="md" display="flex" flexDirection="column" gap="lg">
      <div>
        <Typography variant="small" mb="sm" color="gray">Thin (1px)</Typography>
        <Divider thickness="thin" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium (2px)</Typography>
        <Divider thickness="medium" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Thick (4px)</Typography>
        <Divider thickness="thick" />
      </div>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box p="md" display="flex" flexDirection="column" gap="lg">
      <div>
        <Typography variant="small" mb="sm" color="gray">Light</Typography>
        <Divider color="light" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Divider color="medium" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Dark</Typography>
        <Divider color="dark" />
      </div>
    </Box>
  ),
}

export const Styles: Story = {
  render: () => (
    <Box p="md" display="flex" flexDirection="column" gap="lg">
      <div>
        <Typography variant="small" mb="sm" color="gray">Solid</Typography>
        <Divider style="solid" thickness="medium" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Dashed</Typography>
        <Divider style="dashed" thickness="medium" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Dotted</Typography>
        <Divider style="dotted" thickness="thick" />
      </div>
    </Box>
  ),
}

export const WithSpacing: Story = {
  render: () => (
    <Box p="md">
      <Typography variant="body">Content with no margin</Typography>
      <Divider />
      <Typography variant="body">More content</Typography>
      
      <Box mt="xl">
        <Typography variant="body">Content with medium margin</Typography>
        <Divider margin="md" />
        <Typography variant="body">More content</Typography>
      </Box>
      
      <Box mt="xl">
        <Typography variant="body">Content with large margin</Typography>
        <Divider margin="xl" />
        <Typography variant="body">More content</Typography>
      </Box>
    </Box>
  ),
}

export const VerticalWithHeight: Story = {
  render: () => (
    <Box display="flex" alignItems="center" gap="md" p="md">
      <Box height="200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="body">Tall content on left</Typography>
      </Box>
      
      <Divider orientation="vertical" length="200px" />
      
      <Box height="200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="body">Tall content on right</Typography>
      </Box>
    </Box>
  ),
}