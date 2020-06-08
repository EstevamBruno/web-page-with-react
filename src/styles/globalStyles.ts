import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  html,
  body {
    background-color: #f0f0f5;
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
`;