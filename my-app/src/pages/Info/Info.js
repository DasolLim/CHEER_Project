import React from 'react';
import Events from '../../components/Events.js';

const Info = () => {
    const eventsData = [
        {
            eventName: 'Community Awareness Day',
            eventDate: '21 FEB',
            eventDescription: 'Community Awareness Day fosters unity, awareness, and civic engagement...',
        },
        {
            eventName: 'Paint Night',
            eventDate: '28 FEB',
            eventDescription: 'Join us for a relaxing and creative evening of painting...',
        }
    ]
    
    return (
        <div>
            {/* Map through the array and render each event */}
            {eventsData.map((event, index) => (
                <Events
                    key={index} // Ensure each event has a unique key
                    eventName={event.eventName}
                    eventDate={event.eventDate}
                    eventDescription={event.eventDescription}
                />
            ))}
        </div>
    )
}

export default Info;
