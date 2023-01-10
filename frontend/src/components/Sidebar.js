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
        <Styled to="/about"><p>FAQ</p></Styled>
    </SidebarContainer>
)
}

const SidebarContainer = styled.div`
    position: relative;
    left: 0;
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
            transform: scale(0.95);
        }
    }

    /* a{
        text-decoration: none;
    } */
`

const Styled = styled(Link)`
    text-decoration: none;
   
`