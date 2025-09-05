import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default switch',
    size: 'md',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Dark mode',
    helperText: 'Toggle between light and dark themes',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Unchecked" checked={false} />
      <Switch label="Checked" checked={true} />
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" checked disabled />
    </div>
  ),
}

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Label on right" labelPosition="right" />
      <Switch label="Label on left" labelPosition="left" />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: true,
    errorText: 'You must accept the terms to continue',
  },
}

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Switch />
      <span style={{ color: 'white' }}>Switch without built-in label</span>
    </div>
  ),
}

export const SizesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <Switch size="sm" checked />
        <span style={{ color: 'white', fontSize: '0.75rem' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <Switch size="md" checked />
        <span style={{ color: 'white', fontSize: '0.75rem' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <Switch size="lg" checked />
        <span style={{ color: 'white', fontSize: '0.75rem' }}>Large</span>
      </div>
    </div>
  ),
}

export const SettingsExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <h3 style={{ margin: 0, color: 'white' }}>Settings</h3>
      <Switch 
        label="Email notifications" 
        helperText="Receive email updates about your account"
      />
      <Switch 
        label="Push notifications" 
        helperText="Get push notifications on your device"
        checked
      />
      <Switch 
        label="Marketing emails" 
        helperText="Receive promotional content and offers"
      />
      <Switch 
        label="Two-factor authentication" 
        helperText="Add an extra layer of security"
        checked
      />
    </div>
  ),
}

export const FormIntegration: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <h3 style={{ margin: 0, color: 'white' }}>Privacy Settings</h3>
      <Switch 
        label="Public profile" 
        labelPosition="right"
        helperText="Make your profile visible to other users"
      />
      <Switch 
        label="Show activity status" 
        labelPosition="right"
        helperText="Let others see when you're active"
        checked
      />
      <Switch 
        label="Allow friend requests" 
        labelPosition="right"
        helperText="Enable others to send you friend requests"
      />
    </div>
  ),
}

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <p style={{ color: 'white', margin: 0 }}>Click the switches to see smooth animations</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Switch size="sm" label="Small" />
        <Switch size="md" label="Medium" />
        <Switch size="lg" label="Large" />
      </div>
    </div>
  ),
}