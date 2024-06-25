// src/theme.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: '#00c6ff',
    secondary: '#0072ff',
  },
  fonts: {
    main: 'Roboto, sans-serif',
  },
};
