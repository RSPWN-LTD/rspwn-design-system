import type { Meta, StoryObj } from '@storybook/react'
import { Stats } from './Stats'
import React from 'react'

// Sample icons
const UsersIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
)

const CurrencyIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182s3.07-.879 4.242 0L15 9m-3 4h3m-6 0h6m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

const ChartIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const GlobeIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9Zm0 0a8.997 8.997 0 0 0 7.843-4.582M12 21a8.997 8.997 0 0 1-7.843-4.582m15.686 0A11.953 11.953 0 0 1 12 2.25c-5.114 0-9.75 3.886-10.25 9.25.5 5.364 5.136 9.25 10.25 9.25 5.114 0 9.75-3.886 10.25-9.25Zm0 0c-.5 1.364-2.136 2.25-3.75 2.25s-3.25-.886-3.75-2.25" />
  </svg>
)

const meta: Meta<typeof Stats> = {
  title: 'UI/Stats',
  component: Stats,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Stats Component

A flexible component for displaying key metrics and statistics with optional change indicators and icons.

## Features

- **Multiple Variants**: Default, compact, and detailed layouts
- **Change Indicators**: Visual indicators for increases, decreases, or neutral changes
- **Responsive Design**: Automatically adjusts grid layout for different screen sizes
- **Icon Support**: Optional icons for visual enhancement
- **Professional Styling**: Clean, modern design with hover effects

## Usage

\`\`\`typescript
<Stats
  items={[
    {
      id: "users",
      name: "Total Users",
      value: "2,543",
      change: { value: "+12%", type: "increase" },
      icon: <UsersIcon />
    }
  ]}
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Stats>

export const Default: Story = {
  args: {
    items: [
      {
        id: 'users',
        name: 'Total Users',
        value: '2,543',
        change: {
          value: '+12%',
          type: 'increase'
        },
        icon: <UsersIcon />
      },
      {
        id: 'revenue',
        name: 'Revenue',
        value: '$45,231',
        change: {
          value: '+4.75%',
          type: 'increase'
        },
        icon: <CurrencyIcon />
      },
      {
        id: 'orders',
        name: 'Orders',
        value: '1,423',
        change: {
          value: '-2.5%',
          type: 'decrease'
        },
        icon: <ChartIcon />
      },
      {
        id: 'sessions',
        name: 'Active Sessions',
        value: '892',
        change: {
          value: '0%',
          type: 'neutral'
        },
        icon: <GlobeIcon />
      }
    ]
  }
}

export const Compact: Story = {
  args: {
    variant: 'compact',
    items: [
      {
        id: 'users',
        name: 'Users',
        value: '2.5K',
        change: {
          value: '+12%',
          type: 'increase'
        }
      },
      {
        id: 'revenue',
        name: 'Revenue',
        value: '$45K',
        change: {
          value: '+4.75%',
          type: 'increase'
        }
      },
      {
        id: 'orders',
        name: 'Orders',
        value: '1.4K',
        change: {
          value: '-2.5%',
          type: 'decrease'
        }
      },
      {
        id: 'sessions',
        name: 'Sessions',
        value: '892',
        change: {
          value: '0%',
          type: 'neutral'
        }
      },
      {
        id: 'conversion',
        name: 'Conversion',
        value: '3.2%',
        change: {
          value: '+0.8%',
          type: 'increase'
        }
      },
      {
        id: 'bounce',
        name: 'Bounce Rate',
        value: '42%',
        change: {
          value: '-5%',
          type: 'increase'
        }
      }
    ]
  }
}

export const Detailed: Story = {
  args: {
    variant: 'detailed',
    items: [
      {
        id: 'users',
        name: 'Total Active Users',
        value: '2,543',
        change: {
          value: '+12% from last month',
          type: 'increase'
        },
        icon: <UsersIcon />,
        description: 'Number of users who have been active in the past 30 days'
      },
      {
        id: 'revenue',
        name: 'Monthly Revenue',
        value: '$45,231.89',
        change: {
          value: '+4.75% from last month',
          type: 'increase'
        },
        icon: <CurrencyIcon />,
        description: 'Total revenue generated this month including subscriptions and one-time payments'
      },
      {
        id: 'orders',
        name: 'Total Orders',
        value: '1,423',
        change: {
          value: '-2.5% from last month',
          type: 'decrease'
        },
        icon: <ChartIcon />,
        description: 'Number of completed orders processed through the platform'
      },
      {
        id: 'sessions',
        name: 'Active Sessions',
        value: '892',
        change: {
          value: 'No change',
          type: 'neutral'
        },
        icon: <GlobeIcon />,
        description: 'Current number of active user sessions across all platforms'
      }
    ]
  }
}

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        id: 'users',
        name: 'Total Users',
        value: '2,543',
        change: {
          value: '+12%',
          type: 'increase'
        }
      },
      {
        id: 'revenue',
        name: 'Revenue',
        value: '$45,231',
        change: {
          value: '+4.75%',
          type: 'increase'
        }
      },
      {
        id: 'orders',
        name: 'Orders',
        value: '1,423',
        change: {
          value: '-2.5%',
          type: 'decrease'
        }
      }
    ]
  }
}

export const WithoutChange: Story = {
  args: {
    items: [
      {
        id: 'users',
        name: 'Total Users',
        value: '2,543',
        icon: <UsersIcon />
      },
      {
        id: 'revenue',
        name: 'Revenue',
        value: '$45,231',
        icon: <CurrencyIcon />
      },
      {
        id: 'orders',
        name: 'Orders',
        value: '1,423',
        icon: <ChartIcon />
      },
      {
        id: 'sessions',
        name: 'Active Sessions',
        value: '892',
        icon: <GlobeIcon />
      }
    ]
  }
}