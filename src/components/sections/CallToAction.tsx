import React from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'
import { Stack } from '../foundation/Stack'

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
  variant?: 'centered' | 'split' | 'banner' | 'minimal'
  backgroundImage?: string
  backgroundGradient?: boolean
  className?: string
  children?: React.ReactNode
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'split':
      return `
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        
        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          text-align: left;
          gap: 3rem;
        }
      `
    case 'banner':
      return `
        text-align: center;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
          border-radius: 1.5rem;
          z-index: 1;
        }
        
        &::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          z-index: 2;
        }
      `
    case 'minimal':
      return `
        text-align: center;
        padding: 0;
      `
    default: // centered
      return `
        text-align: center;
        position: relative;
      `
  }
}

const StyledCTAWrapper = styled.section<{ 
  $variant: string
  $hasBackground: boolean 
}>`
  position: relative;
  padding: ${({ $variant }) => 
    $variant === 'minimal' 
      ? `clamp(1rem, 3vw, 3rem) 0`
      : $variant === 'banner'
      ? `clamp(1.5rem, 4vw, 4rem) 0`
      : `clamp(2rem, 5vw, 5rem) 0`
  };
  background-color: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
`

const StyledBackgroundImage = styled.div<{ $image: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%);
  }
`

const StyledCTAContent = styled.div<{ $variant: string }>`
  position: relative;
  z-index: 3;
  max-width: 100%;
  
  ${({ $variant }) => getVariantStyles($variant)}
  
  ${({ $variant }) => $variant === 'banner' && `
    padding: 1.5rem;
    border-radius: 1rem;
    
    @media (min-width: 1200px) {
      padding: 3rem 4rem;
      border-radius: 1.5rem;
    }
    
    @media (max-width: 900px) {
      padding: 1rem;
      border-radius: 0.75rem;
    }
  `}
`

const StyledCTATitle = styled(Typography)<{ $variant: string }>`
  && {
    font-size: ${({ $variant }) => 
      $variant === 'minimal' ? '1.5rem' : 
      $variant === 'banner' ? '1.75rem' : '2rem'
    };
    line-height: 1.1;
    margin-bottom: 1rem;
    font-weight: 700;
    
    @media (min-width: 1200px) {
      font-size: ${({ $variant }) => 
        $variant === 'minimal' ? '1.875rem' : 
        $variant === 'banner' ? '2.25rem' : '3rem'
      };
    }
    
    @media (max-width: 900px) {
      font-size: ${({ $variant }) => 
        $variant === 'minimal' ? '1.25rem' : 
        $variant === 'banner' ? '1.5rem' : '1.75rem'
      };
    }
  }
`

const StyledCTAHeader = styled.div<{ $variant: string }>`
  ${({ $variant }) => $variant === 'split' ? `
    flex: 1;
    
    @media (min-width: 768px) {
      margin-right: 2rem;
    }
  ` : ''}
  
  ${({ $variant }) => $variant === 'banner' && `
    margin-bottom: 2rem;
  `}
`

const StyledCTAActions = styled.div<{ $variant: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: ${({ $variant }) => 
    $variant === 'split' ? 'stretch' : 'center'
  };
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[4]};
    justify-content: ${({ $variant }) => 
      $variant === 'split' ? 'flex-start' : 'center'
    };
  }
  
  ${({ $variant }) => $variant === 'split' ? `
    @media (min-width: 768px) {
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
    }
  ` : ''}
`

const StyledCTAButton = styled.a<{ $variant: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 2rem);
  border-radius: clamp(0.375rem, 0.5vw, 0.75rem);
  font-weight: 600;
  font-size: clamp(0.75rem, 1vw, 1rem);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 2px solid transparent;
  min-width: clamp(100px, 15vw, 160px);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transition: opacity 0.3s ease;
    opacity: 0;
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, ${theme.colors.innovation.primaryBlue} 0%, #3B8EF0 100%);
          color: white;
          box-shadow: 0 4px 20px rgba(74, 158, 255, 0.25);
          
          &::before {
            background: linear-gradient(135deg, #3B8EF0 0%, #2980E8 100%);
          }
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(74, 158, 255, 0.4);
            
            &::before {
              opacity: 1;
            }
          }
          
          &:active {
            transform: translateY(-1px);
            transition-duration: 0.1s;
          }
        `
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.innovation.primaryBlue};
          border-color: ${theme.colors.innovation.primaryBlue};
          
          &::before {
            background-color: ${theme.colors.innovation.primaryBlue}15;
          }
          
          &:hover {
            border-color: #3B8EF0;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(74, 158, 255, 0.2);
            
            &::before {
              opacity: 1;
            }
          }
        `
      default: // secondary
        return `
          background-color: rgba(255, 255, 255, 0.08);
          color: ${theme.colors.foundation.white};
          border-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          
          &::before {
            background-color: rgba(255, 255, 255, 0.12);
          }
          
          &:hover {
            border-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            
            &::before {
              opacity: 1;
            }
          }
        `
    }
  }}
`

const StyledGradientBackground = styled.div`
  position: absolute;
  top: -25%;
  left: -15%;
  right: -15%;
  bottom: -25%;
  background: radial-gradient(
    ellipse at center,
    rgba(74, 158, 255, 0.08) 0%,
    rgba(139, 92, 246, 0.04) 40%,
    transparent 70%
  );
  z-index: 0;
  animation: gradientFloat 12s ease-in-out infinite;
  
  @keyframes gradientFloat {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1) rotate(0deg);
    }
    33% {
      opacity: 0.8;
      transform: scale(1.05) rotate(1deg);
    }
    66% {
      opacity: 0.4;
      transform: scale(0.95) rotate(-1deg);
    }
  }
`

const StyledFloatingElements = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
    animation: float 15s ease-in-out infinite;
  }
  
  &::before {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
    animation-delay: -5s;
  }
  
  &::after {
    width: 300px;
    height: 300px;
    bottom: 10%;
    right: 10%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
    animation-delay: -10s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-20px) scale(1.1);
      opacity: 0.6;
    }
  }
`

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  variant = 'centered',
  backgroundImage,
  backgroundGradient = false,
  className,
  children
}) => {
  const handleButtonClick = (button: CTAButton) => {
    if (button.onClick) {
      button.onClick()
    } else if (button.href) {
      window.location.href = button.href
    }
  }

  return (
    <StyledCTAWrapper 
      $variant={variant} 
      $hasBackground={backgroundGradient || !!backgroundImage}
      className={className}
    >
      {backgroundImage && <StyledBackgroundImage $image={backgroundImage} />}
      {backgroundGradient && (
        <>
          <StyledGradientBackground />
          <StyledFloatingElements />
        </>
      )}
      
      <Container variant="wide">
        <StyledCTAContent $variant={variant}>
          <StyledCTAHeader $variant={variant}>
            {subtitle && (
              <Typography 
                variant="label" 
                style={{ 
                  color: variant === 'banner' ? '#4A9EFF' : '#8B5CF6',
                  marginBottom: '1rem',
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {subtitle}
              </Typography>
            )}
            
            <StyledCTATitle variant="heading" $variant={variant}>
              {title}
            </StyledCTATitle>
            
            {description && (
              <Typography 
                color="muted" 
                style={{ 
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: variant === 'centered' ? '36rem' : variant === 'split' ? '24rem' : 'none',
                  margin: variant === 'centered' ? '0 auto' : '0',
                  marginBottom: variant === 'split' ? '0' : '1.5rem'
                }}
              >
                {description}
              </Typography>
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