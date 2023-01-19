import React,{ useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
/* import styled, { css } from "styled-components/macro"; */
/* import { BrowserRouter as Router/* , Switch, Route */ 
import { NavWrapper, Logo, Button } from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png';
import { HamburgerMenu } from "./HamburgerMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  // Function to reset authtoken when clocked and redirect to start page
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/')
}

//Gets auth token from the session storage to check if user is logged in
let authToken = sessionStorage.getItem('Auth Token')

    return (
        <NavWrapper>
      
          <Link to="/"><Logo src={LogoImg} alt="langish logo" /></Link>
          <HamburgerMenu />
          
        {authToken
            ? <Button logout onClick={handleLogout}>Logout</Button> 
            : <></>
        }
  
          
        </NavWrapper>
    )
}
