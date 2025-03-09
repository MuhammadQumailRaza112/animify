const configs: Partial<OwnerConfigs> = {
    typography: {
      fontType: 'google',
      fontFamily: 'Plus Jakarta Sans',
      fontWeights: [200, 300, 400, 500, 600, 700, 800],
    },
    palette: {
      light: {
        'general-1': { main: '#DCEFFF' },
        'general-2': { main: '#EDE9FF' },
        'general-3': { main: '#FFE3DC' },
        'general-8': { main: 'rgba(121, 209, 249, 1)' },
        'general-9': { main: 'rgba(222, 241, 253, 1)' },
        'general-10': { main: 'rgba(250, 250, 250, 1)' },
        grey: { '50': '#F5F5F5' },
      },
      dark: {
        'general-1': { main: '#3A91BF' },
        'general-2': { main: '#6B5BB3' },
        'general-3': { main: '#D27A6C' },
        'general-8': { main: 'rgba(4, 27, 36, 1)' },
        'general-9': { main: 'rgba(15, 59, 75, 1)' },
        'general-10': { main: 'rgba(33, 33, 33, 1)' },
        grey: { '50': '#1A1A1A' },
      },
    },
  };
  
  export default configs;
  