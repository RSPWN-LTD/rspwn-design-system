import React from 'react'
import styled from 'styled-components'
import { BaseTemplate } from './BaseTemplate'
import { Grid } from '../../foundation/Grid'
import { Stack } from '../../foundation/Stack'
import { Typography } from '../../foundation/Typography'

export interface DashboardTemplateProps {
  children: React.ReactNode
  className?: string
}

interface DashboardPartProps {
  children: React.ReactNode
  className?: string
}

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.foundation.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base}40;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;
`

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray.dark};
  border-right: 1px solid ${({ theme }) => theme.colors.gray.base}40;
  padding: ${({ theme }) => theme.spacing[6]};
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base}40;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`

const StyledMain = styled.main`
  padding: ${({ theme }) => theme.spacing[6]};
  overflow-y: auto;
  box-sizing: border-box;
`

const DashboardRoot: React.FC<DashboardTemplateProps> = ({ 
  children, 
  className
}) => (
  <BaseTemplate variant="fullscreen" className={className}>
    <Grid variant="dashboard">
      {children}
    </Grid>
  </BaseTemplate>
)

const Header: React.FC<DashboardPartProps> = ({ children, className }) => (
  <div style={{ gridArea: 'header' }}>
    <StyledHeader className={className}>
      <Stack variant="nav">
        <Typography variant="brand">RSPWN</Typography>
        {children}
      </Stack>
    </StyledHeader>
  </div>
)

const Sidebar: React.FC<DashboardPartProps> = ({ children, className }) => (
  <div style={{ gridArea: 'sidebar' }}>
    <StyledSidebar className={className}>
      <Stack variant="divided">
        {children}
      </Stack>
    </StyledSidebar>
  </div>
)

const Main: React.FC<DashboardPartProps> = ({ children, className }) => (
  <div style={{ gridArea: 'main' }}>
    <StyledMain className={className}>
      <Stack variant="default">
        {children}
      </Stack>
    </StyledMain>
  </div>
)

export const DashboardTemplate = Object.assign(DashboardRoot, {
  Header,
  Sidebar,
  Main
})