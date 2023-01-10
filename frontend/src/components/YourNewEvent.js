import React from 'react';
import styled from 'styled-components';
import { Button, InnerWrapper } from 'utils/GlobalStyles';
import { Sidebar } from './Sidebar';

export const EventForm = (
  { newEvent, newTitle, newLanguage, newCity, newEventDate, newTime, newStartDate, newEndDate, newPlace, onNewLanguageChange, onNewCityChange, onNewTitleChange, onNewEventChange, onNewEventDateChange, onNewTimeChange, onNewStartDateChange, onNewEndDateChange, onNewPlaceChange, onFormSubmit }) => {
  return (
    <InnerWrapper>
      <Sidebar />
    <PostEventContainer
    // OnFormSubmit function is found in create/edit event page
      onSubmit={onFormSubmit}>
      <EventFormDetails>
        <h1>Create New Event</h1>
        <input 
        type="text" 
        placeholder="Title"
        value={newTitle}
        onChange={onNewTitleChange} />
        <TextArea
        rows="5" 
        cols="40"
          value={newEvent}
          onChange={onNewEventChange}
          placeholder="Describe your event here" />
         <input 
        type="text" 
        placeholder="Language" 
        value={newLanguage}
        onChange={onNewLanguageChange} />
        <input 
        type="text" 
        placeholder="City" 
        value={newCity}
        onChange={onNewCityChange} />
        
        <input 
        type="date" 
        placeholder="Date" 
        /* showTimeSelect */
        dateFormat="MMMM d, yyyy"
        value={newEventDate}
        onChange={onNewEventDateChange} />
        <input 
        type="time" 
        /* timeFormat="hh, mm" */
        value={newTime}
        onChange={onNewTimeChange} />
         {/* <DatePickerTable /> */}
       <input 
        type="text" 
        placeholder="Meeting spot Ex vete-katten, kungsgatan" 
        value={newPlace}
        onChange={onNewPlaceChange} />
        
      </EventFormDetails>
      <Button
          type="submit">
           Submit
        </Button>
    </PostEventContainer>
    </InnerWrapper>
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