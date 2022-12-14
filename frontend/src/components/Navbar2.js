import React,{useState} from "react";
import { NavLink } from 'react-router-dom'
/* import "./styles.css"; */
import styled from "styled-components";

const COLORS = {
  PrimaryDark: "#115b4c",
  PrimaryLight: "#f5f5f5",

}


const MenuLabel = styled.label`
  background-color: ${COLORS.PrimaryLight};
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
position: fixed;
top: 6.5rem;
right: 6.5rem;
background-image: radial-gradient(
  ${COLORS.PrimaryDark},
  ${COLORS.PrimaryLight}
);
height: 6rem;
width: 6rem;
border-radius: 50%;

transform: ${props => props.clicked? "scale(80)": "scale(0)"};
transition: transform 0.8s;

`

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
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
width: 100%;
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
font-size: 3rem;
font-weight: 300;
text-decoration: none;
color: ${COLORS.PrimaryLight};
padding: 1rem 2rem;
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
                
        <Navigation onClick={handleClick}>
          <List>
            <li>
            <ItemLink onClick={handleClick} to="/">Home</ItemLink>
            <ItemLink onClick={handleClick} to="/">Login/Register</ItemLink>
            <ItemLink onClick={handleClick} to="/">Home</ItemLink>
            <ItemLink onClick={handleClick} to="/">Home</ItemLink>
            </li>
          </List>
        </Navigation>
    </>
  );
}