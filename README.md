# RSPWN Design System

A comprehensive React component library built for modern gaming and AI platforms, following RSPWN brand guidelines.

## Features

- 🎨 **Design Tokens** - Colors, typography, spacing, and shadows based on RSPWN brand guidelines
- 🧩 **React Components** - Reusable, accessible components with TypeScript support
- 📚 **Storybook Documentation** - Interactive component playground and documentation
- ⚡ **Modern Tooling** - Built with Vite, TypeScript, and Styled Components
- 🌙 **Dark Theme** - Professional dark theme optimized for gaming platforms

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start the design system website
npm run dev

# Start Storybook for component development
npm run storybook
```

### Build

```bash
# Build the project
npm run build

# Build Storybook
npm run build-storybook
```

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

## Usage

```jsx
import { Button, Typography, Card } from '@rspwn/design-system'

function App() {
  return (
    <div>
      <Typography variant="brand">RSPWN</Typography>
      <Typography variant="h1">Welcome to the future</Typography>
      
      <Card variant="elevated" hoverable>
        <Typography variant="h4" mb="4">
          Feature Card
        </Typography>
        <Typography variant="body2" color="secondary">
          Build amazing gaming experiences with RSPWN components
        </Typography>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
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

The project structure follows modern React patterns:

```
src/
├── components/
│   ├── foundation/     # Layout and typography primitives
│   └── ui/            # Reusable UI components
├── tokens/            # Design tokens (colors, spacing, etc.)
├── pages/             # Design system website pages
└── types/             # TypeScript definitions
```

## License

MIT License - see LICENSE file for details.

## Contributing

This is an open-source project. Contributions are welcome!