import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Skeleton } from './Skeleton'

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onError' | 'onLoad'> {
  // Core props
  src: string
  alt: string
  
  // Dimensions
  width?: string | number
  height?: string | number
  aspectRatio?: string
  
  // Fit modes
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  objectPosition?: string
  
  // Loading behavior
  loading?: 'lazy' | 'eager'
  placeholder?: React.ReactNode
  fallback?: string | React.ReactNode
  
  // States
  showSkeleton?: boolean
  fadeIn?: boolean
  
  // Callbacks
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  
  // Standard props
  className?: string
}

interface ImageState {
  isLoading: boolean
  hasError: boolean
  isInView: boolean
}

const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'aspectRatio'].includes(prop)
})<{
  width?: string | number
  height?: string | number
  aspectRatio?: string
}>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.base};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  
  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === 'number' ? `${height}px` : height};
    `}
  
  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      aspect-ratio: ${aspectRatio};
    `}
`

const StyledImage = styled.img<{
  objectFit?: ImageProps['objectFit']
  objectPosition?: string
  fadeIn?: boolean
  isLoaded: boolean
}>`
  width: 100%;
  height: 100%;
  display: block;
  
  ${({ objectFit }) =>
    objectFit &&
    css`
      object-fit: ${objectFit};
    `}
  
  ${({ objectPosition }) =>
    objectPosition &&
    css`
      object-position: ${objectPosition};
    `}
  
  ${({ fadeIn, isLoaded }) =>
    fadeIn &&
    css`
      opacity: ${isLoaded ? 1 : 0};
      transition: opacity ${({ theme }) => theme.durations.normal} ${({ theme }) => theme.easings.easeInOut};
    `}
`

const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  z-index: 1;
`

const FallbackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.gray.light};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[4]};
  z-index: 2;
`

const FallbackIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  opacity: 0.5;
`

const FallbackText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  opacity: 0.7;
  max-width: 200px;
  word-wrap: break-word;
`

const SkeletonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

// Default broken image icon
const BrokenImageIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
    <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" />
  </svg>
)

// Hook for intersection observer (lazy loading)
const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [elementRef, options])

  return isInView
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  objectPosition,
  loading = 'lazy',
  placeholder,
  fallback,
  showSkeleton = true,
  fadeIn = true,
  onLoad,
  onError,
  className,
  ...props
}) => {
  const [state, setState] = useState<ImageState>({
    isLoading: true,
    hasError: false,
    isInView: loading === 'eager'
  })
  
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldLazyLoad = loading === 'lazy'
  
  // Use intersection observer for lazy loading
  const isInView = useIntersectionObserver(
    containerRef,
    { threshold: 0.1 }
  )
  
  // Update isInView state
  useEffect(() => {
    if (!shouldLazyLoad || isInView) {
      setState(prev => ({ ...prev, isInView: true }))
    }
  }, [isInView, shouldLazyLoad])
  
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      hasError: false
    }))
    setIsLoaded(true)
    onLoad?.(event)
  }
  
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      hasError: true
    }))
    setIsLoaded(false)
    onError?.(event)
  }
  
  const shouldShowImage = state.isInView && !state.hasError
  const shouldShowPlaceholder = state.isLoading && !state.hasError
  const shouldShowFallback = state.hasError
  
  const renderFallback = () => {
    if (typeof fallback === 'string') {
      return (
        <StyledImage
          src={fallback}
          alt={alt}
          objectFit={objectFit}
          objectPosition={objectPosition}
          fadeIn={false}
          isLoaded={true}
          onError={() => {
            // If fallback image also fails, show default fallback
            setState(prev => ({ ...prev, hasError: true }))
          }}
        />
      )
    }
    
    if (React.isValidElement(fallback)) {
      return fallback
    }
    
    // Default fallback
    return (
      <FallbackContainer>
        <FallbackIcon>
          <BrokenImageIcon />
        </FallbackIcon>
        <FallbackText>
          Unable to load image
        </FallbackText>
      </FallbackContainer>
    )
  }
  
  const renderPlaceholder = () => {
    if (placeholder) {
      return (
        <PlaceholderContainer>
          {placeholder}
        </PlaceholderContainer>
      )
    }
    
    if (showSkeleton) {
      return (
        <SkeletonContainer>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="pulse"
          />
        </SkeletonContainer>
      )
    }
    
    return (
      <PlaceholderContainer>
        Loading...
      </PlaceholderContainer>
    )
  }
  
  // Filter out custom props that shouldn't be passed to the DOM - these are already destructured
  const domProps = props

  return (
    <ImageContainer
      ref={containerRef}
      className={className}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      {...domProps}
    >
      {shouldShowImage && (
        <StyledImage
          src={src}
          alt={alt}
          objectFit={objectFit}
          objectPosition={objectPosition}
          fadeIn={fadeIn}
          isLoaded={isLoaded}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
      
      {shouldShowPlaceholder && renderPlaceholder()}
      {shouldShowFallback && renderFallback()}
    </ImageContainer>
  )
}