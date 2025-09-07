import React from 'react'
import styled, { css } from 'styled-components'

export interface TimelineItem {
  id: string
  title: string
  description?: string
  timestamp?: string
  icon?: React.ReactNode
  content?: React.ReactNode
  status?: 'default' | 'active' | 'completed' | 'pending'
}

export interface TimelineProps {
  // Timeline configuration
  items?: TimelineItem[]
  
  // Layout options
  alternate?: boolean
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact' | 'detailed'
  
  // States
  disabled?: boolean
  
  // Standard props
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

const getTimelineSize = (size: TimelineProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        .timeline-marker {
          width: 24px;
          height: 24px;
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .timeline-title {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .timeline-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .timeline-timestamp {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .timeline-line {
          width: 2px;
          margin-left: 11px; /* Center on marker */
        }
      `
    case 'lg':
      return css`
        .timeline-marker {
          width: 40px;
          height: 40px;
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .timeline-title {
          font-size: ${({ theme }) => theme.typography.fontSizes.lg};
        }
        
        .timeline-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .timeline-timestamp {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .timeline-line {
          width: 4px;
          margin-left: 18px; /* Center on marker */
        }
      `
    default:
      return css`
        .timeline-marker {
          width: 32px;
          height: 32px;
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .timeline-title {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
        
        .timeline-description {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
        
        .timeline-timestamp {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
        
        .timeline-line {
          width: 3px;
          margin-left: 14.5px; /* Center on marker */
        }
      `
  }
}

const TimelineContainer = styled.div<{
  size: TimelineProps['size']
  variant: TimelineProps['variant']
  disabled?: boolean
}>`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  position: relative;
  
  ${({ size }) => getTimelineSize(size)}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`

const TimelineItemContainer = styled.div<{
  isLast: boolean
  alternate?: boolean
  isEven?: boolean
  variant: TimelineProps['variant']
}>`
  display: flex;
  flex-direction: ${({ alternate, isEven }) => 
    alternate && isEven ? 'row-reverse' : 'row'
  };
  align-items: flex-start;
  position: relative;
  
  ${({ isLast }) =>
    !isLast &&
    css`
      padding-bottom: ${({ theme }) => theme.spacing[6]};
    `}
  
  ${({ alternate }) =>
    alternate &&
    css`
      justify-content: center;
      
      /* Add spacing for alternating layout */
      .timeline-content {
        width: calc(50% - ${({ theme }) => theme.spacing[4]});
      }
    `}
`

const TimelineMarker = styled.div<{
  status: TimelineItem['status']
  alternate?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  
  ${({ alternate }) =>
    alternate &&
    css`
      margin: 0 ${({ theme }) => theme.spacing[4]};
    `}
  
  ${({ status, theme }) => {
    switch (status) {
      case 'completed':
        return css`
          background-color: ${theme.colors.innovation.primaryBlue};
          border-color: ${theme.colors.innovation.primaryBlue};
          color: ${theme.colors.foundation.white};
        `
      case 'active':
        return css`
          background-color: ${theme.colors.foundation.black};
          border-color: ${theme.colors.innovation.primaryBlue};
          color: ${theme.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.2);
        `
      case 'pending':
        return css`
          background-color: ${theme.colors.foundation.black};
          border-color: ${theme.colors.gray.dark};
          color: ${theme.colors.gray.dark};
        `
      default:
        return css`
          background-color: ${theme.colors.foundation.black};
          border-color: ${theme.colors.gray.light};
          color: ${theme.colors.foundation.white};
        `
    }
  }}
`

const TimelineLine = styled.div<{
  status: TimelineItem['status']
  alternate?: boolean
}>`
  position: absolute;
  top: 32px; /* Start below marker */
  bottom: 0;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'completed':
        return theme.colors.innovation.primaryBlue
      case 'active':
        return theme.colors.innovation.primaryBlue
      default:
        return theme.colors.gray.light
    }
  }};
  transition: background-color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  ${({ alternate }) =>
    alternate &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}
`

const TimelineContent = styled.div<{
  alternate?: boolean
  isEven?: boolean
  variant: TimelineProps['variant']
}>`
  flex: 1;
  padding-left: ${({ alternate }) => alternate ? '0' : ({ theme }) => theme.spacing[4]};
  
  ${({ alternate, isEven }) =>
    alternate &&
    css`
      text-align: ${isEven ? 'right' : 'left'};
      padding-left: 0;
      padding-right: ${isEven ? ({ theme }) => theme.spacing[4] : '0'};
      padding-left: ${!isEven ? ({ theme }) => theme.spacing[4] : '0'};
    `}
  
  ${({ variant }) =>
    variant === 'compact' &&
    css`
      padding-top: ${({ theme }) => theme.spacing[1]};
    `}
`

const TimelineTitle = styled.div<{
  status: TimelineItem['status']
}>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'completed':
      case 'active':
        return theme.colors.foundation.white
      case 'pending':
        return theme.colors.gray.light
      default:
        return theme.colors.foundation.white
    }
  }};
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const TimelineDescription = styled.div<{
  status: TimelineItem['status']
}>`
  color: ${({ status, theme }) => {
    switch (status) {
      case 'pending':
        return theme.colors.gray.dark
      default:
        return theme.colors.gray.light
    }
  }};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const TimelineTimestamp = styled.div<{
  status: TimelineItem['status']
  alternate?: boolean
  isEven?: boolean
}>`
  color: ${({ theme }) => theme.colors.gray.light};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  
  ${({ alternate, isEven }) =>
    alternate &&
    css`
      position: absolute;
      top: 0;
      ${isEven ? 'right' : 'left'}: calc(100% + ${({ theme }) => theme.spacing[6]});
      white-space: nowrap;
    `}
`

const TimelineCustomContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-radius: ${({ theme }) => theme.radius.base};
  border-left: 3px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
`

// Default dot icon for timeline markers
const DotIcon: React.FC = () => (
  <div style={{ 
    width: '8px', 
    height: '8px', 
    borderRadius: '50%', 
    backgroundColor: 'currentColor' 
  }} />
)

// Default check icon for completed items
const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
)

// Default clock icon for pending items
const ClockIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 9.5 8 11 6.5l1 1 3.5-3.5L17 5.5z" />
  </svg>
)

export const Timeline: React.FC<TimelineProps> = ({
  items,
  alternate = false,
  size = 'md',
  variant = 'default',
  disabled = false,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const getDefaultIcon = (item: TimelineItem): React.ReactNode => {
    if (item.icon) return item.icon
    
    switch (item.status) {
      case 'completed':
        return <CheckIcon />
      case 'pending':
        return <ClockIcon />
      case 'active':
        return <DotIcon />
      default:
        return <DotIcon />
    }
  }
  
  // Guard clause for undefined items
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }
  
  return (
    <TimelineContainer
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      role="list"
      aria-label={ariaLabel || 'Timeline'}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const isEven = index % 2 === 0
        
        return (
          <TimelineItemContainer
            key={item.id}
            isLast={isLast}
            alternate={alternate}
            isEven={isEven}
            variant={variant}
            role="listitem"
          >
            {/* Connecting line */}
            {!isLast && (
              <TimelineLine
                className="timeline-line"
                status={item.status}
                alternate={alternate}
              />
            )}
            
            {/* Timeline marker */}
            <TimelineMarker
              className="timeline-marker"
              status={item.status || 'default'}
              alternate={alternate}
            >
              {getDefaultIcon(item)}
            </TimelineMarker>
            
            {/* Timeline content */}
            <TimelineContent
              className="timeline-content"
              alternate={alternate}
              isEven={isEven}
              variant={variant}
            >
              {/* Timestamp for alternate layout */}
              {alternate && item.timestamp && (
                <TimelineTimestamp
                  className="timeline-timestamp"
                  status={item.status || 'default'}
                  alternate={alternate}
                  isEven={isEven}
                >
                  {item.timestamp}
                </TimelineTimestamp>
              )}
              
              {/* Title */}
              <TimelineTitle
                className="timeline-title"
                status={item.status || 'default'}
              >
                {item.title}
              </TimelineTitle>
              
              {/* Description */}
              {item.description && (
                <TimelineDescription
                  className="timeline-description"
                  status={item.status || 'default'}
                >
                  {item.description}
                </TimelineDescription>
              )}
              
              {/* Timestamp for regular layout */}
              {!alternate && item.timestamp && (
                <TimelineTimestamp
                  className="timeline-timestamp"
                  status={item.status || 'default'}
                  alternate={alternate}
                  isEven={isEven}
                >
                  {item.timestamp}
                </TimelineTimestamp>
              )}
              
              {/* Custom content */}
              {item.content && (
                <TimelineCustomContent>
                  {item.content}
                </TimelineCustomContent>
              )}
            </TimelineContent>
          </TimelineItemContainer>
        )
      })}
    </TimelineContainer>
  )
}