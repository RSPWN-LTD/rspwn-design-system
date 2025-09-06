import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './Navigation'
import React from 'react'

const meta: Meta<typeof Navigation> = {
  title: 'UI/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navigation>

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
        <line x1="9" y1="9" x2="15" y2="15"/>
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
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    )
  },
]

// Basic usage without React Router
export const Default: Story = {
  args: {
    items: defaultItems,
    currentPath: '/components', // Manually specify active path
  },
}

// With icons
export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    currentPath: '/dashboard',
  },
}

// With click handlers instead of navigation
export const WithClickHandlers: Story = {
  args: {
    items: [
      { 
        label: 'Home', 
        href: '#home',
        onClick: () => alert('Home clicked!')
      },
      { 
        label: 'Products', 
        href: '#products',
        onClick: () => alert('Products clicked!')
      },
      { 
        label: 'Contact', 
        href: '#contact',
        onClick: () => alert('Contact clicked!')
      },
    ],
  },
}

// Custom brand
export const CustomBrand: Story = {
  args: {
    items: defaultItems,
    brand: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: '#4A9EFF', 
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          R
        </div>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>RSPWN Gaming</span>
      </div>
    ),
    currentPath: '/components',
  },
}

// Many items
export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Games', href: '/games' },
      { label: 'Tournaments', href: '/tournaments' },
      { label: 'Leaderboards', href: '/leaderboards' },
      { label: 'Community', href: '/community' },
      { label: 'Store', href: '/store' },
      { label: 'Support', href: '/support' },
      { label: 'About', href: '/about' },
    ],
    currentPath: '/games',
  },
}

// Mobile responsive demo
export const Mobile: Story = {
  args: {
    items: defaultItems,
    currentPath: '/components',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Example with React Router (requires BrowserRouter wrapper)
export const WithReactRouter: Story = {
  render: (args) => {
    // Mock React Router Link component
    const RouterLinkMock: React.FC<any> = ({ to, href, children, ...props }) => (
      <a 
        href={to || href} 
        onClick={(e) => {
          e.preventDefault()
          alert(`Would navigate to: ${to || href}`)
        }}
        {...props}
      >
        {children}
      </a>
    )

    return (
      <Navigation
        items={defaultItems}
        linkComponent={RouterLinkMock}
        currentPath="/components"
      />
    )
  },
}

// Accessibility demo
export const AccessibilityDemo: Story = {
  args: {
    items: [
      { 
        label: 'Dashboard', 
        href: '/dashboard',
        icon: (
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
        )
      },
      { label: 'Profile', href: '/profile' },
      { label: 'Settings', href: '/settings' },
    ],
    currentPath: '/dashboard',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'landmark-one-main',
            enabled: false, // Navigation doesn't need main landmark
          },
        ],
      },
    },
  },
}