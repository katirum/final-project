import React from "react";
/* import styled, { css } from "styled-components/macro"; */
/* import { BrowserRouter as Router/* , Switch, Route */ 
import { NavWrapper, Logo } from "utils/GlobalStyles";
import LogoImg from '../utils/assets/logoimage.png'
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {

    return (
        <NavWrapper>
           <Logo src={LogoImg} alt="langish logo" />
          <HamburgerMenu />


        </NavWrapper>
    )
}



{/* <Menu>
<li><MenuItem href="#">Home</MenuItem></li>
<li><MenuItem href="#">Profile</MenuItem></li>
<li><MenuItem href="#">About</MenuItem></li>
<li><MenuItem href="#">Contacts</MenuItem></li>
</Menu>
<Hamburger>
material icons https://material.io/resources/icons/
<i class="menuIcon material-icons">menu</i>
<CloseIcon material-icons>close</CloseIcon>
</Hamburger> */}

/* const Menu = styled.ul `
position: fixed;
  transform: translateY(-100%);
  transition: transform 0.2s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: black;
  color: white;
  list-style: none;
  padding-top: 4rem;
`

const MenuItem = styled.a`

  display: block;
  margin: 2rem 4rem;
  font-size: 1.8rem;
  color: white;
  text-decoration: none;

:hover {
  text-decoration: underline;
}
`
const Hamburger = styled.button`
  position: fixed;
  z-index: 100;
  top: 1rem;
  right: 1rem;
  padding: 4px;
  border: black solid 1px;
  background: white;
  cursor: pointer;
`

const CloseIcon = styled.i`
display: none;
` */