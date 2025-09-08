import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ReactNode
  current?: boolean
}

export interface TeamItem {
  id: string | number
  name: string
  href: string
  initial: string
  current?: boolean
}

export interface SidebarNavigationProps {
  brandName?: string
  brandIcon?: string
  navigation: NavigationItem[]
  teams?: TeamItem[]
  userProfile?: {
    name: string
    avatar: string
  }
  sidebarOpen?: boolean
  onSidebarToggle?: (open: boolean) => void
  className?: string
  children?: React.ReactNode
}

const StyledSidebarWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const StyledMobileOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 50;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledMobileSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset-y: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  max-width: 20rem;
  background: ${({ theme }) => theme.colors.foundation.black};
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledDesktopSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 18rem;
  background: ${({ theme }) => theme.colors.foundation.black};
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
  z-index: 50;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledSidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  overflow-y: auto;
  padding: 1.5rem;
`

const StyledBrandContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  flex-shrink: 0;
`

const StyledBrandLogo = styled.img`
  height: 2rem;
  width: auto;
`

const StyledNavigation = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const StyledNavList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledNavSection = styled.li``

const StyledNavItems = styled.ul`
  margin: -0.5rem;
  list-style: none;
  padding: 0;
`

const StyledNavItem = styled.li`
  & + & {
    margin-top: 0.25rem;
  }
`

const StyledNavLink = styled.a<{ $current?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
  
  ${({ $current, theme }) => $current ? `
    background: rgba(255, 255, 255, 0.08);
    color: ${theme.colors.foundation.white};
  ` : `
    color: ${theme.colors.text.secondary};
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.foundation.white};
    }
  `}
`

const StyledNavIcon = styled.span<{ $current?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $current, theme }) => $current ? `
    color: ${theme.colors.foundation.white};
  ` : `
    color: ${theme.colors.text.muted};
    
    .nav-link:hover & {
      color: ${theme.colors.foundation.white};
    }
  `}
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const StyledSectionHeader = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 0.5rem;
`

const StyledTeamBadge = styled.span<{ $current?: boolean }>`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.625rem;
  font-weight: 500;
  
  ${({ $current, theme }) => $current ? `
    border-color: ${theme.colors.innovation.primaryBlue};
    color: ${theme.colors.innovation.primaryBlue};
  ` : `
    border-color: ${theme.colors.gray.light};
    color: ${theme.colors.text.muted};
    
    .nav-link:hover & {
      border-color: ${theme.colors.innovation.primaryBlue};
      color: ${theme.colors.innovation.primaryBlue};
    }
  `}
`

const StyledUserProfile = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: -1.5rem;
  margin-top: auto;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foundation.white};
  text-decoration: none;
  transition: background-color 0.15s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray.light};
`

const StyledMainContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 18rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.foundation.black};
  overflow-y: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 0;
  }
`

const StyledTopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.foundation.black};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 1.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledMobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: -0.625rem;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.foundation.white};
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const StyledPageTitle = styled.div`
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foundation.white};
`

const StyledMobileCloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.foundation.white};
  }
`

const StyledMainArea = styled.main`
  padding: 2.5rem 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.5rem 1.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2.5rem 2rem;
  }
`

// Icons
const MenuIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const CloseIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
)

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  brandName = 'Your Company',
  brandIcon,
  navigation,
  teams = [],
  userProfile,
  sidebarOpen = false,
  onSidebarToggle,
  className,
  children
}) => {
  const [internalSidebarOpen, setInternalSidebarOpen] = useState(false)
  
  const isOpen = onSidebarToggle ? sidebarOpen : internalSidebarOpen
  const toggleSidebar = onSidebarToggle || setInternalSidebarOpen

  const renderSidebarContent = () => (
    <StyledSidebarContent>
      <StyledBrandContainer>
        {brandIcon ? (
          <StyledBrandLogo src={brandIcon} alt={brandName} />
        ) : (
          <Typography variant="brand">{brandName}</Typography>
        )}
      </StyledBrandContainer>
      
      <StyledNavigation>
        <StyledNavList>
          <StyledNavSection>
            <StyledNavItems>
              {navigation.map((item) => (
                <StyledNavItem key={item.name}>
                  <StyledNavLink href={item.href} $current={item.current} className="nav-link">
                    {item.icon && (
                      <StyledNavIcon $current={item.current}>
                        {item.icon}
                      </StyledNavIcon>
                    )}
                    {item.name}
                  </StyledNavLink>
                </StyledNavItem>
              ))}
            </StyledNavItems>
          </StyledNavSection>
          
          {teams.length > 0 && (
            <StyledNavSection>
              <StyledSectionHeader>Your teams</StyledSectionHeader>
              <StyledNavItems>
                {teams.map((team) => (
                  <StyledNavItem key={team.name}>
                    <StyledNavLink href={team.href} $current={team.current} className="nav-link">
                      <StyledTeamBadge $current={team.current}>
                        {team.initial}
                      </StyledTeamBadge>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {team.name}
                      </span>
                    </StyledNavLink>
                  </StyledNavItem>
                ))}
              </StyledNavItems>
            </StyledNavSection>
          )}
          
          {userProfile && (
            <StyledUserProfile href="#">
              <StyledAvatar src={userProfile.avatar} alt="" />
              <span>{userProfile.name}</span>
            </StyledUserProfile>
          )}
        </StyledNavList>
      </StyledNavigation>
    </StyledSidebarContent>
  )

  return (
    <StyledSidebarWrapper className={className}>
      {/* Mobile Overlay */}
      <StyledMobileOverlay 
        $isOpen={isOpen} 
        onClick={() => toggleSidebar(false)}
      />
      
      {/* Mobile Sidebar */}
      <StyledMobileSidebar $isOpen={isOpen}>
        <StyledMobileCloseButton onClick={() => toggleSidebar(false)}>
          <CloseIcon />
        </StyledMobileCloseButton>
        {renderSidebarContent()}
      </StyledMobileSidebar>
      
      {/* Desktop Sidebar */}
      <StyledDesktopSidebar>
        {renderSidebarContent()}
      </StyledDesktopSidebar>
      
      {/* Main Content */}
      <StyledMainContent>
        <StyledTopBar>
          <StyledMobileMenuButton onClick={() => toggleSidebar(true)}>
            <MenuIcon />
          </StyledMobileMenuButton>
          <StyledPageTitle>Dashboard</StyledPageTitle>
          {userProfile && (
            <a href="#">
              <StyledAvatar src={userProfile.avatar} alt="" />
            </a>
          )}
        </StyledTopBar>
        
        <StyledMainArea>
          {children || (
            <div>
              <Typography variant="heading">Dashboard</Typography>
            </div>
          )}
        </StyledMainArea>
      </StyledMainContent>
    </StyledSidebarWrapper>
  )
}