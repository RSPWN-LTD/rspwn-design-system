import React from 'react'
import styled, { css } from 'styled-components'

export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
  current?: boolean
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact'
  
  // Separator customization
  separator?: React.ReactNode
  
  // Navigation behavior
  maxItems?: number
  
  // Standard props
  className?: string
  'aria-label'?: string
}

const getBreadcrumbSize = (size: BreadcrumbProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        gap: ${({ theme }) => theme.spacing[2]};
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        gap: ${({ theme }) => theme.spacing[4]};
      `
    default:
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        gap: ${({ theme }) => theme.spacing[3]};
      `
  }
}

const BreadcrumbContainer = styled.nav<{ size: BreadcrumbProps['size'] }>`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  color: ${({ theme }) => theme.colors.gray.light};
  
  ${({ size }) => getBreadcrumbSize(size)}
`

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: inherit;
`

const BreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
  gap: inherit;
`

const BreadcrumbLink = styled.a<{ current?: boolean }>`
  text-decoration: none;
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  cursor: pointer;
  
  ${({ current, theme }) =>
    current
      ? css`
          color: ${theme.colors.foundation.white};
          font-weight: ${theme.typography.fontWeights.medium};
        `
      : css`
          color: ${theme.colors.gray.light};
          
          &:hover,
          &:focus {
            color: ${theme.colors.foundation.white};
          }
          
          &:focus {
            outline: 2px solid ${theme.colors.innovation.primaryBlue};
            outline-offset: 2px;
            border-radius: ${theme.radius.sm};
          }
        `}
`

const BreadcrumbButton = styled.button<{ current?: boolean }>`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  transition: color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  cursor: pointer;
  
  ${({ current, theme }) =>
    current
      ? css`
          color: ${theme.colors.foundation.white};
          font-weight: ${theme.typography.fontWeights.medium};
        `
      : css`
          color: ${theme.colors.gray.light};
          
          &:hover,
          &:focus {
            color: ${theme.colors.foundation.white};
          }
          
          &:focus {
            outline: 2px solid ${theme.colors.innovation.primaryBlue};
            outline-offset: 2px;
            border-radius: ${theme.radius.sm};
          }
        `}
`

const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.colors.gray.dark};
  user-select: none;
  pointer-events: none;
`

const BreadcrumbEllipsis = styled.span`
  color: ${({ theme }) => theme.colors.gray.dark};
  user-select: none;
  cursor: default;
  padding: ${({ theme }) => theme.spacing[1]};
`

const DefaultSeparator = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
)

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  size = 'md',
  variant = 'default',
  separator = <DefaultSeparator />,
  maxItems,
  className,
  'aria-label': ariaLabel = 'Breadcrumb navigation',
  ...props
}) => {
  const displayItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return items
    }

    const firstItem = items[0]
    const lastItems = items.slice(-(maxItems - 1))
    
    return [
      firstItem,
      { label: '...', href: undefined, onClick: undefined, current: false },
      ...lastItems
    ]
  }, [items, maxItems])

  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    const content = item.label === '...' ? (
      <BreadcrumbEllipsis>...</BreadcrumbEllipsis>
    ) : item.href ? (
      <BreadcrumbLink
        href={item.href}
        current={item.current || isLast}
        aria-current={item.current || isLast ? 'page' : undefined}
      >
        {item.label}
      </BreadcrumbLink>
    ) : item.onClick ? (
      <BreadcrumbButton
        onClick={item.onClick}
        current={item.current || isLast}
        aria-current={item.current || isLast ? 'page' : undefined}
        type="button"
      >
        {item.label}
      </BreadcrumbButton>
    ) : (
      <span style={{ 
        color: item.current || isLast ? 'inherit' : undefined,
        fontWeight: item.current || isLast ? 'inherit' : undefined 
      }}>
        {item.label}
      </span>
    )

    return (
      <BreadcrumbListItem key={index}>
        {content}
        {!isLast && item.label !== '...' && (
          <BreadcrumbSeparator aria-hidden="true">
            {separator}
          </BreadcrumbSeparator>
        )}
      </BreadcrumbListItem>
    )
  }

  return (
    <BreadcrumbContainer
      className={className}
      size={size}
      aria-label={ariaLabel}
      {...props}
    >
      <BreadcrumbList>
        {displayItems.map((item, index) => 
          renderBreadcrumbItem(item, index, index === displayItems.length - 1)
        )}
      </BreadcrumbList>
    </BreadcrumbContainer>
  )
}