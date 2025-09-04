import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'RSPWNDesignSystem',
          fileName: 'index',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'styled-components'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'styled-components': 'styled'
            }
          }
        }
      }
    }
  }

  return {
    plugins: [react()],
    base: '/',
  }
})