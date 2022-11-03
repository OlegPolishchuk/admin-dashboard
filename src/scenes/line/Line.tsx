import React from 'react';

import { Box } from '@mui/material';

import { Header, LineChart } from 'components';
import { ReturnComponentType } from 'types';

export const Line = (): ReturnComponentType => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
