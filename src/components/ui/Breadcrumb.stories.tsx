import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
    maxItems: {
      control: { type: 'number', min: 3, max: 10 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const basicItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Gaming Keyboards', href: '/products/keyboards' },
  { label: 'Mechanical RGB', current: true },
]

export const Default: Story = {
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default',
  },
}

export const BasicUsage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Simple Navigation</Typography>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', current: true },
          ]}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Three Levels</Typography>
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Settings', href: '/settings' },
            { label: 'Profile', current: true },
          ]}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Deep Navigation</Typography>
        <Breadcrumb items={basicItems} />
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Breadcrumb
          items={basicItems}
          size="sm"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Breadcrumb
          items={basicItems}
          size="md"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Breadcrumb
          items={basicItems}
          size="lg"
        />
      </div>
    </Box>
  ),
}

export const InteractiveNavigation: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/products/keyboards/mechanical')
    
    const handleNavigation = (path: string) => {
      setCurrentPath(path)
    }
    
    const getItems = (path: string): BreadcrumbItem[] => {
      const pathSegments = path.split('/').filter(Boolean)
      
      const items: BreadcrumbItem[] = [
        { label: 'Home', onClick: () => handleNavigation('/') }
      ]
      
      let currentPath = ''
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`
        const isLast = index === pathSegments.length - 1
        
        items.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
          onClick: isLast ? undefined : () => handleNavigation(currentPath),
          current: isLast,
        })
      })
      
      return items
    }
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Current Path: {currentPath}</Typography>
          <Breadcrumb items={getItems(currentPath)} />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Quick Navigation:</Typography>
          <Box display="flex" gap="sm" flexWrap="wrap">
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/products')}>Products</button>
            <button onClick={() => handleNavigation('/products/keyboards')}>Keyboards</button>
            <button onClick={() => handleNavigation('/products/keyboards/mechanical')}>Mechanical</button>
            <button onClick={() => handleNavigation('/products/keyboards/mechanical/rgb')}>RGB</button>
          </Box>
        </div>
      </Box>
    )
  },
}

export const CustomSeparator: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Slash Separator</Typography>
        <Breadcrumb
          items={basicItems}
          separator={<span>/</span>}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Arrow Separator</Typography>
        <Breadcrumb
          items={basicItems}
          separator={<span>→</span>}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Pipe Separator</Typography>
        <Breadcrumb
          items={basicItems}
          separator={<span>|</span>}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Custom Icon Separator</Typography>
        <Breadcrumb
          items={basicItems}
          separator={
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
        />
      </div>
    </Box>
  ),
}

export const TruncatedBreadcrumbs: Story = {
  render: () => {
    const longItems: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/sub' },
      { label: 'Products', href: '/category/sub/products' },
      { label: 'Gaming Equipment', href: '/category/sub/products/gaming' },
      { label: 'Peripherals', href: '/category/sub/products/gaming/peripherals' },
      { label: 'Keyboards', href: '/category/sub/products/gaming/peripherals/keyboards' },
      { label: 'Mechanical', href: '/category/sub/products/gaming/peripherals/keyboards/mechanical' },
      { label: 'RGB Backlit', current: true },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="sm">Full Path (No Truncation)</Typography>
          <Breadcrumb items={longItems} />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Truncated to 5 Items</Typography>
          <Breadcrumb items={longItems} maxItems={5} />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Truncated to 3 Items</Typography>
          <Breadcrumb items={longItems} maxItems={3} />
        </div>
      </Box>
    )
  },
}

export const MixedInteractionTypes: Story = {
  render: () => {
    const [messages, setMessages] = useState<string[]>([])
    
    const addMessage = (message: string) => {
      setMessages(prev => [...prev, message])
      setTimeout(() => {
        setMessages(prev => prev.slice(1))
      }, 3000)
    }
    
    const mixedItems: BreadcrumbItem[] = [
      { 
        label: 'Dashboard', 
        onClick: () => addMessage('Navigated to Dashboard') 
      },
      { 
        label: 'Analytics', 
        href: '#analytics',
      },
      { 
        label: 'Reports', 
        onClick: () => addMessage('Navigated to Reports') 
      },
      { 
        label: 'Monthly Summary', 
        current: true 
      },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="md" p="md">
        <div>
          <Typography variant="body" mb="sm">Mixed Navigation Types</Typography>
          <Breadcrumb items={mixedItems} />
          <Typography variant="small" color="gray" mt="sm">
            Mix of buttons (onClick) and links (href)
          </Typography>
        </div>
        
        {messages.length > 0 && (
          <Box p="sm" style={{ backgroundColor: 'rgba(74, 158, 255, 0.1)', borderRadius: '4px' }}>
            <Typography variant="small" color="blue">
              {messages[messages.length - 1]}
            </Typography>
          </Box>
        )}
      </Box>
    )
  },
}

export const AccessibilityFeatures: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Custom ARIA Label</Typography>
        <Breadcrumb
          items={basicItems}
          aria-label="Product category navigation"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Focus Indicators</Typography>
        <Breadcrumb
          items={[
            { label: 'Settings', onClick: () => console.log('Settings') },
            { label: 'User Profile', onClick: () => console.log('Profile') },
            { label: 'Security', onClick: () => console.log('Security') },
            { label: 'Two-Factor Auth', current: true },
          ]}
        />
        <Typography variant="small" color="gray" mt="sm">
          Tab through the items to see focus indicators
        </Typography>
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="h3" mb="lg">E-commerce Product Page</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Breadcrumb
            items={[
              { label: 'Store', href: '/store' },
              { label: 'Gaming', href: '/store/gaming' },
              { label: 'Keyboards', href: '/store/gaming/keyboards' },
              { label: 'Razer DeathStalker V2 Pro', current: true },
            ]}
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Documentation Navigation</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Breadcrumb
            items={[
              { label: 'Docs', href: '/docs' },
              { label: 'Components', href: '/docs/components' },
              { label: 'Navigation', href: '/docs/components/navigation' },
              { label: 'Breadcrumb', current: true },
            ]}
            size="sm"
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Admin Panel Navigation</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Breadcrumb
            items={[
              { label: 'Admin', onClick: () => console.log('Admin') },
              { label: 'User Management', onClick: () => console.log('Users') },
              { label: 'Roles & Permissions', onClick: () => console.log('Roles') },
              { label: 'Edit Role: Moderator', current: true },
            ]}
            maxItems={4}
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">File System Navigation</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <Breadcrumb
            items={[
              { label: 'Root', onClick: () => console.log('Root') },
              { label: 'Users', onClick: () => console.log('Users') },
              { label: 'Projects', onClick: () => console.log('Projects') },
              { label: 'RSPWN-Design-System', onClick: () => console.log('RSPWN') },
              { label: 'src', onClick: () => console.log('src') },
              { label: 'components', onClick: () => console.log('components') },
              { label: 'ui', onClick: () => console.log('ui') },
              { label: 'Breadcrumb.tsx', current: true },
            ]}
            maxItems={5}
            size="sm"
            separator={<span>/</span>}
          />
        </Box>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default',
    maxItems: undefined,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Breadcrumb {...args} />
    </Box>
  ),
}