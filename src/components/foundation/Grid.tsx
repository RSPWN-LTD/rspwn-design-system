import React from 'react'
import styled, { css } from 'styled-components'

export type GridVariant = 'default' | 'cards' | 'sidebar' | 'dashboard' | 'auto'

export interface GridProps {
  variant?: GridVariant
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export interface GridItemProps {
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getVariantStyles = (variant: GridVariant) => {
  switch (variant) {
    case 'cards':
      return css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: ${({ theme }) => theme.spacing[6]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }
      `
    case 'sidebar':
      return css`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: ${({ theme }) => theme.spacing[6]};
        min-height: 100vh;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
        }
      `
    case 'dashboard':
      return css`
        display: grid;
        grid-template-areas: 
          "header header"
          "sidebar main";
        grid-template-columns: minmax(240px, 280px) 1fr;
        grid-template-rows: auto 1fr;
        gap: 0;
        min-height: 100vh;
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
          grid-template-areas: 
            "header"
            "sidebar"  
            "main";
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr;
          gap: 0;
        }
      `
    case 'auto':
      return css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          gap: ${({ theme }) => theme.spacing[6]};
        }
      `
    default: // 'default'
      return css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${({ theme }) => theme.spacing[4]};
        
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          grid-template-columns: 1fr;
        }
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          gap: ${({ theme }) => theme.spacing[6]};
        }
      `
  }
}

const StyledGrid = styled.div<GridProps>`
  box-sizing: border-box;
  width: 100%;
  
  ${({ variant = 'default' }) => getVariantStyles(variant)}
`

const StyledGridItem = styled.div<GridItemProps>`
  /* Grid items inherit their positioning from the parent grid variant */
`

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>
}

export const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  return <StyledGridItem {...props}>{children}</StyledGridItem>
}