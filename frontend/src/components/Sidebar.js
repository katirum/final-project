import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
return(
    <SidebarContainer>
        {/* basically the dashboard */}
        <Styled to="/dashboard"><p>My Profile</p></Styled>
        <Styled to="/create-events"><p>Create Event</p></Styled>
        {/* Shows created events and where you can edit events */}
        <Styled to="/events"><p>All Events</p></Styled>
        <Styled to="/faq"><p>FAQ</p></Styled>
    </SidebarContainer>
)
}

const SidebarContainer = styled.div`
    position: relative;
    left: 0;
    top: 30%;
    background-color: var(--secondary);
    color: var(--primary);
    line-height: 2;
    height: 100vh;
    border-top-right-radius: 15px;
    position: fixed;
    padding: 30px;

    p{
        font-size: 150%;
        font-weight: 900;
        border-top: 2px solid var(--primary);
        transition: transform .2s; 

        &:hover{
            /* border-top: none; */
            transform: scale(0.8);
        }
    }

    /* a{
        text-decoration: none;
    } */
    @media (max-width: 350px){
    position: relative;
    display: flex;
    justify-content: center;
    top: 0%;
    background-color: var(--secondary);
    color: var(--primary);
    line-height: 2;
    border-top-right-radius: 0;
    height: 100px;
    flex-wrap: nowrap;

    p{
        font-size: 15px;
        text-align: center;
    }

}


@media (min-width: 351px) and (max-width: 699px){
    position: relative;
    display: flex;
    justify-content: center;
    top: 0%;
    left: -12%;
    background-color: var(--secondary);
    color: var(--primary);
    line-height: 2;
    border-top-right-radius: 0;
    height: 140px;
    width: 80vw;

    p{
        font-size: 15px;
        text-align: center;
    }

}

@media (min-width: 700px) and (max-width: 1200px){
    position: relative;
    display: flex;
    justify-content: space-evenly;
    top: 0;
    left: -13%;
    background-color: var(--secondary);
    color: var(--primary);
    line-height: 2;
    border-top-right-radius: 0;
    /* padding: 25px; */
    height: 8vh;
    width: 100vw;
    /* z-index: 100; */

    p{
        font-size: 15px;
        text-align: center;
    }
}
`

// Links in the navbar
const Styled = styled(Link)`
    text-decoration: none;
    flex-basis: 20%;

// Size on margin in text in links
    p {
        @media  (max-width: 700px){
        margin-bottom: 1.5rem;
    }
}
   
`