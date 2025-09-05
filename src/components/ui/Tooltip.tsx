import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { createPortal } from 'react-dom'

export interface TooltipProps {
  // Content
  content: React.ReactNode
  children: React.ReactNode
  
  // Positioning
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
  
  // Trigger behavior
  trigger?: 'hover' | 'focus' | 'click' | 'manual'
  
  // Timing
  delay?: number
  hideDelay?: number
  
  // Visual styling
  arrow?: boolean
  
  // State management
  open?: boolean
  onOpenChange?: (open: boolean) => void
  
  // Accessibility
  'aria-label'?: string
  
  // Standard props
  className?: string
  disabled?: boolean
}

interface TooltipContentProps {
  placement: TooltipProps['placement']
  arrow?: boolean
  targetRect?: DOMRect | null
  show: boolean
}

const getArrowStyles = (placement: TooltipProps['placement']) => {
  const arrowSize = '6px'
  
  const baseArrow = css`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  `
  
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return css`
        ${baseArrow}
        top: 100%;
        border-left: ${arrowSize} solid transparent;
        border-right: ${arrowSize} solid transparent;
        border-top: ${arrowSize} solid ${({ theme }) => theme.colors.gray.dark};
        ${placement === 'top-start' && 'left: 12px;'}
        ${placement === 'top-end' && 'right: 12px;'}
        ${placement === 'top' && 'left: 50%; transform: translateX(-50%);'}
      `
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return css`
        ${baseArrow}
        bottom: 100%;
        border-left: ${arrowSize} solid transparent;
        border-right: ${arrowSize} solid transparent;
        border-bottom: ${arrowSize} solid ${({ theme }) => theme.colors.gray.dark};
        ${placement === 'bottom-start' && 'left: 12px;'}
        ${placement === 'bottom-end' && 'right: 12px;'}
        ${placement === 'bottom' && 'left: 50%; transform: translateX(-50%);'}
      `
    case 'left':
    case 'left-start':
    case 'left-end':
      return css`
        ${baseArrow}
        left: 100%;
        border-top: ${arrowSize} solid transparent;
        border-bottom: ${arrowSize} solid transparent;
        border-left: ${arrowSize} solid ${({ theme }) => theme.colors.gray.dark};
        ${placement === 'left-start' && 'top: 12px;'}
        ${placement === 'left-end' && 'bottom: 12px;'}
        ${placement === 'left' && 'top: 50%; transform: translateY(-50%);'}
      `
    case 'right':
    case 'right-start':
    case 'right-end':
      return css`
        ${baseArrow}
        right: 100%;
        border-top: ${arrowSize} solid transparent;
        border-bottom: ${arrowSize} solid transparent;
        border-right: ${arrowSize} solid ${({ theme }) => theme.colors.gray.dark};
        ${placement === 'right-start' && 'top: 12px;'}
        ${placement === 'right-end' && 'bottom: 12px;'}
        ${placement === 'right' && 'top: 50%; transform: translateY(-50%);'}
      `
    default:
      return ''
  }
}

const getTooltipPosition = (placement: TooltipProps['placement'], targetRect: DOMRect | null) => {
  if (!targetRect) return { top: 0, left: 0 }
  
  const offset = 8
  
  switch (placement) {
    case 'top':
      return {
        top: targetRect.top - offset,
        left: targetRect.left + targetRect.width / 2,
        transform: 'translate(-50%, -100%)',
      }
    case 'top-start':
      return {
        top: targetRect.top - offset,
        left: targetRect.left,
        transform: 'translateY(-100%)',
      }
    case 'top-end':
      return {
        top: targetRect.top - offset,
        left: targetRect.right,
        transform: 'translate(-100%, -100%)',
      }
    case 'bottom':
      return {
        top: targetRect.bottom + offset,
        left: targetRect.left + targetRect.width / 2,
        transform: 'translateX(-50%)',
      }
    case 'bottom-start':
      return {
        top: targetRect.bottom + offset,
        left: targetRect.left,
      }
    case 'bottom-end':
      return {
        top: targetRect.bottom + offset,
        left: targetRect.right,
        transform: 'translateX(-100%)',
      }
    case 'left':
      return {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.left - offset,
        transform: 'translate(-100%, -50%)',
      }
    case 'left-start':
      return {
        top: targetRect.top,
        left: targetRect.left - offset,
        transform: 'translateX(-100%)',
      }
    case 'left-end':
      return {
        top: targetRect.bottom,
        left: targetRect.left - offset,
        transform: 'translate(-100%, -100%)',
      }
    case 'right':
      return {
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.right + offset,
        transform: 'translateY(-50%)',
      }
    case 'right-start':
      return {
        top: targetRect.top,
        left: targetRect.right + offset,
      }
    case 'right-end':
      return {
        top: targetRect.bottom,
        left: targetRect.right + offset,
        transform: 'translateY(-100%)',
      }
    default:
      return { top: 0, left: 0 }
  }
}

const TooltipContent = styled.div<TooltipContentProps>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.foundation.white};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.snug};
  max-width: 250px;
  word-wrap: break-word;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut},
              visibility ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeInOut};
  pointer-events: none;
  
  ${({ targetRect, placement }) => {
    if (!targetRect) return ''
    const position = getTooltipPosition(placement, targetRect)
    return css`
      top: ${position.top}px;
      left: ${position.left}px;
      transform: ${position.transform || 'none'};
    `
  }}
  
  &::after {
    content: '';
    ${({ placement, arrow }) => arrow && getArrowStyles(placement)}
  }
`

const TriggerWrapper = styled.div<{ disabled?: boolean }>`
  display: inline-block;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  trigger = 'hover',
  delay = 0,
  hideDelay = 0,
  arrow = true,
  open: controlledOpen,
  onOpenChange,
  'aria-label': ariaLabel,
  className,
  disabled = false,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const hideTimeoutRef = useRef<number | null>(null)

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      setTargetRect(triggerRef.current.getBoundingClientRect())
    }
  }, [])

  const setOpen = useCallback((open: boolean) => {
    if (disabled) return
    
    if (controlledOpen === undefined) {
      setInternalOpen(open)
    }
    onOpenChange?.(open)
    
    if (open) {
      updatePosition()
    }
  }, [disabled, controlledOpen, onOpenChange, updatePosition])

  const handleMouseEnter = () => {
    if (trigger !== 'hover' || disabled) return
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setOpen(true), delay)
    } else {
      setOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger !== 'hover' || disabled) return
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    if (hideDelay > 0) {
      hideTimeoutRef.current = setTimeout(() => setOpen(false), hideDelay)
    } else {
      setOpen(false)
    }
  }

  const handleFocus = () => {
    if (trigger !== 'focus' || disabled) return
    setOpen(true)
  }

  const handleBlur = () => {
    if (trigger !== 'focus' || disabled) return
    setOpen(false)
  }

  const handleClick = () => {
    if (trigger !== 'click' || disabled) return
    setOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        updatePosition()
      }
    }

    const handleResize = () => {
      if (isOpen) {
        updatePosition()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, trigger, setOpen, updatePosition])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const tooltipContent = (
    <TooltipContent
      className={className}
      placement={placement}
      arrow={arrow}
      targetRect={targetRect}
      show={isOpen}
      role="tooltip"
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </TooltipContent>
  )

  return (
    <>
      <TriggerWrapper
        ref={triggerRef}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        aria-describedby={isOpen ? 'tooltip' : undefined}
      >
        {children}
      </TriggerWrapper>
      {typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}
    </>
  )
}