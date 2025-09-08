import type { Meta, StoryObj } from '@storybook/react'
import { LandingPageTemplate, DashboardTemplate } from './index'
import { HeroSection, BentoGrid, CallToAction, SidebarNavigation } from '../../sections'
import { Typography } from '../../foundation/Typography'
import { Grid } from '../../foundation/Grid'
import { Box } from '../../foundation/Box'
import { Stack } from '../../foundation/Stack'

const meta: Meta = {
  title: 'Layout/Templates',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# RSPWN Gaming Platform Templates

Professional templates built with our simplified foundation components. Each template follows RSPWN brand guidelines and provides optimal gaming platform aesthetics.

## Available Templates

- **Landing Page**: Hero sections with gaming-focused content structure
- **Dashboard**: Gaming platform admin interfaces with optimal dark theme

## Design Philosophy

Templates use minimal customization with great defaults:
- Professional dark theme optimized for gaming
- Systematic spacing through foundation components  
- RSPWN brand compliance (Audiowide for brand, Inter for content)
- Strategic blue accent usage for primary actions only

\`\`\`typescript
<LandingPageTemplate>
  <LandingPageTemplate.Hero>
    <Typography variant="brand">RSPWN</Typography>
    <Typography variant="heading">Welcome to the Ultimate Gaming Platform</Typography>
  </LandingPageTemplate.Hero>
</LandingPageTemplate>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta

export const LandingPage: StoryObj = {
  render: () => (
    <LandingPageTemplate>
      <LandingPageTemplate.Hero>
        <HeroSection
          variant="centered"
          title="The Ultimate Competitive Gaming Platform"
          subtitle="Join millions of professional gamers worldwide. Experience next-generation competitive gaming with cutting-edge technology."
          announcement={{
            text: 'Championship Season 2024 now open for registration.',
            link: {
              text: 'Register now',
              href: '#register'
            }
          }}
          primaryAction={{
            text: 'Get Started',
            href: '#signup'
          }}
          secondaryAction={{
            text: 'Watch Demo',
            href: '#demo'
          }}
          navigation={[
            { name: 'Features', href: '#features' },
            { name: 'Tournaments', href: '#tournaments' },
            { name: 'Community', href: '#community' },
            { name: 'Support', href: '#support' }
          ]}
        />
      </LandingPageTemplate.Hero>

      <LandingPageTemplate.Features>
        <BentoGrid
          title="Platform Features"
          subtitle="Everything you need for competitive gaming excellence"
          items={[
            {
              id: 'lightning-fast',
              title: 'Lightning Fast Performance',
              description: 'Ultra-low latency gaming with optimized performance for competitive play.',
              icon: '⚡',
              size: 'large',
              color: 'primary'
            },
            {
              id: 'precision-control',
              title: 'Precision Control',
              description: 'Advanced input systems and customizable controls.',
              icon: '🎯',
              size: 'medium',
              color: 'secondary'
            },
            {
              id: 'secure-platform',
              title: 'Secure Platform',
              description: 'Enterprise-grade security with advanced anti-cheat.',
              icon: '🛡️',
              size: 'medium',
              color: 'accent'
            },
            {
              id: 'tournament-system',
              title: 'Tournament Management',
              description: 'Create and manage competitive tournaments with ease.',
              icon: '🏆',
              size: 'wide',
              color: 'primary'
            },
            {
              id: 'analytics',
              title: 'Performance Analytics',
              description: 'Advanced statistics and insights.',
              icon: '📊',
              size: 'small',
              color: 'neutral'
            },
            {
              id: 'team-management',
              title: 'Team Tools',
              description: 'Organize and coordinate teams.',
              icon: '👥',
              size: 'small',
              color: 'accent'
            }
          ]}
          variant="default"
        />
      </LandingPageTemplate.Features>

      <LandingPageTemplate.About>
        <Stack variant="loose" style={{ textAlign: 'center', maxWidth: '50rem', margin: '0 auto' }}>
          <Typography variant="heading" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Built by Gamers, for Gamers
          </Typography>
          <Typography variant="body" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            RSPWN represents the evolution of competitive gaming platforms. Built by professional gamers for professional gamers, 
            we provide the tools, infrastructure, and community needed to excel in the modern esports landscape.
          </Typography>
          <Typography variant="body" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            Our platform combines cutting-edge technology with proven gaming methodologies to deliver an unmatched competitive experience. 
            From tournament organization to performance analytics, RSPWN is your complete esports solution.
          </Typography>
        </Stack>
      </LandingPageTemplate.About>

      <LandingPageTemplate.CTA>
        <CallToAction
          variant="centered"
          title="Ready to Dominate the Competition?"
          description="Join thousands of professional gamers who trust RSPWN for competitive excellence. Start your journey to esports greatness today."
          primaryButton={{
            text: 'Start Your Journey',
            href: '#signup'
          }}
          secondaryButton={{
            text: 'Explore Features',
            href: '#features',
            variant: 'outline'
          }}
          backgroundGradient={true}
        />
      </LandingPageTemplate.CTA>

      <LandingPageTemplate.Footer>
        <Grid variant="default">
          <div>
            <Typography variant="subheading">RSPWN</Typography>
            <Typography color="muted">
              The ultimate gaming platform for professionals and enthusiasts.
            </Typography>
          </div>
          <div>
            <Typography variant="label">Product</Typography>
            <Stack variant="tight">
              <Typography color="muted">Features</Typography>
              <Typography color="muted">Pricing</Typography>
              <Typography color="muted">API</Typography>
              <Typography color="muted">Support</Typography>
            </Stack>
          </div>
          <div>
            <Typography variant="label">Company</Typography>
            <Stack variant="tight">
              <Typography color="muted">About</Typography>
              <Typography color="muted">Careers</Typography>
              <Typography color="muted">News</Typography>
              <Typography color="muted">Contact</Typography>
            </Stack>
          </div>
          <div>
            <Typography variant="label">Legal</Typography>
            <Stack variant="tight">
              <Typography color="muted">Privacy</Typography>
              <Typography color="muted">Terms</Typography>
              <Typography color="muted">Security</Typography>
              <Typography color="muted">Compliance</Typography>
            </Stack>
          </div>
        </Grid>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '2rem', paddingTop: '2rem' }}>
          <Typography color="muted" style={{ textAlign: 'center' }}>
            © 2024 RSPWN. All rights reserved.
          </Typography>
        </div>
      </LandingPageTemplate.Footer>
    </LandingPageTemplate>
  )
}

export const Dashboard: StoryObj = {
  render: () => (
    <SidebarNavigation
      brandName="RSPWN"
      navigation={[
        { name: 'Overview', href: '#overview', icon: '🎯', current: true },
        { name: 'My Games', href: '#games', icon: '🎮', current: false },
        { name: 'Tournaments', href: '#tournaments', icon: '🏆', current: false },
        { name: 'Team', href: '#team', icon: '👥', current: false },
        { name: 'Analytics', href: '#analytics', icon: '📊', current: false },
        { name: 'Matches', href: '#matches', icon: '⚔️', current: false }
      ]}
      teams={[
        { id: 1, name: 'Team Alpha', href: '#team-alpha', initial: 'A', current: false },
        { id: 2, name: 'RSPWN Elite', href: '#rspwn-elite', initial: 'R', current: false },
        { id: 3, name: 'Pro Squad', href: '#pro-squad', initial: 'P', current: true }
      ]}
      settingsItem={{ name: 'Settings', href: '#settings', icon: '⚙️', current: false }}
      userProfile={{
        name: 'ProGamer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        menuItems: [
          { name: 'Your Profile', href: '#profile' },
          { name: 'Settings', href: '#settings' },
          { name: 'Sign out', href: '#signout' }
        ]
      }}
      showSearch={true}
    >
      <Stack variant="loose">
        <div>
          <Typography variant="heading">Welcome back, ProGamer!</Typography>
          <Typography color="muted" style={{ marginTop: '0.5rem' }}>
            Ready to dominate today's matches?
          </Typography>
        </div>
        
        <BentoGrid
          items={[
            {
              id: 'total-matches',
              title: 'Total Matches',
              description: '+12% this week',
              icon: '🎮',
              size: 'medium',
              color: 'primary',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#4A9EFF', marginTop: '0.5rem' }}>
                  1,247
                </Typography>
              )
            },
            {
              id: 'win-rate',
              title: 'Win Rate',
              description: '+2.1% improvement',
              icon: '🏆',
              size: 'medium',
              color: 'accent',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#10B981', marginTop: '0.5rem' }}>
                  89.3%
                </Typography>
              )
            },
            {
              id: 'global-rank',
              title: 'Global Rank',
              description: '+15 positions',
              icon: '⭐',
              size: 'medium',
              color: 'secondary',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#F59E0B', marginTop: '0.5rem' }}>
                  #127
                </Typography>
              )
            },
            {
              id: 'tournament-activity',
              title: 'Recent Activity',
              description: 'Latest achievements',
              icon: '📈',
              size: 'large',
              color: 'neutral',
              content: (
                <Stack variant="default" style={{ marginTop: '0.5rem' }}>
                  <div>
                    <Typography style={{ fontWeight: 600, fontSize: '0.875rem' }}>Championship Finals</Typography>
                    <Typography variant="caption" color="muted">+150 XP • +$2,500</Typography>
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 600, fontSize: '0.875rem' }}>Qualifier Tournament</Typography>
                    <Typography variant="caption" color="muted">+75 XP • Advanced</Typography>
                  </div>
                </Stack>
              )
            }
          ]}
          variant="compact"
        />

        <CallToAction
          variant="banner"
          subtitle="Live Match"
          title="Semi-Final Tonight"
          description="vs Team Phoenix • 8:00 PM EST"
          primaryButton={{
            text: 'Join Match',
            href: '#join-match'
          }}
          secondaryButton={{
            text: 'Details',
            href: '#match-details',
            variant: 'outline'
          }}
        />

        <Box variant="section">
          <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Upcoming</Typography>
          <Grid variant="cards">
            <Box variant="card" style={{ padding: '1rem' }}>
              <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block', color: '#4A9EFF' }}>
                Tomorrow 6PM
              </Typography>
              <Typography variant="subheading" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Weekly Qualifier</Typography>
              <Typography color="muted" style={{ fontSize: '0.875rem' }}>Open bracket</Typography>
            </Box>
            <Box variant="card" style={{ padding: '1rem' }}>
              <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block', color: '#8B5CF6' }}>
                This Weekend
              </Typography>
              <Typography variant="subheading" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Championship</Typography>
              <Typography color="muted" style={{ fontSize: '0.875rem' }}>$50K prize pool</Typography>
            </Box>
          </Grid>
        </Box>
      </Stack>
    </SidebarNavigation>
  )
}

export const ModernLanding: StoryObj = {
  render: () => (
    <div>
      <HeroSection
        variant="centered"
        title="RSPWN Pro is Here"
        subtitle="Advanced analytics, custom tournaments, and premium features for serious gamers."
        announcement={{
          text: 'Limited time: 50% off first year.',
          link: {
            text: 'Get offer',
            href: '#offer'
          }
        }}
        primaryAction={{
          text: 'Upgrade to Pro',
          href: '#upgrade'
        }}
        secondaryAction={{
          text: 'Compare Plans',
          href: '#pricing'
        }}
        navigation={[
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'Enterprise', href: '#enterprise' },
          { name: 'Contact', href: '#contact' }
        ]}
        backgroundGradient={true}
      />
      
      <BentoGrid
        title="Pro Features"
        subtitle="Everything you need to dominate competitive gaming"
        items={[
          {
            id: 'advanced-analytics',
            title: 'Advanced Analytics',
            description: 'Deep insights into your gaming performance with AI-powered recommendations.',
            icon: '📊',
            size: 'large',
            color: 'primary'
          },
          {
            id: 'custom-tournaments',
            title: 'Custom Tournaments',
            description: 'Create private tournaments for your organization.',
            icon: '🏆',
            size: 'medium',
            color: 'secondary'
          },
          {
            id: 'priority-support',
            title: 'Priority Support',
            description: '24/7 dedicated support for Pro users.',
            icon: '🚀',
            size: 'medium',
            color: 'accent'
          },
          {
            id: 'team-management',
            title: 'Advanced Team Management',
            description: 'Comprehensive tools for managing professional gaming teams.',
            icon: '👥',
            size: 'wide',
            color: 'primary'
          }
        ]}
        variant="spacious"
      />
      
      <CallToAction
        variant="split"
        title="Ready to Go Pro?"
        description="Join thousands of professional gamers who have upgraded to RSPWN Pro. Get access to advanced features, priority support, and exclusive tournaments."
        primaryButton={{
          text: 'Start Free Trial',
          href: '#trial'
        }}
        secondaryButton={{
          text: 'View Pricing',
          href: '#pricing',
          variant: 'outline'
        }}
        backgroundGradient={true}
      />
    </div>
  )
}

export const CompleteDashboard: StoryObj = {
  render: () => (
    <SidebarNavigation
      brandName="RSPWN"
      navigation={[
        { name: 'Dashboard', href: '#dashboard', icon: '🎯', current: true },
        { name: 'Live Matches', href: '#live', icon: '🔴', current: false },
        { name: 'Tournaments', href: '#tournaments', icon: '🏆', current: false },
        { name: 'Leaderboard', href: '#leaderboard', icon: '📊', current: false },
        { name: 'Training', href: '#training', icon: '🎯', current: false }
      ]}
      teams={[
        { id: 1, name: 'Fnatic', href: '#fnatic', initial: 'F', current: false },
        { id: 2, name: 'Team Liquid', href: '#liquid', initial: 'T', current: true },
        { id: 3, name: 'G2 Esports', href: '#g2', initial: 'G', current: false }
      ]}
      settingsItem={{ name: 'Tournament Settings', href: '#settings', icon: '⚙️', current: false }}
      userProfile={{
        name: 'ProPlayer2024',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        menuItems: [
          { name: 'Player Stats', href: '#stats' },
          { name: 'Account Settings', href: '#account' },
          { name: 'Sign out', href: '#signout' }
        ]
      }}
      showSearch={true}
    >
      <Stack variant="loose">
        <CallToAction
          variant="banner"
          subtitle="Championship Finals"
          title="Team Liquid vs Fnatic - LIVE NOW"
          description="Watch the most anticipated match of the tournament"
          primaryButton={{
            text: 'Watch Live',
            href: '#watch-live'
          }}
          secondaryButton={{
            text: 'Join Chat',
            href: '#chat',
            variant: 'outline'
          }}
        />

        <BentoGrid
          title="Live Tournament Dashboard"
          subtitle="Monitor active tournaments and team performance"
          items={[
            {
              id: 'live-viewers',
              title: 'Live Viewers',
              description: '+2.3K in last hour',
              icon: '👀',
              size: 'medium',
              color: 'primary',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#4A9EFF', marginTop: '0.5rem' }}>
                  47.2K
                </Typography>
              )
            },
            {
              id: 'prize-pool',
              title: 'Prize Pool',
              description: 'World Championship',
              icon: '💰',
              size: 'medium',
              color: 'accent',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#10B981', marginTop: '0.5rem' }}>
                  $2.5M
                </Typography>
              )
            },
            {
              id: 'teams-remaining',
              title: 'Teams Left',
              description: 'Championship bracket',
              icon: '🏆',
              size: 'medium',
              color: 'secondary',
              content: (
                <Typography variant="heading" style={{ fontSize: '2rem', color: '#8B5CF6', marginTop: '0.5rem' }}>
                  8
                </Typography>
              )
            },
            {
              id: 'match-schedule',
              title: 'Today\'s Schedule',
              description: 'Remaining matches and timings',
              icon: '⏰',
              size: 'large',
              color: 'neutral',
              content: (
                <Stack variant="default" style={{ marginTop: '1rem' }}>
                  <div>
                    <Typography style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Semi-Final #1</Typography>
                    <Typography variant="caption" color="muted">Team Liquid vs Fnatic • LIVE</Typography>
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Semi-Final #2</Typography>
                    <Typography variant="caption" color="muted">G2 vs Cloud9 • Starting in 2h</Typography>
                  </div>
                  <div>
                    <Typography style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Grand Final</Typography>
                    <Typography variant="caption" color="muted">Winners • Tomorrow 6PM EST</Typography>
                  </div>
                </Stack>
              )
            }
          ]}
          variant="default"
        />
      </Stack>
    </SidebarNavigation>
  )
}

