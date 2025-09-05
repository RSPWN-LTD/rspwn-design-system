import React, { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children: React.ReactNode
  className?: string
}

const getSizeStyles = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        max-width: 400px;
        width: 90%;
      `
    case 'lg':
      return css`
        max-width: 800px;
        width: 90%;
      `
    case 'xl':
      return css`
        max-width: 1200px;
        width: 95%;
      `
    case 'full':
      return css`
        width: 100vw;
        height: 100vh;
        max-width: none;
        max-height: none;
        border-radius: 0;
      `
    default: // md
      return css`
        max-width: 600px;
        width: 90%;
      `
  }
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.foundation.black}80;
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
`

const ModalContent = styled.div<{ size?: ModalProps['size'], isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray.base};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  ${({ size }) => getSizeStyles(size)}
  
  transform: ${({ isOpen }) => isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-20px)'};
  transition: transform ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeOut};
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  flex-shrink: 0;
`

const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
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

const ModalBody = styled.div`
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

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className,
}) => {
  // Handle escape key
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      onClose()
    }
  }, [closeOnEscape, isOpen, onClose])

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }, [closeOnOverlayClick, onClose])

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Add escape listener
      document.addEventListener('keydown', handleEscape)
      
      // Focus the modal
      const modalElement = document.querySelector('[data-modal="true"]') as HTMLElement
      if (modalElement) {
        modalElement.focus()
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscape])

  // Don't render if not open
  if (!isOpen) return null

  const modalContent = (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent
        size={size}
        isOpen={isOpen}
        className={className}
        data-modal="true"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && (
              <ModalTitle id="modal-title">{title}</ModalTitle>
            )}
            {showCloseButton && (
              <CloseButton
                onClick={onClose}
                aria-label="Close modal"
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
          </ModalHeader>
        )}
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Overlay>
  )

  // Render into portal
  return createPortal(modalContent, document.body)
}

Modal.displayName = 'Modal'