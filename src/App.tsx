import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './tokens/theme'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import TokensPage from './pages/TokensPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App