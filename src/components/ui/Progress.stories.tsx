import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState, useEffect } from 'react'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'success', 'warning', 'error', 'purple'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'blue',
  },
}

export const LinearVariants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Basic Progress</Typography>
        <Progress value={25} />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">With Label</Typography>
        <Progress value={50} showLabel label="Download Progress" />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">With Percentage</Typography>
        <Progress value={75} showPercentage />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">With Label and Percentage</Typography>
        <Progress value={60} showLabel showPercentage label="Upload Progress" />
      </div>
    </Box>
  ),
}

export const LinearSizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Progress value={40} size="sm" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Progress value={60} size="md" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Progress value={80} size="lg" showPercentage />
      </div>
    </Box>
  ),
}

export const LinearColors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Blue</Typography>
        <Progress value={50} color="blue" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Success</Typography>
        <Progress value={100} color="success" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Warning</Typography>
        <Progress value={70} color="warning" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Error</Typography>
        <Progress value={30} color="error" showPercentage />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Purple</Typography>
        <Progress value={85} color="purple" showPercentage />
      </div>
    </Box>
  ),
}

export const CircularVariants: Story = {
  render: () => (
    <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap" p="md">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={25} variant="circular" />
        <Typography variant="small" color="gray">Basic</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={50} variant="circular" showPercentage />
        <Typography variant="small" color="gray">With Percentage</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={75} variant="circular" label="Tasks" />
        <Typography variant="small" color="gray">With Label</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={90} variant="circular" showPercentage label="Complete" />
        <Typography variant="small" color="gray">Label + Percentage</Typography>
      </Box>
    </Box>
  ),
}

export const CircularSizes: Story = {
  render: () => (
    <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap" p="md">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={60} variant="circular" size="sm" showPercentage />
        <Typography variant="small" color="gray">Small</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={60} variant="circular" size="md" showPercentage />
        <Typography variant="small" color="gray">Medium</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={60} variant="circular" size="lg" showPercentage />
        <Typography variant="small" color="gray">Large</Typography>
      </Box>
    </Box>
  ),
}

export const CircularColors: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap" p="md">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={65} variant="circular" color="blue" showPercentage />
        <Typography variant="small" color="gray">Blue</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={100} variant="circular" color="success" showPercentage />
        <Typography variant="small" color="gray">Success</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={75} variant="circular" color="warning" showPercentage />
        <Typography variant="small" color="gray">Warning</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={25} variant="circular" color="error" showPercentage />
        <Typography variant="small" color="gray">Error</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Progress value={85} variant="circular" color="purple" showPercentage />
        <Typography variant="small" color="gray">Purple</Typography>
      </Box>
    </Box>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Linear Indeterminate</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Progress indeterminate size="sm" color="blue" />
          <Progress indeterminate size="md" color="success" />
          <Progress indeterminate size="lg" color="warning" />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Circular Indeterminate</Typography>
        <Box display="flex" gap="md" alignItems="center">
          <Progress variant="circular" indeterminate size="sm" color="blue" />
          <Progress variant="circular" indeterminate size="md" color="success" />
          <Progress variant="circular" indeterminate size="lg" color="error" />
        </Box>
      </div>
    </Box>
  ),
}

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0
          }
          const diff = Math.random() * 10
          return Math.min(oldProgress + diff, 100)
        })
      }, 500)
      
      return () => {
        clearInterval(timer)
      }
    }, [])
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Animated Linear Progress</Typography>
          <Progress 
            value={progress} 
            showLabel 
            showPercentage 
            label="Loading..." 
            color={progress < 30 ? 'error' : progress < 70 ? 'warning' : 'success'}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Animated Circular Progress</Typography>
          <Box display="flex" gap="md" alignItems="center">
            <Progress 
              variant="circular" 
              value={progress} 
              showPercentage 
              color={progress < 30 ? 'error' : progress < 70 ? 'warning' : 'success'}
            />
            <Typography variant="body">
              Status: {progress < 30 ? 'Starting...' : progress < 70 ? 'In Progress...' : 'Almost Done!'}
            </Typography>
          </Box>
        </div>
      </Box>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="h3" mb="lg">File Upload Progress</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Progress value={100} showLabel showPercentage label="document.pdf" color="success" />
          <Progress value={65} showLabel showPercentage label="image.jpg" color="blue" />
          <Progress value={15} showLabel showPercentage label="video.mp4" color="warning" />
          <Progress indeterminate showLabel label="preparing upload..." color="blue" />
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">System Status</Typography>
        <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap">
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
            <Progress variant="circular" value={85} showPercentage color="success" />
            <Typography variant="body">CPU Usage</Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
            <Progress variant="circular" value={45} showPercentage color="blue" />
            <Typography variant="body">Memory</Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
            <Progress variant="circular" value={92} showPercentage color="warning" />
            <Typography variant="body">Storage</Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
            <Progress variant="circular" value={25} showPercentage color="success" />
            <Typography variant="body">Network</Typography>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Task Completion</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Progress value={100} showLabel showPercentage label="Design System Components" color="success" size="lg" />
          <Progress value={70} showLabel showPercentage label="Unit Tests" color="blue" size="lg" />
          <Progress value={40} showLabel showPercentage label="Documentation" color="warning" size="lg" />
          <Progress value={10} showLabel showPercentage label="Performance Optimization" color="error" size="lg" />
        </Box>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    value: 50,
    max: 100,
    variant: 'linear',
    size: 'md',
    indeterminate: false,
    color: 'blue',
    showLabel: false,
    showPercentage: false,
    label: 'Progress',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
      <Progress {...args} />
    </Box>
  ),
}