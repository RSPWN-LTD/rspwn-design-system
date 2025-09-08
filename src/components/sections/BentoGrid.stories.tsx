import type { Meta, StoryObj } from '@storybook/react'
import { BentoGrid } from './BentoGrid'
import { Typography } from '../foundation/Typography'
import React from 'react'

// Sample icon components (in real usage, you'd import from your icon library)
const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
  </svg>
)

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.6 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
  </svg>
)

// Mock content components
const FileList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
    {['document.pdf', 'spreadsheet.xlsx', 'presentation.pptx'].map((file, index) => (
      <div key={index} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        padding: '0.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '0.5rem'
      }}>
        <FileIcon />
        <Typography variant="caption" color="muted">{file}</Typography>
      </div>
    ))}
  </div>
)

const ChartDemo = () => (
  <div style={{ marginTop: '1rem' }}>
    <div style={{ display: 'flex', gap: '0.25rem', height: '60px', alignItems: 'end' }}>
      {[40, 65, 30, 80, 45, 70, 85].map((height, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: `${height}%`,
            background: `rgba(74, 158, 255, ${0.4 + (height / 100) * 0.6})`,
            borderRadius: '0.125rem'
          }}
        />
      ))}
    </div>
  </div>
)

const meta: Meta<typeof BentoGrid> = {
  title: 'Sections/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Professional Bento Grid

A clean, professional grid layout component perfect for enterprise applications and modern dashboards.

## Features

- **Responsive Grid**: Adapts from 3-column desktop to single column mobile
- **Professional Styling**: Subtle glass morphism effects and clean typography
- **Multiple Sizes**: Support for different grid item sizes (small, medium, large, wide, tall)
- **Interactive Elements**: Click handlers with smooth hover effects
- **Custom Content**: Support for any React content within grid items

## Usage

\`\`\`typescript
<BentoGrid
  title="Platform Features"
  subtitle="Everything you need for your business"
  items={[
    {
      id: "files",
      title: "File Management",
      description: "Organize and manage your documents",
      icon: <FileIcon />,
      size: "medium",
      content: <FileList />
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
type Story = StoryObj<typeof BentoGrid>

export const Default: Story = {
  args: {
    title: "Platform Features",
    subtitle: "Everything you need for your business",
    items: [
      {
        id: "files",
        title: "File Management",
        description: "Organize and manage your documents efficiently",
        icon: <FileIcon />,
        size: "medium",
        content: <FileList />
      },
      {
        id: "notifications",
        title: "Smart Notifications",
        description: "Stay updated with intelligent alerts and reminders",
        icon: <BellIcon />,
        size: "wide"
      },
      {
        id: "analytics",
        title: "Analytics Dashboard",
        description: "Track performance with detailed insights and reports",
        icon: <ChartIcon />,
        size: "medium",
        content: <ChartDemo />
      },
      {
        id: "integrations",
        title: "Integrations",
        description: "Connect with 100+ tools and services",
        icon: <ShareIcon />,
        size: "tall"
      },
      {
        id: "calendar",
        title: "Calendar",
        description: "Schedule and manage your time effectively",
        icon: <CalendarIcon />,
        size: "medium"
      }
    ]
  }
}

export const Compact: Story = {
  args: {
    variant: "compact",
    items: [
      {
        id: "files",
        title: "Files",
        description: "Document management",
        icon: <FileIcon />,
        size: "medium"
      },
      {
        id: "notifications",
        title: "Notifications",
        description: "Real-time alerts",
        icon: <BellIcon />,
        size: "medium"
      },
      {
        id: "analytics",
        title: "Analytics",
        description: "Performance tracking",
        icon: <ChartIcon />,
        size: "medium"
      },
      {
        id: "integrations",
        title: "Integrations",
        description: "Third-party connections",
        icon: <ShareIcon />,
        size: "medium"
      }
    ]
  }
}

export const LargeCards: Story = {
  args: {
    title: "Feature Showcase",
    items: [
      {
        id: "dashboard",
        title: "Dashboard Overview",
        description: "Get a complete view of your business metrics and KPIs",
        icon: <ChartIcon />,
        size: "large",
        content: <ChartDemo />
      },
      {
        id: "reports",
        title: "Advanced Reports",
        description: "Generate detailed reports with custom filters",
        icon: <FileIcon />,
        size: "medium"
      },
      {
        id: "team",
        title: "Team Collaboration",
        description: "Work together seamlessly with your team members",
        icon: <ShareIcon />,
        size: "wide"
      }
    ]
  }
}

export const Interactive: Story = {
  args: {
    title: "Interactive Features",
    subtitle: "Click on any card to explore",
    items: [
      {
        id: "files",
        title: "File Manager",
        description: "Click to open file explorer",
        icon: <FileIcon />,
        size: "medium",
        onClick: () => alert('Opening file manager...')
      },
      {
        id: "notifications",
        title: "Notification Center",
        description: "View all your notifications",
        icon: <BellIcon />,
        size: "medium",
        href: "https://example.com/notifications"
      },
      {
        id: "analytics",
        title: "Analytics Portal",
        description: "Deep dive into your data",
        icon: <ChartIcon />,
        size: "large",
        href: "https://example.com/analytics",
        content: <ChartDemo />
      }
    ]
  }
}