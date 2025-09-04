import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

export interface NavigationProps {
  items: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
  className?: string
}

const StyledNav = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.foundation.black};
`

const NavContainer = styled(Box)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }
`

const NavContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`

const NavItems = styled(Box)`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const NavItem = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.innovation.primaryBlue};
    background-color: rgba(74, 158, 255, 0.1);
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.gray.base};
    
    ${({ $isActive, theme }) => $isActive && css`
      color: ${theme.colors.innovation.primaryBlue};
      background-color: rgba(74, 158, 255, 0.15);
    `}
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.base};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

const MobileMenu = styled(Box)<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing[4]};
  
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const MobileNavItem = styled(Link)<{ $isActive: boolean }>`
  display: block;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.innovation.primaryBlue};
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  &:last-child {
    border-bottom: none;
  }
`

export const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  
  return (
    <StyledNav as="nav" className={className} position="relative">
      <NavContainer>
        <NavContent>
          <Logo to="/">
            <Typography variant="brand" color="white">
              RSPWN
            </Typography>
          </Logo>
          
          <NavItems>
            {items.map((item) => (
              <NavItem
                key={item.href}
                to={item.href}
                $isActive={location.pathname === item.href}
              >
                {item.icon}
                {item.label}
              </NavItem>
            ))}
          </NavItems>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      <MobileMenu $isOpen={mobileMenuOpen}>
        {items.map((item) => (
          <MobileNavItem
            key={item.href}
            to={item.href}
            $isActive={location.pathname === item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </MobileNavItem>
        ))}
      </MobileMenu>
    </StyledNav>
  )
}