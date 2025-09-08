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
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
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
  height: 72px;
`

const BrandLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const NavItems = styled(Box)`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  
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
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.08);
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
    
    ${({ $isActive, theme }) => $isActive && css`
      background: rgba(255, 255, 255, 0.12);
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.foundation.white};
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 100;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 20rem;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing[6]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: ${({ theme }) => theme.colors.foundation.white};
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const MobileNavItem = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.08);
    border-bottom-color: rgba(255, 255, 255, 0.1);
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.05);
    
    ${({ $isActive, theme }) => $isActive && css`
      background: rgba(255, 255, 255, 0.12);
    `}
  }
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`

// Hamburger menu icon component
const MenuIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
)

// Close icon component
const CloseIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L9 7.586l3.293-3.293a1 1 0 111.414 1.414L10.414 9l3.293 3.293a1 1 0 01-1.414 1.414L9 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 9 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
  
  const handleOverlayClick = (event: React.MouseEvent) => {
    // Close menu when clicking the overlay background
    if (event.target === event.currentTarget) {
      setMobileMenuOpen(false)
    }
  }
  
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])
  
  return (
    <StyledNav as="nav" className={className}>
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
      
      <MobileMenuOverlay $isOpen={mobileMenuOpen} onClick={handleOverlayClick}>
        <MobileMenu $isOpen={mobileMenuOpen}>
          <MobileMenuHeader>
            {renderBrand()}
            <CloseButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </CloseButton>
          </MobileMenuHeader>
          
          {items.map((item) => (
            <MobileLinkComponent
              key={item.href}
              to={item.href}
              href={item.href}
              $isActive={isActive(item.href)}
              onClick={handleItemClick(item)}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </MobileLinkComponent>
          ))}
        </MobileMenu>
      </MobileMenuOverlay>
    </StyledNav>
  )
}