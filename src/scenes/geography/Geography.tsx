import React from 'react';

import { Box, useTheme } from '@mui/material';

import { GeographyChart, Header } from 'components';
import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

export const Geography = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />

      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  );
};
