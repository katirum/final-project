import React from "react";
/* import { Link } from "react-router-dom"; */
import { InnerWrapper, PageContainer, Button, Img } from 'utils/GlobalStyles'
/* import { UserInput } from */
import styled from "styled-components";
import LoginPageImg from '../utils/assets/loginpage-img.jpg';

export const LoginPage = () => {
    return (
        <PageContainer>
        <InnerWrapper>
            <LabelWrapper>
        <LabelInnerWrapper>
        <label htmlFor="register">Register</label>
        <input 
            type="radio"
            id="register"
            /* checked={mode === "register"} */
            /* onChange={() => setMode("register") */
        />
        </LabelInnerWrapper>
        <LabelInnerWrapper>
        <label htmlFor="login">Login</label>
        <input 
            type="radio"
            id="login"
            /* checked={mode === "login"}
            onChange={() => setMode("login")} */
        />
        </LabelInnerWrapper>
        </LabelWrapper>
        <Form /* onSubmit={onFormSubmit} */>
        <InputContainer>
            <label htmlFor="username">Username</label>
            <input 
               type="text"
               id="username"
               /* value={username}
               onChange={e => setUsername(e.target.value)} */ />
            </InputContainer>
            <InputContainer>
            <label htmlFor="password">Password</label>
            <input 
               type="password"
               id="password"
               /* value={password}
               onChange={e => setPassword(e.target.value)} */ />
           </InputContainer>
        <Button type="submit">Submit</Button>   
        </Form> 
        
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </PageContainer>
    )
}

const LabelWrapper = styled.div`
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