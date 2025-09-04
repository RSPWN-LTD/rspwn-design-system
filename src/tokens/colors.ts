export const colors = {
  // Foundation Colors
  foundation: {
    black: '#000000',
    white: '#FFFFFF',
  },

  // Innovation Colors
  innovation: {
    primaryBlue: '#4A9EFF',
    secondaryPurple: '#8B5CF6',
  },

  // Text System
  text: {
    primary: '#FFFFFF',
    secondary: '#CCCCCC',
    muted: '#888888',
  },

  // Grayscale
  gray: {
    dark: '#0A0A0A',
    base: '#1A1A1A',
    light: '#2A2A2A',
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const

export type Colors = typeof colors