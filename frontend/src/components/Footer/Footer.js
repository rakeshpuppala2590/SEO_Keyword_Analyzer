import React from 'react';
import './Footer.css';
import { AppBar, Toolbar , IconButton,Typography, Stack, Button} from '@mui/material'
import { createTheme } from '@mui/material/styles';

const Footer = () => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#000000', 
      },
      type: 'dark', 
    },
  });
  return (
    <footer className='footer'>
         <AppBar position='static' style={{ paddingLeft: '20px' }} sx={{ backgroundColor: customTheme.palette.primary.main }}>
     <Typography variant='h6' component='div' sx={{flexGrow:1 }}>
     &copy; 2024 Team 3
    </Typography>
    </AppBar>
   
    </footer>
  );
};

export default Footer;
