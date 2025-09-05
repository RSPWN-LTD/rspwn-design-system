import type { Meta, StoryObj } from '@storybook/react'
import { Search, SearchOption } from './Search'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof Search> = {
  title: 'UI/Search',
  component: Search,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Search>

// Sample data
const basicOptions: SearchOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxtjs', label: 'Nuxt.js' },
]

const detailedOptions: SearchOption[] = [
  {
    value: 'react',
    label: 'React',
    description: 'A JavaScript library for building user interfaces',
    category: 'Frontend Frameworks',
    icon: <span style={{ color: '#61DAFB' }}>⚛️</span>,
  },
  {
    value: 'vue',
    label: 'Vue.js',
    description: 'The progressive JavaScript framework',
    category: 'Frontend Frameworks',
    icon: <span style={{ color: '#4FC08D' }}>🟢</span>,
  },
  {
    value: 'angular',
    label: 'Angular',
    description: 'Platform for building mobile and desktop web applications',
    category: 'Frontend Frameworks',
    icon: <span style={{ color: '#DD0031' }}>🔺</span>,
  },
  {
    value: 'nodejs',
    label: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    category: 'Backend',
    icon: <span style={{ color: '#339933' }}>🟢</span>,
  },
  {
    value: 'express',
    label: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    category: 'Backend',
    icon: <span style={{ color: '#000000' }}>⚡</span>,
  },
  {
    value: 'python',
    label: 'Python',
    description: 'High-level programming language',
    category: 'Languages',
    icon: <span style={{ color: '#3776AB' }}>🐍</span>,
  },
  {
    value: 'typescript',
    label: 'TypeScript',
    description: 'Typed superset of JavaScript',
    category: 'Languages',
    icon: <span style={{ color: '#3178C6' }}>📘</span>,
  },
  {
    value: 'rust',
    label: 'Rust',
    description: 'Systems programming language focused on safety and performance',
    category: 'Languages',
    icon: <span style={{ color: '#CE422B' }}>🦀</span>,
  },
]

const productOptions: SearchOption[] = [
  {
    value: 'keyboard-rgb',
    label: 'Gaming Keyboard RGB',
    description: 'Mechanical gaming keyboard with RGB lighting',
    category: 'Peripherals',
    icon: <span>⌨️</span>,
  },
  {
    value: 'mouse-wireless',
    label: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse',
    category: 'Peripherals',
    icon: <span>🖱️</span>,
  },
  {
    value: 'headset-pro',
    label: 'Gaming Headset Pro',
    description: 'Professional gaming headset with 7.1 surround sound',
    category: 'Audio',
    icon: <span>🎧</span>,
  },
  {
    value: 'monitor-ultrawide',
    label: 'Ultra-wide Monitor',
    description: '34" curved ultra-wide gaming monitor',
    category: 'Displays',
    icon: <span>🖥️</span>,
  },
  {
    value: 'chair-ergonomic',
    label: 'Ergonomic Gaming Chair',
    description: 'Professional ergonomic chair for extended gaming sessions',
    category: 'Furniture',
    icon: <span>🪑</span>,
  },
]

export const Default: Story = {
  args: {
    placeholder: 'Search frameworks...',
    options: basicOptions,
    size: 'md',
    variant: 'default',
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [selectedOption, setSelectedOption] = useState<SearchOption | null>(null)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Basic Search with Autocomplete</Typography>
          <Search
            placeholder="Search frameworks..."
            options={basicOptions}
            value={value}
            onChange={setValue}
            onSelect={setSelectedOption}
            width="300px"
          />
          {selectedOption && (
            <Typography variant="small" color="gray" mt="sm">
              Selected: {selectedOption.label}
            </Typography>
          )}
        </div>
      </Box>
    )
  },
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Default</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          variant="default"
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Filled</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          variant="filled"
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Borderless</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          variant="borderless"
          width="300px"
        />
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          size="sm"
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          size="md"
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          size="lg"
          width="300px"
        />
      </div>
    </Box>
  ),
}

export const WithCategories: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<SearchOption | null>(null)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Search with Categories</Typography>
          <Search
            placeholder="Search technologies..."
            options={detailedOptions}
            onSelect={setSelectedOption}
            showCategories
            width="400px"
          />
          {selectedOption && (
            <Box mt="sm" p="sm" style={{ backgroundColor: 'rgba(74, 158, 255, 0.1)', borderRadius: '4px' }}>
              <Typography variant="small">
                Selected: <strong>{selectedOption.label}</strong>
              </Typography>
              {selectedOption.description && (
                <Typography variant="small" color="gray" mt="xs">
                  {selectedOption.description}
                </Typography>
              )}
            </Box>
          )}
        </div>
      </Box>
    )
  },
}

export const CustomSearch: Story = {
  render: () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchOption[]>([])
    const [loading, setLoading] = useState(false)
    
    const handleSearch = async (searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([])
        return
      }
      
      setLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        const filtered = detailedOptions.filter(option =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setResults(filtered)
        setLoading(false)
      }, 500)
    }
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Custom Search with API Simulation</Typography>
          <Search
            placeholder="Type to search technologies..."
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            options={results}
            loading={loading}
            minQueryLength={2}
            searchDelay={300}
            showCategories
            width="400px"
          />
          <Typography variant="small" color="gray" mt="sm">
            Type at least 2 characters to search. Current query: "{query}"
          </Typography>
        </div>
      </Box>
    )
  },
}

export const ProductSearch: Story = {
  render: () => {
    const [selectedProduct, setSelectedProduct] = useState<SearchOption | null>(null)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Product Search</Typography>
          <Search
            placeholder="Search gaming products..."
            options={productOptions}
            onSelect={setSelectedProduct}
            showCategories
            size="lg"
            width="500px"
          />
          {selectedProduct && (
            <Box mt="md" p="md" style={{ border: '1px solid #333', borderRadius: '4px' }}>
              <Box display="flex" alignItems="center" gap="sm" mb="sm">
                {selectedProduct.icon}
                <Typography variant="body" fontWeight="semibold">
                  {selectedProduct.label}
                </Typography>
              </Box>
              <Typography variant="small" color="gray">
                {selectedProduct.description}
              </Typography>
              <Typography variant="small" color="blue" mt="sm">
                Category: {selectedProduct.category}
              </Typography>
            </Box>
          )}
        </div>
      </Box>
    )
  },
}

export const SearchStates: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Loading State</Typography>
        <Search
          placeholder="Search..."
          options={[]}
          loading
          value="react"
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Error State</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          error
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled State</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          disabled
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Without Icon</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          showIcon={false}
          width="300px"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Without Clear Button</Typography>
        <Search
          placeholder="Search..."
          options={basicOptions}
          showClear={false}
          value="react"
          width="300px"
        />
      </div>
    </Box>
  ),
}

export const MinimalSearch: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Simple Search Input (No Autocomplete)</Typography>
          <Search
            placeholder="Type your search query..."
            value={value}
            onChange={setValue}
            autocomplete={false}
            variant="borderless"
            size="lg"
            width="400px"
          />
          <Typography variant="small" color="gray" mt="sm">
            Current value: "{value}"
          </Typography>
        </div>
      </Box>
    )
  },
}

export const ResponsiveSearch: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Full Width Search</Typography>
        <Search
          placeholder="Search across all products..."
          options={productOptions}
          showCategories
          width="100%"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="md">Fixed Width Searches</Typography>
        <Box display="flex" gap="md" flexWrap="wrap">
          <Search
            placeholder="Quick search"
            options={basicOptions.slice(0, 3)}
            size="sm"
            width="200px"
          />
          <Search
            placeholder="Medium search"
            options={basicOptions.slice(0, 4)}
            size="md"
            width="250px"
          />
          <Search
            placeholder="Extended search"
            options={basicOptions}
            size="lg"
            width="300px"
          />
        </Box>
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => {
    const [headerSearch, setHeaderSearch] = useState('')
    const [filterSearch, setFilterSearch] = useState('')
    const [commandSearch, setCommandSearch] = useState('')
    
    const commandOptions: SearchOption[] = [
      { value: 'new-file', label: 'New File', description: 'Create a new file', icon: <span>📄</span> },
      { value: 'open-folder', label: 'Open Folder', description: 'Open an existing folder', icon: <span>📁</span> },
      { value: 'save-all', label: 'Save All', description: 'Save all open files', icon: <span>💾</span> },
      { value: 'find-replace', label: 'Find & Replace', description: 'Find and replace text', icon: <span>🔍</span> },
      { value: 'toggle-theme', label: 'Toggle Theme', description: 'Switch between light and dark theme', icon: <span>🌙</span> },
      { value: 'settings', label: 'Settings', description: 'Open application settings', icon: <span>⚙️</span> },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Header Search Bar</Typography>
          <Box p="md" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body" fontWeight="semibold">RSPWN Gaming</Typography>
              <Search
                placeholder="Search products, brands, categories..."
                value={headerSearch}
                onChange={setHeaderSearch}
                options={productOptions}
                variant="filled"
                width="350px"
              />
              <Box display="flex" gap="md">
                <Typography variant="small">Cart</Typography>
                <Typography variant="small">Account</Typography>
              </Box>
            </Box>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Filter Search</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
              <Typography variant="body" fontWeight="semibold">Product Catalog</Typography>
              <Search
                placeholder="Filter products..."
                value={filterSearch}
                onChange={setFilterSearch}
                options={productOptions}
                size="sm"
                variant="borderless"
                width="250px"
                showCategories={false}
              />
            </Box>
            <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body" color="gray">Product grid would be here</Typography>
            </div>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Command Palette</Typography>
          <Box p="md" style={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '4px', border: '1px solid #444' }}>
            <Typography variant="small" color="gray" mb="sm">Press Ctrl+K to open command palette</Typography>
            <Search
              placeholder="Type a command or search..."
              value={commandSearch}
              onChange={setCommandSearch}
              options={commandOptions}
              size="lg"
              variant="borderless"
              width="100%"
              maxResults={6}
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Documentation Search</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }}>
            <Typography variant="body" mb="md">RSPWN Design System Docs</Typography>
            <Search
              placeholder="Search components, guides, examples..."
              options={[
                { value: 'button', label: 'Button Component', category: 'Components', description: 'Interactive button elements' },
                { value: 'typography', label: 'Typography', category: 'Components', description: 'Text styling and hierarchy' },
                { value: 'colors', label: 'Color System', category: 'Design Tokens', description: 'Brand colors and usage' },
                { value: 'spacing', label: 'Spacing Scale', category: 'Design Tokens', description: 'Consistent spacing values' },
                { value: 'getting-started', label: 'Getting Started', category: 'Guides', description: 'Installation and setup' },
                { value: 'theming', label: 'Theming Guide', category: 'Guides', description: 'Customizing the theme' },
              ]}
              showCategories
              width="100%"
            />
          </Box>
        </div>
      </Box>
    )
  },
}

export const Playground: Story = {
  args: {
    placeholder: 'Search...',
    options: detailedOptions,
    size: 'md',
    variant: 'default',
    autocomplete: true,
    showDropdown: true,
    filterOptions: true,
    minQueryLength: 0,
    maxResults: 10,
    searchDelay: 300,
    showIcon: true,
    showClear: true,
    showCategories: true,
    disabled: false,
    error: false,
    loading: false,
    width: '400px',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Search {...args} />
    </Box>
  ),
}