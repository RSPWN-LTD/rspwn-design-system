import React from 'react'
import { Container, Box, Typography } from '../components/foundation'
import { Button, Card, Navigation } from '../components/ui'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Tokens', href: '/tokens' },
]

const ComponentsPage: React.FC = () => {
  return (
    <>
      <Navigation items={navItems} />
      <Container size="xl">
        <Box py={12}>
          <Typography variant="h1" mb={4}>
            Components
          </Typography>
          <Typography variant="body1" color="secondary" mb={12}>
            Reusable React components built with RSPWN design principles
          </Typography>

          <Box display="flex" flexDirection="column" gap={16}>
            {/* Typography Section */}
            <Box>
              <Typography variant="h2" mb={6}>
                Typography
              </Typography>
              <Card p={6}>
                <Box display="flex" flexDirection="column" gap={4}>
                  <Typography variant="brand">RSPWN Brand Text</Typography>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="body1">Body text with normal weight and readable line height.</Typography>
                  <Typography variant="body2" color="secondary">
                    Secondary body text that's slightly smaller.
                  </Typography>
                  <Typography variant="caption" color="muted">
                    Caption text for additional information
                  </Typography>
                </Box>
              </Card>
            </Box>

            {/* Buttons Section */}
            <Box>
              <Typography variant="h2" mb={6}>
                Buttons
              </Typography>
              <Card p={6}>
                <Box display="flex" flexDirection="column" gap={6}>
                  <Box display="flex" gap={4} flexWrap="wrap">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                  </Box>
                  
                  <Box display="flex" gap={4} flexWrap="wrap">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </Box>
                  
                  <Box display="flex" gap={4} flexWrap="wrap">
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                  </Box>

                  <Button fullWidth>Full Width Button</Button>
                </Box>
              </Card>
            </Box>

            {/* Cards Section */}
            <Box>
              <Typography variant="h2" mb={6}>
                Cards
              </Typography>
              <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
                <Card variant="default">
                  <Typography variant="h4" mb={3}>Default Card</Typography>
                  <Typography variant="body2" color="secondary">
                    This is a default card with base styling and subtle shadow.
                  </Typography>
                </Card>
                
                <Card variant="elevated" hoverable>
                  <Typography variant="h4" mb={3}>Elevated Card</Typography>
                  <Typography variant="body2" color="secondary">
                    This card has more prominent shadows and hover effects.
                  </Typography>
                </Card>
                
                <Card variant="outlined" clickable>
                  <Typography variant="h4" mb={3}>Outlined Card</Typography>
                  <Typography variant="body2" color="secondary">
                    This card uses borders instead of shadows and is clickable.
                  </Typography>
                </Card>
              </Box>
            </Box>

            {/* Layout Section */}
            <Box>
              <Typography variant="h2" mb={6}>
                Layout Components
              </Typography>
              <Card p={6}>
                <Typography variant="h4" mb={4}>Box & Container</Typography>
                <Typography variant="body2" color="secondary" mb={6}>
                  Box provides flexible layout primitives with spacing, positioning, and styling props.
                  Container centers content with responsive max-widths.
                </Typography>
                
                <Box bg="gray" p={4} borderRadius="md" mb={4}>
                  <Box bg="blue" p={3} borderRadius="base" mb={3} opacity="0.8">
                    <Typography variant="body2" color="white">Nested Box 1</Typography>
                  </Box>
                  <Box bg="purple" p={3} borderRadius="base" opacity="0.8">
                    <Typography variant="body2" color="white">Nested Box 2</Typography>
                  </Box>
                </Box>
                
                <Box display="flex" gap={3} flexWrap="wrap">
                  <Box bg="blue" p={3} borderRadius="base" flex="1" minWidth="100px">
                    <Typography variant="caption" color="white">Flex Item 1</Typography>
                  </Box>
                  <Box bg="purple" p={3} borderRadius="base" flex="1" minWidth="100px">
                    <Typography variant="caption" color="white">Flex Item 2</Typography>
                  </Box>
                  <Box bg="gray" p={3} borderRadius="base" flex="1" minWidth="100px">
                    <Typography variant="caption" color="white">Flex Item 3</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default ComponentsPage