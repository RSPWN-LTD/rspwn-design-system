# RSPWN Design System AI Tutorial
**The Complete Guide for AI Agents Building with RSPWN's Standardized Gaming Platform**

---

## 🎯 MISSION: Rapid Development with Visual Consistency

RSPWN Design System is a React component library built for modern gaming and AI platforms. **The primary goal is to enable rapid development of standardized applications while maintaining strict visual consistency across all implementations.**

This library intentionally provides limited customization options to ensure that regardless of how developers use the components, the final applications will look cohesive and professional. The design system prioritizes speed of development and guaranteed visual consistency over individual customization preferences.

## 🏗️ CORE PHILOSOPHY

### Key Principles
- **Standardization over customization**: Components are designed with fixed styling patterns to ensure consistency
- **Rapid application development**: Pre-built components and layouts enable fast project setup  
- **Visual consistency guarantee**: Limited customization options prevent visual fragmentation across applications
- **Professional gaming aesthetic**: Dark theme optimized for gaming and AI platforms with strict RSPWN brand guidelines
- **Minimal customization surface**: Components expose only essential props to maintain visual consistency
- **Opinionated defaults**: Strong default styling ensures applications look professional out-of-the-box

## 📦 INSTALLATION & SETUP

### Package Installation
```bash
# Install the design system with peer dependencies
npm install @rspwn/design-system react react-dom styled-components
```

### React Compatibility
- **Minimum**: React 18.0.0
- **Recommended**: React ≥18.0.0
- **Fully Tested**: React 18.x

### Essential Setup Pattern
```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@rspwn/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your application components go here */}
    </ThemeProvider>
  )
}
```

## 🎨 BRAND IDENTITY & VISUAL FOUNDATION (CRITICAL)

### Typography Rules
- **Audiowide font**: ONLY for brand name "RSPWN" and major headings
- **Inter font**: For all body text and secondary headings
- **NEVER** use Audiowide for body text or long content

### Color Usage
- **Primary Blue (#4A9EFF)**: Exclusively for primary actions and key interactive elements
- **Professional grayscale hierarchy**: For content structure
- **White text (#FFFFFF)**: Primary content  
- **Gray variants**: Secondary information
- Avoid decorative color usage in titles or non-functional elements

### Visual Identity Rules

#### ✅ CORRECT Typography Usage
```jsx
import { Typography } from '@rspwn/design-system'

// ✅ Correct brand usage
<Typography variant="brand">RSPWN</Typography>

// ✅ Correct heading usage  
<Typography variant="h1">Welcome to the Platform</Typography>

// ✅ Correct body text usage
<Typography variant="body1">Your main content goes here</Typography>
```

#### ❌ WRONG Typography Usage
```jsx
// ❌ Don't use brand variant for long text
<Typography variant="brand">This is a long paragraph of text...</Typography>

// ❌ Don't use Audiowide for body content
<Typography variant="brand" style={{ fontSize: '16px' }}>
  Regular content text
</Typography>
```

#### ✅ CORRECT Button Usage
```jsx
import { Button } from '@rspwn/design-system'

// ✅ Primary button for main actions
<Button variant="primary">Get Started</Button>

// ✅ Secondary for supporting actions  
<Button variant="secondary">Learn More</Button>

// ✅ Outline for alternative actions
<Button variant="outline">Cancel</Button>
```

## 📋 COMPLETE COMPONENT LIBRARY

### Import Pattern
```jsx
import { 
  // Design Tokens
  theme, colors, typography, spacing,
  
  // Foundation Components
  Typography, Box, Container, Grid, Flex, Stack, Section, Space, Divider,
  
  // UI Components  
  Button, Card, Input, TextArea, Select, Checkbox, Switch, DatePicker,
  Modal, Drawer, Navigation, Footer, Toast,
  Accordion, Alert, Avatar, Badge, Image, Icon,
  Progress, Rating, Skeleton, Pagination,
  Table, Timeline, Search, Tooltip, Chart,
  Breadcrumb, RadioGroup, Slider, Stepper, Stats,
  
  // Sections Components
  BentoGrid, CallToAction, HeroSection, SidebarNavigation
} from '@rspwn/design-system'
```

### Foundation Components

#### Typography - Text Rendering System
```jsx
import { Typography } from '@rspwn/design-system'

// Brand name - ONLY use for "RSPWN"
<Typography variant="brand">RSPWN</Typography>

// Headings - Use for section titles
<Typography variant="h1">Major Section Title</Typography>
<Typography variant="h2">Subsection Title</Typography>

// Body content - Use for all regular text
<Typography variant="body1">
  Primary body content with professional typography using Inter font.
</Typography>

// Secondary text
<Typography variant="body2" color="muted">
  Secondary information and captions
</Typography>
```

#### Box - Flexible Layout Container
```jsx
import { Box } from '@rspwn/design-system'

// Basic container usage
<Box variant="default">
  <Typography>Basic container content</Typography>
</Box>

// Card-style container
<Box variant="card">
  <Typography variant="h4">Card Content</Typography>
  <Typography variant="body1">Card description</Typography>
</Box>
```

#### Container - Responsive Width Management
```jsx
import { Container } from '@rspwn/design-system'

// Standard container with responsive behavior
<Container variant="default">
  <Typography variant="h1">Centered Content</Typography>
  <Typography variant="body1">
    Automatically handles max-width and responsive padding
  </Typography>
</Container>
```

#### Grid & Layout Components
```jsx
import { Grid, Flex, Stack, Section, Space, Divider } from '@rspwn/design-system'

// Grid layouts with responsive behavior
<Grid variant="auto">
  <Box variant="card">Item 1</Box>
  <Box variant="card">Item 2</Box>
  <Box variant="card">Item 3</Box>
</Grid>

// Flexible layouts
<Flex gap="4">
  <Typography variant="h3">Title</Typography>
  <Button variant="primary">Action</Button>
</Flex>

// Vertical stacking
<Stack variant="default">
  <Typography variant="h2">Title</Typography>
  <Typography variant="body1">Content</Typography>
  <Button variant="primary">Action</Button>
</Stack>

// Semantic sections
<Section variant="default">
  <Typography color="white">
    Section content with built-in container and padding
  </Typography>
</Section>

// Visual separators
<Divider 
  orientation="horizontal"
  thickness="thin"
  color="light"
/>

// Spacing control
<Space size="4" />
```

### UI Components

#### Button - Action Elements
```jsx
import { Button } from '@rspwn/design-system'

// Primary actions (uses brand blue - USE SPARINGLY)
<Button variant="primary" size="lg">Start Gaming</Button>

// Secondary actions (professional gray)
<Button variant="secondary" size="md">Learn More</Button>

// Subtle actions
<Button variant="ghost" size="sm">Cancel</Button>

// Danger/warning states
<Button variant="danger" size="md">Delete</Button>

// Interactive example
<Button 
  variant="primary" 
  onClick={() => alert('Button clicked!')}
>
  Click me!
</Button>
```

#### Card - Content Containers
```jsx
import { Card } from '@rspwn/design-system'

<Card variant="elevated">
  <Typography variant="h4" style={{ marginBottom: '1rem' }}>
    Feature Title
  </Typography>
  <Typography variant="body1">
    Descriptive content about this gaming feature or capability
  </Typography>
</Card>
```

#### Form Components
```jsx
import { Input, TextArea, Select, Checkbox, Switch, DatePicker, RadioGroup, Slider, Stepper } from '@rspwn/design-system'

// Text Input
<Input 
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  variant="default"
  size="md"
/>

// Text Area
<TextArea 
  placeholder="Enter your message..."
  variant="default"
  size="md"
  rows={4}
/>

// Select Dropdown
<Select 
  options={[
    { value: 'option1', label: 'Gaming Platform' },
    { value: 'option2', label: 'AI Tools' }
  ]}
  placeholder="Select an option..."
  variant="default"
  size="md"
/>

// Checkbox
<Checkbox 
  label="I agree to the terms and conditions"
  size="md"
/>

// Switch
<Switch 
  label="Enable notifications"
  size="md"
/>

// Date Picker
<DatePicker 
  label="Event Date"
  variant="default"
  size="md"
  showCalendarIcon={true}
/>

// Radio Group
<RadioGroup 
  options={[
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },  
    { value: "expert", label: "Expert" }
  ]}
  label="Skill Level"
  variant="default"
  size="md"
/>

// Slider
<Slider 
  min={0}
  max={100}
  defaultValue={50}
  label="Audio Volume"
  variant="single"
  size="md"
  showTicks={true}
/>

// Stepper
<Stepper 
  steps={[
    { id: "1", title: "Create Account", description: "Set up your gaming profile" },
    { id: "2", title: "Choose Plan", description: "Select your subscription tier" },
    { id: "3", title: "Start Gaming", description: "Begin your journey" }
  ]}
  activeStep={1}
  orientation="horizontal"
  size="md"
/>
```

#### Interactive Components
```jsx
import { Modal, Drawer, Accordion, Alert, Avatar, Badge, Search, Image, Icon, Toast } from '@rspwn/design-system'

// Modal Dialog
<Modal 
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Action"
  size="md"
>
  <Typography variant="body1">
    Are you sure you want to delete this gaming profile?
  </Typography>
</Modal>

// Side Drawer
<Drawer 
  isOpen={showDrawer}
  onClose={() => setShowDrawer(false)}
  side="right"
  size="md"
  title="Game Settings"
>
  <Typography variant="h4">Audio Settings</Typography>
</Drawer>

// Search Component
<Search 
  placeholder="Search games, players..."
  options={searchOptions}
  size="md"
  variant="default"
  autocomplete={true}
/>

// Image Component
<Image 
  src="/gaming-screenshot.jpg"
  alt="Gaming platform screenshot"
  width="400px"
  height="300px"
  objectFit="cover"
  loading="lazy"
/>

// Icon Component
<Icon 
  name="gamepad"
  size="md"
  color="#4A9EFF"
/>

// Toast Notifications
<Toast 
  id="notification"
  title="Success"
  description="Your game settings have been saved"
  variant="success"
  duration={5000}
/>

// Alert Messages
<Alert 
  severity="info"
  variant="subtle"
  title="Platform Update"
>
  New gaming features are now available in the platform.
</Alert>

// Avatar
<Avatar 
  name="John Doe"
  size="md"
  variant="circular"
/>

// Badge
<Badge 
  variant="solid"
  size="md"
  color="blue"
>
  Premium
</Badge>

// Accordion
<Accordion variant="default">
  <Accordion.Item id="item1" title="Gaming Features">
    Advanced gaming features powered by AI technology.
  </Accordion.Item>
</Accordion>
```

#### Data Display Components
```jsx
import { Progress, Rating, Skeleton, Pagination, Tooltip, Table, Timeline, Chart, Breadcrumb, Stats } from '@rspwn/design-system'

// Data Table
<Table 
  data={playerData}
  columns={[
    { key: 'name', header: 'Player', accessor: 'name' },
    { key: 'level', header: 'Level', accessor: 'level', sortable: true },
    { key: 'score', header: 'Score', accessor: 'score', sortable: true }
  ]}
  variant="default"
  size="md"
  sortable={true}
  hoverable={true}
/>

// Timeline Events
<Timeline 
  items={[
    {
      id: 1,
      title: "Account Created",
      description: "Welcome to RSPWN gaming platform", 
      timestamp: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      title: "First Game Played",
      description: "Completed tutorial session",
      timestamp: "2024-01-16", 
      status: "current"
    }
  ]}
  size="md"
  variant="default"
/>

// Progress Bar
<Progress 
  value={75}
  max={100}
  variant="linear"
  size="md"
  color="blue"
/>

// Star Rating
<Rating 
  value={4}
  maxRating={5}
  size="md"
  readOnly={false}
/>

// Loading Skeleton
<Skeleton 
  variant="rectangular"
  width="300px"
  height="40px"
  animation="pulse"
/>

// Pagination
<Pagination 
  currentPage={5}
  totalPages={20}
  onPageChange={(page) => console.log('Page:', page)}
  size="md"
  variant="default"
/>

// Tooltip
<Tooltip content="This feature uses advanced AI algorithms">
  <Button variant="primary">AI Gaming Mode</Button>
</Tooltip>

// Chart Component
<Chart 
  type="bar"
  data={[
    { label: "Wins", value: 45, color: "#4A9EFF" },
    { label: "Losses", value: 23, color: "#6B7280" },
    { label: "Draws", value: 12, color: "#10B981" }
  ]}
  title="Match Statistics"
  subtitle="Your gaming performance this month"
  height={300}
  showLegend={true}
/>

// Breadcrumb Navigation
<Breadcrumb 
  items={[
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Tournament", href: "/games/tournament" },
    { label: "Championship 2024", href: "#" }
  ]}
  size="md"
  variant="default"
/>

// Statistics Display
<Stats 
  items={[
    {
      id: "1",
      name: "Total Players",
      value: "2,847",
      change: { value: 12, type: "increase" },
      icon: "👥"
    },
    {
      id: "2", 
      name: "Active Matches",
      value: "1,234",
      change: { value: 5, type: "increase" },
      icon: "🎮"
    }
  ]}
  variant="default"
/>
```

### Sections Components

#### HeroSection - Landing Page Hero
```jsx
import { HeroSection } from '@rspwn/design-system'

<HeroSection
  variant="centered"
  title="The Ultimate Competitive Gaming Platform"
  subtitle="Join millions of professional gamers worldwide. Experience next-generation competitive gaming with cutting-edge technology."
  announcement={{
    text: "🏆 World Championship 2024 - Registration Open",
    link: {
      text: "Register Now",
      href: "#tournament"
    }
  }}
  primaryAction={{
    text: "Start Gaming",
    href: "#play"
  }}
  secondaryAction={{
    text: "Learn More", 
    href: "#about"
  }}
/>
```

#### BentoGrid - Feature Showcase
```jsx
import { BentoGrid } from '@rspwn/design-system'

const gamingFeatures = [
  {
    id: 1,
    title: "AI Integration",
    description: "Advanced AI algorithms enhance gameplay",
    icon: "🤖",
    size: "large" as const,
    color: "primary" as const
  },
  {
    id: 2,
    title: "Real-time Analytics", 
    description: "Track performance with detailed analytics",
    icon: "📊",
    size: "medium" as const,
    color: "secondary" as const
  }
]

<BentoGrid
  title="Complete Gaming Platform"
  subtitle="Everything you need to build professional gaming experiences"
  items={gamingFeatures}
  variant="default"
/>
```

#### CallToAction - Action Sections
```jsx
import { CallToAction } from '@rspwn/design-system'

<CallToAction
  title="Ready to Dominate the Competition?"
  description="Join thousands of professional gamers on RSPWN. Experience next-generation competitive gaming with cutting-edge technology."
  primaryButton={{
    text: "Start Gaming",
    href: "#signup"
  }}
  secondaryButton={{
    text: "Learn More",
    href: "#about"
  }}
  variant="centered"
/>
```

#### Navigation Components
```jsx
import { Navigation, Footer, SidebarNavigation } from '@rspwn/design-system'

// Main Navigation
<Navigation 
  items={[
    { label: "Home", href: "/", current: true },
    { label: "Games", href: "/games" },
    { label: "Tournaments", href: "/tournaments" }
  ]}
  currentPath="/"
/>

// Footer
<Footer 
  links={[
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ]}
  socialLinks={[
    { platform: "twitter", url: "https://twitter.com/rspwn" },
    { platform: "discord", url: "https://discord.gg/rspwn" }
  ]}
/>

// Sidebar Navigation
<SidebarNavigation 
  brandName="RSPWN"
  navigation={[
    { name: "Dashboard", href: "#dashboard", icon: "🎯", current: true },
    { name: "Games", href: "#games", icon: "🎮", current: false }
  ]}
/>
```

## 🏗️ COMMON PATTERNS & LAYOUTS

### Page Layout Pattern
```jsx
import { Container, Box, Typography, Card, Button } from '@rspwn/design-system'

function GamePlatformPage() {
  return (
    <Container maxWidth="lg">
      <Box>
        {/* Header */}
        <Typography variant="brand" style={{ marginBottom: '0.5rem' }}>RSPWN</Typography>
        <Typography variant="h1" style={{ marginBottom: '1.5rem' }}>Gaming Platform</Typography>
        
        {/* Main Content */}
        <Card variant="elevated">
          <Typography variant="h3" style={{ marginBottom: '1rem' }}>
            Welcome to Professional Gaming
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
            Experience the future of competitive gaming with AI-powered features 
            and enterprise-grade reliability.
          </Typography>
          <Button variant="primary">Get Started</Button>
        </Card>
      </Box>
    </Container>
  )
}
```

### Form Layout Pattern  
```jsx
import { Box, Typography, Input, Button } from '@rspwn/design-system'

function SignInForm() {
  return (
    <Box style={{ maxWidth: '400px' }}>
      <Typography variant="h2" style={{ marginBottom: '1.5rem' }}>Sign In</Typography>
      
      <Input 
        label="Email"
        type="email"
        placeholder="Enter your email"
        style={{ marginBottom: '1rem' }}
      />
      
      <Input
        label="Password" 
        type="password"
        placeholder="Enter your password"
        style={{ marginBottom: '1.5rem' }}
      />
      
      <Button variant="primary" fullWidth type="submit">
        Sign In
      </Button>
    </Box>
  )
}
```

### Dashboard Layout Pattern
```jsx
import { Container, Grid, Card, Typography, Navigation } from '@rspwn/design-system'

function GameDashboard() {
  return (
    <Container maxWidth="xl">
      {/* Navigation */}
      <Navigation items={navigationItems} currentPath="/dashboard" />
      
      {/* Dashboard Content */}
      <Grid variant="auto" style={{ marginTop: '2rem' }}>
        <Card variant="elevated">
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            Player Stats
          </Typography>
          <Typography variant="body1">
            Track your gaming performance and achievements
          </Typography>
        </Card>
        
        <Card variant="elevated">
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            Recent Games
          </Typography>
          <Typography variant="body1">
            View your latest gaming sessions and results
          </Typography>
        </Card>
        
        <Card variant="elevated">
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            Tournament Schedule
          </Typography>
          <Typography variant="body1">
            Upcoming tournaments and competitions
          </Typography>
        </Card>
      </Grid>
    </Container>
  )
}
```

## 🎯 DESIGN TOKENS & THEME ACCESS

### Available Design Tokens
```jsx
import { theme, colors, typography, spacing } from '@rspwn/design-system'

// Colors
const brandColors = {
  foundation: theme.colors.foundation, // black, white
  innovation: theme.colors.innovation, // primaryBlue, secondaryPurple
  text: theme.colors.text,            // primary, secondary, muted
  gray: theme.colors.gray             // dark, base, light
}

// Typography
const fonts = {
  brand: theme.typography.fonts.brand, // Audiowide
  body: theme.typography.fonts.body    // Inter
}

// Spacing
const spacingScale = {
  small: theme.spacing[2],   // 8px
  medium: theme.spacing[4],  // 16px
  large: theme.spacing[8]    // 32px
}
```

### Using Theme in Custom Components
```jsx
import styled from 'styled-components'
import { theme } from '@rspwn/design-system'

const CustomContainer = styled.div`
  background-color: ${theme.colors.gray.dark};
  padding: ${theme.spacing[6]};
  border-radius: ${theme.radius.md};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.body};
`
```

## 🚀 DEVELOPMENT WORKFLOW

### Development Commands
```bash
# Development
npm run dev              # Start design system website (Vite dev server)
npm run storybook        # Start Storybook for component development

# Build
npm run build            # Build the project (TypeScript compilation + Vite build)
npm run build:lib        # Build library for publishing (uses tsconfig.lib.json)
npm run build-storybook  # Build Storybook static files

# Quality
npm run lint             # ESLint with TypeScript support

# Publishing
npm run prepublishOnly   # Automatically runs build:lib before publishing
```

### Project Architecture
```
src/
├── components/
│   ├── foundation/     # Typography, Box, Container, Grid, Flex, Stack, etc.
│   ├── ui/            # Button, Card, Navigation, Input, Modal, etc.
│   └── sections/      # BentoGrid, HeroSection, CallToAction, etc.
├── tokens/            # Design tokens & theme
├── pages/             # Design system website
└── types/             # TypeScript definitions
```

## 📋 COMPLETE COMPONENT REFERENCE

The RSPWN Design System includes the following complete set of components:

### Foundation Components (Layout Primitives)
- **Typography**: Text rendering with brand and body variants
- **Box**: Flexible layout container with variant system
- **Container**: Responsive width management with auto-centering  
- **Grid**: CSS Grid layouts with responsive behavior
- **Flex**: Flexbox layouts with gap and alignment control
- **Stack**: Vertical/horizontal stacking with consistent spacing
- **Section**: Semantic page sections with built-in containers
- **Space**: Spacing control component for fine-tuned layouts
- **Divider**: Visual separators (horizontal/vertical lines)

### Form Components
- **Input**: Text input fields with labels and validation
- **TextArea**: Multi-line text input with auto-resize options
- **Select**: Dropdown selection with search and grouping
- **Checkbox**: Boolean selection with helper text support
- **Switch**: Toggle controls for settings and preferences
- **DatePicker**: Date selection with calendar interface
- **RadioGroup**: Single selection from multiple options
- **Slider**: Range input with single or dual handles
- **Stepper**: Multi-step form progress indicator

### UI Components (Interactive Elements)
- **Button**: Action buttons with variant system (primary, secondary, ghost, danger)
- **Card**: Content containers with elevation and hover effects
- **Modal**: Dialog windows with overlay and escape handling
- **Drawer**: Side panels for settings and navigation
- **Navigation**: Top navigation bars with responsive behavior
- **Footer**: Page footers with links and social media
- **Accordion**: Collapsible content sections
- **Alert**: Status messages with severity levels
- **Avatar**: User profile images with fallback initials
- **Badge**: Status indicators and labels
- **Image**: Optimized images with loading states and fallbacks
- **Icon**: SVG icon system with customizable size and color
- **Toast**: Notification messages with auto-dismiss functionality

### Data Display Components
- **Table**: Data tables with sorting, selection, and pagination
- **Timeline**: Event timelines with status indicators
- **Progress**: Progress bars (linear and circular variants)
- **Rating**: Star rating system with half-star support
- **Skeleton**: Loading placeholders with animation
- **Pagination**: Page navigation with customizable controls
- **Tooltip**: Contextual help with positioning options
- **Search**: Search input with autocomplete and filtering
- **Chart**: Data visualization with bar, line, area, and pie chart types
- **Breadcrumb**: Navigation path indicator for hierarchical content
- **Stats**: Statistical metrics display with change indicators

### Section Components (Pre-built Layouts)
- **HeroSection**: Landing page hero sections with CTAs
- **BentoGrid**: Feature showcase grids with interactive tiles
- **CallToAction**: Conversion-focused action sections
- **SidebarNavigation**: Application sidebar with teams and settings

## ✅ SUCCESS CRITERIA FOR AI AGENTS

When building with RSPWN Design System, ensure:

1. **Brand Compliance**: Brand name uses Audiowide (`variant="brand"`), body text uses Inter
2. **Color Discipline**: Primary blue only for key actions, professional grayscale elsewhere  
3. **Component Usage**: Utilize available components appropriately with minimal customization
4. **Consistency**: Every application built with this system should look cohesive
5. **Speed**: Developers can build applications quickly without extensive design decisions
6. **Professional Aesthetics**: Clean layouts, high contrast, systematic consistency
7. **Standardization**: Follow fixed styling patterns to ensure visual consistency
8. **Rapid Development**: Use pre-built components and opinionated defaults

### DON'Ts - Common Mistakes to Avoid

#### ❌ Typography Violations
```jsx
// DON'T use brand variant for long content
<Typography variant="brand">
  This is a long paragraph that should use body text instead
</Typography>

// DON'T customize fonts outside the system
<Typography style={{ fontFamily: 'Arial' }}>Text</Typography>
```

#### ❌ Color Violations
```jsx
// DON'T use blue decoratively for titles
<Typography variant="h2" style={{ color: '#4A9EFF' }}>
  Regular Section Title
</Typography>

// DON'T use non-brand colors
<Button style={{ backgroundColor: '#ff0000' }}>
  Wrong Color Button
</Button>
```

#### ❌ Excessive Customization
```jsx
// DON'T over-customize components - defeats the purpose
<Button 
  variant="primary"
  style={{ 
    borderRadius: '20px',
    fontSize: '18px',
    padding: '15px 30px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
  }}
>
  Over-customized Button
</Button>
```

## 📚 RESOURCES

- **Package**: `@rspwn/design-system` (React 18+, TypeScript)
- **Storybook**: Interactive component playground (`npm run storybook`)
- **Repository**: Full source code and contributing guidelines

---

**Built for rapid development and visual consistency. Professional gaming platforms made simple.**

*RSPWN - Where standardization meets innovation.*