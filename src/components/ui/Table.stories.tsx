import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableColumn } from './Table'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Badge } from './Badge'
import { Button } from './Button'
import { useState } from 'react'

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'striped', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// Sample data types
interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  lastLogin: string
  joinDate: string
}

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  rating: number
  featured: boolean
}

// Sample data
const userData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15',
    joinDate: '2023-03-10',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'active',
    lastLogin: '2024-01-14',
    joinDate: '2023-05-20',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Viewer',
    status: 'inactive',
    lastLogin: '2024-01-10',
    joinDate: '2023-08-15',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Editor',
    status: 'pending',
    lastLogin: 'Never',
    joinDate: '2024-01-12',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-13',
    joinDate: '2023-01-05',
  },
]

const productData: Product[] = [
  {
    id: 1,
    name: 'Gaming Keyboard RGB',
    category: 'Peripherals',
    price: 149.99,
    stock: 25,
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: 'Wireless Gaming Mouse',
    category: 'Peripherals',
    price: 89.99,
    stock: 12,
    rating: 4.6,
    featured: false,
  },
  {
    id: 3,
    name: 'Gaming Headset Pro',
    category: 'Audio',
    price: 199.99,
    stock: 8,
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    name: 'Ultra-wide Monitor',
    category: 'Displays',
    price: 599.99,
    stock: 3,
    rating: 4.7,
    featured: true,
  },
  {
    id: 5,
    name: 'Mechanical Switch Set',
    category: 'Accessories',
    price: 29.99,
    stock: 150,
    rating: 4.4,
    featured: false,
  },
]

// Basic columns
const basicUserColumns: TableColumn<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'status', header: 'Status', sortable: true },
]

export const Default: Story = {
  args: {
    data: userData,
    columns: basicUserColumns,
    variant: 'default',
    size: 'md',
  },
}

export const BasicUsage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Simple User Table</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
        />
      </div>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Default</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          variant="default"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Bordered</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          variant="bordered"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Striped</Typography>
        <Table
          data={userData.slice(0, 4)}
          columns={basicUserColumns}
          variant="striped"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Minimal</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          variant="minimal"
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
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          size="sm"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          size="md"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Table
          data={userData.slice(0, 3)}
          columns={basicUserColumns}
          size="lg"
        />
      </div>
    </Box>
  ),
}

export const CustomColumns: Story = {
  render: () => {
    const customColumns: TableColumn<User>[] = [
      { 
        key: 'name', 
        header: 'User Name', 
        sortable: true,
        render: (value, row) => (
          <Box display="flex" flexDirection="column">
            <Typography variant="body" fontWeight="medium">{value}</Typography>
            <Typography variant="small" color="gray">{row.email}</Typography>
          </Box>
        )
      },
      { 
        key: 'role', 
        header: 'Role', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge 
            color={value === 'Admin' ? 'blue' : value === 'Editor' ? 'purple' : 'gray'}
            size="sm"
          >
            {value}
          </Badge>
        )
      },
      { 
        key: 'status', 
        header: 'Status', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge 
            color={value === 'active' ? 'success' : value === 'inactive' ? 'error' : 'warning'}
            variant="subtle"
            size="sm"
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        )
      },
      { 
        key: 'lastLogin', 
        header: 'Last Login', 
        sortable: true,
        align: 'right'
      },
      {
        key: 'actions',
        header: 'Actions',
        align: 'right',
        render: (_, row) => (
          <Box display="flex" gap="sm" justifyContent="flex-end">
            <Button size="sm" variant="outline">Edit</Button>
            <Button size="sm" variant="secondary">Delete</Button>
          </Box>
        )
      }
    ]
    
    return (
      <Box p="md">
        <Typography variant="body" mb="md">Custom Column Rendering</Typography>
        <Table
          data={userData}
          columns={customColumns}
          hoverable
        />
      </Box>
    )
  },
}

export const SortableTable: Story = {
  render: () => {
    const [sortColumn, setSortColumn] = useState<string>('name')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    
    const sortedData = [...userData].sort((a, b) => {
      const aValue = a[sortColumn as keyof User]
      const bValue = b[sortColumn as keyof User]
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
    
    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      setSortColumn(column)
      setSortDirection(direction)
    }
    
    const sortableColumns: TableColumn<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      { key: 'status', header: 'Status', sortable: true },
      { key: 'joinDate', header: 'Join Date', sortable: true },
    ]
    
    return (
      <Box p="md">
        <Typography variant="body" mb="md">
          Sortable Table (Currently sorted by: {sortColumn} {sortDirection})
        </Typography>
        <Table
          data={sortedData}
          columns={sortableColumns}
          sortable
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </Box>
    )
  },
}

export const SelectableTable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
    
    return (
      <Box p="md">
        <Typography variant="body" mb="md">
          Selectable Table ({selectedRows.size} selected)
        </Typography>
        <Table
          data={userData}
          columns={basicUserColumns}
          selectable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          variant="striped"
        />
        {selectedRows.size > 0 && (
          <Box mt="md" p="sm" style={{ backgroundColor: 'rgba(74, 158, 255, 0.1)', borderRadius: '4px' }}>
            <Typography variant="small">
              Selected users: {Array.from(selectedRows).map(i => userData[i]?.name).join(', ')}
            </Typography>
          </Box>
        )}
      </Box>
    )
  },
}

export const ProductTable: Story = {
  render: () => {
    const productColumns: TableColumn<Product>[] = [
      { 
        key: 'name', 
        header: 'Product', 
        sortable: true,
        render: (value, row) => (
          <Box display="flex" alignItems="center" gap="sm">
            {row.featured && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#4A9EFF">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            )}
            <Typography variant="body" fontWeight="medium">{value}</Typography>
          </Box>
        )
      },
      { 
        key: 'category', 
        header: 'Category', 
        sortable: true,
        render: (value) => (
          <Badge color="gray" variant="subtle" size="sm">{value}</Badge>
        )
      },
      { 
        key: 'price', 
        header: 'Price', 
        sortable: true,
        align: 'right',
        render: (value) => `$${value.toFixed(2)}`
      },
      { 
        key: 'stock', 
        header: 'Stock', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge 
            color={value > 20 ? 'success' : value > 5 ? 'warning' : 'error'}
            variant="subtle"
            size="sm"
          >
            {value} units
          </Badge>
        )
      },
      { 
        key: 'rating', 
        header: 'Rating', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Box display="flex" alignItems="center" gap="sm">
            <span>⭐</span>
            <Typography variant="body">{value.toFixed(1)}</Typography>
          </Box>
        )
      },
    ]
    
    return (
      <Box p="md">
        <Typography variant="body" mb="md">Product Catalog</Typography>
        <Table
          data={productData}
          columns={productColumns}
          variant="bordered"
          hoverable
        />
      </Box>
    )
  },
}

export const LoadingStates: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Loading State</Typography>
        <Table
          data={[]}
          columns={basicUserColumns}
          loading
          loadingRows={5}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Empty State</Typography>
        <Table
          data={[]}
          columns={basicUserColumns}
          emptyMessage="No users found. Try adjusting your search criteria."
        />
      </div>
    </Box>
  ),
}

export const FixedHeight: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Fixed Height with Scroll (300px)</Typography>
        <Table
          data={[...userData, ...userData, ...userData]} // Triple the data
          columns={basicUserColumns}
          maxHeight={300}
          stickyHeader
          variant="striped"
        />
      </div>
    </Box>
  ),
}

export const ResponsiveTable: Story = {
  render: () => {
    const responsiveColumns: TableColumn<User>[] = [
      { 
        key: 'name', 
        header: 'Name', 
        sortable: true,
        minWidth: 150
      },
      { 
        key: 'email', 
        header: 'Email', 
        sortable: true,
        minWidth: 200
      },
      { 
        key: 'role', 
        header: 'Role', 
        sortable: true,
        width: 100,
        align: 'center'
      },
      { 
        key: 'status', 
        header: 'Status', 
        sortable: true,
        width: 100,
        align: 'center'
      },
      { 
        key: 'lastLogin', 
        header: 'Last Login', 
        sortable: true,
        minWidth: 120,
        align: 'right'
      },
    ]
    
    return (
      <Box p="md">
        <Typography variant="body" mb="md">Responsive Table with Column Constraints</Typography>
        <Table
          data={userData}
          columns={responsiveColumns}
          variant="bordered"
        />
      </Box>
    )
  },
}

export const RealWorldExample: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
    const [sortColumn, setSortColumn] = useState<string>('name')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    
    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      setSortColumn(column)
      setSortDirection(direction)
    }
    
    const sortedData = [...userData].sort((a, b) => {
      const aValue = a[sortColumn as keyof User]
      const bValue = b[sortColumn as keyof User]
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
    
    const adminColumns: TableColumn<User>[] = [
      { 
        key: 'name', 
        header: 'User', 
        sortable: true,
        render: (value, row) => (
          <Box display="flex" flexDirection="column">
            <Typography variant="body" fontWeight="medium">{value}</Typography>
            <Typography variant="small" color="gray">{row.email}</Typography>
          </Box>
        )
      },
      { 
        key: 'role', 
        header: 'Role', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge 
            color={value === 'Admin' ? 'blue' : value === 'Editor' ? 'purple' : 'gray'}
            size="sm"
          >
            {value}
          </Badge>
        )
      },
      { 
        key: 'status', 
        header: 'Status', 
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge 
            color={value === 'active' ? 'success' : value === 'inactive' ? 'error' : 'warning'}
            variant="subtle"
            size="sm"
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        )
      },
      { 
        key: 'joinDate', 
        header: 'Member Since', 
        sortable: true,
        align: 'right'
      },
      {
        key: 'actions',
        header: 'Actions',
        align: 'right',
        render: (_, row, index) => (
          <Box display="flex" gap="sm" justifyContent="flex-end">
            <Button size="sm" variant="outline">Edit</Button>
            {row.status !== 'active' && (
              <Button size="sm" variant="primary">Activate</Button>
            )}
            <Button size="sm" variant="secondary">Remove</Button>
          </Box>
        )
      }
    ]
    
    return (
      <Box p="md">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
          <div>
            <Typography variant="h3" mb="sm">User Management</Typography>
            <Typography variant="body" color="gray">
              {selectedRows.size > 0 ? `${selectedRows.size} users selected` : `${userData.length} total users`}
            </Typography>
          </div>
          <Box display="flex" gap="sm">
            {selectedRows.size > 0 && (
              <>
                <Button size="sm" variant="secondary">Bulk Delete</Button>
                <Button size="sm" variant="outline">Export Selected</Button>
              </>
            )}
            <Button size="sm" variant="primary">Add User</Button>
          </Box>
        </Box>
        
        <Table
          data={sortedData}
          columns={adminColumns}
          variant="striped"
          selectable
          sortable
          hoverable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
          stickyHeader
          maxHeight={400}
        />
      </Box>
    )
  },
}

export const Playground: Story = {
  args: {
    data: userData,
    columns: basicUserColumns,
    variant: 'default',
    size: 'md',
    sortable: false,
    selectable: false,
    hoverable: true,
    loading: false,
    loadingRows: 5,
    emptyMessage: 'No data available',
    stickyHeader: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Table {...args} />
    </Box>
  ),
}