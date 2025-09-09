import React from 'react'
import styled from 'styled-components'

export interface StatItem {
  id: string
  name: string
  value: string | number
  change?: {
    value: string | number
    type: 'increase' | 'decrease' | 'neutral'
  }
  icon?: React.ReactNode
  description?: string
}

export interface StatsProps {
  items: StatItem[]
  variant?: 'default' | 'compact' | 'detailed'
  className?: string
}

const StyledStatsGrid = styled.div<{ $variant: string }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'compact':
        return `
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
          }
        `
      case 'detailed':
        return `
          grid-template-columns: 1fr;
          @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        `
      default:
        return `
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
          }
        `
    }
  }}
`

const StyledStatCard = styled.div<{ $variant: string }>`
  background: ${({ theme }) => theme.colors.foundation.black};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ $variant, theme }) => 
    $variant === 'compact' ? theme.spacing[4] : theme.spacing[6]
  };
  transition: all 0.15s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray.base};
  }
`

const StyledStatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

const StyledStatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const StyledStatName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const StyledStatValue = styled.div<{ $variant: string }>`
  font-size: ${({ $variant }) => 
    $variant === 'compact' ? '1.75rem' : '2.25rem'
  };
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.foundation.white};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const StyledStatChange = styled.div<{ $type: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  
  ${({ $type, theme }) => {
    switch ($type) {
      case 'increase':
        return `color: ${theme.colors.semantic.success};`
      case 'decrease':
        return `color: ${theme.colors.semantic.error};`
      default:
        return `color: ${theme.colors.text.secondary};`
    }
  }}
`

const StyledStatDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-top: ${({ theme }) => theme.spacing[2]};
  line-height: 1.4;
`

const StyledChangeIcon = styled.span<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`

// Icons
const TrendUpIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
)

const TrendDownIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.511-5.511-3.182" />
  </svg>
)

const MinusIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
)

export const Stats: React.FC<StatsProps> = ({
  items,
  variant = 'default',
  className
}) => {
  const renderChangeIcon = (type: string) => {
    switch (type) {
      case 'increase':
        return <TrendUpIcon />
      case 'decrease':
        return <TrendDownIcon />
      default:
        return <MinusIcon />
    }
  }

  const formatValue = (value: string | number): string => {
    if (typeof value === 'number') {
      return value.toLocaleString()
    }
    return value
  }

  return (
    <StyledStatsGrid $variant={variant} className={className}>
      {items.map((item) => (
        <StyledStatCard key={item.id} $variant={variant}>
          {(item.icon || variant === 'detailed') && (
            <StyledStatHeader>
              {item.icon && (
                <StyledStatIcon>
                  {item.icon}
                </StyledStatIcon>
              )}
            </StyledStatHeader>
          )}
          
          <StyledStatName>
            {item.name}
          </StyledStatName>
          
          <StyledStatValue $variant={variant}>
            {formatValue(item.value)}
          </StyledStatValue>
          
          {item.change && (
            <StyledStatChange $type={item.change.type}>
              <StyledChangeIcon $type={item.change.type}>
                {renderChangeIcon(item.change.type)}
              </StyledChangeIcon>
              {formatValue(item.change.value)}
            </StyledStatChange>
          )}
          
          {item.description && variant === 'detailed' && (
            <StyledStatDescription>
              {item.description}
            </StyledStatDescription>
          )}
        </StyledStatCard>
      ))}
    </StyledStatsGrid>
  )
}