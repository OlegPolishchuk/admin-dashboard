import React, { useState } from 'react';

import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  CalendarTodayOutlined,
  HelpOutline,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import userImg from 'assets/user.jpg';
import { tokens } from 'theme';
import { ReturnComponentType } from 'types';

interface ItemType {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}
const Item = ({
  title,
  to,
  setSelected,
  selected,
  icon,
}: ItemType): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      routerLink={<Link to={to} />}
      icon={icon}
    >
      <Typography> {title}</Typography>
    </MenuItem>
  );
};

export const SidebarNav = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState('Dashboard');

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
        '& .menu-anchor.active': {
          color: '#6870fa !important',
        },
        '& .menu-item.active .menu-anchor': {
          background: `none`,
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
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userImg}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />

                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold "
                    sx={{ m: '10px 0 0 0' }}
                  >
                    Ilon Mask
                  </Typography>

                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? '' : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
