import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "utils/GlobalStyles";
/* import { Link } from "react-router-dom"; */

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
        <div>
            Hi!
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}