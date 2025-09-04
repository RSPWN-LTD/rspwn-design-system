import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/tokens/theme'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'gray',
          value: '#1A1A1A',
        },
        {
          name: 'light',
          value: '#2A2A2A',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
}

export default preview