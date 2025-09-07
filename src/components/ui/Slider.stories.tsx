import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['single', 'range'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    showTicks: {
      control: { type: 'boolean' },
    },
    showLabels: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
    variant: 'single',
    size: 'md',
  },
}

export const Range: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: [25, 75],
    variant: 'range',
    size: 'md',
  },
}

export const WithLabel: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 30,
    label: 'Volume',
    helperText: 'Adjust the volume level',
  },
}

export const WithTicks: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 50,
    showTicks: true,
    label: 'Progress',
  },
}

export const WithTickLabels: Story = {
  args: {
    min: 0,
    max: 4,
    step: 1,
    defaultValue: 2,
    showTicks: true,
    showLabels: true,
    tickLabels: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
    label: 'Rating',
  },
}

export const Vertical: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 60,
    orientation: 'vertical',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
}

export const VerticalRange: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: [30, 70],
    variant: 'range',
    orientation: 'vertical',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider size="sm" defaultValue={25} label="Small" />
      <Slider size="md" defaultValue={50} label="Medium" />
      <Slider size="lg" defaultValue={75} label="Large" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider defaultValue={30} label="Normal" />
      <Slider defaultValue={50} label="Disabled" disabled />
      <Slider 
        defaultValue={70} 
        label="Error State" 
        error 
        errorText="Value is too high" 
      />
    </div>
  ),
}

export const CustomStep: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider 
        min={0} 
        max={10} 
        step={0.5} 
        defaultValue={2.5} 
        label="Step: 0.5" 
        showTicks 
        showLabels 
      />
      <Slider 
        min={0} 
        max={100} 
        step={25} 
        defaultValue={50} 
        label="Step: 25" 
        showTicks 
        showLabels 
      />
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Slider 
        defaultValue={60}
        fullWidth
        label="Full Width Slider"
        helperText="This slider spans the full container width"
      />
    </div>
  ),
}

export const Interactive: Story = {
  render: function InteractiveSlider() {
    const [singleValue, setSingleValue] = useState(30)
    const [rangeValue, setRangeValue] = useState([20, 80])

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
        <div>
          <Slider
            value={singleValue}
            onChange={(value) => setSingleValue(value as number)}
            label={`Single Value: ${singleValue}`}
            min={0}
            max={100}
          />
        </div>
        <div>
          <Slider
            variant="range"
            value={rangeValue}
            onChange={(value) => setRangeValue(value as number[])}
            label={`Range: ${rangeValue[0]} - ${rangeValue[1]}`}
            min={0}
            max={100}
          />
        </div>
      </div>
    )
  },
}

export const Temperature: Story = {
  render: function TemperatureSlider() {
    const [temp, setTemp] = useState([18, 24])

    return (
      <div style={{ width: '300px' }}>
        <Slider
          variant="range"
          min={10}
          max={30}
          step={0.5}
          value={temp}
          onChange={(value) => setTemp(value as number[])}
          label={`Temperature Range: ${temp[0]}°C - ${temp[1]}°C`}
          helperText="Set your preferred temperature range"
          showTicks
        />
      </div>
    )
  },
}

export const PriceRange: Story = {
  render: function PriceRangeSlider() {
    const [price, setPrice] = useState([100, 500])

    const formatPrice = (value: number) => `$${value}`

    return (
      <div style={{ width: '300px' }}>
        <Slider
          variant="range"
          min={0}
          max={1000}
          step={10}
          value={price}
          onChange={(value) => setPrice(value as number[])}
          label={`Price Range: ${formatPrice(price[0])} - ${formatPrice(price[1])}`}
          helperText="Select your budget range"
          showTicks
        />
      </div>
    )
  },
}