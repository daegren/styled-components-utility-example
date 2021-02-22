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
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ColorPalette
    sizing: (x: Multiplier) => string
    spacing: (x: Multiplier) => string
    spaceBetweenX: (x: Multiplier) => FlattenSimpleInterpolation
    spaceBetweenY: (x: Multiplier) => FlattenSimpleInterpolation
    breakpoint: (
      x: Breakpoint,
      innerCSS: FlattenSimpleInterpolation
    ) => FlattenSimpleInterpolation
    widthFor: (x: Breakpoint) => string
  }
}

const BASE: number = 0.25
const widthFor = (x: Breakpoint): string => {
  switch (x) {
    case 'sm':
      return '640px'
    case 'md':
      return '768px'
    case 'lg':
      return '1024px'
    case 'xl':
      return '1280px'
    case '2xl':
      return '1536px'
  }
}
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
  `,
  breakpoint: (x, innerCSS) => css`
    @media (min-width: ${widthFor(x)}) {
      ${innerCSS}
    }
  `,
  widthFor
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
