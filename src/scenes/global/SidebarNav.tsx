import React, { useState } from 'react';

import {
  // HomeOutlined,
  // PeopleOutline,
  // ContactsOutlined,
  // ReceiptOutlined,
  // PersonOutline,
  // CalendarTodayOutlined,
  // HelpOutline,
  // BarChartOutlined,
  // PieChartOutlineOutlined,
  // TimelineOutlined,
  MenuOutlined,
  // MapOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

export const SidebarNav = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, isSelected] = useState('Dashboard');

  isSelected(selected);

  return (
    <Box
      sx={{
        '& .sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .menu-anchor': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .menu-anchor:hover': {
          color: '#868dfb !important',
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* {!isCollapsed && ( */}
      {/*  <Box mb="25px"> */}
      {/*    <Box display="flex" justifyContent="center" alignItems="center"> */}
      {/*      <img */}
      {/*        alt="profile-user" */}
      {/*        width="100px" */}
      {/*        height="100px" */}
      {/*        src="../../assets/user.jpg" */}
      {/*        style={{ cursor: 'pointer', borderRadius: '50%' }} */}
      {/*      /> */}
      {/*    </Box> */}
      {/*    <Box textAlign="center"> */}
      {/*      <Typography */}
      {/*        variant="h2" */}
      {/*        color={colors.grey[100]} */}
      {/*        fontWeight="bold" */}
      {/*        sx={{ m: '10px 0 0 0' }} */}
      {/*      > */}
      {/*        Ilon Mask */}
      {/*      </Typography> */}
      {/*      <Typography variant="h5" color={colors.greenAccent[500]}> */}
      {/*        VP Fancy Admin */}
      {/*      </Typography> */}
      {/*    </Box> */}
      {/*  </Box> */}
      {/* )} */}
    </Box>
  );
};
