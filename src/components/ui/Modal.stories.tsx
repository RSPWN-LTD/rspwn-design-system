import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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

const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false)
  
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {args.children}
      </Modal>
    </div>
  )
}

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Default Modal',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This is a default modal with standard settings.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          You can close it by clicking the X button, pressing Escape, or clicking outside.
        </p>
      </div>
    ),
  },
}

export const WithoutTitle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    children: (
      <div>
        <h3 style={{ color: 'white', margin: '0 0 1rem 0' }}>Custom Content</h3>
        <p style={{ color: 'white', margin: 0 }}>
          This modal doesn't have a title prop, so only the close button appears in the header.
        </p>
      </div>
    ),
  },
}

export const NoCloseButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This modal has no close button. You can still close it by pressing Escape or clicking outside.
        </p>
        <Button onClick={() => {}}>Custom Action</Button>
      </div>
    ),
  },
}

export const Sizes: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    
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
            <Button onClick={() => setActiveModal(key)}>{label}</Button>
            <Modal
              isOpen={activeModal === key}
              onClose={() => setActiveModal(null)}
              size={key as any}
              title={`${label} Modal`}
            >
              <p style={{ color: 'white', margin: 0 }}>
                This is a {label.toLowerCase()} modal. The content area adjusts to the specified size.
              </p>
            </Modal>
          </div>
        ))}
      </div>
    )
  },
}

export const DisabledClosing: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Cannot Close Easily',
    closeOnOverlayClick: false,
    closeOnEscape: false,
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This modal can only be closed by clicking the X button.
        </p>
        <p style={{ color: 'white', margin: 0 }}>
          Overlay clicks and Escape key are disabled.
        </p>
      </div>
    ),
  },
}

export const ScrollableContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Scrollable Content',
    size: 'md',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
          This modal has a lot of content that requires scrolling:
        </p>
        {Array.from({ length: 20 }, (_, i) => (
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

export const FormModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'User Registration',
    size: 'md',
    children: (
      <div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>
              Full Name
            </label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>
              Email
            </label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>
              Message
            </label>
            <textarea
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#1a1a1a',
                color: 'white',
                resize: 'vertical',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    ),
  },
}

export const ConfirmationModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    size: 'sm',
    children: (
      <div>
        <p style={{ color: 'white', margin: '0 0 1.5rem 0' }}>
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    ),
  },
}

export const ImageGalleryModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Image Gallery',
    size: 'lg',
    children: (
      <div>
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#333',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <span style={{ color: 'white', fontSize: '1.2rem' }}>Image Placeholder</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#444',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: 'white', fontSize: '0.75rem' }}>{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
}

export const SettingsModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Application Settings',
    size: 'lg',
    children: (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
          <nav style={{ borderRight: '1px solid #333', paddingRight: '1rem' }}>
            <h4 style={{ color: 'white', margin: '0 0 1rem 0' }}>Categories</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['General', 'Privacy', 'Notifications', 'Advanced'].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      width: '100%',
                      textAlign: 'left',
                      borderRadius: '4px',
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 style={{ color: 'white', margin: '0 0 1rem 0' }}>General Settings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ color: 'white' }}>Setting {i + 1}</label>
                  <input type="checkbox" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
}

export const FullScreenModal: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Full Screen Experience',
    size: 'full',
    children: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white', margin: '0 0 1rem 0' }}>Full Screen Modal</h2>
            <p style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>
              This modal takes up the entire viewport, perfect for immersive experiences.
            </p>
          </div>
        </div>
      </div>
    ),
  },
}

export const NestedModals: Story = {
  render: () => {
    const [firstModal, setFirstModal] = useState(false)
    const [secondModal, setSecondModal] = useState(false)
    
    return (
      <div>
        <Button onClick={() => setFirstModal(true)}>Open First Modal</Button>
        
        <Modal
          isOpen={firstModal}
          onClose={() => setFirstModal(false)}
          title="First Modal"
        >
          <div>
            <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
              This is the first modal. You can open another modal from here.
            </p>
            <Button onClick={() => setSecondModal(true)}>Open Second Modal</Button>
          </div>
        </Modal>
        
        <Modal
          isOpen={secondModal}
          onClose={() => setSecondModal(false)}
          title="Second Modal"
          size="sm"
        >
          <div>
            <p style={{ color: 'white', margin: '0 0 1rem 0' }}>
              This is a nested modal. Notice how it appears on top of the first one.
            </p>
            <Button onClick={() => setSecondModal(false)}>Close This Modal</Button>
          </div>
        </Modal>
      </div>
    )
  },
}