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


  @media (max-width: 350px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 60%;
      }

  @media (min-width: 351px) and (max-width: 1000px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
      }
`
//Main styling for the Inner Wrapper
export const InnerWrapper = styled.div`
width: 80%;
margin: 0 auto;

/* @media (max-width: 700px){
        width: 60%;
      } */


${(props) =>
    props.formWrapper &&
    css`
      display: flex;
      justify-content: center;
      align-self: center;
      flex-direction: column;
    `
      }

//Wrapper for the footer and media query for footer
${(props) =>
    props.aboutPageWrapper &&
    css`
      width: 90%;
    `
      }

${(props) =>
    props.footerWrapper &&
    css`
      display: flex;
      justify-content: space-evenly;
      align-self: center;
      flex-wrap: wrap;

      // makes the sections in the footer into a column and not a row
      @media (max-width: 700px){
        flex-direction: column;
        width: 50%;
      }
    `
      }

${(props) =>
    props.createEventWrapper &&
    css`
      
    `
      }

${(props) =>
    props.eventWrapper &&
    css`
      width: 90%;

      @media (max-width: 700px){
        
      }
    `
      }

${(props) =>
    props.contactPageWrapper &&
    css`
    margin-top: 5%;

      @media (min-width: 200px) and (max-width: 299px){
        margin-top: 30%;

}

@media (min-width: 300px) and (max-width: 699px){
  margin-top: 30%;

}

@media (min-width: 700px) and (max-width: 1200px){
  /* margin-top: 15%; */
}
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

    /* ${(props) =>
    props.contactPageContainer &&
    css`
    height: 100vh;

    @media (min-width: 700px) and (max-width: 1200px){
     height: 100vh;
}
    `
      } */
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
