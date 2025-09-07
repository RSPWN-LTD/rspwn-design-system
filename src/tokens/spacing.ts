export const spacing = {
  // Base scale
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
  
  // Extended micro spacing
  '0.5': '0.125rem',  // 2px
  '1.5': '0.375rem',  // 6px
  '2.5': '0.625rem',  // 10px
  '3.5': '0.875rem',  // 14px
  
  // Extended macro spacing
  '72': '18rem',      // 288px
  '80': '20rem',      // 320px
  '96': '24rem',      // 384px
  
  // Semantic spacing tokens
  'xs': '0.5rem',     // 8px
  'sm': '0.75rem',    // 12px
  'md': '1rem',       // 16px
  'lg': '1.5rem',     // 24px
  'xl': '2rem',       // 32px
  '2xl': '3rem',      // 48px
  '3xl': '4rem',      // 64px
  
  // Auto value
  'auto': 'auto',
  
  // Contextual spacing
  'tight': '0.5rem',    // 8px - tight spacing between related elements
  'normal': '1rem',     // 16px - normal spacing
  'loose': '1.5rem',    // 24px - loose spacing
  'section': '3rem',    // 48px - section-level spacing
} as const

// Golden ratio spacing for harmonious layouts
export const goldenSpacing = {
  'φ1': '1rem',      // 16px
  'φ2': '1.618rem',  // ~26px (φ * base)
  'φ3': '2.618rem',  // ~42px (φ² * base) 
  'φ4': '4.236rem',  // ~68px (φ³ * base)
  'φ5': '6.854rem',  // ~110px (φ⁴ * base)
} as const

// Spacing calculation utilities
export const spacingUtils = {
  multiply: (base: keyof typeof spacing, factor: number): string => {
    const baseValue = spacing[base]
    if (baseValue === 'auto' || baseValue === '0') return baseValue
    return `calc(${baseValue} * ${factor})`
  },
  
  add: (space1: keyof typeof spacing, space2: keyof typeof spacing): string => {
    const value1 = spacing[space1]
    const value2 = spacing[space2]
    if (value1 === 'auto' || value2 === 'auto') return 'auto'
    if (value1 === '0') return value2
    if (value2 === '0') return value1
    return `calc(${value1} + ${value2})`
  },
  
  subtract: (space1: keyof typeof spacing, space2: keyof typeof spacing): string => {
    const value1 = spacing[space1]
    const value2 = spacing[space2]
    if (value1 === 'auto' || value2 === 'auto') return 'auto'
    if (value2 === '0') return value1
    return `calc(${value1} - ${value2})`
  }
}

export type Spacing = typeof spacing
export type SpacingKey = keyof Spacing
export type GoldenSpacing = typeof goldenSpacing
export type SpacingValue = Spacing[SpacingKey]