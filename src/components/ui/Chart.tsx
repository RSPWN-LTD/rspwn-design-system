import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../foundation/Typography'

export interface ChartDataPoint {
  label: string
  value: number
  color?: string
}

export interface ChartProps {
  data: ChartDataPoint[]
  title?: string
  subtitle?: string
  type: 'bar' | 'line' | 'area' | 'pie'
  height?: number
  showLegend?: boolean
  showGrid?: boolean
  showTooltips?: boolean
  showValues?: boolean
  formatValue?: (value: number) => string
  className?: string
}

const StyledChartWrapper = styled.div`
  background: ${({ theme }) => theme.colors.foundation.black};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  transition: all 0.15s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray.base};
  }
`

const StyledChartHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const StyledChartTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foundation.white};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const StyledChartSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const StyledChartContent = styled.div<{ $height: number }>`
  position: relative;
  height: ${({ $height }) => $height}px;
  overflow: visible;
`

// Tooltip Styles
const StyledTooltip = styled.div<{ $visible: boolean; $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  background: ${({ theme }) => theme.colors.foundation.black};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foundation.white};
  pointer-events: none;
  z-index: 100;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translate(-50%, -100%) translateY(-8px);
  transition: opacity 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.gray.light};
  }
`

// Value Labels
const StyledValueLabel = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: translate(-50%, -100%) translateY(-4px);
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foundation.white};
  text-align: center;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
`

// Bar Chart Styles
const StyledBarChart = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 100%;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} 0;
`

const StyledBarColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
`

const StyledBar = styled.div<{ $height: number; $color?: string }>`
  width: 100%;
  max-width: 40px;
  height: ${({ $height }) => $height}%;
  background: ${({ $color, theme }) => $color || theme.colors.innovation.primaryBlue};
  border-radius: ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0 0;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(
      180deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      transparent 100%
    );
    border-radius: inherit;
  }
`

const StyledBarLabel = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

// Line/Area Chart Styles  
const StyledLineChart = styled.svg`
  width: 100%;
  height: 100%;
`

const StyledGrid = styled.g`
  stroke: ${({ theme }) => theme.colors.gray.light};
  stroke-width: 0.5;
  opacity: 0.3;
`

const StyledPath = styled.path<{ $isArea?: boolean; $color?: string }>`
  stroke: ${({ $color, theme }) => $color || theme.colors.innovation.primaryBlue};
  stroke-width: 2;
  fill: ${({ $isArea, $color, theme }) => 
    $isArea 
      ? `url(#gradient-${$color?.replace('#', '') || 'primary'})`
      : 'none'
  };
  transition: all 0.3s ease;
`

const StyledCircle = styled.circle<{ $color?: string }>`
  fill: ${({ $color, theme }) => $color || theme.colors.innovation.primaryBlue};
  stroke: ${({ theme }) => theme.colors.foundation.black};
  stroke-width: 2;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    r: 6;
    stroke-width: 3;
  }
`

// Pie Chart Styles
const StyledPieChart = styled.svg`
  width: 100%;
  height: 100%;
`

const StyledPieSlice = styled.path<{ $color?: string }>`
  fill: ${({ $color, theme }) => $color || theme.colors.innovation.primaryBlue};
  stroke: ${({ theme }) => theme.colors.foundation.black};
  stroke-width: 2;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
    stroke-width: 3;
  }
`

// Legend Styles
const StyledLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
`

const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`

const StyledLegendColor = styled.div<{ $color?: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color, theme }) => $color || theme.colors.innovation.primaryBlue};
`

const StyledLegendLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

export const Chart: React.FC<ChartProps> = ({
  data,
  title,
  subtitle,
  type,
  height = 300,
  showLegend = true,
  showGrid = true,
  showTooltips = true,
  showValues = false,
  formatValue = (value: number) => value.toLocaleString(),
  className
}) => {
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; content: string }>({
    visible: false,
    x: 0,
    y: 0,
    content: ''
  })

  const maxValue = Math.max(...data.map(d => d.value))
  const colors = [
    '#4A9EFF', // Primary Blue
    '#8B5CF6', // Secondary Purple  
    '#10B981', // Success Green
    '#F59E0B', // Warning Yellow
    '#EF4444', // Error Red
    '#6B7280', // Gray
    '#EC4899', // Pink
    '#8B5CF6'  // Purple variant
  ]

  const getColor = (index: number, customColor?: string): string => {
    return customColor || colors[index % colors.length]
  }

  const handleMouseEnter = (event: React.MouseEvent, item: ChartDataPoint) => {
    if (!showTooltips) return
    
    const rect = event.currentTarget.getBoundingClientRect()
    const containerRect = event.currentTarget.closest('[data-chart-container]')?.getBoundingClientRect()
    
    if (containerRect) {
      setTooltip({
        visible: true,
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top - containerRect.top,
        content: `${item.label}: ${formatValue(item.value)}`
      })
    }
  }

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }))
  }

  const renderBarChart = () => (
    <StyledBarChart>
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100
        const barColor = getColor(index, item.color)
        
        return (
          <StyledBarColumn key={item.label}>
            <StyledBar
              $height={barHeight}
              $color={barColor}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
            />
            {showValues && (
              <StyledValueLabel
                $x={0}
                $y={0}
                style={{
                  position: 'relative',
                  transform: 'none',
                  marginBottom: '4px',
                  background: 'transparent',
                  padding: 0
                }}
              >
                {formatValue(item.value)}
              </StyledValueLabel>
            )}
            <StyledBarLabel>{item.label}</StyledBarLabel>
          </StyledBarColumn>
        )
      })}
    </StyledBarChart>
  )

  const renderLineChart = (isArea = false) => {
    const width = 400
    const height = 200
    const padding = 40
    
    const xStep = (width - padding * 2) / (data.length - 1)
    const yScale = (height - padding * 2) / maxValue
    
    const points = data.map((item, index) => ({
      x: padding + index * xStep,
      y: height - padding - (item.value * yScale)
    }))
    
    const pathData = points.reduce((acc, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`
      }
      return `${acc} L ${point.x} ${point.y}`
    }, '')
    
    const areaPath = isArea 
      ? `${pathData} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`
      : pathData

    return (
      <StyledLineChart viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A9EFF" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#4A9EFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        
        {showGrid && (
          <StyledGrid>
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1={padding}
                y1={padding + (i * (height - padding * 2) / 4)}
                x2={width - padding}
                y2={padding + (i * (height - padding * 2) / 4)}
              />
            ))}
            {data.map((_, i) => (
              <line
                key={i}
                x1={padding + i * xStep}
                y1={padding}
                x2={padding + i * xStep}
                y2={height - padding}
              />
            ))}
          </StyledGrid>
        )}
        
        <StyledPath d={areaPath} $isArea={isArea} />
        
        {points.map((point, index) => (
          <StyledCircle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            onMouseEnter={(e) => {
              if (showTooltips) {
                const svgRect = e.currentTarget.closest('svg')?.getBoundingClientRect()
                const containerRect = e.currentTarget.closest('[data-chart-container]')?.getBoundingClientRect()
                
                if (svgRect && containerRect) {
                  const scaleX = svgRect.width / width
                  const scaleY = svgRect.height / height
                  
                  setTooltip({
                    visible: true,
                    x: point.x * scaleX,
                    y: point.y * scaleY,
                    content: `${data[index].label}: ${formatValue(data[index].value)}`
                  })
                }
              }
            }}
            onMouseLeave={handleMouseLeave}
          />
        ))}
        
        {showValues && points.map((point, index) => (
          <text
            key={index}
            x={point.x}
            y={point.y - 8}
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="600"
          >
            {formatValue(data[index].value)}
          </text>
        ))}
      </StyledLineChart>
    )
  }

  const renderPieChart = () => {
    const centerX = 150
    const centerY = 100
    const radius = 80
    const total = data.reduce((sum, item) => sum + item.value, 0)
    
    let currentAngle = -90 // Start from top
    
    return (
      <StyledPieChart viewBox="0 0 300 200">
        {data.map((item, index) => {
          const percentage = item.value / total
          const angle = percentage * 360
          const startAngle = currentAngle * (Math.PI / 180)
          const endAngle = (currentAngle + angle) * (Math.PI / 180)
          
          const x1 = centerX + radius * Math.cos(startAngle)
          const y1 = centerY + radius * Math.sin(startAngle)
          const x2 = centerX + radius * Math.cos(endAngle)
          const y2 = centerY + radius * Math.sin(endAngle)
          
          const largeArcFlag = angle > 180 ? 1 : 0
          
          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ')
          
          currentAngle += angle
          
          return (
            <g key={item.label}>
              <StyledPieSlice
                d={pathData}
                $color={getColor(index, item.color)}
                onMouseEnter={(e) => {
                  if (showTooltips) {
                    const svgRect = e.currentTarget.closest('svg')?.getBoundingClientRect()
                    const containerRect = e.currentTarget.closest('[data-chart-container]')?.getBoundingClientRect()
                    
                    if (svgRect && containerRect) {
                      setTooltip({
                        visible: true,
                        x: centerX * (svgRect.width / 300),
                        y: centerY * (svgRect.height / 200),
                        content: `${item.label}: ${formatValue(item.value)} (${Math.round(percentage * 100)}%)`
                      })
                    }
                  }
                }}
                onMouseLeave={handleMouseLeave}
              />
              {showValues && (
                <text
                  x={centerX + (radius * 0.7) * Math.cos((currentAngle - angle/2) * (Math.PI / 180))}
                  y={centerY + (radius * 0.7) * Math.sin((currentAngle - angle/2) * (Math.PI / 180))}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                >
                  {Math.round(percentage * 100)}%
                </text>
              )}
            </g>
          )
        })}
      </StyledPieChart>
    )
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart()
      case 'line':
        return renderLineChart(false)
      case 'area':
        return renderLineChart(true)
      case 'pie':
        return renderPieChart()
      default:
        return renderBarChart()
    }
  }

  return (
    <StyledChartWrapper className={className}>
      {(title || subtitle) && (
        <StyledChartHeader>
          {title && <StyledChartTitle>{title}</StyledChartTitle>}
          {subtitle && <StyledChartSubtitle>{subtitle}</StyledChartSubtitle>}
        </StyledChartHeader>
      )}
      
      <StyledChartContent $height={height} data-chart-container>
        {renderChart()}
        
        {/* Tooltip */}
        <StyledTooltip
          $visible={tooltip.visible}
          $x={tooltip.x}
          $y={tooltip.y}
        >
          {tooltip.content}
        </StyledTooltip>
      </StyledChartContent>
      
      {showLegend && (
        <StyledLegend>
          {data.map((item, index) => (
            <StyledLegendItem key={item.label}>
              <StyledLegendColor $color={getColor(index, item.color)} />
              <StyledLegendLabel>
                {item.label}
                {showValues && ` (${formatValue(item.value)})`}
              </StyledLegendLabel>
            </StyledLegendItem>
          ))}
        </StyledLegend>
      )}
    </StyledChartWrapper>
  )
}