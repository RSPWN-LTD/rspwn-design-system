import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, Step, StepStatus } from './Stepper'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'
import { Button } from './Button'
import { useState } from 'react'

const meta: Meta<typeof Stepper> = {
  title: 'UI/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'dots'],
    },
    activeStep: {
      control: { type: 'number', min: 0, max: 4 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Stepper>

// Sample data
const basicSteps: Step[] = [
  { id: 'account', label: 'Account Setup' },
  { id: 'profile', label: 'Profile Information' },
  { id: 'preferences', label: 'Gaming Preferences' },
  { id: 'verification', label: 'Email Verification' },
  { id: 'complete', label: 'Complete' },
]

const detailedSteps: Step[] = [
  {
    id: 'personal',
    label: 'Personal Information',
    description: 'Enter your basic personal details',
  },
  {
    id: 'gaming',
    label: 'Gaming Setup',
    description: 'Configure your gaming preferences and hardware',
  },
  {
    id: 'payment',
    label: 'Payment Method',
    description: 'Add your payment information',
    optional: true,
  },
  {
    id: 'review',
    label: 'Review & Confirm',
    description: 'Review all information before submitting',
  },
]

const workflowSteps: Step[] = [
  {
    id: 'design',
    label: 'Design',
    description: 'Create initial design mockups',
    content: (
      <Box p="md">
        <Typography variant="body" mb="md">Design Phase</Typography>
        <Typography variant="small" color="gray">
          In this phase, we create wireframes and mockups for the new gaming interface.
          This includes user experience research and visual design iterations.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'development',
    label: 'Development',
    description: 'Implement the designed features',
    content: (
      <Box p="md">
        <Typography variant="body" mb="md">Development Phase</Typography>
        <Typography variant="small" color="gray">
          Our development team implements the designed features using React and TypeScript.
          This includes component development, state management, and API integration.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Quality assurance and bug fixing',
    content: (
      <Box p="md">
        <Typography variant="body" mb="md">Testing Phase</Typography>
        <Typography variant="small" color="gray">
          Comprehensive testing including unit tests, integration tests, and user acceptance testing.
          We ensure all gaming features work correctly across different devices.
        </Typography>
      </Box>
    ),
  },
  {
    id: 'deployment',
    label: 'Deployment',
    description: 'Release to production environment',
    content: (
      <Box p="md">
        <Typography variant="body" mb="md">Deployment Phase</Typography>
        <Typography variant="small" color="gray">
          Deploy the new features to production servers with proper monitoring and rollback procedures.
          This includes performance optimization and security checks.
        </Typography>
      </Box>
    ),
  },
]

export const Default: Story = {
  args: {
    steps: basicSteps,
    activeStep: 2,
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
  },
}

export const BasicUsage: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Interactive Stepper</Typography>
          <Stepper
            steps={basicSteps}
            activeStep={currentStep}
            onStepClick={(stepIndex) => setCurrentStep(stepIndex)}
            nonLinear
          />
          
          <Box display="flex" gap="sm" mt="lg" justifyContent="center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => setCurrentStep(Math.min(basicSteps.length - 1, currentStep + 1))}
              disabled={currentStep === basicSteps.length - 1}
            >
              Next
            </Button>
          </Box>
          
          <Typography variant="small" color="gray" mt="md" textAlign="center">
            Current Step: {currentStep + 1} - {basicSteps[currentStep].label}
          </Typography>
        </div>
      </Box>
    )
  },
}

export const Orientations: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="body" mb="md">Horizontal Stepper</Typography>
        <Stepper
          steps={detailedSteps}
          activeStep={1}
          orientation="horizontal"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="md">Vertical Stepper</Typography>
        <Box maxWidth="400px">
          <Stepper
            steps={detailedSteps}
            activeStep={1}
            orientation="vertical"
          />
        </Box>
      </div>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" p="md">
      <div>
        <Typography variant="small" mb="sm" color="gray">Small</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          size="sm"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          size="md"
        />
      </div>
      
      <div>
        <Typography variant="small" mb="sm" color="gray">Large</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          size="lg"
        />
      </div>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" p="md">
      <div>
        <Typography variant="body" mb="md">Default Variant</Typography>
        <Stepper
          steps={detailedSteps}
          activeStep={1}
          variant="default"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="md">Compact Variant</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          variant="compact"
        />
      </div>
      
      <div>
        <Typography variant="body" mb="md">Dots Variant</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          variant="dots"
        />
      </div>
    </Box>
  ),
}

export const WithContent: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)
    
    return (
      <Box display="flex" flexDirection="column" gap="md" p="md" maxWidth="800px">
        <Typography variant="body" mb="md">Stepper with Content</Typography>
        
        <Stepper
          steps={workflowSteps}
          activeStep={currentStep}
          showContent
          onStepClick={setCurrentStep}
          nonLinear
        />
        
        <Box display="flex" gap="sm" justifyContent="center" mt="lg">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(workflowSteps.length - 1, currentStep + 1))}
            disabled={currentStep === workflowSteps.length - 1}
          >
            Next
          </Button>
        </Box>
      </Box>
    )
  },
}

export const CustomStepStatus: Story = {
  render: () => {
    const steps: Step[] = [
      { id: 'step1', label: 'Completed Step' },
      { id: 'step2', label: 'Current Step' },
      { id: 'step3', label: 'Error Step' },
      { id: 'step4', label: 'Pending Step' },
      { id: 'step5', label: 'Another Pending' },
    ]
    
    const getStepStatus = (stepIndex: number): StepStatus => {
      switch (stepIndex) {
        case 0: return 'completed'
        case 1: return 'active'
        case 2: return 'error'
        default: return 'pending'
      }
    }
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Custom Step Status</Typography>
          <Stepper
            steps={steps}
            activeStep={1}
            getStepStatus={getStepStatus}
          />
          <Typography variant="small" color="gray" mt="sm">
            Steps can have custom status independent of the active step
          </Typography>
        </div>
        
        <div>
          <Typography variant="body" mb="md">Vertical with Custom Status</Typography>
          <Box maxWidth="400px">
            <Stepper
              steps={steps.map(step => ({
                ...step,
                description: `Status: ${getStepStatus(steps.indexOf(step))}`
              }))}
              activeStep={1}
              getStepStatus={getStepStatus}
              orientation="vertical"
            />
          </Box>
        </div>
      </Box>
    )
  },
}

export const CustomIcons: Story = {
  render: () => {
    const UserIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    )
    
    const GameIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    )
    
    const CreditCardIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    )
    
    const CheckIcon = () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    )
    
    const stepsWithIcons: Step[] = [
      {
        id: 'profile',
        label: 'Create Profile',
        description: 'Set up your gaming profile',
        icon: <UserIcon />
      },
      {
        id: 'games',
        label: 'Select Games',
        description: 'Choose your favorite games',
        icon: <GameIcon />
      },
      {
        id: 'payment',
        label: 'Payment Setup',
        description: 'Add payment method',
        icon: <CreditCardIcon />
      },
      {
        id: 'complete',
        label: 'All Set!',
        description: 'Ready to start gaming',
        icon: <CheckIcon />
      },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Custom Icons</Typography>
          <Stepper
            steps={stepsWithIcons}
            activeStep={1}
          />
        </div>
        
        <div>
          <Typography variant="body" mb="md">Custom Icons - Vertical</Typography>
          <Box maxWidth="400px">
            <Stepper
              steps={stepsWithIcons}
              activeStep={2}
              orientation="vertical"
            />
          </Box>
        </div>
      </Box>
    )
  },
}

export const NonLinearNavigation: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [visitedSteps, setVisitedSteps] = useState<number[]>([0, 1])
    
    const handleStepClick = (stepIndex: number) => {
      setCurrentStep(stepIndex)
      setVisitedSteps(prev => [...new Set([...prev, stepIndex])])
    }
    
    const getStepStatus = (stepIndex: number): StepStatus => {
      if (visitedSteps.includes(stepIndex) && stepIndex !== currentStep) {
        return 'completed'
      }
      if (stepIndex === currentStep) {
        return 'active'
      }
      return 'pending'
    }
    
    return (
      <Box display="flex" flexDirection="column" gap="lg" p="md">
        <div>
          <Typography variant="body" mb="md">Non-linear Navigation</Typography>
          <Typography variant="small" color="gray" mb="md">
            Click on any step to navigate freely between them
          </Typography>
          
          <Stepper
            steps={detailedSteps}
            activeStep={currentStep}
            onStepClick={handleStepClick}
            getStepStatus={getStepStatus}
            nonLinear
          />
          
          <Box display="flex" gap="sm" mt="lg" justifyContent="center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleStepClick(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => handleStepClick(Math.min(detailedSteps.length - 1, currentStep + 1))}
              disabled={currentStep === detailedSteps.length - 1}
            >
              Next
            </Button>
          </Box>
          
          <Typography variant="small" color="gray" mt="md" textAlign="center">
            Visited steps: {visitedSteps.sort().map(i => i + 1).join(', ')}
          </Typography>
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
        <Stepper
          steps={basicSteps}
          activeStep={2}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">Disabled State</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          disabled
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">With Optional Steps</Typography>
        <Stepper
          steps={detailedSteps}
          activeStep={1}
        />
      </div>
      
      <div>
        <Typography variant="body" mb="sm">All Completed</Typography>
        <Stepper
          steps={basicSteps}
          activeStep={4}
        />
      </div>
    </Box>
  ),
}

export const RealWorldExamples: Story = {
  render: () => {
    const [signupStep, setSignupStep] = useState(0)
    const [orderStep, setOrderStep] = useState(2)
    
    const signupSteps: Step[] = [
      {
        id: 'email',
        label: 'Email Verification',
        description: 'Verify your email address',
      },
      {
        id: 'profile',
        label: 'Create Profile',
        description: 'Set up your gaming profile',
      },
      {
        id: 'preferences',
        label: 'Gaming Preferences',
        description: 'Choose your favorite game genres',
      },
      {
        id: 'complete',
        label: 'Welcome!',
        description: 'Account setup complete',
      },
    ]
    
    const orderSteps: Step[] = [
      { id: 'cart', label: 'Shopping Cart' },
      { id: 'shipping', label: 'Shipping Info' },
      { id: 'payment', label: 'Payment' },
      { id: 'review', label: 'Review Order' },
      { id: 'confirmation', label: 'Confirmation' },
    ]
    
    const projectSteps: Step[] = [
      { id: 'planning', label: 'Planning', description: 'Define project scope and requirements' },
      { id: 'design', label: 'Design', description: 'Create UI/UX designs and prototypes' },
      { id: 'development', label: 'Development', description: 'Build and implement features' },
      { id: 'testing', label: 'Testing', description: 'Quality assurance and bug fixes' },
      { id: 'launch', label: 'Launch', description: 'Deploy to production' },
    ]
    
    return (
      <Box display="flex" flexDirection="column" gap="xl" p="md">
        <div>
          <Typography variant="h3" mb="lg">User Onboarding</Typography>
          <Box maxWidth="600px">
            <Stepper
              steps={signupSteps}
              activeStep={signupStep}
              onStepClick={setSignupStep}
              nonLinear
            />
            
            <Box display="flex" gap="sm" mt="lg" justifyContent="center">
              <Button
                variant="outline"
                onClick={() => setSignupStep(Math.max(0, signupStep - 1))}
                disabled={signupStep === 0}
              >
                Back
              </Button>
              <Button
                onClick={() => setSignupStep(Math.min(signupSteps.length - 1, signupStep + 1))}
                disabled={signupStep === signupSteps.length - 1}
              >
                {signupStep === signupSteps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
            </Box>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Order Process</Typography>
          <Box maxWidth="500px">
            <Stepper
              steps={orderSteps}
              activeStep={orderStep}
              variant="compact"
            />
            <Typography variant="small" color="gray" mt="sm" textAlign="center">
              Step {orderStep + 1} of {orderSteps.length}: {orderSteps[orderStep].label}
            </Typography>
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Project Timeline</Typography>
          <Box maxWidth="400px">
            <Stepper
              steps={projectSteps}
              activeStep={2}
              orientation="vertical"
              getStepStatus={(index) => {
                if (index < 2) return 'completed'
                if (index === 2) return 'active'
                return 'pending'
              }}
            />
          </Box>
        </div>
        
        <div>
          <Typography variant="h3" mb="lg">Progress Indicator</Typography>
          <Box display="flex" flexDirection="column" gap="md">
            <Typography variant="small" color="gray">Loading Progress</Typography>
            <Stepper
              steps={[
                { id: '1', label: 'Initializing' },
                { id: '2', label: 'Loading Assets' },
                { id: '3', label: 'Connecting' },
                { id: '4', label: 'Ready' },
              ]}
              activeStep={1}
              variant="dots"
              size="sm"
            />
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
        <Stepper
          steps={detailedSteps}
          activeStep={1}
          aria-label="Account setup process with accessibility features"
          nonLinear
        />
        <Typography variant="small" color="gray" mt="sm">
          This stepper supports keyboard navigation (Tab to focus, Enter/Space to activate steps)
          and screen reader announcements for step status changes.
        </Typography>
      </div>
      
      <div>
        <Typography variant="body" mb="md">Keyboard Navigation</Typography>
        <Typography variant="small" color="gray" mb="md">
          Try using Tab to navigate between steps, and Enter or Space to select them.
        </Typography>
        <Stepper
          steps={basicSteps}
          activeStep={2}
          onStepClick={() => {}}
          nonLinear
          aria-describedby="keyboard-help"
        />
        <Typography id="keyboard-help" variant="small" color="gray" mt="sm">
          Use Tab key to navigate between clickable steps, Enter or Space to select.
        </Typography>
      </div>
    </Box>
  ),
}

export const Playground: Story = {
  args: {
    steps: detailedSteps,
    activeStep: 1,
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    nonLinear: false,
    disabled: false,
    showContent: false,
  },
  render: (args) => (
    <Box display="flex" justifyContent="center" p="md" maxWidth="800px" margin="0 auto">
      <Stepper {...args} />
    </Box>
  ),
}