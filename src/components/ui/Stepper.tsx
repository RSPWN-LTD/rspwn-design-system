import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

export type StepStatus = 'pending' | 'active' | 'completed' | 'error'

export interface Step {
  id: string
  label: string
  description?: string
  optional?: boolean
  icon?: React.ReactNode
  content?: React.ReactNode
}

export interface StepperProps {
  // Step configuration
  steps: Step[]
  activeStep: number
  
  // Navigation
  onStepClick?: (stepIndex: number, step: Step) => void
  nonLinear?: boolean
  
  // Layout
  orientation?: 'horizontal' | 'vertical'
  
  // Step status override
  getStepStatus?: (stepIndex: number, step: Step) => StepStatus
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact' | 'dots'
  
  // States
  disabled?: boolean
  
  // Content display
  showContent?: boolean
  
  // Standard props
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

const getStepperSize = (size: StepperProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        .step-indicator {
          width: 24px;
          height: 24px;
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .step-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .step-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .step-connector {
          height: 2px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 2px;
          min-height: 24px;
        }
      `
    case 'lg':
      return css`
        .step-indicator {
          width: 40px;
          height: 40px;
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .step-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .step-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .step-connector {
          height: 4px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 4px;
          min-height: 32px;
        }
      `
    default:
      return css`
        .step-indicator {
          width: 32px;
          height: 32px;
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .step-label {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .step-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .step-connector {
          height: 3px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 3px;
          min-height: 28px;
        }
      `
  }
}

const StepperContainer = styled.div<{
  orientation: StepperProps['orientation']
  size: StepperProps['size']
  variant: StepperProps['variant']
  disabled?: boolean
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ orientation, variant }) => 
    orientation === 'vertical' ? 'flex-start' : 
    variant === 'compact' ? 'center' : 'flex-start'
  };
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ size }) => getStepperSize(size)}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`

const StepContainer = styled.div<{
  orientation: StepperProps['orientation']
  variant: StepperProps['variant']
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'row' : 'column'};
  align-items: ${({ orientation, variant }) => 
    orientation === 'vertical' ? 'flex-start' : 
    variant === 'compact' ? 'center' : 'center'
  };
  flex: ${({ orientation }) => orientation === 'horizontal' ? 1 : 'none'};
  
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      width: 100%;
      
      &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing[2]};
      }
    `}
`

const StepIndicatorContainer = styled.div<{
  orientation: StepperProps['orientation']
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
`

const StepIndicator = styled.div<{
  status: StepStatus
  clickable: boolean
  variant: StepperProps['variant']
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  cursor: ${({ clickable }) => clickable ? 'pointer' : 'default'};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  
  ${({ status, theme, variant }) => {
    switch (status) {
      case 'completed':
        return css`
          background-color: ${theme.colors.innovation.primaryBlue};
          border-color: ${theme.colors.innovation.primaryBlue};
          color: ${theme.colors.foundation.white};
        `
      case 'active':
        return css`
          background-color: ${variant === 'dots' ? theme.colors.innovation.primaryBlue : theme.colors.foundation.black};
          border-color: ${theme.colors.innovation.primaryBlue};
          color: ${theme.colors.foundation.white};
          box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.2);
        `
      case 'error':
        return css`
          background-color: ${theme.colors.foundation.black};
          border-color: ${theme.colors.semantic.error};
          color: ${theme.colors.semantic.error};
        `
      default:
        return css`
          background-color: ${theme.colors.foundation.black};
          border-color: ${theme.colors.gray.light};
          color: ${theme.colors.gray.light};
        `
    }
  }}
  
  ${({ clickable, theme }) =>
    clickable &&
    css`
      &:hover {
        border-color: ${theme.colors.innovation.primaryBlue};
        transform: scale(1.05);
      }
      
      &:focus {
        outline: 2px solid ${theme.colors.innovation.primaryBlue};
        outline-offset: 2px;
      }
    `}
  
  ${({ variant }) =>
    variant === 'dots' &&
    css`
      border: none;
      width: 12px !important;
      height: 12px !important;
    `}
`

const StepConnector = styled.div<{
  status: StepStatus
  orientation: StepperProps['orientation']
}>`
  background-color: ${({ status, theme }) => 
    status === 'completed' ? theme.colors.innovation.primaryBlue : theme.colors.gray.light
  };
  transition: background-color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          flex: 1;
          margin: 0 ${({ theme }) => theme.spacing[2]};
        `
      : css`
          margin: ${({ theme }) => theme.spacing[2]} 0;
          margin-left: 50%;
          transform: translateX(-50%);
        `}
`

const StepContent = styled.div<{
  orientation: StepperProps['orientation']
  variant: StepperProps['variant']
}>`
  ${({ orientation, variant }) =>
    orientation === 'horizontal'
      ? css`
          text-align: ${variant === 'compact' ? 'center' : 'center'};
          margin-top: ${({ theme }) => theme.spacing[2]};
        `
      : css`
          margin-left: ${({ theme }) => theme.spacing[4]};
          flex: 1;
        `}
`

const StepLabel = styled.div<{
  status: StepStatus
  optional?: boolean
}>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'completed':
      case 'active':
        return theme.colors.foundation.white
      case 'error':
        return theme.colors.semantic.error
      default:
        return theme.colors.gray.light
    }
  }};
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ optional }) =>
    optional &&
    css`
      &::after {
        content: ' (Optional)';
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
        color: ${({ theme }) => theme.colors.gray.light};
        font-size: 0.875em;
      }
    `}
`

const StepDescription = styled.div<{
  status: StepStatus
}>`
  color: ${({ status, theme }) => {
    switch (status) {
      case 'error':
        return theme.colors.semantic.error
      default:
        return theme.colors.gray.light
    }
  }};
  margin-top: ${({ theme }) => theme.spacing[1]};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`

const StepContentPanel = styled.div<{
  orientation: StepperProps['orientation']
}>`
  ${({ orientation }) =>
    orientation === 'horizontal' &&
    css`
      width: 100%;
      margin-top: ${({ theme }) => theme.spacing[4]};
      padding: ${({ theme }) => theme.spacing[4]};
      border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
    `}
  
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      margin: ${({ theme }) => theme.spacing[2]} 0;
      padding-left: ${({ theme }) => theme.spacing[6]};
    `}
`

// Default check icon for completed steps
const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
)

// Default error icon for error steps
const ErrorIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
)

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  nonLinear = false,
  orientation = 'horizontal',
  getStepStatus,
  size = 'md',
  variant = 'default',
  disabled = false,
  showContent = false,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const getDefaultStepStatus = (stepIndex: number): StepStatus => {
    if (stepIndex < activeStep) return 'completed'
    if (stepIndex === activeStep) return 'active'
    return 'pending'
  }
  
  const stepsWithStatus = useMemo(() => {
    return steps.map((step, index) => ({
      ...step,
      status: getStepStatus ? getStepStatus(index, step) : getDefaultStepStatus(index)
    }))
  }, [steps, activeStep, getStepStatus])
  
  const handleStepClick = (stepIndex: number, step: Step) => {
    if (disabled) return
    
    const isClickable = nonLinear || stepIndex <= activeStep || stepsWithStatus[stepIndex].status === 'completed'
    
    if (isClickable && onStepClick) {
      onStepClick(stepIndex, step)
    }
  }
  
  const activeStepData = steps[activeStep]
  
  return (
    <div className={className} {...props}>
      <StepperContainer
        orientation={orientation}
        size={size}
        variant={variant}
        disabled={disabled}
        data-orientation={orientation}
        role="tablist"
        aria-label={ariaLabel || 'Step indicator'}
        aria-describedby={ariaDescribedBy}
      >
        {stepsWithStatus.map((step, index) => {
          const isClickable = !disabled && (nonLinear || index <= activeStep || step.status === 'completed')
          const isLast = index === steps.length - 1
          
          return (
            <StepContainer
              key={step.id}
              orientation={orientation}
              variant={variant}
            >
              <StepIndicatorContainer orientation={orientation}>
                <StepIndicator
                  className="step-indicator"
                  status={step.status}
                  clickable={isClickable}
                  variant={variant}
                  role="tab"
                  aria-selected={index === activeStep}
                  aria-current={index === activeStep ? 'step' : undefined}
                  tabIndex={isClickable ? 0 : -1}
                  onClick={() => handleStepClick(index, step)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleStepClick(index, step)
                    }
                  }}
                >
                  {step.status === 'completed' && variant !== 'dots' ? (
                    <CheckIcon />
                  ) : step.status === 'error' && variant !== 'dots' ? (
                    <ErrorIcon />
                  ) : step.icon && variant !== 'dots' ? (
                    step.icon
                  ) : variant === 'dots' ? null : (
                    index + 1
                  )}
                </StepIndicator>
                
                {!isLast && (
                  <StepConnector
                    className="step-connector"
                    status={step.status === 'completed' ? 'completed' : 'pending'}
                    orientation={orientation}
                  />
                )}
              </StepIndicatorContainer>
              
              {variant !== 'dots' && (
                <StepContent orientation={orientation} variant={variant}>
                  <StepLabel
                    className="step-label"
                    status={step.status}
                    optional={step.optional}
                  >
                    {step.label}
                  </StepLabel>
                  
                  {step.description && (
                    <StepDescription
                      className="step-description"
                      status={step.status}
                    >
                      {step.description}
                    </StepDescription>
                  )}
                </StepContent>
              )}
            </StepContainer>
          )
        })}
      </StepperContainer>
      
      {showContent && activeStepData?.content && (
        <StepContentPanel orientation={orientation}>
          {activeStepData.content}
        </StepContentPanel>
      )}
    </div>
  )
}