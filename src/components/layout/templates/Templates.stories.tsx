import type { Meta, StoryObj } from '@storybook/react'
import { LandingPageTemplate, DashboardTemplate, ArticleTemplate, ProductGridTemplate, CheckoutTemplate } from './index'
import { Container } from '../../foundation/Container'
import { Typography } from '../../foundation/Typography'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import { Grid } from '../../foundation/Grid'
import { Box } from '../../foundation/Box'
import { Flex } from '../../foundation/Flex'
import { Input } from '../../ui/Input'
import { Badge } from '../../ui/Badge'

const meta: Meta = {
  title: 'Layout/Templates',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Layout Templates

Pre-built layout templates for common website patterns. These templates combine foundation components into complete layouts that ensure consistency and best practices.

## Available Templates

- **Landing Page**: Hero sections, features, testimonials, CTAs
- **Dashboard**: Admin interfaces with sidebar navigation
- **Article**: Blog posts and documentation layouts
- **Product Grid**: E-commerce product listings with filters
- **Checkout**: Multi-step checkout flows with order summary

## Template Configuration

All templates support configuration for spacing, theme, and layout:

\`\`\`typescript
<LandingPageTemplate config={{ spacing: 'relaxed', theme: 'gaming', layout: 'wide' }}>
  <LandingPageTemplate.Hero>
    <Container size="lg" centerContent>
      <Typography variant="h1">Welcome to RSPWN</Typography>
      <Button size="lg">Get Started</Button>
    </Container>
  </LandingPageTemplate.Hero>
</LandingPageTemplate>
\`\`\`

## Best Practices

- Use semantic HTML elements with proper ARIA labels
- Ensure responsive behavior across all breakpoints
- Follow consistent spacing and typography patterns
- Include proper navigation and accessibility features
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Landing Page Template
export const LandingPage: StoryObj = {
  render: () => (
    <LandingPageTemplate>
      <LandingPageTemplate.Hero>
        <Container size="lg" centerContent>
          <Typography variant="h1" fontSize="4xl" marginBottom={6} textAlign="center">
            Welcome to RSPWN Gaming Platform
          </Typography>
          <Typography variant="body1" fontSize="lg" color="muted" marginBottom={8} textAlign="center" maxWidth="600px">
            The ultimate gaming platform for competitive players. Join millions of gamers worldwide.
          </Typography>
          <Flex gap={4} justifyContent="center">
            <Button size="lg" variant="primary">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </Flex>
        </Container>
      </LandingPageTemplate.Hero>

      <LandingPageTemplate.Features>
        <Container size="lg">
          <Typography variant="h2" textAlign="center" marginBottom={12}>
            Powerful Features
          </Typography>
          <Grid columns={{ xs: 1, md: 3 }} gap={8}>
            <Card padding={6} textAlign="center">
              <Box width="60px" height="60px" background="innovation.primaryBlue" borderRadius="full" marginX={"auto"} marginBottom={4} />
              <Typography variant="h3" marginBottom={3}>Real-time Analytics</Typography>
              <Typography color="muted">Track your gaming performance with detailed analytics and insights.</Typography>
            </Card>
            <Card padding={6} textAlign="center">
              <Box width="60px" height="60px" background="semantic.success" borderRadius="full" marginX={"auto"} marginBottom={4} />
              <Typography variant="h3" marginBottom={3}>Tournament Mode</Typography>
              <Typography color="muted">Compete in tournaments with players from around the world.</Typography>
            </Card>
            <Card padding={6} textAlign="center">
              <Box width="60px" height="60px" background="semantic.warning" borderRadius="full" marginX={"auto"} marginBottom={4} />
              <Typography variant="h3" marginBottom={3}>Team Management</Typography>
              <Typography color="muted">Create and manage your gaming team with advanced tools.</Typography>
            </Card>
          </Grid>
        </Container>
      </LandingPageTemplate.Features>

      <LandingPageTemplate.Testimonials>
        <Container size="lg">
          <Typography variant="h2" textAlign="center" marginBottom={12}>
            What Gamers Say
          </Typography>
          <Grid columns={{ xs: 1, md: 2 }} gap={8}>
            <Card padding={6}>
              <Typography variant="body1" marginBottom={4}>
                "RSPWN has completely transformed my gaming experience. The analytics help me improve my gameplay significantly."
              </Typography>
              <Flex gap={3} alignItems="center">
                <Box width="40px" height="40px" background="gray.base" borderRadius="full" />
                <Box>
                  <Typography fontWeight="medium">Alex Chen</Typography>
                  <Typography variant="body2" color="muted">Pro Gamer</Typography>
                </Box>
              </Flex>
            </Card>
            <Card padding={6}>
              <Typography variant="body1" marginBottom={4}>
                "The tournament features are incredible. I've won three competitions already using this platform."
              </Typography>
              <Flex gap={3} alignItems="center">
                <Box width="40px" height="40px" background="gray.base" borderRadius="full" />
                <Box>
                  <Typography fontWeight="medium">Sarah Johnson</Typography>
                  <Typography variant="body2" color="muted">Competitive Player</Typography>
                </Box>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </LandingPageTemplate.Testimonials>

      <LandingPageTemplate.CTA>
        <Container size="lg" centerContent>
          <Typography variant="h2" marginBottom={4} textAlign="center" color="white">
            Ready to Level Up?
          </Typography>
          <Typography variant="body1" marginBottom={6} textAlign="center" color="white" opacity="0.9">
            Join thousands of gamers who have improved their skills with RSPWN.
          </Typography>
          <Button size="lg" variant="secondary">Start Your Journey</Button>
        </Container>
      </LandingPageTemplate.CTA>

      <LandingPageTemplate.Footer>
        <Container size="lg">
          <Grid columns={{ xs: 1, md: 4 }} gap={8} marginBottom={8}>
            <Box>
              <Typography variant="h5" color="white" marginBottom={4}>RSPWN</Typography>
              <Typography variant="body2" color="gray.light">
                The ultimate gaming platform for competitive players worldwide.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="white" marginBottom={3}>Product</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>Features</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>Pricing</Typography>
              <Typography variant="body2" color="gray.light">Support</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="white" marginBottom={3}>Company</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>About</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>Blog</Typography>
              <Typography variant="body2" color="gray.light">Careers</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="white" marginBottom={3}>Connect</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>Twitter</Typography>
              <Typography variant="body2" color="gray.light" marginBottom={2}>Discord</Typography>
              <Typography variant="body2" color="gray.light">GitHub</Typography>
            </Box>
          </Grid>
          <Box borderTop="1px solid" borderColor="gray.border" paddingTop={6}>
            <Typography variant="body2" color="gray.light" textAlign="center">
              © 2024 RSPWN. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </LandingPageTemplate.Footer>
    </LandingPageTemplate>
  )
}

// Dashboard Template
export const Dashboard: StoryObj = {
  render: () => (
    <DashboardTemplate>
      <DashboardTemplate.Header background="dark">
        <Flex justifyContent="between" alignItems="center" width="100%">
          <Typography variant="h5" color="white">RSPWN Dashboard</Typography>
          <Flex gap={4} alignItems="center">
            <Badge variant="success">Online</Badge>
            <Box width="32px" height="32px" background="innovation.primaryBlue" borderRadius="full" />
          </Flex>
        </Flex>
      </DashboardTemplate.Header>

      <DashboardTemplate.Sidebar width="250px">
        <Box padding={6}>
          <Typography variant="h6" marginBottom={6}>Navigation</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              📊 Dashboard
            </Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              🎮 Games
            </Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              🏆 Tournaments
            </Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              👥 Teams
            </Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              📈 Analytics
            </Button>
            <Button variant="ghost" width="100%" justifyContent="flex-start">
              ⚙️ Settings
            </Button>
          </Box>
        </Box>
      </DashboardTemplate.Sidebar>

      <DashboardTemplate.Main>
        <Typography variant="h4" marginBottom={6}>Welcome back, Player!</Typography>
        
        <Grid columns={{ xs: 1, md: 3 }} gap={6} marginBottom={8}>
          <Card padding={6}>
            <Typography variant="h6" marginBottom={2}>Total Games</Typography>
            <Typography variant="h2" color="innovation.primaryBlue">1,247</Typography>
            <Typography variant="body2" color="semantic.success">+12% this week</Typography>
          </Card>
          <Card padding={6}>
            <Typography variant="h6" marginBottom={2}>Win Rate</Typography>
            <Typography variant="h2" color="semantic.success">73.5%</Typography>
            <Typography variant="body2" color="semantic.success">+2.3% this week</Typography>
          </Card>
          <Card padding={6}>
            <Typography variant="h6" marginBottom={2}>Ranking</Typography>
            <Typography variant="h2" color="semantic.warning">#157</Typography>
            <Typography variant="body2" color="semantic.success">+5 positions</Typography>
          </Card>
        </Grid>

        <Card padding={6}>
          <Typography variant="h5" marginBottom={4}>Recent Activity</Typography>
          <Box display="flex" flexDirection="column" gap={4}>
            {[1, 2, 3].map((i) => (
              <Flex key={i} gap={4} alignItems="center" padding={3} background="gray.subtle" borderRadius="md">
                <Box width="32px" height="32px" background="innovation.primaryBlue" borderRadius="full" />
                <Box flex="1">
                  <Typography variant="body2">Victory in Tournament Match #{i}</Typography>
                  <Typography variant="caption" color="muted">2 hours ago</Typography>
                </Box>
                <Badge variant="success">+50 XP</Badge>
              </Flex>
            ))}
          </Box>
        </Card>
      </DashboardTemplate.Main>

      <DashboardTemplate.Footer>
        <Typography variant="body2" color="muted" textAlign="center">
          © 2024 RSPWN Dashboard. Version 2.1.0
        </Typography>
      </DashboardTemplate.Footer>
    </DashboardTemplate>
  )
}

// Article Template
export const Article: StoryObj = {
  render: () => (
    <ArticleTemplate>
      <ArticleTemplate.Header>
        <Typography variant="h1" marginBottom={4}>
          Getting Started with RSPWN Gaming Platform
        </Typography>
        <Flex gap={4} justifyContent="center" alignItems="center">
          <Typography variant="body2" color="muted">By Alex Chen</Typography>
          <Typography variant="body2" color="muted">•</Typography>
          <Typography variant="body2" color="muted">December 15, 2024</Typography>
          <Typography variant="body2" color="muted">•</Typography>
          <Typography variant="body2" color="muted">5 min read</Typography>
        </Flex>
      </ArticleTemplate.Header>

      <ArticleTemplate.Content>
        <Typography variant="body1" marginBottom={6}>
          Welcome to the ultimate guide for getting started with the RSPWN Gaming Platform. 
          Whether you're a casual gamer or aspiring professional, this comprehensive guide will 
          help you make the most of our platform's powerful features.
        </Typography>

        <Typography variant="h2" marginBottom={4}>
          Setting Up Your Profile
        </Typography>

        <Typography variant="body1" marginBottom={4}>
          The first step to success on RSPWN is creating a comprehensive profile. Here's what you need to know:
        </Typography>

        <Box as="ul" marginBottom={6} paddingLeft={6}>
          <Box as="li" marginBottom={2}>
            <Typography variant="body1">Choose a unique username that represents your gaming identity</Typography>
          </Box>
          <Box as="li" marginBottom={2}>
            <Typography variant="body1">Upload a profile picture that stands out in tournaments</Typography>
          </Box>
          <Box as="li" marginBottom={2}>
            <Typography variant="body1">Connect your gaming accounts for comprehensive statistics</Typography>
          </Box>
        </Box>

        <Box as="blockquote" padding={4} background="gray.subtle" borderLeft="4px solid" borderColor="innovation.primaryBlue" marginBottom={6}>
          <Typography variant="body1" fontStyle="italic">
            "A well-optimized profile is the foundation of success on any gaming platform. 
            Take time to set it up properly from the start." - Pro Gamer Sarah Johnson
          </Typography>
        </Box>

        <Typography variant="h3" marginBottom={4}>
          Understanding the Dashboard
        </Typography>

        <Typography variant="body1" marginBottom={6}>
          Your dashboard is mission control for all gaming activities. From here, you can track performance, 
          join tournaments, manage teams, and analyze your gameplay patterns.
        </Typography>

        <Card padding={4} background="dark" color="white" marginBottom={6}>
          <Typography variant="body2" fontFamily="monospace">
            # Quick Dashboard Navigation{'\n'}
            • Games → View match history and statistics{'\n'}
            • Tournaments → Join upcoming competitions{'\n'}
            • Teams → Create or join gaming teams{'\n'}
            • Analytics → Deep dive into performance metrics
          </Typography>
        </Card>

        <Typography variant="h2" marginBottom={4}>
          Your First Tournament
        </Typography>

        <Typography variant="body1" marginBottom={6}>
          Participating in tournaments is where RSPWN truly shines. Our matchmaking system ensures 
          fair competition while providing opportunities for skill development and recognition.
        </Typography>
      </ArticleTemplate.Content>

      <ArticleTemplate.Sidebar>
        <Card padding={4} marginBottom={6}>
          <Typography variant="h6" marginBottom={4}>Table of Contents</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="body2" color="innovation.primaryBlue">Setting Up Your Profile</Typography>
            <Typography variant="body2" color="muted">Understanding the Dashboard</Typography>
            <Typography variant="body2" color="muted">Your First Tournament</Typography>
            <Typography variant="body2" color="muted">Team Management</Typography>
            <Typography variant="body2" color="muted">Analytics & Insights</Typography>
          </Box>
        </Card>

        <Card padding={4} marginBottom={6}>
          <Typography variant="h6" marginBottom={4}>Related Articles</Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box>
              <Typography variant="body2" fontWeight="medium" marginBottom={1}>
                Advanced Tournament Strategies
              </Typography>
              <Typography variant="caption" color="muted">Pro tips for competitive play</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium" marginBottom={1}>
                Team Building Guide
              </Typography>
              <Typography variant="caption" color="muted">Create winning team dynamics</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="medium" marginBottom={1}>
                Performance Analytics Deep Dive
              </Typography>
              <Typography variant="caption" color="muted">Understanding your stats</Typography>
            </Box>
          </Box>
        </Card>

        <Card padding={4}>
          <Typography variant="h6" marginBottom={3}>About the Author</Typography>
          <Flex gap={3} alignItems="center" marginBottom={3}>
            <Box width="48px" height="48px" background="innovation.primaryBlue" borderRadius="full" />
            <Box>
              <Typography variant="body2" fontWeight="medium">Alex Chen</Typography>
              <Typography variant="caption" color="muted">Senior Gaming Strategist</Typography>
            </Box>
          </Flex>
          <Typography variant="body2" color="muted">
            Professional gamer with 8+ years of competitive experience. 
            Expert in tournament strategy and team management.
          </Typography>
        </Card>
      </ArticleTemplate.Sidebar>

      <ArticleTemplate.Footer>
        <Flex justifyContent="between" alignItems="center">
          <Typography variant="body2" color="muted">
            Published on December 15, 2024 • Last updated December 20, 2024
          </Typography>
          <Flex gap={3}>
            <Button variant="ghost" size="sm">Share</Button>
            <Button variant="ghost" size="sm">Bookmark</Button>
          </Flex>
        </Flex>
      </ArticleTemplate.Footer>
    </ArticleTemplate>
  )
}

// Product Grid Template
export const ProductGrid: StoryObj = {
  render: () => (
    <ProductGridTemplate>
      <ProductGridTemplate.Header>
        <Typography variant="h4">Gaming Gear</Typography>
        <Flex gap={3} alignItems="center">
          <Typography variant="body2" color="muted">Showing 24 of 156 products</Typography>
          <Button variant="outline" size="sm">Sort by Price</Button>
        </Flex>
      </ProductGridTemplate.Header>

      <ProductGridTemplate.Filters>
        <Typography variant="h6" marginBottom={4}>Filters</Typography>
        
        <Box marginBottom={6}>
          <Typography variant="body2" fontWeight="medium" marginBottom={3}>Category</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              <Typography variant="body2">Gaming Headsets</Typography>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">Mechanical Keyboards</Typography>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">Gaming Mice</Typography>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">Gaming Chairs</Typography>
            </label>
          </Box>
        </Box>

        <Box marginBottom={6}>
          <Typography variant="body2" fontWeight="medium" marginBottom={3}>Price Range</Typography>
          <Box display="flex" gap={2} marginBottom={2}>
            <Input placeholder="Min" size="sm" />
            <Input placeholder="Max" size="sm" />
          </Box>
          <Button variant="outline" size="sm" width="100%">Apply</Button>
        </Box>

        <Box>
          <Typography variant="body2" fontWeight="medium" marginBottom={3}>Brand</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">RSPWN Pro</Typography>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">GameForce</Typography>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              <Typography variant="body2">UltraGaming</Typography>
            </label>
          </Box>
        </Box>
      </ProductGridTemplate.Filters>

      <ProductGridTemplate.Results>
        <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} padding={0} overflow="hidden">
              <Box height="200px" background="gray.subtle" marginBottom={4} />
              <Box padding={4}>
                <Typography variant="body1" fontWeight="medium" marginBottom={2}>
                  RSPWN Pro Gaming Headset {i + 1}
                </Typography>
                <Typography variant="body2" color="muted" marginBottom={3}>
                  Premium wireless gaming headset with 7.1 surround sound
                </Typography>
                <Flex justifyContent="between" alignItems="center" marginBottom={3}>
                  <Typography variant="h6" color="innovation.primaryBlue">$199.99</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">4.8</Typography>
                    <Typography variant="body2" color="semantic.warning">★</Typography>
                  </Box>
                </Flex>
                <Button width="100%" size="sm">Add to Cart</Button>
              </Box>
            </Card>
          ))}
        </Grid>
      </ProductGridTemplate.Results>

      <ProductGridTemplate.Footer>
        <Typography variant="body2" color="muted">
          © 2024 RSPWN Gaming Store. All rights reserved.
        </Typography>
      </ProductGridTemplate.Footer>
    </ProductGridTemplate>
  )
}

// Checkout Template
export const Checkout: StoryObj = {
  render: () => (
    <CheckoutTemplate>
      <CheckoutTemplate.Header>
        <Typography variant="h3" marginBottom={2}>Checkout</Typography>
        <Typography variant="body1" color="muted">
          Complete your order in just a few simple steps
        </Typography>
      </CheckoutTemplate.Header>

      <CheckoutTemplate.Form>
        <CheckoutTemplate.Step number={1} title="Shipping Information" active>
          <Grid columns={{ xs: 1, md: 2 }} gap={4}>
            <Input label="First Name" placeholder="Enter first name" />
            <Input label="Last Name" placeholder="Enter last name" />
            <Input label="Email" placeholder="Enter email address" style={{ gridColumn: '1 / -1' }} />
            <Input label="Address" placeholder="Street address" style={{ gridColumn: '1 / -1' }} />
            <Input label="City" placeholder="Enter city" />
            <Input label="ZIP Code" placeholder="Enter ZIP" />
          </Grid>
        </CheckoutTemplate.Step>

        <CheckoutTemplate.Step number={2} title="Payment Method">
          <Box marginBottom={4}>
            <Typography variant="body2" fontWeight="medium" marginBottom={3}>Select Payment Method</Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Card padding={3} border="2px solid" borderColor="innovation.primaryBlue">
                <Flex alignItems="center" gap={3}>
                  <input type="radio" name="payment" defaultChecked />
                  <Typography variant="body2">Credit Card</Typography>
                </Flex>
              </Card>
              <Card padding={3} border="1px solid" borderColor="gray.border">
                <Flex alignItems="center" gap={3}>
                  <input type="radio" name="payment" />
                  <Typography variant="body2">PayPal</Typography>
                </Flex>
              </Card>
              <Card padding={3} border="1px solid" borderColor="gray.border">
                <Flex alignItems="center" gap={3}>
                  <input type="radio" name="payment" />
                  <Typography variant="body2">Apple Pay</Typography>
                </Flex>
              </Card>
            </Box>
          </Box>

          <Grid columns={{ xs: 1, md: 2 }} gap={4}>
            <Input label="Card Number" placeholder="1234 5678 9012 3456" style={{ gridColumn: '1 / -1' }} />
            <Input label="Expiry Date" placeholder="MM/YY" />
            <Input label="CVV" placeholder="123" />
          </Grid>
        </CheckoutTemplate.Step>

        <CheckoutTemplate.Step number={3} title="Review Order">
          <Typography variant="body1" color="muted">
            Please review your order details before completing the purchase.
          </Typography>
        </CheckoutTemplate.Step>
      </CheckoutTemplate.Form>

      <CheckoutTemplate.Summary>
        <Typography variant="h6" marginBottom={4}>Order Summary</Typography>
        
        <div className="summary-section">
          <Typography variant="body2" fontWeight="medium" marginBottom={3}>Items (2)</Typography>
          <div className="summary-item">
            <Typography variant="body2">RSPWN Pro Gaming Headset</Typography>
            <Typography variant="body2">$199.99</Typography>
          </div>
          <div className="summary-item">
            <Typography variant="body2">Gaming Mouse Pad XL</Typography>
            <Typography variant="body2">$39.99</Typography>
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-item">
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="body2">$239.98</Typography>
          </div>
          <div className="summary-item">
            <Typography variant="body2">Shipping</Typography>
            <Typography variant="body2">$9.99</Typography>
          </div>
          <div className="summary-item">
            <Typography variant="body2">Tax</Typography>
            <Typography variant="body2">$19.99</Typography>
          </div>
          <div className="summary-item total">
            <Typography variant="body1" fontWeight="bold">Total</Typography>
            <Typography variant="body1" fontWeight="bold" color="innovation.primaryBlue">$269.96</Typography>
          </div>
        </div>

        <Button width="100%" size="lg" marginTop={4}>
          Complete Order
        </Button>
      </CheckoutTemplate.Summary>

      <CheckoutTemplate.Footer>
        <Typography variant="body2" color="muted" textAlign="center">
          Secure checkout powered by RSPWN • All transactions are encrypted
        </Typography>
      </CheckoutTemplate.Footer>
    </CheckoutTemplate>
  )
}