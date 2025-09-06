import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

export interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
}

export interface NavigationProps {
  items: NavigationItem[]
  className?: string
  /**
   * Custom link component (for frameworks other than React Router)
   * If not provided, will use regular anchor tags
   */
  linkComponent?: React.ComponentType<{
    to?: string
    href?: string
    children: React.ReactNode
    className?: string
    onClick?: (event: React.MouseEvent) => void
  }>
  /**
   * Current pathname for active state (optional)
   * If not provided, no active state will be shown
   */
  currentPath?: string
  /**
   * Brand/logo content
   */
  brand?: React.ReactNode
  /**
   * Brand/logo link (if clickable)
   */
  brandHref?: string
  /**
   * Brand/logo onClick handler
   */
  onBrandClick?: (event: React.MouseEvent) => void
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
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 80px;
  }
`

const BrandLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    opacity: 0.8;
  }
`

const NavItems = styled(Box)`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const NavItemLink = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  cursor: pointer;
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.innovation.primaryBlue};
    background-color: rgba(74, 158, 255, 0.15);
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

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing[4]};
  z-index: 50;
  
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const MobileNavItem = styled.a<{ $isActive?: boolean }>`
  display: block;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
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

// Hamburger menu icon component
const MenuIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
)

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  className,
  linkComponent: CustomLink,
  currentPath,
  brand,
  brandHref = "/",
  onBrandClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  
  // Determine which link component to use
  const LinkComponent = CustomLink || NavItemLink
  const MobileLinkComponent = CustomLink || MobileNavItem
  
  const renderBrand = () => {
    const brandContent = brand || (
      <Typography variant="brand" color="white">
        RSPWN
      </Typography>
    )
    
    if (onBrandClick || brandHref) {
      return (
        <BrandLink 
          href={brandHref} 
          onClick={onBrandClick}
          style={{ textDecoration: 'none' }}
        >
          {brandContent}
        </BrandLink>
      )
    }
    
    return brandContent
  }
  
  const isActive = (itemHref: string) => {
    return currentPath ? currentPath === itemHref : false
  }
  
  const handleItemClick = (item: NavigationItem) => (event: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick(event)
    }
    // Close mobile menu when item is clicked
    setMobileMenuOpen(false)
  }
  
  return (
    <StyledNav as="nav" className={className} position="relative">
      <NavContainer>
        <NavContent>
          {renderBrand()}
          
          <NavItems>
            {items.map((item) => (
              <LinkComponent
                key={item.href}
                to={item.href}
                href={item.href}
                $isActive={isActive(item.href)}
                onClick={handleItemClick(item)}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </LinkComponent>
            ))}
          </NavItems>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <MenuIcon />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      <MobileMenu $isOpen={mobileMenuOpen}>
        {items.map((item) => (
          <MobileLinkComponent
            key={item.href}
            to={item.href}
            href={item.href}
            $isActive={isActive(item.href)}
            onClick={handleItemClick(item)}
          >
            {item.label}
          </MobileLinkComponent>
        ))}
      </MobileMenu>
    </StyledNav>
  )
}