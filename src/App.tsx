import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { useMode } from 'hooks';
import Dashboard from 'scenes/dashboard/Dashboard';
import { SidebarNav } from 'scenes/global/SidebarNav';
import { Topbar } from 'scenes/global/Topbar';
import { ColorModeContext } from 'theme';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarNav />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
