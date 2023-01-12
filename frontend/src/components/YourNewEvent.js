import React from 'react';
import styled from 'styled-components/macro';
import { Button, InnerWrapper } from 'utils/GlobalStyles';
import { Sidebar } from './Sidebar';

export const EventForm = (
  { newEvent, newTitle, newLanguage, newCity, newEventDate, newTime, newStartDate, newEndDate, newPlace, onNewLanguageChange, onNewCityChange, onNewTitleChange, onNewEventChange, onNewEventDateChange, onNewTimeChange, onNewStartDateChange, onNewEndDateChange, onNewPlaceChange, onFormSubmit }) => {
  return (
    <InnerWrapper createEventWrapper>
      <Sidebar />
    <PostEventContainer
    // OnFormSubmit function is found in create/edit event page
      onSubmit={onFormSubmit}>
      <EventFormDetails>
        <h1>Create New Event</h1>
        <label>Title</label>
        <Input 
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
         <Input
        type="text" 
        placeholder="Language" 
        value={newLanguage}
        onChange={onNewLanguageChange} />
        <Input
        type="text" 
        placeholder="City" 
        value={newCity}
        onChange={onNewCityChange} />
        
        <Input 
        type="date" 
        placeholder="Date" 
        /* showTimeSelect */
        dateFormat="MMMM d, yyyy"
        value={newEventDate}
        onChange={onNewEventDateChange} />
        <Input 
        type="time" 
        /* timeFormat="hh, mm" */
        value={newTime}
        onChange={onNewTimeChange} />
         {/* <DatePickerTable /> */}
       <Input 
        type="text" 
        placeholder="Meeting spot Ex vete-katten, kungsgatan" 
        value={newPlace}
        onChange={onNewPlaceChange} />
        
      </EventFormDetails>
      <Button style={{marginTop: "20px"}}
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
   margin: 15% 0 10% 0;
    color: var(--secondary);
align-items: center;
/* width: 70%; */
align-self:center;
`

const EventFormDetails = styled.div`
display: flex;
flex-direction: column;

  h1{
    border-bottom: 3px solid var(--secondary);
     margin: 0 5px 30px;
  }
   
    p{
        margin: 0;
    }
`

const TextArea = styled.textarea`
    margin: 10px;
    border-radius: 15px;
    text-align: center;


    ::placeholder{
        text-align: center;
        color: var(--primary);
        margin: 10px;
    }
`
const Input = styled.input`
margin: 10px;
border-radius: 10px;
text-align: center;
padding: 5px;
::placeholder {
  text-align: center;
  color: var(--primary);
  text-align-last: center;
}
`