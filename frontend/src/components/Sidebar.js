import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
return(
    <SidebarContainer>
        {/* basically cthe dashboard */}
        <p>My Profile</p>
        <p>Create Event</p>
        {/* Shows created events and where you can edit events */}
        <p>My Events</p>
        <p>Guidelines</p>
    </SidebarContainer>
)
}

const SidebarContainer = styled.div`
    position: relative;
    left: 0;
    background-color: var(--secondary);
    color: var(--primary);
    text-decoration: underline;
    line-height: 2;
    height: 100vh;
    position: fixed;
    padding: 30px;
<<<<<<< HEAD
    
=======
>>>>>>> footer
`