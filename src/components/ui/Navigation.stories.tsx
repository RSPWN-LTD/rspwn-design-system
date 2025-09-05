import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './Navigation'

const meta: Meta<typeof Navigation> = {
  title: 'UI/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Tokens', href: '/tokens' },
  { label: 'About', href: '/about' },
]

const itemsWithIcons = [
  { 
    label: 'Dashboard', 
    href: '/dashboard',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    )
  },
  { 
    label: 'Analytics', 
    href: '/analytics',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    )
  },
  { 
    label: 'Settings', 
    href: '/settings',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="m12 1 0 6m0 6 0 6m11-7-6 0m-6 0-6 0"/>
      </svg>
    )
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
  },
}

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
  },
}

export const MinimalItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
}

export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Resources', href: '/resources' },
      { label: 'Support', href: '/support' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

export const Mobile: Story = {
  args: {
    items: defaultItems,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}