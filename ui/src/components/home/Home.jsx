import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { Paper } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Search from '../search/Search';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Profile from '../Profile/Profile';

function redirectToHome()
{
  window.location="/";
}

const Home = () => {
  const handleSubmit = e=>{
    localStorage.removeItem('jwtToken');
    redirectToHome();
  }
  const paperStyle = {padding:10, margin:"20px auto"}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow:0}}>
            <Link to="" style={{textDecoration: 'none'}}>
              <b sx={{color: 'text.primary'}}>
              <Box sx={{ color: 'text.primary' }}>HealthXOXO</Box>
              </b>
            </Link>
          </Typography>  
          <Box sx={{ml:30 ,alignItems: 'center',}}>
            <Paper sx={{display: 'flex', flexDirection: 'row'}}  elevation={10} style={paperStyle}>
              <Link to="/doctorlist" style={{textDecoration: 'none',display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <Box sx={{ mr:5, color: 'text.primary', fontWeight: 'bold' }}>24/7 Doctor</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none',display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Medicine</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none',display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Lab Text</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none',display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Remainder</Box>
              </Link>           
              <div style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <AddShoppingCart />
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{color: 'text.primary',fontWeight: 'bold' }}>Cart</Box>
                </Link>
              </div>
            </Paper>
          </Box>  
          <Typography sx={{flexGrow:1}}>
          </Typography>
          <Box align='right' sx={{flexGrow:1, ml:10}}>
              <Button onClick={handleSubmit} style={{backgroundColor: "#121313c8"}} type='submit' variant='contained'>
                Logout <ExitToAppOutlinedIcon/>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Box sx={{ width: '75%' }}><Search/></Box>
          <Box sx={{ flexShrink: 1 }}><Profile/></Box>
        </Box>
      </div>
    </Box>
  )
}

export default Home
