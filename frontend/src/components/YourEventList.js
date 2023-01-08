import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EventList = ({ loading, eventList}) => {
  if (loading) {
    return <h1 className="loading">😬 loading 😬</h1>
  }

  return (
    <EventListContainer>
      {eventList.map((event) => (
      
        <EachEventContainer key={event._id} className="event-list">
          <p>Title: {event.title}</p>
          <p>Description: {event.description}</p>
           <p>Language: {event.language}</p>
          <p>City: {event.city}</p>
          {/*<p>Location: {event.location}</p> */}
          <Link to="/create-events">Edit Event</Link>
        </EachEventContainer>
      ))}
    </EventListContainer>
  )
}

const EventListContainer = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    color: var(--secondary);
    margin-top: 5%;
`

const EachEventContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 2px solid var(--secondary);
`