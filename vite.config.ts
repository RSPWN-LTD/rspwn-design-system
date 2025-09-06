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
          formats: ['es', 'cjs']
        },
        minify: false,
        sourcemap: true,
        emptyOutDir: false,
        rollupOptions: {
          external: (id) => {
            // Externalize React and all its internals
            if (id === 'react' || id.startsWith('react/')) return true
            if (id === 'react-dom' || id.startsWith('react-dom/')) return true
            if (id === 'styled-components' || id.startsWith('styled-components/')) return true
            if (id === 'react-router-dom' || id.startsWith('react-router-dom/')) return true
            return false
          },
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'styled-components': 'styled',
              'react-router-dom': 'ReactRouterDOM'
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