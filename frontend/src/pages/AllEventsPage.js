import React, { useState, useEffect }from "react";
import { InnerWrapper, Button } from "utils/GlobalStyles";
import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
/* import EventImage from '../utils/assets/logoimage.png' */
/* import data from "../components/HardCodeEvents" */
/* import { EventList } from 'components/YourEventList'; */
import { Sidebar } from "components/Sidebar";
import { Loader } from "components/Loader";
import { Timer } from "components/LoaderTimer";
import { API_URL } from 'utils/urls';

export const AllEventsPage= () => {
  const [loading, setLoading] = useState(true);
    const [eventList, setEventList] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      Timer(setLoading);

      fetchEvent();
    }, []);

   const idToken = sessionStorage.getItem('idToken')
  
    /* first fetch of the list of post */
    const fetchEvent = () => {
     setLoading(false);
     /* fetch(API_URL("events")) */
      fetch(API_URL("events")+'?idToken='+idToken)
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
        <Sidebar />
      <Title>
            All Events
        </Title>
        <Input
        placeholder="Search for title, city or language"
        onChange={event => setQuery(event.target.value)}/>
        <EventGrid>{
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
            <p>Time: {event.time}</p>
            <p>Place: {event.place}</p>
            <Link to="/Home"><Button
    type="button">More Info</Button></Link>
            </EventText>
         </EventDetail>
        
          ))
        } </EventGrid>
      </InnerWrapper>
     
    </AllEventsPageContainer>
  )
}

 

const AllEventsPageContainer = styled.div`
    display: flex;
    margin: 10% 0;
    color: var(--secondary);
    

    @media (min-width: 200px) and (max-width: 299px){
    margin: 60% 5%;

    p{
    margin: 30px 10px;
    }
}

@media (min-width: 300px) and (max-width: 699px){
    margin: 50% 10%;

    p{
    margin: 30px 10px;
    }
}

@media (min-width: 700px) and (max-width: 1200px){
    margin: 30% 10%;
}
`

const Title = styled.h1`
    text-align: center;
    /* text-decoration: 2px underline var(--secondary);
    text-underline-offset: 8px; */
    border-bottom: 3px solid var(--secondary);
    padding: 0 0 2px;
    margin: 0 32% 30px;
    font-size: 3rem;

    @media (min-width: 200px) and (max-width: 299px){
      margin: 15% 20%;
  font-size: 1.5rem;

}

@media (min-width: 300px) and (max-width: 699px){
  margin: 15% 20%;
  font-size: 2rem;
}

@media (min-width: 700px) and (max-width: 1200px){
  margin: 10% 20%;
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

const EventDetail = styled.div`
    margin: 0 5% 10%;
    /* background-color: rgba(245, 245, 245, 0.5); */
     border: 3px solid var(--secondary);
     border-radius: 15px;
  padding: 5%;
     ;
    
     @media (min-width: 200px) and (max-width: 299px){
      margin-top: 10%;

}

@media (min-width: 300px) and (max-width: 699px){
  margin-top: 10%;

}

@media (min-width: 700px) and (max-width: 1200px){
  /* margin-top: 15%; */
}
    
`/**/
const Img = styled.img`
    width: 900px;
    height: 300px;
    padding: 5px;
    object-fit: cover;
    border: 2px solid var(--secondary);
    margin: auto 0;
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
  margin: auto;
  border-radius: 20px;
  text-decoration: none;

  @media (min-width: 200px) and (max-width: 299px){
        
    padding: 1px;
}

@media (min-width: 300px) and (max-width: 699px){
  

}

@media (min-width: 700px) and (max-width: 1200px){
  /* margin-top: 15%; */
}
`
const Tags = styled.div`
  
    color: var(--primary);
    display: inline-block;
    background-color: var(--secondary);
    
    padding: 5px 10px;
    `


/* 
{eventList.map((event) => (
      
        <div key={event._id} className="event-list">
         
          {/* <p>Start: {event.startDate}</p>
          <p>End: {event.endDate}</p> 
          
          <p>Place: {event.place}</p>
          <Link to="/create-events">Edit Event</Link>
        </div>
      ))}
       */




      /* 
export const AllEventsPage = () => {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false);
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
      fetchEvent();
    }, []);
  
    first fetch of the list of post
    const fetchEvent = () => {
      setLoading(true);
      fetch(API_URL("events"))
        .then((res) => res.json())
        .then((data) => setEventList(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
    return (
        <AllEventsPageContainer>
            <InnerWrapper>
                <Title>
            All Events
        </Title>
        <Input 
placeholder="Search"
onChange={event => setQuery(event.target.value)}/>
{
  data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
      return post;
    } else if (post.city.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }else if (post.language.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }
  }).map((item) => (
        <EventsWrapper key={item._id}>
            
<EventDetail>

    <Img src={item.image} alt="placeholder"/>
    <EventText>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <p>Language: {item.language}</p>
    <p>Meeting Spot: {item.meeting_spot}</p>
    <p>Organized by: {item.organizer}</p>

    <Link to="/Home"><Button
    type="button">More Info</Button></Link>
    </EventText>
</EventDetail>

</EventsWrapper>))}
</InnerWrapper>
        </AllEventsPageContainer>
    )
}  */
