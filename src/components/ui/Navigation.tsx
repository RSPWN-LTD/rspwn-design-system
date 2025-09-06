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

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const MobileMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing[8]};
  margin: ${({ theme }) => theme.spacing[4]};
  width: calc(100% - ${({ theme }) => theme.spacing[8]});
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
`

const MobileMenuTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.base};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

const MobileNavItem = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  
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
  
  &:last-child {
    margin-bottom: 0;
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
      
      <MobileMenuOverlay $isOpen={mobileMenuOpen} onClick={handleOverlayClick}>
        <MobileMenu>
          <MobileMenuHeader>
            <MobileMenuTitle>Menu</MobileMenuTitle>
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
              {item.icon && <span style={{ marginRight: '12px' }}>{item.icon}</span>}
              {item.label}
            </MobileLinkComponent>
          ))}
        </MobileMenu>
      </MobileMenuOverlay>
    </StyledNav>
  )
}