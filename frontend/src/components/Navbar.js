import React from "react";
/* import styled, { css } from "styled-components/macro"; */
/* import { BrowserRouter as Router/* , Switch, Route */ 
import { NavWrapper, Logo } from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png';
import { HamburgerMenu } from "./HamburgerMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <NavWrapper>
      
          <Link to="/"><Logo src={LogoImg} alt="langish logo" /></Link>
          <HamburgerMenu />
        </NavWrapper>
    )
}
