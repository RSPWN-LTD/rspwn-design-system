import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    lines: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
    speed: 'normal',
  },
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
      <div>
        <Typography variant="small" mb="sm" color="gray">Text</Typography>
        <Skeleton variant="text" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Rectangular</Typography>
        <Skeleton variant="rectangular" height="60px" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Rounded</Typography>
        <Skeleton variant="rounded" height="60px" />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Circular</Typography>
        <Skeleton variant="circular" width="60px" height="60px" />
      </div>
    </Box>
  ),
}

export const TextSkeletons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="sm">Single Line</Typography>
        <Skeleton variant="text" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Multiple Lines (3)</Typography>
        <Skeleton variant="text" lines={3} />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Multiple Lines (5)</Typography>
        <Skeleton variant="text" lines={5} />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Custom Width</Typography>
        <Skeleton variant="text" width="300px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Custom Height</Typography>
        <Skeleton variant="text" height="24px" />
      </div>
    </Box>
  ),
}

export const Animations: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
      <div>
        <Typography variant="body" mb="sm">Pulse Animation (Default)</Typography>
        <Skeleton animation="pulse" height="40px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Wave Animation</Typography>
        <Skeleton animation="wave" height="40px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">No Animation</Typography>
        <Skeleton animation="none" height="40px" />
      </div>
    </Box>
  ),
}

export const AnimationSpeeds: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
      <div>
        <Typography variant="body" mb="sm">Slow Speed (2s)</Typography>
        <Skeleton speed="slow" height="40px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Normal Speed (1.5s)</Typography>
        <Skeleton speed="normal" height="40px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Fast Speed (1s)</Typography>
        <Skeleton speed="fast" height="40px" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Wave Animation - Fast</Typography>
        <Skeleton animation="wave" speed="fast" height="40px" />
      </div>
    </Box>
  ),
}

export const CustomDimensions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Different Sizes</Typography>
        <Box display="flex" flexDirection="column" gap="md" maxWidth="600px">
          <Skeleton width="100%" height="20px" />
          <Skeleton width="80%" height="30px" />
          <Skeleton width="60%" height="40px" />
          <Skeleton width="40%" height="50px" />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Circular Avatars</Typography>
        <Box display="flex" gap="md" alignItems="center">
          <Skeleton variant="circular" width="32px" height="32px" />
          <Skeleton variant="circular" width="48px" height="48px" />
          <Skeleton variant="circular" width="64px" height="64px" />
          <Skeleton variant="circular" width="80px" height="80px" />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Cards and Rectangles</Typography>
        <Box display="flex" gap="md">
          <Skeleton variant="rounded" width="150px" height="100px" />
          <Skeleton variant="rectangular" width="200px" height="100px" />
          <Skeleton variant="rounded" width="120px" height="80px" />
        </Box>
      </div>
    </Box>
  ),
}

export const ComplexLayouts: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="body" mb="md">User Profile Card</Typography>
        <Box
          display="flex"
          gap="md"
          p="md"
          maxWidth="400px"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Skeleton variant="circular" width="60px" height="60px" />
          <Box flex="1" display="flex" flexDirection="column" gap="sm">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="80%" lines={2} />
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Game Card</Typography>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="300px"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Skeleton variant="rounded" width="100%" height="180px" />
          <Box p="md">
            <Skeleton variant="text" width="80%" height="20px" />
            <Box mt="sm">
              <Skeleton variant="text" lines={3} />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt="md">
              <Skeleton variant="text" width="60px" />
              <Skeleton variant="rounded" width="80px" height="32px" />
            </Box>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Article List</Typography>
        <Box display="flex" flexDirection="column" gap="md" maxWidth="500px">
          {Array.from({ length: 3 }, (_, index) => (
            <Box
              key={index}
              display="flex"
              gap="md"
              p="md"
              style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
            >
              <Skeleton variant="rounded" width="100px" height="80px" />
              <Box flex="1" display="flex" flexDirection="column" gap="sm">
                <Skeleton variant="text" width="90%" height="18px" />
                <Skeleton variant="text" lines={2} />
                <Box display="flex" gap="md" mt="sm">
                  <Skeleton variant="text" width="80px" />
                  <Skeleton variant="text" width="100px" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="h3" mb="lg">Gaming Dashboard</Typography>
        <Box display="flex" flexDirection="column" gap="lg" maxWidth="800px">
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap="md">
              <Skeleton variant="circular" width="48px" height="48px" />
              <Box>
                <Skeleton variant="text" width="120px" height="20px" />
                <Skeleton variant="text" width="80px" height="16px" />
              </Box>
            </Box>
            <Skeleton variant="rounded" width="100px" height="36px" />
          </Box>
          
          {/* Stats Cards */}
          <Box display="flex" gap="lg">
            {Array.from({ length: 4 }, (_, index) => (
              <Box
                key={index}
                flex="1"
                p="md"
                style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
              >
                <Skeleton variant="text" width="70%" height="16px" />
                <Skeleton variant="text" width="50%" height="24px" />
                <Skeleton variant="text" width="60%" height="14px" />
              </Box>
            ))}
          </Box>
          
          {/* Main Content */}
          <Box display="flex" gap="lg">
            <Box flex="2">
              <Skeleton variant="rounded" width="100%" height="300px" />
            </Box>
            <Box flex="1" display="flex" flexDirection="column" gap="md">
              <Skeleton variant="rounded" width="100%" height="140px" />
              <Skeleton variant="rounded" width="100%" height="140px" />
            </Box>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Tournament Results</Typography>
        <Box maxWidth="600px">
          {Array.from({ length: 5 }, (_, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap="md"
              p="md"
              style={{ 
                backgroundColor: '#1a1a1a', 
                borderRadius: '8px',
                marginBottom: '12px'
              }}
            >
              <Skeleton variant="text" width="24px" height="24px" />
              <Skeleton variant="circular" width="40px" height="40px" />
              <Box flex="1">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end" gap="xs">
                <Skeleton variant="text" width="60px" />
                <Skeleton variant="text" width="40px" />
              </Box>
            </Box>
          ))}
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Game Library</Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="md">
          {Array.from({ length: 8 }, (_, index) => (
            <Box
              key={index}
              style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
            >
              <Skeleton variant="rounded" width="100%" height="120px" />
              <Box p="md">
                <Skeleton variant="text" width="80%" height="18px" />
                <Skeleton variant="text" width="60%" height="14px" />
                <Box display="flex" justifyContent="space-between" alignItems="center" mt="sm">
                  <Skeleton variant="text" width="50px" />
                  <Skeleton variant="circular" width="24px" height="24px" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Chat Interface</Typography>
        <Box maxWidth="400px">
          {Array.from({ length: 6 }, (_, index) => (
            <Box
              key={index}
              display="flex"
              gap="md"
              mb="md"
              alignItems="flex-start"
            >
              <Skeleton variant="circular" width="32px" height="32px" />
              <Box flex="1">
                <Skeleton variant="text" width="70%" height="16px" />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width={index % 2 === 0 ? "60%" : "85%"} />
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  ),
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <Skeleton
          variant="text"
          lines={3}
          aria-label="Loading article content, please wait"
          aria-describedby="loading-description"
        />
        <Typography id="loading-description" variant="small" color="gray" mt="sm">
          This skeleton loader uses proper ARIA attributes to inform screen readers about loading content.
        </Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Loading Profile</Typography>
        <Box display="flex" gap="md" alignItems="center">
          <Skeleton 
            variant="circular" 
            width="48px" 
            height="48px"
            aria-label="Loading user avatar"
          />
          <Box flex="1">
            <Skeleton 
              variant="text" 
              width="60%"
              aria-label="Loading username"
            />
            <Skeleton 
              variant="text" 
              width="80%" 
              lines={2}
              aria-label="Loading user bio"
            />
          </Box>
        </Box>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    variant: 'rectangular',
    width: '300px',
    height: '40px',
    animation: 'pulse',
    speed: 'normal',
    lines: 1,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Skeleton {...args} />
    </Box>
  ),
}