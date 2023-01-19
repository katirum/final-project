import React, { useEffect, useState } from 'react';
import { useParams/* , Link  */ } from 'react-router-dom';
/* import styled from 'styled-components/macro'; */
import { PageContainer, InnerWrapper, Tags, Title } from '../utils/GlobalStyles';
import { API_URL } from 'utils/urls'

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
    <PageContainer>
    <InnerWrapper eventWrapper>
      <Title> {eventDetails.title}</Title>
      {/* <Link to="/">Go back</Link> */}
      <div>
        {/* <h2>{eventDetails.title}</h2> */}
        <p>{eventDetails.description}</p>
        <p>Language: <Tags> {eventDetails.language}</Tags></p>
        <p>City: {eventDetails.city}</p>
        <p>Date: {eventDetails.eventDate}</p>
        <p>Time: {eventDetails.time}</p>
        <p>Place: {eventDetails.place}</p>
      </div>

    </InnerWrapper>
    </PageContainer>

  )
}