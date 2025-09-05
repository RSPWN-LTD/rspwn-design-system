import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { useState } from 'react'

const meta: Meta<typeof Rating> = {
  title: 'UI/Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    maxRating: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
    },
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    value: 3,
    size: 'md',
    maxRating: 5,
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [rating, setRating] = useState(3.5)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
        <div>
          <Typography variant="body" mb="md">Interactive Rating</Typography>
          <Rating
            label="Rate this product"
            value={rating}
            onChange={setRating}
            allowHalf
            helperText="Click on stars to rate"
          />
          <Typography variant="small" color="gray" mt="sm">
            Current rating: {rating} stars
          </Typography>
        </div>
      </Box>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Rating
          value={4}
          size="sm"
          readOnly
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Rating
          value={4}
          size="md"
          readOnly
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Rating
          value={4}
          size="lg"
          readOnly
        />
      </div>
    </Box>
  ),
}

export const HalfStars: Story = {
  render: () => {
    const [basicRating, setBasicRating] = useState(2.5)
    const [preciseRating, setPreciseRating] = useState(3.5)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <Typography variant="body" mb="sm">Half Star Support</Typography>
          <Rating
            label="Product Quality"
            value={basicRating}
            onChange={setBasicRating}
            allowHalf
            helperText="Supports half-star ratings for more precise feedback"
          />
          <Typography variant="small" color="gray" mt="xs">
            Rating: {basicRating}/5
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Precise Ratings</Typography>
          <Rating
            label="User Experience"
            value={preciseRating}
            onChange={setPreciseRating}
            allowHalf
            size="lg"
            helperText="Large size with half-star precision"
          />
          <Typography variant="small" color="gray" mt="xs">
            Rating: {preciseRating}/5
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Read-only Half Stars</Typography>
          <Box display="flex" flexDirection="column" gap="sm">
            <Rating value={1.5} readOnly allowHalf />
            <Rating value={2.5} readOnly allowHalf />
            <Rating value={3.5} readOnly allowHalf />
            <Rating value={4.5} readOnly allowHalf />
          </Box>
        </div>
      </Box>
    )
  },
}

export const ReadOnlyModes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
      <div>
        <Typography variant="body" mb="md">Product Ratings</Typography>
        <Box display="flex" flexDirection="column" gap="md">
          <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">
              <Typography variant="small">Gaming Headset</Typography>
              <Typography variant="small" color="gray">4.5/5</Typography>
            </Box>
            <Rating value={4.5} readOnly allowHalf size="sm" />
          </div>
          
          <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">
              <Typography variant="small">Mechanical Keyboard</Typography>
              <Typography variant="small" color="gray">4.0/5</Typography>
            </Box>
            <Rating value={4} readOnly size="sm" />
          </div>
          
          <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">
              <Typography variant="small">Gaming Mouse</Typography>
              <Typography variant="small" color="gray">3.5/5</Typography>
            </Box>
            <Rating value={3.5} readOnly allowHalf size="sm" />
          </div>
          
          <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">
              <Typography variant="small">Monitor Stand</Typography>
              <Typography variant="small" color="gray">5.0/5</Typography>
            </Box>
            <Rating value={5} readOnly size="sm" />
          </div>
        </Box>
      </div>
    </Box>
  ),
}

export const CustomMaxRating: Story = {
  render: () => {
    const [rating3, setRating3] = useState(2)
    const [rating10, setRating10] = useState(7)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <Typography variant="body" mb="sm">3-Star Rating System</Typography>
          <Rating
            label="Difficulty Level"
            value={rating3}
            onChange={setRating3}
            maxRating={3}
            helperText="Rate difficulty from 1 to 3 stars"
          />
          <Typography variant="small" color="gray" mt="xs">
            Difficulty: {rating3}/3 ({rating3 === 1 ? 'Easy' : rating3 === 2 ? 'Medium' : 'Hard'})
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">10-Star Rating System</Typography>
          <Rating
            label="Overall Satisfaction"
            value={rating10}
            onChange={setRating10}
            maxRating={10}
            size="sm"
            helperText="Rate your overall satisfaction from 1 to 10 stars"
          />
          <Typography variant="small" color="gray" mt="xs">
            Satisfaction: {rating10}/10
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Read-only 7-Star System</Typography>
          <Box display="flex" flexDirection="column" gap="sm">
            <div>
              <Typography variant="small" mb="xs">Game Graphics: 6/7</Typography>
              <Rating value={6} maxRating={7} readOnly size="sm" />
            </div>
            <div>
              <Typography variant="small" mb="xs">Sound Quality: 5/7</Typography>
              <Rating value={5} maxRating={7} readOnly size="sm" />
            </div>
            <div>
              <Typography variant="small" mb="xs">Gameplay: 7/7</Typography>
              <Rating value={7} maxRating={7} readOnly size="sm" />
            </div>
          </Box>
        </div>
      </Box>
    )
  },
}

export const CustomIcons: Story = {
  render: () => {
    const [heartRating, setHeartRating] = useState(3)
    const [thumbRating, setThumbRating] = useState(2)
    
    const HeartIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
    
    const ThumbIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
      </svg>
    )
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
        <div>
          <Typography variant="body" mb="sm">Heart Rating</Typography>
          <Rating
            label="How much do you love this?"
            value={heartRating}
            onChange={setHeartRating}
            icon={<HeartIcon />}
            helperText="Rate with hearts instead of stars"
            size="lg"
          />
          <Typography variant="small" color="gray" mt="xs">
            Love level: {heartRating}/5 hearts
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Thumbs Up Rating</Typography>
          <Rating
            label="Would you recommend this?"
            value={thumbRating}
            onChange={setThumbRating}
            icon={<ThumbIcon />}
            maxRating={3}
            helperText="Rate with thumbs up (max 3)"
          />
          <Typography variant="small" color="gray" mt="xs">
            Recommendation: {thumbRating}/3 thumbs up
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Mixed Icon Display</Typography>
          <Box display="flex" flexDirection="column" gap="sm">
            <Rating value={4} icon={<HeartIcon />} readOnly size="sm" />
            <Rating value={2} icon={<ThumbIcon />} maxRating={3} readOnly size="sm" />
          </Box>
        </div>
      </Box>
    )
  },
}

export const States: Story = {
  render: () => {
    const [normalRating, setNormalRating] = useState(3)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">
        <div>
          <Typography variant="body" mb="sm">Normal State</Typography>
          <Rating
            label="Rate this experience"
            value={normalRating}
            onChange={setNormalRating}
            helperText="Click to rate or use arrow keys"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Read-only State</Typography>
          <Rating
            label="Average Rating"
            value={4.2}
            readOnly
            allowHalf
            helperText="This rating cannot be changed"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Disabled State</Typography>
          <Rating
            label="Unavailable Rating"
            value={2}
            disabled
            helperText="Rating is currently disabled"
          />
        </div>
        
        <div>
          <Typography variant="body" mb="sm">Different Values</Typography>
          <Box display="flex" flexDirection="column" gap="sm">
            <div>
              <Typography variant="small" mb="xs">No rating (0 stars)</Typography>
              <Rating value={0} readOnly size="sm" />
            </div>
            <div>
              <Typography variant="small" mb="xs">Perfect rating (5 stars)</Typography>
              <Rating value={5} readOnly size="sm" />
            </div>
            <div>
              <Typography variant="small" mb="xs">Partial rating (2.5 stars)</Typography>
              <Rating value={2.5} readOnly allowHalf size="sm" />
            </div>
          </Box>
        </div>
      </Box>
    )
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [productRating, setProductRating] = useState(0)
    const [serviceRating, setServiceRating] = useState(0)
    const [overallRating, setOverallRating] = useState(0)
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">Product Review</Typography>
          <Box maxWidth="500px" display="flex" flexDirection="column" gap="lg">
            <div>
              <Rating
                label="Product Quality"
                value={productRating}
                onChange={setProductRating}
                allowHalf
                helperText="How would you rate the quality of this gaming headset?"
              />
            </div>
            
            <div>
              <Rating
                label="Customer Service"
                value={serviceRating}
                onChange={setServiceRating}
                allowHalf
                helperText="Rate your experience with our customer support"
              />
            </div>
            
            <div>
              <Rating
                label="Overall Experience"
                value={overallRating}
                onChange={setOverallRating}
                allowHalf
                size="lg"
                helperText="Your overall satisfaction with your purchase"
              />
            </div>
            
            {(productRating > 0 || serviceRating > 0 || overallRating > 0) && (
              <Box p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
                <Typography variant="small" color="gray" mb="sm">Review Summary:</Typography>
                <Box display="flex" flexDirection="column" gap="xs">
                  {productRating > 0 && (
                    <Typography variant="small">Product Quality: {productRating}/5</Typography>
                  )}
                  {serviceRating > 0 && (
                    <Typography variant="small">Customer Service: {serviceRating}/5</Typography>
                  )}
                  {overallRating > 0 && (
                    <Typography variant="small">Overall: {overallRating}/5</Typography>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Game Reviews</Typography>
          <Box display="flex" flexDirection="column" gap="md" maxWidth="600px">
            <Box p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">
                <Typography variant="body">Cyberpunk 2077</Typography>
                <Typography variant="small" color="gray">4.2/5</Typography>
              </Box>
              <Rating value={4.2} readOnly allowHalf size="sm" />
              <Typography variant="small" color="gray" mt="xs">
                "Amazing graphics and storyline. Some minor bugs but overall excellent."
              </Typography>
            </Box>
            
            <Box p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">
                <Typography variant="body">The Witcher 3</Typography>
                <Typography variant="small" color="gray">5.0/5</Typography>
              </Box>
              <Rating value={5} readOnly size="sm" />
              <Typography variant="small" color="gray" mt="xs">
                "Perfect RPG experience. Incredible world-building and character development."
              </Typography>
            </Box>
            
            <Box p="md" style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">
                <Typography variant="body">Valorant</Typography>
                <Typography variant="small" color="gray">3.5/5</Typography>
              </Box>
              <Rating value={3.5} readOnly allowHalf size="sm" />
              <Typography variant="small" color="gray" mt="xs">
                "Good competitive shooter but can be frustrating at times."
              </Typography>
            </Box>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Skill Assessment</Typography>
          <Box maxWidth="400px">
            <Box display="flex" flexDirection="column" gap="md">
              <div>
                <Typography variant="small" mb="sm">React Development</Typography>
                <Rating value={4} maxRating={5} readOnly />
              </div>
              <div>
                <Typography variant="small" mb="sm">TypeScript</Typography>
                <Rating value={3} maxRating={5} readOnly />
              </div>
              <div>
                <Typography variant="small" mb="sm">UI/UX Design</Typography>
                <Rating value={3.5} maxRating={5} readOnly allowHalf />
              </div>
              <div>
                <Typography variant="small" mb="sm">Game Design</Typography>
                <Rating value={2} maxRating={5} readOnly />
              </div>
            </Box>
          </Box>
        </div>
      </Box>
    )
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <Rating
          label="Accessible Rating Component"
          value={3}
          helperText="Use arrow keys to navigate, Enter or Space to select. This rating follows accessibility best practices."
          aria-label="Product rating with full keyboard support"
        />
      </div>
      
      <div>
        <Rating
          label="Keyboard Navigation Demo"
          value={2.5}
          allowHalf
          helperText="Try using Home/End keys for quick navigation to min/max values."
          aria-describedby="custom-description"
        />
        <Typography id="custom-description" variant="small" color="gray" mt="sm">
          Custom ARIA description for screen readers providing additional context.
        </Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Screen Reader Friendly</Typography>
        <Rating
          value={4}
          readOnly
          aria-label="Customer satisfaction rating: 4 out of 5 stars"
          helperText="Screen readers will announce the current rating and total possible stars."
        />
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    value: 3,
    maxRating: 5,
    allowHalf: false,
    readOnly: false,
    size: 'md',
    disabled: false,
    label: 'Rating',
    helperText: 'Click stars to rate',
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Rating {...args} />
    </Box>
  ),
}