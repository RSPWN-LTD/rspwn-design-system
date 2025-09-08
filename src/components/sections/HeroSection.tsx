import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'
import { Stack } from '../foundation/Stack'
import { Box } from '../foundation/Box'

export type HeroSectionVariant = 'centered' | 'split' | 'minimal'

export interface HeroSectionProps {
  variant?: HeroSectionVariant
  title: string
  subtitle?: string
  announcement?: {
    text: string
    link?: {
      text: string
      href: string
    }
  }
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  navigation?: Array<{
    name: string
    href: string
  }>
  brandName?: string
  className?: string
  children?: React.ReactNode
}

const StyledHeroWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  overflow: hidden;
`

const StyledHeroHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[8]};
  }
`

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledNavLinks = styled.div`
  display: none;
  gap: ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`

const StyledMobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  max-width: 24rem;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-left: 1px solid ${({ theme }) => theme.colors.gray.base}40;
  padding: ${({ theme }) => theme.spacing[6]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledHeroContent = styled.div<{ $variant: HeroSectionVariant }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[32]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[56]};
  }
  
  ${({ $variant }) => $variant === 'centered' && `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding-top: 8rem;
    
    @media (min-width: 768px) {
      padding-top: 6rem;
    }
  `}
  
  ${({ $variant }) => $variant === 'minimal' && `
    padding-top: 8rem;
    padding-bottom: 4rem;
    min-height: auto;
    
    @media (min-width: 768px) {
      padding-top: 7rem;
    }
    
    @media (min-width: 1024px) {
      padding-top: 6rem;
    }
  `}
`

const StyledBackgroundGradient = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  ${({ $position }) => $position === 'top' ? 'top: -10rem' : 'bottom: 13rem'};
  left: calc(50% - ${({ $position }) => $position === 'top' ? '11rem' : '3rem'});
  width: ${({ $position }) => $position === 'top' ? '36rem' : '36rem'};
  height: 20rem;
  background: linear-gradient(135deg, #4A9EFF40 0%, #8B5CF640 100%);
  border-radius: 50%;
  filter: blur(64px);
  transform: translateX(-50%) ${({ $position }) => $position === 'top' ? 'rotate(30deg)' : 'rotate(-30deg)'};
  z-index: -10;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 24rem;
    left: calc(50% - 12rem);
  }
`

const StyledAnnouncement = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border: 1px solid ${({ theme }) => theme.colors.gray.base}40;
  border-radius: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  transition: all 0.2s ease;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing[4]};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray.base}60;
    background-color: ${({ theme }) => theme.colors.gray.base}10;
  }
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const StyledActionButton = styled.a<{ $isPrimary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  ${({ $isPrimary, theme }) => $isPrimary ? `
    background-color: ${theme.colors.innovation.primaryBlue};
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: #3B8EF0;
      transform: translateY(-1px);
    }
  ` : `
    color: ${theme.colors.foundation.white};
    
    &:hover {
      color: ${theme.colors.innovation.primaryBlue};
    }
  `}
`

export const HeroSection: React.FC<HeroSectionProps> = ({
  variant = 'centered',
  title,
  subtitle,
  announcement,
  primaryAction,
  secondaryAction,
  navigation,
  brandName = 'RSPWN',
  className,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderNavigation = () => {
    if (!navigation) return null

    return (
      <StyledHeroHeader>
        <StyledNavigation>
          <Typography variant="brand">{brandName}</Typography>
          
          <StyledMobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <span style={{ fontSize: '1.5rem' }}>☰</span>
          </StyledMobileMenuButton>
          
          <StyledNavLinks>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4A9EFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {item.name}
              </a>
            ))}
          </StyledNavLinks>
        </StyledNavigation>
        
        <StyledMobileMenu $isOpen={mobileMenuOpen}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <Typography variant="brand">{brandName}</Typography>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'inherit',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
          <Stack variant="default">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </Stack>
        </StyledMobileMenu>
      </StyledHeroHeader>
    )
  }

  return (
    <StyledHeroWrapper className={className}>
      {renderNavigation()}
      
      <StyledBackgroundGradient $position="top" />
      <StyledBackgroundGradient $position="bottom" />
      
      <StyledHeroContent $variant={variant}>
        <Container variant="wide">
          <Stack variant="loose" style={{ alignItems: variant === 'centered' ? 'center' : 'flex-start' }}>
            {announcement && (
              <StyledAnnouncement>
                <Typography variant="caption" color="muted">
                  {announcement.text}
                  {announcement.link && (
                    <>
                      {' '}
                      <a 
                        href={announcement.link.href} 
                        style={{ color: '#4A9EFF', fontWeight: 600, textDecoration: 'none' }}
                      >
                        {announcement.link.text} →
                      </a>
                    </>
                  )}
                </Typography>
              </StyledAnnouncement>
            )}
            
            <Typography 
              variant="heading" 
              style={{ 
                fontSize: '3rem',
                lineHeight: 1.1,
                textAlign: variant === 'centered' ? 'center' : 'left'
              }}
            >
              {title}
            </Typography>
            
            {subtitle && (
              <Typography 
                color="muted" 
                style={{ 
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  maxWidth: '42rem',
                  textAlign: variant === 'centered' ? 'center' : 'left'
                }}
              >
                {subtitle}
              </Typography>
            )}
            
            {(primaryAction || secondaryAction) && (
              <Stack 
                variant="tight" 
                style={{ 
                  alignItems: 'center', 
                  justifyContent: variant === 'centered' ? 'center' : 'flex-start',
                  gap: '1.5rem',
                  marginTop: '1rem'
                }}
              >
                {primaryAction && (
                  <StyledActionButton href={primaryAction.href} $isPrimary>
                    {primaryAction.text}
                  </StyledActionButton>
                )}
                {secondaryAction && (
                  <StyledActionButton href={secondaryAction.href}>
                    {secondaryAction.text} →
                  </StyledActionButton>
                )}
              </Stack>
            )}
            
            {children}
          </Stack>
        </Container>
      </StyledHeroContent>
    </StyledHeroWrapper>
  )
}