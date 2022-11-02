import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

interface Props {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  sendValue: () => void;
}

export const CustomDialog = ({
  open,
  close,
  children,
  sendValue,
}: Props): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = (): void => {
    close();
  };

  const handleSend = (): void => {
    sendValue();
    close();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        dividers
        sx={{
          minWidth: '400px',
          color: colors.primary[900],
          '& .Mui-focused': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {children}
      </DialogContent>

      <DialogActions>
        <Button color="secondary" variant="contained" onClick={handleSend}>
          Ok
        </Button>
        <Button color="error" variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
