import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ToastProvider, useToast } from './Toast'

const meta: Meta = {
  title: 'UI/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const ToastDemo = ({ 
  variant, 
  title, 
  description, 
  duration,
  action,
  dismissible = true 
}: {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  title?: string
  description?: string
  duration?: number
  action?: boolean
  dismissible?: boolean
}) => {
  const { toast } = useToast()
  
  const showToast = () => {
    toast({
      variant,
      title,
      description,
      duration,
      dismissible,
      ...(action && {
        action: {
          label: 'Undo',
          onClick: () => console.log('Action clicked'),
        },
      }),
    })
  }
  
  return (
    <Button onClick={showToast}>
      Show {variant || 'default'} toast
    </Button>
  )
}

export const Default: Story = {
  render: () => (
    <ToastDemo
      title="Default notification"
      description="This is a default toast notification."
    />
  ),
}

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Success!"
      description="Your changes have been saved successfully."
    />
  ),
}

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Error occurred"
      description="Failed to save your changes. Please try again."
    />
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Warning"
      description="This action cannot be undone."
    />
  ),
}

export const Info: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Information"
      description="New features are available in this update."
    />
  ),
}

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="File deleted"
      description="Your file has been moved to trash."
      action={true}
    />
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Changes saved"
    />
  ),
}

export const DescriptionOnly: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      description="This toast only has a description without a title."
    />
  ),
}

export const NonDismissible: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="System maintenance"
      description="This notification cannot be dismissed."
      dismissible={false}
      duration={0}
    />
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ToastDemo
        variant="info"
        title="Quick toast"
        description="This will disappear in 1 second."
        duration={1000}
      />
      <ToastDemo
        variant="warning"
        title="Long toast"
        description="This will stay for 10 seconds."
        duration={10000}
      />
      <ToastDemo
        variant="error"
        title="Persistent toast"
        description="This won't auto-dismiss."
        duration={0}
      />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast()
    
    const showAllToasts = () => {
      toast({
        variant: 'default',
        title: 'Default Toast',
        description: 'This is a default notification.',
      })
      
      setTimeout(() => {
        toast({
          variant: 'success',
          title: 'Success Toast',
          description: 'Operation completed successfully.',
        })
      }, 200)
      
      setTimeout(() => {
        toast({
          variant: 'error',
          title: 'Error Toast',
          description: 'Something went wrong.',
        })
      }, 400)
      
      setTimeout(() => {
        toast({
          variant: 'warning',
          title: 'Warning Toast',
          description: 'Please be careful.',
        })
      }, 600)
      
      setTimeout(() => {
        toast({
          variant: 'info',
          title: 'Info Toast',
          description: 'Here is some information.',
        })
      }, 800)
    }
    
    return (
      <Button onClick={showAllToasts}>
        Show All Variants
      </Button>
    )
  },
}

export const MultipleToasts: Story = {
  render: () => {
    const { toast } = useToast()
    
    const showMultipleToasts = () => {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          toast({
            variant: i % 2 === 0 ? 'success' : 'info',
            title: `Toast ${i}`,
            description: `This is toast number ${i} of 5.`,
          })
        }, i * 150)
      }
    }
    
    return (
      <Button onClick={showMultipleToasts}>
        Show Multiple Toasts
      </Button>
    )
  },
}

export const DismissAll: Story = {
  render: () => {
    const { toast, dismissAll } = useToast()
    
    const showSomeToasts = () => {
      toast({
        variant: 'info',
        title: 'Toast 1',
        description: 'First toast',
        duration: 0,
      })
      
      toast({
        variant: 'success',
        title: 'Toast 2',
        description: 'Second toast',
        duration: 0,
      })
      
      toast({
        variant: 'warning',
        title: 'Toast 3',
        description: 'Third toast',
        duration: 0,
      })
    }
    
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={showSomeToasts}>
          Show Some Toasts
        </Button>
        <Button variant="destructive" onClick={dismissAll}>
          Dismiss All
        </Button>
      </div>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const { toast } = useToast()
    
    const examples = [
      {
        label: 'Save Document',
        action: () => toast({
          variant: 'success',
          title: 'Document saved',
          description: 'Your changes have been automatically saved.',
        }),
      },
      {
        label: 'Delete Item',
        action: () => toast({
          variant: 'success',
          title: 'Item deleted',
          description: 'The item has been moved to trash.',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo delete'),
          },
        }),
      },
      {
        label: 'Network Error',
        action: () => toast({
          variant: 'error',
          title: 'Connection failed',
          description: 'Unable to connect to the server. Please check your internet connection.',
          duration: 6000,
        }),
      },
      {
        label: 'Form Validation',
        action: () => toast({
          variant: 'warning',
          title: 'Missing required fields',
          description: 'Please fill in all required fields before submitting.',
        }),
      },
      {
        label: 'Update Available',
        action: () => toast({
          variant: 'info',
          title: 'Update available',
          description: 'A new version of the application is ready to install.',
          action: {
            label: 'Update',
            onClick: () => console.log('Start update'),
          },
          duration: 0,
        }),
      },
      {
        label: 'File Upload',
        action: () => {
          toast({
            variant: 'info',
            title: 'Uploading file...',
            description: 'Please wait while your file is being uploaded.',
            dismissible: false,
            duration: 2000,
          })
          
          setTimeout(() => {
            toast({
              variant: 'success',
              title: 'Upload complete',
              description: 'Your file has been uploaded successfully.',
            })
          }, 2500)
        },
      },
    ]
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '400px' }}>
        {examples.map((example, i) => (
          <Button key={i} variant="outline" onClick={example.action}>
            {example.label}
          </Button>
        ))}
      </div>
    )
  },
}

export const LongContent: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="This is a very long title that might wrap to multiple lines in the toast notification"
      description="This is a very long description that contains a lot of text to test how the toast handles content that might be longer than expected. It should wrap properly and maintain good readability while staying within reasonable bounds."
    />
  ),
}

export const Playground: Story = {
  render: () => {
    const { toast } = useToast()
    
    return (
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Toast Playground</h3>
        <p style={{ color: 'white', marginBottom: '2rem', fontSize: '0.875rem' }}>
          Try different combinations of toasts. They stack nicely and animate smoothly.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', maxWidth: '600px' }}>
          <Button size="sm" onClick={() => toast({ title: 'Simple' })}>
            Simple
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast({ variant: 'success', title: 'Success!', description: 'Task completed.' })}>
            Success
          </Button>
          <Button size="sm" variant="destructive" onClick={() => toast({ variant: 'error', title: 'Error!', description: 'Something went wrong.' })}>
            Error
          </Button>
          <Button size="sm" onClick={() => toast({ variant: 'warning', title: 'Warning!', description: 'Please be careful.' })}>
            Warning
          </Button>
          <Button size="sm" onClick={() => toast({ variant: 'info', title: 'Info', description: 'Here is some information.' })}>
            Info
          </Button>
          <Button size="sm" onClick={() => toast({ title: 'With Action', description: 'Try the action button.', action: { label: 'Action', onClick: () => {} } })}>
            With Action
          </Button>
        </div>
      </div>
    )
  },
}