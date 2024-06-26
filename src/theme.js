// src/theme.js
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  colors: {
    primary: '#00c6ff',
    secondary: '#0072ff',
    background: '#ffffff',
    text: '#000000',
  },
  fonts: {
    main: 'Roboto, sans-serif',
  },
};

export const darkTheme = {
  colors: {
    primary: '#00c6ff',
    secondary: '#0072ff',
    background: '#121212',
    text: '#ffffff',
  },
  fonts: {
    main: 'Roboto, sans-serif',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
`;
