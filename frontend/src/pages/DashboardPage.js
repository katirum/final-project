import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { InnerWrapper, Button, Container } from "utils/GlobalStyles";
import { Link } from "react-router-dom";
/* import { MyEvents } from '../components/MyEvents' */
import styled, {css} from "styled-components";
import { Sidebar } from '../components/Sidebar'


export const DashboardPage = () => {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    let navigate = useNavigate();
   useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/dashboard')
        }

        if (!authToken) {
            navigate('/register')
        }
    }, [navigate])
    
    return (
        <DashboardPageContainer>
            
        <InnerWrapper>
        <Sidebar />
            {/* <MyEvents /> */}
            <MyProfileContainer>
            <Title>My Profile</Title>
            <ProfileDetails><Img ProfileImg src="http://placeimg.com/640/360/any" alt="placeholder" />
            <h3>Name Namesson</h3></ProfileDetails>
            
            <Biography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Biography>
            <Link to="/about"><Button
    type="button">Edit Profile</Button></Link>
            </MyProfileContainer>
       
            <h2>Events by Name Namesson</h2>
            <GridContainer>
            <YourEventsContainer> 
                <Img src="http://placeimg.com/640/360/any" alt="placeholder"/>
    <TextContainer><h3>Lorem ipsum dolor sit amet</h3>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Language: Lorem</p>
    <p>Meeting Spot: Lorem</p></TextContainer>
    
    
    <Link to="/create-events"><Button
    type="button">Edit Event</Button></Link>
</YourEventsContainer>
<YourEventsContainer>
    <Img src="http://placeimg.com/640/360/any" alt="placeholder"/>
    <TextContainer><h3>Lorem ipsum dolor sit amet</h3>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Language: Lorem</p>
    <p>Meeting Spot: Lorem</p></TextContainer>
    

    <Link to="/create-events"><Button
    type="button">Edit Event</Button></Link>
</YourEventsContainer>
</GridContainer>
            <Button onClick={handleLogout}>Logout</Button>
            
        </InnerWrapper>
        </DashboardPageContainer>
    )
}


const DashboardPageContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 15% 0;
    color: var(--secondary);
   
   h2{
    margin: 50px 30%;
    border-bottom: 3px solid var(--secondary);
    padding: 0 0 2px;
   }
`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom:15%;

    @media  (max-width: 700px){
        grid-template-columns: 1fr;
}
`
const Title = styled.h1`
    border-bottom: 3px solid var(--secondary);
    padding: 0 0 2px;
    margin-bottom: 30px;
    font-size: 50px;
`

const MyProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   margin-bottom: 15%;

   @media (max-width: 699px){
    margin-top: 15%;
}

   @media (min-width: 700px) and (max-width: 1200px){
    margin-top: 10%;
}
   
`
const ProfileDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 350px){
        flex-direction: column;
}
    
`
const Biography = styled.p`
    margin: 30px;
    width: 600px;
    border: 2px solid var(--secondary);
    border-radius: 15px;
    padding: 10px;
    background-color: var(--secondary);
    color: var(--primary);

    @media  (max-width: 699px){
    width: 85%;
}

    @media (min-width: 700px) and (max-width: 1200px){
    width: 80%;
}

`
const YourEventsContainer = styled.section`
     text-align: center;
     margin: 0 70px;
     @media  (max-width: 700px){
        margin: 5%;
}
`

const Img = styled.img`
max-width: 100%;
    padding: 5px;
    object-fit: cover;
    border: 2px solid var(--secondary);
    margin: auto 0;

    ${(props) =>
    props.ProfileImg &&
    css`
      width: 150px;
      height: 150px;
      border-radius: 50%;
    `
      }

`

const TextContainer = styled.div`
 margin: 30px 0;
 text-align: justify;
`
