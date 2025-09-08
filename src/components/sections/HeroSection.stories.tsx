import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Hero Section

Professional hero sections for gaming platforms and modern web applications. Built with RSPWN design system principles featuring dark themes, strategic blue accents, and responsive layouts.

## Features

- **Multiple Variants**: Centered, split, and minimal layouts
- **Responsive Navigation**: Mobile-friendly with hamburger menu
- **Interactive Elements**: Hover states and smooth transitions
- **Announcement Banner**: Optional promotional content
- **Call-to-Action Buttons**: Primary and secondary action support
- **Brand Compliance**: Follows RSPWN typography and color guidelines

## Variants

- **Centered**: Full-height centered content with background effects
- **Split**: Content aligned to left with optional right-side media
- **Minimal**: Reduced padding for compact presentations

## Usage

\`\`\`typescript
<HeroSection
  variant="centered"
  title="The Ultimate Gaming Platform"
  subtitle="Experience next-generation competitive gaming"
  primaryAction={{ text: "Get Started", href: "/signup" }}
  secondaryAction={{ text: "Learn More", href: "/about" }}
  navigation={[
    { name: "Features", href: "/features" },
    { name: "Tournaments", href: "/tournaments" }
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
type Story = StoryObj<typeof HeroSection>

const defaultNavigation = [
  { name: 'Features', href: '#features' },
  { name: 'Tournaments', href: '#tournaments' },
  { name: 'Community', href: '#community' },
  { name: 'Support', href: '#support' }
]

export const Centered: Story = {
  args: {
    variant: 'centered',
    title: 'The Ultimate Competitive Gaming Platform',
    subtitle: 'Join millions of professional gamers worldwide. Experience next-generation competitive gaming with cutting-edge technology and unmatched performance.',
    announcement: {
      text: 'Announcing our latest tournament series.',
      link: {
        text: 'Join now',
        href: '#tournament'
      }
    },
    primaryAction: {
      text: 'Get Started',
      href: '#signup'
    },
    secondaryAction: {
      text: 'Watch Demo',
      href: '#demo'
    },
    navigation: defaultNavigation,
    brandName: 'RSPWN'
  }
}

export const WithoutNavigation: Story = {
  args: {
    variant: 'centered',
    title: 'Dominate the Competition',
    subtitle: 'Professional gaming tools and infrastructure designed for competitive excellence. Built by gamers, for gamers.',
    primaryAction: {
      text: 'Start Playing',
      href: '#play'
    },
    secondaryAction: {
      text: 'Learn More',
      href: '#about'
    }
  }
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    title: 'Welcome to RSPWN',
    subtitle: 'The future of competitive gaming starts here.',
    primaryAction: {
      text: 'Join Now',
      href: '#join'
    },
    navigation: defaultNavigation
  }
}

export const WithAnnouncement: Story = {
  args: {
    variant: 'centered',
    title: 'Championship Season 2024',
    subtitle: 'Compete for the largest prize pool in esports history. Registration now open for professional teams and individual players.',
    announcement: {
      text: 'Early bird registration ends in 7 days.',
      link: {
        text: 'Register now',
        href: '#register'
      }
    },
    primaryAction: {
      text: 'Register Team',
      href: '#team-register'
    },
    secondaryAction: {
      text: 'Solo Queue',
      href: '#solo-register'
    },
    navigation: [
      { name: 'Tournament', href: '#tournament' },
      { name: 'Rules', href: '#rules' },
      { name: 'Prizes', href: '#prizes' },
      { name: 'Schedule', href: '#schedule' }
    ]
  }
}

export const ProductLaunch: Story = {
  args: {
    variant: 'centered',
    title: 'RSPWN Pro is Here',
    subtitle: 'Advanced analytics, custom tournaments, and premium features for serious gamers. Take your competitive gaming to the next level.',
    announcement: {
      text: 'Limited time: 50% off first year.',
      link: {
        text: 'Get offer',
        href: '#offer'
      }
    },
    primaryAction: {
      text: 'Upgrade to Pro',
      href: '#upgrade'
    },
    secondaryAction: {
      text: 'Compare Plans',
      href: '#pricing'
    },
    navigation: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Enterprise', href: '#enterprise' },
      { name: 'Contact', href: '#contact' }
    ]
  }
}

export const SimpleCallToAction: Story = {
  args: {
    variant: 'centered',
    title: 'Ready to Dominate?',
    subtitle: 'Join thousands of professional gamers who trust RSPWN for competitive excellence.',
    primaryAction: {
      text: 'Start Your Journey',
      href: '#start'
    }
  }
}