import React, { createContext, forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import { createShouldForwardProp } from '../../utils/propFilters'

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  trigger?: 'click' | 'hover' | 'manual'
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'
  offset?: number
  showArrow?: boolean
  closeOnBlur?: boolean
  closeOnEsc?: boolean
  portal?: boolean
  children: React.ReactNode
}

export interface PopoverTriggerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement
  asChild?: boolean
}

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  minWidth?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
}

export interface PopoverArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

interface PopoverContextValue {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  triggerRef: React.RefObject<HTMLElement>
  contentRef: React.RefObject<HTMLDivElement>
  arrowRef: React.RefObject<HTMLDivElement>
  trigger: 'click' | 'hover' | 'manual'
  placement: string
  offset: number
  showArrow: boolean
  closeOnBlur: boolean
  closeOnEsc: boolean
  portal: boolean
  position: { x: number; y: number }
  arrowPosition: { x: number; y: number; rotation: number }
  updatePosition: () => void
}

const PopoverContext = createContext<PopoverContextValue | undefined>(undefined)

const usePopoverContext = () => {
  const context = useContext(PopoverContext)
  if (!context) {
    throw new Error('Popover components must be used within a Popover')
  }
  return context
}

const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`

const PopoverContentContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['isOpen', 'x', 'y', 'minWidth', 'maxWidth', 'maxHeight', 'portal'])
})<{
  isOpen?: boolean
  x?: number
  y?: number
  minWidth?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  portal?: boolean
}>`
  ${({ portal }) => portal ? css`
    position: fixed;
    z-index: ${({ theme }) => theme.zIndices.popover};
  ` : css`
    position: absolute;
    z-index: ${({ theme }) => theme.zIndices.popover};
  `}
  
  ${({ x = 0, y = 0 }) => css`
    left: ${x}px;
    top: ${y}px;
  `}
  
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  
  background: ${({ theme }) => theme.colors.gray.base};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  ${({ minWidth }) => minWidth && css`min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight}; overflow-y: auto;`}
`

const PopoverArrowContainer = styled.div.withConfig({
  shouldForwardProp: createShouldForwardProp(['x', 'y', 'rotation', 'size'])
})<{
  x?: number
  y?: number
  rotation?: number
  size?: number
}>`
  position: absolute;
  ${({ x = 0, y = 0 }) => css`
    left: ${x}px;
    top: ${y}px;
  `}
  
  width: ${({ size = 8 }) => size * 2}px;
  height: ${({ size = 8 }) => size * 2}px;
  transform: ${({ rotation = 0 }) => `rotate(${rotation}deg) translateX(-50%) translateY(-50%)`};
  transform-origin: center;
  z-index: ${({ theme }) => theme.zIndices.popover + 1};

  &::before {
    content: '';
    position: absolute;
    width: ${({ size = 8 }) => size}px;
    height: ${({ size = 8 }) => size}px;
    background: ${({ theme }) => theme.colors.gray.base};
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
    top: 50%;
    left: 50%;
    margin-left: -${({ size = 8 }) => size / 2}px;
    margin-top: -${({ size = 8 }) => size / 2}px;
  }
`

const calculatePosition = (
  triggerRect: DOMRect,
  contentRect: DOMRect,
  placement: string,
  offset: number,
  showArrow: boolean,
  arrowSize: number = 8
) => {
  const arrowOffset = showArrow ? arrowSize : 0
  const [position, alignment] = placement.split('-')

  let x = 0
  let y = 0
  let arrowX = 0
  let arrowY = 0
  let arrowRotation = 0

  // Calculate base position
  switch (position) {
    case 'top':
      x = triggerRect.left
      y = triggerRect.top - contentRect.height - offset - arrowOffset
      arrowX = triggerRect.left
      arrowY = triggerRect.top - arrowOffset
      arrowRotation = 0
      break
    case 'bottom':
      x = triggerRect.left
      y = triggerRect.bottom + offset + arrowOffset
      arrowX = triggerRect.left
      arrowY = triggerRect.bottom + arrowOffset
      arrowRotation = 180
      break
    case 'left':
      x = triggerRect.left - contentRect.width - offset - arrowOffset
      y = triggerRect.top
      arrowX = triggerRect.left - arrowOffset
      arrowY = triggerRect.top
      arrowRotation = -90
      break
    case 'right':
      x = triggerRect.right + offset + arrowOffset
      y = triggerRect.top
      arrowX = triggerRect.right + arrowOffset
      arrowY = triggerRect.top
      arrowRotation = 90
      break
  }

  // Apply alignment
  if (position === 'top' || position === 'bottom') {
    switch (alignment) {
      case 'start':
        // x already set correctly
        arrowX = triggerRect.left + triggerRect.width / 2
        break
      case 'end':
        x = triggerRect.right - contentRect.width
        arrowX = triggerRect.left + triggerRect.width / 2
        break
      default: // center
        x = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
        arrowX = triggerRect.left + triggerRect.width / 2
        break
    }
  } else if (position === 'left' || position === 'right') {
    switch (alignment) {
      case 'start':
        // y already set correctly
        arrowY = triggerRect.top + triggerRect.height / 2
        break
      case 'end':
        y = triggerRect.bottom - contentRect.height
        arrowY = triggerRect.top + triggerRect.height / 2
        break
      default: // center
        y = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2
        arrowY = triggerRect.top + triggerRect.height / 2
        break
    }
  }

  // Collision detection and adjustment
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const scrollX = window.scrollX
  const scrollY = window.scrollY

  // Adjust for viewport boundaries
  if (x < scrollX) {
    x = scrollX + 8
  } else if (x + contentRect.width > scrollX + viewportWidth) {
    x = scrollX + viewportWidth - contentRect.width - 8
  }

  if (y < scrollY) {
    y = scrollY + 8
  } else if (y + contentRect.height > scrollY + viewportHeight) {
    y = scrollY + viewportHeight - contentRect.height - 8
  }

  return {
    x,
    y,
    arrowX,
    arrowY,
    arrowRotation
  }
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(({
  isOpen: controlledIsOpen,
  onToggle,
  trigger = 'click',
  placement = 'bottom',
  offset = 8,
  showArrow = false,
  closeOnBlur = true,
  closeOnEsc = true,
  portal = true,
  children,
  ...props
}, ref) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const triggerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const setIsOpen = useCallback((newIsOpen: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen)
    }
    onToggle?.(newIsOpen)
  }, [controlledIsOpen, onToggle])

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !contentRef.current || !isOpen) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const contentRect = contentRef.current.getBoundingClientRect()
    
    const { x, y, arrowX, arrowY, arrowRotation } = calculatePosition(
      triggerRect,
      contentRect,
      placement,
      offset,
      showArrow
    )

    if (portal) {
      setPosition({ x, y })
    } else {
      // For non-portal positioning, calculate relative to trigger
      const containerRect = triggerRef.current.offsetParent?.getBoundingClientRect() || { left: 0, top: 0 }
      setPosition({
        x: x - containerRect.left,
        y: y - containerRect.top
      })
    }

    setArrowPosition({ x: arrowX, y: arrowY, rotation: arrowRotation })
  }, [isOpen, placement, offset, showArrow, portal])

  // Update position when opened or placement changes
  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition()
    }
  }, [isOpen, updatePosition])

  // Handle window resize and scroll
  useEffect(() => {
    if (!isOpen) return

    const handleResize = () => updatePosition()
    const handleScroll = () => updatePosition()

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen, updatePosition])

  // Handle click outside
  useEffect(() => {
    if (!closeOnBlur || !isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        triggerRef.current &&
        contentRef.current &&
        !triggerRef.current.contains(target) &&
        !contentRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeOnBlur, setIsOpen])

  // Handle escape key
  useEffect(() => {
    if (!closeOnEsc || !isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEsc, setIsOpen])

  const contextValue: PopoverContextValue = {
    isOpen,
    setIsOpen,
    triggerRef,
    contentRef,
    arrowRef,
    trigger,
    placement,
    offset,
    showArrow,
    closeOnBlur,
    closeOnEsc,
    portal,
    position,
    arrowPosition,
    updatePosition
  }

  return (
    <PopoverContext.Provider value={contextValue}>
      <PopoverContainer ref={ref} {...props}>
        {children}
      </PopoverContainer>
    </PopoverContext.Provider>
  )
})

Popover.displayName = 'Popover'

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(({
  children,
  asChild = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}, ref) => {
  const { isOpen, setIsOpen, triggerRef, trigger } = usePopoverContext()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (trigger === 'click') {
      setIsOpen(!isOpen)
    }
    onClick?.(event)
  }

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (trigger === 'hover') {
      setIsOpen(true)
    }
    onMouseEnter?.(event)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (trigger === 'hover') {
      setIsOpen(false)
    }
    onMouseLeave?.(event)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: (node: HTMLElement) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        if (triggerRef && 'current' in triggerRef) (triggerRef as any).current = node
      },
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      ...(children.props || {})
    })
  }

  return React.cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      if (ref) {
        if (typeof ref === 'function') ref(node)
        else if (ref && 'current' in ref) (ref as any).current = node
      }
      if (triggerRef && 'current' in triggerRef) (triggerRef as any).current = node
    },
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    'aria-expanded': isOpen,
    'aria-haspopup': true,
    ...children.props
  })
})

PopoverTrigger.displayName = 'PopoverTrigger'

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(({
  children,
  minWidth,
  maxWidth,
  maxHeight,
  ...props
}, ref) => {
  const { isOpen, contentRef, position, portal } = usePopoverContext()

  const content = (
    <PopoverContentContainer
      ref={(node) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        if (contentRef && 'current' in contentRef) (contentRef as any).current = node
      }}
      isOpen={isOpen}
      x={position.x}
      y={position.y}
      minWidth={minWidth}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      portal={portal}
      role="dialog"
      aria-modal={false}
      {...props}
    >
      {children}
    </PopoverContentContainer>
  )

  if (portal && typeof document !== 'undefined') {
    return createPortal(content, document.body)
  }

  return content
})

PopoverContent.displayName = 'PopoverContent'

export const PopoverArrow = forwardRef<HTMLDivElement, PopoverArrowProps>(({
  size = 8,
  ...props
}, ref) => {
  const { isOpen, arrowRef, arrowPosition, portal } = usePopoverContext()

  if (!isOpen) return null

  const arrow = (
    <PopoverArrowContainer
      ref={(node) => {
        if (ref) {
          if (typeof ref === 'function') ref(node)
          else ref.current = node
        }
        if (arrowRef && 'current' in arrowRef) (arrowRef as any).current = node
      }}
      x={arrowPosition.x}
      y={arrowPosition.y}
      rotation={arrowPosition.rotation}
      size={size}
      {...props}
    />
  )

  if (portal && typeof document !== 'undefined') {
    return createPortal(arrow, document.body)
  }

  return arrow
})

PopoverArrow.displayName = 'PopoverArrow'