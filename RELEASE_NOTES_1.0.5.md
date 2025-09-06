# Release Notes v1.0.5 - ReactCurrentDispatcher Fix

## 🔥 **Critical Bug Fix**
This release resolves the **ReactCurrentDispatcher error** that was preventing the library from working in React applications.

### **Issue Fixed**
- ❌ `Uncaught TypeError: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')`
- ❌ Components failing to render due to React hooks dispatcher conflicts
- ❌ Multiple React instances causing runtime errors

### **Root Cause**
The previous versions (≤1.0.4) were incorrectly bundling React into the library instead of treating it as an external dependency, causing multiple React instances to exist simultaneously.

## 🚀 **What's Fixed**

### **1. Dependency Configuration** ✅
- React moved from `dependencies` to `peerDependencies` only
- No React code bundled in the library output
- Consumers provide their own React instance

### **2. Build Configuration** ✅
- Enhanced Vite configuration with robust React externalization
- Both ESM (`index.js`) and CommonJS (`index.cjs`) formats
- Source maps included for debugging

### **3. TypeScript Support** ✅
- Complete TypeScript declarations (`.d.ts` files)
- Proper module resolution for library consumption
- Full IntelliSense support

### **4. React Compatibility** ✅
- React 18.x: ✅ Fully supported
- React 19.x: ✅ Fully supported
- Backward compatible with React ≥18.0.0

## 📦 **Build Output**

The library now correctly outputs:
```
dist/
├── index.js        # ESM bundle (React externalized)
├── index.cjs       # CommonJS bundle (React externalized)
├── index.d.ts      # TypeScript declarations
├── *.d.ts.map      # Declaration source maps
└── *.js.map        # Source maps
```

## 🎯 **Usage**

### Installation
```bash
npm install @rspwn/design-system@1.0.5 react react-dom styled-components
```

### Basic Usage
```jsx
import { Button, Typography, theme } from '@rspwn/design-system'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">RSPWN Gaming</Typography>
      <Button variant="primary">Get Started</Button>
    </ThemeProvider>
  )
}
```

## 🔧 **Migration from v1.0.4**

1. **Update the package:**
   ```bash
   npm install @rspwn/design-system@1.0.5
   ```

2. **No code changes required** - existing component usage remains the same

3. **Verify React version** - ensure you have React ≥18.0.0

## ⚡ **Performance Improvements**

- **Smaller bundle size** - React no longer bundled
- **Better tree shaking** - Only used components included
- **Faster startup** - Single React instance shared with your app

## 🛠 **For Developers**

### Peer Dependencies
```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0", 
  "styled-components": ">=6.0.0"
}
```

### Build Verification
React is properly externalized in both formats:
- **ESM**: `import React from "react"`
- **CommonJS**: `const React = require("react")`

---

## 🎉 **Result**

✅ **No more ReactCurrentDispatcher errors**  
✅ **React hooks work correctly**  
✅ **ThemeProvider integration works seamlessly**  
✅ **Compatible with React 18+ and 19+**  
✅ **Full TypeScript support**  

This release ensures the RSPWN Design System works perfectly in all React applications without any React dispatcher conflicts.