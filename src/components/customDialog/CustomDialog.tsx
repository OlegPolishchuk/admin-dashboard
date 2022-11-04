import React from 'react';

import { Dialog, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

interface Props {
  open: boolean;
  close: (close: boolean) => void;
  children: React.ReactNode;
}

export const CustomDialog = ({ open, close, children }: Props): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = (): void => {
    close(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        zIndex: '10000',
        '& .MuiDialog-paper': {
          minWidth: '400px',
          padding: '10px 20px',
          color: colors.primary[900],
          '& .Mui-focused': {
            color: `${colors.greenAccent[200]} !important`,
          },
        },
      }}
    >
      {children}
    </Dialog>
  );
};
