import type { Meta, StoryObj } from '@storybook/react'
import { SidebarNavigation } from './SidebarNavigation'
import { Typography } from '../foundation/Typography'
import { Stack } from '../foundation/Stack'
import { Box } from '../foundation/Box'

const meta: Meta<typeof SidebarNavigation> = {
  title: 'Sections/SidebarNavigation',
  component: SidebarNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Sidebar Navigation

Professional collapsible sidebar navigation for dashboard applications. Built with RSPWN design system principles featuring dark themes, responsive behavior, and gaming-optimized aesthetics.

## Features

- **Collapsible Design**: Mobile-first with responsive desktop layout
- **Full-Height Layout**: Complete dashboard navigation solution
- **Team Management**: Support for team/organization navigation
- **User Profile**: Integrated user menu and notifications
- **Search Functionality**: Built-in search with customizable visibility
- **Brand Integration**: Customizable brand name and logo
- **Gaming Aesthetics**: Optimized for professional gaming platforms

## Layout Structure

- **Mobile**: Overlay sidebar with backdrop and slide animations
- **Desktop**: Fixed sidebar with main content area adjustment
- **Top Bar**: Sticky header with search, notifications, and user profile
- **Navigation**: Hierarchical menu with primary and team sections

## Usage

\`\`\`typescript
<SidebarNavigation
  brandName="RSPWN"
  navigation={[
    { name: "Dashboard", href: "#", icon: "🎯", current: true },
    { name: "Tournaments", href: "#", icon: "🏆", current: false }
  ]}
  teams={[
    { id: 1, name: "Team Alpha", href: "#", initial: "A", current: false }
  ]}
  userProfile={{
    name: "ProGamer",
    avatar: "/avatar.jpg",
    menuItems: [
      { name: "Profile", href: "#" },
      { name: "Sign out", href: "#" }
    ]
  }}
>
  <YourDashboardContent />
</SidebarNavigation>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SidebarNavigation>

const defaultNavigation = [
  { name: 'Dashboard', href: '#dashboard', icon: '🎯', current: true },
  { name: 'My Games', href: '#games', icon: '🎮', current: false },
  { name: 'Tournaments', href: '#tournaments', icon: '🏆', current: false },
  { name: 'Team', href: '#team', icon: '👥', current: false },
  { name: 'Analytics', href: '#analytics', icon: '📊', current: false },
  { name: 'Matches', href: '#matches', icon: '⚔️', current: false }
]

const defaultTeams = [
  { id: 1, name: 'Team Alpha', href: '#team-alpha', initial: 'A', current: false },
  { id: 2, name: 'RSPWN Elite', href: '#rspwn-elite', initial: 'R', current: false },
  { id: 3, name: 'Pro Squad', href: '#pro-squad', initial: 'P', current: true }
]

const defaultUser = {
  name: 'ProGamer',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  menuItems: [
    { name: 'Your Profile', href: '#profile' },
    { name: 'Settings', href: '#settings' },
    { name: 'Sign out', href: '#signout' }
  ]
}

const DashboardContent = () => (
  <Stack variant="loose">
    <div>
      <Typography variant="heading">Welcome back, ProGamer!</Typography>
      <Typography color="muted" style={{ marginTop: '0.5rem' }}>
        Ready to dominate today's matches?
      </Typography>
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <Box variant="card">
        <Typography variant="label">Total Matches</Typography>
        <Typography variant="heading" style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#4A9EFF' }}>
          1,247
        </Typography>
        <Typography variant="caption" color="muted">+12% this week</Typography>
      </Box>
      
      <Box variant="card">
        <Typography variant="label">Win Rate</Typography>
        <Typography variant="heading" style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#10B981' }}>
          89.3%
        </Typography>
        <Typography variant="caption" color="muted">+2.1% improvement</Typography>
      </Box>
      
      <Box variant="card">
        <Typography variant="label">Global Rank</Typography>
        <Typography variant="heading" style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#F59E0B' }}>
          #127
        </Typography>
        <Typography variant="caption" color="muted">+15 positions</Typography>
      </Box>
    </div>

    <Box variant="section">
      <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Recent Tournament Activity</Typography>
      <Stack variant="default">
        <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography style={{ fontWeight: 600 }}>Championship Finals Victory</Typography>
          <Typography variant="caption" color="muted">2 hours ago • +150 XP • +$2,500</Typography>
        </div>
        <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography style={{ fontWeight: 600 }}>Qualifier Tournament</Typography>
          <Typography variant="caption" color="muted">1 day ago • +75 XP • Advanced to Finals</Typography>
        </div>
        <div style={{ padding: '1rem 0' }}>
          <Typography style={{ fontWeight: 600 }}>Weekly Ranked Match</Typography>
          <Typography variant="caption" color="muted">2 days ago • +25 XP • Rank increased</Typography>
        </div>
      </Stack>
    </Box>
  </Stack>
)

export const Default: Story = {
  args: {
    brandName: 'RSPWN',
    navigation: defaultNavigation,
    teams: defaultTeams,
    settingsItem: { name: 'Settings', href: '#settings', icon: '⚙️', current: false },
    userProfile: defaultUser,
    showSearch: true,
    children: <DashboardContent />
  }
}

export const WithoutTeams: Story = {
  args: {
    brandName: 'RSPWN',
    navigation: defaultNavigation,
    settingsItem: { name: 'Settings', href: '#settings', icon: '⚙️', current: false },
    userProfile: defaultUser,
    showSearch: true,
    children: <DashboardContent />
  }
}

export const WithoutSearch: Story = {
  args: {
    brandName: 'RSPWN',
    navigation: defaultNavigation,
    teams: defaultTeams,
    settingsItem: { name: 'Settings', href: '#settings', icon: '⚙️', current: false },
    userProfile: defaultUser,
    showSearch: false,
    children: <DashboardContent />
  }
}

export const MinimalNavigation: Story = {
  args: {
    brandName: 'RSPWN',
    navigation: [
      { name: 'Dashboard', href: '#dashboard', icon: '🎯', current: true },
      { name: 'Profile', href: '#profile', icon: '👤', current: false },
      { name: 'Settings', href: '#settings', icon: '⚙️', current: false }
    ],
    userProfile: defaultUser,
    showSearch: false,
    children: (
      <div style={{ padding: '2rem' }}>
        <Typography variant="heading">Simple Dashboard</Typography>
        <Typography color="muted" style={{ marginTop: '1rem' }}>
          A minimal dashboard with essential navigation only.
        </Typography>
      </div>
    )
  }
}

export const GamingTeams: Story = {
  args: {
    brandName: 'RSPWN',
    navigation: [
      { name: 'Overview', href: '#overview', icon: '🎯', current: false },
      { name: 'Live Matches', href: '#live', icon: '🔴', current: true },
      { name: 'Tournaments', href: '#tournaments', icon: '🏆', current: false },
      { name: 'Leaderboard', href: '#leaderboard', icon: '📊', current: false },
      { name: 'Training', href: '#training', icon: '🎯', current: false }
    ],
    teams: [
      { id: 1, name: 'Fnatic', href: '#fnatic', initial: 'F', current: false },
      { id: 2, name: 'Team Liquid', href: '#liquid', initial: 'T', current: true },
      { id: 3, name: 'G2 Esports', href: '#g2', initial: 'G', current: false },
      { id: 4, name: 'Cloud9', href: '#cloud9', initial: 'C', current: false }
    ],
    settingsItem: { name: 'Tournament Settings', href: '#settings', icon: '⚙️', current: false },
    userProfile: {
      name: 'ProPlayer2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      menuItems: [
        { name: 'Player Stats', href: '#stats' },
        { name: 'Account Settings', href: '#account' },
        { name: 'Sign out', href: '#signout' }
      ]
    },
    children: (
      <Stack variant="loose">
        <div>
          <Typography variant="heading">Live Tournament Dashboard</Typography>
          <Typography color="muted" style={{ marginTop: '0.5rem' }}>
            Monitor active tournaments and team performance
          </Typography>
        </div>
        
        <Box variant="section">
          <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Active Tournaments</Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Box variant="card" style={{ padding: '1.5rem' }}>
              <Typography variant="label" style={{ color: '#4A9EFF', marginBottom: '0.5rem', display: 'block' }}>
                LIVE NOW
              </Typography>
              <Typography variant="subheading" style={{ marginBottom: '0.5rem' }}>
                World Championship
              </Typography>
              <Typography color="muted">Team Liquid vs Fnatic</Typography>
            </Box>
            
            <Box variant="card" style={{ padding: '1.5rem' }}>
              <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block' }}>
                Starting Soon
              </Typography>
              <Typography variant="subheading" style={{ marginBottom: '0.5rem' }}>
                Regional Finals
              </Typography>
              <Typography color="muted">G2 Esports vs Cloud9</Typography>
            </Box>
          </div>
        </Box>
      </Stack>
    )
  }
}

export const CustomBranding: Story = {
  args: {
    brandName: 'GameStudio',
    navigation: [
      { name: 'Projects', href: '#projects', icon: '📁', current: true },
      { name: 'Assets', href: '#assets', icon: '🎨', current: false },
      { name: 'Team', href: '#team', icon: '👥', current: false },
      { name: 'Analytics', href: '#analytics', icon: '📈', current: false }
    ],
    teams: [
      { id: 1, name: 'Design Team', href: '#design', initial: 'D', current: false },
      { id: 2, name: 'Development', href: '#dev', initial: 'D', current: false }
    ],
    settingsItem: { name: 'Studio Settings', href: '#settings', icon: '⚙️', current: false },
    userProfile: {
      name: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      menuItems: [
        { name: 'Profile', href: '#profile' },
        { name: 'Studio Settings', href: '#studio' },
        { name: 'Sign out', href: '#signout' }
      ]
    },
    children: (
      <div style={{ padding: '2rem' }}>
        <Typography variant="heading">Game Studio Dashboard</Typography>
        <Typography color="muted" style={{ marginTop: '1rem' }}>
          Manage your game development projects and team collaboration.
        </Typography>
      </div>
    )
  }
}