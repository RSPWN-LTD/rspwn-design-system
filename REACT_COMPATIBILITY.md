# React Compatibility Guide

This document outlines the React compatibility requirements and configurations for the RSPWN Design System.

## React Version Support

- **Minimum**: React 18.0.0
- **Tested**: React 18.2.0, React 19.x
- **Recommended**: React >=18.0.0

## Key Configuration Details

### 1. Peer Dependencies
React, ReactDOM, and styled-components are declared as peer dependencies to avoid bundling:

```json
"peerDependencies": {
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0",
  "styled-components": ">=6.0.0",
  "react-router-dom": ">=6.0.0"
}
```

### 2. Build Configuration
Vite is configured to externalize React and all its internals:

```javascript
external: (id) => {
  if (id === 'react' || id.startsWith('react/')) return true
  if (id === 'react-dom' || id.startsWith('react-dom/')) return true
  if (id === 'styled-components' || id.startsWith('styled-components/')) return true
  if (id === 'react-router-dom' || id.startsWith('react-router-dom/')) return true
  return false
}
```

### 3. TypeScript Configuration
Library build uses proper module resolution for external dependencies:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "allowImportingTsExtensions": false,
    "moduleResolution": "node"
  }
}
```

## Troubleshooting ReactCurrentDispatcher Errors

If you encounter "Cannot read properties of undefined (reading 'ReactCurrentDispatcher')" errors:

1. **Check React Version**: Ensure your application uses React >=18.0.0
2. **Verify Single React Instance**: Make sure only one React instance is installed
3. **Check Bundle Analysis**: Verify React is not bundled in the library
4. **Clear Cache**: Clear node_modules and package-lock.json, then reinstall

## Usage in Applications

### Installation
```bash
npm install @rspwn/design-system react react-dom styled-components
```

### Vite Configuration (Consumer App)
Add React deduplication if needed:
```javascript
export default defineConfig({
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})
```

### ThemeProvider Setup
Always wrap your app with the theme provider:
```jsx
import { ThemeProvider } from 'styled-components'
import { theme } from '@rspwn/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your components */}
    </ThemeProvider>
  )
}
```

## Build Outputs

The library provides both ESM and CommonJS formats:
- `dist/index.js` (ESM)
- `dist/index.cjs` (CommonJS)
- Source maps included for debugging

Both formats properly externalize React dependencies.