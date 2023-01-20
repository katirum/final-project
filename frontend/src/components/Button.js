import * as React from 'react';
import Button from '@mui/material/Button';

export const Buttons = ({title, handleAction}) => {
    return (
        <Button 
        sx={{
                borderColor: '#f5f5f5',color: '#f5f5f5',
                ':hover': {
                    borderColor: '#f5f5f5',
                  }      
        }} 
        variant="outlined"
        onClick={handleAction}>{title}</Button>
    );
}