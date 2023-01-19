import React from "react";
import { InnerWrapper, StartPageContainer, Img, Typography, FormContainer, P } from 'utils/GlobalStyles'
import LoginPageImg from '../utils/assets/loginpage-img.jpg';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Buttons } from 'components/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Link } from 'react-router-dom';


export const LoginPage = ({ onLogin }) => {
    
    let password
    let email
    const onSubmit = (e) => {
        onLogin({
            email: email,
            password: password,
        })
    }

    return (
        <StartPageContainer LoginRegister>
        <InnerWrapper formWrapper>
        <FormContainer>
        <ThemeProvider theme={customTheme}>
        <div>
          <Typography >
            Login
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
          title="Login"
          handleAction={onSubmit}
        />
        
        <P>Not a member? <Link to="/register"><strong>Register here</strong></Link></P>
      

        </FormContainer>
        
        </InnerWrapper>
        <Img src={LoginPageImg} alt="login-image" />
        </StartPageContainer>
    )
}

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

 




  