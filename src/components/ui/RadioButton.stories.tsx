import type { Meta, StoryObj } from '@storybook/react'
import { RadioButton, RadioGroup, RadioOption } from './RadioButton'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioButton',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'button'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

// Sample data
const basicOptions: RadioOption[] = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
]

const detailedOptions: RadioOption[] = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'Perfect for individuals and small teams',
  },
  {
    value: 'pro',
    label: 'Pro Plan',
    description: 'Advanced features for growing businesses',
  },
  {
    value: 'enterprise',
    label: 'Enterprise Plan',
    description: 'Full-scale solution for large organizations',
  },
]

const gamingOptions: RadioOption[] = [
  {
    value: 'fps',
    label: 'First Person Shooter',
    description: 'Fast-paced action games like CS:GO, Valorant',
    icon: <span>🎯</span>,
  },
  {
    value: 'moba',
    label: 'MOBA',
    description: 'Multiplayer Online Battle Arena like LoL, Dota',
    icon: <span>⚔️</span>,
  },
  {
    value: 'rpg',
    label: 'Role Playing Games',
    description: 'Immersive story-driven experiences',
    icon: <span>🗡️</span>,
  },
  {
    value: 'strategy',
    label: 'Real-time Strategy',
    description: 'Strategic planning and resource management',
    icon: <span>🏰</span>,
  },
]

export const Default: Story = {
  args: {
    options: basicOptions,
    label: 'Select Size',
    variant: 'default',
    size: 'md',
  },
}

export const SingleRadioButton: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Individual Radio Buttons</Typography>
          <Box display="flex" flexDirection="column" gap="md">
            <RadioButton
              label="Enable notifications"
              checked={checked}
              onChange={setChecked}
            />
            <RadioButton
              label="Subscribe to newsletter"
              description="Receive updates about new features and releases"
            />
            <RadioButton
              label="Disabled option"
              disabled
            />
          </Box>
        </div>
      </Box>
    )
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState('medium')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Basic Radio Group</Typography>
          <RadioGroup
            label="Choose Size"
            options={basicOptions}
            value={selectedSize}
            onChange={setSelectedSize}
            helperText="Select your preferred size option."
          />
          <Typography variant="small" color="gray" mt="sm">
            Selected: {selectedSize}
          </Typography>
        </div>
      </Box>
    )
  },
}

export const Variants: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('medium')
    const [cardValue, setCardValue] = useState('pro')
    const [buttonValue, setButtonValue] = useState('large')
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="body" mb="md">Default Variant</Typography>
          <RadioGroup
            options={basicOptions}
            value={defaultValue}
            onChange={setDefaultValue}
            variant="default"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Card Variant</Typography>
          <RadioGroup
            options={detailedOptions}
            value={cardValue}
            onChange={setCardValue}
            variant="card"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Button Variant</Typography>
          <RadioGroup
            options={basicOptions}
            value={buttonValue}
            onChange={setButtonValue}
            variant="button"
            orientation="horizontal"
          />
        </div>
      </Box>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [smallValue, setSmallValue] = useState('small')
    const [mediumValue, setMediumValue] = useState('medium')
    const [largeValue, setLargeValue] = useState('large')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">Small</Typography>
          <RadioGroup
            options={basicOptions}
            value={smallValue}
            onChange={setSmallValue}
            size="sm"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Medium</Typography>
          <RadioGroup
            options={basicOptions}
            value={mediumValue}
            onChange={setMediumValue}
            size="md"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Large</Typography>
          <RadioGroup
            options={basicOptions}
            value={largeValue}
            onChange={setLargeValue}
            size="lg"
          />
        </div>
      </Box>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [selectedGenre, setSelectedGenre] = useState('fps')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Gaming Preferences</Typography>
          <RadioGroup
            label="Favorite Game Genre"
            options={gamingOptions}
            value={selectedGenre}
            onChange={setSelectedGenre}
            variant="card"
            helperText="Choose your preferred gaming genre for personalized recommendations."
          />
        </div>
      </Box>
    )
  },
}

export const Orientations: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = useState('medium')
    const [horizontalValue, setHorizontalValue] = useState('pro')
    const [buttonValue, setButtonValue] = useState('large')
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="body" mb="md">Vertical Layout (Default)</Typography>
          <RadioGroup
            options={basicOptions}
            value={verticalValue}
            onChange={setVerticalValue}
            orientation="vertical"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Horizontal Layout</Typography>
          <RadioGroup
            options={detailedOptions}
            value={horizontalValue}
            onChange={setHorizontalValue}
            orientation="horizontal"
            variant="card"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Horizontal Button Group</Typography>
          <RadioGroup
            options={basicOptions}
            value={buttonValue}
            onChange={setButtonValue}
            variant="button"
            orientation="horizontal"
          />
        </div>
      </Box>
    )
  },
}

export const States: Story = {
  render: () => {
    const [normalValue, setNormalValue] = useState('medium')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="sm">Normal State</Typography>
          <RadioGroup
            label="Normal Selection"
            options={basicOptions}
            value={normalValue}
            onChange={setNormalValue}
            helperText="Choose your preferred option from the list above."
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Required Field</Typography>
          <RadioGroup
            label="Required Selection"
            options={basicOptions}
            required
            helperText="This field is required and must be selected."
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Error State</Typography>
          <RadioGroup
            label="Error Selection"
            options={basicOptions}
            error
            errorMessage="Please select a valid option from the list."
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Disabled State</Typography>
          <RadioGroup
            label="Disabled Selection"
            options={basicOptions}
            disabled
            helperText="This selection is currently disabled."
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Mixed Disabled Options</Typography>
          <RadioGroup
            label="Partially Disabled"
            options={[
              { value: 'option1', label: 'Available Option' },
              { value: 'option2', label: 'Disabled Option', disabled: true },
              { value: 'option3', label: 'Another Available Option' },
              { value: 'option4', label: 'Also Disabled', disabled: true },
            ]}
            helperText="Some options are disabled based on your current plan."
          />
        </div>
      </Box>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [planValue, setPlanValue] = useState('pro')
    const [deliveryValue, setDeliveryValue] = useState('standard')
    const [paymentValue, setPaymentValue] = useState('card')
    const [themeValue, setThemeValue] = useState('dark')
    
    const planOptions: RadioOption[] = [
      {
        value: 'basic',
        label: 'Basic - $9/month',
        description: 'Up to 5 projects, 2GB storage, Email support',
      },
      {
        value: 'pro',
        label: 'Pro - $29/month',
        description: 'Unlimited projects, 100GB storage, Priority support',
      },
      {
        value: 'enterprise',
        label: 'Enterprise - Custom',
        description: 'Custom solutions, Unlimited storage, Dedicated support',
      },
    ]
    
    const deliveryOptions: RadioOption[] = [
      {
        value: 'standard',
        label: 'Standard Shipping',
        description: '5-7 business days - FREE',
        icon: <span>📦</span>,
      },
      {
        value: 'express',
        label: 'Express Shipping',
        description: '2-3 business days - $9.99',
        icon: <span>🚚</span>,
      },
      {
        value: 'overnight',
        label: 'Overnight Delivery',
        description: 'Next business day - $24.99',
        icon: <span>✈️</span>,
      },
    ]
    
    const paymentOptions: RadioOption[] = [
      { value: 'card', label: 'Credit Card', icon: <span>💳</span> },
      { value: 'paypal', label: 'PayPal', icon: <span>🅿️</span> },
      { value: 'crypto', label: 'Cryptocurrency', icon: <span>₿</span> },
    ]
    
    const themeOptions: RadioOption[] = [
      { value: 'light', label: 'Light Theme' },
      { value: 'dark', label: 'Dark Theme' },
      { value: 'auto', label: 'System Default' },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Subscription Plans</Typography>
          <RadioGroup
            label="Choose Your Plan"
            options={planOptions}
            value={planValue}
            onChange={setPlanValue}
            variant="card"
            helperText="You can change your plan at any time from your account settings."
          />
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Shipping Options</Typography>
          <RadioGroup
            label="Select Delivery Method"
            options={deliveryOptions}
            value={deliveryValue}
            onChange={setDeliveryValue}
            variant="card"
            helperText="Shipping costs will be calculated based on your location."
          />
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Payment Method</Typography>
          <RadioGroup
            label="How would you like to pay?"
            options={paymentOptions}
            value={paymentValue}
            onChange={setPaymentValue}
            variant="button"
            orientation="horizontal"
            required
          />
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Interface Preferences</Typography>
          <RadioGroup
            label="Theme Preference"
            options={themeOptions}
            value={themeValue}
            onChange={setThemeValue}
            variant="button"
            orientation="horizontal"
            size="sm"
            helperText="Your theme preference will be saved across all devices."
          />
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Gaming Setup Preferences</Typography>
          <RadioGroup
            label="Primary Gaming Genre"
            options={gamingOptions}
            value="fps"
            variant="card"
            helperText="We'll recommend gaming peripherals based on your preference."
          />
        </div>
      </Box>
    )
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <RadioGroup
          label="Accessible Radio Group"
          options={basicOptions}
          helperText="This radio group follows accessibility best practices with proper ARIA attributes."
          aria-label="Size selection with accessibility features"
          required
        />
      </div>
      
      <div>
        <RadioGroup
          label="Form Integration Example"
          options={[
            { value: 'yes', label: 'Yes, I agree' },
            { value: 'no', label: 'No, I disagree' },
            { value: 'maybe', label: 'I need more information' },
          ]}
          helperText="Screen readers will announce the selection state and helper text."
          aria-describedby="custom-description"
        />
        <Typography id="custom-description" variant="small" color="gray" mt="sm">
          Custom description that enhances accessibility for screen readers.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    options: detailedOptions,
    label: 'Select Option',
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
    disabled: false,
    required: false,
    error: false,
    helperText: 'Choose the option that best fits your needs.',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md" maxWidth="500px" margin="0 auto">
      <RadioGroup {...args} />
    </Box>
  ),
}