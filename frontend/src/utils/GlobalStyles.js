import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #064635; // Background colour
    --secondary: #F5F5F5; // Font Colour
    --tertiary: #D05301;
    --quaternary: #D9E2F7;
    --quinary: #FBFAEF;
  }
  * {
    /* outline: 1px solid red; */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-height: 100vh;/* 
     max-width: 100vw;*/
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--primary);
  }
`

export const NavWrapper = styled.div`
  height: 100px;
`

export const Logo = styled.img`
  height: 150px;
  position: fixed;
  top: 0;
  left: 6rem;
`

export const Button = styled.button`
  border: 2px solid var(--secondary);
  background-color: transparent;
  color: var(--secondary);
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Nunito Sans', sans-serif;
`