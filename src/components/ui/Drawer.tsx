import React, { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { css, keyframes } from 'styled-components'

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  side?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title?: string
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children: React.ReactNode
  className?: string
}

type DrawerState = 'closed' | 'entering' | 'open' | 'exiting'

const getSizeStyles = (side: DrawerProps['side'], size: DrawerProps['size']) => {
  const isHorizontal = side === 'left' || side === 'right'
  
  if (size === 'full') {
    return css`
      ${isHorizontal ? 'width: 100vw;' : 'height: 100vh;'}
    `
  }
  
  const sizes = {
    sm: isHorizontal ? '300px' : '200px',
    md: isHorizontal ? '400px' : '300px',
    lg: isHorizontal ? '500px' : '400px',
    xl: isHorizontal ? '600px' : '500px',
  }
  
  return css`
    ${isHorizontal ? `width: ${sizes[size || 'md']};` : `height: ${sizes[size || 'md']};`}
    max-${isHorizontal ? 'width' : 'height'}: 90v${isHorizontal ? 'w' : 'h'};
  `
}

// Slide in animations for each side
const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

const slideInTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`

const slideInBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`

// Slide out animations for each side
const slideOutLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`

const slideOutRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`

const slideOutTop = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`

const slideOutBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const getDrawerAnimation = (side: DrawerProps['side'], state: DrawerState) => {
  if (state === 'closed') return 'none'
  
  const animations = {
    left: {
      entering: slideInLeft,
      open: 'none',
      exiting: slideOutLeft,
    },
    right: {
      entering: slideInRight,
      open: 'none', 
      exiting: slideOutRight,
    },
    top: {
      entering: slideInTop,
      open: 'none',
      exiting: slideOutTop,
    },
    bottom: {
      entering: slideInBottom,
      open: 'none',
      exiting: slideOutBottom,
    },
  }
  
  return animations[side || 'right'][state as keyof typeof animations.right] || 'none'
}

const getOverlayAnimation = (state: DrawerState) => {
  if (state === 'closed') return 'none'
  
  return {
    entering: fadeIn,
    open: 'none',
    exiting: fadeOut,
  }[state] || 'none'
}

const Overlay = styled.div<{ state: DrawerState }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.foundation.black}60;
  backdrop-filter: blur(2px);
  z-index: 1000;
  
  ${({ state }) => {
    const animation = getOverlayAnimation(state)
    return css`
      animation: ${animation !== 'none' ? css`${animation} 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards` : 'none'};
      opacity: ${state === 'open' ? 1 : state === 'entering' ? 0 : state === 'exiting' ? 1 : 0};
    `
  }}
`

const DrawerContent = styled.div<{
  side?: DrawerProps['side']
  size?: DrawerProps['size']
  state: DrawerState
}>`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.gray.base};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  
  ${({ side }) => {
    switch (side) {
      case 'left':
        return css`
          top: 0;
          left: 0;
          bottom: 0;
          border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
        `
      case 'right':
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          border-left: 1px solid ${({ theme }) => theme.colors.gray.light};
        `
      case 'top':
        return css`
          top: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
        `
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
        `
      default:
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          border-left: 1px solid ${({ theme }) => theme.colors.gray.light};
        `
    }
  }}
  
  ${({ side, size }) => getSizeStyles(side, size)}
  
  ${({ side, state }) => {
    const animation = getDrawerAnimation(side, state)
    
    // Set initial position based on side
    const getInitialTransform = (side: DrawerProps['side']) => {
      switch (side) {
        case 'left': return 'translateX(-100%)'
        case 'right': return 'translateX(100%)'
        case 'top': return 'translateY(-100%)'
        case 'bottom': return 'translateY(100%)'
        default: return 'translateX(100%)'
      }
    }
    
    return css`
      transform: ${state === 'open' ? 'translate3d(0, 0, 0)' : 
                  state === 'entering' ? getInitialTransform(side) : 
                  state === 'exiting' ? 'translate3d(0, 0, 0)' : 
                  getInitialTransform(side)};
      animation: ${animation !== 'none' ? css`${animation} 350ms cubic-bezier(0.25, 0.8, 0.25, 1) forwards` : 'none'};
    `
  }}
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  flex-shrink: 0;
  min-height: 60px;
`

const DrawerTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all ${({ theme }) => theme.durations.fast} ${({ theme }) => theme.easings.easeOut};
  position: relative;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.light}20;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray.light}20;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.innovation.primaryBlue}40;
  }
  
  &:active {
    background-color: ${({ theme }) => theme.colors.gray.light}40;
  }
  
  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

const DrawerBody = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
  flex: 1;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray.dark};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray.light};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.muted};
  }
`

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  side = 'right',
  size = 'md',
  title,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className,
}) => {
  const [state, setState] = useState<DrawerState>('closed')

  // Handle state transitions
  useEffect(() => {
    if (isOpen && state === 'closed') {
      setState('entering')
      // Transition to open after animation starts
      const timer = setTimeout(() => setState('open'), 50)
      return () => clearTimeout(timer)
    } else if (!isOpen && (state === 'open' || state === 'entering')) {
      setState('exiting')
      // Transition to closed after animation completes
      const timer = setTimeout(() => setState('closed'), 350)
      return () => clearTimeout(timer)
    }
  }, [isOpen, state])

  // Handle escape key
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape' && (state === 'open' || state === 'entering')) {
      onClose()
    }
  }, [closeOnEscape, state, onClose])

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }, [closeOnOverlayClick, onClose])

  // Focus management and body scroll lock
  useEffect(() => {
    if (state === 'entering' || state === 'open') {
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Add escape listener
      document.addEventListener('keydown', handleEscape)
      
      // Focus the drawer after it starts opening
      if (state === 'entering') {
        const timer = setTimeout(() => {
          const drawerElement = document.querySelector('[data-drawer="true"]') as HTMLElement
          if (drawerElement) {
            drawerElement.focus()
          }
        }, 100)
        return () => clearTimeout(timer)
      }
    } else if (state === 'closed') {
      // Restore body scroll
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      if (state === 'closed') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [state, handleEscape])

  // Don't render if completely closed
  if (state === 'closed') return null

  const drawerContent = (
    <>
      <Overlay state={state} onClick={handleOverlayClick} />
      <DrawerContent
        side={side}
        size={size}
        state={state}
        className={className}
        data-drawer="true"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "drawer-title" : undefined}
      >
        {(title || showCloseButton) && (
          <DrawerHeader>
            {title && (
              <DrawerTitle id="drawer-title">{title}</DrawerTitle>
            )}
            {showCloseButton && (
              <CloseButton
                onClick={onClose}
                aria-label="Close drawer"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CloseButton>
            )}
          </DrawerHeader>
        )}
        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </>
  )

  // Render into portal
  return createPortal(drawerContent, document.body)
}

Drawer.displayName = 'Drawer'