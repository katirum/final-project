import React, { useState, useEffect }from "react";
import { InnerWrapper, Button, Title } from "utils/GlobalStyles";
import styled from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "components/Loader";
import { Timer } from "components/LoaderTimer";
import { API_URL } from 'utils/urls';
import { Tags } from "utils/GlobalStyles";

export const AllEventsPage= () => {
  const [loading, setLoading] = useState(true);
    const [eventList, setEventList] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      Timer(setLoading);

      fetchEvent();
    }, []);

    let navigate = useNavigate();
useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/events')
    }

    if (!authToken) {
        navigate('/login')
    }
}, [navigate])
  
    /* first fetch of the list of post */
    const fetchEvent = () => {
     setLoading(false);
      fetch(API_URL("events"))
        .then((res) => res.json())
        .then((data) => setEventList(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(true));
    }
  if (loading) {
    return <Loader />
  }

  return (
    <AllEventsPageContainer>
      <InnerWrapper eventWrapper>
      <Title>
        All Events
      </Title>
      {/* this is a search bar that responds to the user as soon as they type */}
      <Input
        placeholder="Search for title, city or language"
        onChange={event => setQuery(event.target.value)}/>
        <EventGrid>{
          // eslint-disable-next-line array-callback-return
          eventList.filter(post => {
            if (query === '') {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            } else if (post.city.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }else if (post.language.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((event) => (
            <EventDetail key={event._id}>
              <EventText>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Language: <Tags> {event.language}</Tags></p>
              <p>City: {event.city}</p>
              <p>Date: {event.eventDate}</p>
              <Link to={`${event._id}`}>
                <Button type="button">More Info</Button>
              </Link>
              </EventText>
           </EventDetail>
          ))
        } 
        </EventGrid>
      </InnerWrapper>
    </AllEventsPageContainer>
  )
}

 
const AllEventsPageContainer = styled.div`
    display: flex;
    margin: 10%;
    color: var(--secondary);
    
    @media (max-width: 350px){
      margin: 10% 0;
    }

    @media (min-width: 351px) and (max-width: 699px){
      p{
        margin: 30px 10px;
      }
    }

    @media (min-width: 1300px) and (max-width: 2000px){
      margin: 2%;
    }
`

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5% 0 0 10%;

  @media (min-width: 200px) and (max-width: 299px){
    grid-template-columns: 1fr;
    margin: 0;
  }

  @media (min-width: 300px) and (max-width: 699px){
    grid-template-columns: 1fr;
    margin: 0;
  }

  @media (min-width: 700px) and (max-width: 1200px){
    margin: 5% 0;
  }
`
//styling for event detail
const EventDetail = styled.div`
  margin: 0 5% 10%;
  border: 3px solid var(--secondary);
  border-radius: 15px;
  padding: 5%;
    
  // For really small devices
  @media  (max-width: 350px){
    padding: 0;
    margin: 20px 0;
  }

  @media (min-width: 300px) and (max-width: 699px){
    margin-top: 10%;
  }   
`

const EventText = styled.div`
  margin: 5%;
  text-align: justify;

  h2{
    text-align: center;
    background-color: var(--secondary);
    color: var(--primary);
    padding: 10px 0;
    margin-bottom: 5%;
  }

  Button{
    display: flex;
    margin: 0 auto;
    }
`

const Input = styled.input`
  display: block;
  text-align: center;
  border: none;
  font-size: 15px;
  background-color: var(--secondary);
  padding: 2% 5%;
  margin: 2% auto 0;
  border-radius: 20px;
  text-decoration: none;

  @media (min-width: 200px) and (max-width: 299px){   
    padding: 1px;
  }
`