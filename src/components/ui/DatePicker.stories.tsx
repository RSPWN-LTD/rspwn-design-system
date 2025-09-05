import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showCalendarIcon: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    showCalendarIcon: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Date of Birth',
    defaultValue: '2024-01-15',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Event Date',
    helperText: 'Select the date for your event',
    defaultValue: '2024-09-15',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <DatePicker variant="default" label="Default variant" defaultValue="2024-01-01" />
      <DatePicker variant="filled" label="Filled variant" defaultValue="2024-01-01" />
      <DatePicker variant="outline" label="Outline variant" defaultValue="2024-01-01" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <DatePicker size="sm" label="Small" defaultValue="2024-01-01" />
      <DatePicker size="md" label="Medium" defaultValue="2024-01-01" />
      <DatePicker size="lg" label="Large" defaultValue="2024-01-01" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <DatePicker label="Normal state" defaultValue="2024-01-01" />
      <DatePicker label="Disabled state" defaultValue="2024-01-01" disabled />
      <DatePicker 
        label="Error state" 
        defaultValue="2024-01-01" 
        error 
        errorText="Please select a valid date" 
      />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    label: 'Required Date Field',
    error: true,
    errorText: 'This date field is required',
  },
}

export const WithoutCalendarIcon: Story = {
  args: {
    label: 'Custom Date Input',
    showCalendarIcon: false,
    helperText: 'Uses browser default calendar picker',
    defaultValue: '2024-01-15',
  },
}

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <DatePicker 
        label="Full Width DatePicker"
        fullWidth 
        helperText="This date picker spans the full container width"
        defaultValue="2024-01-15"
      />
    </div>
  ),
}

export const DateRanges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <DatePicker 
        label="Start Date"
        defaultValue="2024-01-01"
        helperText="Select start date"
      />
      <DatePicker 
        label="End Date"
        defaultValue="2024-01-31"
        helperText="Select end date"
      />
    </div>
  ),
}

export const WithMinMax: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <DatePicker 
        label="Future Date Only"
        min={new Date().toISOString().split('T')[0]}
        helperText="Cannot select past dates"
      />
      <DatePicker 
        label="This Year Only"
        min="2024-01-01"
        max="2024-12-31"
        helperText="Only dates in 2024"
        defaultValue="2024-06-15"
      />
    </div>
  ),
}

export const Required: Story = {
  args: {
    label: 'Required Date Field',
    required: true,
    helperText: 'This field is required',
  },
}