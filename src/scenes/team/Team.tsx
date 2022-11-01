import React from 'react';

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Header } from 'components';
import { mockDataTeam } from 'data/mockData';
import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

export const Team = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column-cell' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor={
              access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}

            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column-cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
