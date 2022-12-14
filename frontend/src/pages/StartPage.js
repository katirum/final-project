import React from "react";
//import { Link } from "react-router-dom";
/* import { Navbar } from "components/Navbar"; */
import StartImg from '../utils/assets/startimage.jpg';
import styled from "styled-components";
import { Button } from "utils/GlobalStyles";

export const StartPage = () => {
    return (
        <StartPageContainer>
            <TextContainer>
                <h1>Level up your language skills!</h1>
                <h3>Why practice alone when you can do it together? Grab a coffee and let's go!</h3>
                <Button>Start</Button>
            </TextContainer>
            <ImgContainer>
            <Img src={StartImg} alt="langish logo" />
            </ImgContainer>
            
        </StartPageContainer>
    )
}

const StartPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40% 10% 0;
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