import 'styled-components'
import type { Theme } from '../tokens/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}