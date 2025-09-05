import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof TextArea> = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    variant: 'default',
    size: 'md',
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <Typography variant="body" mb="md">Basic TextArea</Typography>
          <TextArea
            placeholder="Type your message here..."
            value={value}
            onChange={setValue}
            width="100%"
          />
          <Typography variant="small" color="gray" mt="sm">
            Current length: {value.length}
          </Typography>
        </div>
      </Box>
    )
  },
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="sm">Default</Typography>
        <TextArea
          placeholder="Default variant..."
          variant="default"
          width="100%"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Filled</Typography>
        <TextArea
          placeholder="Filled variant..."
          variant="filled"
          width="100%"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Borderless</Typography>
        <TextArea
          placeholder="Borderless variant..."
          variant="borderless"
          width="100%"
        />
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <TextArea
          placeholder="Small size textarea..."
          size="sm"
          width="100%"
          rows={2}
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <TextArea
          placeholder="Medium size textarea..."
          size="md"
          width="100%"
          rows={3}
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <TextArea
          placeholder="Large size textarea..."
          size="lg"
          width="100%"
          rows={4}
        />
      </div>
    </Box>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <TextArea
          label="Message"
          placeholder="Enter your message..."
          helperText="Please provide detailed information about your request."
          width="100%"
        />
      </div>
      
      <div>
        <TextArea
          label="Required Field"
          placeholder="This field is required..."
          required
          helperText="This information is mandatory for processing."
          width="100%"
        />
      </div>
      
      <div>
        <TextArea
          label="Comments"
          placeholder="Additional comments..."
          helperText="Optional: Any additional information you'd like to share."
          width="100%"
          rows={5}
        />
      </div>
    </Box>
  ),
}

export const CharacterLimits: Story = {
  render: () => {
    const [shortText, setShortText] = useState('')
    const [longText, setLongText] = useState('')
    const [nearLimitText, setNearLimitText] = useState('This text is getting close to the limit and should show warning colors when near maximum length.')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <TextArea
            label="Short Limit (50 chars)"
            placeholder="Type here..."
            value={shortText}
            onChange={setShortText}
            maxLength={50}
            showCharCount
            width="100%"
          />
        </div>
        
        <div>
          <TextArea
            label="Medium Limit (200 chars)"
            placeholder="Type a longer message..."
            value={longText}
            onChange={setLongText}
            maxLength={200}
            showCharCount
            width="100%"
            rows={4}
          />
        </div>
        
        <div>
          <TextArea
            label="Near Limit Demo (100 chars)"
            placeholder="This demonstrates warning colors..."
            value={nearLimitText}
            onChange={setNearLimitText}
            maxLength={100}
            showCharCount
            helperText="Watch the character count change colors as you approach the limit."
            width="100%"
            rows={3}
          />
        </div>
      </Box>
    )
  },
}

export const AutoResize: Story = {
  render: () => {
    const [basicText, setBasicText] = useState('')
    const [constrainedText, setConstrainedText] = useState('')
    const [longText, setLongText] = useState('This textarea will automatically resize as you type more content.\n\nTry adding multiple lines and watch how it grows dynamically!')
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <Typography variant="body" mb="sm">Basic Auto-resize</Typography>
          <TextArea
            placeholder="Start typing and watch this grow..."
            value={basicText}
            onChange={setBasicText}
            autoResize
            width="100%"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Auto-resize with Constraints (3-8 rows)</Typography>
          <TextArea
            placeholder="This will grow between 3 and 8 rows..."
            value={constrainedText}
            onChange={setConstrainedText}
            autoResize
            minRows={3}
            maxRows={8}
            width="100%"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Pre-filled Auto-resize</Typography>
          <TextArea
            label="Description"
            value={longText}
            onChange={setLongText}
            autoResize
            minRows={2}
            maxRows={10}
            helperText="This textarea automatically sized to fit the existing content."
            width="100%"
          />
        </div>
      </Box>
    )
  },
}

export const States: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="sm">Error State</Typography>
        <TextArea
          label="Message"
          placeholder="Enter your message..."
          value="This message contains errors"
          error
          errorMessage="Please provide a valid message without special characters."
          width="100%"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled State</Typography>
        <TextArea
          label="Disabled Field"
          placeholder="This field is disabled..."
          value="This content cannot be edited"
          disabled
          helperText="This field is currently not available for editing."
          width="100%"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Read-only State</Typography>
        <TextArea
          label="Terms & Conditions"
          value="These are the terms and conditions that you can read but not modify. This content is displayed for informational purposes only and represents the current agreement between the parties involved."
          readOnly
          rows={4}
          helperText="This content is read-only and cannot be modified."
          width="100%"
        />
      </div>
    </Box>
  ),
}

export const ResizeOptions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Box display="flex" gap="lg" flexWrap="wrap">
        <div style={{ minWidth: '250px' }}>
          <Typography variant="body" mb="sm">No Resize</Typography>
          <TextArea
            placeholder="This textarea cannot be resized..."
            resize="none"
            rows={3}
            width="100%"
          />
        </div>
        
        <div style={{ minWidth: '250px' }}>
          <Typography variant="body" mb="sm">Vertical Resize Only</Typography>
          <TextArea
            placeholder="Resize vertically only..."
            resize="vertical"
            rows={3}
            width="100%"
          />
        </div>
      </Box>
      
      <Box display="flex" gap="lg" flexWrap="wrap">
        <div style={{ minWidth: '250px' }}>
          <Typography variant="body" mb="sm">Horizontal Resize Only</Typography>
          <TextArea
            placeholder="Resize horizontally only..."
            resize="horizontal"
            rows={3}
            width="100%"
          />
        </div>
        
        <div style={{ minWidth: '250px' }}>
          <Typography variant="body" mb="sm">Both Directions</Typography>
          <TextArea
            placeholder="Resize in both directions..."
            resize="both"
            rows={3}
            width="100%"
          />
        </div>
      </Box>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('')
    const [codeReview, setCodeReview] = useState('')
    const [blogPost, setBlogPost] = useState('# My Gaming Setup Review\n\nAfter months of testing various gaming peripherals, here are my thoughts on the latest equipment...')
    const [supportTicket, setSupportTicket] = useState('')
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Feedback Form</Typography>
          <Box maxWidth="600px">
            <TextArea
              label="Your Feedback"
              placeholder="Tell us about your experience with our gaming products..."
              value={feedback}
              onChange={setFeedback}
              maxLength={500}
              showCharCount
              helperText="Help us improve by sharing your honest feedback about our products and services."
              width="100%"
              rows={4}
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Code Review Comment</Typography>
          <Box maxWidth="800px">
            <TextArea
              label="Review Comments"
              placeholder="Add your code review comments here..."
              value={codeReview}
              onChange={setCodeReview}
              autoResize
              minRows={3}
              maxRows={10}
              variant="filled"
              helperText="Provide constructive feedback about the code changes."
              width="100%"
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Blog Post Editor</Typography>
          <Box maxWidth="900px">
            <TextArea
              label="Article Content"
              placeholder="Start writing your blog post..."
              value={blogPost}
              onChange={setBlogPost}
              autoResize
              minRows={8}
              maxRows={20}
              helperText="Write your blog post in Markdown format. The editor will grow as you add more content."
              width="100%"
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Support Ticket</Typography>
          <Box maxWidth="700px">
            <TextArea
              label="Issue Description"
              placeholder="Please describe the issue you're experiencing in detail..."
              value={supportTicket}
              onChange={setSupportTicket}
              required
              maxLength={1000}
              showCharCount
              helperText="The more details you provide, the better we can assist you. Include steps to reproduce the issue if applicable."
              errorMessage={supportTicket.length < 20 && supportTicket.length > 0 ? "Please provide more details (minimum 20 characters)" : undefined}
              error={supportTicket.length < 20 && supportTicket.length > 0}
              width="100%"
              rows={6}
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Chat Message</Typography>
          <Box maxWidth="400px">
            <TextArea
              placeholder="Type your message..."
              size="sm"
              autoResize
              minRows={1}
              maxRows={5}
              variant="borderless"
              width="100%"
            />
            <Box display="flex" justifyContent="flex-end" gap="sm" mt="sm">
              <button style={{ padding: '4px 12px', fontSize: '12px' }}>Cancel</button>
              <button style={{ padding: '4px 12px', fontSize: '12px', backgroundColor: '#4A9EFF', color: 'white', border: 'none', borderRadius: '4px' }}>Send</button>
            </Box>
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
        <TextArea
          label="Accessible TextArea"
          placeholder="This textarea follows accessibility best practices..."
          helperText="This field has proper labeling, ARIA attributes, and keyboard navigation support."
          aria-label="Main content textarea with accessibility features"
          required
          width="100%"
        />
      </div>
      
      <div>
        <TextArea
          label="Form Field with Validation"
          placeholder="Enter at least 10 characters..."
          helperText="Screen readers will announce the validation state and helper text."
          aria-describedby="custom-description"
          width="100%"
        />
        <Typography id="custom-description" variant="small" color="gray" mt="sm">
          Custom description that will be read by screen readers.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    placeholder: 'Enter your text here...',
    variant: 'default',
    size: 'md',
    rows: 4,
    resize: 'vertical',
    autoResize: false,
    maxLength: undefined,
    showCharCount: false,
    disabled: false,
    error: false,
    required: false,
    readOnly: false,
    label: 'Text Area',
    helperText: 'Helper text goes here',
    width: '400px',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <TextArea {...args} />
    </Box>
  ),
}