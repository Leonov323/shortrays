import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;  
    font-family: 'Noto Sans', sans-serif;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    overflow-x: hidden !important;
    background: #f8f9fA;
  }
  img {
  user-select: none;
} 
  nav {
    font-family: 'Azeret Mono', monospace;
  }
  .h70 {
        height: 70px;
    }
  `;
