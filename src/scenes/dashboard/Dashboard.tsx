import React from 'react';

import {
  DownloadingOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from '@mui/icons-material';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import {
  BarChart,
  GeographyChart,
  Header,
  LineChart,
  ProgressCircle,
  StatBox,
} from 'components';
import { mockTransactions } from 'data/mockData';
import { tokens } from 'theme';
import { ReturnComponentType, Transactions } from 'types';

export const Dashboard = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadingOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            icon={<Email sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
            progress={0.75}
            increase="+14%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            icon={
              <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
            }
            progress={0.5}
            increase="+21%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
            progress={0.3}
            increase="+5%"
          />
        </Box>

        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
            progress={0.8}
            increase="+43%"
          />
        </Box>

        {/* Row 2 */}
        <Box gridColumn="span 8" gridRow="span 2" bgcolor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadingOutlined
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction: Transactions) => (
            <Box
              key={`${transaction.txId} ${Math.random()}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box bgcolor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} p="30px">
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle progress={0.7} size={125} />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures ans costs</Typography>
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} p="30px">
          <Typography variant="h5" fontWeight="600" sx={{ mb: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard />
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ p: '30px 30px 0 30px' }}>
            Sales Quantity
          </Typography>
          <Box height="200px" mt="-20px">
            <GeographyChart isDashboard />
          </Box>
        </Box>

        {/* row 3 emd */}
      </Box>
    </Box>
  );
};
