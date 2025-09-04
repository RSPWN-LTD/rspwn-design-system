# NPM Deployment Setup

This document explains how to set up automated NPM publishing for the RSPWN Design System.

## Prerequisites

1. **NPM Account**: You need an NPM account with publishing rights to the package name
2. **GitHub Repository**: The code should be hosted on GitHub
3. **NPM Token**: An automation token from NPM for CI/CD

## Setup Steps

### 1. Create NPM Token

1. Go to [npmjs.com](https://npmjs.com) and log in
2. Click on your profile → "Access Tokens"
3. Click "Generate New Token" → "Automation"
4. Copy the generated token

### 2. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to "Settings" → "Secrets and variables" → "Actions"
3. Add the following secret:
   - `NPM_TOKEN`: Your NPM automation token

### 3. Update Repository URL

Update the repository URL in `package.json`:
```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/YOUR-USERNAME/rspwn-design-system.git"
}
```

## Deployment Methods

### Method 1: Manual Workflow Dispatch
1. Go to "Actions" tab in your GitHub repository
2. Select "Publish to NPM" workflow
3. Click "Run workflow"
4. Choose version bump type (patch/minor/major)
5. The workflow will:
   - Bump version in package.json
   - Build the library
   - Publish to NPM
   - Deploy Storybook to GitHub Pages

### Method 2: GitHub Release (Recommended)
1. Create a new release on GitHub
2. Tag it with a semantic version (e.g., v1.0.0)
3. Publish the release
4. The workflow will automatically:
   - Build and publish to NPM
   - Deploy Storybook to GitHub Pages

## Files Modified/Created

- **package.json**: Updated with publishing configuration
- **vite.config.ts**: Added library build configuration  
- **.github/workflows/publish.yml**: GitHub Actions workflow
- **NPM_DEPLOYMENT_SETUP.md**: This documentation

## Package Configuration Changes

The following changes were made to `package.json`:
- Removed `"private": true`
- Added publishing metadata (description, keywords, author, etc.)
- Configured build outputs and entry points
- Added `build:lib` script for library compilation
- Set up peer dependencies for React and styled-components

## Testing Locally

Before publishing, test the build locally:
```bash
npm run build:lib
```

This will create a `dist/` folder with the compiled library files.

## Troubleshooting

### Common Issues
1. **Package name already taken**: Change the name in package.json
2. **NPM token invalid**: Regenerate token and update GitHub secret
3. **Build fails**: Ensure all dependencies are properly installed
4. **TypeScript errors**: Run `npm run lint` to check for issues

### Version Management
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Manual dispatch allows choosing version bump type
- GitHub releases should use version tags (v1.0.0, v1.1.0, etc.)