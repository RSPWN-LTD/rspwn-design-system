import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
]

const optionsWithDisabled = [
  { value: 'available1', label: 'Available Option 1' },
  { value: 'available2', label: 'Available Option 2' },
  { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
  { value: 'available3', label: 'Available Option 3' },
  { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
]

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
    variant: 'default',
    size: 'md',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select your country',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Preferred Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
    ],
    placeholder: 'Choose language',
    helperText: 'This will be used for all communications',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select variant="default" options={basicOptions} placeholder="Default variant" />
      <Select variant="filled" options={basicOptions} placeholder="Filled variant" />
      <Select variant="outline" options={basicOptions} placeholder="Outline variant" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select size="sm" options={basicOptions} placeholder="Small select" />
      <Select size="md" options={basicOptions} placeholder="Medium select" />
      <Select size="lg" options={basicOptions} placeholder="Large select" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select options={basicOptions} placeholder="Normal state" />
      <Select options={basicOptions} placeholder="Disabled state" disabled />
      <Select 
        options={basicOptions} 
        placeholder="Error state" 
        error 
        errorText="Please select a valid option" 
      />
    </div>
  ),
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Availability',
    options: optionsWithDisabled,
    placeholder: 'Select availability...',
    helperText: 'Some options may not be available',
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Required Field',
    options: basicOptions,
    placeholder: 'Please select...',
    error: true,
    errorText: 'This field is required',
  },
}

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Select 
        label="Full Width Select"
        options={countryOptions}
        placeholder="Select a country" 
        fullWidth 
        helperText="This select spans the full container width"
      />
    </div>
  ),
}

export const LongOptions: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select
        label="Long Option Names"
        options={[
          { value: 'short', label: 'Short' },
          { value: 'medium', label: 'Medium Length Option' },
          { value: 'long', label: 'This is a very long option name that might overflow' },
          { value: 'longest', label: 'This is an extremely long option name that will definitely test the overflow behavior of the select component' },
        ]}
        placeholder="Choose an option..."
      />
    </div>
  ),
}

export const ManyOptions: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select
        label="Many Options"
        options={Array.from({ length: 20 }, (_, i) => ({
          value: `option${i + 1}`,
          label: `Option ${i + 1}`,
        }))}
        placeholder="Select from many options..."
        helperText="Scroll to see all options"
      />
    </div>
  ),
}