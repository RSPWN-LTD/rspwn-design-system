import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography } from '../components/foundation'
import { Button, Card, Navigation } from '../components/ui'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Tokens', href: '/tokens' },
]

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation items={navItems} />
      <Container size="xl">
        <Box py="20" display="flex" flexDirection="column" alignItems="center" gap="12">
          <Box display="flex" flexDirection="column" alignItems="center" gap="6" maxWidth="800px">
            <Typography variant="brand" align="center" color="white">
              RSPWN
            </Typography>
            <Typography variant="h2" align="center" color="secondary">
              Design System
            </Typography>
            <Typography variant="body1" align="center" color="muted" px="6">
              A comprehensive React component library built for modern gaming and AI platforms. 
              Create consistent, accessible, and beautiful user interfaces with RSPWN's design tokens and reusable components.
            </Typography>
            <Box display="flex" gap="4" mt="6">
              <Button as={Link} to="/components" size="lg">
                Explore Components
              </Button>
              <Button as={Link} to="/tokens" variant="outline" size="lg">
                Design Tokens
              </Button>
            </Box>
          </Box>

          <Box 
            display="grid" 
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" 
            gap="8" 
            width="100%" 
            mt="16"
          >
            <Card hoverable p="6">
              <Typography variant="h4" mb="4">
                Design Tokens
              </Typography>
              <Typography variant="body2" color="secondary" mb="4">
                Centralized design decisions including colors, typography, spacing, and more based on RSPWN brand guidelines.
              </Typography>
              <Button as={Link} to="/tokens" variant="ghost" size="sm">
                Learn More →
              </Button>
            </Card>

            <Card hoverable p="6">
              <Typography variant="h4" mb="4">
                Components
              </Typography>
              <Typography variant="body2" color="secondary" mb="4">
                Battle-tested React components that follow RSPWN design principles and accessibility best practices.
              </Typography>
              <Button as={Link} to="/components" variant="ghost" size="sm">
                Browse Components →
              </Button>
            </Card>

            <Card hoverable p="6">
              <Typography variant="h4" mb="4">
                Documentation
              </Typography>
              <Typography variant="body2" color="secondary" mb="4">
                Comprehensive guides, examples, and API references to help you build amazing experiences.
              </Typography>
              <Button variant="ghost" size="sm" disabled>
                Coming Soon
              </Button>
            </Card>
          </Box>

          <Box bg="gray" borderRadius="lg" p="8" width="100%" mt="16">
            <Typography variant="h3" mb="6" align="center">
              Quick Start
            </Typography>
            <Box bg="dark" borderRadius="md" p="4" mb="4">
              <Typography variant="body2" color="muted" as="code">
                npm install @rspwn/design-system
              </Typography>
            </Box>
            <Box bg="dark" borderRadius="md" p="4">
              <Typography variant="body2" color="muted" as="pre">
{`import { Button, Typography } from '@rspwn/design-system'

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to RSPWN</Typography>
      <Button variant="primary">Get Started</Button>
    </div>
  )
}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomePage