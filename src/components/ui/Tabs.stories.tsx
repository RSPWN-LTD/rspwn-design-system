import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from './Tabs'
import { Box } from '../foundation/Box'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'select' },
      options: ['line', 'enclosed', 'soft-rounded'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    lazyMount: {
      control: { type: 'boolean' },
    },
    isLazy: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">
            <Box p="4">
              <h3>Panel 1 Content</h3>
              <p>This is the content for the first tab.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab2">
            <Box p="4">
              <h3>Panel 2 Content</h3>
              <p>This is the content for the second tab.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab3">
            <Box p="4">
              <h3>Panel 3 Content</h3>
              <p>This is the content for the third tab.</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ width: '500px', height: '300px' }}>
      <Tabs defaultValue="overview" orientation="vertical">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="analytics">Analytics</Tab>
          <Tab value="reports">Reports</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="overview">
            <Box p="4">
              <h3>Overview</h3>
              <p>Get a quick overview of your dashboard metrics and key performance indicators.</p>
            </Box>
          </TabPanel>
          <TabPanel value="analytics">
            <Box p="4">
              <h3>Analytics</h3>
              <p>Dive deep into your analytics data and track user engagement.</p>
            </Box>
          </TabPanel>
          <TabPanel value="reports">
            <Box p="4">
              <h3>Reports</h3>
              <p>Generate and view detailed reports about your application.</p>
            </Box>
          </TabPanel>
          <TabPanel value="settings">
            <Box p="4">
              <h3>Settings</h3>
              <p>Configure your application settings and preferences.</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '400px' }}>
      {/* Line Variant */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Line Variant</h4>
        <Tabs defaultValue="tab1" variant="line">
          <TabList>
            <Tab value="tab1">Home</Tab>
            <Tab value="tab2">About</Tab>
            <Tab value="tab3">Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Home content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">About content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Contact content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Enclosed Variant */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Enclosed Variant</h4>
        <Tabs defaultValue="tab1" variant="enclosed">
          <TabList>
            <Tab value="tab1">Dashboard</Tab>
            <Tab value="tab2">Projects</Tab>
            <Tab value="tab3">Team</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Dashboard content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">Projects content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Team content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Soft Rounded Variant */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Soft Rounded Variant</h4>
        <Tabs defaultValue="tab1" variant="soft-rounded">
          <TabList>
            <Tab value="tab1">Orders</Tab>
            <Tab value="tab2">Customers</Tab>
            <Tab value="tab3">Products</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Orders content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">Customers content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Products content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '400px' }}>
      {/* Small */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Small Size</h4>
        <Tabs defaultValue="tab1" size="sm">
          <TabList>
            <Tab value="tab1">Small</Tab>
            <Tab value="tab2">Tabs</Tab>
            <Tab value="tab3">Example</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Small content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">Tabs content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Example content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Medium */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Medium Size</h4>
        <Tabs defaultValue="tab1" size="md">
          <TabList>
            <Tab value="tab1">Medium</Tab>
            <Tab value="tab2">Tabs</Tab>
            <Tab value="tab3">Example</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Medium content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">Tabs content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Example content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      {/* Large */}
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Large Size</h4>
        <Tabs defaultValue="tab1" size="lg">
          <TabList>
            <Tab value="tab1">Large</Tab>
            <Tab value="tab2">Tabs</Tab>
            <Tab value="tab3">Example</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="tab1">
              <Box p="4">Large content</Box>
            </TabPanel>
            <TabPanel value="tab2">
              <Box p="4">Tabs content</Box>
            </TabPanel>
            <TabPanel value="tab3">
              <Box p="4">Example content</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  ),
}

export const WithDisabledTabs: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Available</Tab>
          <Tab value="tab2" isDisabled>
            Disabled
          </Tab>
          <Tab value="tab3">Another Tab</Tab>
          <Tab value="tab4" isDisabled>
            Also Disabled
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">
            <Box p="4">
              <h3>Available Content</h3>
              <p>This tab is available and accessible.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab2">
            <Box p="4">
              <h3>Disabled Content</h3>
              <p>This content won't be shown since the tab is disabled.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab3">
            <Box p="4">
              <h3>Another Tab Content</h3>
              <p>This is another available tab.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab4">
            <Box p="4">
              <h3>Also Disabled Content</h3>
              <p>This content also won't be shown.</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}

export const LazyLoading: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Tabs defaultValue="tab1" lazyMount>
        <TabList>
          <Tab value="tab1">Loaded Immediately</Tab>
          <Tab value="tab2">Lazy Loaded</Tab>
          <Tab value="tab3">Also Lazy</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">
            <Box p="4">
              <h3>Immediate Content</h3>
              <p>This content loads immediately as it's the default tab.</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab2">
            <Box p="4">
              <h3>Lazy Loaded Content</h3>
              <p>This content only loads when the tab is first clicked.</p>
              <p>Check the React DevTools to see the difference!</p>
            </Box>
          </TabPanel>
          <TabPanel value="tab3">
            <Box p="4">
              <h3>Another Lazy Tab</h3>
              <p>This is another lazy-loaded tab panel.</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledTabs() {
    const [activeTab, setActiveTab] = useState('home')

    return (
      <div style={{ width: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <p>Current tab: <strong>{activeTab}</strong></p>
          <button onClick={() => setActiveTab('dashboard')}>
            Switch to Dashboard
          </button>
        </div>
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value as string)}>
          <TabList>
            <Tab value="home">Home</Tab>
            <Tab value="dashboard">Dashboard</Tab>
            <Tab value="profile">Profile</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="home">
              <Box p="4">
                <h3>Home</h3>
                <p>Welcome to the home page!</p>
              </Box>
            </TabPanel>
            <TabPanel value="dashboard">
              <Box p="4">
                <h3>Dashboard</h3>
                <p>View your dashboard metrics here.</p>
              </Box>
            </TabPanel>
            <TabPanel value="profile">
              <Box p="4">
                <h3>Profile</h3>
                <p>Manage your profile settings.</p>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    )
  },
}

export const KeyboardNavigation: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <p style={{ marginBottom: '1rem', fontSize: '14px' }}>
        Try keyboard navigation:
        <br />• Use arrow keys to move between tabs
        <br />• Use Home/End to jump to first/last tab
        <br />• Use Enter or Space to activate a tab
      </p>
      <Tabs defaultValue="nav1">
        <TabList>
          <Tab value="nav1">First</Tab>
          <Tab value="nav2">Second</Tab>
          <Tab value="nav3" isDisabled>
            Disabled
          </Tab>
          <Tab value="nav4">Fourth</Tab>
          <Tab value="nav5">Fifth</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="nav1">
            <Box p="4">First panel content</Box>
          </TabPanel>
          <TabPanel value="nav2">
            <Box p="4">Second panel content</Box>
          </TabPanel>
          <TabPanel value="nav3">
            <Box p="4">Disabled panel content</Box>
          </TabPanel>
          <TabPanel value="nav4">
            <Box p="4">Fourth panel content</Box>
          </TabPanel>
          <TabPanel value="nav5">
            <Box p="4">Fifth panel content</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}

export const ComplexContent: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Tabs defaultValue="stats" variant="enclosed">
        <TabList>
          <Tab value="stats">Statistics</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="users">Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="stats">
            <Box p="6">
              <h3 style={{ marginBottom: '1rem' }}>Statistics Overview</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <Box p="4" bg="gray.base" borderRadius="md">
                  <h4>Total Users</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>1,234</p>
                </Box>
                <Box p="4" bg="gray.base" borderRadius="md">
                  <h4>Active Sessions</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>456</p>
                </Box>
                <Box p="4" bg="gray.base" borderRadius="md">
                  <h4>Revenue</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>$12,345</p>
                </Box>
                <Box p="4" bg="gray.base" borderRadius="md">
                  <h4>Growth Rate</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>+15%</p>
                </Box>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value="settings">
            <Box p="6">
              <h3 style={{ marginBottom: '1rem' }}>Application Settings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Box>
                  <h4>General</h4>
                  <p>Configure general application settings and preferences.</p>
                </Box>
                <Box>
                  <h4>Security</h4>
                  <p>Manage security settings and authentication methods.</p>
                </Box>
                <Box>
                  <h4>Notifications</h4>
                  <p>Control notification preferences and delivery methods.</p>
                </Box>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value="users">
            <Box p="6">
              <h3 style={{ marginBottom: '1rem' }}>User Management</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Box p="3" bg="gray.base" borderRadius="sm">
                  <h4>John Doe</h4>
                  <p>Administrator • john@example.com</p>
                </Box>
                <Box p="3" bg="gray.base" borderRadius="sm">
                  <h4>Jane Smith</h4>
                  <p>Editor • jane@example.com</p>
                </Box>
                <Box p="3" bg="gray.base" borderRadius="sm">
                  <h4>Mike Johnson</h4>
                  <p>Viewer • mike@example.com</p>
                </Box>
              </div>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
}