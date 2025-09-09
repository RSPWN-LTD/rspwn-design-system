import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'
import { Container } from '../foundation/Container'
import { Stack } from '../foundation/Stack'

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
  background: ${({ theme }) => theme.colors.foundation.black};
  color: ${({ theme }) => theme.colors.foundation.white};
  overflow: hidden;
`

const StyledHeroHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: ${({ theme }) => theme.spacing[6]};
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
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
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`

const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: all 0.2s ease;
  position: relative;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.innovation.primaryBlue};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`

const StyledMobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
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
  z-index: 60;
  width: 100%;
  max-width: 20rem;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing[6]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledHeroContent = styled.div<{ $variant: HeroSectionVariant }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[16]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[20]};
  }
  
  ${({ $variant }) => $variant === 'centered' && `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  `}
  
  ${({ $variant }) => $variant === 'minimal' && `
    padding-top: 8rem;
    padding-bottom: 4rem;
    min-height: auto;
    
    @media (min-width: 768px) {
      padding-top: 7rem;
    }
  `}
`

const StyledBackgroundGradient = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(74, 158, 255, 0.08) 0%,
    rgba(139, 92, 246, 0.06) 35%,
    transparent 70%
  );
  z-index: -1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120%;
    height: 40%;
  }
`

const StyledAnnouncement = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius.full};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }
`

const StyledAnnouncementBadge = styled.span`
  background: ${({ theme }) => theme.colors.innovation.primaryBlue};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  padding: 0.125rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const StyledActionButton = styled.a<{ $isPrimary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  
  ${({ $isPrimary, theme }) => $isPrimary ? `
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
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.foundation.white};
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }
  `}
`

const StyledTitleWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`

const StyledHeroTitle = styled(Typography)`
  margin-bottom: 1.5rem;
`

const StyledHeroSubtitle = styled(Typography)<{ $variant: HeroSectionVariant }>`
  font-size: 1.25rem;
  line-height: 1.75rem;
  max-width: 48rem;
  margin: ${({ $variant }) => $variant === 'centered' ? '0 auto' : '0'};
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
            <span>☰</span>
          </StyledMobileMenuButton>
          
          <StyledNavLinks>
            {navigation.map((item) => (
              <StyledNavLink key={item.name} href={item.href}>
                {item.name}
              </StyledNavLink>
            ))}
          </StyledNavLinks>
        </StyledNavigation>
        
        <StyledMobileMenu $isOpen={mobileMenuOpen}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Typography variant="brand">{brandName}</Typography>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.375rem',
                color: 'inherit',
                fontSize: '1.25rem',
                padding: '0.5rem',
                cursor: 'pointer',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
                  padding: '1rem 0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'color 0.2s ease'
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
      
      <StyledBackgroundGradient />
      
      <StyledHeroContent $variant={variant}>
        <Container variant="wide">
          <StyledTitleWrapper>
            <Stack variant="loose">
              {announcement && (
                <StyledAnnouncement>
                  <StyledAnnouncementBadge>New</StyledAnnouncementBadge>
                  <Typography variant="caption" color="muted">
                    {announcement.text}
                    {announcement.link && (
                      <>
                        {' '}
                        <a 
                          href={announcement.link.href}
                          style={{ 
                            color: '#4A9EFF', 
                            textDecoration: 'none',
                            fontWeight: 500
                          }}
                        >
                          {announcement.link.text} →
                        </a>
                      </>
                    )}
                  </Typography>
                </StyledAnnouncement>
              )}
              
              <StyledHeroTitle variant="heading">
                {title}
              </StyledHeroTitle>
              
              {subtitle && (
                <StyledHeroSubtitle 
                  color="muted" 
                  $variant={variant}
                >
                  {subtitle}
                </StyledHeroSubtitle>
              )}
              
              {(primaryAction || secondaryAction) && (
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  flexWrap: 'wrap',
                  justifyContent: variant === 'centered' ? 'center' : 'flex-start',
                  marginTop: '2rem'
                }}>
                  {primaryAction && (
                    <StyledActionButton href={primaryAction.href} $isPrimary>
                      {primaryAction.text}
                    </StyledActionButton>
                  )}
                  {secondaryAction && (
                    <StyledActionButton href={secondaryAction.href}>
                      {secondaryAction.text}
                      <span style={{ marginLeft: '0.5rem' }}>→</span>
                    </StyledActionButton>
                  )}
                </div>
              )}
              
              {children}
            </Stack>
          </StyledTitleWrapper>
        </Container>
      </StyledHeroContent>
    </StyledHeroWrapper>
  )
}