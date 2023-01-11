import styled, { createGlobalStyle, css } from "styled-components/macro";

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
    /*max-height: 100vh; 
     max-width: 100vw;*/
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--primary);
  }
  a{
    text-decoration: none;
  }
`

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
`

export const InnerWrapper = styled.div`
width: 80%;
margin: 0 auto;


${(props) =>
    props.formWrapper &&
    css`
      display: flex;
      justify-content: center;
      align-self: center;
      flex-direction: column;
    `
      }

${(props) =>
    props.footerWrapper &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-self: center;
      flex-wrap: wrap;
    `
      }

${(props) =>
    props.createEventWrapper &&
    css`
      width: 60%;
    `
      }

`
export const Container = styled.div`
height: 100vh;
display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: var(--secondary);
`

export const NavWrapper = styled.div`
  height: 100px;
  background-color: transparent;
  z-index: 100;
  position: fixed;
`

export const Logo = styled.img`
  height: 10rem;
  position: fixed;
  top: 2%;
  left: 2%;
`

export const Button = styled.button`
  border: 2px solid var(--secondary);
  background-color: transparent;
  color: var(--secondary);
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;
`

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
