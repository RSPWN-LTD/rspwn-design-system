import React from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'
import { Stack } from '../foundation/Stack'

export interface BentoGridItem {
  id: string
  title: string
  description?: string
  icon?: string
  image?: string
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  color?: 'primary' | 'secondary' | 'accent' | 'neutral'
  href?: string
  onClick?: () => void
  content?: React.ReactNode
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
      ? `clamp(1rem, 3vw, 3rem) 0`
      : $variant === 'spacious'
      ? `clamp(2rem, 5vw, 5rem) 0`
      : `clamp(1.5rem, 4vw, 4rem) 0`
  };
  background-color: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  width: 100%;
  box-sizing: border-box;
`

const StyledBentoGrid = styled.div<{ $variant: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(clamp(200px, 20vw, 280px), 100%), 1fr));
  grid-auto-rows: minmax(clamp(140px, 15vw, 200px), auto);
  gap: ${({ $variant }) => 
    $variant === 'compact' 
      ? `clamp(0.5rem, 1vw, 0.75rem)`
      : $variant === 'spacious'
      ? `clamp(1rem, 2vw, 2rem)`
      : `clamp(0.75rem, 1.5vw, 1rem)`
  };
  width: 100%;
  box-sizing: border-box;
  
  /* Single column on very narrow containers */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, 1vw, 0.75rem);
  }
`

const getItemSize = (size: string) => {
  switch (size) {
    case 'small':
      return `
        grid-column: span 1;
        grid-row: span 1;
      `
    case 'large':
      return `
        grid-column: span 1;
        grid-row: span 1;
        
        @media (min-width: 1200px) {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        @media (min-width: 1400px) {
          grid-column: span 2;
          grid-row: span 2;
        }
      `
    case 'wide':
      return `
        grid-column: span 1;
        grid-row: span 1;
        
        @media (min-width: 1200px) {
          grid-column: span 2;
          grid-row: span 1;
        }
      `
    case 'tall':
      return `
        grid-column: span 1;
        grid-row: span 1;
        
        @media (min-width: 1000px) {
          grid-row: span 2;
        }
      `
    default: // medium
      return `
        grid-column: span 1;
        grid-row: span 1;
      `
  }
}

const getItemColor = (color: string, theme: any) => {
  switch (color) {
    case 'primary':
      return `
        background-color: ${theme.colors.innovation.primaryBlue}20;
        border: 1px solid ${theme.colors.innovation.primaryBlue}40;
      `
    case 'secondary':
      return `
        background-color: ${theme.colors.innovation.secondaryPurple}20;
        border: 1px solid ${theme.colors.innovation.secondaryPurple}40;
      `
    case 'accent':
      return `
        background-color: ${theme.colors.semantic.success}20;
        border: 1px solid ${theme.colors.semantic.success}40;
      `
    default:
      return `
        background-color: ${theme.colors.gray.base};
        border: 1px solid ${theme.colors.gray.light}40;
      `
  }
}

const StyledBentoItem = styled.div<{ 
  $size: string
  $color: string
  $isClickable: boolean
}>`
  position: relative;
  border-radius: 0.75rem;
  padding: ${({ theme }) => theme.spacing[4]};
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};
  min-height: 160px;
  
  ${({ $size }) => getItemSize($size)}
  ${({ $color, theme }) => getItemColor($color, theme)}
  
  @media (min-width: 1200px) {
    padding: ${({ theme }) => theme.spacing[6]};
    min-height: 180px;
    border-radius: 1rem;
  }
  
  @media (max-width: 900px) {
    padding: ${({ theme }) => theme.spacing[3]};
    min-height: 140px;
    border-radius: 0.5rem;
  }
  
  ${({ $isClickable }) => $isClickable && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
`

const StyledItemBackground = styled.div<{ $image?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $image }) => $image ? `url(${$image})` : 'none'};
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  border-radius: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    border-radius: 1rem;
  }
`

const StyledItemContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 8rem;
`

const StyledItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const StyledItemIcon = styled.div<{ $color: string }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
  
  @media (min-width: 1200px) {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    font-size: 1.5rem;
  }
  
  @media (max-width: 900px) {
    width: 2rem;
    height: 2rem;
    border-radius: 0.375rem;
    font-size: 1rem;
  }
  
  ${({ $color, theme }) => {
    switch ($color) {
      case 'primary':
        return `background-color: ${theme.colors.innovation.primaryBlue}; color: white;`
      case 'secondary':
        return `background-color: ${theme.colors.innovation.secondaryPurple}; color: white;`
      case 'accent':
        return `background-color: ${theme.colors.semantic.success}; color: white;`
      default:
        return `background-color: ${theme.colors.gray.light}; color: ${theme.colors.text.secondary};`
    }
  }}
`

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
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
      window.location.href = item.href
    }
  }

  return (
    <StyledBentoWrapper $variant={variant} className={className}>
      <Container variant="wide">
        {(title || subtitle) && (
          <StyledSectionHeader>
            {title && (
              <Typography variant="heading" style={{ marginBottom: '1rem' }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography color="muted" style={{ fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
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
              $color={item.color || 'neutral'}
              $isClickable={!!(item.onClick || item.href)}
              onClick={() => handleItemClick(item)}
            >
              {item.image && <StyledItemBackground $image={item.image} />}
              
              <StyledItemContent>
                <div>
                  <StyledItemHeader>
                    {item.icon && (
                      <StyledItemIcon $color={item.color || 'neutral'}>
                        {item.icon}
                      </StyledItemIcon>
                    )}
                    <div style={{ flex: 1 }}>
                      <Typography 
                        variant="subheading" 
                        style={{ 
                          marginBottom: '0.5rem',
                          fontSize: item.size === 'large' ? '1.5rem' : '1.125rem'
                        }}
                      >
                        {item.title}
                      </Typography>
                      {item.description && (
                        <Typography 
                          color="muted" 
                          style={{ 
                            fontSize: '0.875rem',
                            lineHeight: 1.5
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </div>
                  </StyledItemHeader>
                </div>
                
                {item.content && (
                  <div>
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