import React from 'react';
import styled from 'styled-components';
import { InnerWrapper } from 'utils/GlobalStyles';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <FooterContainer>
      <InnerWrapper footerWrapper>
        <InfoColumn>
          <h2>ABOUT US</h2>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </InfoColumn>
        <InfoColumn>
          <h2>FOLLOW US</h2>
          <a href='/#'>Twitter</a>
          <a href='/#'>Instagram</a>
          <a href='/#'>Facebook</a>
        </InfoColumn>
        <InfoColumn>
          <h2>JOIN US</h2>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </InfoColumn>
        <Copyright>Site design / logo © 2023 Languable</Copyright>
      </InnerWrapper>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgba(	245,	245,	245 );
  color: var(--primary);
  padding-top: 40px;
  
  @media (min-width: 351px) and (max-width: 700px){
    flex-direction: column;
  }

  @media  (max-width: 350px){
    flex-direction: column;
    padding-top: 20px;
  }
`
// Styling for info columns
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 350px){
  margin-bottom: 10px;
  h2 {
    font-size: 15px;
  }
  a{
    font-size: 12px;
  }
  }

  @media (min-width: 351px) and (max-width: 700px){
    h2 {
      font-size: 20px;
    }
  }
`
// Copyright logo in footer
const Copyright = styled.p`
  font-size: 12px;
  flex-basis: 100%;
  margin: 40px 0 20px 0;

  @media (max-width: 350px){
    margin: 10px 0 5px 0;
  }

`