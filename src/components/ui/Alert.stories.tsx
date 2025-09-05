import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { Button } from './Button'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'subtle'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    severity: 'info',
    variant: 'subtle',
    children: 'This is an info alert with default settings.',
  },
}

export const Severities: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md" p="md">
      <Alert severity="info">
        This is an info alert — check it out!
      </Alert>
      
      <Alert severity="success">
        This is a success alert — check it out!
      </Alert>
      
      <Alert severity="warning">
        This is a warning alert — check it out!
      </Alert>
      
      <Alert severity="error">
        This is an error alert — check it out!
      </Alert>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md" color="gray">Subtle (Default)</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="info" variant="subtle">This is a subtle info alert</Alert>
          <Alert severity="success" variant="subtle">This is a subtle success alert</Alert>
          <Alert severity="warning" variant="subtle">This is a subtle warning alert</Alert>
          <Alert severity="error" variant="subtle">This is a subtle error alert</Alert>
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md" color="gray">Outlined</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="info" variant="outlined">This is an outlined info alert</Alert>
          <Alert severity="success" variant="outlined">This is an outlined success alert</Alert>
          <Alert severity="warning" variant="outlined">This is an outlined warning alert</Alert>
          <Alert severity="error" variant="outlined">This is an outlined error alert</Alert>
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md" color="gray">Filled</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="info" variant="filled">This is a filled info alert</Alert>
          <Alert severity="success" variant="filled">This is a filled success alert</Alert>
          <Alert severity="warning" variant="filled">This is a filled warning alert</Alert>
          <Alert severity="error" variant="filled">This is a filled error alert</Alert>
        </Box>
      </div>
    </Box>
  ),
}

export const WithTitles: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md" p="md">
      <Alert severity="info" title="Info">
        This is an info alert with a title.
      </Alert>
      
      <Alert severity="success" title="Success">
        This is a success alert with a title.
      </Alert>
      
      <Alert severity="warning" title="Warning">
        This is a warning alert with a title.
      </Alert>
      
      <Alert severity="error" title="Error">
        This is an error alert with a title.
      </Alert>
    </Box>
  ),
}

export const WithoutIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md" p="md">
      <Alert severity="info" showIcon={false}>
        This info alert has no icon.
      </Alert>
      
      <Alert severity="success" title="No Icon" showIcon={false}>
        This success alert has a title but no icon.
      </Alert>
      
      <Alert severity="warning" variant="outlined" showIcon={false}>
        This is an outlined warning alert without an icon.
      </Alert>
    </Box>
  ),
}

export const WithCustomIcon: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md" p="md">
      <Alert 
        severity="info" 
        title="Custom Icon"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        }
      >
        This alert has a custom star icon.
      </Alert>
      
      <Alert 
        severity="success" 
        variant="filled"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        }
      >
        This alert has a custom checkmark circle icon.
      </Alert>
    </Box>
  ),
}

export const Dismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      { id: 1, severity: 'info', message: 'This is a dismissible info alert.' },
      { id: 2, severity: 'success', message: 'This is a dismissible success alert.' },
      { id: 3, severity: 'warning', message: 'This is a dismissible warning alert.' },
      { id: 4, severity: 'error', message: 'This is a dismissible error alert.' },
    ] as const)

    const handleClose = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id))
    }

    return (
      <Box display="flex" flexDirection="column" gap="md" p="md">
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            severity={alert.severity}
            dismissible
            onClose={() => handleClose(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
        {alerts.length === 0 && (
          <Typography variant="body" color="gray">
            All alerts have been dismissed. Refresh the page to see them again.
          </Typography>
        )}
      </Box>
    )
  },
}

export const WithActions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md" p="md">
      <Alert 
        severity="info" 
        title="Update Available"
        action={
          <Button size="sm" variant="outline">
            Update
          </Button>
        }
      >
        A new version of the application is available.
      </Alert>
      
      <Alert 
        severity="warning" 
        title="Unsaved Changes"
        action={
          <Box display="flex" gap="sm">
            <Button size="sm" variant="secondary">
              Save
            </Button>
            <Button size="sm" variant="outline">
              Discard
            </Button>
          </Box>
        }
      >
        You have unsaved changes that will be lost.
      </Alert>
      
      <Alert 
        severity="error" 
        title="Connection Failed"
        dismissible
        onClose={() => console.log('Alert closed')}
        action={
          <Button size="sm" variant="primary">
            Retry
          </Button>
        }
      >
        Unable to connect to the server. Please check your connection.
      </Alert>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="h3" mb="md">System Notifications</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="success" title="Deployment Successful" dismissible>
            Your application has been deployed successfully to production.
          </Alert>
          
          <Alert severity="warning" title="High Memory Usage" 
            action={
              <Button size="sm" variant="outline">
                View Details
              </Button>
            }
          >
            Memory usage is at 85%. Consider scaling your application.
          </Alert>
          
          <Alert severity="error" title="Build Failed" dismissible>
            The build process encountered errors. Please check your code and try again.
          </Alert>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="md">Form Validation</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="error" variant="outlined">
            Please fix the following errors before submitting:
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
              <li>Email is required</li>
              <li>Password must be at least 8 characters</li>
              <li>Please accept the terms and conditions</li>
            </ul>
          </Alert>
          
          <Alert severity="info" variant="subtle">
            Your password strength: Strong. Make sure to save it securely.
          </Alert>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="md">User Feedback</Typography>
        <Box display="flex" flexDirection="column" gap="sm">
          <Alert severity="success" title="Settings Saved" variant="filled" dismissible>
            Your preferences have been updated successfully.
          </Alert>
          
          <Alert severity="info" title="Pro Tip" 
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l.09.06c.18.14.29.36.29.6V9a2.25 2.25 0 0 0 2.25 2.25H21c.24 0 .46.11.6.29l.06.09A2.25 2.25 0 0 0 19.41 15l-6.6 6.6a2.25 2.25 0 0 1-3.18 0l-6.6-6.6A2.25 2.25 0 0 0 2.28 11.66l.06-.09c.14-.18.36-.29.6-.29h6.56A2.25 2.25 0 0 0 12 9V2.66c0-.24.11-.46.29-.6z"/>
              </svg>
            }
          >
            Use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
          </Alert>
        </Box>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    severity: 'info',
    variant: 'subtle',
    title: 'Alert Title',
    children: 'This is the alert message content.',
    showIcon: true,
    dismissible: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Alert {...args} />
    </Box>
  ),
}