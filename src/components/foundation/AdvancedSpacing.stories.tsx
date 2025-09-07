import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'
import { Typography } from './Typography'
import { Space } from './Space'

const meta: Meta<typeof Box> = {
  title: 'Foundation/Advanced Spacing',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleCard = ({ children, ...props }: any) => (
  <Box bg="gray" p={3} borderRadius="md" {...props}>
    {children}
  </Box>
)

export const NegativeMargins: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h3" mb={4}>Negative Margins</Typography>
      
      <Box bg="light" p={6} borderRadius="md" mb={6}>
        <Typography variant="h4" mb={4}>Container with padding</Typography>
        
        <ExampleCard marginTopNegative={4}>
          Negative top margin (-1rem)
        </ExampleCard>
        
        <ExampleCard mt={4} marginLeftNegative={6}>
          Negative left margin (-1.5rem)  
        </ExampleCard>
        
        <ExampleCard mt={4} marginNegative={2}>
          Negative margin all sides (-0.5rem)
        </ExampleCard>
      </Box>
      
      <Typography variant="caption" color="muted">
        Negative margins allow elements to break out of their containers or overlap
      </Typography>
    </div>
  ),
}

export const AutoMargins: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Typography variant="h3" mb={4}>Auto Margins</Typography>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Horizontal Centering</Typography>
        <ExampleCard width="200px" marginXAuto>
          Centered with marginXAuto
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4} height="200px" display="flex" flexDirection="column">
        <Typography variant="h4" mb={3}>Vertical Centering</Typography>
        <ExampleCard marginYAuto>
          Centered with marginYAuto
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" height="150px" display="flex" flexDirection="column">
        <Typography variant="h4" mb={3}>All Auto</Typography>
        <ExampleCard width="150px" marginAuto>
          Centered both ways
        </ExampleCard>
      </Box>
    </div>
  ),
}

export const SpaceBetweenChildren: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Typography variant="h3" mb={4}>Space Between Children</Typography>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Vertical Spacing (spaceY)</Typography>
        <Box spaceY={3}>
          <ExampleCard>Item 1</ExampleCard>
          <ExampleCard>Item 2</ExampleCard>
          <ExampleCard>Item 3</ExampleCard>
          <ExampleCard>Item 4</ExampleCard>
        </Box>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Horizontal Spacing (spaceX)</Typography>
        <Box display="flex" spaceX={4}>
          <ExampleCard>Item A</ExampleCard>
          <ExampleCard>Item B</ExampleCard>
          <ExampleCard>Item C</ExampleCard>
        </Box>
      </Box>
      
      <Typography variant="caption" color="muted">
        spaceX/spaceY automatically adds margins between child elements
      </Typography>
    </div>
  ),
}

export const LogicalSpacing: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Typography variant="h3" mb={4}>Logical Spacing Properties</Typography>
      <Typography variant="body2" mb={4} color="muted">
        Logical properties adapt to different writing modes and text directions (LTR/RTL)
      </Typography>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Inline Spacing (horizontal in LTR)</Typography>
        <ExampleCard marginInline={6} paddingInline={4}>
          marginInline + paddingInline
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Block Spacing (vertical in LTR)</Typography>
        <ExampleCard marginBlock={4} paddingBlock={3}>
          marginBlock + paddingBlock
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Directional Logical Properties</Typography>
        <ExampleCard marginInlineStart={8} marginBlockEnd={6} paddingInlineEnd={4} paddingBlockStart={3}>
          Mixed logical properties
        </ExampleCard>
      </Box>
      
      <Typography variant="caption" color="muted">
        Use logical properties for internationalization-friendly layouts
      </Typography>
    </div>
  ),
}

export const SafeAreaPadding: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Typography variant="h3" mb={4}>Safe Area Padding</Typography>
      <Typography variant="body2" mb={4} color="muted">
        Automatically adapts to device safe areas (notches, home indicators, etc.)
      </Typography>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Full Safe Area</Typography>
        <ExampleCard paddingSafeArea bg="blue">
          paddingSafeArea (all sides)
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Specific Safe Areas</Typography>
        <ExampleCard paddingSafeAreaTop paddingSafeAreaBottom p={3}>
          Top and bottom safe area padding
        </ExampleCard>
      </Box>
      
      <Typography variant="caption" color="muted">
        Most useful for mobile layouts and PWAs
      </Typography>
    </div>
  ),
}

export const ResponsiveSpacing: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Typography variant="h3" mb={4}>Responsive Spacing</Typography>
      <Typography variant="body2" mb={4} color="muted">
        Resize the viewport to see spacing changes
      </Typography>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Responsive Padding</Typography>
        <ExampleCard p={2}>
          Responsive padding (resize to see changes)
        </ExampleCard>
      </Box>
      
      <Box bg="light" p={4} borderRadius="md" mb={4}>
        <Typography variant="h4" mb={3}>Responsive Margins</Typography>
        <ExampleCard 
          m={4}
          bg="blue"
        >
          Responsive margins (resize to see changes)
        </ExampleCard>
      </Box>
    </div>
  ),
}

export const ComplexLayoutExample: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <Typography variant="h3" mb={4}>Complex Layout Example</Typography>
      <Typography variant="body2" mb={6} color="muted">
        Combining multiple advanced spacing features
      </Typography>
      
      <Box bg="light" p={6} borderRadius="md">
        {/* Header with negative margin to break out */}
        <ExampleCard 
          marginTopNegative={4} 
          marginInline={2} 
          p={4} 
          bg="blue" 
          mb={4}
        >
          Header (breaks out with negative margin)
        </ExampleCard>
        
        {/* Main content with space between children */}
        <Box spaceY={4} mb={6}>
          <ExampleCard>Content Block 1</ExampleCard>
          <ExampleCard>Content Block 2</ExampleCard>
          <ExampleCard>Content Block 3</ExampleCard>
        </Box>
        
        {/* Sidebar layout with horizontal spacing */}
        <Box display="flex" gap={4} mb={6}>
          <Box flex={2} spaceY={3}>
            <ExampleCard>Main Content Item 1</ExampleCard>
            <ExampleCard>Main Content Item 2</ExampleCard>
          </Box>
          
          <Box flex={1} spaceY={2}>
            <ExampleCard>Sidebar Item 1</ExampleCard>
            <ExampleCard>Sidebar Item 2</ExampleCard>
            <ExampleCard>Sidebar Item 3</ExampleCard>
          </Box>
        </Box>
        
        {/* Footer with auto margins for centering */}
        <ExampleCard 
          width="300px" 
          marginXAuto 
          paddingSafeAreaBottom
          bg="purple"
        >
          Centered Footer with Safe Area
        </ExampleCard>
      </Box>
    </div>
  ),
}

export const SpacingScale: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Complete Spacing Scale</Typography>
      
      {/* Micro spacing */}
      <Box mb={6}>
        <Typography variant="h4" mb={3}>Micro Spacing (Fine Control)</Typography>
        <Box display="flex" alignItems="center" spaceX={1}>
          {(['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5'] as const).map(size => (
            <Box key={size} display="flex" flexDirection="column" alignItems="center">
              <Box bg="gray" width="40px" height={`${size === '0' ? 1 : parseInt(size.replace('.', '')) * 2}px`} mb={1} />
              <Typography variant="caption">{size}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      
      {/* Standard spacing */}
      <Box mb={6}>
        <Typography variant="h4" mb={3}>Standard Spacing</Typography>
        <Box display="flex" alignItems="flex-end" spaceX={1}>
          {(['4', '5', '6', '8', '10', '12', '16', '20'] as const).map(size => (
            <Box key={size} display="flex" flexDirection="column" alignItems="center">
              <Box bg="blue" width="30px" height={`${parseInt(size) * 2}px`} mb={1} />
              <Typography variant="caption">{size}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      
      {/* Semantic spacing */}
      <Box mb={6}>
        <Typography variant="h4" mb={3}>Semantic Spacing</Typography>
        <Box display="flex" alignItems="flex-end" spaceX={2}>
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => (
            <Box key={size} display="flex" flexDirection="column" alignItems="center">
              <Box bg="purple" width="40px" height="20px" p={size} mb={1} />
              <Typography variant="caption">{size}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      
      {/* Contextual spacing */}
      <Box>
        <Typography variant="h4" mb={3}>Contextual Spacing</Typography>
        <Box spaceY={2}>
          <Box>
            <Typography variant="body2" mb={1}>tight</Typography>
            <Space size="tight" />
            <Box bg="gray" height="4px" width="60px" />
          </Box>
          <Box>
            <Typography variant="body2" mb={1}>normal</Typography>
            <Space size="normal" />
            <Box bg="gray" height="4px" width="80px" />
          </Box>
          <Box>
            <Typography variant="body2" mb={1}>loose</Typography>
            <Space size="loose" />
            <Box bg="gray" height="4px" width="100px" />
          </Box>
          <Box>
            <Typography variant="body2" mb={1}>section</Typography>
            <Space size="section" />
            <Box bg="gray" height="4px" width="140px" />
          </Box>
        </Box>
      </Box>
    </div>
  ),
}