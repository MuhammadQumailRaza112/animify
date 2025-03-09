'use client';

import { merge } from 'lodash';

import { DEFAULT_FONT_FAMILY, DEFAULT_TYPOGRAPHY } from './Constant';

export const generateTypography = (configs: OwnerConfigs) => {
  const ownerTypography = configs?.typography;
  const fontFamily = ownerTypography?.fontFamily || DEFAULT_FONT_FAMILY;
  const merged = merge(DEFAULT_TYPOGRAPHY, {
    typography: {
      allVariants: { fontFamily },
      ...(ownerTypography?.configs || {}),
    },
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily,
        },
      },
    },
  });
  return merged;
};
