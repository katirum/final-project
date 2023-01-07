import React from "react";
import { InnerWrapper, PageContainer, /* Button, */ Img } from 'utils/GlobalStyles'

/* import styled from "styled-components"; */
import LoginPageImg from '../utils/assets/loginpage-img.jpg';
import {Form} from '../components/Form'

const RegisterPage = (title, ) => {
    return (
        <PageContainer>
        <InnerWrapper formWrapper>
        <Form 
           title={title}
           /* setPassword={setPassword}
           setEmail={setEmail}
           handleAction={handleAction} */
           /> 
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </PageContainer>
    )
}

export default RegisterPage