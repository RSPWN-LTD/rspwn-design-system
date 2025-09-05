import type { Meta, StoryObj } from '@storybook/react'
import { Icon, IconCatalog, iconPaths, IconName } from './Icon'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(iconPaths),
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 24, 32, 48],
    },
    color: {
      control: { type: 'color' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'gamepad',
    size: 'md',
  },
}

export const BasicUsage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Basic Icon Usage</Typography>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" />
          <Typography variant="body">Gaming Controller</Typography>
        </Box>
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Icon Sizes</Typography>
      <Box display="flex" flexDirection="column" gap="md">
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size="xs" />
          <Typography variant="small" color="gray">Extra Small (12px)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size="sm" />
          <Typography variant="small" color="gray">Small (16px)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size="md" />
          <Typography variant="small" color="gray">Medium (24px) - Default</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size="lg" />
          <Typography variant="small" color="gray">Large (32px)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size="xl" />
          <Typography variant="small" color="gray">Extra Large (40px)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="gamepad" size={64} />
          <Typography variant="small" color="gray">Custom Size (64px)</Typography>
        </Box>
      </Box>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Icon Colors</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" />
          <Typography variant="small" color="gray">Default (White)</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" color="#4A9EFF" />
          <Typography variant="small" color="gray">Primary Blue</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" color="#10B981" />
          <Typography variant="small" color="gray">Success Green</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" color="#F59E0B" />
          <Typography variant="small" color="gray">Warning Yellow</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" color="#EF4444" />
          <Typography variant="small" color="gray">Error Red</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="md">
          <Icon name="trophy" size="lg" color="#9CA3AF" />
          <Typography variant="small" color="gray">Gray</Typography>
        </Box>
      </Box>
    </Box>
  ),
}

export const GamingIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Gaming Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['gamepad', 'trophy', 'target'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const UIIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">UI Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['home', 'user', 'settings', 'search'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const ActionIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Action Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['play', 'pause', 'stop', 'heart', 'star'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const NavigationIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Navigation Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['menu', 'close', 'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const StatusIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Status Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['check', 'x-mark', 'alert', 'info'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" color={
              iconName === 'check' ? '#10B981' :
              iconName === 'x-mark' ? '#EF4444' :
              iconName === 'alert' ? '#F59E0B' :
              '#4A9EFF'
            } />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const MediaIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Media Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['volume', 'volume-off', 'image'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const CommunicationIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Communication Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
        {(['chat', 'mail', 'phone'] as IconName[]).map((iconName) => (
          <Box
            key={iconName}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="sm"
            p="md"
            style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
          >
            <Icon name={iconName} size="lg" />
            <Typography variant="small" color="gray" textAlign="center">
              {iconName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ),
}

export const InteractiveIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Interactive Icons</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="sm"
          p="md"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Icon 
            name="heart" 
            size="lg" 
            color="#EF4444"
            onClick={() => alert('Heart clicked!')}
          />
          <Typography variant="small" color="gray" textAlign="center">
            Clickable Heart
          </Typography>
        </Box>
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="sm"
          p="md"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Icon 
            name="star" 
            size="lg" 
            color="#F59E0B"
            onClick={() => alert('Star clicked!')}
          />
          <Typography variant="small" color="gray" textAlign="center">
            Clickable Star
          </Typography>
        </Box>
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="sm"
          p="md"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Icon 
            name="settings" 
            size="lg"
            onClick={() => alert('Settings clicked!')}
          />
          <Typography variant="small" color="gray" textAlign="center">
            Clickable Settings
          </Typography>
        </Box>
      </Box>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="h3" mb="lg">Gaming Dashboard Navigation</Typography>
        <Box 
          display="flex" 
          gap="md" 
          p="md"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Box display="flex" alignItems="center" gap="sm">
            <Icon name="home" size="sm" />
            <Typography variant="body">Dashboard</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="sm">
            <Icon name="gamepad" size="sm" />
            <Typography variant="body">Games</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="sm">
            <Icon name="trophy" size="sm" />
            <Typography variant="body">Achievements</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="sm">
            <Icon name="user" size="sm" />
            <Typography variant="body">Profile</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="sm">
            <Icon name="settings" size="sm" />
            <Typography variant="body">Settings</Typography>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Media Player Controls</Typography>
        <Box 
          display="flex" 
          justifyContent="center"
          alignItems="center"
          gap="lg" 
          p="lg"
          style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
        >
          <Icon name="play" size="lg" color="#4A9EFF" />
          <Icon name="pause" size="lg" />
          <Icon name="stop" size="lg" />
          <Icon name="volume" size="lg" />
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Status Indicators</Typography>
        <Box display="flex" flexDirection="column" gap="md" maxWidth="400px">
          <Box display="flex" alignItems="center" gap="md" p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <Icon name="check" color="#10B981" />
            <Typography variant="body">Game downloaded successfully</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="md" p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <Icon name="alert" color="#F59E0B" />
            <Typography variant="body">Update available</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="md" p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <Icon name="x-mark" color="#EF4444" />
            <Typography variant="body">Connection failed</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="md" p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <Icon name="info" color="#4A9EFF" />
            <Typography variant="body">New features available</Typography>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">User Actions</Typography>
        <Box display="flex" gap="md" justifyContent="center">
          <Box 
            display="flex" 
            alignItems="center" 
            gap="sm" 
            p="md" 
            style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px',
              cursor: 'pointer',
              border: '1px solid #374151'
            }}
          >
            <Icon name="heart" color="#EF4444" />
            <Typography variant="body">Like</Typography>
          </Box>
          <Box 
            display="flex" 
            alignItems="center" 
            gap="sm" 
            p="md" 
            style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px',
              cursor: 'pointer',
              border: '1px solid #374151'
            }}
          >
            <Icon name="star" color="#F59E0B" />
            <Typography variant="body">Favorite</Typography>
          </Box>
          <Box 
            display="flex" 
            alignItems="center" 
            gap="sm" 
            p="md" 
            style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px',
              cursor: 'pointer',
              border: '1px solid #374151'
            }}
          >
            <Icon name="chat" color="#4A9EFF" />
            <Typography variant="body">Comment</Typography>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Game Library Grid</Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap="md">
          {[
            { icon: 'target' as IconName, title: 'FPS Games', color: '#EF4444' },
            { icon: 'trophy' as IconName, title: 'Achievements', color: '#F59E0B' },
            { icon: 'gamepad' as IconName, title: 'Controllers', color: '#4A9EFF' },
            { icon: 'star' as IconName, title: 'Favorites', color: '#F59E0B' },
            { icon: 'user' as IconName, title: 'Friends', color: '#10B981' },
            { icon: 'chat' as IconName, title: 'Messages', color: '#4A9EFF' },
          ].map((item, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="sm"
              p="lg"
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                cursor: 'pointer',
                border: '1px solid #374151',
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              <Icon name={item.icon} size="xl" color={item.color} />
              <Typography variant="small" color="gray" textAlign="center">
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  ),
}

export const AllIcons: Story = {
  render: () => (
    <Box p="md">
      <Typography variant="body" mb="lg">Complete Icon Library</Typography>
      <IconCatalog size="lg" />
    </Box>
  ),
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Box display="flex" alignItems="center" gap="md">
            <Icon 
              name="settings" 
              aria-label="Open settings menu"
              role="button"
            />
            <Typography variant="body">
              Icon with custom aria-label and role
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap="md">
            <Icon 
              name="heart"
              color="#EF4444"
              onClick={() => alert('Favorited!')}
              aria-label="Add to favorites"
            />
            <Typography variant="body">
              Interactive icon with click handler and aria-label
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap="md">
            <Icon 
              name="check"
              color="#10B981"
              aria-label="Task completed successfully"
            />
            <Typography variant="body">
              Status icon with descriptive label
            </Typography>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="small" color="gray">
          All icons include automatic aria-labels based on their name and support custom accessibility attributes.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    name: 'gamepad',
    size: 'md',
    color: '',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Icon {...args} />
    </Box>
  ),
}