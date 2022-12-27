import * as React from 'react';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Buttons } from './Button';
import styled from 'styled-components/macro';
import Typography from '@mui/material/Typography'
import {createTheme, ThemeProvider} from '@mui/material/styles'

/* import { InnerWrapper } from '../utils/GlobalStyles' */

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


export const Form = ({title, setPassword, setEmail, handleAction}) => {
  
    return (<>
        
            <FormContainer>
            <ThemeProvider theme={customTheme}>
        <div>
            <Typography variant="h3" color="common.white">
                {title} Form
            </Typography>
        </div>
        
        <Box
            component="form"
            sx={{
                color: '#f5f5f5'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            sx={{
                "& .MuiInputBase-root": {"& > fieldset": {
                        borderColor: "#f5f5f5"
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
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
            sx={{
                "& .MuiInputBase-root": {"& > fieldset": {
                        borderColor: "#f5f5f5"
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
            onChange={(e) => setPassword(e.target.value)}
            />
        </Box>
        </ThemeProvider>

        <Buttons 
        
        title={title}
        handleAction={handleAction}/>
        </FormContainer>

        </>
        
    );
}

const FormContainer = styled.div `
border: 2px solid whitesmoke;
border-radius: 15px;
padding: 20px;
`



