export default {
  border: {
    radius: {
      rounded: '1rem',
      full: '100%'
    }
  },
  font: {
    family:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4.8rem'
    }
  },
  colors: {
    primary: '#ff9800',
    secondary: '#f7d9ab',
    white: '#FAFAFA',
    black: '#181818',
    deepblack: '#080808',
    darkgray: '#707070',
    gray: '#b5b5b5',
    lightgray: '#EAEAEA',
    red: '#FF6347'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  layers: {
    base: 10
  }
} as const;
