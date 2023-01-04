import React, { useEffect, useState } from 'react';
import { EventList } from 'components/YourEventList';
import { EventForm } from 'components/YourNewEvent';
import { API_URL } from 'utils/urls';

export const CreateEditEventsPage = () => {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newEvent, setNewEvent] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    fetchEvent();
  }, []);

  /* first fetch of the list of post */
  const fetchEvent = () => {
    setLoading(true);
    fetch(API_URL("events"))
      .then((res) => res.json())
      .then((data) => setEventList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  /* functions for all the changes that happen after input/like a post */

  /* handleNewThoughtChange allows us to write something in the text area */
  const handleNewEventChange = (event) => {
    setNewEvent(event.target.value)
  }

  const handleNewLocationChange = (event) => {
    setNewLocation(event.target.value)
  }

  const handleNewLanguageChange = (event) => {
    setNewLanguage(event.target.value)
  }

  const handleNewCityChange = (event) => {
    setNewCity(event.target.value)
  }

  /* onFormSubmit allows us to click on the submit button
  and then it displays the whole recent thoughts */
  const onFormSubmit = (event) => {
    event.preventDefault()

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // eslint-disable-next-line quotes
        description: newEvent // message is the key in API
      })
    }
    fetch(API_URL("events"), option)
      .then((res) => res.json())
      .then(() => fetchEvent())
      .finally(() => setNewEvent('').setNewLanguage('').setNewCity('').setNewLocation('')) // shows the new thought as it targets the value on the input you posted
  }


  return (
    <div>
      <EventForm
        newEvent={newEvent}
        newLocation={newLocation}
        newLanguage={newLanguage}
        newCity={newCity}
        onNewEventChange={handleNewEventChange}
        onNewLocationChange={handleNewLocationChange}
        onNewLanguageChange={handleNewLanguageChange}
        onNewCityChange={handleNewCityChange}
        onFormSubmit={onFormSubmit} />
      <EventList
        loading={loading}
        eventList={eventList}
        setEventList={setEventList} />

    </div>

  );
}