import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import '../../index.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}
const initialValue = dayjs('2024-01-31');

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, onDateClick, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  const handleClick = () => {
    onDateClick(props.day);
  };

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '⭐' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} onClick={handleClick} />
    </Badge>
  );
}

export default function Calendar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [information, setInformation] = React.useState('');

  const fetchHighlightedDays = (date) => {
    setIsLoading(true);
    // Simulated fetch
    setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));
      setHighlightedDays(daysToHighlight);
      setIsLoading(false);
    }, 500);
  };

  const handleDateClick = (date) => {
    // Example: Change information text based on the clicked date
    setInformation(`Events on ${date.format('YYYY-MM-DD')}`);
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
  }, []);

  const handleMonthChange = (date) => {
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <div className='calendar-container'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ transform: 'scale(150%)'}}> {/* Adjust the width and height as needed */}
          <DateCalendar
            sx={{
              // Add your styles here
              backgroundColor: 'lightblue',
              borderRadius: '8px',
              padding: '16px',
            }}
            defaultValue={initialValue}
            loading={isLoading}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
                onDateClick: handleDateClick,
              },
            }}
          />
        </div>
        <div className="info-box">
          <h2>Event Name</h2>
          <p>{information}</p>
        </div>
      </LocalizationProvider>
    </div>
  );
}