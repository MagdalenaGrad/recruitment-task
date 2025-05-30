import { createGlobalStyle } from 'styled-components';
import type { Theme } from './themes';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
