import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;  
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    overflow-x: hidden !important;
    background: gray;
  }
  `;