import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer, InnerWrapper, Tags, Title } from '../utils/GlobalStyles';
import { API_URL } from 'utils/urls'
import styled from "styled-components/macro";

export const EventDetailsPage = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL(`events/${id}`))
      .then((res) => res.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <PageContainer >
      <InnerWrapper>
        <Title> {eventDetails.title}</Title>
        <EventDetailsContainer>   
          <p>{eventDetails.description}</p>
          <p>Language: 
            <Tags> {eventDetails.language}</Tags>
          </p>
          <p>City: {eventDetails.city}</p>
          <p>Date: {eventDetails.eventDate}</p>
          <p>Time: {eventDetails.time}</p>
          <p>Place: {eventDetails.place}</p>
        </EventDetailsContainer>
      </InnerWrapper>
    </PageContainer>

  )
}

const EventDetailsContainer = styled.div`
  margin: 5% 0;
  border: 3px solid var(--secondary);
  border-radius: 15px;

  p{
    text-align: justify;
    margin: 2% 5%;
  }

  @media (min-width: 400px) and (max-width: 700px){
    margin: 5% 2%;
  }
`