import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'

export interface BentoGridItem {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  image?: string
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  href?: string
  onClick?: () => void
  content?: React.ReactNode
  className?: string
}

export interface BentoGridProps {
  title?: string
  subtitle?: string
  items: BentoGridItem[]
  variant?: 'default' | 'compact' | 'spacious'
  className?: string
}


const StyledBentoWrapper = styled.section<{ $variant: string }>`
  padding: ${({ $variant }) => 
    $variant === 'compact' 
      ? `clamp(1.5rem, 3vw, 2rem) 0`
      : $variant === 'spacious'
      ? `clamp(3rem, 6vw, 4rem) 0`
      : `clamp(2rem, 4vw, 3rem) 0`
  };
  background: transparent;
  color: ${({ theme }) => theme.colors.foundation.white};
  width: 100%;
  box-sizing: border-box;
`

const StyledBentoGrid = styled.div<{ $variant: string }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ $variant }) => 
    $variant === 'compact' 
      ? `clamp(0.75rem, 1.5vw, 1rem)`
      : $variant === 'spacious'
      ? `clamp(1.5rem, 2.5vw, 2rem)`
      : `clamp(1rem, 2vw, 1.5rem)`
  };
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

const getItemSize = (size: string) => {
  switch (size) {
    case 'large':
      return css`
        grid-column: span 2;
        grid-row: span 2;
        
        @media (max-width: 1024px) {
          grid-column: span 2;
          grid-row: span 1;
        }
        
        @media (max-width: 768px) {
          grid-column: span 1;
          grid-row: span 1;
        }
      `
    case 'wide':
      return css`
        grid-column: span 2;
        grid-row: span 1;
        
        @media (max-width: 768px) {
          grid-column: span 1;
        }
      `
    case 'tall':
      return css`
        grid-column: span 1;
        grid-row: span 2;
        
        @media (max-width: 1024px) {
          grid-row: span 1;
        }
      `
    default: // small, medium
      return css`
        grid-column: span 1;
        grid-row: span 1;
      `
  }
}

// Professional card styles - simple and clean
const cardBaseStyles = css`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`

const StyledBentoItem = styled.div<{ 
  $size: string
  $isClickable: boolean
}>`
  position: relative;
  padding: ${({ theme }) => theme.spacing[6]};
  min-height: 180px;
  cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};
  
  ${({ $size }) => getItemSize($size)}
  ${cardBaseStyles}
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[5]};
    min-height: 160px;
  }
`

const StyledItemBackground = styled.div<{ $image?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $image }) => $image ? `url(${$image})` : 'none'};
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  border-radius: ${({ theme }) => theme.radius.lg};
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      transparent 0%, 
      rgba(0, 0, 0, 0.3) 50%, 
      rgba(0, 0, 0, 0.6) 100%
    );
    border-radius: ${({ theme }) => theme.radius.lg};
  }
`

const StyledItemContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.foundation.white};
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const StyledTextWrapper = styled.div`
  flex: 1;
`

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`

const StyledItemTitle = styled(Typography)`
  margin-bottom: 0.5rem;
`

export const BentoGrid: React.FC<BentoGridProps> = ({
  title,
  subtitle,
  items,
  variant = 'default',
  className
}) => {
  const handleItemClick = (item: BentoGridItem) => {
    if (item.onClick) {
      item.onClick()
    } else if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <StyledBentoWrapper $variant={variant} className={className}>
      <Container variant="wide">
        {(title || subtitle) && (
          <StyledSectionHeader>
            {title && (
              <Typography variant="heading">
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography color="muted">
                {subtitle}
              </Typography>
            )}
          </StyledSectionHeader>
        )}
        
        <StyledBentoGrid $variant={variant}>
          {items.map((item) => (
            <StyledBentoItem
              key={item.id}
              $size={item.size || 'medium'}
              $isClickable={!!(item.onClick || item.href)}
              onClick={() => handleItemClick(item)}
              className={item.className}
            >
              {/* Background image */}
              {item.image && <StyledItemBackground $image={item.image} />}
              
              <StyledItemContent>
                <StyledItemHeader>
                  {item.icon && (
                    <StyledIconWrapper>
                      {item.icon}
                    </StyledIconWrapper>
                  )}
                  <StyledTextWrapper>
                    <StyledItemTitle variant="subheading">
                      {item.title}
                    </StyledItemTitle>
                    {item.description && (
                      <Typography color="muted" variant="body">
                        {item.description}
                      </Typography>
                    )}
                  </StyledTextWrapper>
                </StyledItemHeader>
                
                {/* Custom content */}
                {item.content && (
                  <div style={{ marginTop: '1rem' }}>
                    {item.content}
                  </div>
                )}
              </StyledItemContent>
            </StyledBentoItem>
          ))}
        </StyledBentoGrid>
      </Container>
    </StyledBentoWrapper>
  )
}