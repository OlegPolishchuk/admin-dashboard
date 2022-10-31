import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ColorModeContext, useMode } from 'theme';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">content</main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
