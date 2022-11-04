/* eslint-disable import/order */
import React, { useRef, useState } from 'react';

import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from '@fullcalendar/react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { Header } from 'components';
import { tokens } from 'theme';
import { ReturnComponentType } from 'types';
import { isPast } from 'utils';
import { CustomDialog } from 'components/customDialog/CustomDialog';

export const Calendar = (): ReturnComponentType => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogChildren, setDialogChildren] = useState<React.ReactNode>(null);

  const handleDateClick = (selected: DateSelectArg): void => {
    if (isPast(selected.endStr)) {
      setDialogChildren(
        <>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h5" component="span">
                Cant add event in the past
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="error"
              variant="contained"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </>,
      );
    } else {
      setDialogChildren(
        <>
          <DialogContent
            sx={{
              minWidth: '400px',
              color: colors.primary[900],
              '& .Mui-focused': {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            <DialogContentText>
              <Typography variant="h5" component="span">
                Please enter a new title for your event
              </Typography>
            </DialogContentText>
            <TextField
              autoFocus
              fullWidth
              type="text"
              label="Title"
              variant="standard"
              inputRef={inputRef}
            />
          </DialogContent>

          <DialogActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleSetNewEventValueTitle(selected)}
            >
              Ok
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </>,
      );
    }

    setIsDialogOpen(true);
  };

  const handleSetNewEventValueTitle = (selected: DateSelectArg): void => {
    if (inputRef.current) {
      handleSetEvent(inputRef.current.value, selected);
    }
  };

  const handleSetEvent = (newEventValue: string, selected: DateSelectArg): void => {
    // all methods are from documentation https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/react-typescript/src/DemoApp.tsx
    const calendarApi = selected.view.calendar;

    calendarApi.unselect();

    if (newEventValue) {
      calendarApi.addEvent({
        id: `${Date.now()}`,
        title: newEventValue,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }

    setIsDialogOpen(false);
  };

  const handleEventClick = (selected: EventClickArg): void => {
    setDialogChildren(
      <>
        <DialogContentText sx={{ padding: '10px', zIndex: '99' }}>
          <Typography variant="h5" component="span">
            Are you sure you want to delete the event &quot;{selected.event.title}&quot; ?
          </Typography>
        </DialogContentText>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => removeEvent(selected)}
          >
            remove
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => setIsDialogOpen(false)}
          >
            cansel
          </Button>
        </DialogActions>
      </>,
    );

    setIsDialogOpen(true);
  };

  const removeEvent = (selectedEvent: EventClickArg): void => {
    selectedEvent.event.remove();
    setIsDialogOpen(false);
  };

  return (
    <>
      <Box m="20px">
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

        <Box display="flex" justifyContent="space-between">
          <Box flex="1 1 20%" bgcolor={colors.primary[400]} p="15px" borderRadius="4px">
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map((event: EventApi) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start!, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,list',
              }}
              initialView="dayGridMonth"
              editable
              selectable
              selectMirror
              dayMaxEvents
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={events => setCurrentEvents(events)}
              initialEvents={[
                { id: '123', title: 'All-day event', date: '2022-11-02' },
                { id: '321', title: 'Timed event', date: '2022-11-02' },
              ]}
            />
          </Box>
        </Box>
      </Box>
      <CustomDialog open={isDialogOpen} close={setIsDialogOpen}>
        {dialogChildren}
      </CustomDialog>
    </>
  );
};
