import { CssBaseline } from '@mui/material';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { CssVarsProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


import { DEFAULT_COLOR_SCHEME_ATTRIBUTE } from '../theme/Constant';
import theme from '../theme/Theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <InitColorSchemeScript attribute={DEFAULT_COLOR_SCHEME_ATTRIBUTE} />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
