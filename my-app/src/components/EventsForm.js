import React, { useState } from 'react';

const EventForm = ({ closeForm }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch('/api/events/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ full_name: fullName, email})
        })
        if (response.ok){
            console.log('Registration Complete')
        } else {
            console.error('Registration Failed')
        }
    } catch (error) {
        console.error('Error during registration', error)
    }
  };

  return (
    <div className="update-container">
      <div className="background-gradient"></div>
      <div className="title">Want to receive updates?</div>
      <div className="description">
        Subscribe to our mailing list to learn more about upcoming events and how to get involved in the CHEER community.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <div className="label">Full Name</div>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="email-input">
          <div className="label">Email Address</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};


export default EventForm;
