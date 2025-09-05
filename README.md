# RSPWN Design System

A comprehensive React component library built for modern gaming and AI platforms, following RSPWN brand guidelines.

[![npm version](https://badge.fury.io/js/%40rspwn%2Fdesign-system.svg)](https://www.npmjs.com/package/@rspwn/design-system)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://rspwn-ltd.github.io/rspwn-design-system/)

## Features

- 🎨 **Design Tokens** - Colors, typography, spacing, and shadows based on RSPWN brand guidelines
- 🧩 **React Components** - Reusable, accessible components with TypeScript support
- 📚 **Storybook Documentation** - Interactive component playground and documentation
- ⚡ **Modern Tooling** - Built with Vite, TypeScript, and Styled Components
- 🌙 **Dark Theme** - Professional dark theme optimized for gaming platforms
- 📦 **NPM Package** - Available as `@rspwn/design-system`

## Installation

```bash
npm install @rspwn/design-system styled-components
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom styled-components
```

## Quick Start

### Basic Setup

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button, Typography, theme } from '@rspwn/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '2rem', backgroundColor: '#000' }}>
        <Typography variant="brand" color="primary">RSPWN</Typography>
        <Typography variant="h1">Welcome to the future</Typography>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </ThemeProvider>
  )
}
```

### Available Components

```jsx
// Import individual components
import { 
  // Design tokens
  theme, colors, typography, spacing, shadows, radius,
  
  // Foundation components
  Typography, Box, Container,
  
  // UI components
  Button, Card, Navigation
} from '@rspwn/design-system'
```

## Documentation

- 📚 **[Storybook Documentation](https://rspwn-ltd.github.io/rspwn-design-system/)** - Interactive component playground
- 📦 **[NPM Package](https://www.npmjs.com/package/@rspwn/design-system)** - Package details and versions

## Design Tokens

The design system is built on a foundation of design tokens that encode RSPWN's brand guidelines:

### Colors
- **Foundation**: Brand Black (#000000), Brand White (#FFFFFF)
- **Innovation**: Primary Blue (#4A9EFF), Secondary Purple (#8B5CF6)
- **Text**: Primary (#FFFFFF), Secondary (#CCCCCC), Muted (#888888)
- **Grayscale**: Dark (#0A0A0A), Gray (#1A1A1A), Light (#2A2A2A)

### Typography
- **Brand Font**: Audiowide (for brand name and major headings only)
- **Body Font**: Inter (for all other content)
- **Scale**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

## Components

### Foundation Components
- **Typography** - Text rendering with variant system
- **Box** - Flexible layout primitive with spacing props
- **Container** - Responsive container with max-widths

### UI Components
- **Button** - Primary, secondary, outline, ghost, and danger variants
- **Card** - Default, elevated, outlined, and filled variants
- **Navigation** - Responsive navigation with mobile menu

## Advanced Usage

### Theme Provider Setup

The design system requires `ThemeProvider` from styled-components to work properly:

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@rspwn/design-system'

// Wrap your app with ThemeProvider
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  )
}
```

### Component Examples

```jsx
import { Button, Typography, Card, Box } from '@rspwn/design-system'

function ExamplePage() {
  return (
    <Box p={8} bg="dark">
      <Typography variant="brand" mb={4}>RSPWN</Typography>
      <Typography variant="h1" mb={6}>Welcome to the future</Typography>
      
      <Card variant="elevated" p={6} hoverable>
        <Card.Content>
          <Typography variant="h4" mb={4}>
            Feature Card
          </Typography>
          <Typography variant="body2" color="secondary" mb={4}>
            Build amazing gaming experiences with RSPWN components
          </Typography>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Card.Content>
      </Card>
    </Box>
  )
}
```

## Brand Guidelines

### Typography Usage
- ✅ Use Audiowide ONLY for brand name "RSPWN" and major headings
- ✅ Use Inter for all body text and secondary headings
- ✅ Maintain proper hierarchy and contrast
- ❌ Never use Audiowide for body text or long content

### Color Usage
- ✅ Primary Blue (#4A9EFF) exclusively for primary actions and key interactive elements
- ✅ Maintain professional grayscale hierarchy for content structure
- ✅ White text (#FFFFFF) for primary content, grays for secondary information
- ❌ Avoid decorative color usage in titles or non-functional elements

### Design Principles
- **Professional Polish**: Clean, refined interfaces without unnecessary visual effects
- **Systematic Consistency**: Rigorous adherence to spacing, typography, and color systems
- **Accessibility First**: High contrast ratios and semantic structure throughout
- **Purposeful Color**: Strategic use of blue accent for primary actions only
- **Enterprise Ready**: Business-appropriate aesthetics suitable for professional gaming platforms

## Development

This section is for contributors working on the design system itself.

### Setup

```bash
git clone https://github.com/RSPWN-LTD/rspwn-design-system.git
cd rspwn-design-system
npm install
```

### Development Scripts

```bash
# Start the design system website
npm run dev

# Start Storybook for component development
npm run storybook

# Build the library for publishing
npm run build:lib

# Build Storybook static files
npm run build-storybook

# Run linting
npm run lint
```

### Project Structure

```
src/
├── components/
│   ├── foundation/     # Layout and typography primitives
│   └── ui/            # Reusable UI components
├── tokens/            # Design tokens (colors, spacing, etc.)
├── pages/             # Design system website pages
└── types/             # TypeScript definitions
```

### Publishing

The package is automatically published to npm via GitHub Actions when a new release is created. See the [deployment workflow](.github/workflows/publish.yml) for details.

## License

MIT License - see LICENSE file for details.

## Contributing

This is an open-source project. Contributions are welcome!