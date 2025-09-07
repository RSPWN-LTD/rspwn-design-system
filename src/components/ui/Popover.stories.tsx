import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from './Popover'
import { Button } from './Button'
import { Box } from '../foundation/Box'

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover', 'manual'],
    },
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
        'right-end'
      ],
    },
    showArrow: {
      control: { type: 'boolean' },
    },
    closeOnBlur: {
      control: { type: 'boolean' },
    },
    closeOnEsc: {
      control: { type: 'boolean' },
    },
    portal: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box p={4}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Popover Title</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This is the popover content. You can put any content here.
          </p>
        </Box>
      </PopoverContent>
    </Popover>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Popover showArrow>
      <PopoverTrigger>
        <Button>With Arrow</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box p={4}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Popover with Arrow</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This popover has an arrow pointing to the trigger element.
          </p>
        </Box>
      </PopoverContent>
      <PopoverArrow />
    </Popover>
  ),
}

export const HoverTrigger: Story = {
  render: () => (
    <Popover trigger="hover" showArrow>
      <PopoverTrigger>
        <Button variant="outline">Hover Me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box p={4}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Hover Popover</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This popover appears when you hover over the trigger.
          </p>
        </Box>
      </PopoverContent>
      <PopoverArrow />
    </Popover>
  ),
}

export const Placements: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '2rem',
      padding: '4rem',
      minHeight: '400px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      {[
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start'
      ].map((placement) => (
        <Popover key={placement} placement={placement as any} showArrow>
          <PopoverTrigger>
            <Button size="sm">{placement}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={3}>
              <p style={{ margin: 0, fontSize: '12px' }}>
                Placement: {placement}
              </p>
            </Box>
          </PopoverContent>
          <PopoverArrow />
        </Popover>
      ))}
    </div>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <Popover showArrow>
      <PopoverTrigger>
        <Button>User Profile</Button>
      </PopoverTrigger>
      <PopoverContent minWidth={280}>
        <Box p={4}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#4A9EFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              JD
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>John Doe</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>john.doe@example.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="sm" variant="outline">View Profile</Button>
            <Button size="sm">Edit</Button>
          </div>
        </Box>
      </PopoverContent>
      <PopoverArrow />
    </Popover>
  ),
}

export const FormInPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Add Comment</Button>
      </PopoverTrigger>
      <PopoverContent minWidth={320}>
        <Box p={4}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Add a Comment</h4>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '14px', fontWeight: '500' }}>
              Comment
            </label>
            <textarea
              style={{
                width: '100%',
                minHeight: '80px',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
              placeholder="Enter your comment..."
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button size="sm" variant="outline">Cancel</Button>
            <Button size="sm">Post Comment</Button>
          </div>
        </Box>
      </PopoverContent>
    </Popover>
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <Popover showArrow>
      <PopoverTrigger>
        <Button>View Items</Button>
      </PopoverTrigger>
      <PopoverContent maxHeight={200} minWidth={250}>
        <Box p={4}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Item List</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </Box>
      </PopoverContent>
      <PopoverArrow />
    </Popover>
  ),
}

export const Controlled: Story = {
  render: function ControlledPopover() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              checked={isOpen} 
              onChange={(e) => setIsOpen(e.target.checked)}
            />
            Toggle popover
          </label>
        </div>
        
        <Popover isOpen={isOpen} onToggle={setIsOpen} trigger="manual" showArrow>
          <PopoverTrigger>
            <Button>Controlled Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={4}>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>Controlled Popover</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>
                This popover is controlled programmatically.
              </p>
            </Box>
          </PopoverContent>
          <PopoverArrow />
        </Popover>
      </div>
    )
  },
}

export const NonPortal: Story = {
  render: () => (
    <div style={{ 
      position: 'relative',
      padding: '2rem',
      border: '2px dashed #ccc',
      borderRadius: '8px'
    }}>
      <p style={{ margin: '0 0 1rem 0', fontSize: '14px', color: '#666' }}>
        This container has relative positioning. The popover will be positioned relative to this container.
      </p>
      <Popover portal={false} showArrow>
        <PopoverTrigger>
          <Button>Non-Portal Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Box p={4}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Non-Portal Popover</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              This popover is rendered within the container, not in a portal.
            </p>
          </Box>
        </PopoverContent>
        <PopoverArrow />
      </Popover>
    </div>
  ),
}

export const CustomTrigger: Story = {
  render: () => (
    <Popover showArrow>
      <PopoverTrigger asChild>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '6px',
          cursor: 'pointer',
          border: '1px solid #ddd'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#4A9EFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            ?
          </div>
          <span>Help</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Box p={4}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Need Help?</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Click here to get help with this feature. We're here to assist you!
          </p>
        </Box>
      </PopoverContent>
      <PopoverArrow />
    </Popover>
  ),
}

export const Interactive: Story = {
  render: function InteractivePopover() {
    const [count, setCount] = useState(0)

    return (
      <Popover closeOnBlur={false} showArrow>
        <PopoverTrigger>
          <Button>Interactive Content</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Box p={4}>
            <h4 style={{ margin: '0 0 1rem 0' }}>Interactive Popover</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span>Count: {count}</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button size="sm" onClick={() => setCount(count - 1)}>-</Button>
                <Button size="sm" onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '14px' }}>
              This popover stays open when you interact with the content inside.
            </p>
          </Box>
        </PopoverContent>
        <PopoverArrow />
      </Popover>
    )
  },
}