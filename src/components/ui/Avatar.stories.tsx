import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['circular', 'square'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    variant: 'circular',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Profile picture',
    name: 'John Doe',
    size: 'md',
  },
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="XS" size="xs" />
        <Typography variant="small" color="gray">XS (24px)</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="SM" size="sm" />
        <Typography variant="small" color="gray">SM (32px)</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="MD" size="md" />
        <Typography variant="small" color="gray">MD (40px)</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="LG" size="lg" />
        <Typography variant="small" color="gray">LG (56px)</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="XL" size="xl" />
        <Typography variant="small" color="gray">XL (72px)</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="2XL" size="2xl" />
        <Typography variant="small" color="gray">2XL (96px)</Typography>
      </Box>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
          name="John Doe" 
          size="lg" 
          variant="circular" 
        />
        <Typography variant="small" color="gray">Circular</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
          name="John Doe" 
          size="lg" 
          variant="square" 
        />
        <Typography variant="small" color="gray">Square</Typography>
      </Box>
    </Box>
  ),
}

export const WithInitials: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Avatar name="John Doe" size="lg" />
      <Avatar name="Jane Smith" size="lg" />
      <Avatar name="Alex Johnson" size="lg" />
      <Avatar name="M" size="lg" />
      <Avatar name="Sarah O'Connor" size="lg" />
    </Box>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="Online" size="lg" showStatus status="online" />
        <Typography variant="small" color="gray">Online</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="Away" size="lg" showStatus status="away" />
        <Typography variant="small" color="gray">Away</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="Busy" size="lg" showStatus status="busy" />
        <Typography variant="small" color="gray">Busy</Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">
        <Avatar name="Offline" size="lg" showStatus status="offline" />
        <Typography variant="small" color="gray">Offline</Typography>
      </Box>
    </Box>
  ),
}

export const WithCustomIcon: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Avatar 
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        } 
        size="lg" 
      />
      
      <Avatar 
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        } 
        size="lg" 
      />
    </Box>
  ),
}

export const Loading: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Avatar loading size="sm" />
      <Avatar loading size="md" />
      <Avatar loading size="lg" />
      <Avatar loading size="xl" />
    </Box>
  ),
}

export const ErrorFallback: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Avatar 
        src="https://invalid-image-url.jpg" 
        name="John Doe" 
        size="lg" 
        onError={() => console.log('Image failed to load')}
      />
      <Avatar 
        src="https://another-invalid-url.jpg" 
        size="lg" 
      />
    </Box>
  ),
}

export const ClickableAvatars: Story = {
  render: () => (
    <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
      <Avatar 
        name="Clickable 1" 
        size="lg" 
        onClick={() => alert('Avatar 1 clicked!')} 
      />
      <Avatar 
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        name="Clickable 2" 
        size="lg" 
        showStatus 
        status="online"
        onClick={() => alert('Avatar 2 clicked!')} 
      />
    </Box>
  ),
}

export const Group: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      <div>
        <Typography variant="body" mb="md">Team Members</Typography>
        <Box display="flex" gap="sm" alignItems="center">
          <Avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            name="John Doe" 
            showStatus 
            status="online" 
          />
          <Avatar 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            name="Jane Smith" 
            showStatus 
            status="away" 
          />
          <Avatar 
            name="Alex Johnson" 
            showStatus 
            status="busy" 
          />
          <Avatar 
            name="Sarah Wilson" 
            showStatus 
            status="offline" 
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Overlapping Group</Typography>
        <Box display="flex" alignItems="center" style={{ marginLeft: '0' }}>
          {[
            { name: 'Member 1', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
            { name: 'Member 2', src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
            { name: 'Member 3' },
            { name: 'Member 4' },
          ].map((member, index) => (
            <Avatar 
              key={index}
              src={member.src}
              name={member.name}
              size="md"
              style={{ 
                marginLeft: index > 0 ? '-8px' : '0',
                zIndex: 10 - index,
                border: '2px solid #000'
              }}
            />
          ))}
          <Box 
            ml="sm" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="full"
            bg="dark"
            style={{ 
              marginLeft: '-8px',
              border: '2px solid #000',
              fontSize: '12px',
              color: '#FFFFFF'
            }}
          >
            +5
          </Box>
        </Box>
      </div>
    </Box>
  ),
}