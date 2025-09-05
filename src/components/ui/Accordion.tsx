import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export interface AccordionItemProps {
  id: string
  title: string
  children: React.ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  variant?: 'default' | 'outlined' | 'filled'
  allowMultiple?: boolean
  defaultOpenItems?: string[]
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[]
  className?: string
}

const getVariantStyles = (variant: AccordionProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.gray.light};
        border-radius: ${({ theme }) => theme.radius.md};

        & > *:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
        }
      `
    case 'filled':
      return css`
        background-color: ${({ theme }) => theme.colors.gray.light};
        border-radius: ${({ theme }) => theme.radius.md};
        
        & > * {
          background-color: ${({ theme }) => theme.colors.gray.light};
        }

        & > *:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};
        }
      `
    default:
      return css`
        & > *:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
        }
      `
  }
}

const AccordionContainer = styled.div<{ variant?: AccordionProps['variant'] }>`
  ${({ variant }) => getVariantStyles(variant)}
`

const AccordionItemContainer = styled.div<{ 
  variant?: AccordionProps['variant']
  isFirst?: boolean
  isLast?: boolean 
}>`
  ${({ variant, theme }) => {
    if (variant === 'outlined' || variant === 'filled') {
      return css`
        &:first-child {
          border-top-left-radius: ${theme.radius.md};
          border-top-right-radius: ${theme.radius.md};
        }
        &:last-child {
          border-bottom-left-radius: ${theme.radius.md};
          border-bottom-right-radius: ${theme.radius.md};
        }
      `
    }
    return ''
  }}
`

const AccordionHeader = styled.button<{ 
  disabled?: boolean
  isOpen?: boolean 
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  
  padding: ${({ theme }) => theme.spacing[4]};
  
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme, disabled }) => 
    disabled ? theme.colors.text.muted : theme.colors.text.primary
  };
  text-align: left;
  
  transition: all ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray.base};
  }
  
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray.base};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }
`

const ChevronIcon = styled.div<{ isOpen?: boolean }>`
  width: 16px;
  height: 16px;
  position: relative;
  flex-shrink: 0;
  transition: transform ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  
  ${({ isOpen }) => isOpen && css`
    transform: rotate(180deg);
  `}
  
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 5px;
    height: 5px;
    border-right: 2px solid ${({ theme }) => theme.colors.text.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary};
  }
`

const AccordionContent = styled.div<{ isOpen?: boolean }>`
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
  
  ${({ isOpen }) => css`
    max-height: ${isOpen ? '1000px' : '0'};
  `}
`

const AccordionContentInner = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

const AccordionItem: React.FC<AccordionItemProps & {
  isOpen: boolean
  onToggle: () => void
  variant?: AccordionProps['variant']
  isFirst?: boolean
  isLast?: boolean
}> = ({ 
  id, 
  title, 
  children, 
  disabled = false, 
  isOpen, 
  onToggle, 
  variant,
  isFirst,
  isLast 
}) => {
  return (
    <AccordionItemContainer 
      variant={variant} 
      isFirst={isFirst} 
      isLast={isLast}
    >
      <AccordionHeader
        disabled={disabled}
        isOpen={isOpen}
        onClick={disabled ? undefined : onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        {title}
        <ChevronIcon isOpen={isOpen} />
      </AccordionHeader>
      <AccordionContent 
        isOpen={isOpen}
        id={`accordion-content-${id}`}
        aria-hidden={!isOpen}
      >
        <AccordionContentInner>
          {children}
        </AccordionContentInner>
      </AccordionContent>
    </AccordionItemContainer>
  )
}

export const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>
} = ({
  variant = 'default',
  allowMultiple = false,
  defaultOpenItems = [],
  children,
  className
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems)
  
  const items = React.Children.toArray(children) as React.ReactElement<AccordionItemProps>[]

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      } else {
        return prev.includes(itemId) ? [] : [itemId]
      }
    })
  }

  return (
    <AccordionContainer variant={variant} className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.props.id}
          {...item.props}
          isOpen={openItems.includes(item.props.id)}
          onToggle={() => toggleItem(item.props.id)}
          variant={variant}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </AccordionContainer>
  )
}

// Export the AccordionItem component for use with Accordion
Accordion.Item = ({ id, title, children, disabled }: AccordionItemProps) => (
  <div data-accordion-item-id={id} data-title={title} data-disabled={disabled}>
    {children}
  </div>
)