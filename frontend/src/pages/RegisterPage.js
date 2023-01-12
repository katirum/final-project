import React from "react";
/* import { Link } from "react-router-dom"; */
import { InnerWrapper, PageContainer, Img, Typography, FormContainer, P } from 'utils/GlobalStyles'
/* import { UserInput } from */
import LoginPageImg from '../utils/assets/loginpage-img.jpg';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Buttons } from 'components/Button';
import styled from 'styled-components/macro';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Link } from 'react-router-dom';


export const RegisterPage = ({ onRegister }) => {
    
    let password
    let email
    const onSubmit = (e) => {
        onRegister({
            email: email,
            password: password,
        })
    }

    return (
        <PageContainer LoginRegister>
          <InnerWrapper formWrapper>
            <FormContainer>
              <ThemeProvider theme={customTheme}>
                 <div>
                   <Typography>
                      Register
                   </Typography>
                 </div>

              <Box
                  component="form"
                  sx={{
                      color: '#f5f5f5',
                      display: 'flex',
                      flexDirection: 'column' 
                     }}
                    noValidate
                    autoComplete="off"
              >
                <TextField 
                  sx={{
                    margin: '10px',
                      "& .MuiInputBase-root": {"& > fieldset": {
                            borderColor: "#f5f5f5"
                        },
                        '@media (max-width: 700px)' : {
                          margin: '3px'
                        }
                    },
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                    borderColor: "#f5f5f5"
                        }
                      },
                      label: {
                        color: "#f5f5f5",
                      }
                 
            }}
            id="email" 
            label="Enter your Email" 
            variant="outlined"
            color="primary"
            onChange={(e)=>{
                email = e.target.value
            }}
            />
            <TextField 
            sx={{
                margin: '10px',
                "& .MuiInputBase-root": {"& > fieldset": {
                        borderColor: "#f5f5f5"
                    },
                    '@media (max-width: 700px)' : {
                      margin: '3px'
                    }
                },
                "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
              borderColor: "#f5f5f5"
                    }
                  },
                  label: {
                    color: "#f5f5f5f5",
                  }
                 
            }}
            id="password" 
            type= "password"
            label="Enter your Password" 
            variant="outlined"
            onChange={(e)=>{
                password = e.target.value
            }}
            />
        </Box>
        </ThemeProvider>

        <Buttons  
          title="Register"
          handleAction={onSubmit}
        />
        
        <P>Already a member? <Link to="/login"><strong>Login here</strong></Link></P>
        </FormContainer>
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </PageContainer>
    )
}

// Color theme for MUI
const customTheme = createTheme({
    palette: {
      primary: {
        light: "#f5f5f5", // border
        main: "#f5f5f5", //button and outline
        dark: "#f5f5f5", 
        contrastText: "#f5f5f5" //text when u type
      },
      secondary: {
        light: "#f5f5f5",
        main: "#c93434",
        dark: "#f5f5f5",
        contrastText: "#f5f5f5"
      },
      text: {
        primary: "#f5f5f5"
      }
      }
  });