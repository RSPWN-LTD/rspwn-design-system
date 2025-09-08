import React from 'react'
import styled, { css } from 'styled-components'

export type StackVariant = 'default' | 'tight' | 'loose' | 'divided' | 'nav'

export interface StackProps {
  variant?: StackVariant
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const getVariantStyles = (variant: StackVariant) => {
  switch (variant) {
    case 'tight':
      return css`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[2]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          flex-direction: row;
          align-items: center;
        }
      `
    case 'loose':
      return css`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[8]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          gap: ${({ theme }) => theme.spacing[12]};
        }
      `
    case 'divided':
      return css`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[6]};
        
        & > *:not(:last-child)::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-color: ${({ theme }) => theme.colors.gray.base}40;
          margin-top: ${({ theme }) => theme.spacing[6]};
        }
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          flex-direction: row;
          align-items: center;
          
          & > *:not(:last-child)::after {
            display: none;
          }
          
          & > *:not(:last-child) {
            position: relative;
            
            &::after {
              content: '';
              display: block;
              position: absolute;
              right: -${({ theme }) => theme.spacing[3]};
              top: 50%;
              transform: translateY(-50%);
              width: 1px;
              height: 60%;
              background-color: ${({ theme }) => theme.colors.gray.base}40;
              margin: 0;
            }
          }
        }
      `
    case 'nav':
      return css`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[1]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          flex-direction: row;
          align-items: center;
          gap: ${({ theme }) => theme.spacing[6]};
        }
      `
    default:
      return css`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[4]};
        
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          gap: ${({ theme }) => theme.spacing[6]};
        }
      `
  }
}

const StyledStack = styled.div<StackProps>`
  box-sizing: border-box;
  
  ${({ variant = 'default' }) => getVariantStyles(variant)}
`

export const Stack: React.FC<StackProps> = ({ 
  as = 'div',
  variant = 'default', 
  children, 
  ...props 
}) => {
  return (
    <StyledStack as={as} variant={variant} {...props}>
      {children}
    </StyledStack>
  )
}