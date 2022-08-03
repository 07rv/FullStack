import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HomeXOXO
          </Typography>
          <Box>
            <Button color="inherit" variant="contained" sx={{mr:2, color:"black"}}> 
              <AccountCircleIcon/> Login
            </Button>
            <Button color="inherit" variant="contained" sx={{color: "black"}}>
              <NoAccountsIcon/> Register
            </Button>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
