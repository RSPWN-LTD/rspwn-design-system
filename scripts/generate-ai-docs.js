#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get project root
const projectRoot = path.resolve(__dirname, '..')

// Helper function to extract argTypes from story files
function extractArgTypes(content) {
  const argTypesRegex = /argTypes:\s*{([^}]+(?:{[^}]*}[^}]*)*)}/s
  const match = content.match(argTypesRegex)
  
  if (!match) return {}
  
  const argTypesContent = match[1]
  const propRegex = /(\w+):\s*{[^}]*options:\s*\[([^\]]+)\][^}]*}/g
  const props = {}
  
  let propMatch
  while ((propMatch = propRegex.exec(argTypesContent)) !== null) {
    const propName = propMatch[1]
    const optionsString = propMatch[2]
    const options = optionsString
      .split(',')
      .map(option => option.trim().replace(/['"]/g, ''))
    props[propName] = options
  }
  
  return props
}

// Helper function to extract TypeScript interface properties
function extractInterfaceProps(content) {
  const interfaceRegex = /export interface \w+Props\s*{([^}]+)}/s
  const match = content.match(interfaceRegex)
  
  if (!match) return {}
  
  const interfaceContent = match[1]
  const propRegex = /(\w+)\??:\s*([^;\n]+)/g
  const props = {}
  
  let propMatch
  while ((propMatch = propRegex.exec(interfaceContent)) !== null) {
    const propName = propMatch[1]
    const propType = propMatch[2].trim()
    props[propName] = propType
  }
  
  return props
}

// Helper function to extract stories/examples
function extractStories(content) {
  const storyRegex = /export const (\w+): Story = {[\s\S]*?}/g
  const stories = []
  
  let match
  while ((match = storyRegex.exec(content)) !== null) {
    const storyName = match[1]
    const storyContent = match[0]
    
    // Extract args if present
    const argsMatch = storyContent.match(/args:\s*{([^}]+)}/s)
    const args = argsMatch ? argsMatch[1].trim() : null
    
    stories.push({
      name: storyName,
      args: args
    })
  }
  
  return stories
}

// Helper function to get component title from story meta
function getComponentTitle(content) {
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
  return titleMatch ? titleMatch[1] : 'Unknown'
}

// Helper function to get import name from story file
function getComponentName(content) {
  const importMatch = content.match(/import\s*{\s*(\w+)\s*}\s*from/)
  return importMatch ? importMatch[1] : 'Unknown'
}

// Main function to process all story files
async function generateAIDocs() {
  const storiesPattern = path.join(projectRoot, 'src', 'components', '**', '*.stories.tsx')
  const storyFiles = []
  
  // Recursively find all story files
  function findStoryFiles(dir) {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        findStoryFiles(fullPath)
      } else if (item.endsWith('.stories.tsx')) {
        storyFiles.push(fullPath)
      }
    }
  }
  
  findStoryFiles(path.join(projectRoot, 'src', 'components'))
  
  const components = []
  
  for (const storyFile of storyFiles) {
    const storyContent = fs.readFileSync(storyFile, 'utf-8')
    const componentFile = storyFile.replace('.stories.tsx', '.tsx')
    
    let componentContent = ''
    if (fs.existsSync(componentFile)) {
      componentContent = fs.readFileSync(componentFile, 'utf-8')
    }
    
    const componentName = getComponentName(storyContent)
    const title = getComponentTitle(storyContent)
    const argTypes = extractArgTypes(storyContent)
    const interfaceProps = extractInterfaceProps(componentContent)
    const stories = extractStories(storyContent)
    
    // Merge argTypes and interface props for complete prop information
    const allProps = { ...interfaceProps }
    Object.keys(argTypes).forEach(prop => {
      if (allProps[prop]) {
        allProps[prop] = `${allProps[prop]} | Options: ${argTypes[prop].join(', ')}`
      } else {
        allProps[prop] = `Options: ${argTypes[prop].join(', ')}`
      }
    })
    
    components.push({
      name: componentName,
      title: title,
      category: title.split('/')[0],
      props: allProps,
      stories: stories,
      filePath: path.relative(projectRoot, storyFile)
    })
  }
  
  // Generate the AI-ready documentation
  const aiDocsContent = generateAIDocsContent(components)
  
  // Write to file
  const outputPath = path.join(projectRoot, 'AI_COMPONENT_DOCS.txt')
  fs.writeFileSync(outputPath, aiDocsContent, 'utf-8')
  
  console.log(`✅ AI-ready documentation generated: ${outputPath}`)
  console.log(`📊 Documented ${components.length} components`)
}

function generateAIDocsContent(components) {
  const now = new Date().toISOString().split('T')[0]
  
  let content = `# RSPWN Design System - AI Component Documentation
Generated on: ${now}

This file contains comprehensive information about all components in the RSPWN Design System.
Use this as a reference when helping users implement components from @rspwn/design-system.

## Import Information

All components can be imported from '@rspwn/design-system':

\`\`\`jsx
import { 
  // Foundation Components
  Typography, Box, Container,
  
  // UI Components  
  Button, Card, Input, Select, Checkbox, Switch, 
  Modal, Drawer, Toast, Navigation, Footer, 
  Accordion, DatePicker
} from '@rspwn/design-system'

// Theme and tokens
import { theme, colors, typography, spacing } from '@rspwn/design-system'
\`\`\`

## Theme Provider Setup

All components require ThemeProvider wrapper:

\`\`\`jsx
import { ThemeProvider } from 'styled-components'
import { theme } from '@rspwn/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your components */}
    </ThemeProvider>
  )
}
\`\`\`

## Component Reference

`

  // Group components by category
  const componentsByCategory = components.reduce((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = []
    acc[comp.category].push(comp)
    return acc
  }, {})

  // Generate documentation for each category
  for (const [category, categoryComponents] of Object.entries(componentsByCategory)) {
    content += `### ${category} Components\n\n`
    
    for (const component of categoryComponents) {
      content += `#### ${component.name}\n\n`
      content += `**Import:** \`import { ${component.name} } from '@rspwn/design-system'\`\n\n`
      
      // Props section
      if (Object.keys(component.props).length > 0) {
        content += `**Props:**\n`
        for (const [propName, propType] of Object.entries(component.props)) {
          content += `- \`${propName}\`: ${propType}\n`
        }
        content += '\n'
      }
      
      // Usage examples from stories
      if (component.stories.length > 0) {
        content += `**Usage Examples:**\n\n`
        
        for (const story of component.stories) {
          if (story.args) {
            content += `*${story.name}:*\n`
            content += `\`\`\`jsx\n`
            content += `<${component.name}`
            
            // Parse args to create example
            const args = story.args.split(',').map(arg => arg.trim())
            for (const arg of args) {
              if (arg.includes(':')) {
                const [key, value] = arg.split(':').map(s => s.trim())
                content += `\n  ${key}=${value}`
              }
            }
            content += `\n>\n  Content\n</${component.name}>\n`
            content += `\`\`\`\n\n`
          }
        }
      }
      
      content += `---\n\n`
    }
  }

  // Add brand guidelines section
  content += `## RSPWN Brand Guidelines

### Typography Rules
- **Audiowide font**: ONLY use for brand name "RSPWN" and major headings
- **Inter font**: Use for all body text and secondary headings  
- **Never** use Audiowide for body text or long content

### Color Usage
- **Primary Blue (#4A9EFF)**: Exclusively for primary actions and key interactive elements
- **Professional grayscale hierarchy**: For content structure
- **White text (#FFFFFF)**: Primary content
- **Gray variants**: Secondary information
- Avoid decorative color usage in titles or non-functional elements

### Typography Component Usage
\`\`\`jsx
// ✅ Correct brand usage
<Typography variant="brand">RSPWN</Typography>

// ✅ Correct heading usage  
<Typography variant="h1">Welcome to the Platform</Typography>

// ✅ Correct body text usage
<Typography variant="body1">Your main content goes here</Typography>

// ❌ Wrong - don't use brand variant for long text
<Typography variant="brand">This is a long paragraph of text...</Typography>
\`\`\`

### Button Component Usage
\`\`\`jsx
// ✅ Primary button for main actions
<Button variant="primary">Get Started</Button>

// ✅ Secondary for supporting actions  
<Button variant="secondary">Learn More</Button>

// ✅ Outline for alternative actions
<Button variant="outline">Cancel</Button>
\`\`\`

## Common Patterns

### Page Layout
\`\`\`jsx
<Container maxWidth="lg">
  <Box p={8}>
    <Typography variant="brand" mb={2}>RSPWN</Typography>
    <Typography variant="h1" mb={6}>Page Title</Typography>
    
    <Card variant="elevated" p={6}>
      <Typography variant="body1">Content goes here</Typography>
      <Button variant="primary" mt={4}>Primary Action</Button>
    </Card>
  </Box>
</Container>
\`\`\`

### Form Layout  
\`\`\`jsx
<Box as="form" maxWidth="400px">
  <Typography variant="h2" mb={6}>Sign In</Typography>
  
  <Input 
    label="Email"
    type="email"
    placeholder="Enter your email"
    mb={4}
  />
  
  <Input
    label="Password" 
    type="password"
    placeholder="Enter your password"
    mb={6}
  />
  
  <Button variant="primary" fullWidth type="submit">
    Sign In
  </Button>
</Box>
\`\`\`

## Design Tokens Available

### Colors
- Foundation: \`theme.colors.foundation.black\`, \`theme.colors.foundation.white\`
- Innovation: \`theme.colors.innovation.primaryBlue\`, \`theme.colors.innovation.secondaryPurple\`
- Text: \`theme.colors.text.primary\`, \`theme.colors.text.secondary\`, \`theme.colors.text.muted\`
- Gray: \`theme.colors.gray.dark\`, \`theme.colors.gray.base\`, \`theme.colors.gray.light\`

### Spacing
- Available: \`theme.spacing[1]\` through \`theme.spacing[16]\`
- Common values: \`theme.spacing[2]\` (8px), \`theme.spacing[4]\` (16px), \`theme.spacing[8]\` (32px)

### Typography
- Font families: \`theme.typography.fonts.brand\` (Audiowide), \`theme.typography.fonts.body\` (Inter)
- Font sizes: \`theme.typography.fontSizes.xs\` through \`theme.typography.fontSizes['6xl']\`
- Font weights: \`theme.typography.fontWeights.normal\`, \`medium\`, \`semibold\`, \`bold\`

---

*This documentation was automatically generated from Storybook components. For interactive examples, run \`npm run storybook\`.*
`

  return content
}

// Run the script
generateAIDocs().catch(console.error)