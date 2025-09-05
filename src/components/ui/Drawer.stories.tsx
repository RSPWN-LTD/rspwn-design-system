import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from './Drawer'
import { Button } from './Button'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    isOpen: {
      control: { type: 'boolean' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DrawerWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false)
  
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open {args.side || 'right'} drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {args.children}
      </Drawer>
    </div>
  )
}

export const Default: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Default Drawer',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This is a default drawer that slides in from the right side.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          You can close it by clicking the X button, pressing Escape, or clicking outside.
        </p>
      </div>
    ),
  },
}

export const LeftSide: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Left Drawer',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer slides in from the left side.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          Perfect for navigation menus or filters.
        </p>
      </div>
    ),
  },
}

export const TopSide: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'top',
    title: 'Top Drawer',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer slides down from the top.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          Great for notifications or search bars.
        </p>
      </div>
    ),
  },
}

export const BottomSide: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'bottom',
    title: 'Bottom Drawer',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer slides up from the bottom.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          Perfect for mobile-friendly actions or details.
        </p>
      </div>
    ),
  },
}

export const AllSides: Story = {
  render: () => {
    const [activeDrawer, setActiveDrawer] = useState<string | null>(null)
    
    const sides = [
      { key: 'left', label: 'Left' },
      { key: 'right', label: 'Right' },
      { key: 'top', label: 'Top' },
      { key: 'bottom', label: 'Bottom' },
    ]
    
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {sides.map(({ key, label }) => (
          <div key={key}>
            <Button onClick={() => setActiveDrawer(key)}>{label} Drawer</Button>
            <Drawer
              isOpen={activeDrawer === key}
              onClose={() => setActiveDrawer(null)}
              side={key as any}
              title={`${label} Drawer`}
            >
              <p style={{ color: 'white', margin: 0 }}>
                This drawer slides in from the {label.toLowerCase()} side.
              </p>
            </Drawer>
          </div>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [activeDrawer, setActiveDrawer] = useState<string | null>(null)
    
    const sizes = [
      { key: 'sm', label: 'Small' },
      { key: 'md', label: 'Medium' },
      { key: 'lg', label: 'Large' },
      { key: 'xl', label: 'Extra Large' },
      { key: 'full', label: 'Full Screen' },
    ]
    
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {sizes.map(({ key, label }) => (
          <div key={key}>
            <Button variant="outline" onClick={() => setActiveDrawer(key)}>{label}</Button>
            <Drawer
              isOpen={activeDrawer === key}
              onClose={() => setActiveDrawer(null)}
              size={key as any}
              title={`${label} Drawer`}
            >
              <p style={{ color: 'white', margin: 0 }}>
                This is a {label.toLowerCase()} sized drawer.
              </p>
            </Drawer>
          </div>
        ))}
      </div>
    )
  },
}

export const WithoutTitle: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    children: (
      <div>
        <h3 style={{ color: 'white', margin: '0 0 1rem 0' }}>Custom Content</h3>
        <p style={{ color: 'white', margin: 0 }}>
          This drawer doesn't have a title prop, so only the close button appears in the header.
        </p>
      </div>
    ),
  },
}

export const NoCloseButton: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer has no close button. You can still close it by pressing Escape or clicking outside.
        </p>
        <Button onClick={() => {}}>Custom Action</Button>
      </div>
    ),
  },
}

export const DisabledClosing: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Cannot Close Easily',
    closeOnOverlayClick: false,
    closeOnEscape: false,
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer can only be closed by clicking the X button.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          Overlay clicks and Escape key are disabled.
        </p>
      </div>
    ),
  },
}

export const ScrollableContent: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Scrollable Content',
    size: 'md',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This drawer has a lot of content that requires scrolling:
        </p>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} style={{ color: 'white', margin: '0 0 1rem 0' }}>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
        <Button>Action at Bottom</Button>
      </div>
    ),
  },
}

export const NavigationDrawer: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Navigation',
    size: 'md',
    children: (
      <div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Dashboard', 'Projects', 'Team', 'Settings', 'Analytics', 'Reports', 'Help'].map((item) => (
              <li key={item} style={{ marginBottom: '0.5rem' }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0.75rem 1rem',
                    width: '100%',
                    textAlign: 'left',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    ),
  },
}

export const FormDrawer: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Create New Project',
    size: 'lg',
    children: (
      <div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem', fontWeight: '500' }}>
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '0.875rem',
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem', fontWeight: '500' }}>
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe your project"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '0.875rem',
                resize: 'vertical',
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem', fontWeight: '500' }}>
              Category
            </label>
            <select
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '0.875rem',
              }}
            >
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button variant="outline" style={{ flex: 1 }}>Cancel</Button>
            <Button style={{ flex: 1 }}>Create Project</Button>
          </div>
        </form>
      </div>
    ),
  },
}

export const FilterDrawer: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Filters',
    size: 'sm',
    children: (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'white', margin: '0 0 1rem 0', fontSize: '0.875rem' }}>Status</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Active', 'Inactive', 'Pending', 'Archived'].map((status) => (
              <label key={status} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                <input type="checkbox" />
                <span style={{ fontSize: '0.875rem' }}>{status}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'white', margin: '0 0 1rem 0', fontSize: '0.875rem' }}>Date Range</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input
              type="date"
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '0.75rem',
              }}
            />
            <input
              type="date"
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '0.75rem',
              }}
            />
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline" style={{ flex: 1 }}>Clear</Button>
          <Button size="sm" style={{ flex: 1 }}>Apply</Button>
        </div>
      </div>
    ),
  },
}

export const DetailsDrawer: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Item Details',
    size: 'lg',
    children: (
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'white', margin: '0 0 0.5rem 0' }}>Product Overview</h3>
          <p style={{ color: '#ccc', margin: 0, fontSize: '0.875rem' }}>
            Last updated: March 15, 2024
          </p>
        </div>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>Description</h4>
            <p style={{ color: '#ccc', margin: 0, fontSize: '0.875rem', lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>Specifications</h4>
            <dl style={{ margin: 0, fontSize: '0.875rem' }}>
              <dt style={{ color: '#ccc', marginBottom: '0.25rem' }}>Dimensions:</dt>
              <dd style={{ color: 'white', margin: '0 0 0.75rem 0' }}>1920 × 1080 pixels</dd>
              
              <dt style={{ color: '#ccc', marginBottom: '0.25rem' }}>File Size:</dt>
              <dd style={{ color: 'white', margin: '0 0 0.75rem 0' }}>2.4 MB</dd>
              
              <dt style={{ color: '#ccc', marginBottom: '0.25rem' }}>Format:</dt>
              <dd style={{ color: 'white', margin: '0 0 0.75rem 0' }}>PNG</dd>
            </dl>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
            <Button variant="outline">Download</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </div>
    ),
  },
}

export const MobileBottomDrawer: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    side: 'bottom',
    title: 'Quick Actions',
    size: 'sm',
    children: (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
          {['Share', 'Edit', 'Delete', 'Copy', 'Move', 'Archive'].map((action) => (
            <button
              key={action}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem 0.5rem',
                background: 'none',
                border: '1px solid #333',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.75rem',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <div style={{ width: '24px', height: '24px', backgroundColor: '#4A9EFF', borderRadius: '50%', marginBottom: '0.5rem' }} />
              {action}
            </button>
          ))}
        </div>
      </div>
    ),
  },
}