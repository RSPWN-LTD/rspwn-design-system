import React from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'

export interface CTAButton {
  text: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
}

export interface CallToActionProps {
  title: string
  subtitle?: string
  description?: string
  primaryButton?: CTAButton
  secondaryButton?: CTAButton
  variant?: 'centered' | 'split' | 'minimal'
  className?: string
  children?: React.ReactNode
}

const StyledCTAWrapper = styled.section<{ $variant: string }>`
  position: relative;
  padding: ${({ $variant }) => 
    $variant === 'minimal' 
      ? `clamp(2rem, 4vw, 3rem) 0`
      : `clamp(3rem, 6vw, 5rem) 0`
  };
  background: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`

const StyledBackgroundGradient = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 80%;
  background: radial-gradient(
    ellipse at center,
    rgba(74, 158, 255, 0.06) 0%,
    rgba(139, 92, 246, 0.04) 35%,
    transparent 70%
  );
  z-index: 0;
`

const StyledCTAContent = styled.div<{ $variant: string }>`
  position: relative;
  z-index: 2;
  
  ${({ $variant }) => $variant === 'split' ? `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 3rem;
    }
  ` : `
    text-align: center;
    max-width: 48rem;
    margin: 0 auto;
  `}
`

const StyledCTAHeader = styled.div<{ $variant: string }>`
  ${({ $variant }) => $variant === 'split' ? `
    flex: 1;
  ` : ''}
`

const StyledCTATitle = styled(Typography)<{ $variant: string }>`
  && {
    font-size: ${({ $variant }) => 
      $variant === 'minimal' ? '1.875rem' : '2.25rem'
    };
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ $variant }) => 
        $variant === 'minimal' ? '2.25rem' : '3rem'
      };
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ $variant }) => 
        $variant === 'minimal' ? '1.5rem' : '1.875rem'
      };
    }
  }
`

const StyledCTADescription = styled(Typography)`
  && {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

const StyledCTAActions = styled.div<{ $variant: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[6]};
    justify-content: ${({ $variant }) => 
      $variant === 'split' ? 'flex-start' : 'center'
    };
  }
  
  ${({ $variant }) => $variant === 'split' ? `
    @media (min-width: 768px) {
      flex-shrink: 0;
    }
  ` : ''}
`

const StyledCTAButton = styled.a<{ $variant: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid transparent;
  min-width: 140px;
  white-space: nowrap;
  position: relative;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${theme.colors.innovation.primaryBlue};
          color: white;
          box-shadow: 
            0 4px 12px rgba(74, 158, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.1);
          
          &:hover {
            background: #3B8EF0;
            transform: translateY(-2px);
            box-shadow: 
              0 8px 20px rgba(74, 158, 255, 0.4),
              0 4px 8px rgba(0, 0, 0, 0.15);
          }
          
          &:active {
            transform: translateY(-1px);
          }
        `
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.foundation.white};
          border-color: rgba(255, 255, 255, 0.2);
          
          &:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
          }
        `
      default: // secondary
        return `
          background: rgba(255, 255, 255, 0.08);
          color: ${theme.colors.foundation.white};
          border-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          
          &:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
          }
        `
    }
  }}
`

const StyledSubtitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-radius: ${({ theme }) => theme.radius.full};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  
  span {
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    color: ${({ theme }) => theme.colors.foundation.white};
  }
`

const StyledSubtitleBadge = styled.div`
  background: ${({ theme }) => theme.colors.innovation.primaryBlue};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  padding: 0.125rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  variant = 'centered',
  className,
  children
}) => {
  const handleButtonClick = (button: CTAButton) => {
    if (button.onClick) {
      button.onClick()
    } else if (button.href) {
      window.open(button.href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <StyledCTAWrapper $variant={variant} className={className}>
      <StyledBackgroundGradient />
      
      <Container variant="wide">
        <StyledCTAContent $variant={variant}>
          <StyledCTAHeader $variant={variant}>
            {subtitle && (
              <StyledSubtitle>
                <StyledSubtitleBadge>New</StyledSubtitleBadge>
                <span>{subtitle}</span>
              </StyledSubtitle>
            )}
            
            <StyledCTATitle variant="heading" $variant={variant}>
              {title}
            </StyledCTATitle>
            
            {description && (
              <StyledCTADescription color="muted">
                {description}
              </StyledCTADescription>
            )}
          </StyledCTAHeader>
          
          {(primaryButton || secondaryButton || children) && (
            <StyledCTAActions $variant={variant}>
              {primaryButton && (
                <StyledCTAButton
                  $variant={primaryButton.variant || 'primary'}
                  onClick={() => handleButtonClick(primaryButton)}
                  href={primaryButton.href}
                >
                  {primaryButton.text}
                </StyledCTAButton>
              )}
              
              {secondaryButton && (
                <StyledCTAButton
                  $variant={secondaryButton.variant || 'secondary'}
                  onClick={() => handleButtonClick(secondaryButton)}
                  href={secondaryButton.href}
                >
                  {secondaryButton.text}
                </StyledCTAButton>
              )}
              
              {children}
            </StyledCTAActions>
          )}
        </StyledCTAContent>
      </Container>
    </StyledCTAWrapper>
  )
}