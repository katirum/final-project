import React from 'react';
import styled from 'styled-components';
import { Button } from 'utils/GlobalStyles';
import DatePicker from "react-datepicker";
import DatePickerTable from './DatePickerTable'

export const EventForm = (
  { newEvent, newTitle, newLanguage, newCity, newEventDate, newTime, newStartDate, newEndDate, newPlace, onNewLanguageChange, onNewCityChange, onNewTitleChange, onNewEventChange, onNewEventDateChange, onNewTimeChange, onNewStartDateChange, onNewEndDateChange, onNewPlaceChange, onFormSubmit }) => {
  return (
    <PostEventContainer
    // OnFormSubmit function is found in create/edit event page
      onSubmit={onFormSubmit}>
      <EventFormDetails>
        <h3>Create New Event</h3>
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
        
        {/* <DatePicker
 isClearable
 filterDate={d => {
   return new Date() < d;
 }}
 placeholderText="Select Start Time"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={newStartDate}
 selectsStart
 startDate={newStartDate}
 onChange={onNewStartDateChange}
/>
<DatePicker
 isClearable
 filterDate={d => {
   return new Date() < d;
 }} 
 placeholderText="Select End Time"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
  selected={newEndDate} 
 selectsEnd
 startDate={newStartDate}
 endDate={newEndDate}
 minDate={newStartDate} 
 onChange={onNewStartDateChange}
/> */}
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