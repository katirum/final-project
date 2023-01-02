import React from 'react';
import styled from 'styled-components';
import { InnerWrapper } from 'utils/GlobalStyles';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <FooterContainer>
      <InnerWrapper footerWrapper>
        <InfoColumn>
          <h3>ABOUT US</h3>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/guidelines">Guidelines</Link>
        </InfoColumn>
        <InfoColumn>
          <h3>FOLLOW US</h3>
          <a href='/#'>Twitter</a>
          <a href='/#'>Instagram</a>
          <a href='/#'>Facebook</a>
        </InfoColumn>
        <InfoColumn>
          <h3>JOIN US</h3>
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
  
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  
`

const Copyright = styled.p`
  font-size: 12px;
  flex-basis: 100%;
  margin: 40px 0 20px 0;
`