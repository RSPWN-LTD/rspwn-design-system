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

// Items with dropdowns for gaming platform
const itemsWithDropdowns = [
  { label: 'Home', href: '/' },
  {
    label: 'Games',
    dropdown: {
      items: [
        {
          name: 'Battle Royale',
          description: 'Fast-paced competitive gaming with 100 players',
          href: '/games/battle-royale',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          )
        },
        {
          name: 'Strategy Games',
          description: 'Think ahead and dominate with tactical gameplay',
          href: '/games/strategy',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H5a2 2 0 00-2 2v3c0 1.1.9 2 2 2h4m-4-6l7-7 7 7M8 21l4-7 4 7"/>
            </svg>
          )
        },
        {
          name: 'Racing',
          description: 'High-speed racing with realistic physics',
          href: '/games/racing',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10,8 16,12 10,16 10,8"/>
            </svg>
          )
        }
      ],
      callsToAction: [
        {
          name: 'Browse All',
          href: '/games/all',
          icon: (
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
              <path d="M8 5v4m8-4v4"/>
            </svg>
          )
        },
        {
          name: 'New Releases',
          href: '/games/new',
          icon: (
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="8,12 12,16 16,12"/>
            </svg>
          )
        }
      ]
    }
  },
  {
    label: 'Community',
    dropdown: {
      items: [
        {
          name: 'Forums',
          description: 'Connect with other gamers and discuss strategies',
          href: '/community/forums',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
          )
        },
        {
          name: 'Teams',
          description: 'Find your perfect squad or create your own team',
          href: '/community/teams',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
          )
        },
        {
          name: 'Events',
          description: 'Join tournaments and special gaming events',
          href: '/community/events',
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          )
        }
      ]
    }
  },
  { label: 'Leaderboards', href: '/leaderboards' },
  { label: 'Profile', href: '/profile' }
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

// With dropdown menus (Professional)
export const WithDropdowns: Story = {
  args: {
    items: itemsWithDropdowns,
    currentPath: '/games',
  },
}

// Playground - Interactive dropdown demo
export const Playground: Story = {
  args: {
    items: itemsWithDropdowns,
    currentPath: '/games',
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
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>RSPWN Pro</span>
      </div>
    ),
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

// Mobile responsive demo - Shows full-screen overlay menu
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

// Mobile with icons demo
export const MobileWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    currentPath: '/dashboard',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Mobile with dropdowns
export const MobileWithDropdowns: Story = {
  args: {
    items: itemsWithDropdowns,
    currentPath: '/games',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Stress test with many items to show overflow handling
export const StressTestManyItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' },
      { 
        label: 'Games',
        dropdown: {
          items: [
            { name: 'Action Games', href: '/games/action', description: 'Fast-paced action games' },
            { name: 'Strategy', href: '/games/strategy', description: 'Think and plan ahead' }
          ]
        }
      },
      { label: 'Tournaments', href: '/tournaments' },
      { label: 'Leaderboards', href: '/leaderboards' },
      { label: 'Community', href: '/community' },
      { label: 'Store', href: '/store' },
      { label: 'Support', href: '/support' },
      { label: 'News', href: '/news' },
      { label: 'Events', href: '/events' },
      { label: 'Teams', href: '/teams' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', href: '/profile' }
    ],
    currentPath: '/games',
  },
}

// Responsive test - shows how navigation adapts at different screen sizes
export const ResponsiveTest: Story = {
  args: {
    items: itemsWithDropdowns,
    currentPath: '/games',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

// Edge case - Very long navigation labels
export const LongLabelsTest: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Professional Gaming Championships', href: '/championships' },
      { label: 'Community Management Portal', href: '/community' },
      { label: 'Advanced Analytics Dashboard', href: '/analytics' },
      { label: 'Tournament Organization System', href: '/tournaments' },
      { label: 'Player Performance Metrics', href: '/metrics' }
    ],
    currentPath: '/championships',
  },
}

// Adaptive Mobile Menu Test - Shows automatic mobile menu when buttons would collapse
export const AdaptiveMobileMenuTest: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Games', href: '/games' },
      { label: 'Tournaments', href: '/tournaments' },
      { label: 'Leaderboards', href: '/leaderboards' },
      { label: 'Community', href: '/community' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Store', href: '/store' },
      { label: 'Support', href: '/support' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', href: '/profile' }
    ],
    currentPath: '/games',
    brand: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>RSPWN Gaming Platform</span>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the adaptive mobile menu behavior. When there are too many navigation items that would cause buttons to collapse or overflow horizontally, the navigation automatically switches to mobile menu mode even on desktop screens. Try resizing your browser window to see the adaptive behavior in action.'
      }
    }
  }
}

// Extreme Case - Shows immediate mobile menu activation
export const ExtremeCaseTest: Story = {
  args: {
    items: [
      { label: 'Very Long Navigation Item Name That Takes Much Space', href: '/long1' },
      { label: 'Another Extremely Long Navigation Item', href: '/long2' },
      { label: 'Super Long Gaming Tournament Championship Name', href: '/long3' },
      { label: 'Professional Esports Analytics Dashboard Portal', href: '/long4' },
      { label: 'Community Management And Moderation System', href: '/long5' }
    ],
    currentPath: '/long1',
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
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#FFFFFF' }}>RSPWN Professional Gaming</span>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This extreme case shows navigation with very long item names and a long brand name. The system should automatically activate mobile menu mode to prevent any button collapsing or horizontal overflow.'
      }
    }
  }
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