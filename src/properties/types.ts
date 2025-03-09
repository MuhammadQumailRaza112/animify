/* eslint-disable @typescript-eslint/no-empty-object-type */
export {};

interface FontConfig {
    fontSize?: string;
    fontWeight?: number;
    lineHeight?: string;
  }
  
  type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
  type BodyLevel = 1 | 2 | 3 | 4 | 5 | 6;
  
  type FontConfigs = Partial<
    {
      [key in
        | `heading-${HeadingLevel}-bold`
        | `heading-${HeadingLevel}-semiBold`
        | `heading-${HeadingLevel}-medium`
        | `heading-${HeadingLevel}-regular`
        | `body-${BodyLevel}-bold`
        | `body-${BodyLevel}-semiBold`
        | `body-${BodyLevel}-medium`
        | `body-${BodyLevel}-regular`]: FontConfig;
    }
  >;
  interface IOwnerTypography {
    fontType: 'system' | 'google';
  
    /** The font family to use for the text.
     */
    fontFamily: string;
  
    /** The font weights to use for the text.
     */
    fontWeights: number[];
  
    /** The font configs to use for the text.
     */
    configs?: FontConfigs;
  }
  
  interface IOwnerTheme {
    spacing?: number;
    entityHeaderDealCount?: boolean;
    showColorSchemeToggle?: boolean;
    map?: 'standard' | 'peekaboo';
  }

  interface IColorVariants {
    main: string;
    light?: string;
    dark?: string;
  }
  
  interface IPalette {
    primary?: IColorVariants;
    secondary?: IColorVariants;
    error?: IColorVariants;
    warning?: IColorVariants;
    success?: IColorVariants;
    info?: IColorVariants;
    common?: {
      black?: string;
      white?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
    };
    grey?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    background?: {
      default?: string;
      paper?: string;
      dark?: string;
    };
    'general-1'?: { main: string };
    'general-2'?: { main: string };
    'general-3'?: { main: string };
    'general-4'?: { main: string };
    'general-5'?: { main: string };
    'general-6'?: { main: string };
    'general-7'?: { main: string };
    'general-8'?: { main: string };
    'general-9'?: { main: string };
    'general-10'?: { main: string };
    'general-11'?: { main: string };
    'general-12'?: { main: string };
    'general-13'?: { main: string };
    'general-14'?: { main: string };
    'general-15'?: { main: string };
    'general-16'?: { main: string };
    'general-17'?: { main: string };
    'general-18'?: { main: string };
    'general-19'?: { main: string };
    'general-20'?: { main: string };
  }

  interface IOwnerPalette {
    light?: IPalette;
    dark?: IPalette;
  }

interface IOwnerConfigs {
  DEFAULT_COLOR_SCHEME?: 'light' | 'dark';
  theme: IOwnerTheme;
  palette?: IOwnerPalette;
  typography?: IOwnerTypography;
}

declare global {
  interface Window {
    __pkbg__: OwnerConfigs;
  }

  interface OwnerConfigs extends IOwnerConfigs {}
}
