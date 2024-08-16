import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]); // Start with an empty array

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          title,
          start,
          end,
        },
      ]);
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#0073e6',
            borderRadius: '5px',
            color: 'white',
            padding: '5px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
          },
        })}
        components={{
          event: ({ event }) => (
            <div className="animated-event">
              <span>{event.title}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default MyCalendar;
