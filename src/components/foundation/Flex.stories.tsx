import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Flex> = {
  title: 'Foundation/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    gap: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Flex>

const FlexItem = ({ children, bg = 'blue', ...props }: { children: React.ReactNode, bg?: string }) => (
  <Box 
    bg={bg as any} 
    p={4} 
    borderRadius="base" 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    minWidth="100px"
    {...props}
  >
    <Typography color="white" variant="body" align="center">{children}</Typography>
  </Box>
)

export const Basic: Story = {
  args: {
    gap: '4',
  },
  render: (args) => (
    <Flex {...args}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem bg="purple">Item 2</FlexItem>
      <FlexItem bg="gray">Item 3</FlexItem>
    </Flex>
  ),
}

export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Row (Default)</Typography>
        <Flex gap={4}>
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Column</Typography>
        <Flex direction="column" gap={4}>
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Row Reverse</Typography>
        <Flex direction="row-reverse" gap={4}>
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const Justification: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Start (Default)</Typography>
        <Flex gap={4} bg="dark" p={4} borderRadius="md">
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Center</Typography>
        <Flex justify="center" gap={4} bg="dark" p={4} borderRadius="md">
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Space Between</Typography>
        <Flex justify="between" gap={4} bg="dark" p={4} borderRadius="md">
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Space Around</Typography>
        <Flex justify="around" gap={4} bg="dark" p={4} borderRadius="md">
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Align Start</Typography>
        <Flex align="start" gap={4} bg="dark" p={4} borderRadius="md" height="120px">
          <FlexItem>Short</FlexItem>
          <FlexItem bg="purple" height="80px">Tall Item</FlexItem>
          <FlexItem bg="gray">Medium</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Align Center</Typography>
        <Flex align="center" gap={4} bg="dark" p={4} borderRadius="md" height="120px">
          <FlexItem>Short</FlexItem>
          <FlexItem bg="purple" height="80px">Tall Item</FlexItem>
          <FlexItem bg="gray">Medium</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Align Stretch</Typography>
        <Flex align="stretch" gap={4} bg="dark" p={4} borderRadius="md" height="120px">
          <FlexItem>Stretched</FlexItem>
          <FlexItem bg="purple">Stretched</FlexItem>
          <FlexItem bg="gray">Stretched</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const CenterConvenience: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Perfect Center</Typography>
        <Flex center gap={4} bg="dark" p={8} borderRadius="md" height="200px">
          <FlexItem>Centered Content</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Center with Multiple Items</Typography>
        <Flex center gap={4} bg="dark" p={8} borderRadius="md" height="200px">
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const Wrapping: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>No Wrap (Default)</Typography>
        <Flex gap={4} bg="dark" p={4} borderRadius="md" maxWidth="400px">
          <FlexItem minWidth="150px">Item 1</FlexItem>
          <FlexItem bg="purple" minWidth="150px">Item 2</FlexItem>
          <FlexItem bg="gray" minWidth="150px">Item 3</FlexItem>
          <FlexItem minWidth="150px">Item 4</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Wrap</Typography>
        <Flex wrap="wrap" gap={4} bg="dark" p={4} borderRadius="md" maxWidth="400px">
          <FlexItem minWidth="150px">Item 1</FlexItem>
          <FlexItem bg="purple" minWidth="150px">Item 2</FlexItem>
          <FlexItem bg="gray" minWidth="150px">Item 3</FlexItem>
          <FlexItem minWidth="150px">Item 4</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Responsive Direction</Typography>
        <Typography variant="body" mb={4} color="gray.light">
          Column on mobile, row on desktop
        </Typography>
        <Flex 
          direction="column" 
          md={{ direction: 'row', justify: 'between' }}
          gap={4} 
          bg="dark" 
          p={4} 
          borderRadius="md"
        >
          <FlexItem>Responsive 1</FlexItem>
          <FlexItem bg="purple">Responsive 2</FlexItem>
          <FlexItem bg="gray">Responsive 3</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Responsive Justification</Typography>
        <Typography variant="body" mb={4} color="gray.light">
          Start on mobile, space-between on tablet, center on desktop
        </Typography>
        <Flex 
          justify="start"
          md={{ justify: 'between' }}
          lg={{ justify: 'center' }}
          gap={4} 
          bg="dark" 
          p={4} 
          borderRadius="md"
        >
          <FlexItem>Item 1</FlexItem>
          <FlexItem bg="purple">Item 2</FlexItem>
          <FlexItem bg="gray">Item 3</FlexItem>
        </Flex>
      </div>
    </div>
  ),
}

export const CommonLayouts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Header Layout</Typography>
        <Flex justify="between" align="center" bg="dark" p={4} borderRadius="md">
          <Typography variant="h4" color="white">RSPWN</Typography>
          <Flex gap={4}>
            <FlexItem bg="blue" p={2} minWidth="auto">Home</FlexItem>
            <FlexItem bg="blue" p={2} minWidth="auto">About</FlexItem>
            <FlexItem bg="blue" p={2} minWidth="auto">Contact</FlexItem>
          </Flex>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Button Group</Typography>
        <Flex gap={3}>
          <FlexItem bg="blue" minWidth="auto">Save</FlexItem>
          <FlexItem bg="gray" minWidth="auto">Cancel</FlexItem>
          <FlexItem bg="purple" minWidth="auto">Delete</FlexItem>
        </Flex>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Card Layout</Typography>
        <Flex gap={6} wrap="wrap">
          <Box bg="dark" p={6} borderRadius="md" flex="1" minWidth="250px">
            <Typography variant="h4" color="white" mb={4}>Feature 1</Typography>
            <Typography color="gray.light">Description of the first feature</Typography>
          </Box>
          <Box bg="dark" p={6} borderRadius="md" flex="1" minWidth="250px">
            <Typography variant="h4" color="white" mb={4}>Feature 2</Typography>
            <Typography color="gray.light">Description of the second feature</Typography>
          </Box>
          <Box bg="dark" p={6} borderRadius="md" flex="1" minWidth="250px">
            <Typography variant="h4" color="white" mb={4}>Feature 3</Typography>
            <Typography color="gray.light">Description of the third feature</Typography>
          </Box>
        </Flex>
      </div>

      <div>
        <Typography variant="h3" mb={4}>Sidebar Layout</Typography>
        <Flex gap={6} align="start" minHeight="300px">
          <Box bg="dark" p={4} borderRadius="md" width="200px">
            <Typography variant="h5" color="white" mb={4}>Sidebar</Typography>
            <Flex direction="column" gap={2}>
              <FlexItem bg="gray" p={2} minWidth="auto">Menu 1</FlexItem>
              <FlexItem bg="gray" p={2} minWidth="auto">Menu 2</FlexItem>
              <FlexItem bg="gray" p={2} minWidth="auto">Menu 3</FlexItem>
            </Flex>
          </Box>
          <Box bg="light" p={6} borderRadius="md" flex="1">
            <Typography variant="h4" mb={4}>Main Content</Typography>
            <Typography color="gray.dark">
              This is the main content area that takes up the remaining space.
            </Typography>
          </Box>
        </Flex>
      </div>
    </div>
  ),
}

export const InlineAndGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h3" mb={4}>Inline Flex</Typography>
        <div style={{ background: '#333', padding: '1rem', borderRadius: '8px' }}>
          <Typography color="white" mb={2}>Inline flex containers:</Typography>
          <Flex inline gap={2} align="center">
            <FlexItem p={2} minWidth="auto">Inline 1</FlexItem>
            <FlexItem bg="purple" p={2} minWidth="auto">Inline 2</FlexItem>
          </Flex>
          <span style={{ color: 'white', margin: '0 1rem' }}>Some text after</span>
          <Flex inline gap={2} align="center">
            <FlexItem bg="gray" p={2} minWidth="auto">Another</FlexItem>
            <FlexItem p={2} minWidth="auto">Group</FlexItem>
          </Flex>
        </div>
      </div>
      
      <div>
        <Typography variant="h3" mb={4}>Different Gap Sizes</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <Typography variant="body" mb={2}>Gap: 1 (4px)</Typography>
            <Flex gap={1} bg="dark" p={4} borderRadius="md">
              <FlexItem minWidth="auto" p={2}>Item 1</FlexItem>
              <FlexItem bg="purple" minWidth="auto" p={2}>Item 2</FlexItem>
              <FlexItem bg="gray" minWidth="auto" p={2}>Item 3</FlexItem>
            </Flex>
          </div>
          
          <div>
            <Typography variant="body" mb={2}>Gap: 4 (16px)</Typography>
            <Flex gap={4} bg="dark" p={4} borderRadius="md">
              <FlexItem minWidth="auto" p={2}>Item 1</FlexItem>
              <FlexItem bg="purple" minWidth="auto" p={2}>Item 2</FlexItem>
              <FlexItem bg="gray" minWidth="auto" p={2}>Item 3</FlexItem>
            </Flex>
          </div>
          
          <div>
            <Typography variant="body" mb={2}>Gap: 8 (32px)</Typography>
            <Flex gap={8} bg="dark" p={4} borderRadius="md">
              <FlexItem minWidth="auto" p={2}>Item 1</FlexItem>
              <FlexItem bg="purple" minWidth="auto" p={2}>Item 2</FlexItem>
              <FlexItem bg="gray" minWidth="auto" p={2}>Item 3</FlexItem>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  ),
}