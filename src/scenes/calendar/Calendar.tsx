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
  // const [newEventValue, setNewEventValue] = useState('');
  const [selectedDay, setSelectedDay] = useState<DateSelectArg>({} as DateSelectArg);
  const [dialogChildren, setDialogChildren] = useState<React.ReactNode>(null);

  const handleDateClick = (selected: DateSelectArg): void => {
    setSelectedDay(selected);

    if (isPast(selected.endStr)) {
      setDialogChildren(
        <DialogContent>
          <DialogContentText>
            <Typography variant="h5">Cant add event in the past</Typography>
          </DialogContentText>
        </DialogContent>,
      );
    } else {
      setDialogChildren(
        <>
          <DialogContentText>
            <Typography variant="h5">Please enter a new title for your event</Typography>
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="text"
            label="Title"
            variant="standard"
            inputRef={inputRef}
          />
        </>,
      );
    }

    setIsDialogOpen(true);
  };

  const handleSetNewEventValueTitle = (): void => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      // setNewEventValue(inputRef.current.value);

      handleSetEvent(inputRef.current.value);
    }
  };

  const handleSetEvent = (newEventValue: string): void => {
    console.log(newEventValue);
    // all methods are from documentation https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/react-typescript/src/DemoApp.tsx
    const calendarApi = selectedDay.view.calendar;

    calendarApi.unselect();

    if (newEventValue) {
      calendarApi.addEvent({
        id: `${Date.now()}`,
        title: newEventValue,
        start: selectedDay.startStr,
        end: selectedDay.endStr,
        allDay: selectedDay.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg): void => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title} ?`,
      )
    ) {
      selected.event.remove();
    }
  };

  // const handleChangeNewEventValue = (event: ChangeEvent<HTMLInputElement>): void => {
  //   console.log(event.currentTarget.value);
  //   setNewEventValue(event.currentTarget.value);
  // };

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
      <CustomDialog
        open={isDialogOpen}
        close={() => setIsDialogOpen(false)}
        sendValue={handleSetNewEventValueTitle}
      >
        {dialogChildren}
      </CustomDialog>
    </>
  );
};
