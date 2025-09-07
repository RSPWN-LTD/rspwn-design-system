import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'
import { Box } from './Box'
import { Typography } from './Typography'
import { Divider } from './Divider'

const meta: Meta<typeof Stack> = {
  title: 'Foundation/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
    },
    divider: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Stack>

const StackItem = ({ children, bg = 'blue', ...props }: { children: React.ReactNode, bg?: string }) => (
  <Box 
    bg={bg as any} 
    p="4" 
    borderRadius="base" 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    minWidth="120px"
    {...props}
  >
    <Typography color="white" variant="body1" align="center">{children}</Typography>
  </Box>
)

const Card = ({ children, ...props }: { children: React.ReactNode }) => (
  <Box bg="dark" p="4" borderRadius="md" {...props}>
    <Typography color="white">{children}</Typography>
  </Box>
)

export const Basic: Story = {
  args: {
    spacing: '4',
  },
  render: (args) => (
    <Stack {...args}>
      <StackItem>Item 1</StackItem>
      <StackItem bg="purple">Item 2</StackItem>
      <StackItem bg="gray">Item 3</StackItem>
    </Stack>
  ),
}

export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Vertical Stack (Default)</Typography>
        <Stack spacing="4">
          <StackItem>Item 1</StackItem>
          <StackItem bg="purple">Item 2</StackItem>
          <StackItem bg="gray">Item 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Horizontal Stack</Typography>
        <Stack direction="horizontal" spacing="4">
          <StackItem>Item 1</StackItem>
          <StackItem bg="purple">Item 2</StackItem>
          <StackItem bg="gray">Item 3</StackItem>
        </Stack>
      </div>
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Small Spacing (2)</Typography>
        <Stack spacing="2">
          <StackItem minWidth="auto" p="3">Tight</StackItem>
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Medium Spacing (4)</Typography>
        <Stack spacing="4">
          <StackItem minWidth="auto" p="3">Normal</StackItem>
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Large Spacing (8)</Typography>
        <Stack spacing="8">
          <StackItem minWidth="auto" p="3">Wide</StackItem>
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>
        </Stack>
      </div>
    </div>
  ),
}

export const WithDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Vertical Stack with Default Dividers</Typography>
        <Stack spacing="3" divider={true} bg="dark" p="6" borderRadius="md" maxWidth="300px">
          <Box>
            <Typography color="white" variant="h5">Profile Settings</Typography>
            <Typography color="gray.light" variant="body2">Manage your account</Typography>
          </Box>
          <Box>
            <Typography color="white" variant="h5">Privacy Settings</Typography>
            <Typography color="gray.light" variant="body2">Control your privacy</Typography>
          </Box>
          <Box>
            <Typography color="white" variant="h5">Notifications</Typography>
            <Typography color="gray.light" variant="body2">Email and push settings</Typography>
          </Box>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Horizontal Stack with Default Dividers</Typography>
        <Stack direction="horizontal" spacing="4" divider={true} bg="dark" p="4" borderRadius="md">
          <StackItem minWidth="auto" p="3">Save</StackItem>
          <StackItem bg="gray" minWidth="auto" p="3">Cancel</StackItem>
          <StackItem bg="purple" minWidth="auto" p="3">Delete</StackItem>
        </Stack>
      </div>
    </div>
  ),
}

export const CustomDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Custom Divider Styling</Typography>
        <Stack 
          spacing="4" 
          divider={<Divider color="medium" thickness="medium" />}
          bg="dark" 
          p="6" 
          borderRadius="md"
          maxWidth="400px"
        >
          <Box>
            <Typography color="white" variant="h4">Dashboard</Typography>
            <Typography color="gray.light">Overview of your data</Typography>
          </Box>
          <Box>
            <Typography color="white" variant="h4">Analytics</Typography>
            <Typography color="gray.light">Detailed insights and reports</Typography>
          </Box>
          <Box>
            <Typography color="white" variant="h4">Settings</Typography>
            <Typography color="gray.light">Configure your preferences</Typography>
          </Box>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Horizontal with Custom Divider</Typography>
        <Stack 
          direction="horizontal" 
          spacing="6" 
          divider={<Divider orientation="vertical" thickness="thick" color="dark" length="40px" />}
          align="center"
          bg="light" 
          p="6" 
          borderRadius="md"
        >
          <Box textAlign="center">
            <Typography variant="h2" color="blue" fontWeight="bold">127</Typography>
            <Typography variant="body2" color="gray.dark">Active Users</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h2" color="purple" fontWeight="bold">89%</Typography>
            <Typography variant="body2" color="gray.dark">Success Rate</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h2" color="gray.dark" fontWeight="bold">2.4s</Typography>
            <Typography variant="body2" color="gray.dark">Avg Response</Typography>
          </Box>
        </Stack>
      </div>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Align Start</Typography>
        <Stack direction="horizontal" spacing="4" align="start" bg="dark" p="4" borderRadius="md">
          <StackItem height="60px">Short</StackItem>
          <StackItem bg="purple" height="100px">Tall Item</StackItem>
          <StackItem bg="gray" height="80px">Medium</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Align Center</Typography>
        <Stack direction="horizontal" spacing="4" align="center" bg="dark" p="4" borderRadius="md">
          <StackItem height="60px">Short</StackItem>
          <StackItem bg="purple" height="100px">Tall Item</StackItem>
          <StackItem bg="gray" height="80px">Medium</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Align Stretch</Typography>
        <Stack direction="horizontal" spacing="4" align="stretch" bg="dark" p="4" borderRadius="md" height="120px">
          <StackItem>Stretched</StackItem>
          <StackItem bg="purple">All Same</StackItem>
          <StackItem bg="gray">Height</StackItem>
        </Stack>
      </div>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb="4">Responsive Direction</Typography>
        <Typography variant="body1" mb="4" color="gray.light">
          Vertical on mobile, horizontal on tablet and up
        </Typography>
        <Stack 
          direction="vertical" 
          md="horizontal" 
          spacing="4" 
          bg="dark" 
          p="4" 
          borderRadius="md"
        >
          <StackItem>Responsive 1</StackItem>
          <StackItem bg="purple">Responsive 2</StackItem>
          <StackItem bg="gray">Responsive 3</StackItem>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Multi-breakpoint Responsive</Typography>
        <Typography variant="body1" mb="4" color="gray.light">
          Vertical → horizontal (md) → vertical (lg) → horizontal (xl)
        </Typography>
        <Stack 
          direction="vertical"
          md="horizontal"
          lg="vertical" 
          xl="horizontal"
          spacing="4" 
          divider={true}
          bg="dark" 
          p="4" 
          borderRadius="md"
        >
          <StackItem>Multi 1</StackItem>
          <StackItem bg="purple">Multi 2</StackItem>
          <StackItem bg="gray">Multi 3</StackItem>
        </Stack>
      </div>
    </div>
  ),
}

export const CommonPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <Typography variant="h3" mb="4">Navigation Menu</Typography>
        <Stack direction="horizontal" spacing="0" bg="dark" borderRadius="md" p="1">
          <Box p="3" borderRadius="base" bg="blue" style={{ backgroundColor: '#4A9EFF' }}>
            <Typography color="white" fontWeight="medium">Home</Typography>
          </Box>
          <Box p="3" borderRadius="base">
            <Typography color="gray.light">About</Typography>
          </Box>
          <Box p="3" borderRadius="base">
            <Typography color="gray.light">Services</Typography>
          </Box>
          <Box p="3" borderRadius="base">
            <Typography color="gray.light">Contact</Typography>
          </Box>
        </Stack>
      </div>
      
      <div>
        <Typography variant="h3" mb="4">Form Layout</Typography>
        <Stack spacing="6" maxWidth="400px">
          <Card>
            <Typography variant="h5" mb="3">User Profile</Typography>
            <Stack spacing="4">
              <Box>
                <Typography variant="body2" color="gray.light" mb="1">Full Name</Typography>
                <Box bg="gray.base" p="3" borderRadius="base">
                  <Typography color="white">John Doe</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" color="gray.light" mb="1">Email</Typography>
                <Box bg="gray.base" p="3" borderRadius="base">
                  <Typography color="white">john@example.com</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" color="gray.light" mb="1">Role</Typography>
                <Box bg="gray.base" p="3" borderRadius="base">
                  <Typography color="white">Administrator</Typography>
                </Box>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </div>

      <div>
        <Typography variant="h3" mb="4">Action Bar</Typography>
        <Stack 
          direction="horizontal" 
          spacing="2" 
          divider={<Divider orientation="vertical" length="24px" />}
          align="center"
          bg="dark" 
          p="4" 
          borderRadius="md"
        >
          <StackItem bg="blue" minWidth="auto" p="2">New</StackItem>
          <StackItem bg="gray" minWidth="auto" p="2">Edit</StackItem>
          <StackItem bg="gray" minWidth="auto" p="2">Delete</StackItem>
          <StackItem bg="purple" minWidth="auto" p="2">Export</StackItem>
        </Stack>
      </div>

      <div>
        <Typography variant="h3" mb="4">Card Stack</Typography>
        <Stack spacing="4" maxWidth="500px">
          <Card>
            <Typography variant="h5" mb="2">Feature Release 2.1</Typography>
            <Typography color="gray.light" mb="3">
              New dashboard improvements and performance optimizations
            </Typography>
            <Stack direction="horizontal" spacing="2">
              <Box bg="blue" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">New</Typography>
              </Box>
              <Box bg="gray.base" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">Important</Typography>
              </Box>
            </Stack>
          </Card>
          
          <Card>
            <Typography variant="h5" mb="2">Security Update</Typography>
            <Typography color="gray.light" mb="3">
              Critical security patches and authentication improvements
            </Typography>
            <Stack direction="horizontal" spacing="2">
              <Box bg="purple" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">Security</Typography>
              </Box>
              <Box bg="gray.base" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">Critical</Typography>
              </Box>
            </Stack>
          </Card>
          
          <Card>
            <Typography variant="h5" mb="2">UI Improvements</Typography>
            <Typography color="gray.light" mb="3">
              Better mobile experience and accessibility enhancements
            </Typography>
            <Stack direction="horizontal" spacing="2">
              <Box bg="gray.base" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">UI/UX</Typography>
              </Box>
              <Box bg="gray.base" p="1" px="3" borderRadius="base">
                <Typography color="white" variant="caption">Mobile</Typography>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </div>
    </div>
  ),
}

export const WithWrapping: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb="4">Horizontal Stack with Wrapping</Typography>
        <Stack direction="horizontal" spacing="4" wrap bg="dark" p="4" borderRadius="md" maxWidth="400px">
          <StackItem minWidth="150px">Item 1</StackItem>
          <StackItem bg="purple" minWidth="150px">Item 2</StackItem>
          <StackItem bg="gray" minWidth="150px">Item 3</StackItem>
          <StackItem minWidth="150px">Item 4</StackItem>
          <StackItem bg="blue" minWidth="150px">Item 5</StackItem>
        </Stack>
      </div>
    </div>
  ),
}