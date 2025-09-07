# RSPWN Design System AI Tutorial
**The Ultimate Guide for AI Agents Building with RSPWN Brand Guidelines**

---

## 🎯 MISSION: Creating Brand-Aligned Gaming & AI Experiences

RSPWN represents infinite innovation and community-driven excellence in gaming and AI platforms. This tutorial teaches AI agents to build beautiful, on-brand websites using the RSPWN Design System while strictly following brand guidelines.

## 🎨 BRAND IDENTITY & VISUAL FOUNDATION

### Core Brand Values
- **Open-source innovation**: Community-driven development
- **Forward-thinking**: Cutting-edge technology and design
- **Bold & professional**: Gaming-inspired but enterprise-ready
- **Accessible & inclusive**: High contrast, semantic structure

### Visual Identity Rules

#### Typography System (CRITICAL)
- **RSPWN Brand Name**: ONLY use Audiowide font, uppercase, tight letter-spacing
- **Major Headings**: Audiowide for section titles and key hierarchical elements
- **All Body Content**: Inter font family exclusively
- **Minimum Logo Size**: 16px height minimum
- **Never**: Stretch, distort, add effects, or use Audiowide for body text

#### Color Palette (STRICT ADHERENCE)

**Foundation Colors**
```jsx
// Use these as background foundations
brandBlack: '#000000'    // Primary backgrounds, depth
brandWhite: '#FFFFFF'    // Text, highlights
```

**Innovation Colors** 
```jsx
// Use sparingly for key interactions ONLY
primaryBlue: '#4A9EFF'   // PRIMARY ACTIONS ONLY - buttons, links, CTAs
secondaryPurple: '#8B5CF6' // Premium features, creativity accents
```

**Text Hierarchy**
```jsx
primaryText: '#FFFFFF'    // Headlines, key content
secondaryText: '#CCCCCC'  // Body text, descriptions  
mutedText: '#888888'      // Labels, captions, meta info
```

**Grayscale System**
```jsx
dark: '#0A0A0A'          // Deep backgrounds
gray: '#1A1A1A'          // Card backgrounds, containers
grayLight: '#2A2A2A'     // Subtle borders, dividers
```

## 🚀 QUICK START IMPLEMENTATION

### Essential Setup Pattern
```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button, Typography, Card, Box, theme } from '@rspwn/design-system'

function RSPWNApp() {
  return (
    <ThemeProvider theme={theme}>
      <Box bg="dark" minHeight="100vh" p={8}>
        {/* Brand header - ALWAYS use Audiowide via variant="brand" */}
        <Typography variant="brand" color="primary" mb={4}>
          RSPWN
        </Typography>
        
        {/* Main heading - Audiowide for major headings */}
        <Typography variant="h1" mb={6}>
          Welcome to the Future of Gaming
        </Typography>
        
        {/* Body content - Inter font automatically applied */}
        <Typography variant="body1" color="secondary" mb={8}>
          Build amazing gaming experiences with professional-grade components 
          designed for modern AI and gaming platforms.
        </Typography>
        
        {/* Primary action - ONLY use blue for key interactions */}
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  )
}
```

## 📦 INSTALLATION & SETUP

### Package Installation
```bash
# Install the design system with peer dependencies
npm install @rspwn/design-system styled-components react react-dom
```

### React Compatibility
- **Minimum**: React 18.0.0
- **Recommended**: React ≥18.0.0
- **Fully Tested**: React 18.x, 19.x

### ThemeProvider Setup (REQUIRED)
```jsx
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '@rspwn/design-system'

// CRITICAL: Remove default browser styling
const GlobalStyle = createGlobalStyle`
  /* Reset all default margins, paddings, and styling */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove default HTML/body styling */
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.typography.fonts.body}; /* Inter font */
    background-color: ${({ theme }) => theme.colors.foundation.brandBlack};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove default root styling */
  #root, #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  /* Remove default link styling */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Remove default list styling */
  ul, ol {
    list-style: none;
  }

  /* Remove default button styling */
  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
  }

  /* Remove default input styling */
  input, textarea, select {
    font: inherit;
    background: none;
    border: none;
    outline: none;
  }

  /* Remove default table styling */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Ensure images are responsive */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Remove default fieldset/legend styling */
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  /* Ensure proper focus indicators for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
    outline-offset: 2px;
  }
`

// ALWAYS wrap your entire application
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* All your components go here */}
    </ThemeProvider>
  )
}
```

## 🏗️ COMPLETE COMPONENT LIBRARY & USAGE

### Design Token Access
```jsx
import { 
  theme,      // Complete theme object
  colors,     // Color palette
  typography, // Font scales and families
  spacing,    // Spacing scale
  shadows,    // Shadow definitions
  radius      // Border radius values
} from '@rspwn/design-system'
```

### Available Components - Complete Import Reference

```jsx
// Import design tokens
import { 
  theme, colors, typography, spacing, shadows, radius 
} from '@rspwn/design-system'

// Foundation components (Layout Primitives)
import { 
  Typography, Box, Container, Grid, GridItem, Divider, Flex, Stack, Section, Space
} from '@rspwn/design-system'

// UI components (Interactive Elements)
import {
  Button, Card, Navigation, Footer,
  Input, Checkbox, Select, TextArea, RadioButton, RadioGroup, Switch, DatePicker, Search, Slider,
  Accordion, Modal, ToastProvider, Toaster, Drawer, Tabs, Dropdown, Popover,
  Badge, Avatar, Tooltip, Progress, Alert, Icon, IconCatalog, Image, Rating,
  Breadcrumb, Pagination, Table, Timeline, Stepper, Skeleton
} from '@rspwn/design-system'

// Layout & Templates
import {
  Show, Hide, ShowOnMobile, ShowOnTablet, ShowOnDesktop, 
  HideOnMobile, HideOnTablet, HideOnDesktop,
  BaseTemplate, LandingPageTemplate, DashboardTemplate, 
  ArticleTemplate, ProductGridTemplate, CheckoutTemplate,
  TemplateProvider, Templates
} from '@rspwn/design-system'

// Hooks
import { 
  useToast, useToastHelpers, useTemplateConfig, useTemplateSpacing,
  useTemplateTheme, useTemplateLayout, useMediaQuery, useBreakpoint,
  useCurrentBreakpoint, useBreakpointValue, useScreenSize, 
  useBreakpointMatch, useOrientation
} from '@rspwn/design-system'

// Responsive Utilities
import {
  breakpoints, mediaQueries, createResponsiveProps, createResponsiveSpacing,
  getCurrentBreakpoint, resolveResponsiveValue, matchesBreakpoint
} from '@rspwn/design-system'

// Icon System
import { iconPaths } from '@rspwn/design-system'
```

## 📋 FOUNDATION COMPONENTS (Layout Primitives)

Foundation components provide the structural building blocks for layouts and typography.

#### Typography - Text Rendering System
```jsx
import { Typography } from '@rspwn/design-system'

// Basic usage - Typography now includes sensible default spacing
<Typography variant="brand" color="primary">RSPWN</Typography>
<Typography variant="h1">Major Section Title</Typography>
<Typography variant="body1" color="secondary">
  Primary body content with good readability and automatic spacing.
</Typography>

// Override default spacing when needed
<Typography variant="h1" mb={8}>Custom Large Bottom Margin</Typography>
<Typography variant="body1" mb={6}>More space after this paragraph</Typography>
<Typography variant="body1" mb={0}>No bottom margin on this text</Typography>

// In layout contexts - Typography works great in containers
<Box p={6}>
  <Typography variant="h2">Card Title</Typography>
  <Typography variant="body1">
    Card content with proper spacing automatically applied.
  </Typography>
  <Typography variant="caption" color="muted">
    Additional info with smaller spacing
  </Typography>
</Box>
```

#### Box - Flexible Layout Container
```jsx
import { Box } from '@rspwn/design-system'

// Background containers
<Box bg="dark" p={8}>         {/* Dark section background */}
<Box bg="gray" p={6}>         {/* Card/container background */}
<Box bg="grayLight" p={4}>    {/* Subtle sections */}

// Spacing system (follows design tokens)
<Box p={8}>     {/* Padding all sides */}
<Box px={6} py={4}> {/* Horizontal/vertical padding */}
<Box mb={4}>    {/* Margin bottom */}
<Box mt={8}>    {/* Margin top */}

// Responsive patterns
<Box 
  p={{ xs: 4, md: 8, lg: 12 }}
  bg="dark"
  minHeight="100vh"
>
  Content
</Box>
```

## 🏗️ Layout Best Practices

Understanding the spacing and layout system is crucial for creating professional-looking websites:

### Typography Spacing Strategy
- **Default margins**: All Typography variants now include sensible default bottom margins
- **Override when needed**: Use `mb={0}` to remove spacing, or `mb={8}` for larger gaps
- **Consistent hierarchy**: h1 gets larger margins than body text automatically

```jsx
// ✅ Good - Typography has automatic spacing
<Container maxWidth="xl" py={12}>
  <Typography variant="h1">Welcome to RSPWN</Typography>
  <Typography variant="body1">This paragraph will have proper spacing automatically.</Typography>
  <Typography variant="body1" mb={8}>This paragraph has extra space after it.</Typography>
  <Typography variant="body1" mb={0}>This paragraph has no bottom margin.</Typography>
</Container>

// ❌ Avoid - Manual spacing for every element
<Box p={4}>
  <Typography variant="h1" mb={6}>Welcome to RSPWN</Typography>
  <Typography variant="body1" mb={4}>Manual spacing everywhere.</Typography>
  <Typography variant="body1" mb={4}>Gets tedious and inconsistent.</Typography>
</Box>
```

### Container and Section Structure
- **Always use Container**: Wrap page content for proper max-widths and gutters
- **Section for regions**: Use Section to create semantic page areas
- **Responsive padding**: Container handles responsive gutters automatically

```jsx
// ✅ Professional page structure
<Section bg="dark" py={20}>
  <Container maxWidth="xl">
    <Typography variant="brand">RSPWN</Typography>
    <Typography variant="h1">Gaming Platform</Typography>
    <Typography variant="body1">
      Content properly contained with responsive gutters
    </Typography>
  </Container>
</Section>
```

#### Container - Responsive Width Management
```jsx
import { Container } from '@rspwn/design-system'

// Responsive container with max-widths
<Container maxWidth="lg" px={4}>
  <Typography variant="h1">Centered Content</Typography>
</Container>
```

#### Grid - CSS Grid Layout System
```jsx
import { Grid } from '@rspwn/design-system'

// Responsive grid layouts
<Grid 
  templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
  gap={6}
>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Complex grid layouts
<Grid 
  templateColumns={{ xs: '1fr', md: '1fr 2fr', lg: '1fr 3fr 1fr' }}
  templateRows="auto 1fr auto"
  gap={4}
  minHeight="100vh"
>
  <Grid.Item gridColumn="1 / -1">Header</Grid.Item>
  <Grid.Item>Sidebar</Grid.Item>
  <Grid.Item>Main Content</Grid.Item>
  <Grid.Item>Right Panel</Grid.Item>
  <Grid.Item gridColumn="1 / -1">Footer</Grid.Item>
</Grid>
```

#### Flex - Flexbox Layout System
```jsx
import { Flex } from '@rspwn/design-system'

// Flexible layouts
<Flex direction="row" align="center" justify="space-between" gap={4}>
  <Typography variant="h3">Title</Typography>
  <Button variant="primary">Action</Button>
</Flex>

// Responsive flex
<Flex 
  direction={{ xs: 'column', md: 'row' }}
  align="stretch"
  wrap="wrap"
  gap={6}
>
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</Flex>
```

#### Stack - Vertical/Horizontal Stacking
```jsx
import { Stack } from '@rspwn/design-system'

// Vertical stacking (default)
<Stack spacing={4}>
  <Typography variant="h2">Title</Typography>
  <Typography variant="body1">Content</Typography>
  <Button variant="primary">Action</Button>
</Stack>

// Horizontal stacking
<Stack direction="horizontal" spacing={3} align="center">
  <Avatar src="/avatar.jpg" />
  <Typography variant="h4">John Doe</Typography>
  <Badge variant="success">Online</Badge>
</Stack>
```

#### Section - Semantic Layout Sections
```jsx
import { Section } from '@rspwn/design-system'

// Semantic page sections
<Section as="main" py={12}>
  <Container maxWidth="xl">
    <Typography variant="h1">Main Content</Typography>
  </Container>
</Section>

<Section as="aside" bg="gray" py={8}>
  <Container maxWidth="lg">
    <Typography variant="h2">Sidebar Content</Typography>
  </Container>
</Section>
```

#### Space - Spacing Control
```jsx
import { Space } from '@rspwn/design-system'

// Add spacing between elements
<div>
  <Typography>First element</Typography>
  <Space size={8} />
  <Typography>Second element</Typography>
  <Space size={{ xs: 4, md: 8 }} />
  <Typography>Third element</Typography>
</div>
```

#### Divider - Visual Separators
```jsx
import { Divider } from '@rspwn/design-system'

// Horizontal dividers
<Stack spacing={4}>
  <Typography>Section 1</Typography>
  <Divider />
  <Typography>Section 2</Typography>
  <Divider variant="dashed" />
  <Typography>Section 3</Typography>
</Stack>

// Vertical dividers
<Flex direction="row" align="center">
  <Typography>Left</Typography>
  <Divider orientation="vertical" height="40px" mx={4} />
  <Typography>Right</Typography>
</Flex>
```

## 🌐 CREATING FULLY RESPONSIVE WEBSITES

Building responsive websites with RSPWN Design System requires understanding the responsive system and following best practices.

### Responsive Design Philosophy

**Mobile-First Approach:**
```jsx
// ALWAYS design mobile-first, then enhance for larger screens
<Box 
  p={4}              // Mobile: 16px padding
  p={{ md: 6, lg: 8 }} // Tablet: 24px, Desktop: 32px
  fontSize={{ xs: 'sm', md: 'base', lg: 'lg' }}
>
  <Typography 
    variant={{ xs: 'h3', md: 'h2', lg: 'h1' }}
    textAlign={{ xs: 'center', md: 'left' }}
  >
    Responsive Gaming Platform
  </Typography>
</Box>
```

**Breakpoint System:**
```jsx
// RSPWN breakpoints (mobile-first)
const breakpoints = {
  xs: '0px',      // Mobile (default)
  sm: '640px',    // Large mobile
  md: '768px',    // Tablet
  lg: '1024px',   // Desktop
  xl: '1280px',   // Large desktop
  xxl: '1536px'   // Extra large
}
```

### Complete Responsive Layout Pattern
```jsx
import { 
  Box, Container, Grid, Flex, Stack, Typography, Button, Card,
  useBreakpoint, useBreakpointValue, ShowOnMobile, HideOnMobile
} from '@rspwn/design-system'

function FullyResponsiveLayout() {
  // Responsive values
  const columns = useBreakpointValue({ xs: 1, sm: 2, lg: 3 })
  const spacing = useBreakpointValue({ xs: 4, md: 6, lg: 8 })
  const isDesktop = useBreakpoint('lg')
  
  return (
    <Box bg="dark" minHeight="100vh">
      {/* Responsive Navigation */}
      <Container maxWidth="xxl" px={{ xs: 4, md: 6, lg: 8 }}>
        <Flex 
          justify="space-between" 
          align="center" 
          py={{ xs: 4, md: 6 }}
          direction={{ xs: 'column', md: 'row' }}
          gap={{ xs: 4, md: 0 }}
        >
          <Typography variant="brand" color="primary">RSPWN</Typography>
          
          {/* Desktop Navigation */}
          <HideOnMobile>
            <Flex gap={6}>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Gaming</Button>
              <Button variant="ghost">AI Tools</Button>
              <Button variant="primary">Get Started</Button>
            </Flex>
          </HideOnMobile>
          
          {/* Mobile Navigation */}
          <ShowOnMobile>
            <Stack spacing={3} align="center">
              <Button variant="primary" fullWidth>Get Started</Button>
            </Stack>
          </ShowOnMobile>
        </Flex>
      </Container>
      
      {/* Hero Section - Fully Responsive */}
      <Container maxWidth="xl" px={{ xs: 4, md: 6, lg: 8 }}>
        <Box 
          py={{ xs: 8, md: 12, lg: 16 }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Grid 
            templateColumns={{ xs: '1fr', lg: '1fr 1fr' }}
            gap={{ xs: 8, lg: 12 }}
            alignItems="center"
          >
            <Stack spacing={{ xs: 6, md: 8 }} align={{ xs: 'center', lg: 'flex-start' }}>
              <Typography 
                variant={{ xs: 'h2', md: 'h1' }}
                maxWidth={{ xs: '100%', md: '600px' }}
              >
                Next-Generation Gaming Platform
              </Typography>
              
              <Typography 
                variant={{ xs: 'body2', md: 'body1' }}
                color="secondary"
                maxWidth={{ xs: '100%', md: '500px' }}
              >
                Build extraordinary gaming experiences with enterprise-grade components
                and AI-powered tools designed for the future.
              </Typography>
              
              <Flex 
                direction={{ xs: 'column', sm: 'row' }}
                gap={4}
                width={{ xs: '100%', sm: 'auto' }}
              >
                <Button 
                  variant="primary" 
                  size={{ xs: 'lg', md: 'xl' }}
                  fullWidth={{ xs: true, sm: false }}
                >
                  Start Gaming
                </Button>
                <Button 
                  variant="secondary" 
                  size={{ xs: 'lg', md: 'xl' }}
                  fullWidth={{ xs: true, sm: false }}
                >
                  Learn More
                </Button>
              </Flex>
            </Stack>
            
            {/* Hero image - hidden on small screens */}
            <HideOnMobile>
              <Box 
                bg="grayLight" 
                borderRadius="lg"
                aspectRatio="16/9"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography color="muted">Gaming Platform Preview</Typography>
              </Box>
            </HideOnMobile>
          </Grid>
        </Box>
      </Container>
      
      {/* Features Grid - Responsive */}
      <Container maxWidth="xl" px={{ xs: 4, md: 6, lg: 8 }}>
        <Box py={{ xs: 8, md: 12 }}>
          <Typography 
            variant={{ xs: 'h3', md: 'h2' }}
            textAlign="center"
            mb={{ xs: 8, md: 12 }}
          >
            Gaming Features
          </Typography>
          
          <Grid 
            templateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
            gap={{ xs: 6, md: 8 }}
          >
            {[1, 2, 3, 4, 5, 6].map(feature => (
              <Card 
                key={feature}
                variant="elevated"
                hoverable
                p={{ xs: 4, md: 6 }}
              >
                <Stack spacing={4}>
                  <Typography variant="h4">
                    AI Feature {feature}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Advanced gaming capabilities powered by artificial intelligence
                    for enhanced player experiences.
                  </Typography>
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Box>
      </Container>
      
      {/* Stats Section - Responsive Layout */}
      <Box bg="gray" py={{ xs: 8, md: 12 }}>
        <Container maxWidth="xl" px={{ xs: 4, md: 6, lg: 8 }}>
          <Grid 
            templateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            }}
            gap={{ xs: 6, md: 4 }}
            textAlign="center"
          >
            {[
              { label: 'Active Players', value: '2.4M' },
              { label: 'Games Played', value: '847K' },
              { label: 'AI Sessions', value: '156K' },
              { label: 'Countries', value: '89' }
            ].map(stat => (
              <Stack key={stat.label} spacing={2}>
                <Typography variant={{ xs: 'h3', md: 'h2' }} color="primary">
                  {stat.value}
                </Typography>
                <Typography variant={{ xs: 'body2', md: 'body1' }} color="secondary">
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
```

### Responsive Component Patterns

#### Responsive Typography
```jsx
// Scale typography across breakpoints
<Typography 
  variant={{ xs: 'h4', sm: 'h3', md: 'h2', lg: 'h1' }}
  fontSize={{ xs: 'lg', md: 'xl', lg: '2xl' }}
  lineHeight={{ xs: 1.4, md: 1.3, lg: 1.2 }}
>
  Responsive Heading
</Typography>

// Responsive text alignment
<Typography 
  textAlign={{ xs: 'center', md: 'left', lg: 'justify' }}
  maxWidth={{ xs: '100%', md: '600px', lg: '800px' }}
>
  Content that adjusts alignment and width
</Typography>
```

#### Responsive Spacing
```jsx
// Progressive spacing enhancement
<Box 
  p={{ xs: 4, sm: 6, md: 8, lg: 12 }}    // Padding
  m={{ xs: 2, md: 4, lg: 6 }}             // Margin
  gap={{ xs: 4, md: 6, lg: 8 }}           // Gap in Flex/Grid
>
  <Stack spacing={{ xs: 4, md: 6, lg: 8 }}>
    {/* Content with responsive spacing */}
  </Stack>
</Box>
```

#### Responsive Layout Switching
```jsx
// Switch between layout patterns
<Flex 
  direction={{ xs: 'column', md: 'row' }}        // Stack on mobile, row on desktop
  align={{ xs: 'center', md: 'flex-start' }}     // Center on mobile, start on desktop
  justify={{ xs: 'center', lg: 'space-between' }} // Different justification
  wrap={{ xs: 'nowrap', lg: 'wrap' }}             // Control wrapping
  gap={{ xs: 4, md: 6, lg: 8 }}
>
  {/* Responsive flex items */}
</Flex>

// Grid that changes columns
<Grid 
  templateColumns={{
    xs: '1fr',                    // 1 column on mobile
    sm: 'repeat(2, 1fr)',        // 2 columns on small screens
    md: 'repeat(3, 1fr)',        // 3 columns on tablets
    lg: 'repeat(4, 1fr)',        // 4 columns on desktop
    xl: 'repeat(6, 1fr)'         // 6 columns on large desktop
  }}
  gap={{ xs: 4, md: 6, lg: 8 }}
>
  {/* Grid items */}
</Grid>
```

### Responsive Best Practices Checklist

```jsx
// ✅ DO: Progressive Enhancement
<Container 
  maxWidth="xl"                           // Constrain maximum width
  px={{ xs: 4, md: 6, lg: 8 }}           // Progressive padding
>
  <Grid 
    templateColumns={{ xs: '1fr', lg: '2fr 1fr' }}
    gap={{ xs: 6, lg: 8 }}
  >
    <Box order={{ xs: 2, lg: 1 }}>        // Reorder on different screens
      Main Content
    </Box>
    <Box order={{ xs: 1, lg: 2 }}>        
      Sidebar
    </Box>
  </Grid>
</Container>

// ✅ DO: Conditional Component Rendering
<>
  <ShowOnDesktop>
    <ComplexDataVisualization />          // Heavy components only on desktop
  </ShowOnDesktop>
  
  <ShowOnMobile>
    <SimplifiedMobileView />              // Simplified mobile version
  </ShowOnMobile>
</>

// ✅ DO: Responsive Component Sizing
<Button 
  size={{ xs: 'sm', md: 'md', lg: 'lg' }}    // Progressive button sizing
  fullWidth={{ xs: true, sm: false }}         // Full width on mobile only
>
  Action Button
</Button>

// ❌ DON'T: Fixed pixel values
<Box width="300px" />                         // Breaks on small screens

// ❌ DON'T: Assume screen size
if (window.innerWidth > 768) { /* Logic */ } // Use hooks instead

// ❌ DON'T: Ignore touch interfaces
<Button onHover={showTooltip} />              // Use onClick for mobile
```

## 🔧 RESPONSIVE UTILITIES & LAYOUT HELPERS

The design system provides powerful responsive utilities and conditional rendering components.

#### Responsive Layout Components
```jsx
import { 
  Show, Hide, ShowOnMobile, ShowOnTablet, ShowOnDesktop,
  HideOnMobile, HideOnTablet, HideOnDesktop 
} from '@rspwn/design-system'

// Conditional rendering based on breakpoints
<>
  <ShowOnDesktop>
    <Typography variant="h1">Desktop Gaming Experience</Typography>
  </ShowOnDesktop>
  
  <ShowOnTablet>
    <Typography variant="h2">Tablet Gaming</Typography>
  </ShowOnTablet>
  
  <ShowOnMobile>
    <Typography variant="h3">Mobile Gaming</Typography>
  </ShowOnMobile>
  
  <HideOnMobile>
    <ComplexDashboard />  {/* Hidden on mobile */}
  </HideOnMobile>
</>

// Advanced conditional rendering
<Show when={userLevel > 50}>
  <Badge variant="primary">Expert Player</Badge>
</Show>

<Hide when={isLoading}>
  <GameContent />
</Hide>
```

#### Responsive Hooks
```jsx
import { 
  useMediaQuery, useBreakpoint, useCurrentBreakpoint,
  useBreakpointValue, useScreenSize, useBreakpointMatch, useOrientation
} from '@rspwn/design-system'

function ResponsiveComponent() {
  // Media queries
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
  
  // Breakpoint hooks
  const currentBreakpoint = useCurrentBreakpoint() // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  const isDesktop = useBreakpoint('lg') // true if current breakpoint >= lg
  
  // Responsive values
  const columns = useBreakpointValue({ xs: 1, sm: 2, md: 3, lg: 4 })
  const spacing = useBreakpointValue({ xs: 4, md: 6, lg: 8 })
  
  // Screen dimensions
  const { width, height } = useScreenSize()
  
  // Breakpoint matching
  const matches = useBreakpointMatch({ sm: 'mobile', md: 'tablet', lg: 'desktop' })
  
  // Device orientation
  const orientation = useOrientation() // 'portrait' | 'landscape'
  
  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={spacing}>
      <Card>
        <Typography variant="body1">
          Breakpoint: {currentBreakpoint}<br/>
          Screen: {width}x{height}<br/>
          Device: {matches}<br/>
          Orientation: {orientation}
        </Typography>
      </Card>
    </Grid>
  )
}
```

#### Responsive Utilities
```jsx
import {
  breakpoints, mediaQueries, createResponsiveProps, createResponsiveSpacing,
  getCurrentBreakpoint, resolveResponsiveValue, matchesBreakpoint
} from '@rspwn/design-system'

// Access breakpoint values
console.log(breakpoints.md) // '768px'
console.log(mediaQueries.desktop) // '@media (min-width: 1024px)'

// Create responsive props
const responsiveProps = createResponsiveProps({ xs: 2, md: 4, lg: 6 })
const responsiveSpacing = createResponsiveSpacing('lg')

// Utility functions
const currentBp = getCurrentBreakpoint()
const resolvedValue = resolveResponsiveValue({ xs: 'small', lg: 'large' }, 'md')
const matches = matchesBreakpoint('lg')
```

### Responsive Testing & Debugging

#### Testing Component for Responsive Behavior
```jsx
import { 
  useCurrentBreakpoint, useScreenSize, useBreakpointValue,
  Box, Typography, Card, Grid, Stack
} from '@rspwn/design-system'

function ResponsiveDebugger() {
  const breakpoint = useCurrentBreakpoint()
  const { width, height } = useScreenSize()
  const columns = useBreakpointValue({ xs: 1, sm: 2, md: 3, lg: 4 })
  
  return (
    <Card p={6} mb={8} variant="outlined">
      <Typography variant="h4" mb={4}>Responsive Debug Info</Typography>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
        <Stack spacing={2}>
          <Typography variant="body2" color="muted">Current Breakpoint</Typography>
          <Typography variant="h5" color="primary">{breakpoint}</Typography>
        </Stack>
        
        <Stack spacing={2}>
          <Typography variant="body2" color="muted">Screen Size</Typography>
          <Typography variant="h5" color="primary">{width} x {height}</Typography>
        </Stack>
        
        <Stack spacing={2}>
          <Typography variant="body2" color="muted">Grid Columns</Typography>
          <Typography variant="h5" color="primary">{columns}</Typography>
        </Stack>
        
        <Stack spacing={2}>
          <Typography variant="body2" color="muted">Test Breakpoints</Typography>
          <Stack spacing={1}>
            {['xs', 'sm', 'md', 'lg', 'xl'].map(bp => (
              <Typography 
                key={bp}
                variant="caption" 
                color={bp === breakpoint ? 'primary' : 'muted'}
                fontWeight={bp === breakpoint ? 'bold' : 'normal'}
              >
                {bp}: {bp === breakpoint ? '✓ Active' : 'Inactive'}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Card>
  )
}
```

#### Common Responsive Issues & Solutions

```jsx
// ⚠️ ISSUE: Content overflow on small screens
// ❌ Bad:
<Box width="800px">
  <Typography>Fixed width content that breaks on mobile</Typography>
</Box>

// ✅ Solution:
<Box maxWidth="800px" width="100%" px={4}>
  <Typography>Responsive content that scales properly</Typography>
</Box>

// ⚠️ ISSUE: Images not responsive
// ❌ Bad:
<img src="/large-image.jpg" width={800} height={600} />

// ✅ Solution:
<Image 
  src="/large-image.jpg"
  alt="Responsive gaming screenshot"
  width={800}
  height={600}
  objectFit="cover"
  maxWidth="100%"
  height="auto"
/>

// ⚠️ ISSUE: Poor touch targets on mobile
// ❌ Bad:
<Button size="xs">Tiny Button</Button>  {/* Too small for touch */}

// ✅ Solution:
<Button 
  size={{ xs: 'md', lg: 'sm' }}    // Larger on mobile, smaller on desktop
  minHeight="44px"                 // Ensure minimum touch target
>
  Touch-Friendly Button
</Button>

// ⚠️ ISSUE: Excessive nesting and complex responsive logic
// ❌ Bad:
<Box display={{ xs: 'none', md: 'block' }}>
  <Box display={{ xs: 'none', lg: 'flex' }}>
    <Box display={{ xs: 'none', xl: 'grid' }}>
      Overly complex nested responsive logic
    </Box>
  </Box>
</Box>

// ✅ Solution:
<ShowOnDesktop>
  <ComplexDesktopComponent />
</ShowOnDesktop>
<HideOnDesktop>
  <SimplifiedMobileComponent />
</HideOnDesktop>
```

#### Performance Optimization for Responsive Sites

```jsx
import { 
  lazy, Suspense,
  ShowOnDesktop, ShowOnMobile, useBreakpoint
} from '@rspwn/design-system'

// Lazy load components that are only needed on certain screen sizes
const HeavyDesktopComponent = lazy(() => import('./HeavyDesktopComponent'))
const MobileDashboard = lazy(() => import('./MobileDashboard'))

function OptimizedResponsiveApp() {
  const isDesktop = useBreakpoint('lg')
  
  return (
    <Box>
      {/* Only load heavy components when needed */}
      <ShowOnDesktop>
        <Suspense fallback={<Skeleton height="400px" />}>
          <HeavyDesktopComponent />
        </Suspense>
      </ShowOnDesktop>
      
      <ShowOnMobile>
        <Suspense fallback={<Skeleton height="200px" />}>
          <MobileDashboard />
        </Suspense>
      </ShowOnMobile>
      
      {/* Progressive image loading */}
      <Image 
        src="/hero-desktop.jpg"
        srcSet={{
          xs: "/hero-mobile.jpg",
          md: "/hero-tablet.jpg", 
          lg: "/hero-desktop.jpg"
        }}
        loading="lazy"
        alt="Gaming platform hero image"
      />
    </Box>
  )
}
```

## 🎛️ UI COMPONENTS (Interactive Elements)

UI components provide interactive functionality and user interface elements.

#### Button - Action Elements
```jsx
import { Button } from '@rspwn/design-system'

// Primary actions (uses brand blue - SPARINGLY)
<Button variant="primary" size="lg">
  Primary Action
</Button>

// Secondary actions (professional gray)
<Button variant="secondary" size="md">
  Secondary Action
</Button>

// Subtle actions
<Button variant="ghost" size="sm">
  Tertiary Action
</Button>

// Danger/warning states
<Button variant="danger" size="md">
  Delete Action
</Button>

// Size variations
<Button variant="primary" size="xs">Compact</Button>
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="xl">Extra Large</Button>
```

#### Card - Content Containers
```jsx
import { Card } from '@rspwn/design-system'

// Standard card pattern
<Card variant="elevated" hoverable>
  <Card.Content p={6}>
    <Typography variant="h4" mb={4}>
      Feature Title
    </Typography>
    <Typography variant="body2" color="secondary" mb={6}>
      Descriptive content about this gaming feature or AI capability
    </Typography>
    <Button variant="primary">Learn More</Button>
  </Card.Content>
</Card>

// Card variants
<Card variant="default">Basic card</Card>
<Card variant="elevated">Elevated with shadow</Card>
<Card variant="outlined">Outlined border</Card>
<Card variant="filled">Filled background</Card>
```

#### Navigation - Site Navigation
```jsx
import { Navigation } from '@rspwn/design-system'

<Navigation>
  <Navigation.Brand>
    <Typography variant="brand">RSPWN</Typography>
  </Navigation.Brand>
  <Navigation.Links>
    <Navigation.Link href="/features">Features</Navigation.Link>
    <Navigation.Link href="/docs">Documentation</Navigation.Link>
    <Navigation.Link href="/community">Community</Navigation.Link>
  </Navigation.Links>
  <Navigation.Actions>
    <Button variant="primary" size="sm">Get Started</Button>
  </Navigation.Actions>
</Navigation>
```

#### Footer - Site Footer
```jsx
import { Footer } from '@rspwn/design-system'

<Footer>
  <Footer.Content>
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={8}>
      <Stack spacing={4}>
        <Typography variant="h4">RSPWN Platform</Typography>
        <Stack spacing={2}>
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="/careers">Careers</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Stack>
      </Stack>
      
      <Stack spacing={4}>
        <Typography variant="h4">Gaming</Typography>
        <Stack spacing={2}>
          <Footer.Link href="/games">Browse Games</Footer.Link>
          <Footer.Link href="/tournaments">Tournaments</Footer.Link>
          <Footer.Link href="/leaderboards">Leaderboards</Footer.Link>
        </Stack>
      </Stack>
      
      <Stack spacing={4}>
        <Typography variant="h4">AI Features</Typography>
        <Stack spacing={2}>
          <Footer.Link href="/ai-tools">AI Tools</Footer.Link>
          <Footer.Link href="/analytics">Analytics</Footer.Link>
          <Footer.Link href="/insights">Insights</Footer.Link>
        </Stack>
      </Stack>
    </Grid>
    
    <Divider my={8} />
    
    <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
      <Typography variant="brand" color="primary">RSPWN</Typography>
      <Typography variant="body2" color="muted">
        © 2024 RSPWN. Open source gaming platform.
      </Typography>
    </Flex>
  </Footer.Content>
</Footer>
```

### Form Components

#### Input - Text Input Fields
```jsx
import { Input } from '@rspwn/design-system'

// Basic inputs
<Input 
  placeholder="Enter your username"
  size="md"
  variant="default"
/>

// Input with label and validation
<Input 
  label="Email Address"
  type="email"
  placeholder="john@example.com"
  helperText="We'll never share your email"
  error={emailError}
  errorText="Please enter a valid email"
  fullWidth
/>

// Input variants
<Input variant="filled" placeholder="Filled input" />
<Input variant="outline" placeholder="Outlined input" />
```

#### TextArea - Multi-line Text Input
```jsx
import { TextArea } from '@rspwn/design-system'

<TextArea 
  label="Description"
  placeholder="Enter your description..."
  rows={4}
  maxLength={500}
  helperText="Provide a detailed description"
  resize="vertical"
/>
```

#### Select - Dropdown Selection
```jsx
import { Select } from '@rspwn/design-system'

const options = [
  { value: 'option1', label: 'Gaming Platform' },
  { value: 'option2', label: 'AI Tools' },
  { value: 'option3', label: 'Development' }
]

<Select 
  label="Category"
  options={options}
  placeholder="Choose a category"
  searchable
  clearable
  value={selectedCategory}
  onChange={setSelectedCategory}
/>
```

#### Checkbox - Boolean Selection
```jsx
import { Checkbox } from '@rspwn/design-system'

<Checkbox 
  label="Subscribe to newsletter"
  checked={subscribed}
  onChange={setSubscribed}
  helperText="Get updates about new features"
/>

// Checkbox group
<Stack spacing={2}>
  <Typography variant="h4">Gaming Preferences</Typography>
  <Checkbox label="FPS Games" />
  <Checkbox label="Strategy Games" />
  <Checkbox label="AI-Powered Features" />
</Stack>
```

#### RadioButton - Single Selection
```jsx
import { RadioButton, RadioGroup } from '@rspwn/design-system'

// Individual radio buttons
<Stack spacing={2}>
  <Typography variant="h4">Account Type</Typography>
  <RadioButton 
    name="accountType" 
    value="personal" 
    label="Personal" 
    checked={accountType === 'personal'}
    onChange={() => setAccountType('personal')}
  />
  <RadioButton 
    name="accountType" 
    value="business" 
    label="Business" 
    checked={accountType === 'business'}
    onChange={() => setAccountType('business')}
  />
</Stack>

// Radio group (recommended for multiple options)
<RadioGroup 
  name="plan"
  value={selectedPlan}
  onChange={setSelectedPlan}
  label="Choose Your Plan"
>
  <RadioGroup.Option value="free" label="Free Plan" description="Basic features" />
  <RadioGroup.Option value="pro" label="Pro Plan" description="Advanced features" />
  <RadioGroup.Option value="enterprise" label="Enterprise" description="Full features" />
</RadioGroup>
```

#### Switch - Toggle Control
```jsx
import { Switch } from '@rspwn/design-system'

<Flex align="center" justify="space-between">
  <Stack spacing={1}>
    <Typography variant="h5">Dark Mode</Typography>
    <Typography variant="body2" color="secondary">
      Enable dark theme for gaming
    </Typography>
  </Stack>
  <Switch 
    checked={darkMode}
    onChange={setDarkMode}
    size="lg"
  />
</Flex>
```

#### DatePicker - Date Selection
```jsx
import { DatePicker } from '@rspwn/design-system'

<DatePicker 
  label="Event Date"
  value={eventDate}
  onChange={setEventDate}
  minDate={new Date()}
  placeholder="Select a date"
  showToday
  format="MM/dd/yyyy"
/>
```

#### Search - Search Input
```jsx
import { Search } from '@rspwn/design-system'

<Search 
  placeholder="Search games, AI tools..."
  value={searchQuery}
  onChange={setSearchQuery}
  onSearch={handleSearch}
  size="lg"
  showClearButton
  debounceMs={300}
/>
```

#### Slider - Range Selection
```jsx
import { Slider } from '@rspwn/design-system'

<Stack spacing={4}>
  <Typography variant="h5">Performance Settings</Typography>
  <Slider 
    label="Graphics Quality"
    min={0}
    max={100}
    step={10}
    value={graphicsQuality}
    onChange={setGraphicsQuality}
    showMarks
    showValue
  />
  
  {/* Range slider */}
  <Slider 
    label="Price Range"
    min={0}
    max={1000}
    value={priceRange}
    onChange={setPriceRange}
    range
    formatValue={value => `$${value}`}
  />
</Stack>
```

### Interactive Components

#### Modal - Dialog Windows
```jsx
import { Modal } from '@rspwn/design-system'

<Modal 
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Action"
  size="md"
  closeOnOverlayClick
  closeOnEscape
>
  <Stack spacing={6}>
    <Typography variant="body1">
      Are you sure you want to delete this gaming profile?
    </Typography>
    <Flex gap={3} justify="flex-end">
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Flex>
  </Stack>
</Modal>
```

#### Drawer - Side Panel
```jsx
import { Drawer } from '@rspwn/design-system'

<Drawer 
  isOpen={showDrawer}
  onClose={() => setShowDrawer(false)}
  position="right"
  size="md"
  title="Game Settings"
  showCloseButton
>
  <Stack spacing={6} p={4}>
    <Typography variant="h4">Audio Settings</Typography>
    <Slider label="Master Volume" value={volume} onChange={setVolume} />
    <Switch label="Enable Surround Sound" />
    
    <Typography variant="h4">Graphics Settings</Typography>
    <Select 
      label="Resolution" 
      options={resolutionOptions}
      value={resolution}
      onChange={setResolution}
    />
  </Stack>
</Drawer>
```

#### Accordion - Collapsible Content
```jsx
import { Accordion } from '@rspwn/design-system'

<Accordion type="single" collapsible>
  <Accordion.Item value="gaming">
    <Accordion.Trigger>
      <Typography variant="h4">Gaming Features</Typography>
    </Accordion.Trigger>
    <Accordion.Content>
      <Stack spacing={3}>
        <Typography variant="body1">
          Advanced gaming features powered by AI technology.
        </Typography>
        <Button variant="primary">Explore Features</Button>
      </Stack>
    </Accordion.Content>
  </Accordion.Item>
  
  <Accordion.Item value="ai">
    <Accordion.Trigger>
      <Typography variant="h4">AI Integration</Typography>
    </Accordion.Trigger>
    <Accordion.Content>
      <Typography variant="body1">
        Seamless AI integration for enhanced gaming experiences.
      </Typography>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

#### Tabs - Tabbed Content
```jsx
import { Tabs } from '@rspwn/design-system'

<Tabs defaultValue="overview" variant="default">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="features">Features</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="overview">
    <Card p={6}>
      <Typography variant="h3" mb={4}>Platform Overview</Typography>
      <Typography variant="body1">
        Welcome to the RSPWN gaming and AI platform.
      </Typography>
    </Card>
  </Tabs.Content>
  
  <Tabs.Content value="features">
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
      <Card p={4}>
        <Typography variant="h4">Feature 1</Typography>
      </Card>
      <Card p={4}>
        <Typography variant="h4">Feature 2</Typography>
      </Card>
    </Grid>
  </Tabs.Content>
  
  <Tabs.Content value="settings">
    <Stack spacing={4}>
      <Switch label="Enable notifications" />
      <Select label="Theme" options={themeOptions} />
    </Stack>
  </Tabs.Content>
</Tabs>
```

#### Dropdown - Action Menu
```jsx
import { Dropdown } from '@rspwn/design-system'

<Dropdown>
  <Dropdown.Trigger asChild>
    <Button variant="secondary">Actions</Button>
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item onClick={handleEdit}>
      <Icon name="edit" size={16} />
      Edit Profile
    </Dropdown.Item>
    <Dropdown.Item onClick={handleShare}>
      <Icon name="share" size={16} />
      Share
    </Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item onClick={handleDelete} destructive>
      <Icon name="trash" size={16} />
      Delete
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

#### Popover - Contextual Information
```jsx
import { Popover } from '@rspwn/design-system'

<Popover>
  <Popover.Trigger asChild>
    <Button variant="ghost">Learn More</Button>
  </Popover.Trigger>
  <Popover.Content side="top" align="center">
    <Stack spacing={3}>
      <Typography variant="h4">AI Gaming Features</Typography>
      <Typography variant="body2" color="secondary">
        Advanced AI algorithms enhance your gaming experience with
        predictive gameplay and intelligent matchmaking.
      </Typography>
      <Button variant="primary" size="sm">Get Started</Button>
    </Stack>
  </Popover.Content>
</Popover>
```

### Display Components

#### Alert - Status Messages
```jsx
import { Alert } from '@rspwn/design-system'

// Different severity levels
<Stack spacing={4}>
  <Alert severity="info" title="Platform Update">
    New gaming features are now available in the platform.
  </Alert>
  
  <Alert severity="success" title="Profile Updated" dismissible>
    Your gaming profile has been successfully updated.
  </Alert>
  
  <Alert severity="warning" title="Performance Warning">
    Your system may experience reduced performance with current settings.
  </Alert>
  
  <Alert 
    severity="error" 
    title="Connection Error" 
    dismissible
    action={<Button variant="ghost" size="sm">Retry</Button>}
  >
    Unable to connect to the gaming server.
  </Alert>
</Stack>
```

#### Toast - Temporary Notifications
```jsx
import { ToastProvider, Toaster, useToast, useToastHelpers } from '@rspwn/design-system'

// Setup Toast Provider in your app root
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <YourAppContent />
        <Toaster position="top-right" />
      </ToastProvider>
    </ThemeProvider>
  )
}

// Use toasts in components
function GameComponent() {
  const toast = useToast()
  const { dismissToast, dismissAllToasts } = useToastHelpers()
  
  const handleAchievement = () => {
    toast.success({
      title: "Achievement Unlocked!",
      description: "You've reached level 50 in AI Gaming",
      duration: 5000
    })
  }
  
  const handleError = () => {
    const toastId = toast.error({
      title: "Connection Lost",
      description: "Reconnecting to game server...",
      action: <Button variant="ghost" size="sm">Retry</Button>,
      persistent: true
    })
    
    // Dismiss specific toast later
    setTimeout(() => dismissToast(toastId), 10000)
  }
  
  return (
    <Stack spacing={4}>
      <Button onClick={handleAchievement}>Unlock Achievement</Button>
      <Button onClick={handleError}>Simulate Error</Button>
      <Button onClick={dismissAllToasts} variant="ghost">Clear All</Button>
    </Stack>
  )
}
```

#### Badge - Status Indicators
```jsx
import { Badge } from '@rspwn/design-system'

// Status badges
<Flex align="center" gap={3}>
  <Avatar src="/player.jpg" size="md" />
  <Stack spacing={1}>
    <Typography variant="h4">Pro Player</Typography>
    <Flex gap={2}>
      <Badge variant="success">Online</Badge>
      <Badge variant="primary">Premium</Badge>
      <Badge variant="outline">Level 47</Badge>
    </Flex>
  </Stack>
</Flex>

// Notification badges
<Box position="relative">
  <Button variant="ghost">
    <Icon name="bell" size={20} />
  </Button>
  <Badge 
    variant="error" 
    size="sm" 
    position="absolute" 
    top="-2px" 
    right="-2px"
  >
    3
  </Badge>
</Box>
```

#### Avatar - User Representation
```jsx
import { Avatar } from '@rspwn/design-system'

// Avatar variants
<Flex align="center" gap={4}>
  <Avatar src="/player1.jpg" size="sm" alt="Player 1" />
  <Avatar size="md" fallback="JD" />
  <Avatar src="/player2.jpg" size="lg" status="online" />
  <Avatar size="xl" fallback="AI" variant="square" />
</Flex>

// Avatar group for team display
<Avatar.Group max={4}>
  <Avatar src="/player1.jpg" />
  <Avatar src="/player2.jpg" />
  <Avatar src="/player3.jpg" />
  <Avatar fallback="+5" />
</Avatar.Group>
```

#### Progress - Loading & Progress Indicators
```jsx
import { Progress } from '@rspwn/design-system'

// Progress bars
<Stack spacing={6}>
  <Box>
    <Typography variant="h5" mb={2}>Game Loading</Typography>
    <Progress value={loadingProgress} max={100} size="md" />
    <Typography variant="caption" color="secondary">
      {loadingProgress}% Complete
    </Typography>
  </Box>
  
  <Box>
    <Typography variant="h5" mb={2}>Experience Points</Typography>
    <Progress 
      value={xp} 
      max={1000} 
      variant="success"
      size="lg"
      showValue
      label="XP Progress"
    />
  </Box>
  
  {/* Circular progress */}
  <Progress.Circle 
    value={75} 
    size="lg" 
    showValue 
    color="primary"
  />
</Stack>
```

#### Tooltip - Contextual Help
```jsx
import { Tooltip } from '@rspwn/design-system'

<Flex align="center" gap={4}>
  <Tooltip content="This feature uses advanced AI algorithms">
    <Button variant="primary">
      AI Gaming Mode
      <Icon name="info" size={16} ml={2} />
    </Button>
  </Tooltip>
  
  <Tooltip 
    content="Upgrade to premium for advanced features"
    side="bottom"
    delay={500}
  >
    <Badge variant="outline">Premium Feature</Badge>
  </Tooltip>
</Flex>
```

#### Icon - Vector Graphics
```jsx
import { Icon, IconCatalog, iconPaths } from '@rspwn/design-system'

// Icon usage
<Flex align="center" gap={6}>
  <Icon name="gamepad" size={24} color="primary" />
  <Icon name="cpu" size={32} color="secondary" />
  <Icon name="zap" size={20} color="warning" />
  <Icon name="shield" size={28} color="success" />
</Flex>

// Icons in components
<Button variant="primary">
  <Icon name="play" size={16} />
  Start Game
</Button>

<Alert severity="info" icon={<Icon name="info" />}>
  New features available
</Alert>

// Icon catalog for browsing all available icons
<IconCatalog 
  onIconSelect={(iconName) => setSelectedIcon(iconName)}
  searchable
  categories={['gaming', 'ai', 'interface', 'data']}
/>

// Access icon paths programmatically
<svg width={24} height={24} viewBox="0 0 24 24">
  <path d={iconPaths.gamepad} fill="currentColor" />
</svg>
```

#### Image - Optimized Images
```jsx
import { Image } from '@rspwn/design-system'

// Responsive images
<Image 
  src="/game-screenshot.jpg"
  alt="AI Gaming Platform Screenshot"
  width={800}
  height={450}
  objectFit="cover"
  borderRadius="lg"
  loading="lazy"
/>

// Image with fallback
<Image 
  src="/profile-image.jpg"
  alt="Player Profile"
  width={120}
  height={120}
  fallback={<Avatar fallback="AI" size="xl" />}
  onError={() => console.log('Image failed to load')}
/>
```

#### Rating - Star Rating System
```jsx
import { Rating } from '@rspwn/design-system'

<Stack spacing={4}>
  <Box>
    <Typography variant="h5" mb={2}>Game Rating</Typography>
    <Rating 
      value={gameRating}
      onChange={setGameRating}
      size="lg"
      allowHalf
      showValue
    />
  </Box>
  
  <Box>
    <Typography variant="h5" mb={2}>User Reviews</Typography>
    <Rating 
      value={4.5}
      readOnly
      size="md"
      color="primary"
    />
    <Typography variant="body2" color="secondary" ml={2}>
      (1,234 reviews)
    </Typography>
  </Box>
</Stack>
```

#### Skeleton - Loading Placeholders
```jsx
import { Skeleton } from '@rspwn/design-system'

// Loading states
<Stack spacing={4}>
  <Flex align="center" gap={4}>
    <Skeleton.Circle size="60px" />
    <Stack spacing={2}>
      <Skeleton height="20px" width="200px" />
      <Skeleton height="16px" width="150px" />
    </Stack>
  </Flex>
  
  <Skeleton height="200px" borderRadius="lg" />
  
  <Stack spacing={2}>
    <Skeleton height="24px" />
    <Skeleton height="16px" width="80%" />
    <Skeleton height="16px" width="60%" />
  </Stack>
</Stack>
```

### Navigation Components

#### Breadcrumb - Navigation Trail
```jsx
import { Breadcrumb } from '@rspwn/design-system'

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/gaming">Gaming</Breadcrumb.Item>
  <Breadcrumb.Item href="/gaming/ai">AI Features</Breadcrumb.Item>
  <Breadcrumb.Item current>Advanced Settings</Breadcrumb.Item>
</Breadcrumb>
```

#### Pagination - Page Navigation
```jsx
import { Pagination } from '@rspwn/design-system'

<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast
  showPrevNext
  siblingCount={2}
  size="md"
/>
```

### Data Display Components

#### Table - Data Tables
```jsx
import { Table } from '@rspwn/design-system'

const columns = [
  {
    key: 'player',
    header: 'Player',
    accessor: 'name',
    sortable: true
  },
  {
    key: 'level',
    header: 'Level',
    accessor: 'level',
    sortable: true,
    align: 'center'
  },
  {
    key: 'score',
    header: 'Score',
    accessor: 'score',
    sortable: true,
    render: (value) => value.toLocaleString()
  },
  {
    key: 'status',
    header: 'Status',
    accessor: 'status',
    render: (value) => <Badge variant={value === 'online' ? 'success' : 'default'}>{value}</Badge>
  }
]

const data = [
  { id: 1, name: 'Pro Player', level: 47, score: 125000, status: 'online' },
  { id: 2, name: 'AI Master', level: 52, score: 180000, status: 'offline' },
  // ...
]

<Table 
  data={data}
  columns={columns}
  sortable
  selectable
  hoverable
  variant="bordered"
  selectedRows={selectedRows}
  onSelectionChange={setSelectedRows}
  onSort={handleSort}
/>
```

### Process & Timeline Components

#### Timeline - Event Timeline
```jsx
import { Timeline } from '@rspwn/design-system'

<Timeline>
  <Timeline.Item 
    title="Account Created"
    description="Welcome to RSPWN gaming platform"
    timestamp="2024-01-15"
    status="completed"
    icon={<Icon name="user-plus" />}
  />
  
  <Timeline.Item 
    title="First Game Played"
    description="Completed tutorial and first AI gaming session"
    timestamp="2024-01-16"
    status="completed"
    icon={<Icon name="gamepad" />}
  />
  
  <Timeline.Item 
    title="Achievement Unlocked"
    description="Reached level 25 in competitive play"
    timestamp="2024-02-01"
    status="current"
    icon={<Icon name="trophy" />}
  />
  
  <Timeline.Item 
    title="Premium Upgrade"
    description="Unlock advanced AI features"
    timestamp="Coming Soon"
    status="upcoming"
    icon={<Icon name="star" />}
  />
</Timeline>
```

#### Stepper - Step-by-Step Process
```jsx
import { Stepper } from '@rspwn/design-system'

const steps = [
  {
    title: 'Create Account',
    description: 'Set up your gaming profile',
    status: 'completed'
  },
  {
    title: 'Choose Games',
    description: 'Select your favorite game genres',
    status: 'completed'
  },
  {
    title: 'AI Configuration',
    description: 'Configure AI assistant preferences',
    status: 'current'
  },
  {
    title: 'Start Gaming',
    description: 'Begin your AI-enhanced gaming experience',
    status: 'upcoming'
  }
]

<Stepper steps={steps} currentStep={2} orientation="vertical" />
```

### Essential Responsive Development Workflow

```bash
# 1. Test on multiple screen sizes during development
# Use browser dev tools or these viewport sizes:

# Mobile: 375x667 (iPhone)
# Mobile Large: 414x896 (iPhone Pro)
# Tablet: 768x1024 (iPad)
# Desktop: 1440x900 (Laptop)
# Large Desktop: 1920x1080 (Desktop)
```

```jsx
// 2. Create responsive test component
function ResponsiveTest() {
  return (
    <Box>
      {/* Test component at different breakpoints */}
      <ResponsiveDebugger />
      
      {/* Test your components here */}
      <YourComponent />
    </Box>
  )
}

// 3. Use responsive development helpers
function DevelopmentHelpers() {
  if (process.env.NODE_ENV !== 'development') return null
  
  return (
    <Box 
      position="fixed" 
      bottom={4} 
      right={4} 
      bg="gray" 
      p={3} 
      borderRadius="md"
      zIndex={9999}
    >
      <ResponsiveDebugger />
    </Box>
  )
}
```

## 🏗️ TEMPLATE SYSTEM & ADVANCED LAYOUTS

The design system includes a powerful template system with hooks for configuration.

#### Template Hooks
```jsx
import { 
  useTemplateConfig, useTemplateSpacing, useTemplateTheme, useTemplateLayout
} from '@rspwn/design-system'

function CustomTemplate() {
  // Template configuration
  const config = useTemplateConfig()
  const { spacing, padding, margin } = useTemplateSpacing()
  const { colors, typography } = useTemplateTheme()
  const { header, sidebar, content, footer } = useTemplateLayout()
  
  return (
    <Box>
      <Typography variant="h2" style={{ color: colors.primary }}>
        Template with {config.layout} layout
      </Typography>
      <Box p={spacing.section}>
        Content with responsive spacing
      </Box>
    </Box>
  )
}
```

#### GridItem - Advanced Grid Control
```jsx
import { Grid, GridItem } from '@rspwn/design-system'

<Grid templateColumns="repeat(12, 1fr)" gap={4}>
  <GridItem colSpan={12} mb={4}>
    <Typography variant="h1">Full Width Header</Typography>
  </GridItem>
  
  <GridItem colSpan={{ xs: 12, md: 8 }}>
    <Card p={6}>
      <Typography variant="h3">Main Content</Typography>
      <Typography variant="body1">Primary game content area</Typography>
    </Card>
  </GridItem>
  
  <GridItem colSpan={{ xs: 12, md: 4 }}>
    <Stack spacing={4}>
      <Card p={4}>
        <Typography variant="h4">Player Stats</Typography>
      </Card>
      <Card p={4}>
        <Typography variant="h4">Achievements</Typography>
      </Card>
    </Stack>
  </GridItem>
  
  <GridItem colSpan={12} colStart={1}>
    <Footer />
  </GridItem>
</Grid>
```

## 🏗️ COMPLETE PAGE TEMPLATES & LAYOUTS

The design system includes pre-built templates for common page layouts:

### Landing Page Template
```jsx
import { LandingPageTemplate } from '@rspwn/design-system'

<LandingPageTemplate
  hero={{
    title: "RSPWN Gaming Platform",
    subtitle: "Next-generation AI-powered gaming experiences",
    cta: "Start Gaming",
    backgroundImage: "/hero-bg.jpg"
  }}
  features={[
    {
      title: "AI Integration",
      description: "Advanced AI algorithms enhance gameplay",
      icon: <Icon name="cpu" />
    },
    {
      title: "Real-time Analytics",
      description: "Track performance with detailed analytics",
      icon: <Icon name="chart" />
    }
  ]}
  testimonials={testimonialData}
  pricing={pricingData}
/>
```

### Dashboard Template
```jsx
import { DashboardTemplate } from '@rspwn/design-system'

<DashboardTemplate
  sidebar={<GameSidebar />}
  header={<DashboardHeader />}
  stats={[
    { label: "Active Players", value: "2.4M", trend: "+12%" },
    { label: "Games Played", value: "847K", trend: "+8%" },
    { label: "AI Sessions", value: "156K", trend: "+24%" }
  ]}
>
  <Grid templateColumns="2fr 1fr" gap={6}>
    <Card>
      <Chart data={analyticsData} />
    </Card>
    <Card>
      <ActivityFeed />
    </Card>
  </Grid>
</DashboardTemplate>
```

### Templates Configuration
```jsx
import { Templates, TemplateProvider } from '@rspwn/design-system'

// Available template types
const templateTypes = {
  LandingPage: Templates.LandingPage,
  Dashboard: Templates.Dashboard,
  Article: Templates.Article,
  ProductGrid: Templates.ProductGrid,
  Checkout: Templates.Checkout
}

// Template provider for global configuration
<TemplateProvider 
  config={{
    spacing: { section: 8, component: 6 },
    layout: { maxWidth: 'xl', padding: 4 },
    theme: { variant: 'gaming' }
  }}
>
  <YourTemplatedApp />
</TemplateProvider>
```

## 🎯 BRAND-COMPLIANT DESIGN PATTERNS

### DO's - Proper Brand Usage

#### ✅ Typography Hierarchy
```jsx
// Correct brand name usage
<Typography variant="brand" color="primary">RSPWN</Typography>

// Proper heading structure
<Box>
  <Typography variant="h1" mb={6}>Gaming Platform Features</Typography>
  <Typography variant="h2" mb={4}>AI-Powered Components</Typography>
  <Typography variant="body1" color="secondary" mb={4}>
    Professional body text using Inter font for excellent readability
    in gaming and professional contexts.
  </Typography>
</Box>
```

#### ✅ Strategic Color Usage
```jsx
// Primary blue ONLY for key actions
<Button variant="primary">Start Gaming</Button>
<Button variant="primary">Join Community</Button>

// Professional grayscale for content
<Card variant="elevated">
  <Box bg="gray" p={6}>
    <Typography variant="h3" color="primary">Feature Card</Typography>
    <Typography variant="body2" color="secondary">
      Professional content with proper contrast
    </Typography>
  </Box>
</Card>
```

#### ✅ High-Contrast Professional Layout
```jsx
<Box bg="dark" minHeight="100vh">
  <Container maxWidth="xl" py={12}>
    <Box textAlign="center" mb={12}>
      <Typography variant="brand" color="primary" mb={2}>RSPWN</Typography>
      <Typography variant="h1" color="primary" mb={6}>
        Professional Gaming Solutions
      </Typography>
      <Typography variant="body1" color="secondary" maxWidth="600px" mx="auto" mb={8}>
        Enterprise-grade components for building sophisticated gaming and AI platforms
        with professional polish and systematic consistency.
      </Typography>
      <Button variant="primary" size="lg">Explore Platform</Button>
    </Box>
  </Container>
</Box>
```

### DON'Ts - Brand Violations to Avoid

#### ❌ Typography Misuse
```jsx
// NEVER use Audiowide for body text
<Typography variant="brand" fontSize="16px">
  This is wrong - don't use Audiowide for body content
</Typography>

// NEVER stretch or modify logo
<Typography variant="brand" style={{ transform: 'scaleX(1.5)' }}>
  RSPWN  {/* Don't distort the brand name */}
</Typography>
```

#### ❌ Color Overuse
```jsx
// DON'T use blue decoratively
<Typography variant="h2" color="primary">
  Regular Section Title  {/* Blue should be for actions only */}
</Typography>

// DON'T use non-brand colors
<Button style={{ backgroundColor: '#ff0000' }}>
  Wrong Color Button  {/* Stick to the defined palette */}
</Button>
```

#### ❌ Layout Anti-Patterns
```jsx
// DON'T create low-contrast combinations
<Box bg="grayLight">
  <Typography color="muted">Hard to read text</Typography>
</Box>

// DON'T ignore spacing system
<Box style={{ padding: '13px', margin: '7px' }}>
  {/* Use design tokens: p={3}, m={2} */}
</Box>
```

## 🏆 ADVANCED IMPLEMENTATION PATTERNS

### Gaming Platform Layout Pattern
```jsx
function GamingPlatformLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Box bg="dark" minHeight="100vh">
        {/* Header Section */}
        <Container maxWidth="xl" py={8}>
          <Navigation>
            <Navigation.Brand>
              <Typography variant="brand" color="primary">RSPWN</Typography>
            </Navigation.Brand>
            <Navigation.Links>
              <Navigation.Link>Features</Navigation.Link>
              <Navigation.Link>Community</Navigation.Link>
              <Navigation.Link>Docs</Navigation.Link>
            </Navigation.Links>
            <Navigation.Actions>
              <Button variant="primary">Join Now</Button>
            </Navigation.Actions>
          </Navigation>
        </Container>

        {/* Hero Section */}
        <Container maxWidth="xl" py={16}>
          <Box textAlign="center" mb={12}>
            <Typography variant="h1" mb={6}>
              Next-Generation Gaming Platform
            </Typography>
            <Typography variant="body1" color="secondary" maxWidth="600px" mx="auto" mb={8}>
              Build extraordinary gaming experiences with enterprise-grade components
              and AI-powered tools designed for the future of interactive entertainment.
            </Typography>
            <Button variant="primary" size="xl" mb={4}>
              Start Building
            </Button>
            <Typography variant="caption" color="muted">
              Open source • Community driven • Production ready
            </Typography>
          </Box>

          {/* Feature Grid */}
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            <Card variant="elevated" hoverable>
              <Card.Content p={6}>
                <Typography variant="h4" mb={4}>AI-Powered Components</Typography>
                <Typography variant="body2" color="secondary" mb={6}>
                  Intelligent UI components that adapt to user behavior and gaming contexts
                  with professional polish and systematic consistency.
                </Typography>
                <Button variant="secondary">Learn More</Button>
              </Card.Content>
            </Card>

            <Card variant="elevated" hoverable>
              <Card.Content p={6}>
                <Typography variant="h4" mb={4}>Gaming-Optimized Design</Typography>
                <Typography variant="body2" color="secondary" mb={6}>
                  Dark theme interface optimized for gaming environments with high
                  contrast ratios and accessibility-first design principles.
                </Typography>
                <Button variant="secondary">Explore Design</Button>
              </Card.Content>
            </Card>

            <Card variant="elevated" hoverable>
              <Card.Content p={6}>
                <Typography variant="h4" mb={4}>Enterprise Ready</Typography>
                <Typography variant="body2" color="secondary" mb={6}>
                  Professional-grade components suitable for enterprise gaming platforms
                  with comprehensive TypeScript support and modern tooling.
                </Typography>
                <Button variant="secondary">View Docs</Button>
              </Card.Content>
            </Card>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
```

### AI Platform Dashboard Pattern
```jsx
function AIPlatformDashboard() {
  return (
    <Box bg="dark" minHeight="100vh" p={6}>
      <Container maxWidth="xxl">
        {/* Dashboard Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Typography variant="brand" color="primary" mb={2}>RSPWN</Typography>
            <Typography variant="h2">AI Platform Dashboard</Typography>
          </Box>
          <Button variant="primary">Deploy Model</Button>
        </Flex>

        {/* Stats Grid */}
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} mb={8}>
          <Card variant="filled">
            <Card.Content p={6}>
              <Typography variant="h3" color="primary">2.4M</Typography>
              <Typography variant="body2" color="secondary">Active Users</Typography>
            </Card.Content>
          </Card>
          
          <Card variant="filled">
            <Card.Content p={6}>
              <Typography variant="h3" color="primary">99.9%</Typography>
              <Typography variant="body2" color="secondary">Uptime</Typography>
            </Card.Content>
          </Card>
          
          <Card variant="filled">
            <Card.Content p={6}>
              <Typography variant="h3" color="primary">847</Typography>
              <Typography variant="body2" color="secondary">AI Models</Typography>
            </Card.Content>
          </Card>
        </Grid>

        {/* Main Content Area */}
        <Grid templateColumns="2fr 1fr" gap={6}>
          <Card variant="elevated">
            <Card.Content p={6}>
              <Typography variant="h4" mb={6}>Model Performance</Typography>
              <Box height="300px" bg="grayLight" display="flex" alignItems="center" justifyContent="center">
                <Typography color="secondary">Performance Chart Area</Typography>
              </Box>
            </Card.Content>
          </Card>
          
          <Card variant="elevated">
            <Card.Content p={6}>
              <Typography variant="h4" mb={6}>Recent Activity</Typography>
              <Stack spacing={4}>
                <Timeline>
                  <Timeline.Item 
                    title="Model deployed successfully"
                    timestamp="2 minutes ago"
                    status="completed"
                  />
                  <Timeline.Item 
                    title="Training completed"
                    timestamp="15 minutes ago"
                    status="completed"
                  />
                  <Timeline.Item 
                    title="New dataset uploaded"
                    timestamp="1 hour ago"
                    status="completed"
                  />
                </Timeline>
              </Stack>
            </Card.Content>
          </Card>
        </Grid>
      </Container>
    </Box>
  )
}
```

## 🔧 TECHNICAL IMPLEMENTATION DETAILS

### Development Commands
```bash
# Development workflow
npm run dev              # Start design system website
npm run storybook        # Component development environment

# Build processes  
npm run build            # Full project build
npm run build:lib        # Library build for npm publishing
npm run build-storybook  # Static Storybook files

# Quality assurance
npm run lint             # Code quality checks
```

### Project Architecture
```
src/
├── components/
│   ├── foundation/     # Typography, Box, Container, Grid, Flex, Stack, etc.
│   ├── ui/            # Button, Card, Navigation, Input, Modal, etc.
│   └── layout/        # Templates, Show, etc.
├── tokens/            # Design tokens & theme
├── pages/             # Design system website
└── types/             # TypeScript definitions
```

### Import Patterns
```jsx
// Design tokens
import { theme, colors, typography, spacing } from '@rspwn/design-system'

// Foundation components  
import { Box, Typography, Container, Grid, Flex, Stack, Section, Space, Divider } from '@rspwn/design-system'

// UI components
import { Button, Card, Navigation, Input, Modal, Alert, Table, Tabs } from '@rspwn/design-system'

// Complete import
import { 
  theme, Button, Typography, Card, Box, Container, Navigation,
  Input, Modal, Alert, Table, Tabs, Grid, Flex, Stack, 
  colors, spacing, shadows, radius 
} from '@rspwn/design-system'
```

### TypeScript Support
Full TypeScript declarations included:
```typescript
// Component props are fully typed
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  onClick?: () => void
}

// Theme interface available
import { DefaultTheme } from 'styled-components'
// Theme has full IntelliSense support
```

## 🚀 DEPLOYMENT & PUBLISHING

### NPM Package Details
- **Package**: `@rspwn/design-system`
- **Current Version**: 1.0.5 (ReactCurrentDispatcher fix)
- **React Compatibility**: ≥18.0.0
- **Bundle**: ESM + CommonJS formats
- **TypeScript**: Full declaration files included

### Integration Checklist
- [ ] Install with peer dependencies: `npm install @rspwn/design-system react react-dom styled-components`
- [ ] **CRITICAL**: Add GlobalStyle to remove default browser styling
- [ ] Wrap app with `<ThemeProvider theme={theme}>`
- [ ] **RESPONSIVE**: Test on mobile (320px), tablet (768px), and desktop (1024px+)
- [ ] Use `Typography variant="brand"` for RSPWN brand name only
- [ ] Apply primary blue color sparingly for key actions only
- [ ] Maintain professional dark theme with high contrast
- [ ] Follow systematic spacing using design tokens
- [ ] **RESPONSIVE**: Use responsive props for spacing, typography, and layout
- [ ] **ACCESSIBILITY**: Test keyboard navigation and screen readers
- [ ] **PERFORMANCE**: Use ShowOn/HideOn components to optimize rendering
- [ ] Test with React 18+ for optimal compatibility

## 🎯 SUCCESS CRITERIA FOR AI AGENTS

When building with RSPWN Design System, ensure:

1. **Brand Compliance**: Brand name uses Audiowide, body text uses Inter
2. **Color Discipline**: Primary blue only for key actions, professional grayscale elsewhere  
3. **Professional Aesthetics**: Clean layouts, high contrast, systematic consistency
4. **Accessibility**: Semantic structure, proper contrast ratios
5. **Gaming Optimization**: Dark theme, modern interface suitable for gaming platforms
6. **Enterprise Quality**: Business-appropriate aesthetics for professional use
7. **Component Usage**: Utilize the full range of 35+ available components appropriately
8. **Layout Systems**: Leverage Grid, Flex, Stack, and Section for proper structure
9. **Form Implementation**: Use comprehensive form components for user input
10. **Data Display**: Implement tables, charts, and analytics with proper components
11. **Responsive Design**: Utilize responsive hooks and utilities for device adaptation
12. **Template System**: Leverage pre-built templates for common page layouts
13. **Icon System**: Use the comprehensive icon library with proper semantics  
14. **Toast Notifications**: Implement proper notification patterns with ToastProvider
15. **Browser Reset**: Always implement GlobalStyle to remove default browser styling
16. **Mobile-First Design**: Design for mobile screens first, then enhance for larger screens
17. **Performance Optimization**: Use conditional rendering components for device-specific content
18. **Touch Optimization**: Ensure interactive elements are touch-friendly (min 44px target size)
19. **Responsive Testing**: Test on real devices and multiple screen sizes during development
20. **Spacing Strategy**: Typography components include sensible default margins - override only when needed
21. **Container Usage**: Always wrap page content in Container for proper max-widths and gutters
22. **Section Structure**: Use Section components to create proper page regions with semantic HTML
23. **Performance**: Implement lazy loading and conditional rendering for device-specific content

## 📚 RESOURCES

- **[Live Storybook](https://rspwn-ltd.github.io/rspwn-design-system/)** - Interactive component playground
- **[NPM Package](https://www.npmjs.com/package/@rspwn/design-system)** - Official package
- **GitHub Repository** - Source code and contributing guidelines

---

**Built for the future of gaming and AI platforms. Open source, community-driven, infinitely innovative.**

*RSPWN - Where gaming meets AI excellence.*