'use client';

import { CssVarsTheme, Theme, extendTheme } from '@mui/material/styles';

import { merge } from 'lodash';


import {
  DEFAULT_COLOR_SCHEMES,
  DEFAULT_COLOR_SCHEME_ATTRIBUTE,
  DEFAULT_SPACING,
} from './Constant';
import { generateGlobalStyles } from './GlobalStyles';
import { getConfigs } from './utils';
import { generateTypography } from './Typography';

const configs = getConfigs();

const mergedColorSchemes = {
  light: {
    palette: merge(
      DEFAULT_COLOR_SCHEMES?.light?.palette,
      configs?.palette?.light || {},
    ),
  },
  dark: {
    palette: merge(
      DEFAULT_COLOR_SCHEMES?.dark?.palette,
      configs?.palette?.dark || {},
    ),
  },
};

const theme = extendTheme({
  spacing: DEFAULT_SPACING,
  colorSchemes: mergedColorSchemes,
  colorSchemeSelector: DEFAULT_COLOR_SCHEME_ATTRIBUTE,

  ...merge(generateTypography(configs), {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false,
        },
      },
      MuiCssBaseline: {
        styleOverrides: (
          theme: Omit<Theme, 'components' | 'palette'> & CssVarsTheme,
        ) => {
          return generateGlobalStyles({ theme, configs });
        },
      },
    },
  }),
});

export default theme;
