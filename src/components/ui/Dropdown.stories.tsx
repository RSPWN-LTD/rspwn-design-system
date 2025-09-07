import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownContent, 
  Menu, 
  MenuItem, 
  MenuSeparator, 
  SubMenu 
} from './Dropdown'
import { Button } from './Button'

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover', 'manual'],
    },
    placement: {
      control: { type: 'select' },
      options: [
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end'
      ],
    },
    closeOnSelect: {
      control: { type: 'boolean' },
    },
    closeOnBlur: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Simple icons for demonstration
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
)

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
  </svg>
)

const LogOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16,17 21,12 16,7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
)

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6"></polyline>
    <path d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
  </svg>
)

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline">
          Options
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem icon={<UserIcon />}>Profile</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
          <MenuSeparator />
          <MenuItem icon={<LogOutIcon />}>Sign out</MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const HoverTrigger: Story = {
  render: () => (
    <Dropdown trigger="hover">
      <DropdownTrigger>
        <Button variant="outline">
          Hover me
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem>Quick action 1</MenuItem>
          <MenuItem>Quick action 2</MenuItem>
          <MenuItem>Quick action 3</MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const Placements: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr', 
      gap: '2rem',
      padding: '4rem',
      minHeight: '300px'
    }}>
      <Dropdown placement="top-start">
        <DropdownTrigger>
          <Button size="sm">Top Start</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown placement="top-end">
        <DropdownTrigger>
          <Button size="sm">Top End</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown placement="right-start">
        <DropdownTrigger>
          <Button size="sm">Right Start</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown placement="left-start">
        <DropdownTrigger>
          <Button size="sm">Left Start</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <Button size="sm">Bottom Start</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button size="sm">Bottom End</Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Action 1</MenuItem>
            <MenuItem>Action 2</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline">
          Actions
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<UserIcon />}>Share</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
          <MenuSeparator />
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithRightIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline">
          View
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem rightIcon="⌘K">Search</MenuItem>
          <MenuItem rightIcon="⌘N">New</MenuItem>
          <MenuItem rightIcon="⌘S">Save</MenuItem>
          <MenuSeparator />
          <MenuItem rightIcon="⌘Q">Quit</MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outline">
          File
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuItem disabled>Recent Files</MenuItem>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
          <MenuItem disabled>Save As...</MenuItem>
          <MenuSeparator />
          <MenuItem>Export</MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithSubMenus: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="outline">
            Edit
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownContent>
          <Menu>
            <MenuItem>Undo</MenuItem>
            <MenuItem>Redo</MenuItem>
            <MenuSeparator />
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
            <MenuSeparator />
            <SubMenu trigger="Transform">
              <MenuItem>Uppercase</MenuItem>
              <MenuItem>Lowercase</MenuItem>
              <MenuItem>Capitalize</MenuItem>
              <MenuSeparator />
              <SubMenu trigger="Case">
                <MenuItem>camelCase</MenuItem>
                <MenuItem>snake_case</MenuItem>
                <MenuItem>kebab-case</MenuItem>
                <MenuItem>PascalCase</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu trigger="Insert">
              <MenuItem>Date</MenuItem>
              <MenuItem>Time</MenuItem>
              <MenuItem>Lorem Ipsum</MenuItem>
            </SubMenu>
          </Menu>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={isOpen} 
              onChange={(e) => setIsOpen(e.target.checked)}
            />
            Toggle dropdown
          </label>
        </div>
        
        <Dropdown isOpen={isOpen} onToggle={setIsOpen} trigger="manual">
          <DropdownTrigger>
            <Button variant="outline">
              Controlled Dropdown
              <ChevronDownIcon />
            </Button>
          </DropdownTrigger>
          <DropdownContent>
            <Menu>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </Menu>
          </DropdownContent>
        </Dropdown>
      </div>
    )
  },
}

export const CustomTrigger: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <div style={{ 
          padding: '0.5rem 1rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <UserIcon />
          John Doe
          <ChevronDownIcon />
        </div>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem icon={<UserIcon />}>View Profile</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
          <MenuSeparator />
          <MenuItem icon={<LogOutIcon />}>Sign Out</MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}

export const CustomSizing: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <Dropdown>
        <DropdownTrigger>
          <Button size="sm">Small Menu</Button>
        </DropdownTrigger>
        <DropdownContent minWidth={150}>
          <Menu>
            <MenuItem>Small</MenuItem>
            <MenuItem>Menu</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button>Wide Menu</Button>
        </DropdownTrigger>
        <DropdownContent minWidth={300}>
          <Menu>
            <MenuItem>This is a wider menu item with more content</MenuItem>
            <MenuItem>Another wide menu item</MenuItem>
            <MenuItem>And one more for good measure</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button>Tall Menu</Button>
        </DropdownTrigger>
        <DropdownContent maxHeight={200}>
          <Menu>
            {Array.from({ length: 20 }, (_, i) => (
              <MenuItem key={i}>Menu Item {i + 1}</MenuItem>
            ))}
          </Menu>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
}

export const ContextMenu: Story = {
  render: () => (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger>
        <Button variant="outline">
          Right Click Menu
          <ChevronDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <Menu>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<UserIcon />}>Share</MenuItem>
          <MenuSeparator />
          <MenuItem>Copy Link</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuSeparator />
          <MenuItem icon={<TrashIcon />} destructive>
            Delete
          </MenuItem>
        </Menu>
      </DropdownContent>
    </Dropdown>
  ),
}