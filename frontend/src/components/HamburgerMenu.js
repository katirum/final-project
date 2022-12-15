import React,{useState} from "react";
import { NavLink } from 'react-router-dom'
/* import "./styles.css"; */
import styled from "styled-components";

const COLORS = {
  PrimaryDark: "#064635",
  PrimaryLight: "#f5f5f5",

}


const MenuLabel = styled.label`
  background-color: ${COLORS.PrimaryLight};
  position: fixed;
  top: 5.5%;
  right: 5%;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
position: fixed;
top: 2rem;
right: 6rem;
background-image: radial-gradient(
  ${COLORS.PrimaryDark},
  ${COLORS.PrimaryLight}
);
height: 6rem;
width: 6rem;
border-radius: 50%;

transform: ${props => props.clicked? "scale(80)": "scale(0)"};
transition: transform 0.8s, opacity 0.8s;

`

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
height:100vh;
position: fixed;
top:0;
right:0;
z-index: 600;
width: ${(props) => (props.clicked ? "100%" : "0")};
opacity: ${(props) => (props.clicked ? "1" : "0")};

transition: width 0.8s;
`
const List = styled.ul`
position: absolute;
list-style: none;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
width: 100%;

`
const ItemLink = styled(NavLink)`
display: inline-block;
font-size: 2rem;
font-weight: 300;
text-decoration: none;
color: ${COLORS.PrimaryLight};
padding: 1rem 2rem;

background-image: linear-gradient(
  120deg,
  transparent 0%,
  transparent 50%,
  #fff 50%
);
background-size: 240%;
transition: all 0.4s;

&:hover, 
&:active {
  background-position: 100%;
  color:${COLORS.PrimaryDark};
  transform: translateX(1rem) ;
}
`

export const HamburgerMenu = () => {
  
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  
  return (
    <>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
          <NavBackground clicked={click}>&nbsp;</NavBackground>
                
        <Navigation clicked={click}>
          <List>
            <li>
            <ItemLink onClick={handleClick} to="/">Home</ItemLink>
            </li>
            <li>
            <ItemLink onClick={handleClick} to="/login">Login/Register</ItemLink>
            </li>
            <li>
            <ItemLink onClick={handleClick} to="/events">Events</ItemLink>
            </li>
            <li>
            <ItemLink onClick={handleClick} to="/dashboard">My Profile</ItemLink>
            </li>
            <li>
            <ItemLink onClick={handleClick} to="/contact">Contact</ItemLink>
            </li>
            <li>
            <ItemLink onClick={handleClick} to="/about">About</ItemLink>
            </li>
          </List>
        </Navigation>
    </>
  );
}