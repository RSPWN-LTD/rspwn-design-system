import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineItem } from './Timeline'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Badge } from './Badge'

const meta: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
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
      options: ['default', 'compact', 'detailed'],
    },
    alternate: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Timeline>

// Sample data
const basicItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Project Created',
    description: 'New gaming project initialized with basic structure',
    timestamp: '2024-01-15',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Design Phase',
    description: 'UI/UX design and wireframing completed',
    timestamp: '2024-01-22',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Development Started',
    description: 'Core development work in progress',
    timestamp: '2024-02-01',
    status: 'active',
  },
  {
    id: '4',
    title: 'Testing Phase',
    description: 'Quality assurance and bug testing',
    timestamp: '2024-02-15',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Release',
    description: 'Production deployment and launch',
    timestamp: '2024-03-01',
    status: 'pending',
  },
]

const gamingEvents: TimelineItem[] = [
  {
    id: 'tournament',
    title: 'RSPWN Championship',
    description: 'Annual esports tournament featuring top players from around the world',
    timestamp: 'March 15, 2024',
    status: 'completed',
  },
  {
    id: 'update',
    title: 'Game Update 2.5',
    description: 'Major update with new characters, maps, and gameplay mechanics',
    timestamp: 'April 2, 2024',
    status: 'completed',
  },
  {
    id: 'event',
    title: 'Summer Gaming Festival',
    description: 'Week-long gaming event with special rewards and exclusive content',
    timestamp: 'June 10, 2024',
    status: 'active',
  },
  {
    id: 'beta',
    title: 'Beta Testing Program',
    description: 'Closed beta for upcoming features and content',
    timestamp: 'August 20, 2024',
    status: 'pending',
  },
]

const projectMilestones: TimelineItem[] = [
  {
    id: 'milestone1',
    title: 'Research & Planning',
    description: 'Market research and technical planning phase',
    timestamp: 'Q1 2024',
    status: 'completed',
    content: (
      <Box>
        <Typography variant="small" mb="sm">Key Deliverables:</Typography>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#9CA3AF' }}>
          <li>Market analysis report</li>
          <li>Technical architecture</li>
          <li>Resource allocation plan</li>
        </ul>
      </Box>
    ),
  },
  {
    id: 'milestone2',
    title: 'MVP Development',
    description: 'Minimum viable product development and testing',
    timestamp: 'Q2 2024',
    status: 'completed',
    content: (
      <Box>
        <Typography variant="small" mb="sm">Progress:</Typography>
        <Box display="flex" gap="xs" flexWrap="wrap">
          <Badge size="sm" variant="success">Core Features</Badge>
          <Badge size="sm" variant="success">User Auth</Badge>
          <Badge size="sm" variant="success">Basic UI</Badge>
        </Box>
      </Box>
    ),
  },
  {
    id: 'milestone3',
    title: 'Feature Enhancement',
    description: 'Advanced features and user experience improvements',
    timestamp: 'Q3 2024',
    status: 'active',
    content: (
      <Box>
        <Typography variant="small" mb="sm">In Progress:</Typography>
        <Box display="flex" gap="xs" flexWrap="wrap">
          <Badge size="sm" variant="primary">Real-time Chat</Badge>
          <Badge size="sm" variant="warning">Push Notifications</Badge>
          <Badge size="sm" variant="secondary">Analytics</Badge>
        </Box>
      </Box>
    ),
  },
  {
    id: 'milestone4',
    title: 'Production Launch',
    description: 'Full production deployment and public release',
    timestamp: 'Q4 2024',
    status: 'pending',
  },
]

export const Default: Story = {
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default',
  },
}

export const BasicUsage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">
      <div>
        <Typography variant="body" mb="md">Project Timeline</Typography>
        <Timeline items={basicItems} />
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Box maxWidth="500px">
          <Timeline
            items={basicItems.slice(0, 3)}
            size="sm"
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Box maxWidth="600px">
          <Timeline
            items={basicItems.slice(0, 3)}
            size="md"
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Box maxWidth="700px">
          <Timeline
            items={basicItems.slice(0, 3)}
            size="lg"
          />
        </Box>
      </div>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="body" mb="md">Default Variant</Typography>
        <Box maxWidth="600px">
          <Timeline
            items={basicItems.slice(0, 3)}
            variant="default"
          />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Compact Variant</Typography>
        <Box maxWidth="600px">
          <Timeline
            items={basicItems.slice(0, 3)}
            variant="compact"
          />
        </Box>
      </div>
    </Box>
  ),
}

export const AlternateLayout: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="800px">
      <div>
        <Typography variant="body" mb="md">Alternate Timeline Layout</Typography>
        <Timeline
          items={gamingEvents}
          alternate
        />
      </div>
    </Box>
  ),
}

export const WithCustomIcons: Story = {
  render: () => {
    const GamepadIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    )
    
    const TrophyIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4.5c.8 0 1.5.7 1.5 1.5S22.3 7 21.5 7H20c-.6 2.5-2.6 4.5-5 4.9V14h2c1.1 0 2 .9 2 2v6H5v-6c0-1.1.9-2 2-2h2v-2.1C6.6 11.5 4.6 9.5 4 7H2.5C1.7 7 1 6.3 1 5.5S1.7 4 2.5 4H7z" />
      </svg>
    )
    
    const CodeIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    )
    
    const RocketIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.44 5.58s2.12.21 4.16-.81c1.22-.61 2.27-1.72 2.27-1.72L9.19 6.35zm11.45-2.69C20.64 3.66 20.64 3.66 20.64 3.66s-3.75-.73-6.38 1.91c-2.22 2.22-2.22 5.83-2.22 5.83s3.61 0 5.83-2.22C20.51 6.54 20.64 3.66 20.64 3.66z" />
      </svg>
    )
    
    const itemsWithIcons: TimelineItem[] = [
      {
        id: '1',
        title: 'Game Development Started',
        description: 'Initial game concept and development kickoff',
        timestamp: 'January 2024',
        status: 'completed',
        icon: <GamepadIcon />,
      },
      {
        id: '2',
        title: 'Alpha Testing',
        description: 'Internal testing and core gameplay refinement',
        timestamp: 'March 2024',
        status: 'completed',
        icon: <CodeIcon />,
      },
      {
        id: '3',
        title: 'Tournament Integration',
        description: 'Esports tournament features and competitive modes',
        timestamp: 'May 2024',
        status: 'active',
        icon: <TrophyIcon />,
      },
      {
        id: '4',
        title: 'Global Launch',
        description: 'Worldwide release and marketing campaign',
        timestamp: 'July 2024',
        status: 'pending',
        icon: <RocketIcon />,
      },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">
        <div>
          <Typography variant="body" mb="md">Timeline with Custom Icons</Typography>
          <Timeline items={itemsWithIcons} />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Alternate Layout with Icons</Typography>
          <Timeline items={itemsWithIcons} alternate />
        </div>
      </Box>
    )
  },
}

export const WithCustomContent: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="700px">
      <div>
        <Typography variant="body" mb="md">Project Milestones</Typography>
        <Timeline items={projectMilestones} />
      </div>
    </Box>
  ),
}

export const DifferentStatuses: Story = {
  render: () => {
    const statusItems: TimelineItem[] = [
      {
        id: 'completed',
        title: 'Completed Task',
        description: 'This task has been successfully completed',
        timestamp: '2 days ago',
        status: 'completed',
      },
      {
        id: 'active',
        title: 'Active Task',
        description: 'This task is currently in progress',
        timestamp: 'Now',
        status: 'active',
      },
      {
        id: 'pending',
        title: 'Pending Task',
        description: 'This task is waiting to be started',
        timestamp: 'Tomorrow',
        status: 'pending',
      },
      {
        id: 'default',
        title: 'Default Status',
        description: 'This task has default status with no special state',
        timestamp: 'Next week',
        status: 'default',
      },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">
        <div>
          <Typography variant="body" mb="md">Different Status States</Typography>
          <Timeline items={statusItems} />
          
          <Box mt="lg" p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <Typography variant="small" color="gray" mb="sm">Status Legend:</Typography>
            <Box display="flex" flexDirection="column" gap="xs">
              <Box display="flex" alignItems="center" gap="sm">
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: '#4A9EFF' 
                }} />
                <Typography variant="small">Completed - Blue background</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="sm">
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  border: '2px solid #4A9EFF',
                  backgroundColor: 'transparent'
                }} />
                <Typography variant="small">Active - Blue border with glow</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="sm">
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  border: '2px solid #6B7280',
                  backgroundColor: 'transparent'
                }} />
                <Typography variant="small">Pending - Gray border</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="sm">
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  border: '2px solid #9CA3AF',
                  backgroundColor: 'transparent'
                }} />
                <Typography variant="small">Default - Light gray border</Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    )
  },
}

export const States: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="sm">Normal State</Typography>
        <Box maxWidth="600px">
          <Timeline items={basicItems.slice(0, 3)} />
        </Box>
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled State</Typography>
        <Box maxWidth="600px">
          <Timeline items={basicItems.slice(0, 3)} disabled />
        </Box>
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => {
    const orderTimeline: TimelineItem[] = [
      {
        id: 'ordered',
        title: 'Order Placed',
        description: 'Gaming headset order confirmed',
        timestamp: 'Today, 2:30 PM',
        status: 'completed',
      },
      {
        id: 'payment',
        title: 'Payment Processed',
        description: 'Payment successfully charged',
        timestamp: 'Today, 2:35 PM',
        status: 'completed',
      },
      {
        id: 'preparing',
        title: 'Preparing for Shipment',
        description: 'Item is being prepared for shipping',
        timestamp: 'Today, 4:00 PM',
        status: 'active',
      },
      {
        id: 'shipped',
        title: 'Shipped',
        description: 'Package dispatched from warehouse',
        timestamp: 'Tomorrow',
        status: 'pending',
      },
      {
        id: 'delivered',
        title: 'Delivered',
        description: 'Package delivered to your address',
        timestamp: 'In 2-3 days',
        status: 'pending',
      },
    ]
    
    const updateHistory: TimelineItem[] = [
      {
        id: 'v1',
        title: 'Version 1.0 Release',
        description: 'Initial release with core features',
        timestamp: '6 months ago',
        status: 'completed',
        content: (
          <Box>
            <Typography variant="small" mb="xs">New Features:</Typography>
            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px' }}>
              <li>User authentication</li>
              <li>Basic matchmaking</li>
              <li>In-game chat</li>
            </ul>
          </Box>
        ),
      },
      {
        id: 'v15',
        title: 'Version 1.5 Update',
        description: 'Major gameplay improvements and new content',
        timestamp: '3 months ago',
        status: 'completed',
        content: (
          <Box>
            <Typography variant="small" mb="xs">What\'s New:</Typography>
            <Box display="flex" gap="xs" flexWrap="wrap">
              <Badge size="sm" variant="success">New Maps</Badge>
              <Badge size="sm" variant="success">Ranked Mode</Badge>
              <Badge size="sm" variant="primary">Performance</Badge>
            </Box>
          </Box>
        ),
      },
      {
        id: 'v20',
        title: 'Version 2.0 Beta',
        description: 'Complete UI overhaul and advanced features',
        timestamp: 'Last week',
        status: 'active',
        content: (
          <Box>
            <Typography variant="small" mb="xs">Beta Features:</Typography>
            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px' }}>
              <li>New user interface</li>
              <li>Advanced statistics</li>
              <li>Tournament mode</li>
            </ul>
          </Box>
        ),
      },
    ]
    
    const achievementTimeline: TimelineItem[] = [
      {
        id: 'first',
        title: 'First Victory',
        description: 'Won your first match',
        timestamp: 'January 15',
        status: 'completed',
      },
      {
        id: 'streak',
        title: '10 Win Streak',
        description: 'Achieved 10 consecutive victories',
        timestamp: 'February 3',
        status: 'completed',
      },
      {
        id: 'ranked',
        title: 'Ranked Player',
        description: 'Reached Gold tier in ranked play',
        timestamp: 'March 12',
        status: 'completed',
      },
      {
        id: 'tournament',
        title: 'Tournament Participant',
        description: 'Participated in monthly tournament',
        timestamp: 'April 1',
        status: 'active',
      },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Order Tracking</Typography>
          <Box maxWidth="500px">
            <Timeline items={orderTimeline} />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Update History</Typography>
          <Box maxWidth="700px">
            <Timeline items={updateHistory} />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Achievement Progress</Typography>
          <Box maxWidth="600px">
            <Timeline items={achievementTimeline} alternate />
          </Box>
        </div>
      </Box>
    )
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <Timeline
          items={basicItems.slice(0, 3)}
          aria-label="Project timeline with accessibility features"
          aria-describedby="timeline-description"
        />
        <Typography id="timeline-description" variant="small" color="gray" mt="sm">
          This timeline uses proper ARIA attributes and semantic HTML for screen reader compatibility.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    items: gamingEvents,
    size: 'md',
    variant: 'default',
    alternate: false,
    disabled: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md" maxWidth="800px" margin="0 auto">
      <Timeline {...args} />
    </Box>
  ),
}