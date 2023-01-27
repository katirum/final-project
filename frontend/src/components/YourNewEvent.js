import React from 'react';
import styled from 'styled-components/macro';
import { Button, InnerWrapper, PageContainer, Title } from 'utils/GlobalStyles';


export const EventForm = (
  { newEvent, newTitle, newLanguage, newCity, newEventDate, newTime, newPlace, 
    onNewLanguageChange, onNewCityChange, onNewTitleChange, onNewEventChange, 
    onNewEventDateChange, onNewTimeChange, onNewPlaceChange, onFormSubmit }) => {

  return (
    <PageContainer>
      <InnerWrapper>
        <Title>New Event</Title>
        <PostEventContainer
         // OnFormSubmit function is found in create/edit event page
          onSubmit={onFormSubmit}
          onKeyPress={(e) => e.key === 'Enter' ? onFormSubmit(e) : ''}>
          <EventFormDetails>
            <label htmlFor='Title of event'>
              <Input 
                type="text" 
                placeholder="Title"
                value={newTitle}
                onChange={onNewTitleChange} />
                <Required>{!newTitle.length ? '*required' : ''}</Required>
            </label>
            <label htmlFor='Description of event'>
              <TextArea
                rows="5" 
                cols="40"
                value={newEvent}
                onChange={onNewEventChange}
                placeholder="Describe your event here" />
                <Required>{!newEvent.length ? '*required' : ''}</Required>
            </label>
            <label htmlFor='Language'>
              <Input
                type="text" 
                placeholder="Language" 
                value={newLanguage}
                onChange={onNewLanguageChange} />
                <Required>{!newLanguage.length ? '*required' : ''}</Required>
            </label>
            <label htmlFor='City'>
              <Input
                type="text" 
                placeholder="City" 
                value={newCity}
                onChange={onNewCityChange} />
                <Required>{!newCity.length ? '*required' : ''}</Required>
            </label>
            <label htmlFor='Date of event'>
                <Input 
                  type="date" 
                  placeholder="Date" 
                  dateFormat="MMMM d, yyyy"
                  value={newEventDate}
                  onChange={onNewEventDateChange} />
                  <Required>{!newEventDate.length ? '*required' : ''}</Required>
            </label>
            <label htmlFor='Time of event'>
                <Input 
                  type="time" 
                  value={newTime}
                  onChange={onNewTimeChange} />
                  <Required>{!newTime ? '*required' : ''}</Required>
            </label>
            <label htmlFor='Meeting spot or adress'>
              <Input 
                  type="text" 
                  placeholder="Place: Vetekatten, Kungsgatan 2" 
                  value={newPlace}
                  onChange={onNewPlaceChange} />
                  <Required>{!newPlace.length ? '*required' : ''}</Required>
            </label>
        
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

// Styling for the event form, and text in the form
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
// Description of event
const TextArea = styled.textarea`
    margin: 10px 0;
    border-radius: 15px;
    border-color: var(--primary);
    text-align: center;
    width: 90%;

    ::placeholder{
        text-align: center;
        color: var(--primary);
        margin: 10px;
    }
`

// All other input fields
const Input = styled.input`
  margin: 10px 0 0;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  width: 90%;
  border-color: var(--primary);

::placeholder {
  text-align: center;
  color: var(--primary);
  text-align-last: center;
}
`

// Required text
const Required = styled.p`
  margin: 0;
  font-size: 10px;
`