import React from 'react';

import { Box, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

interface Props {
  progress: number;
  size?: number;
}

export const ProgressCircle = ({ progress, size }: Props): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradiant(${colors.primary[400]} 55%, transparent 56%),
          conic-gradiant(transparent 0deg ${angle}degm ${colors.blueAccent[500]} ${angle}deg 360deg),
          ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: size ? `${size}px` : '100%',
        height: size ? `${size}px` : '100%',
      }}
    />
  );
};
