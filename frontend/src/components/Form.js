import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Buttons } from './Button';

export const Form = ({title, setPassword, setEmail, handleAction}) => {

    return (
        <div>
        <div>
            <h3>
                {title} Form
            </h3>
        </div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            id="email" 
            label="Enter the Email" 
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
            id="password" 
            type= "password"
            label="Enter the Password" 
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            />
        </Box>
        <Buttons 
        title={title}
        handleAction={handleAction}/>
        </div>
    );
}
