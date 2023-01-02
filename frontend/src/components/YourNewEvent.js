import React from 'react';
import styled from 'styled-components';
import { Button } from 'utils/GlobalStyles';

export const EventForm = ({ newEvent, onNewEventChange, onFormSubmit }) => {
  return (
    <PostEventContainer
      onSubmit={onFormSubmit}>
      <EventFormDetails>
        <h3>Create New Event</h3>
        <TextArea
        rows="5" 
        cols="40"
          value={newEvent}
          onChange={onNewEventChange}
          placeholder="write somethinghere..." />
        
      </EventFormDetails>
      <Button
          type="submit">
           Submit
        </Button>
    </PostEventContainer>
  )
}

const PostEventContainer = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
   margin-top: 15%;
    color: var(--secondary);
align-items: center;
`

const EventFormDetails = styled.div`
   
    p{
        margin: 0;
    }
`

const TextArea = styled.textarea`
    margin: 20px 0;
    border-radius: 15px;

    ::placeholder{
        text-align: center;
    }
`