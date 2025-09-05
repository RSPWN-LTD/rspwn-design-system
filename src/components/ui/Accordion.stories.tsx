import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
    },
    allowMultiple: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: [
      <Accordion.Item key="item1" id="item1" title="First Section">
        This is the content of the first section. It contains some text and information that can be expanded or collapsed.
      </Accordion.Item>,
      <Accordion.Item key="item2" id="item2" title="Second Section">
        This is the content of the second section. It has different content from the first section.
      </Accordion.Item>,
      <Accordion.Item key="item3" id="item3" title="Third Section">
        This is the content of the third section. Each section can contain any type of content.
      </Accordion.Item>,
    ],
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', color: 'white' }}>Default</h3>
        <Accordion variant="default">
          <Accordion.Item id="default1" title="Default Section 1">
            Content for default variant section.
          </Accordion.Item>
          <Accordion.Item id="default2" title="Default Section 2">
            Another section in the default variant.
          </Accordion.Item>
        </Accordion>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 1rem 0', color: 'white' }}>Outlined</h3>
        <Accordion variant="outlined">
          <Accordion.Item id="outlined1" title="Outlined Section 1">
            Content for outlined variant section.
          </Accordion.Item>
          <Accordion.Item id="outlined2" title="Outlined Section 2">
            Another section in the outlined variant.
          </Accordion.Item>
        </Accordion>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 1rem 0', color: 'white' }}>Filled</h3>
        <Accordion variant="filled">
          <Accordion.Item id="filled1" title="Filled Section 1">
            Content for filled variant section.
          </Accordion.Item>
          <Accordion.Item id="filled2" title="Filled Section 2">
            Another section in the filled variant.
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
}

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    variant: 'outlined',
    children: [
      <Accordion.Item key="multi1" id="multi1" title="Multiple Section 1">
        With allowMultiple enabled, you can open multiple sections at once.
      </Accordion.Item>,
      <Accordion.Item key="multi2" id="multi2" title="Multiple Section 2">
        Try opening this section while the first one is open.
      </Accordion.Item>,
      <Accordion.Item key="multi3" id="multi3" title="Multiple Section 3">
        All sections can be open simultaneously.
      </Accordion.Item>,
    ],
  },
}

export const DefaultOpen: Story = {
  args: {
    defaultOpenItems: ['open1', 'open3'],
    variant: 'outlined',
    children: [
      <Accordion.Item key="open1" id="open1" title="Initially Open Section">
        This section starts open by default.
      </Accordion.Item>,
      <Accordion.Item key="open2" id="open2" title="Initially Closed Section">
        This section starts closed.
      </Accordion.Item>,
      <Accordion.Item key="open3" id="open3" title="Another Open Section">
        This section also starts open by default.
      </Accordion.Item>,
    ],
  },
}

export const WithDisabledItems: Story = {
  args: {
    variant: 'outlined',
    children: [
      <Accordion.Item key="enabled" id="enabled" title="Enabled Section">
        This section is enabled and can be toggled.
      </Accordion.Item>,
      <Accordion.Item key="disabled" id="disabled" title="Disabled Section" disabled>
        This section is disabled and cannot be opened.
      </Accordion.Item>,
      <Accordion.Item key="enabled2" id="enabled2" title="Another Enabled Section">
        This section is also enabled.
      </Accordion.Item>,
    ],
  },
}

export const RichContent: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Accordion variant="outlined">
        <Accordion.Item id="rich1" title="Section with Rich Content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ margin: 0, color: 'white' }}>This section contains rich content including:</p>
            <ul style={{ margin: 0, color: '#ccc', paddingLeft: '1.5rem' }}>
              <li>Multiple paragraphs</li>
              <li>Lists and other elements</li>
              <li>Complex layouts</li>
            </ul>
            <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>
              The accordion can handle any type of content you put inside it.
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item id="rich2" title="FAQ Section">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>How does this work?</h4>
              <p style={{ margin: 0, color: '#ccc' }}>
                The accordion component uses CSS transitions to smoothly animate the content area.
              </p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>Can I customize the styling?</h4>
              <p style={{ margin: 0, color: '#ccc' }}>
                Yes, the component supports multiple variants and follows the design system tokens.
              </p>
            </div>
          </div>
        </Accordion.Item>
        <Accordion.Item id="rich3" title="Code Example">
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            padding: '1rem', 
            borderRadius: '0.5rem',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            color: '#e5e5e5'
          }}>
            {`<Accordion variant="outlined">
  <Accordion.Item id="example" title="Example">
    Content goes here
  </Accordion.Item>
</Accordion>`}
          </div>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    variant: 'outlined',
    children: [
      <Accordion.Item key="short" id="short" title="Short Content">
        Brief content that doesn't require much space.
      </Accordion.Item>,
      <Accordion.Item key="long" id="long" title="Long Content">
        <div style={{ color: 'white', lineHeight: 1.6 }}>
          This section contains a lot of content to demonstrate how the accordion handles longer text.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
          
          <br /><br />
          
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          
          <br /><br />
          
          The accordion should smoothly expand to accommodate all of this content, and the transition 
          should be smooth regardless of the content length.
        </div>
      </Accordion.Item>,
      <Accordion.Item key="medium" id="medium" title="Medium Content">
        This section has a moderate amount of content. It's more than the short section but less than 
        the long section. This helps demonstrate the flexibility of the accordion component.
      </Accordion.Item>,
    ],
  },
}