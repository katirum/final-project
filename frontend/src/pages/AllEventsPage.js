import React, {useState}from "react";
import { InnerWrapper, Button } from "utils/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../components/HardCodeEvents"


export const AllEventsPage = () => {
    const [query, setQuery] = useState("")
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
      }else if (post.organizer.toLowerCase().includes(query.toLowerCase())) {
        return post;}
  }).map((item) => (
        <EventsWrapper key={item.id}>
            
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
}

const AllEventsPageContainer = styled.div`
     display: flex;
    margin: 10% 0;
    color: var(--secondary);
`

const Title = styled.h1`
    text-align: center;
    /* text-decoration: 2px underline var(--secondary);
    text-underline-offset: 8px; */
    border-bottom: 3px solid var(--secondary);
    padding: 0 0 2px;
    margin: 0 32% 30px;
    font-size: 50px;
`

const EventsWrapper = styled.div`
    /* border: 2px solid var(--secondary);
border-radius: 15px;
padding: 50px 0; */
`

const EventDetail = styled.div`
    display: flex;
    /* background-color: rgba(245, 245, 245, 0.5); */
    margin: 80px 50px 30px;
`
const Img = styled.img`
    width: 900px;
    height: 300px;
    padding: 5px;
    object-fit: cover;
    border: 2px solid var(--secondary);
    margin: auto 0;
`

const EventText = styled.div`
 margin: auto 0 auto 5%;
 text-align: justify;
`

const Input = styled.input`
    display: block;
  text-align: center;
  border: none;
  font-size: 15px;
  background-color: var(--secondary);
  padding: 10px 10px;
  margin: auto;
  border-radius: 20px;
  text-decoration: none;
`