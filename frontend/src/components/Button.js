import * as React from 'react';
import Button from '@mui/material/Button';

export const Buttons = ({title, handleAction}) => {
    return (
        <Button 
        variant="contained"
        onClick={handleAction}>{title}</Button>
    );
}