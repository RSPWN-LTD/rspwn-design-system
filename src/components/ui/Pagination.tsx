import React from 'react'
import styled, { css } from 'styled-components'

export interface PaginationProps {
  // Pagination state
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  
  // Visual variants
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal' | 'compact'
  
  // Display options
  showFirstLast?: boolean
  showPrevNext?: boolean
  showPageNumbers?: boolean
  maxVisiblePages?: number
  
  // Labels
  previousLabel?: string
  nextLabel?: string
  firstLabel?: string
  lastLabel?: string
  
  // State
  disabled?: boolean
  
  // Standard props
  className?: string
  'aria-label'?: string
}

const getPaginationSize = (size: PaginationProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        
        button {
          min-width: 32px;
          height: 32px;
          padding: ${({ theme }) => theme.spacing[2]};
        }
        
        .page-info {
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.base};
        
        button {
          min-width: 48px;
          height: 48px;
          padding: ${({ theme }) => theme.spacing[4]};
        }
        
        .page-info {
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
      `
    default:
      return css`
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        
        button {
          min-width: 40px;
          height: 40px;
          padding: ${({ theme }) => theme.spacing[3]};
        }
        
        .page-info {
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
      `
  }
}

const PaginationContainer = styled.nav<{
  size: PaginationProps['size']
  variant: PaginationProps['variant']
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  
  ${({ size }) => getPaginationSize(size)}
  
  ${({ variant }) =>
    variant === 'minimal' &&
    css`
      gap: ${({ theme }) => theme.spacing[3]};
    `}
`

const PaginationButton = styled.button<{
  isActive?: boolean
  variant: PaginationProps['variant']
  disabled?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.base};
  background: transparent;
  color: ${({ theme }) => theme.colors.gray.light};
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  user-select: none;
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.gray.dark};
    color: ${({ theme }) => theme.colors.foundation.white};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.innovation.primaryBlue};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.innovation.primaryBlue};
      color: ${theme.colors.foundation.white};
      border-color: ${theme.colors.innovation.primaryBlue};
      
      &:hover:not(:disabled) {
        background: ${theme.colors.innovation.primaryBlue};
        opacity: 0.9;
      }
    `}
  
  ${({ variant }) =>
    variant === 'minimal' &&
    css`
      background: none;
      border: none;
      
      &:hover:not(:disabled) {
        background: none;
        color: ${({ theme }) => theme.colors.innovation.primaryBlue};
      }
    `}
  
  svg {
    width: 16px;
    height: 16px;
  }
`

const PaginationEllipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.gray.dark};
  user-select: none;
  pointer-events: none;
`

const PageInfo = styled.div`
  color: ${({ theme }) => theme.colors.gray.light};
  white-space: nowrap;
  margin: 0 ${({ theme }) => theme.spacing[3]};
`

const PrevIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41 1.41z"/>
  </svg>
)

const FirstIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
  </svg>
)

const LastIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
  </svg>
)

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  variant = 'default',
  showFirstLast = true,
  showPrevNext = true,
  showPageNumbers = true,
  maxVisiblePages = 7,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  firstLabel = 'First',
  lastLabel = 'Last',
  disabled = false,
  className,
  'aria-label': ariaLabel = 'Pagination navigation',
  ...props
}) => {
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const half = Math.floor(maxVisiblePages / 2)
    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, start + maxVisiblePages - 1)

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1)
    }

    const pages: (number | string)[] = []
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Add ellipsis and first/last pages if needed
    if (start > 1) {
      if (start > 2) {
        pages.unshift('...')
      }
      pages.unshift(1)
    }
    
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push('...')
      }
      pages.push(totalPages)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage && !disabled) {
      onPageChange(page)
    }
  }

  if (variant === 'compact') {
    return (
      <PaginationContainer
        className={className}
        size={size}
        variant={variant}
        role="navigation"
        aria-label={ariaLabel}
        {...props}
      >
        {showPrevNext && (
          <PaginationButton
            variant={variant}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={disabled || currentPage <= 1}
            aria-label={previousLabel}
          >
            <PrevIcon />
          </PaginationButton>
        )}
        
        <PageInfo className="page-info">
          Page {currentPage} of {totalPages}
        </PageInfo>
        
        {showPrevNext && (
          <PaginationButton
            variant={variant}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={disabled || currentPage >= totalPages}
            aria-label={nextLabel}
          >
            <NextIcon />
          </PaginationButton>
        )}
      </PaginationContainer>
    )
  }

  if (variant === 'minimal') {
    return (
      <PaginationContainer
        className={className}
        size={size}
        variant={variant}
        role="navigation"
        aria-label={ariaLabel}
        {...props}
      >
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={disabled || currentPage <= 1}
        >
          ← {previousLabel}
        </PaginationButton>
        
        <PageInfo className="page-info">
          {currentPage} / {totalPages}
        </PageInfo>
        
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={disabled || currentPage >= totalPages}
        >
          {nextLabel} →
        </PaginationButton>
      </PaginationContainer>
    )
  }

  return (
    <PaginationContainer
      className={className}
      size={size}
      variant={variant}
      role="navigation"
      aria-label={ariaLabel}
      {...props}
    >
      {showFirstLast && (
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(1)}
          disabled={disabled || currentPage <= 1}
          aria-label={firstLabel}
        >
          <FirstIcon />
        </PaginationButton>
      )}
      
      {showPrevNext && (
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={disabled || currentPage <= 1}
          aria-label={previousLabel}
        >
          <PrevIcon />
        </PaginationButton>
      )}

      {showPageNumbers && visiblePages.map((page, index) => {
        if (page === '...') {
          return <PaginationEllipsis key={`ellipsis-${index}`}>…</PaginationEllipsis>
        }
        
        const pageNumber = page as number
        return (
          <PaginationButton
            key={pageNumber}
            variant={variant}
            isActive={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
            disabled={disabled}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
          >
            {pageNumber}
          </PaginationButton>
        )
      })}

      {showPrevNext && (
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={disabled || currentPage >= totalPages}
          aria-label={nextLabel}
        >
          <NextIcon />
        </PaginationButton>
      )}
      
      {showFirstLast && (
        <PaginationButton
          variant={variant}
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage >= totalPages}
          aria-label={lastLabel}
        >
          <LastIcon />
        </PaginationButton>
      )}
    </PaginationContainer>
  )
}