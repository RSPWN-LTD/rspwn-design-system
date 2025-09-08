import type { Meta, StoryObj } from '@storybook/react'
import { CallToAction } from './CallToAction'
import { Typography } from '../foundation/Typography'

const meta: Meta<typeof CallToAction> = {
  title: 'Sections/CallToAction',
  component: CallToAction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Call to Action

Powerful call-to-action sections designed to convert visitors into users. Multiple layout variants optimized for different use cases and conversion goals.

## Features

- **Multiple Variants**: Centered, split, banner, and minimal layouts
- **Flexible Buttons**: Primary, secondary, and outline button styles
- **Background Options**: Solid colors, gradients, or custom images
- **Responsive Design**: Optimized for all screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Gaming Aesthetic**: Professional design aligned with RSPWN branding

## Variants

- **Centered**: Traditional centered layout with prominent buttons
- **Split**: Two-column layout with content and actions separated
- **Banner**: Highlighted banner style with background effects
- **Minimal**: Clean, simple layout for subtle conversion

## Button Types

- **Primary**: Main action button with RSPWN blue background
- **Secondary**: Secondary action with subtle background
- **Outline**: Outlined button style for alternative actions

## Usage

\`\`\`typescript
<CallToAction
  variant="centered"
  title="Ready to Dominate?"
  description="Join thousands of gamers in competitive tournaments"
  primaryButton={{ text: "Get Started", href: "/signup" }}
  secondaryButton={{ text: "Learn More", href: "/about" }}
  backgroundGradient={true}
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CallToAction>

export const Centered: Story = {
  args: {
    title: 'Ready to Dominate the Competition?',
    description: 'Join thousands of professional gamers on RSPWN. Experience next-generation competitive gaming with cutting-edge technology and unmatched performance.',
    primaryButton: {
      text: 'Start Playing Now',
      href: '#signup'
    },
    secondaryButton: {
      text: 'Watch Demo',
      href: '#demo'
    },
    variant: 'centered',
    backgroundGradient: true
  }
}

export const Split: Story = {
  args: {
    title: 'Take Your Gaming to the Next Level',
    description: 'Professional tournaments, advanced analytics, and team management tools. Everything you need to succeed in competitive gaming.',
    primaryButton: {
      text: 'Join Tournament',
      href: '#tournament'
    },
    secondaryButton: {
      text: 'View Features',
      href: '#features',
      variant: 'outline'
    },
    variant: 'split'
  }
}

export const Banner: Story = {
  args: {
    subtitle: 'Limited Time Offer',
    title: 'Championship Season Pass',
    description: 'Get exclusive access to all tournaments, premium analytics, and special rewards.',
    primaryButton: {
      text: 'Claim Offer',
      href: '#offer'
    },
    secondaryButton: {
      text: 'Learn More',
      href: '#details',
      variant: 'secondary'
    },
    variant: 'banner'
  }
}

export const Minimal: Story = {
  args: {
    title: 'Start Your Journey',
    description: 'Create your RSPWN account and join the community.',
    primaryButton: {
      text: 'Sign Up',
      href: '#signup'
    },
    variant: 'minimal'
  }
}

export const WithBackgroundImage: Story = {
  args: {
    title: 'Epic Gaming Awaits',
    description: 'Experience the thrill of competitive gaming with stunning visuals and immersive gameplay.',
    primaryButton: {
      text: 'Enter the Arena',
      href: '#play'
    },
    secondaryButton: {
      text: 'Watch Trailer',
      href: '#trailer',
      variant: 'outline'
    },
    variant: 'centered',
    backgroundImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&h=900&fit=crop'
  }
}

export const TournamentSignup: Story = {
  args: {
    subtitle: 'World Championship 2024',
    title: 'Registration Now Open',
    description: 'Compete for the largest prize pool in esports history. Registration closes in 7 days.',
    primaryButton: {
      text: 'Register Team',
      onClick: () => alert('Opening team registration...')
    },
    secondaryButton: {
      text: 'Solo Queue',
      onClick: () => alert('Opening solo registration...'),
      variant: 'secondary'
    },
    variant: 'centered',
    backgroundGradient: true
  }
}

export const ProductLaunch: Story = {
  args: {
    subtitle: 'Now Available',
    title: 'RSPWN Pro is Here',
    description: 'Advanced analytics, custom tournaments, and premium features for serious gamers. Limited time: 50% off first year.',
    primaryButton: {
      text: 'Upgrade to Pro',
      href: '#upgrade'
    },
    secondaryButton: {
      text: 'Compare Plans',
      href: '#pricing',
      variant: 'outline'
    },
    variant: 'split',
    backgroundGradient: true
  }
}

export const TeamRecruitment: Story = {
  args: {
    title: 'Join Team Phoenix',
    description: 'We\'re looking for skilled players to join our competitive roster. Open tryouts this weekend.',
    primaryButton: {
      text: 'Apply Now',
      href: '#apply'
    },
    secondaryButton: {
      text: 'View Team Stats',
      href: '#stats',
      variant: 'secondary'
    },
    variant: 'banner'
  }
}

export const CustomContent: Story = {
  args: {
    title: 'Stay Connected',
    description: 'Follow us for the latest updates, tournament announcements, and gaming tips.',
    variant: 'centered',
    children: (
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '1rem'
      }}>
        <a 
          href="#discord" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#5865F2',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span>💬</span> Discord
        </a>
        <a 
          href="#twitter" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1DA1F2',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span>🐦</span> Twitter
        </a>
        <a 
          href="#youtube" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#FF0000',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span>📺</span> YouTube
        </a>
      </div>
    )
  }
}

export const Newsletter: Story = {
  args: {
    title: 'Never Miss a Match',
    description: 'Get tournament updates, player highlights, and exclusive content delivered to your inbox.',
    variant: 'minimal',
    children: (
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        maxWidth: '400px', 
        margin: '1rem auto 0',
        alignItems: 'center'
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            fontSize: '0.875rem'
          }}
        />
        <button
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4A9EFF',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3B8EF0'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4A9EFF'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Subscribe
        </button>
      </div>
    )
  }
}