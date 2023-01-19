import React from 'react';
import styled from 'styled-components/macro';
import { Button, InnerWrapper, PageContainer, Title } from 'utils/GlobalStyles';


export const EventForm = (
  { newEvent, newTitle, newLanguage, newCity, newEventDate, newTime, newStartDate, newEndDate, newPlace, onNewLanguageChange, onNewCityChange, onNewTitleChange, onNewEventChange, onNewEventDateChange, onNewTimeChange, onNewStartDateChange, onNewEndDateChange, onNewPlaceChange, onFormSubmit }) => {
  return (
    <PageContainer>
    <InnerWrapper>
      {/* <Sidebar /> */}
      <Title>New Event</Title>
    <PostEventContainer

    // OnFormSubmit function is found in create/edit event page
      onSubmit={onFormSubmit}>
      <EventFormDetails>
        
        {/* <label>Title</label> */}
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
    </PageContainer>
  )
}

const PostEventContainer = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
   margin: 5% auto;
   padding: 5% 0;
    color: var(--secondary);
align-items: center;
width: 70%;
align-self:center;
border: 3px solid var(--secondary);
border-radius: 15px;

@media (max-width: 700px){
        border: none;

      }
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

    @media (max-width: 250px){
        width: 100%;

      }

    @media (min-width: 251px) and (max-width: 700px){
        width: 100%;

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