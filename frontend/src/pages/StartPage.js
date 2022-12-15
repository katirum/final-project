import React from "react";
import { Link } from "react-router-dom";
/* import { Navbar } from "components/Navbar"; */
import StartImg from '../utils/assets/startimage.jpg';
import styled from "styled-components/macro";
import { PageContainer, InnerWrapper, Button } from "utils/GlobalStyles";

export const StartPage = () => {
    return (
        <PageContainer>
          <InnerWrapper>
            <TextContainer>
                <h1>Level up your language skills!</h1>
                <h3>Why practice alone when you can do it together? Grab a coffee and let's go!</h3>
                <Link to="/login"><Button
                type="button">Start</Button></Link>
            </TextContainer>
            </InnerWrapper>
            <ImgContainer>
            <Img src={StartImg} alt="langish logo" />
            </ImgContainer>
            
        </PageContainer>
    )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40% 5% 40% 15%;
  color: var(--secondary);
  text-align: center;

  h1{
    font-size: 50px;
    margin-bottom: 5%;
  }

  h3{
    font-size: 25px;
    margin-bottom: 5%;
    line-height: 35px;
  }
`

const ImgContainer = styled.div`
    
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`