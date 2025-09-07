import React from 'react'
import { Container, Box, Typography } from '../components/foundation'
import { Card, Navigation } from '../components/ui'
import { colors, typography, spacing, shadows } from '../tokens'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Tokens', href: '/tokens' },
]

const TokensPage: React.FC = () => {
  return (
    <>
      <Navigation items={navItems} />
      <Container size="xl">
        <Box py={12}>
          <Typography variant="h1" mb={4}>
            Design Tokens
          </Typography>
          <Typography variant="body1" color="secondary" mb={12}>
            The foundational design decisions that power the RSPWN Design System
          </Typography>

          <Box display="flex" flexDirection="column" gap={16}>
            {/* Colors */}
            <Box>
              <Typography variant="h2" mb={6}>
                Colors
              </Typography>
              
              {/* Foundation Colors */}
              <Box mb={8}>
                <Typography variant="h4" mb={4}>Foundation</Typography>
                <Box display="flex" gap={4} flexWrap="wrap">
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="black" height="60px" borderRadius="md" mb={3} border></Box>
                    <Typography variant="caption" color="muted">Brand Black</Typography>
                    <Typography variant="body2">#000000</Typography>
                  </Card>
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="white" height="60px" borderRadius="md" mb={3} border></Box>
                    <Typography variant="caption" color="muted">Brand White</Typography>
                    <Typography variant="body2">#FFFFFF</Typography>
                  </Card>
                </Box>
              </Box>

              {/* Innovation Colors */}
              <Box mb={8}>
                <Typography variant="h4" mb={4}>Innovation</Typography>
                <Box display="flex" gap={4} flexWrap="wrap">
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="blue" height="60px" borderRadius="md" mb={3}></Box>
                    <Typography variant="caption" color="muted">Primary Blue</Typography>
                    <Typography variant="body2">#4A9EFF</Typography>
                  </Card>
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="purple" height="60px" borderRadius="md" mb={3}></Box>
                    <Typography variant="caption" color="muted">Secondary Purple</Typography>
                    <Typography variant="body2">#8B5CF6</Typography>
                  </Card>
                </Box>
              </Box>

              {/* Gray Scale */}
              <Box mb={8}>
                <Typography variant="h4" mb={4}>Grayscale</Typography>
                <Box display="flex" gap={4} flexWrap="wrap">
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="dark" height="60px" borderRadius="md" mb={3}></Box>
                    <Typography variant="caption" color="muted">Dark</Typography>
                    <Typography variant="body2">#0A0A0A</Typography>
                  </Card>
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="gray" height="60px" borderRadius="md" mb={3}></Box>
                    <Typography variant="caption" color="muted">Gray</Typography>
                    <Typography variant="body2">#1A1A1A</Typography>
                  </Card>
                  <Card variant="outlined" p={4} minWidth="150px">
                    <Box bg="light" height="60px" borderRadius="md" mb={3}></Box>
                    <Typography variant="caption" color="muted">Light</Typography>
                    <Typography variant="body2">#2A2A2A</Typography>
                  </Card>
                </Box>
              </Box>
            </Box>

            {/* Typography */}
            <Box>
              <Typography variant="h2" mb={6}>
                Typography
              </Typography>
              
              <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                <Card p={6}>
                  <Typography variant="h4" mb={4}>Font Families</Typography>
                  <Box display="flex" flexDirection="column" gap={3}>
                    <Box>
                      <Typography variant="body2" color="muted">Brand Font (Audiowide)</Typography>
                      <Typography variant="brand" as="div" style={{ fontSize: '1.5rem' }}>
                        RSPWN
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="muted">Body Font (Inter)</Typography>
                      <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
                    </Box>
                  </Box>
                </Card>

                <Card p={6}>
                  <Typography variant="h4" mb={4}>Font Sizes</Typography>
                  <Box display="flex" flexDirection="column" gap={2}>
                    {Object.entries(typography.fontSizes).map(([key, value]) => (
                      <Box key={key} display="flex" justifyContent="space-between" alignItems="baseline">
                        <Typography variant="body2" color="muted">{key}</Typography>
                        <Typography variant="body2" style={{ fontSize: value }}>Aa</Typography>
                        <Typography variant="caption" color="muted">{value}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Box>
            </Box>

            {/* Spacing */}
            <Box>
              <Typography variant="h2" mb={6}>
                Spacing Scale
              </Typography>
              <Card p={6}>
                <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
                  {Object.entries(spacing).map(([key, value]) => (
                    <Box key={key} display="flex" alignItems="center" gap={3}>
                      <Box 
                        bg="blue" 
                        width={value}
                        height="20px"
                        borderRadius="sm"
                        minWidth="4px"
                      />
                      <Typography variant="body2" color="muted">{key}</Typography>
                      <Typography variant="caption" color="muted">{value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>

            {/* Shadows */}
            <Box>
              <Typography variant="h2" mb={6}>
                Shadows
              </Typography>
              <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
                {Object.entries(shadows)
                  .filter(([key]) => !key.includes('glow') && key !== 'inner' && key !== 'none')
                  .map(([key, value]) => (
                    <div key={key} style={{ boxShadow: value }}>
                      <Card variant="outlined" p={4}>
                        <Typography variant="body2" mb={2}>{key}</Typography>
                        <Typography variant="caption" color="muted">{value}</Typography>
                      </Card>
                    </div>
                  ))}
              </Box>

            </Box>

            {/* Usage Guidelines */}
            <Box>
              <Typography variant="h2" mb={6}>
                Usage Guidelines
              </Typography>
              <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                <Card variant="filled" p={6}>
                  <Typography variant="h4" mb={4}>Best Practices</Typography>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Typography variant="body2" color="secondary">
                      • Use Audiowide exclusively for the RSPWN brand name and major section headers
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Apply the systematic spacing scale consistently across all components
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Maintain high contrast ratios for accessibility compliance
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Reserve blue accent for primary actions and key interactive elements
                    </Typography>
                  </Box>
                </Card>

                <Card variant="filled" p={6}>
                  <Typography variant="h4" mb={4}>Restrictions</Typography>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Typography variant="body2" color="secondary">
                      • Audiowide must not be used for body text or long-form content
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Custom spacing values outside the defined scale are prohibited
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Color palette extensions require design system approval
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      • Brand logo modifications or distortions are strictly forbidden
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default TokensPage