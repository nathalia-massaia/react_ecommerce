import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: {
        rounded: string;
        full: string;
      };
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      black: string;
      deepblack: string;
      white: string;
      darkgray: string;
      gray: string;
      lightgray: string;
      red: string;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    transition: {
      default: string;
      fast: string;
    };
    layers: {
      base: number;
    };
  }
}
