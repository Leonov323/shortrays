import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;  
  }
  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    overflow-x: hidden !important;
    background: #f8f9fA
  }

  img, button {
  user-select: none;
}
  `;