import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../foundation/Box'
import { Typography } from '../foundation/Typography'

export interface NavigationSubItem {
  name: string
  description?: string
  href: string
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
}

export interface NavigationItem {
  label: string
  href?: string
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  dropdown?: {
    items: NavigationSubItem[]
    callsToAction?: NavigationSubItem[]
  }
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

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }
`

const NavContent = styled.div`
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

const NavItems = styled.div<{ $hasOverflow: boolean; $forceMobile: boolean }>`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $forceMobile }) => ($forceMobile ? 'none' : 'flex')};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
  
  /* Hide items when there's overflow or forced mobile */
  ${({ $hasOverflow, $forceMobile }) => ($hasOverflow || $forceMobile) && `
    @media (max-width: 1024px) {
      display: none !important;
    }
  `}
`

const NavItemWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  
  @media (max-width: 1200px) {
    flex-shrink: 1;
    min-width: 0;
  }
`

const NavItemLink = styled.a<{ $isActive?: boolean; $hasDropdown?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  min-width: 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  }
  
  /* Responsive text truncation */
  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[2]};
  }
  
  @media (max-width: 900px) {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.08);
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
    
    ${({ $isActive }) => $isActive && css`
      background: rgba(255, 255, 255, 0.12);
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
`

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 12px);
  width: 28rem;
  max-width: calc(100vw - 2rem);
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 50;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  /* Responsive positioning - avoid edges */
  @media (max-width: 768px) {
    width: calc(100vw - 3rem);
    left: 50%;
    right: auto;
  }
  
  /* Adjust position if too close to screen edges */
  @media (max-width: 1200px) {
    width: 24rem;
  }
  
  @media (max-width: 900px) {
    width: 20rem;
  }
  
  /* Smart positioning to avoid viewport edges */
  &[data-position="left"] {
    left: 0;
    transform: translateX(0) ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  }
  
  &[data-position="right"] {
    left: auto;
    right: 0;
    transform: translateX(0) ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  }
`

const DropdownContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`

const DropdownItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.foundation.white};
  }
`

const DropdownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text.secondary};
  flex-shrink: 0;
  transition: all 0.2s ease;
  
  ${DropdownItem}:hover & {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.foundation.white};
  }
`

const DropdownItemContent = styled.div`
  flex: 1;
`

const DropdownItemTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foundation.white};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const DropdownItemDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  line-height: 1.4;
`

const DropdownFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
`

const DropdownCallToAction = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foundation.white};
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`

const ChevronIcon = styled.svg<{ $isOpen: boolean }>`
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all 0.2s ease;
  flex-shrink: 0;
`

const MobileMenuButton = styled.button<{ $forceShow: boolean }>`
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
    display: ${({ $forceShow }) => ($forceShow ? 'flex' : 'none')};
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.foundation.white};
    border-color: rgba(255, 255, 255, 0.2);
  }
`

// Overflow menu button for when there are too many items
const OverflowMenuButton = styled.button<{ $forceMobile: boolean }>`
  display: none;
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
  position: relative;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) and (max-width: 1024px) {
    display: ${({ $forceMobile }) => ($forceMobile ? 'none' : 'flex')};
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.foundation.white};
    border-color: rgba(255, 255, 255, 0.2);
  }
`

const OverflowDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 200px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 50;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[2]};
`

const OverflowMenuItem = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: all 0.2s ease;
  
  ${({ $isActive, theme }) => $isActive && css`
    color: ${theme.colors.foundation.white};
    background: rgba(255, 255, 255, 0.08);
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.foundation.white};
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
    
    ${({ $isActive }) => $isActive && css`
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

// Chevron down icon component
const ChevronDownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <ChevronIcon $isOpen={isOpen} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </ChevronIcon>
)

// More menu icon component
const MoreIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
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
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null)
  const [overflowMenuOpen, setOverflowMenuOpen] = React.useState(false)
  const [visibleItems, setVisibleItems] = React.useState<NavigationItem[]>(items)
  const [overflowItems, setOverflowItems] = React.useState<NavigationItem[]>([])
  const [forceMobileMenu, setForceMobileMenu] = React.useState(false)
  const navRef = React.useRef<HTMLDivElement>(null)
  const navItemsRef = React.useRef<HTMLDivElement>(null)
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleOverflowMenu = () => setOverflowMenuOpen(!overflowMenuOpen)
  
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
  
  const isActive = (itemHref?: string) => {
    return currentPath && itemHref ? currentPath === itemHref : false
  }
  
  const handleItemClick = (item: NavigationItem) => (event: React.MouseEvent) => {
    if (item.dropdown) {
      // Prevent default navigation for dropdown items
      event.preventDefault()
      return
    }
    
    if (item.onClick) {
      item.onClick(event)
    }
    // Close mobile menu when item is clicked
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }
  
  const handleDropdownToggle = (index: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setOpenDropdown(openDropdown === index ? null : index)
    
    // Smart positioning for dropdown
    if (openDropdown !== index) {
      setTimeout(() => {
        const dropdown = document.querySelector(`[data-dropdown-index="${index}"]`) as HTMLElement
        if (dropdown) {
          const rect = dropdown.getBoundingClientRect()
          const viewportWidth = window.innerWidth
          const dropdownWidth = 448 // 28rem converted to px
          
          // Check if dropdown would go off screen
          if (rect.left + dropdownWidth > viewportWidth - 16) {
            dropdown.setAttribute('data-position', 'right')
          } else if (rect.left < 16) {
            dropdown.setAttribute('data-position', 'left')
          } else {
            dropdown.removeAttribute('data-position')
          }
        }
      }, 10)
    }
  }
  
  const handleDropdownItemClick = (subItem: NavigationSubItem) => (event: React.MouseEvent) => {
    if (subItem.onClick) {
      subItem.onClick(event)
    }
    setOpenDropdown(null)
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
  
  // Handle responsive overflow detection with real DOM measurements
  React.useEffect(() => {
    const checkOverflow = () => {
      if (!navRef.current || !navItemsRef.current) return
      
      const screenWidth = window.innerWidth
      const isNaturallyMobile = screenWidth < 768
      
      // For mobile screens, always use mobile menu
      if (isNaturallyMobile) {
        setForceMobileMenu(true)
        setVisibleItems([])
        setOverflowItems([])
        return
      }
      
      // For larger screens, check if items would overflow/collapse
      const container = navRef.current
      const navItems = navItemsRef.current
      
      // Get actual widths
      const containerRect = container.getBoundingClientRect()
      const containerWidth = containerRect.width
      
      // Calculate space taken by brand and mobile button
      const brand = container.querySelector('[data-brand]') as HTMLElement
      const mobileButton = container.querySelector('[data-mobile-button]') as HTMLElement
      
      const brandWidth = brand ? brand.offsetWidth + 32 : 120 // 32px for margins
      const mobileButtonWidth = mobileButton ? mobileButton.offsetWidth + 16 : 60
      
      // Available space for navigation items
      const availableWidth = containerWidth - brandWidth - mobileButtonWidth - 32 // 32px buffer
      
      // Create a temporary invisible container to measure items
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'absolute'
      tempContainer.style.visibility = 'hidden'
      tempContainer.style.pointerEvents = 'none'
      tempContainer.style.top = '-9999px'
      tempContainer.style.display = 'flex'
      tempContainer.style.gap = '4px' // Match the actual gap
      tempContainer.style.fontSize = getComputedStyle(navItems).fontSize
      tempContainer.style.fontFamily = getComputedStyle(navItems).fontFamily
      
      document.body.appendChild(tempContainer)
      
      let totalWidth = 0
      let visibleCount = 0
      let needsOverflowButton = false
      
      // Measure each item
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        
        // Create temporary element to measure
        const tempItem = document.createElement('div')
        tempItem.style.padding = '8px 12px' // Match NavItemLink padding
        tempItem.style.whiteSpace = 'nowrap'
        tempItem.style.display = 'flex'
        tempItem.style.alignItems = 'center'
        tempItem.style.gap = '8px'
        
        // Add icon space if present
        if (item.icon) {
          const iconSpan = document.createElement('span')
          iconSpan.style.width = '16px'
          iconSpan.style.height = '16px'
          tempItem.appendChild(iconSpan)
        }
        
        // Add text
        tempItem.textContent = item.label
        
        // Add dropdown arrow space if present
        if (item.dropdown) {
          const arrow = document.createElement('span')
          arrow.style.width = '16px'
          arrow.style.height = '16px'
          tempItem.appendChild(arrow)
        }
        
        tempContainer.appendChild(tempItem)
        const itemWidth = tempItem.offsetWidth
        
        // Check if this item would fit
        const widthWithOverflow = needsOverflowButton ? totalWidth + itemWidth + 60 : totalWidth + itemWidth
        
        if (widthWithOverflow <= availableWidth) {
          totalWidth += itemWidth
          visibleCount++
        } else {
          // If we can't fit even with overflow button, force mobile menu
          if (visibleCount === 0) {
            setForceMobileMenu(true)
            setVisibleItems([])
            setOverflowItems([])
            document.body.removeChild(tempContainer)
            return
          }
          
          needsOverflowButton = true
          
          // Check if we need to remove items to make room for overflow button
          while (visibleCount > 0 && totalWidth + 60 > availableWidth) {
            visibleCount--
            tempContainer.removeChild(tempContainer.children[visibleCount])
            // Recalculate width
            totalWidth = Array.from(tempContainer.children).reduce((sum, child) => {
              return sum + (child as HTMLElement).offsetWidth
            }, 0)
          }
          
          break
        }
      }
      
      document.body.removeChild(tempContainer)
      
      // If we couldn't fit any items or very few items, force mobile menu
      if (visibleCount <= 1 && items.length > 2) {
        setForceMobileMenu(true)
        setVisibleItems([])
        setOverflowItems([])
      } else {
        setForceMobileMenu(false)
        setVisibleItems(items.slice(0, visibleCount))
        setOverflowItems(items.slice(visibleCount))
      }
    }
    
    // Initial check
    checkOverflow()
    
    // Set up ResizeObserver for more accurate detection
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow()
    })
    
    if (navRef.current) {
      resizeObserver.observe(navRef.current)
    }
    
    // Fallback with window resize
    window.addEventListener('resize', checkOverflow)
    
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkOverflow)
    }
  }, [items])
  
  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdown !== null) {
        setOpenDropdown(null)
      }
      if (overflowMenuOpen) {
        setOverflowMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown, overflowMenuOpen])
  
  return (
    <StyledNav as="nav" className={className}>
      <NavContainer ref={navRef}>
        <NavContent>
          <div data-brand>
            {renderBrand()}
          </div>
          
          <NavItems 
            $hasOverflow={overflowItems.length > 0}
            $forceMobile={forceMobileMenu}
            style={{ position: 'relative' }}
          >
            <div ref={navItemsRef} style={{ display: 'contents' }}>
            {visibleItems.map((item, index) => (
              <NavItemWrapper key={item.href || item.label}>
                <LinkComponent
                  to={item.href}
                  href={item.href || '#'}
                  $isActive={isActive(item.href)}
                  $hasDropdown={!!item.dropdown}
                  onClick={item.dropdown ? handleDropdownToggle(index) : handleItemClick(item)}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                  {item.dropdown && <ChevronDownIcon isOpen={openDropdown === index} />}
                </LinkComponent>
                
                {item.dropdown && (
                  <DropdownMenu 
                    $isOpen={openDropdown === index} 
                    data-dropdown-index={index}
                  >
                    <DropdownContent>
                      {item.dropdown.items.map((subItem) => (
                        <DropdownItem
                          key={subItem.href}
                          href={subItem.href}
                          onClick={handleDropdownItemClick(subItem)}
                        >
                          {subItem.icon && (
                            <DropdownIconWrapper>
                              {subItem.icon}
                            </DropdownIconWrapper>
                          )}
                          <DropdownItemContent>
                            <DropdownItemTitle>{subItem.name}</DropdownItemTitle>
                            {subItem.description && (
                              <DropdownItemDescription>{subItem.description}</DropdownItemDescription>
                            )}
                          </DropdownItemContent>
                        </DropdownItem>
                      ))}
                    </DropdownContent>
                    
                    {item.dropdown.callsToAction && item.dropdown.callsToAction.length > 0 && (
                      <DropdownFooter>
                        {item.dropdown.callsToAction.map((cta) => (
                          <DropdownCallToAction
                            key={cta.href}
                            href={cta.href}
                            onClick={handleDropdownItemClick(cta)}
                          >
                            {cta.icon && <span>{cta.icon}</span>}
                            {cta.name}
                          </DropdownCallToAction>
                        ))}
                      </DropdownFooter>
                    )}
                  </DropdownMenu>
                )}
              </NavItemWrapper>
            ))}
            </div>
          </NavItems>
          
          {/* Overflow menu for tablet/desktop */}
          {overflowItems.length > 0 && !forceMobileMenu && (
            <OverflowMenuButton onClick={toggleOverflowMenu} $forceMobile={forceMobileMenu}>
              <MoreIcon />
              <OverflowDropdown $isOpen={overflowMenuOpen}>
                {overflowItems.map((item) => (
                  <React.Fragment key={item.href || item.label}>
                    <OverflowMenuItem
                      href={item.href || '#'}
                      $isActive={isActive(item.href)}
                      onClick={item.dropdown ? () => {} : handleItemClick(item)}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                      {item.dropdown && <span style={{ marginLeft: 'auto', fontSize: '12px' }}>▶</span>}
                    </OverflowMenuItem>
                    
                    {/* Show dropdown items inline in overflow menu */}
                    {item.dropdown?.items.map((subItem) => (
                      <OverflowMenuItem
                        key={subItem.href}
                        href={subItem.href}
                        onClick={handleDropdownItemClick(subItem)}
                        style={{ paddingLeft: '2rem', fontSize: '0.875rem', opacity: 0.8 }}
                      >
                        {subItem.icon && <span style={{ transform: 'scale(0.8)' }}>{subItem.icon}</span>}
                        {subItem.name}
                      </OverflowMenuItem>
                    ))}
                  </React.Fragment>
                ))}
              </OverflowDropdown>
            </OverflowMenuButton>
          )}
          
          <MobileMenuButton onClick={toggleMobileMenu} $forceShow={forceMobileMenu} data-mobile-button>
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
          
          {items.map((item, index) => (
            <React.Fragment key={item.href || item.label}>
              <MobileLinkComponent
                to={item.href}
                href={item.href || '#'}
                $isActive={isActive(item.href)}
                onClick={item.dropdown ? handleDropdownToggle(index) : handleItemClick(item)}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
                {item.dropdown && <ChevronDownIcon isOpen={openDropdown === index} />}
              </MobileLinkComponent>
              
              {/* Mobile dropdown items */}
              {item.dropdown && openDropdown === index && (
                <>
                  {item.dropdown.items.map((subItem) => (
                    <MobileLinkComponent
                      key={subItem.href}
                      href={subItem.href}
                      onClick={handleDropdownItemClick(subItem)}
                      style={{ paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)', marginLeft: '1rem' }}
                    >
                      {subItem.icon && <span>{subItem.icon}</span>}
                      {subItem.name}
                    </MobileLinkComponent>
                  ))}
                  
                  {item.dropdown.callsToAction?.map((cta) => (
                    <MobileLinkComponent
                      key={cta.href}
                      href={cta.href}
                      onClick={handleDropdownItemClick(cta)}
                      style={{ 
                        paddingLeft: '2rem', 
                        borderLeft: '2px solid rgba(74, 158, 255, 0.3)', 
                        marginLeft: '1rem',
                        color: '#4A9EFF'
                      }}
                    >
                      {cta.icon && <span>{cta.icon}</span>}
                      {cta.name}
                    </MobileLinkComponent>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </MobileMenu>
      </MobileMenuOverlay>
    </StyledNav>
  )
}