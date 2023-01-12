import React, { useEffect, useState } from 'react';
/* import { EventList } from 'components/YourEventList'; */
import { EventForm } from 'components/YourNewEvent';
import { API_URL } from 'utils/urls';
import { useNavigate } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css"

export const CreateEditEventsPage = () => {

  const [newEvent, setNewEvent] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newTime, setNewTime] = useState(null);
  const [newPlace, setNewPlace] = useState('');
  const [newEventDate, setNewEventDate] = useState(new Date());
   
  /* functions for all the changes that happen after input/like a post */

  /* handleNewThoughtChange allows us to write something in the text area */
  const handleNewEventChange = (event) => {
    setNewEvent(event.target.value)
  }

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value)
  }
  const handleNewLanguageChange = (event) => {
    setNewLanguage(event.target.value)
  }

   const handleNewEventDateChange = (event) => {
    setNewEventDate(event.target.value)
   }

  const handleNewCityChange = (event) => {
    setNewCity(event.target.value)
  } /**/
  const handleNewPlaceChange = (event) => {
    setNewPlace(event.target.value)
  }
  const handleNewTimeChange = (event) => {
    setNewTime(event.target.value)
  }

  /* onFormSubmit allows us to click on the submit button
  and then it displays the whole recent thoughts */
  const onFormSubmit = (event) => {
    event.preventDefault()

    // TO POST A NEW EVENT
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // eslint-disable-next-line quotes
        title: newTitle,
        description: newEvent,
        language: newLanguage,
        city: newCity,
        eventDate: newEventDate,
        place: newPlace,
        time: newTime,
         // message is the key in API
      })
    }
    fetch(API_URL("events"), option)
      .then((res) => res.json())
      .finally(() => setNewEvent('').setNewTitle('').setNewLanguage('').setNewCity('').setNewEventDate('').setNewTime('')/* .setNewPlace('').setNewStartDate('').setNewEndDate('') */) // shows the new thought as it targets the value on the input you posted
  }

 let navigate = useNavigate();
   useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/create-events')
        }

        if (!authToken) {
            navigate('/register')
        }
    }, [])

  return (
    <div>
      <EventForm
        newEvent={newEvent}
        newTitle={newTitle}
        newLanguage={newLanguage}
        newCity={newCity}
        newEventDate={newEventDate} 
        newPlace={newPlace} 
        newTime={newTime}
        onNewEventChange={handleNewEventChange}
        onNewTitleChange={handleNewTitleChange}
        onNewLanguageChange={handleNewLanguageChange}
        onNewCityChange={handleNewCityChange}
        onNewEventDateChange={handleNewEventDateChange}

        onNewPlaceChange={handleNewPlaceChange}
        onNewTimeChange={handleNewTimeChange}
        onFormSubmit={onFormSubmit} />
    </div>
  );
}