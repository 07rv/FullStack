import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <b sx={{color: 'text.primary'}}>
              <Box sx={{ color: 'text.primary' }}>HealthXOXO</Box>
              </b>
            </Link>
          </Typography>
          <Box>
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Button color="inherit" variant="contained" sx={{mr:2, color:"black"}}> 
                <AccountCircleIcon/> Login
              </Button>
            </Link>
            <Link to="/register" style={{textDecoration: 'none'}}>
              <Button color="inherit" variant="contained" sx={{mr:2, color:"black"}}> 
                <NoAccountsIcon/> Register
              </Button>
            </Link>
          </Box>      
        </Toolbar>
      </AppBar>
    </Box>
  );
}
