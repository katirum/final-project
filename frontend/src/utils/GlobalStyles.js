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
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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

// Outer container for the entire page

export const StartPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  // Specific page styling for login/register pages in tablet size
  ${(props) =>
    props.LoginRegister &&
    css`
      @media (max-width: 700px) and (max-height: 400px){
    height: 100%;
      }
    `
      }

// Page container styling for very small devices
@media (max-width: 350px){
  grid-template-columns: repeat(1, 1fr);
  height: 60%;
    }

    // Page container styling for small to medium devices
@media (min-width: 351px) and (max-width: 1000px){
  grid-template-columns: repeat(1, 1fr);
    }
`

export const PageContainer = styled.div`
height: 100%;
`
//Main styling for the Inner Wrapper
export const InnerWrapper = styled.div`
width: 80%;
margin: 0 auto;
color: var(--secondary);
text-align: center;

//Inner wrapper for small devices
@media (max-width: 700px){
        width: 100%;
      }

// Inner wrapper for login/register
${(props) =>
    props.formWrapper &&
    css`
      display: flex;
      justify-content: center;
      align-self: center;
      flex-direction: column;

// Inner wrapper for login/register on small devices
      @media (max-width: 700px){
        margin: 10% auto;
      }
    `
    
      }

//Wrapper for the footer and media query for footer
${(props) =>
    props.footerWrapper &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-self: center;
      flex-wrap: wrap;
      color: var(--primary);

      // makes the sections in the footer into a column and not a row
      @media (max-width: 700px){
        flex-direction: column;
        width: 50%;
      }
    `
      }

`

// Title for login and register
export const Typography = styled.h3`
  color: whitesmoke;
  font-size: 350%;

  @media (max-width: 350px){
        font-size: 200%;
      }
  `

  //Container for login/register form
 export const FormContainer = styled.div `
  border: 2px solid whitesmoke;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  color: whitesmoke;

  @media (max-width: 700px){
    padding: 5px;
      }
  `
  
  //Paragraph in login/register from
 export const P = styled.p`
  margin-top: 5%;

  @media (max-width: 700px){
    margin-top: 10%;
      }
  `

export const NavWrapper = styled.div`
  height: 100px;
  background-color: transparent;
  z-index: 100;
  position: fixed;
`
// Styling for logo on big screen
export const Logo = styled.img`
  height: 8rem;
  position: fixed;
  top: -5px;
  left: 10px;

  // Styling and psoitioning for logo on smaller screen
  @media (min-width: 351px) and (max-width: 700px){
    height: 4rem;
    top: -5px;
    left: -1px;
      }
// Styling and psoitioning for logo on very small screens
      @media (max-width: 350px){
    height: 3rem;
    top: 1px;
    left: -3px;
      }

`

export const Button = styled.button`
  border: 2px solid var(--secondary);
  background-color: transparent;
  color: var(--secondary);
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Nunito Sans', sans-serif;
  cursor: pointer;

  ${(props) =>
    props.start &&
    css`
      margin-bottom: 20px;
    `
      }

${(props) =>
    props.logout &&
    css`
      border: 1px solid var(--secondary);
      position: fixed;
      top: 110px;
      left: 40px;

      // Styling and psoitioning for logo on very small screens
      @media (max-width: 350px){
        top: 55px;
        left: 2px;
        padding: 2px 3px;
        font-size: 10px;
      }

      // Styling and psoitioning for logo on smaller screen
  @media (min-width: 351px) and (max-width: 700px){
    top: 55px;
    left: 5px;
    padding: 4px;
      }

    `
      }
`
// Start page image
export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  // Styling for startpage image. Makes the image appear on top on smaller devices
  @media (max-width: 1000px){
        grid-area: 1 / 1 / span 1 / span 1; 
        height: 40vh;
      }
`
export const Title = styled.h1`
    text-align: center;
    color: var(--secondary);
    border-bottom: 3px solid var(--secondary);
    margin: 15% 10% 0 10%;
    font-size: 50px;

    @media (max-width: 350px){
        font-size: 30px;
        margin: 20%;
      }

  // Styling and psoitioning for logo on smaller screen
  @media (min-width: 351px) and (max-width: 700px){
    font-size: 40px;
    margin: 15%;
      }
`

export const Tags = styled.span`
  
    color: var(--primary);
    display: inline-block;
    background-color: var(--secondary);
    
    padding: 5px 10px;

    @media (max-width: 700px){
        
        padding: 2px;
    }
    `
