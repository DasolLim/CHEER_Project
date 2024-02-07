import React, { useState } from 'react';
import '../index.css';
import communityImage from '../communityImage.jpg';
import EventForm from './EventsForm'

const Events = ({ eventName, eventDate, eventDescription}) => {
    const [eventForm, setEventForm] = useState(false)

    const handleEventClick = () => {
        setEventForm(!eventForm)
    }

    const closeForm = () => {
        setEventForm(true)
    }

    return ( 
        
        <div className='events-container'>
            <div className='gradient-background'></div>
            <div className='updates-box' onClick={handleEventClick}>
            <div className='title-updates'>Receive Updates</div>
            </div>
            <div className='event-title'>Community Awareness Day</div>
            <div className='date-container'>
            <div className='date-background'></div>
            <div className='date-numbers'>
                <div className='day-number'>21</div>
                <div className='month-label'>FEB</div>
            </div>
            </div>
            <div className='description-box'>
                Community Awareness Day fosters unity, awareness, and civic engagement. Through activities and discussions, it empowers individuals, strengthens community bonds, and encourages collaboration for a more informed and compassionate society.
            </div>
            <div className='image-container'>
            <img className='event-image' src={communityImage} alt="Event" />
            </div>
            {eventForm && <EventForm closeForm={closeForm} />}
        </div>

        
        );
  }

export default Events;