import { CssVarsTheme, Theme } from '@mui/material/styles';

export const generateGlobalStyles = ({
  theme,
}: {
  theme: Omit<Theme, 'components' | 'palette'> & CssVarsTheme;
  configs: OwnerConfigs;
}) => {
  return `
  html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }
        
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
        background: ${theme.palette.background.dark};
          border-radius: 10px;
        }
      }
        p {
        margin: 0;
        padding: 0;
        }

      body {
        margin: 0;
        scroll-behavior: smooth;
        min-height: 100vh;        
      }

      a {
        display: block;
        cursor: pointer;
        color: inherit !important;
        text-decoration: none !important;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      main {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        *width: 100%;
        min-width: 100%;
        overflow: hidden;
        min-height: 500px;
        position: relative;
      }

      td,
      th {
        text-align: unset !important;
      }

      img {
        margin-bottom: 0;
      }
      .MuiPopper-root.MuiAutocomplete-popper .MuiAutocomplete-listbox {
        max-height: 400px !important;
      }
      .MuiPopper-root.MuiAutocomplete-popper {
        margin-top: 12px !important;
        margin-bottom: 12px !important;
      }
      .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded {
        border-radius: 12px !important;
      }
      .MuiPopper-root.MuiAutocomplete-popper li {
        margin-left: 8px !important;
        margin-right: 8px !important;
        border-radius: 8px !important;
        margin-top: 4px !important;
        margin-bottom: 4px !important;
      }
      .MuiTooltip-tooltip {
        background-color: var(--mui-palette-common-background) !important;
        color: var(--mui-palette-common-onBackground) !important;
        border: 1px solid #A7AFB2 !important;
        border-radius: 8px !important;
      }
      .MuiTooltip-tooltip>span {
        color: #A7AFB2 !important;
      }
    }
`;
};
