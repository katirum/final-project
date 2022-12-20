import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { InnerWrapper, Button } from "utils/GlobalStyles";
/* import { Link } from "react-router-dom"; */
import { MyEvents } from '../components/MyEvents'

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
        <InnerWrapper>
            <Button onClick={handleLogout}>Logout</Button>
            <MyEvents />
        </InnerWrapper>
    )
}