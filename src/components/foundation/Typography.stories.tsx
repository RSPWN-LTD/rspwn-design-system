import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['brand', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'white', 'blue', 'purple'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body1',
    color: 'primary',
  },
}

export const Brand: Story = {
  args: {
    children: 'RSPWN',
    variant: 'brand',
    color: 'white',
  },
}

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body1" color="primary">Primary Text</Typography>
      <Typography variant="body1" color="secondary">Secondary Text</Typography>
      <Typography variant="body1" color="muted">Muted Text</Typography>
      <Typography variant="body1" color="white">White Text</Typography>
      <Typography variant="body1" color="blue">Blue Text</Typography>
      <Typography variant="body1" color="purple">Purple Text</Typography>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body1" align="left">Left aligned text</Typography>
      <Typography variant="body1" align="center">Center aligned text</Typography>
      <Typography variant="body1" align="right">Right aligned text</Typography>
    </div>
  ),
}