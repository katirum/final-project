import React from 'react';
import styled from 'styled-components';
import LoaderImg from '../utils/assets/loader.png'

export const Loader = () => {
    
  return (
    <LoaderContainer>
      <img src={LoaderImg} alt="loader"/>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    img{
      height: 20vh;
    }
`