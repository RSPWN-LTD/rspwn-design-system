import React from 'react'
import styled from 'styled-components'
import { BaseTemplate } from './BaseTemplate'
import { ConfigurableTemplateProps, HeaderProps, SidebarProps, MainContentProps, FooterProps } from './types'

interface DashboardTemplateProps extends ConfigurableTemplateProps {}

const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: 1fr;
  }
`

const StyledHeader = styled.header<{ 
  $sticky: boolean
  $height: string
  $background: HeaderProps['background']
  $border: boolean
}>`
  grid-area: header;
  display: flex;
  align-items: center;
  height: ${({ $height }) => $height};
  padding: 0 ${({ theme }) => theme.spacing['6']};
  
  ${({ $sticky }) => $sticky && `
    position: sticky;
    top: 0;
    z-index: 100;
  `}
  
  ${({ $background, theme }) => {
    switch ($background) {
      case 'dark':
        return `
          background-color: ${theme.colors.gray.dark};
          color: ${theme.colors.foundation.white};
        `
      case 'transparent':
        return 'background-color: transparent;'
      case 'default':
      default:
        return `
          background-color: ${theme.colors.foundation.white};
          color: ${theme.colors.gray.dark};
        `
    }
  }}
  
  ${({ $border, theme }) => $border && `
    border-bottom: 1px solid ${theme.colors.text.muted};
  `}
`

const StyledSidebar = styled.aside<{
  $width: string
  $collapsed: boolean
  $position: SidebarProps['position']
}>`
  grid-area: sidebar;
  width: ${({ $width, $collapsed }) => $collapsed ? '60px' : $width};
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-right: 1px solid ${({ theme }) => theme.colors.text.muted};
  transition: width 0.3s ease;
  overflow: hidden;
  
  ${({ $position }) => $position === 'right' && `
    border-right: none;
    border-left: 1px solid;
    order: 2;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const StyledMain = styled.main<{
  $maxWidth: string
  $padding: MainContentProps['padding']
}>`
  grid-area: main;
  overflow-y: auto;
  max-width: ${({ $maxWidth }) => $maxWidth};
  
  ${({ $padding, theme }) => {
    switch ($padding) {
      case 'none':
        return 'padding: 0;'
      case 'sm':
        return `padding: ${theme.spacing['4']};`
      case 'md':
        return `padding: ${theme.spacing['6']};`
      case 'lg':
        return `padding: ${theme.spacing['8']};`
      case 'xl':
        return `padding: ${theme.spacing['12']};`
      default:
        return `padding: ${theme.spacing['6']};`
    }
  }}
`

const StyledFooter = styled.footer<{
  $sticky: boolean
  $background: FooterProps['background']
  $border: boolean
}>`
  grid-area: footer;
  padding: ${({ theme }) => theme.spacing['4']} ${({ theme }) => theme.spacing['6']};
  
  ${({ $sticky }) => $sticky && `
    position: sticky;
    bottom: 0;
  `}
  
  ${({ $background, theme }) => {
    switch ($background) {
      case 'dark':
        return `
          background-color: ${theme.colors.gray.dark};
          color: ${theme.colors.foundation.white};
        `
      case 'subtle':
        return `background-color: ${theme.colors.gray.light};`
      case 'default':
      default:
        return `
          background-color: ${theme.colors.foundation.white};
          color: ${theme.colors.gray.dark};
        `
    }
  }}
  
  ${({ $border, theme }) => $border && `
    border-top: 1px solid ${theme.colors.text.muted};
  `}
`

const DashboardRoot: React.FC<DashboardTemplateProps> = ({ 
  children, 
  config,
  className,
  id 
}) => (
  <BaseTemplate config={config} className={className} id={id}>
    <DashboardContainer>
      {children}
    </DashboardContainer>
  </BaseTemplate>
)

const Header: React.FC<HeaderProps> = ({ 
  children, 
  sticky = true,
  height = '64px',
  background = 'default',
  border = true,
  className,
  id 
}) => (
  <StyledHeader 
    $sticky={sticky}
    $height={height}
    $background={background}
    $border={border}
    className={className}
    id={id}
  >
    {children}
  </StyledHeader>
)

const Sidebar: React.FC<SidebarProps> = ({ 
  children,
  width = '250px',
  position = 'left',
  collapsed = false,
  className,
  id 
}) => {
  const sidebarWidth = typeof width === 'string' ? width : '250px'
  
  return (
    <StyledSidebar
      $width={sidebarWidth}
      $collapsed={collapsed}
      $position={position}
      className={className}
      id={id}
    >
      {children}
    </StyledSidebar>
  )
}

const Main: React.FC<MainContentProps> = ({ 
  children,
  maxWidth = '100%',
  padding = 'md',
  className,
  id 
}) => (
  <StyledMain
    $maxWidth={maxWidth}
    $padding={padding}
    className={className}
    id={id}
  >
    {children}
  </StyledMain>
)

const Footer: React.FC<FooterProps> = ({ 
  children,
  sticky = false,
  background = 'subtle',
  border = true,
  className,
  id 
}) => (
  <StyledFooter
    $sticky={sticky}
    $background={background}
    $border={border}
    className={className}
    id={id}
  >
    {children}
  </StyledFooter>
)

export const DashboardTemplate = Object.assign(DashboardRoot, {
  Header,
  Sidebar,
  Main,
  Footer
})