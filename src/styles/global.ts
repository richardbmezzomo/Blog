import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.blue};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS['base-background']};
    color: ${({ theme }) => theme.COLORS['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font:400 1rem Nunito, sans-serif;
  }

`
