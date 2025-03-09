import { ColorSystemOptions } from "@mui/material";

export const DEFAULT_SPACING = 4;
export const DEFAULT_SCHEME_QUERY_PARAM = 'scheme';
export const DEFAULT_COLOR_SCHEME_ATTRIBUTE = '.mode-%s';
export const DEFAULT_FONT_FAMILY = 'Arial';
export const DEFAULT_COLOR_SCHEMES: Partial<
  Record<'light' | 'dark', ColorSystemOptions>
> &
  Record<never, ColorSystemOptions> = {
  light: {
    palette: {
      primary: {
        main: '#0083CA',
        light: '#66B2E4',
        dark: '#005B8A',
      },
      secondary: {
        main: '#008ED9',
        light: '#66BFF3',
        dark: '#0066A1',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#C62828',
      },
      warning: {
        main: '#ED6C02',
        light: '#FF9800',
        dark: '#E65100',
      },
      success: {
        main: '#2E7D32',
        light: '#4CAF50',
        dark: '#1B5E20',
      },
      info: {
        main: '#0288D1',
        light: '#03A9F4',
        dark: '#01579B',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
      grey: {
        50: '#BEBEBE',
        100: '#DADEDF',
        200: '#C1C7C9',
        300: '#A7AFB2',
        400: '#8C979A',
        500: '#6F7C80',
        600: '#555F61',
        700: '#373D3F',
        800: '#131516',
        900: '#000000',
      },
      background: {
        default: '#FFFFFF',
        paper: '#FAFAFA',
        // dark: '#010101'
      },
    },
  },
  dark: {
    palette: {
      primary: {
        main: '#1778FF',
        light: '#66B2E4',
        dark: '#005B8A',
      },
      secondary: {
        main: '#008ED9',
        light: '#66BFF3',
        dark: '#0066A1',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#C62828',
      },
      warning: {
        main: '#ED6C02',
        light: '#FF9800',
        dark: '#E65100',
      },
      success: {
        main: '#2E7D32',
        light: '#4CAF50',
        dark: '#1B5E20',
      },
      info: {
        main: '#0288D1',
        light: '#03A9F4',
        dark: '#01579B',
      },
      text: {
        primary: '#E5E6EB',
        secondary: '#B0B3B8',
      },
      grey: {
        900: '#F2F3F4',
        800: '#DADEDF',
        700: '#C1C7C9',
        600: '#A7AFB2',
        500: '#8C979A',
        400: '#6F7C80',
        300: '#555F61',
        200: '#373D3F',
        100: '#131516',
        50: '#BEBEBE',
      },
      background: {
        default: '#0F0F0F',
      },
    },
  },
};

export const DEFAULT_TYPOGRAPHY = {
  typography: {
    'heading-1-bold': {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-1-semiBold': {
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-1-medium': {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-1-regular': {
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'heading-2-bold': {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-2-semiBold': {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-2-medium': {
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-2-regular': {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'heading-3-bold': {
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-3-semiBold': {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-3-medium': {
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-3-regular': {
      fontSize: '30px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'heading-4-bold': {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-4-semiBold': {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-4-medium': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-4-regular': {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'heading-5-bold': {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-5-semiBold': {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-5-medium': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-5-regular': {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'heading-6-bold': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'heading-6-semiBold': {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'heading-6-medium': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'heading-6-regular': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-1-bold': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-1-semiBold': {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-1-medium': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-1-regular': {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-2-bold': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-2-semiBold': {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-2-medium': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-2-regular': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-3-bold': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-3-semiBold': {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-3-medium': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-3-regular': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-4-bold': {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-4-semiBold': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-4-medium': {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-4-regular': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-5-bold': {
      fontSize: '10px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-5-semiBold': {
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-5-medium': {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-5-regular': {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    'body-6-bold': {
      fontSize: '8px',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    'body-6-semiBold': {
      fontSize: '8px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    'body-6-medium': {
      fontSize: '8px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    'body-6-regular': {
      fontSize: '8px',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          'heading-1-bold': 'h1',
          'heading-1-semiBold': 'h1',
          'heading-1-medium': 'h1',
          'heading-1-regular': 'h1',
          'heading-2-bold': 'h2',
          'heading-2-semiBold': 'h2',
          'heading-2-medium': 'h2',
          'heading-2-regular': 'h2',
          'heading-3-bold': 'h3',
          'heading-3-semiBold': 'h3',
          'heading-3-medium': 'h3',
          'heading-3-regular': 'h3',
          'heading-4-bold': 'h4',
          'heading-4-semiBold': 'h4',
          'heading-4-medium': 'h4',
          'heading-4-regular': 'h4',
          'heading-5-bold': 'h5',
          'heading-5-semiBold': 'h5',
          'heading-5-medium': 'h5',
          'heading-5-regular': 'h5',
          'heading-6-bold': 'h6',
          'heading-6-semiBold': 'h6',
          'heading-6-medium': 'h6',
          'heading-6-regular': 'h6',
          'body-1-bold': 'p',
          'body-1-semiBold': 'p',
          'body-1-medium': 'p',
          'body-1-regular': 'p',
          'body-2-bold': 'p',
          'body-2-semiBold': 'p',
          'body-2-medium': 'p',
          'body-2-regular': 'p',
          'body-3-bold': 'p',
          'body-3-semiBold': 'p',
          'body-3-medium': 'p',
          'body-3-regular': 'p',
          'body-4-bold': 'p',
          'body-4-semiBold': 'p',
          'body-4-medium': 'p',
          'body-4-regular': 'p',
          'body-5-bold': 'p',
          'body-5-semiBold': 'p',
          'body-5-medium': 'p',
          'body-5-regular': 'p',
          'body-6-bold': 'p',
          'body-6-semiBold': 'p',
          'body-6-medium': 'p',
          'body-6-regular': 'p',
        },
      },
    },
  },
};
