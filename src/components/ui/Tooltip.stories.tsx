import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from './Button'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Badge } from './Badge'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'focus', 'click', 'manual'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="xl">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

export const Placements: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="2xl">
      <Box display="flex" justifyContent="center" gap="md">
        <Tooltip content="Top start tooltip" placement="top-start">
          <Button size="sm">Top Start</Button>
        </Tooltip>
        <Tooltip content="Top tooltip" placement="top">
          <Button size="sm">Top</Button>
        </Tooltip>
        <Tooltip content="Top end tooltip" placement="top-end">
          <Button size="sm">Top End</Button>
        </Tooltip>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" gap="md">
          <Tooltip content="Left start tooltip" placement="left-start">
            <Button size="sm">Left Start</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" placement="left">
            <Button size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="Left end tooltip" placement="left-end">
            <Button size="sm">Left End</Button>
          </Tooltip>
        </Box>

        <Box display="flex" flexDirection="column" gap="md">
          <Tooltip content="Right start tooltip" placement="right-start">
            <Button size="sm">Right Start</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" placement="right">
            <Button size="sm">Right</Button>
          </Tooltip>
          <Tooltip content="Right end tooltip" placement="right-end">
            <Button size="sm">Right End</Button>
          </Tooltip>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" gap="md">
        <Tooltip content="Bottom start tooltip" placement="bottom-start">
          <Button size="sm">Bottom Start</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button size="sm">Bottom</Button>
        </Tooltip>
        <Tooltip content="Bottom end tooltip" placement="bottom-end">
          <Button size="sm">Bottom End</Button>
        </Tooltip>
      </Box>
    </Box>
  ),
}

export const TriggerTypes: Story = {
  render: () => (
    <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">
      <Tooltip content="Appears on hover" trigger="hover">
        <Button>Hover</Button>
      </Tooltip>
      
      <Tooltip content="Appears on focus" trigger="focus">
        <Button>Focus</Button>
      </Tooltip>
      
      <Tooltip content="Appears on click" trigger="click">
        <Button>Click</Button>
      </Tooltip>
    </Box>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">
      <Tooltip content="No delay" delay={0}>
        <Button>No Delay</Button>
      </Tooltip>
      
      <Tooltip content="500ms delay" delay={500}>
        <Button>500ms Delay</Button>
      </Tooltip>
      
      <Tooltip content="1000ms delay" delay={1000}>
        <Button>1s Delay</Button>
      </Tooltip>
      
      <Tooltip content="Fast hide" hideDelay={100}>
        <Button>Fast Hide</Button>
      </Tooltip>
    </Box>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <Box display="flex" gap="md" justifyContent="center" p="xl">
      <Tooltip content="Tooltip with arrow" arrow={true}>
        <Button>With Arrow</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip without arrow" arrow={false}>
        <Button>Without Arrow</Button>
      </Tooltip>
    </Box>
  ),
}

export const DifferentContent: Story = {
  render: () => (
    <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">
      <Tooltip content="Simple text tooltip">
        <Button>Text</Button>
      </Tooltip>
      
      <Tooltip 
        content={
          <div>
            <strong>Rich Content</strong>
            <br />
            This tooltip has multiple lines
            <br />
            and <em>formatted</em> text
          </div>
        }
      >
        <Button>Rich Content</Button>
      </Tooltip>
      
      <Tooltip content="This is a very long tooltip that demonstrates how the tooltip handles longer text content and wraps appropriately">
        <Button>Long Text</Button>
      </Tooltip>
    </Box>
  ),
}

export const OnDifferentElements: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" justifyContent="center" flexWrap="wrap" p="xl">
      <Tooltip content="Button tooltip">
        <Button>Button</Button>
      </Tooltip>
      
      <Tooltip content="Badge tooltip">
        <Badge color="blue">Badge</Badge>
      </Tooltip>
      
      <Tooltip content="Text tooltip">
        <Typography variant="body" style={{ textDecoration: 'underline', cursor: 'help' }}>
          Hover this text
        </Typography>
      </Tooltip>
      
      <Tooltip content="Icon tooltip">
        <Box 
          width="32px" 
          height="32px" 
          bg="blue" 
          borderRadius="sm" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          cursor="help"
        >
          <span style={{ color: 'white' }}>?</span>
        </Box>
      </Tooltip>
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box display="flex" gap="md" justifyContent="center" p="xl">
      <Tooltip content="This tooltip is enabled">
        <Button>Enabled</Button>
      </Tooltip>
      
      <Tooltip content="This tooltip is disabled" disabled>
        <Button>Disabled Tooltip</Button>
      </Tooltip>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    content: 'Customizable tooltip',
    placement: 'top',
    trigger: 'hover',
    delay: 0,
    hideDelay: 0,
    arrow: true,
    disabled: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
      <Tooltip {...args}>
        <Button>Interactive Tooltip</Button>
      </Tooltip>
    </Box>
  ),
}

export const InteractiveDemo: Story = {
  render: () => (
    <Box p="2xl">
      <Typography variant="h3" mb="lg">Tooltip Interactive Demo</Typography>
      
      <Box display="flex" flexDirection="column" gap="lg">
        <div>
          <Typography variant="body" mb="md">Hover for help information:</Typography>
          <Box display="flex" gap="sm" alignItems="center">
            <Typography variant="body">Username</Typography>
            <Tooltip content="Your username must be unique and between 3-20 characters">
              <Box 
                width="16px" 
                height="16px" 
                borderRadius="full" 
                bg="gray" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                cursor="help"
                style={{ fontSize: '10px', color: 'white' }}
              >
                ?
              </Box>
            </Tooltip>
          </Box>
        </div>
        
        <div>
          <Typography variant="body" mb="md">Status indicators:</Typography>
          <Box display="flex" gap="md" alignItems="center">
            <Tooltip content="System is online and functioning normally" placement="top">
              <Badge color="success">Online</Badge>
            </Tooltip>
            <Tooltip content="System is experiencing issues" placement="top">
              <Badge color="warning">Warning</Badge>
            </Tooltip>
            <Tooltip content="System is offline or unreachable" placement="top">
              <Badge color="error">Offline</Badge>
            </Tooltip>
          </Box>
        </div>
        
        <div>
          <Typography variant="body" mb="md">Actions with context:</Typography>
          <Box display="flex" gap="md">
            <Tooltip content="Save your current work" placement="bottom">
              <Button variant="primary">Save</Button>
            </Tooltip>
            <Tooltip content="Discard all changes and reset" placement="bottom">
              <Button variant="secondary">Reset</Button>
            </Tooltip>
            <Tooltip content="Delete this item permanently" placement="bottom">
              <Button variant="danger">Delete</Button>
            </Tooltip>
          </Box>
        </div>
      </Box>
    </Box>
  ),
}