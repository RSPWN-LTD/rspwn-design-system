# AI Quick Start Guide - RSPWN Design System

**For AI agents: Use these simplified components for rapid, responsive website development.**

## 🚀 Key Components for AI Usage

### ResponsiveSection - Auto-responsive sections
```jsx
import { ResponsiveSection, Typography, Button } from '@rspwn/design-system'

// Automatically responsive - no manual breakpoint configuration needed
<ResponsiveSection variant="hero" background="default">
  <Typography variant="h1" mb={6}>
    Welcome to RSPWN
  </Typography>
  <Typography variant="body1" color="secondary" mb={8}>
    Build amazing gaming experiences with professional-grade components.
  </Typography>
  <Button variant="primary" size="lg">
    Get Started
  </Button>
</ResponsiveSection>
```

### ResponsiveGrid - Pre-configured responsive grids
```jsx
import { ResponsiveGrid, Card } from '@rspwn/design-system'

// Automatically responsive card grid (1->2->3->4 columns)
<ResponsiveGrid pattern="cards">
  <Card>
    <Card.Content>
      <Typography variant="h3">Feature 1</Typography>
      <Typography variant="body2">Description text</Typography>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Typography variant="h3">Feature 2</Typography>
      <Typography variant="body2">Description text</Typography>
    </Card.Content>
  </Card>
</ResponsiveGrid>
```

### Card with Automatic Padding
```jsx
// Card sub-components now have default padding - no manual p={6} needed
<Card>
  <Card.Header>
    <Typography variant="h3">Card Title</Typography>
  </Card.Header>
  <Card.Content>
    <Typography variant="body1">Card content with automatic padding</Typography>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>
```

### Grid with Default Spacing
```jsx
// Grid now has default gap={4} - no manual gap specification needed
<Grid templateColumns="repeat(3, 1fr)">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## 📋 AI Usage Patterns

### Simple Hero Section
```jsx
<ResponsiveSection variant="hero" background="default" containerSize="lg">
  <Stack spacing={8} align="center" textAlign="center">
    <Typography variant="brand" color="primary">RSPWN</Typography>
    <Typography variant="h1" maxWidth="800px">
      The Future of Gaming is Here
    </Typography>
    <Typography variant="body1" color="secondary" maxWidth="600px">
      Professional components designed for modern gaming and AI platforms.
    </Typography>
    <Stack direction="horizontal" spacing={4}>
      <Button variant="primary" size="lg">Get Started</Button>
      <Button variant="secondary" size="lg">Learn More</Button>
    </Stack>
  </Stack>
</ResponsiveSection>
```

### Features Section
```jsx
<ResponsiveSection variant="content" background="subtle" containerSize="lg">
  <Typography variant="h2" textAlign="center" mb={12}>
    Platform Features
  </Typography>
  
  <ResponsiveGrid pattern="features">
    <Card>
      <Card.Content>
        <Typography variant="h3" mb={4}>AI-Powered</Typography>
        <Typography variant="body2" color="secondary">
          Advanced algorithms enhance your gaming experience.
        </Typography>
      </Card.Content>
    </Card>
    
    <Card>
      <Card.Content>
        <Typography variant="h3" mb={4}>Real-time Analytics</Typography>
        <Typography variant="body2" color="secondary">
          Monitor performance with detailed insights.
        </Typography>
      </Card.Content>
    </Card>
    
    <Card>
      <Card.Content>
        <Typography variant="h3" mb={4}>Community Driven</Typography>
        <Typography variant="body2" color="secondary">
          Open-source development with community input.
        </Typography>
      </Card.Content>
    </Card>
  </ResponsiveGrid>
</ResponsiveSection>
```

### Stats Section
```jsx
<ResponsiveSection variant="accent" background="accent" containerSize="lg">
  <Typography variant="h2" textAlign="center" color="white" mb={12}>
    Platform Statistics
  </Typography>
  
  <ResponsiveGrid pattern="stats">
    <Box textAlign="center">
      <Typography variant="h1" color="primary">1M+</Typography>
      <Typography variant="body1" color="white">Active Users</Typography>
    </Box>
    <Box textAlign="center">
      <Typography variant="h1" color="primary">500K</Typography>
      <Typography variant="body1" color="white">Games Played</Typography>
    </Box>
    <Box textAlign="center">
      <Typography variant="h1" color="primary">99.9%</Typography>
      <Typography variant="body1" color="white">Uptime</Typography>
    </Box>
    <Box textAlign="center">
      <Typography variant="h1" color="primary">24/7</Typography>
      <Typography variant="body1" color="white">Support</Typography>
    </Box>
  </ResponsiveGrid>
</ResponsiveSection>
```

## 🎯 Quick Website Template
```jsx
import React from 'react'
import { 
  ThemeProvider,
  ResponsiveSection,
  ResponsiveGrid,
  Typography,
  Button,
  Card,
  Navigation,
  Footer,
  Stack,
  Box,
  theme
} from '@rspwn/design-system'

function RSPWNWebsite() {
  return (
    <ThemeProvider theme={theme}>
      {/* Navigation */}
      <Navigation 
        items={[
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'About', href: '#about' }
        ]}
      />
      
      {/* Hero Section */}
      <ResponsiveSection variant="hero" background="default" containerSize="lg">
        <Stack spacing={8} align="center" textAlign="center">
          <Typography variant="brand" color="primary">RSPWN</Typography>
          <Typography variant="h1">Welcome to the Future</Typography>
          <Typography variant="body1" color="secondary" maxWidth="600px">
            Professional gaming platform with AI-powered features.
          </Typography>
          <Button variant="primary" size="lg">Get Started</Button>
        </Stack>
      </ResponsiveSection>
      
      {/* Features */}
      <ResponsiveSection variant="content" background="subtle" containerSize="lg">
        <Typography variant="h2" textAlign="center" mb={12}>Features</Typography>
        <ResponsiveGrid pattern="features">
          <Card>
            <Card.Content>
              <Typography variant="h3" mb={4}>Feature 1</Typography>
              <Typography variant="body2" color="secondary">
                Description of first feature.
              </Typography>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Typography variant="h3" mb={4}>Feature 2</Typography>
              <Typography variant="body2" color="secondary">
                Description of second feature.
              </Typography>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Typography variant="h3" mb={4}>Feature 3</Typography>
              <Typography variant="body2" color="secondary">
                Description of third feature.
              </Typography>
            </Card.Content>
          </Card>
        </ResponsiveGrid>
      </ResponsiveSection>
      
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  )
}

export default RSPWNWebsite
```

## ⚡ Key Benefits for AI

1. **No Manual Responsive Configuration** - Components are responsive by default
2. **Automatic Spacing** - Cards, grids, and sections have sensible defaults
3. **Pre-built Patterns** - Common layouts (cards, features, stats) ready to use
4. **Consistent Branding** - Typography and colors follow RSPWN guidelines automatically
5. **Professional Polish** - High-quality design without manual tweaking

## 📚 Available Responsive Patterns

### Grid Patterns
- `pattern="cards"` - 1->2->3->4 columns for product/feature cards
- `pattern="features"` - 1->2->3 columns for feature highlights
- `pattern="articles"` - 1->2 columns for blog/article layouts
- `pattern="stats"` - 2->4 columns for statistics/metrics

### Section Variants  
- `variant="hero"` - Large padding, hero content
- `variant="content"` - Standard content sections
- `variant="feature"` - Medium padding for features
- `variant="accent"` - Highlighted sections

### Container Sizes
- `size="sm"` - Narrower content (max-width: md)
- `size="md"` - Standard content (max-width: lg) 
- `size="lg"` - Wide content (max-width: xl)
- `size="xl"` - Full-width content (max-width: xxl)