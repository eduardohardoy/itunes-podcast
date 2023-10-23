import { createGlobalStyle } from 'styled-components';
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
:root {
  font-family: Quicksand, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: ${colors.primary};
  background: ${colors.background};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}
`;

export default GlobalStyles;
