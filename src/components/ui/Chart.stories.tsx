import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from './Chart'

const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 85 },
  { label: 'Mar', value: 45 },
  { label: 'Apr', value: 95 },
  { label: 'May', value: 75 },
  { label: 'Jun', value: 120 }
]

const pieData = [
  { label: 'Desktop', value: 45, color: '#4A9EFF' },
  { label: 'Mobile', value: 35, color: '#8B5CF6' },
  { label: 'Tablet', value: 15, color: '#10B981' },
  { label: 'Other', value: 5, color: '#F59E0B' }
]

const revenueData = [
  { label: 'Q1', value: 2400 },
  { label: 'Q2', value: 1398 },
  { label: 'Q3', value: 9800 },
  { label: 'Q4', value: 3908 },
  { label: 'Q5', value: 4800 },
  { label: 'Q6', value: 3800 }
]

const meta: Meta<typeof Chart> = {
  title: 'UI/Chart',
  component: Chart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Chart Component

A versatile chart component supporting multiple visualization types including bar, line, area, and pie charts.

## Features

- **Multiple Chart Types**: Bar, Line, Area, and Pie charts
- **Interactive Elements**: Hover effects and smooth animations
- **Customizable Colors**: Support for custom colors per data point
- **Legend Support**: Optional legend with color indicators
- **Grid Lines**: Optional grid lines for better readability
- **Responsive Design**: Scales appropriately across different screen sizes
- **Professional Styling**: Clean, modern appearance with dark theme support

## Chart Types

- **Bar Chart**: Great for comparing discrete values
- **Line Chart**: Perfect for showing trends over time
- **Area Chart**: Emphasizes the magnitude of change over time
- **Pie Chart**: Ideal for showing parts of a whole

## Usage

\`\`\`typescript
<Chart
  type="bar"
  data={[
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 85 },
    { label: 'Mar', value: 45 }
  ]}
  title="Monthly Sales"
  height={300}
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Chart>

export const BarChart: Story = {
  args: {
    type: 'bar',
    data: sampleData,
    title: 'Monthly Sales',
    subtitle: 'Revenue in thousands (hover for details)',
    height: 300,
    showLegend: true,
    showGrid: true,
    showTooltips: true,
    formatValue: (value: number) => `$${value}K`
  }
}

export const LineChart: Story = {
  args: {
    type: 'line',
    data: sampleData,
    title: 'User Growth',
    subtitle: 'Active users over time',
    height: 300,
    showLegend: true,
    showGrid: true
  }
}

export const AreaChart: Story = {
  args: {
    type: 'area',
    data: revenueData,
    title: 'Revenue Trend',
    subtitle: 'Quarterly revenue performance',
    height: 300,
    showLegend: true,
    showGrid: true
  }
}

export const PieChart: Story = {
  args: {
    type: 'pie',
    data: pieData,
    title: 'Traffic Sources',
    subtitle: 'Breakdown by device type (hover for percentages)',
    height: 300,
    showLegend: true,
    showTooltips: true,
    formatValue: (value: number) => `${value}%`
  }
}

export const WithoutTitle: Story = {
  args: {
    type: 'bar',
    data: sampleData,
    height: 250,
    showLegend: false
  }
}

export const WithoutLegend: Story = {
  args: {
    type: 'line',
    data: sampleData,
    title: 'Performance Metrics',
    height: 300,
    showLegend: false
  }
}

export const WithoutGrid: Story = {
  args: {
    type: 'line',
    data: revenueData,
    title: 'Clean Line Chart',
    subtitle: 'Without grid lines',
    height: 300,
    showGrid: false
  }
}

export const CustomColors: Story = {
  args: {
    type: 'bar',
    data: [
      { label: 'Success', value: 85, color: '#10B981' },
      { label: 'Warning', value: 65, color: '#F59E0B' },
      { label: 'Error', value: 25, color: '#EF4444' },
      { label: 'Info', value: 95, color: '#4A9EFF' },
      { label: 'Purple', value: 75, color: '#8B5CF6' }
    ],
    title: 'Status Distribution',
    subtitle: 'Custom colored bars',
    height: 300
  }
}

export const LargeDataset: Story = {
  args: {
    type: 'line',
    data: [
      { label: 'Jan', value: 45 },
      { label: 'Feb', value: 52 },
      { label: 'Mar', value: 68 },
      { label: 'Apr', value: 84 },
      { label: 'May', value: 73 },
      { label: 'Jun', value: 91 },
      { label: 'Jul', value: 105 },
      { label: 'Aug', value: 89 },
      { label: 'Sep', value: 96 },
      { label: 'Oct', value: 112 },
      { label: 'Nov', value: 108 },
      { label: 'Dec', value: 125 }
    ],
    title: 'Annual Performance',
    subtitle: 'Full year data visualization',
    height: 350
  }
}

export const SmallChart: Story = {
  args: {
    type: 'bar',
    data: sampleData.slice(0, 4),
    title: 'Compact View',
    height: 200,
    showLegend: false
  }
}

export const TallChart: Story = {
  args: {
    type: 'area',
    data: revenueData,
    title: 'Extended View',
    subtitle: 'Taller chart for detailed analysis',
    height: 400,
    showGrid: true
  }
}

export const WithTooltipsAndValues: Story = {
  args: {
    type: 'bar',
    data: [
      { label: 'Q1 2024', value: 15420 },
      { label: 'Q2 2024', value: 23150 },
      { label: 'Q3 2024', value: 18900 },
      { label: 'Q4 2024', value: 28750 }
    ],
    title: 'Quarterly Revenue',
    subtitle: 'Enhanced with tooltips and value labels',
    height: 350,
    showTooltips: true,
    showValues: true,
    formatValue: (value: number) => `$${(value / 1000).toFixed(1)}K`
  }
}

export const CurrencyFormatting: Story = {
  args: {
    type: 'line',
    data: [
      { label: 'Jan', value: 45230 },
      { label: 'Feb', value: 52100 },
      { label: 'Mar', value: 68900 },
      { label: 'Apr', value: 84200 },
      { label: 'May', value: 73500 },
      { label: 'Jun', value: 91800 }
    ],
    title: 'Revenue Trend',
    subtitle: 'With professional currency formatting',
    height: 300,
    showTooltips: true,
    showValues: true,
    formatValue: (value: number) => new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value)
  }
}

export const PercentageChart: Story = {
  args: {
    type: 'bar',
    data: [
      { label: 'Conversion Rate', value: 3.2 },
      { label: 'Bounce Rate', value: 42.8 },
      { label: 'Return Rate', value: 18.5 },
      { label: 'Engagement Rate', value: 67.3 }
    ],
    title: 'Key Performance Metrics',
    subtitle: 'Formatted as percentages with tooltips',
    height: 300,
    showTooltips: true,
    showValues: true,
    showLegend: false,
    formatValue: (value: number) => `${value.toFixed(1)}%`
  }
}

export const InteractiveDemo: Story = {
  args: {
    type: 'pie',
    data: [
      { label: 'Premium Users', value: 2847, color: '#4A9EFF' },
      { label: 'Free Users', value: 12593, color: '#8B5CF6' },
      { label: 'Trial Users', value: 1205, color: '#10B981' },
      { label: 'Inactive', value: 892, color: '#6B7280' }
    ],
    title: 'User Distribution',
    subtitle: 'Interactive pie chart with custom formatting',
    height: 350,
    showTooltips: true,
    showValues: true,
    showLegend: true,
    formatValue: (value: number) => `${value.toLocaleString()} users`
  }
}