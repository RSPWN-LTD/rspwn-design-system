import React from 'react'
import styled, { css } from 'styled-components'

export interface TableColumn<T = any> {
  key: string
  header: React.ReactNode
  accessor?: keyof T | ((row: T) => React.ReactNode)
  sortable?: boolean
  width?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  align?: 'left' | 'center' | 'right'
  render?: (value: any, row: T, index: number) => React.ReactNode
}

export interface TableProps<T = any> {
  // Data
  data: T[]
  columns: TableColumn<T>[]
  
  // Visual variants
  variant?: 'default' | 'bordered' | 'striped' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  
  // Features
  sortable?: boolean
  selectable?: boolean
  hoverable?: boolean
  
  // Selection
  selectedRows?: Set<number>
  onSelectionChange?: (selectedRows: Set<number>) => void
  
  // Sorting
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  onSort?: (column: string, direction: 'asc' | 'desc') => void
  
  // Loading & Empty states
  loading?: boolean
  loadingRows?: number
  emptyMessage?: string
  
  // Styling
  maxHeight?: string | number
  stickyHeader?: boolean
  
  // Standard props
  className?: string
  'aria-label'?: string
}

const getTableSize = (size: TableProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        th, td {
          padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
          font-size: ${({ theme }) => theme.typography.fontSizes.xs};
        }
      `
    case 'lg':
      return css`
        th, td {
          padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
          font-size: ${({ theme }) => theme.typography.fontSizes.base};
        }
      `
    default:
      return css`
        th, td {
          padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
          font-size: ${({ theme }) => theme.typography.fontSizes.sm};
        }
      `
  }
}

const getTableVariant = (variant: TableProps['variant']) => {
  switch (variant) {
    case 'bordered':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.gray.dark};
        
        th, td {
          border-right: 1px solid ${({ theme }) => theme.colors.gray.dark};
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
        }
        
        th:last-child, td:last-child {
          border-right: none;
        }
        
        tr:last-child td {
          border-bottom: none;
        }
      `
    case 'striped':
      return css`
        tbody tr:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.02);
        }
      `
    case 'minimal':
      return css`
        border: none;
        
        th {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
        }
        
        td {
          border: none;
        }
      `
    default:
      return css`
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
        
        thead th {
          border-bottom: 2px solid ${({ theme }) => theme.colors.gray.dark};
        }
        
        tbody tr {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
        }
        
        tbody tr:last-child {
          border-bottom: none;
        }
      `
  }
}

const TableContainer = styled.div<{
  maxHeight?: string | number
}>`
  width: 100%;
  overflow: auto;
  
  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight};
    `}
`

const StyledTable = styled.table<{
  variant: TableProps['variant']
  size: TableProps['size']
}>`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  color: ${({ theme }) => theme.colors.foundation.white};
  
  ${({ size }) => getTableSize(size)}
  ${({ variant }) => getTableVariant(variant)}
`

const TableHeader = styled.thead<{
  sticky?: boolean
}>`
  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`

const TableHeaderCell = styled.th<{
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  width?: string | number
  minWidth?: string | number
  maxWidth?: string | number
}>`
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.foundation.white};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  text-align: ${({ align }) => align || 'left'};
  user-select: none;
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};
    `}
  
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};
    `}
  
  ${({ sortable }) =>
    sortable &&
    css`
      cursor: pointer;
      transition: background-color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray.dark};
      }
    `}
`

const SortButton = styled.button<{
  active?: boolean
  direction?: 'asc' | 'desc'
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
  width: 100%;
  justify-content: inherit;
  
  svg {
    width: 16px;
    height: 16px;
    opacity: ${({ active }) => active ? 1 : 0.5};
    transform: ${({ direction }) => direction === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  }
`

const TableBody = styled.tbody``

const TableRow = styled.tr<{
  hoverable?: boolean
  selected?: boolean
  selectable?: boolean
}>`
  ${({ hoverable }) =>
    hoverable &&
    css`
      transition: background-color ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    `}
  
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(74, 158, 255, 0.1);
    `}
  
  ${({ selectable }) =>
    selectable &&
    css`
      cursor: pointer;
    `}
`

const TableCell = styled.td<{
  align?: 'left' | 'center' | 'right'
}>`
  text-align: ${({ align }) => align || 'left'};
  vertical-align: top;
`

const SelectionCell = styled.td`
  width: 40px;
  text-align: center;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.colors.innovation.primaryBlue};
`


const EmptyRow = styled.tr`
  td {
    padding: ${({ theme }) => theme.spacing[6]};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.light};
  }
`

const SkeletonCell = styled.div`
  height: 16px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray.dark} 25%,
    ${({ theme }) => theme.colors.gray.light} 50%,
    ${({ theme }) => theme.colors.gray.dark} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${({ theme }) => theme.radius.sm};
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

const SortIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 14l5-5 5 5z"/>
  </svg>
)

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  variant = 'default',
  size = 'md',
  sortable = false,
  selectable = false,
  hoverable = true,
  selectedRows = new Set(),
  onSelectionChange,
  sortColumn,
  sortDirection,
  onSort,
  loading = false,
  loadingRows = 5,
  emptyMessage = 'No data available',
  maxHeight,
  stickyHeader = false,
  className,
  'aria-label': ariaLabel = 'Data table',
  ...props
}: TableProps<T>) => {
  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable || !onSort) return
    
    const newDirection = sortColumn === column.key && sortDirection === 'asc' ? 'desc' : 'asc'
    onSort(column.key, newDirection)
  }
  
  const handleRowSelection = (index: number, checked: boolean) => {
    if (!onSelectionChange) return
    
    const newSelection = new Set(selectedRows)
    if (checked) {
      newSelection.add(index)
    } else {
      newSelection.delete(index)
    }
    onSelectionChange(newSelection)
  }
  
  const handleSelectAll = (checked: boolean) => {
    if (!onSelectionChange) return
    
    if (checked) {
      const allIndices = new Set(data.map((_, index) => index))
      onSelectionChange(allIndices)
    } else {
      onSelectionChange(new Set())
    }
  }
  
  const getCellValue = (row: T, column: TableColumn<T>) => {
    if (column.render) {
      const index = data.indexOf(row)
      const value = column.accessor 
        ? typeof column.accessor === 'function' 
          ? column.accessor(row)
          : row[column.accessor]
        : null
      return column.render(value, row, index)
    }
    
    if (column.accessor) {
      return typeof column.accessor === 'function' 
        ? column.accessor(row)
        : row[column.accessor]
    }
    
    return row[column.key]
  }
  
  const renderLoadingSkeleton = () => {
    return Array.from({ length: loadingRows }, (_, index) => (
      <TableRow key={`loading-${index}`}>
        {selectable && (
          <SelectionCell>
            <SkeletonCell style={{ width: '16px', height: '16px', margin: '0 auto' }} />
          </SelectionCell>
        )}
        {columns.map((column) => (
          <TableCell key={column.key} align={column.align}>
            <SkeletonCell />
          </TableCell>
        ))}
      </TableRow>
    ))
  }
  
  const allSelected = data.length > 0 && selectedRows.size === data.length
  const someSelected = selectedRows.size > 0 && selectedRows.size < data.length
  
  return (
    <TableContainer maxHeight={maxHeight}>
      <StyledTable
        className={className}
        variant={variant}
        size={size}
        role="table"
        aria-label={ariaLabel}
        {...props}
      >
        <TableHeader sticky={stickyHeader}>
          <tr>
            {selectable && (
              <TableHeaderCell as="th" width={40}>
                <Checkbox
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelected
                  }}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  aria-label="Select all rows"
                />
              </TableHeaderCell>
            )}
            {columns.map((column) => (
              <TableHeaderCell
                key={column.key}
                sortable={sortable && column.sortable}
                align={column.align}
                width={column.width}
                minWidth={column.minWidth}
                maxWidth={column.maxWidth}
                onClick={() => sortable && column.sortable && handleSort(column)}
              >
                {sortable && column.sortable ? (
                  <SortButton
                    active={sortColumn === column.key}
                    direction={sortColumn === column.key ? sortDirection : undefined}
                  >
                    {column.header}
                    <SortIcon />
                  </SortButton>
                ) : (
                  column.header
                )}
              </TableHeaderCell>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {loading ? (
            renderLoadingSkeleton()
          ) : data.length === 0 ? (
            <EmptyRow>
              <td colSpan={columns.length + (selectable ? 1 : 0)}>
                {emptyMessage}
              </td>
            </EmptyRow>
          ) : (
            data.map((row, index) => (
              <TableRow
                key={index}
                hoverable={hoverable}
                selected={selectedRows.has(index)}
                selectable={selectable}
                onClick={() => selectable && handleRowSelection(index, !selectedRows.has(index))}
              >
                {selectable && (
                  <SelectionCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedRows.has(index)}
                      onChange={(e) => handleRowSelection(index, e.target.checked)}
                      aria-label={`Select row ${index + 1}`}
                    />
                  </SelectionCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.key} align={column.align}>
                    {getCellValue(row, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}