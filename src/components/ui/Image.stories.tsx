import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Image> = {
  title: 'UI/Image',
  component: Image,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    aspectRatio: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Image>

// Sample gaming images (using placeholder URLs)
const sampleImages = {
  landscape: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
  portrait: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop',
  square: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=600&fit=crop',
  gaming: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
  setup: 'https://images.unsplash.com/photo-1586920740199-ccf64c8e57e0?w=800&h=600&fit=crop',
  broken: 'https://broken-url-that-will-fail.jpg',
  fallback: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=400&fit=crop'
}

export const Default: Story = {
  args: {
    src: sampleImages.gaming,
    alt: 'Gaming setup with RGB lighting',
    width: '400px',
    height: '300px',
  },
}

export const BasicUsage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="body" mb="md">Basic Image</Typography>
        <Image
          src={sampleImages.gaming}
          alt="Gaming setup"
          width="300px"
          height="200px"
        />
      </div>
    </Box>
  ),
}

export const ObjectFitModes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Object Fit Modes</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">Cover (Default)</Typography>
          <Image
            src={sampleImages.landscape}
            alt="Gaming landscape"
            width="200px"
            height="150px"
            objectFit="cover"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Contain</Typography>
          <Image
            src={sampleImages.landscape}
            alt="Gaming landscape"
            width="200px"
            height="150px"
            objectFit="contain"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Fill</Typography>
          <Image
            src={sampleImages.landscape}
            alt="Gaming landscape"
            width="200px"
            height="150px"
            objectFit="fill"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Scale Down</Typography>
          <Image
            src={sampleImages.landscape}
            alt="Gaming landscape"
            width="200px"
            height="150px"
            objectFit="scale-down"
          />
        </div>
      </Box>
    </Box>
  ),
}

export const AspectRatios: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Different Aspect Ratios</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">16:9</Typography>
          <Image
            src={sampleImages.gaming}
            alt="Gaming setup"
            width="240px"
            aspectRatio="16/9"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">4:3</Typography>
          <Image
            src={sampleImages.gaming}
            alt="Gaming setup"
            width="240px"
            aspectRatio="4/3"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">1:1 (Square)</Typography>
          <Image
            src={sampleImages.square}
            alt="Gaming controller"
            width="200px"
            aspectRatio="1/1"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">3:4 (Portrait)</Typography>
          <Image
            src={sampleImages.portrait}
            alt="Gaming portrait"
            width="150px"
            aspectRatio="3/4"
          />
        </div>
      </Box>
    </Box>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Loading and Error States</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">Default Skeleton Loading</Typography>
          <Image
            src={`${sampleImages.gaming}?delay=3000`} // Simulated slow loading
            alt="Gaming setup"
            width="200px"
            height="150px"
            showSkeleton
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Custom Placeholder</Typography>
          <Image
            src={`${sampleImages.setup}?delay=2000`}
            alt="Gaming setup"
            width="200px"
            height="150px"
            placeholder={<div style={{ padding: '20px', textAlign: 'center' }}>🎮 Loading...</div>}
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Error with Default Fallback</Typography>
          <Image
            src={sampleImages.broken}
            alt="Broken image"
            width="200px"
            height="150px"
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">Error with Custom Fallback</Typography>
          <Image
            src={sampleImages.broken}
            alt="Broken image"
            width="200px"
            height="150px"
            fallback={sampleImages.fallback}
          />
        </div>
      </Box>
    </Box>
  ),
}

export const LazyLoading: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Lazy Loading Demo</Typography>
      <Typography variant="small" color="gray" mb="lg">
        Scroll down to see images load as they come into view
      </Typography>
      
      {Array.from({ length: 10 }, (_, index) => (
        <Box key={index} mb="lg">
          <Typography variant="small" mb="sm" color="gray">
            Image {index + 1} (Lazy Loaded)
          </Typography>
          <Image
            src={`${sampleImages.gaming}?random=${index}`}
            alt={`Gaming setup ${index + 1}`}
            width="100%"
            height="200px"
            loading="lazy"
            style={{ maxWidth: '500px' }}
          />
        </Box>
      ))}
    </Box>
  ),
}

export const AnimationEffects: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Animation Effects</Typography>
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
        <div>
          <Typography variant="small" mb="sm" color="gray">Fade In Animation</Typography>
          <Image
            src={sampleImages.gaming}
            alt="Gaming setup"
            width="200px"
            height="150px"
            fadeIn
          />
        </div>
        
        <div>
          <Typography variant="small" mb="sm" color="gray">No Animation</Typography>
          <Image
            src={sampleImages.setup}
            alt="Gaming setup"
            width="200px"
            height="150px"
            fadeIn={false}
          />
        </div>
      </Box>
    </Box>
  ),
}

export const ResponsiveImages: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <Typography variant="body" mb="md">Responsive Images</Typography>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Full Width Responsive</Typography>
        <Image
          src={sampleImages.gaming}
          alt="Gaming setup"
          width="100%"
          aspectRatio="16/9"
          style={{ maxWidth: '800px' }}
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Responsive Grid</Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap="md">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`${sampleImages.square}?random=${num}`}
              alt={`Gaming image ${num}`}
              width="100%"
              aspectRatio="1/1"
            />
          ))}
        </Box>
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="h3" mb="lg">Gaming Store Cards</Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap="md">
          {[
            { title: 'Cyberpunk 2077', price: '$59.99', image: sampleImages.gaming },
            { title: 'The Witcher 3', price: '$39.99', image: sampleImages.landscape },
            { title: 'Valorant', price: 'Free', image: sampleImages.setup },
          ].map((game, index) => (
            <Box
              key={index}
              style={{ 
                backgroundColor: '#1a1a1a', 
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <Image
                src={game.image}
                alt={game.title}
                width="100%"
                aspectRatio="16/9"
                objectFit="cover"
              />
              <Box p="md">
                <Typography variant="body" mb="xs">{game.title}</Typography>
                <Typography variant="small" color="primary">{game.price}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">User Profiles</Typography>
        <Box display="flex" flexDirection="column" gap="md" maxWidth="400px">
          {[
            { name: 'PlayerOne', status: 'Online', avatar: sampleImages.square },
            { name: 'GamerTwo', status: 'Away', avatar: sampleImages.portrait },
            { name: 'ProGamer', status: 'In Game', avatar: sampleImages.fallback },
          ].map((user, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap="md"
              p="md"
              style={{ backgroundColor: '#1a1a1a', borderRadius: '8px' }}
            >
              <Image
                src={user.avatar}
                alt={`${user.name} avatar`}
                width="48px"
                height="48px"
                objectFit="cover"
                style={{ borderRadius: '50%' }}
              />
              <Box flex="1">
                <Typography variant="body">{user.name}</Typography>
                <Typography variant="small" color="gray">{user.status}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Hero Banner</Typography>
        <Box position="relative" style={{ maxWidth: '800px' }}>
          <Image
            src={sampleImages.gaming}
            alt="Gaming banner"
            width="100%"
            aspectRatio="21/9"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ 
              background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <div>
              <Typography variant="h2" mb="md">Welcome to RSPWN Gaming</Typography>
              <Typography variant="body">The ultimate gaming experience awaits</Typography>
            </div>
          </Box>
        </Box>
      </div>
      
      <div>
        <Typography variant="h3" mb="lg">Screenshot Gallery</Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="sm">
          {Array.from({ length: 8 }, (_, index) => (
            <Image
              key={index}
              src={`${sampleImages.landscape}?gallery=${index}`}
              alt={`Screenshot ${index + 1}`}
              width="100%"
              aspectRatio="16/9"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      </div>
    </Box>
  ),
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">
      <div>
        <Typography variant="body" mb="md">Accessibility Features</Typography>
        <Image
          src={sampleImages.gaming}
          alt="High-end gaming setup with RGB mechanical keyboard, gaming mouse, and dual monitor display showing a competitive esports game"
          width="100%"
          height="200px"
        />
        <Typography variant="small" color="gray" mt="sm">
          This image uses descriptive alt text for screen readers and proper semantic HTML structure.
        </Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Error Handling</Typography>
        <Image
          src={sampleImages.broken}
          alt="Gaming equipment showcase - currently unavailable"
          width="100%"
          height="150px"
          fallback={
            <Box textAlign="center" p="md">
              <Typography variant="small" color="gray">
                🎮 Image not available
              </Typography>
            </Box>
          }
        />
        <Typography variant="small" color="gray" mt="sm">
          When images fail to load, meaningful fallbacks are provided with appropriate alternative text.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    src: sampleImages.gaming,
    alt: 'Gaming setup playground',
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    loading: 'eager',
    showSkeleton: true,
    fadeIn: true,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md">
      <Image {...args} />
    </Box>
  ),
}