import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid'
import { Box } from './Box'

const meta: Meta<typeof Grid> = {
  title: 'Foundation/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Grid>

const GridItem = ({ children, ...props }: { children: React.ReactNode }) => (
  <Box 
    bg="dark" 
    p="md" 
    borderRadius="sm" 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    {...props}
  >
    <span style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>{children}</span>
  </Box>
)

export const Basic: Story = {
  args: {
    columns: 3,
    gap: 'md',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Grid 
      columns={1} 
      sm={2} 
      md={3} 
      lg={4} 
      gap="md"
    >
      <GridItem>Responsive 1</GridItem>
      <GridItem>Responsive 2</GridItem>
      <GridItem>Responsive 3</GridItem>
      <GridItem>Responsive 4</GridItem>
      <GridItem>Responsive 5</GridItem>
      <GridItem>Responsive 6</GridItem>
      <GridItem>Responsive 7</GridItem>
      <GridItem>Responsive 8</GridItem>
    </Grid>
  ),
}

export const AutoFit: Story = {
  render: () => (
    <Grid 
      autoFit 
      minColumnWidth="200px" 
      gap="md"
    >
      <GridItem>Auto-fit 1</GridItem>
      <GridItem>Auto-fit 2</GridItem>
      <GridItem>Auto-fit 3</GridItem>
      <GridItem>Auto-fit 4</GridItem>
      <GridItem>Auto-fit 5</GridItem>
    </Grid>
  ),
}

export const AutoFill: Story = {
  render: () => (
    <Grid 
      autoFill 
      minColumnWidth="150px" 
      gap="sm"
    >
      <GridItem>Auto-fill 1</GridItem>
      <GridItem>Auto-fill 2</GridItem>
      <GridItem>Auto-fill 3</GridItem>
    </Grid>
  ),
}

export const CustomColumns: Story = {
  render: () => (
    <Grid 
      columns="1fr 2fr 1fr" 
      gap="md"
    >
      <GridItem>Sidebar</GridItem>
      <GridItem>Main Content</GridItem>
      <GridItem>Sidebar</GridItem>
    </Grid>
  ),
}

export const WithRowsAndColumns: Story = {
  render: () => (
    <Grid 
      columns={3} 
      rows={2} 
      gap="md" 
      height="300px"
    >
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
    </Grid>
  ),
}

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Small Gap</h3>
        <Grid columns={3} gap="xs">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Medium Gap</h3>
        <Grid columns={3} gap="md">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Large Gap</h3>
        <Grid columns={3} gap="xl">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </Grid>
      </div>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Center Items</h3>
        <Grid 
          columns={3} 
          gap="md" 
          height="200px" 
          justifyItems="center" 
          alignItems="center"
          style={{ border: '1px solid #4A4A4A' }}
        >
          <GridItem>Center</GridItem>
          <GridItem>Center</GridItem>
          <GridItem>Center</GridItem>
        </Grid>
      </div>
      
      <div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Stretch Items</h3>
        <Grid 
          columns={3} 
          gap="md" 
          height="200px" 
          justifyItems="stretch" 
          alignItems="stretch"
          style={{ border: '1px solid #4A4A4A' }}
        >
          <GridItem>Stretch</GridItem>
          <GridItem>Stretch</GridItem>
          <GridItem>Stretch</GridItem>
        </Grid>
      </div>
    </div>
  ),
}