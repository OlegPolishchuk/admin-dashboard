import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { useMode } from 'hooks';
import { Bar } from 'scenes/bar/Bar';
import { Calendar } from 'scenes/calendar/Calendar';
import { Contacts } from 'scenes/contacts/Contacts';
import { Dashboard } from 'scenes/dashboard/Dashboard';
import { Faq } from 'scenes/faq/FAQ';
import { Form } from 'scenes/form/Form';
import { SidebarNav } from 'scenes/global/SidebarNav';
import { Topbar } from 'scenes/global/Topbar';
import { Invoices } from 'scenes/invoices/Invoices';
import { Team } from 'scenes/team/Team';
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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
