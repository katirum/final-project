import React from "react";
import { Link } from "react-router-dom";
import { InnerWrapper, PageContainer } from 'utils/GlobalStyles'
import { UserInput } from
import LoginPageImg from '../utils/assets/liginpage-img.jpg';

export const LoginPage = () => {
    return (
        <PageContainer>
        <InnerWrapper>
            <UserInputContainer>
                <UserInput />
            </UserInputContainer>
        
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login image" />
        </PageContainer>
    )
}