import type { Meta, StoryObj } from '@storybook/react'
import { LandingPageTemplate, DashboardTemplate } from './index'
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
        <Stack variant="loose">
          <Typography variant="brand">RSPWN</Typography>
          <Typography variant="heading">
            The Ultimate Competitive Gaming Platform
          </Typography>
          <Typography color="muted" style={{ fontSize: '1.25rem' }}>
            Join millions of professional gamers worldwide. Experience next-generation competitive gaming with cutting-edge technology.
          </Typography>
          <Stack variant="tight" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ 
              background: '#4A9EFF', 
              padding: '0.875rem 2rem', 
              borderRadius: '0.375rem', 
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3B8EF0';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4A9EFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <Typography style={{ fontWeight: 600, color: 'white' }}>Get Started</Typography>
            </div>
            <div style={{ 
              border: '2px solid #4A9EFF', 
              padding: '0.75rem 2rem', 
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4A9EFF20';
              e.currentTarget.style.borderColor = '#3B8EF0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#4A9EFF';
            }}>
              <Typography style={{ fontWeight: 600, color: '#4A9EFF' }}>Watch Demo</Typography>
            </div>
          </Stack>
        </Stack>
      </LandingPageTemplate.Hero>

      <LandingPageTemplate.Features>
        <Grid variant="cards">
          <Box variant="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#4A9EFF', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Typography style={{ fontSize: '2rem' }}>⚡</Typography>
            </div>
            <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Lightning Fast</Typography>
            <Typography color="muted">
              Ultra-low latency gaming with optimized performance for competitive play
            </Typography>
          </Box>
          
          <Box variant="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#8B5CF6', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Typography style={{ fontSize: '2rem' }}>🎯</Typography>
            </div>
            <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Precision Control</Typography>
            <Typography color="muted">
              Advanced input systems and customizable controls for every gaming style
            </Typography>
          </Box>
          
          <Box variant="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#374151', width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Typography style={{ fontSize: '2rem' }}>🛡️</Typography>
            </div>
            <Typography variant="subheading" style={{ marginBottom: '1rem' }}>Secure Platform</Typography>
            <Typography color="muted">
              Enterprise-grade security with advanced anti-cheat and data protection
            </Typography>
          </Box>
        </Grid>
      </LandingPageTemplate.Features>

      <LandingPageTemplate.About>
        <Typography variant="body" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          RSPWN represents the evolution of competitive gaming platforms. Built by professional gamers for professional gamers, 
          we provide the tools, infrastructure, and community needed to excel in the modern esports landscape.
        </Typography>
        <Typography variant="body" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          Our platform combines cutting-edge technology with proven gaming methodologies to deliver an unmatched competitive experience. 
          From tournament organization to performance analytics, RSPWN is your complete esports solution.
        </Typography>
      </LandingPageTemplate.About>

      <LandingPageTemplate.CTA>
        <Stack variant="tight">
          <Typography variant="heading">Ready to Dominate?</Typography>
          <Typography color="muted" style={{ fontSize: '1.125rem' }}>
            Join thousands of professional gamers who trust RSPWN for competitive excellence
          </Typography>
          <div style={{ 
            background: '#4A9EFF', 
            padding: '0.875rem 2rem', 
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            alignSelf: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#3B8EF0';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#4A9EFF';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <Typography style={{ fontWeight: 600, color: 'white' }}>Start Your Journey</Typography>
          </div>
        </Stack>
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
    <DashboardTemplate>
      <DashboardTemplate.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Stack variant="nav">
            <Typography style={{ opacity: 0.8 }}>Dashboard</Typography>
            <Typography style={{ opacity: 0.8 }}>Tournaments</Typography>
            <Typography style={{ opacity: 0.8 }}>Analytics</Typography>
            <Typography color="blue">Settings</Typography>
          </Stack>
          <div style={{ background: '#374151', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ fontSize: '1.2rem' }}>👤</Typography>
          </div>
        </div>
      </DashboardTemplate.Header>

      <DashboardTemplate.Sidebar>
        <Stack variant="default">
          <div style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem', 
            backgroundColor: '#4A9EFF20', 
            borderLeft: '3px solid #4A9EFF',
            cursor: 'pointer'
          }}>
            <Typography style={{ fontWeight: 600, color: '#4A9EFF', marginBottom: '0.25rem', display: 'block' }}>🎯 Overview</Typography>
            <Typography variant="caption" color="muted">Main dashboard</Typography>
          </div>
          
          <div style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Typography style={{ fontWeight: 600, marginBottom: '0.25rem', display: 'block' }}>🎮 My Games</Typography>
            <Typography variant="caption" color="muted">Match history</Typography>
          </div>
          
          <div style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Typography style={{ fontWeight: 600, marginBottom: '0.25rem', display: 'block' }}>🏆 Tournaments</Typography>
            <Typography variant="caption" color="muted">Active competitions</Typography>
          </div>
          
          <div style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Typography style={{ fontWeight: 600, marginBottom: '0.25rem', display: 'block' }}>👥 Team</Typography>
            <Typography variant="caption" color="muted">Manage your squad</Typography>
          </div>
          
          <div style={{ 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'} 
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Typography style={{ fontWeight: 600, marginBottom: '0.25rem', display: 'block' }}>📊 Analytics</Typography>
            <Typography variant="caption" color="muted">Performance insights</Typography>
          </div>
        </Stack>
      </DashboardTemplate.Sidebar>

      <DashboardTemplate.Main>
        <Stack variant="loose">
          <div>
            <Typography variant="heading">Welcome back, ProGamer!</Typography>
            <Typography color="muted">Ready to dominate today's matches?</Typography>
          </div>
          
          <Grid variant="cards">
            <Box variant="card">
              <Typography variant="label">Total Matches</Typography>
              <Typography variant="heading" color="blue" style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>1,247</Typography>
              <Typography variant="caption" color="muted">+12% this week</Typography>
            </Box>
            
            <Box variant="card">
              <Typography variant="label">Win Rate</Typography>
              <Typography variant="heading" style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#10B981' }}>89.3%</Typography>
              <Typography variant="caption" color="muted">+2.1% improvement</Typography>
            </Box>
            
            <Box variant="card">
              <Typography variant="label">Global Rank</Typography>
              <Typography variant="heading" style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#F59E0B' }}>#127</Typography>
              <Typography variant="caption" color="muted">+15 positions</Typography>
            </Box>
          </Grid>

          <Box variant="section">
            <Typography variant="subheading">Recent Tournament Activity</Typography>
            <Stack variant="divided">
              <Box variant="inline">
                <Typography style={{ fontWeight: 600 }}>Championship Finals Victory</Typography>
                <Typography variant="caption" color="muted">2 hours ago • +150 XP • +$2,500</Typography>
              </Box>
              <Box variant="inline">
                <Typography style={{ fontWeight: 600 }}>Qualifier Tournament</Typography>
                <Typography variant="caption" color="muted">1 day ago • +75 XP • Advanced to Finals</Typography>
              </Box>
              <Box variant="inline">
                <Typography style={{ fontWeight: 600 }}>Weekly Ranked Match</Typography>
                <Typography variant="caption" color="muted">2 days ago • +25 XP • Rank increased</Typography>
              </Box>
            </Stack>
          </Box>

          <Box variant="section">
            <Typography variant="subheading">Upcoming Matches</Typography>
            <Grid variant="cards">
              <Box variant="card" style={{ padding: '1.5rem' }}>
                <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Tonight 8:00 PM EST</Typography>
                <Typography variant="subheading" style={{ marginBottom: '0.5rem' }}>Pro League Semi-Final</Typography>
                <Typography color="muted">vs Team Phoenix • Best of 5</Typography>
              </Box>
              <Box variant="card" style={{ padding: '1.5rem' }}>
                <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Tomorrow 6:00 PM EST</Typography>
                <Typography variant="subheading" style={{ marginBottom: '0.5rem' }}>Weekly Qualifier</Typography>
                <Typography color="muted">Open bracket • Single elimination</Typography>
              </Box>
              <Box variant="card" style={{ padding: '1.5rem' }}>
                <Typography variant="label" style={{ marginBottom: '0.5rem', display: 'block' }}>This Weekend</Typography>
                <Typography variant="subheading" style={{ marginBottom: '0.5rem' }}>RSPWN Championship</Typography>
                <Typography color="muted">$50,000 prize pool • 64 teams</Typography>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </DashboardTemplate.Main>
    </DashboardTemplate>
  )
}

