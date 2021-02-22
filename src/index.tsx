import { render } from 'react-dom'
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemeProvider
} from 'styled-components'
import App from './App'
import { colorPalette, ColorPalette } from './colors'

type Multiplier = number

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ColorPalette
    sizing: (x: Multiplier) => string
    spacing: (x: Multiplier) => string
    spaceBetweenX: (x: Multiplier) => FlattenSimpleInterpolation
    spaceBetweenY: (x: Multiplier) => FlattenSimpleInterpolation
  }
}

const BASE: number = 0.25
const defaultTheme: DefaultTheme = {
  palette: colorPalette,
  sizing: (size) => `${size * BASE}rem`,
  spacing: (size) => `${size * BASE}em`,
  spaceBetweenX: (size) => css`
    & > * + * {
      margin-left: ${size * BASE}em;
      margin-right: 0;
    }
  `,
  spaceBetweenY: (size) => css`
    & > * + * {
      margin-top: ${size * BASE}em;
      margin-bottom: 0;
    }
  `
}

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
`

const rootElement = document.getElementById('root')
render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  rootElement
)
