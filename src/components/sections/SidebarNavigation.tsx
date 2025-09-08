import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'

export interface NavigationItem {
  name: string
  href: string
  icon?: string
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
  settingsItem?: NavigationItem
  userProfile?: {
    name: string
    avatar: string
    menuItems: Array<{ name: string; href: string }>
  }
  sidebarOpen?: boolean
  onSidebarToggle?: (open: boolean) => void
  showSearch?: boolean
  className?: string
  children?: React.ReactNode
}

const StyledSidebarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 16rem 1fr;
  }
  
  @media (min-width: 1440px) {
    grid-template-columns: 18rem 1fr;
  }
`

const StyledMobileOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  transition: opacity 0.3s ease-linear;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  
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
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledDesktopSidebar = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.foundation.black};
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 100vh;
    position: sticky;
    top: 0;
  }
`

const StyledSidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing[5]};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ theme }) => theme.spacing[6]};
  }
`

const StyledBrandContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.spacing[2]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }
`

const StyledBrandIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
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
  gap: ${({ theme }) => theme.spacing[6]};
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledNavSection = styled.li``

const StyledNavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledNavItem = styled.li``

const StyledNavLink = styled.a<{ $current?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: 0.375rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  transition: all 0.2s ease;
  min-height: 2.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  }
  
  ${({ $current, theme }) => $current ? `
    background-color: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.foundation.white};
  ` : `
    color: ${theme.colors.text.secondary};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.foundation.white};
    }
  `}
`

const StyledNavIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.25rem;
  }
`

const StyledTeamBadge = styled.span<{ $current?: boolean }>`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 0.625rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
  }
  
  ${({ $current, theme }) => $current ? `
    color: ${theme.colors.foundation.white};
    border-color: rgba(255, 255, 255, 0.2);
  ` : `
    color: ${theme.colors.text.secondary};
  `}
  
  .nav-link:hover & {
    border-color: rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.foundation.white};
  }
`

const StyledSectionHeader = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const StyledSettingsContainer = styled.li`
  margin-top: auto;
`

const StyledMobileCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: -4rem;
  display: flex;
  width: 4rem;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing[5]};
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledMainContent = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  overflow-x: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    /* Grid will automatically size this column */
    width: 100%;
  }
`

const StyledTopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  height: 4rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: ${({ theme }) => theme.colors.foundation.black};
  padding: 0 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`

const StyledMobileMenuButton = styled.button`
  margin: -0.625rem;
  padding: 0.625rem;
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

const StyledSearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const StyledSearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  color: ${({ theme }) => theme.colors.foundation.white};
  border: none;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
  
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const StyledSearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.muted};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`

const StyledUserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`

const StyledMainArea = styled.main`
  flex: 1;
  padding: clamp(1rem, 4vw, 2rem);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.foundation.black};
  box-sizing: border-box;
  
  /* Ensure content is fluid and responsive */
  & > * {
    width: 100%;
    max-width: 100%;
  }
`

const StyledTopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledDivider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.1);
`

const StyledActionButton = styled.button`
  margin: -0.625rem;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors.text.muted};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`

const StyledUserProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const StyledUserInfo = styled.span`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    margin-left: ${({ theme }) => theme.spacing[4]};
  }
`

const StyledUserName = styled.span`
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foundation.white};
`

const StyledChevron = styled.span`
  margin-left: ${({ theme }) => theme.spacing[2]};
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.muted};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  brandName = 'RSPWN',
  brandIcon,
  navigation,
  teams = [],
  settingsItem,
  userProfile,
  sidebarOpen = false,
  onSidebarToggle,
  showSearch = true,
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
          <img src={brandIcon} alt={brandName} style={{ height: '2rem', width: 'auto' }} />
        ) : (
          <StyledBrandIcon>
            {brandName.charAt(0)}
          </StyledBrandIcon>
        )}
        <Typography variant="brand">
          {brandName}
        </Typography>
      </StyledBrandContainer>
      
      <StyledNavigation>
        <StyledNavList>
          <StyledNavSection>
            <StyledNavItems>
              {navigation.map((item) => (
                <StyledNavItem key={item.name}>
                  <StyledNavLink href={item.href} $current={item.current} className="nav-link">
                    {item.icon && <StyledNavIcon>{item.icon}</StyledNavIcon>}
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
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{team.name}</span>
                    </StyledNavLink>
                  </StyledNavItem>
                ))}
              </StyledNavItems>
            </StyledNavSection>
          )}
          
          {settingsItem && (
            <StyledSettingsContainer>
              <StyledNavLink href={settingsItem.href} $current={settingsItem.current} className="nav-link">
                {settingsItem.icon && <StyledNavIcon>{settingsItem.icon}</StyledNavIcon>}
                {settingsItem.name}
              </StyledNavLink>
            </StyledSettingsContainer>
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
          <span style={{ fontSize: '1.5rem' }}>×</span>
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
          <StyledTopBarLeft>
            <StyledMobileMenuButton onClick={() => toggleSidebar(true)}>
              <span style={{ fontSize: '1.5rem' }}>☰</span>
            </StyledMobileMenuButton>
            <StyledDivider />
          </StyledTopBarLeft>
          
          {showSearch && (
            <StyledSearchContainer>
              <StyledSearchInput 
                type="text"
                placeholder="Search"
                name="search"
              />
              <StyledSearchIcon>🔍</StyledSearchIcon>
            </StyledSearchContainer>
          )}
          
          <StyledUserActions>
            <StyledActionButton>
              <span style={{ fontSize: '1.5rem' }}>🔔</span>
            </StyledActionButton>
            
            <StyledDivider />
            
            {userProfile && (
              <StyledUserProfile>
                <StyledAvatar src={userProfile.avatar} alt="" />
                <StyledUserInfo>
                  <StyledUserName>{userProfile.name}</StyledUserName>
                  <StyledChevron>⌄</StyledChevron>
                </StyledUserInfo>
              </StyledUserProfile>
            )}
          </StyledUserActions>
        </StyledTopBar>
        
        <StyledMainArea>
          {children || (
            <div>
              <Typography variant="heading">Dashboard Content</Typography>
              <Typography color="muted">
                Your main dashboard content goes here.
              </Typography>
            </div>
          )}
        </StyledMainArea>
      </StyledMainContent>
    </StyledSidebarWrapper>
  )
}