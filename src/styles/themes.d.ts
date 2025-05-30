import { theme } from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      error?: string;
      // Add any other colors you need
    };
    // Add other theme properties if needed
  }
}
