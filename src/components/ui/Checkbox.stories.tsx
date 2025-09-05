import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default checkbox',
    size: 'md',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    checked: false,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Unchecked" checked={false} />
      <Checkbox label="Checked" checked={true} />
      <Checkbox label="Indeterminate" indeterminate={true} />
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" checked disabled />
      <Checkbox label="Disabled indeterminate" indeterminate disabled />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    label: 'Required checkbox',
    error: true,
    errorText: 'You must accept the terms to continue',
  },
}

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox />
      <span>Checkbox without built-in label</span>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)
    
    return (
      <Checkbox
        label="Toggle me!"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        helperText={checked ? 'Checked!' : 'Click to check'}
      />
    )
  },
}

// Fix React import for the Interactive story
Interactive.render = () => {
  const [checked, setChecked] = (window as any).React.useState(false)
  
  return (
    <Checkbox
      label="Toggle me!"
      checked={checked}
      onChange={(e: any) => setChecked(e.target.checked)}
      helperText={checked ? 'Checked!' : 'Click to check'}
    />
  )
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3 style={{ margin: 0, color: 'white' }}>Select your preferences:</h3>
      <Checkbox label="Email notifications" />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" checked />
      <Checkbox label="Marketing emails" helperText="Optional promotional content" />
    </div>
  ),
}