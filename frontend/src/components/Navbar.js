import React from "react";
/* import styled, { css } from "styled-components/macro"; */
/* import { BrowserRouter as Router/* , Switch, Route */ 
import { NavWrapper, Logo } from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png';
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {

    return (
        <NavWrapper>
      
          <Logo src={LogoImg} alt="langish logo" />
          <HamburgerMenu />
        </NavWrapper>
    )
}
