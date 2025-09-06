import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps } from './Box'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface ContainerProps extends Omit<BoxProps, 'maxWidth'> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  centerContent?: boolean
}

const getMaxWidth = (size: ContainerProps['size']) => {
  switch (size) {
    case 'sm':
      return '640px'
    case 'md':
      return '768px'
    case 'lg':
      return '1024px'
    case 'xl':
      return '1280px'
    case '2xl':
      return '1536px'
    case 'full':
      return '100%'
    default:
      return '1280px' // xl as default
  }
}

const StyledContainer = styled(Box).withConfig({
  shouldForwardProp: createShouldForwardProp(['size', 'centerContent'])
})<ContainerProps>`
  width: 100%;
  max-width: ${({ size }) => getMaxWidth(size)};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing[4]};
  padding-right: ${({ theme }) => theme.spacing[4]};
  
  ${({ centerContent }) => 
    centerContent && `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.spacing[6]};
    padding-right: ${({ theme }) => theme.spacing[6]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: ${({ theme }) => theme.spacing[8]};
    padding-right: ${({ theme }) => theme.spacing[8]};
  }
`

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  centerContent = false,
  children,
  ...props
}) => {
  return (
    <StyledContainer size={size} centerContent={centerContent} {...props}>
      {children}
    </StyledContainer>
  )
}