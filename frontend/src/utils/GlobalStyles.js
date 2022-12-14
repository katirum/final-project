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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cormorant Garamond', serif;
    background-color: var(--primary);
    overflow-x: hidden;
  }
`

export const NavWrapper = styled.div`
  height: 100px;
`

export const Logo = styled.img`
  height: 100px;
  width: 100px;
`