import { ThemeProvider } from 'styled-components'
import { AppRouter } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  )
}
