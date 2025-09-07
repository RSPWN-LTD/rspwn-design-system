import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Typography } from '../foundation/Typography'
import { Button } from './Button'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'filled'],
    },
    hoverable: {
      control: { type: 'boolean' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <Typography variant="h4" style={{ marginBottom: '1rem' }}>
          Card Title
        </Typography>
        <Typography variant="body2" color="secondary">
          This is a default card with some sample content. Cards are flexible containers that can hold any content.
        </Typography>
      </div>
    ),
    variant: 'default',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <Card variant="default">
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Default</Typography>
        <Typography variant="body2" color="secondary">
          Default card with subtle shadow
        </Typography>
      </Card>
      <Card variant="elevated">
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Elevated</Typography>
        <Typography variant="body2" color="secondary">
          Elevated card with prominent shadow
        </Typography>
      </Card>
      <Card variant="outlined">
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Outlined</Typography>
        <Typography variant="body2" color="secondary">
          Outlined card with border
        </Typography>
      </Card>
      <Card variant="filled">
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Filled</Typography>
        <Typography variant="body2" color="secondary">
          Filled card with background
        </Typography>
      </Card>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <Card hoverable>
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Hoverable</Typography>
        <Typography variant="body2" color="secondary">
          This card has hover effects
        </Typography>
      </Card>
      <Card clickable onClick={() => alert('Card clicked!')}>
        <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Clickable</Typography>
        <Typography variant="body2" color="secondary">
          This card is clickable
        </Typography>
      </Card>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <Card.Header p={6} pb={4}>
        <Typography variant="h4">Product Card</Typography>
      </Card.Header>
      <Card.Content p={6} py={4}>
        <Typography variant="body2" color="secondary" style={{ marginBottom: '1rem' }}>
          This is a more complex card example with header, content, and footer sections.
        </Typography>
        <Typography variant="body2" color="secondary">
          You can organize content using the Card.Header, Card.Content, and Card.Footer components.
        </Typography>
      </Card.Content>
      <Card.Footer p={6} pt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="muted">$99.99</Typography>
        <Button size="sm">Add to Cart</Button>
      </Card.Footer>
    </Card>
  ),
}