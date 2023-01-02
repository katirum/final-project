import React from "react";
/* import { Link } from "react-router-dom"; */
import { InnerWrapper, PageContainer, /* Button, */ Img } from 'utils/GlobalStyles'
/* import { UserInput } from */
/* import styled from "styled-components"; */
import LoginPageImg from '../utils/assets/loginpage-img.jpg';
import {Form} from '../components/Form'

export const LoginPage = ({ title, setPassword, setEmail, handleAction}) => {
     
    return (
        <PageContainer>
        <InnerWrapper formWrapper>
           <Form 
           title={title}
           setPassword={setPassword}
           setEmail={setEmail}
           handleAction={handleAction}
           /> 
        
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </PageContainer>
    )
}

/* const LabelWrapper = styled.div`
    text-align: center;
    padding: 70px 0 30px;
`

const LabelInnerWrapper = styled.div`
    display: inline-block;
    margin: 20% 2% 0;
    label {margin: 5px;}

` 

 const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
` 

const InputContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin: 5px;
        padding: 10px;
        color: var(--secondary);
    }
    input {
        border: none;
        border: 2px solid var(--secondary);
        background-color: transparent;
        padding: 12px;
        
    }
`
*/
