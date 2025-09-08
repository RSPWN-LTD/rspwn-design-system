import type { Meta, StoryObj } from '@storybook/react'
import { BentoGrid } from './BentoGrid'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof BentoGrid> = {
  title: 'Sections/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Bento Grid

Modern grid layout component inspired by bento box designs. Perfect for showcasing features, services, or content in an attractive asymmetrical grid layout.

## Features

- **Flexible Grid System**: Auto-fit responsive grid with no empty spaces
- **Multiple Item Sizes**: Small, medium, large, wide, and tall variants
- **Color Themes**: Primary, secondary, accent, and neutral color options
- **Interactive Elements**: Click handlers and hover effects
- **Background Images**: Support for background images with overlays
- **Responsive Design**: Adapts from multi-column desktop to single column mobile
- **Gaming Aesthetic**: Optimized for RSPWN brand guidelines

## Item Sizes

- **Small**: Single grid item (1x1)
- **Medium**: Single grid item (1x1) - default
- **Large**: Large item (2x2 on desktop)
- **Wide**: Wide item (2x1 on desktop)
- **Tall**: Tall item (1x2 on desktop)

## Usage

\`\`\`typescript
<BentoGrid
  title="Platform Features"
  subtitle="Everything you need for competitive gaming"
  items={[
    {
      id: "analytics",
      title: "Performance Analytics",
      description: "Track your gaming performance",
      icon: "📊",
      size: "large",
      color: "primary"
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

const gamingFeatures = [
  {
    id: 'tournaments',
    title: 'Tournament System',
    description: 'Create and manage competitive tournaments with bracket generation, scheduling, and prize distribution.',
    icon: '🏆',
    size: 'large' as const,
    color: 'primary' as const,
    content: (
      <div style={{ marginTop: '1rem' }}>
        <Typography variant="caption" style={{ color: '#4A9EFF' }}>
          • Automated brackets • Prize pools • Live streaming
        </Typography>
      </div>
    )
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'Advanced statistics and performance tracking for competitive improvement.',
    icon: '📊',
    size: 'medium' as const,
    color: 'secondary' as const
  },
  {
    id: 'team-management',
    title: 'Team Management',
    description: 'Organize teams, manage rosters, and coordinate practice sessions.',
    icon: '👥',
    size: 'medium' as const,
    color: 'accent' as const
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming Integration',
    description: 'Built-in streaming tools with chat moderation and viewer engagement features.',
    icon: '📺',
    size: 'wide' as const,
    color: 'primary' as const
  },
  {
    id: 'anti-cheat',
    title: 'Anti-Cheat System',
    description: 'Advanced detection algorithms ensure fair play.',
    icon: '🛡️',
    size: 'small' as const,
    color: 'neutral' as const
  },
  {
    id: 'matchmaking',
    title: 'Smart Matchmaking',
    description: 'AI-powered matchmaking for balanced competitive matches.',
    icon: '⚡',
    size: 'small' as const,
    color: 'secondary' as const
  },
  {
    id: 'training',
    title: 'Training Modes',
    description: 'Practice facilities with AI opponents and skill development programs.',
    icon: '🎯',
    size: 'tall' as const,
    color: 'accent' as const,
    content: (
      <div style={{ marginTop: '1rem' }}>
        <Typography variant="caption" style={{ color: '#10B981' }}>
          AI Training • Skill Assessment • Progress Tracking
        </Typography>
      </div>
    )
  }
]

const productFeatures = [
  {
    id: 'dashboard',
    title: 'Unified Dashboard',
    description: 'Everything you need in one place - analytics, matches, and team management.',
    icon: '🎯',
    size: 'large' as const,
    color: 'primary' as const,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    description: 'Stay connected on the go with our native mobile experience.',
    icon: '📱',
    size: 'medium' as const,
    color: 'secondary' as const
  },
  {
    id: 'api',
    title: 'Developer API',
    description: 'Build custom integrations with our comprehensive API.',
    icon: '⚙️',
    size: 'medium' as const,
    color: 'neutral' as const
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Round-the-clock technical support for all users.',
    icon: '🚀',
    size: 'small' as const,
    color: 'accent' as const
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-level security with advanced encryption.',
    icon: '🔒',
    size: 'small' as const,
    color: 'primary' as const
  }
]

const serviceShowcase = [
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎨',
    size: 'medium' as const,
    color: 'primary' as const
  },
  {
    id: 'development',
    title: 'Full-Stack Development',
    description: 'End-to-end development from concept to deployment.',
    icon: '💻',
    size: 'large' as const,
    color: 'secondary' as const,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert advice on architecture and technology choices.',
    icon: '🧠',
    size: 'small' as const,
    color: 'accent' as const
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your systems running smoothly.',
    icon: '🔧',
    size: 'small' as const,
    color: 'neutral' as const
  }
]

export const GamingPlatform: Story = {
  args: {
    title: 'Complete Gaming Platform',
    subtitle: 'Everything you need to build, manage, and scale competitive gaming experiences',
    items: gamingFeatures,
    variant: 'default'
  }
}

export const ProductShowcase: Story = {
  args: {
    title: 'Platform Features',
    subtitle: 'Discover the tools that make RSPWN the ultimate gaming platform',
    items: productFeatures,
    variant: 'spacious'
  }
}

export const ServiceGrid: Story = {
  args: {
    title: 'Our Services',
    subtitle: 'Professional development services for modern applications',
    items: serviceShowcase,
    variant: 'compact'
  }
}

export const WithoutHeader: Story = {
  args: {
    items: [
      {
        id: 'feature-1',
        title: 'Lightning Fast',
        description: 'Ultra-low latency gaming experience',
        icon: '⚡',
        size: 'medium' as const,
        color: 'primary' as const
      },
      {
        id: 'feature-2',
        title: 'Secure Platform',
        description: 'Enterprise-grade security for all users',
        icon: '🛡️',
        size: 'medium' as const,
        color: 'accent' as const
      },
      {
        id: 'feature-3',
        title: 'Global Reach',
        description: 'Connect with players worldwide',
        icon: '🌍',
        size: 'medium' as const,
        color: 'secondary' as const
      }
    ],
    variant: 'compact'
  }
}

export const Interactive: Story = {
  args: {
    title: 'Interactive Features',
    subtitle: 'Click on any feature to learn more',
    items: [
      {
        id: 'tournaments-interactive',
        title: 'Create Tournament',
        description: 'Set up your next competitive event',
        icon: '🏆',
        size: 'large' as const,
        color: 'primary' as const,
        onClick: () => alert('Opening tournament creation wizard...'),
        content: (
          <div style={{ marginTop: '1rem' }}>
            <Typography variant="caption" style={{ color: '#4A9EFF' }}>
              Click to get started →
            </Typography>
          </div>
        )
      },
      {
        id: 'stats-interactive',
        title: 'View Statistics',
        description: 'Detailed performance analytics',
        icon: '📈',
        size: 'medium' as const,
        color: 'secondary' as const,
        href: '#stats'
      },
      {
        id: 'team-interactive',
        title: 'Join Team',
        description: 'Find and join competitive teams',
        icon: '👥',
        size: 'medium' as const,
        color: 'accent' as const,
        onClick: () => alert('Redirecting to team finder...')
      }
    ],
    variant: 'default'
  }
}

export const MinimalGrid: Story = {
  args: {
    items: [
      {
        id: 'simple-1',
        title: 'Fast',
        icon: '⚡',
        size: 'small' as const,
        color: 'primary' as const
      },
      {
        id: 'simple-2',
        title: 'Secure',
        icon: '🔒',
        size: 'small' as const,
        color: 'accent' as const
      },
      {
        id: 'simple-3',
        title: 'Reliable',
        icon: '✅',
        size: 'small' as const,
        color: 'secondary' as const
      },
      {
        id: 'simple-4',
        title: 'Scalable',
        icon: '📈',
        size: 'small' as const,
        color: 'neutral' as const
      }
    ],
    variant: 'compact'
  }
}