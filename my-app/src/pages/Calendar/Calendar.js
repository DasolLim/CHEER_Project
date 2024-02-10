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
//initial value for calendar
const initialValue = dayjs(formattedDate);

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
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [information, setInformation] = React.useState('');
  const [events, setEvents] = React.useState([]);
  const [eventInfo, setEventInfo] = React.useState([]);


  React.useEffect(() =>{
    getMonthlyEvents(initialValue.format('YYYY-MM'));
    getEvents(initialValue.format('YYYY-MM-DD')).then(setEvents);
  },[])
  const fetchHighlightedDays = (daysToHighlight) => {
    setIsLoading(true);
    setTimeout(() => {
      setHighlightedDays(daysToHighlight);
      setIsLoading(false);
    }, 500);
  };
  //function to retrieve events for the selected month
  async function getMonthlyEvents(date){
    try {
      const response = await fetch(`/api/events/monthly/${date}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      //once data is received, assign a badge to every day with an event
      const datesToHighlight = [];
      for (const d of data){
        const date = dayjs(d.date).format('DD');
        datesToHighlight.push(parseInt(date));
      }
      fetchHighlightedDays(datesToHighlight);
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle the error gracefully
    }
  };

  //gets events on specific day
  async function getEvents(date){
    try {
      const response = await fetch(`/api/events/${date}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      //once data is received, display events with sign up buttons
      const info = [];
      for (const d of data){
        const i = <li style={{listStyle: 'none'}} key = {data.eventID}>{d.event_name}</li>;
        const button = <button onClick={() => handleSignUp(d)}>Sign Up</button>
        info.push(i);
        info.push(button);
      }
      return info;
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle the error gracefully
    }
  }

  //get specific event info
  async function getEventInfo(eventID){
    try {
      const response = await fetch(`/api/events/event/${eventID}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      console.log('data: ' + data);
      //once data is received, display events with sign up buttons
      const info = [];
      let index = 0;
      const desc = <li style={{listStyle: 'none'}} key = {index}>Description: {data.description}</li>;
      const start = <li style={{listStyle: 'none'}} key = {index}>Start Time: {data.start_time} pm</li>;
      const end = <li style={{listStyle: 'none'}} key = {index}>End Time: {data.end_time} pm</li>;
      info.push(desc);
      info.push(start);
      info.push(end);
      console.log(info);
      return info;
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle the error gracefully
    }
  }

  const handleSignUp = async (event) =>{
    //set title, remove rest of events from screen
    setInformation(event.event_name);
    setEvents(null);
    const info = await getEventInfo(event.eventID);
    setEventInfo(info);

  }

  const handleDateClick = async (date) => {
    // change text info on date click
    setInformation(`Events on ${date.format('YYYY-MM-DD')}`);
    const events = await getEvents(date.format('YYYY-MM-DD'));
    setEvents(events);
    setEventInfo(null);
  };

  const handleMonthChange = (date) => {
    setIsLoading(true);
    setHighlightedDays([]);
    getMonthlyEvents(dayjs(date.$d).format('YYYY-MM'));
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
            onYearChange={handleMonthChange}
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
          <ul>
          {events && events.map((event, index) => (
            <li key={index} style={{listStyle: 'none'}}>{event}</li>
          ))}
          {eventInfo && eventInfo.map((event, index) => (
            <li key={index} style={{listStyle: 'none'}}>{event}</li>
          ))}
        </ul>
        </div>
      </LocalizationProvider>
    </div>
  );
}