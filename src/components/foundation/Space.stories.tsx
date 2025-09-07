import type { Meta, StoryObj } from '@storybook/react'
import { Space } from './Space'
import { Box } from './Box'
import { Typography } from './Typography'

const meta: Meta<typeof Space> = {
  title: 'Foundation/Space',
  component: Space,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        '0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '8', 
        '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96',
        'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl',
        'tight', 'normal', 'loose', 'section', 'contextual'
      ],
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'both'],
    },
    context: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'loose', 'section'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <Box bg="gray" p={2} mb={2}>First Element</Box>
      <Space size="md" />
      <Box bg="gray" p={2}>Second Element</Box>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div>
      <Box bg="gray" p={2}>Element 1</Box>
      <Space size="xs" direction="vertical" />
      <Box bg="light" p={2}>Element 2 (xs spacing)</Box>
      <Space size="sm" direction="vertical" />
      <Box bg="gray" p={2}>Element 3 (sm spacing)</Box>
      <Space size="md" direction="vertical" />
      <Box bg="light" p={2}>Element 4 (md spacing)</Box>
      <Space size="lg" direction="vertical" />
      <Box bg="gray" p={2}>Element 5 (lg spacing)</Box>
      <Space size="xl" direction="vertical" />
      <Box bg="light" p={2}>Element 6 (xl spacing)</Box>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Box bg="gray" p={2}>Element 1</Box>
      <Space size="xs" direction="horizontal" />
      <Box bg="light" p={2}>xs</Box>
      <Space size="sm" direction="horizontal" />
      <Box bg="gray" p={2}>sm</Box>
      <Space size="md" direction="horizontal" />
      <Box bg="light" p={2}>md</Box>
      <Space size="lg" direction="horizontal" />
      <Box bg="gray" p={2}>lg</Box>
      <Space size="xl" direction="horizontal" />
      <Box bg="light" p={2}>xl</Box>
    </div>
  ),
}

export const ContextualSpacing: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Contextual Spacing Examples</Typography>
      
      <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h4" mb={2}>Tight Context</Typography>
        <Box bg="gray" p={2}>Related Item 1</Box>
        <Space size="contextual" context="tight" />
        <Box bg="light" p={2}>Related Item 2</Box>
        <Space size="contextual" context="tight" />
        <Box bg="gray" p={2}>Related Item 3</Box>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h4" mb={2}>Normal Context</Typography>
        <Box bg="gray" p={2}>Standard Item 1</Box>
        <Space size="contextual" context="normal" />
        <Box bg="light" p={2}>Standard Item 2</Box>
        <Space size="contextual" context="normal" />
        <Box bg="gray" p={2}>Standard Item 3</Box>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Typography variant="h4" mb={2}>Loose Context</Typography>
        <Box bg="gray" p={2}>Separated Item 1</Box>
        <Space size="contextual" context="loose" />
        <Box bg="light" p={2}>Separated Item 2</Box>
        <Space size="contextual" context="loose" />
        <Box bg="gray" p={2}>Separated Item 3</Box>
      </div>

      <div>
        <Typography variant="h4" mb={2}>Section Context</Typography>
        <Box bg="gray" p={4}>Section 1</Box>
        <Space size="contextual" context="section" />
        <Box bg="light" p={4}>Section 2</Box>
      </div>
    </div>
  ),
}

export const MicroSpacing: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Micro Spacing (Fine Control)</Typography>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <Box bg="gray" p={1} fontSize="12px">Tight</Box>
        <Space size="0.5" direction="horizontal" />
        <Box bg="light" p={1} fontSize="12px">0.5 (2px)</Box>
        <Space size="1" direction="horizontal" />
        <Box bg="gray" p={1} fontSize="12px">1 (4px)</Box>
        <Space size="1.5" direction="horizontal" />
        <Box bg="light" p={1} fontSize="12px">1.5 (6px)</Box>
        <Space size="2" direction="horizontal" />
        <Box bg="gray" p={1} fontSize="12px">2 (8px)</Box>
      </div>
      
      <Typography variant="caption" color="muted">
        Use micro spacing for fine-tuned layouts and component internal spacing
      </Typography>
    </div>
  ),
}

export const MacroSpacing: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Macro Spacing (Large Layouts)</Typography>
      
      <Box bg="gray" p={4}>Section Header</Box>
      <Space size="64" />
      <Box bg="light" p={4}>Content Block (64 spacing)</Box>
      <Space size="72" />
      <Box bg="gray" p={4}>Content Block (72 spacing)</Box>
      <Space size="80" />
      <Box bg="light" p={4}>Content Block (80 spacing)</Box>
      <Space size="96" />
      <Box bg="gray" p={4}>Footer Section (96 spacing)</Box>
      
      <Typography variant="caption" color="muted" mt={4}>
        Use macro spacing for page-level layouts and major section separation
      </Typography>
    </div>
  ),
}

export const SemanticSpacing: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Semantic Spacing Tokens</Typography>
      
      <div>
        <Box bg="gray" p={2}>Element</Box>
        <Space size="xs" />
        <Box bg="light" p={2}>XS Spacing</Box>
        
        <Space size="sm" />
        <Box bg="gray" p={2}>SM Spacing</Box>
        
        <Space size="md" />
        <Box bg="light" p={2}>MD Spacing (Default)</Box>
        
        <Space size="lg" />
        <Box bg="gray" p={2}>LG Spacing</Box>
        
        <Space size="xl" />
        <Box bg="light" p={2}>XL Spacing</Box>
        
        <Space size="2xl" />
        <Box bg="gray" p={2}>2XL Spacing</Box>
        
        <Space size="3xl" />
        <Box bg="light" p={2}>3XL Spacing</Box>
      </div>
      
      <Typography variant="caption" color="muted" mt={4}>
        Semantic tokens provide consistent spacing that scales with your design system
      </Typography>
    </div>
  ),
}

export const BothDirections: Story = {
  render: () => (
    <div>
      <Typography variant="h3" mb={4}>Both Directions (Square Space)</Typography>
      
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box bg="gray" p={4} width="100px" height="100px" display="flex" alignItems="center" justifyContent="center">
          Box 1
        </Box>
        <Space size="md" direction="both" />
        <Box bg="light" p={4} width="100px" height="100px" display="flex" alignItems="center" justifyContent="center">
          Box 2
        </Box>
        <Space size="lg" direction="both" />
        <Box bg="gray" p={4} width="100px" height="100px" display="flex" alignItems="center" justifyContent="center">
          Box 3
        </Box>
      </div>
      
      <Typography variant="caption" color="muted" mt={4}>
        Use "both" direction to create square spacing for grid-like layouts
      </Typography>
    </div>
  ),
}