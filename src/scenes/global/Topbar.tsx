import React, { useContext } from 'react';

import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
  Search,
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';

import { ColorModeContext, tokens } from 'theme';
import { ReturnComponentType } from 'types';

export const Topbar = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" borderRadius="3px" bgcolor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};
