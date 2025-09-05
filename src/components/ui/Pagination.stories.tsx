import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
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
      options: ['default', 'minimal', 'compact'],
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 15 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: (page) => console.log('Page changed to:', page),
    size: 'md',
    variant: 'default',
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Basic Pagination (10 pages)</Typography>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <Typography variant="small" color="gray" mt="sm">
            Current page: {currentPage}
          </Typography>
        </div>
      </Box>
    )
  },
}

export const Variants: Story = {
  render: () => {
    const [defaultPage, setDefaultPage] = useState(3)
    const [minimalPage, setMinimalPage] = useState(3)
    const [compactPage, setCompactPage] = useState(3)
    const totalPages = 15
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Default Variant</Typography>
          <Pagination
            currentPage={defaultPage}
            totalPages={totalPages}
            onPageChange={setDefaultPage}
            variant="default"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Minimal Variant</Typography>
          <Pagination
            currentPage={minimalPage}
            totalPages={totalPages}
            onPageChange={setMinimalPage}
            variant="minimal"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Compact Variant</Typography>
          <Pagination
            currentPage={compactPage}
            totalPages={totalPages}
            onPageChange={setCompactPage}
            variant="compact"
          />
        </div>
      </Box>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [smallPage, setSmallPage] = useState(2)
    const [mediumPage, setMediumPage] = useState(2)
    const [largePage, setLargePage] = useState(2)
    const totalPages = 8
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">Small</Typography>
          <Pagination
            currentPage={smallPage}
            totalPages={totalPages}
            onPageChange={setSmallPage}
            size="sm"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Medium</Typography>
          <Pagination
            currentPage={mediumPage}
            totalPages={totalPages}
            onPageChange={setMediumPage}
            size="md"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Large</Typography>
          <Pagination
            currentPage={largePage}
            totalPages={totalPages}
            onPageChange={setLargePage}
            size="lg"
          />
        </div>
      </Box>
    )
  },
}

export const DifferentPageCounts: Story = {
  render: () => {
    const [page1, setPage1] = useState(1)
    const [page2, setPage2] = useState(5)
    const [page3, setPage3] = useState(25)
    const [page4, setPage4] = useState(150)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="sm">Few Pages (5 total)</Typography>
          <Pagination
            currentPage={page1}
            totalPages={5}
            onPageChange={setPage1}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Medium Range (15 total)</Typography>
          <Pagination
            currentPage={page2}
            totalPages={15}
            onPageChange={setPage2}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Large Range (50 total)</Typography>
          <Pagination
            currentPage={page3}
            totalPages={50}
            onPageChange={setPage3}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Very Large Range (500 total)</Typography>
          <Pagination
            currentPage={page4}
            totalPages={500}
            onPageChange={setPage4}
          />
        </div>
      </Box>
    )
  },
}

export const CustomConfiguration: Story = {
  render: () => {
    const [page1, setPage1] = useState(10)
    const [page2, setPage2] = useState(10)
    const [page3, setPage3] = useState(10)
    const [page4, setPage4] = useState(10)
    const totalPages = 20
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="sm">Limited Visible Pages (3 max)</Typography>
          <Pagination
            currentPage={page1}
            totalPages={totalPages}
            onPageChange={setPage1}
            maxVisiblePages={3}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">No First/Last Buttons</Typography>
          <Pagination
            currentPage={page2}
            totalPages={totalPages}
            onPageChange={setPage2}
            showFirstLast={false}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">No Previous/Next Buttons</Typography>
          <Pagination
            currentPage={page3}
            totalPages={totalPages}
            onPageChange={setPage3}
            showPrevNext={false}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Only Navigation Buttons</Typography>
          <Pagination
            currentPage={page4}
            totalPages={totalPages}
            onPageChange={setPage4}
            showPageNumbers={false}
          />
        </div>
      </Box>
    )
  },
}

export const CustomLabels: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    const totalPages = 12
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Custom Button Labels</Typography>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            previousLabel="Prev"
            nextLabel="Next"
            firstLabel="First Page"
            lastLabel="Last Page"
          />
        </div>
      </Box>
    )
  },
}

export const DisabledState: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Disabled Default</Typography>
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={() => {}}
          disabled
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled Minimal</Typography>
        <Pagination
          currentPage={3}
          totalPages={8}
          onPageChange={() => {}}
          variant="minimal"
          disabled
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled Compact</Typography>
        <Pagination
          currentPage={2}
          totalPages={5}
          onPageChange={() => {}}
          variant="compact"
          disabled
        />
      </div>
    </Box>
  ),
}

export const EdgeCases: Story = {
  render: () => {
    const [page1, setPage1] = useState(1)
    const [page2, setPage2] = useState(1)
    const [page3, setPage3] = useState(1)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="sm">Single Page</Typography>
          <Pagination
            currentPage={page1}
            totalPages={1}
            onPageChange={setPage1}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">First Page (20 total)</Typography>
          <Pagination
            currentPage={page2}
            totalPages={20}
            onPageChange={setPage2}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Last Page (15 total)</Typography>
          <Pagination
            currentPage={15}
            totalPages={15}
            onPageChange={setPage3}
          />
        </div>
      </Box>
    )
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(20)
    const [maxVisible, setMaxVisible] = useState(7)
    
    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="h3" mb="md">Interactive Pagination Demo</Typography>
          
          <Box display="flex" gap="lg" mb="lg" flexWrap="wrap">
            <div>
              <Typography variant="small" mb="sm">Total Pages:</Typography>
              <input
                type="range"
                min="5"
                max="100"
                value={totalPages}
                onChange={(e) => {
                  const newTotal = parseInt(e.target.value)
                  setTotalPages(newTotal)
                  if (currentPage > newTotal) {
                    setCurrentPage(newTotal)
                  }
                }}
              />
              <Typography variant="small" color="gray">{totalPages}</Typography>
            </div>
            
            <div>
              <Typography variant="small" mb="sm">Max Visible Pages:</Typography>
              <input
                type="range"
                min="3"
                max="15"
                value={maxVisible}
                onChange={(e) => setMaxVisible(parseInt(e.target.value))}
              />
              <Typography variant="small" color="gray">{maxVisible}</Typography>
            </div>
          </Box>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            maxVisiblePages={maxVisible}
          />
          
          <Box mt="md" p="md" style={{ backgroundColor: 'rgba(74, 158, 255, 0.1)', borderRadius: '4px' }}>
            <Typography variant="body">
              Current Page: <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </Typography>
            <Typography variant="small" color="gray" mt="sm">
              Showing {maxVisible} visible page buttons at most
            </Typography>
          </Box>
        </div>
      </Box>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [tablePage, setTablePage] = useState(1)
    const [searchPage, setSearchPage] = useState(1)
    const [galleryPage, setGalleryPage] = useState(1)
    const [blogPage, setBlogPage] = useState(1)
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Data Table Pagination</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }} mb="md">
            <Typography variant="body" color="gray" mb="sm">
              Showing 1-25 of 1,247 entries
            </Typography>
            <div style={{ height: '120px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="small" color="gray">Table data would be here</Typography>
            </div>
            <Pagination
              currentPage={tablePage}
              totalPages={50}
              onPageChange={setTablePage}
              size="sm"
              maxVisiblePages={5}
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Search Results</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }} mb="md">
            <Typography variant="body" mb="md">
              Found 342 results for "gaming keyboards"
            </Typography>
            <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="small" color="gray">Search results would be here</Typography>
            </div>
            <Pagination
              currentPage={searchPage}
              totalPages={35}
              onPageChange={setSearchPage}
              variant="minimal"
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Image Gallery</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }} mb="md">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ height: '80px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
              ))}
            </div>
            <Box display="flex" justifyContent="center">
              <Pagination
                currentPage={galleryPage}
                totalPages={25}
                onPageChange={setGalleryPage}
                variant="compact"
              />
            </Box>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Blog Posts</Typography>
          <Box p="md" style={{ border: '1px solid #333', borderRadius: '4px' }}>
            <Typography variant="body" mb="md">
              Latest Gaming News & Reviews
            </Typography>
            <div style={{ height: '300px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="small" color="gray">Blog posts would be here</Typography>
            </div>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="small" color="gray">
                Posts 1-10 of 156
              </Typography>
              <Pagination
                currentPage={blogPage}
                totalPages={16}
                onPageChange={setBlogPage}
                showFirstLast={false}
                maxVisiblePages={5}
              />
            </Box>
          </Box>
        </div>
      </Box>
    )
  },
}

export const Playground: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: (page) => console.log('Page:', page),
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPageNumbers: true,
    maxVisiblePages: 7,
    disabled: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Pagination {...args} />
    </Box>
  ),
}