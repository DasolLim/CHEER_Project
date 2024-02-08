import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import '../../index.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

//initial date is todays date
const date = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDate = date.toLocaleDateString('en-US', options).split('/').join('-');
const initialValue = dayjs(formattedDate);

//take the date being clicked and display its events to the right
function setInfo(information){
  if (information === undefined || information === ''){
    return;
  }else{
    const info = [];
    //const events = getEvents(date);
    const events = ['test','1','2'];
    let index = 0;
    for (const e of events){
      const i = <li style={{listStyle: 'none'}} key = {index}>{e}</li>;
      const button = <button>Sign Up</button>
      info.push(i);
      info.push(button);
      index++;
    }
    return info;
  }
}

//function to retrieve events on specific day
function getEvents(date){

}


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
      //assign badge
      const daysToHighlight = [1, 2, 3];
      setHighlightedDays(daysToHighlight);
      setIsLoading(false);
    }, 500);
  };

  const handleDateClick = (date) => {
    // Example: Change information text based on the clicked date
    setInformation(`Events on ${date.format('YYYY-MM-DD')}`);
    setInfo(information);
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
        <div className={`info-box ${!information ? 'hidden' : ''}`}>
          <h2>{information}</h2>
          <p>{setInfo(information)}</p>
        </div>
      </LocalizationProvider>
    </div>
  );
}