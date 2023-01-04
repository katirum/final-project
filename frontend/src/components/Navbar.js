import React from "react";
/* import styled, { css } from "styled-components/macro"; */
/* import { BrowserRouter as Router/* , Switch, Route */ 
import { NavWrapper, Logo } from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png';
import { HamburgerMenu } from "./HamburgerMenu";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase-config';
import { logout, selectUser } from '../reducers/userSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  const user = useSelector(selectUser);

    return (
        <NavWrapper>
      
          <Logo src={LogoImg} alt="langish logo" />
          {user ? <button onClick={logoutOfApp}>Logout</button> :''}
          <HamburgerMenu />
        </NavWrapper>
    )
}