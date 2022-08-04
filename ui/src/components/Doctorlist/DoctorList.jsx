import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Profile from '../Profile/Profile';
import Search from '../search/Search';

const DoctorList = () => {
  const paperStyle = {padding:10,  margin:"20px auto"}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow:0}}>
              <Link to="/home" style={{textDecoration: 'none'}}>
                <b sx={{color: 'text.primary'}}>
                <Box sx={{ color: 'text.primary' }}>24/7 Doctor</Box>
                </b>
              </Link>
            </Typography>  
            <Box sx={{ml:10 ,alignItems: 'center',}}>
              <Paper sx={{display: 'flex', flexDirection: 'row'}}  elevation={10} style={paperStyle}>
                <Link to="/generalphysician" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary', fontWeight: 'bold' }}>General Physician</Box>
                </Link>
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Neuro Surgeon</Box>
                </Link>
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Eye Care</Box>
                </Link>
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Derma</Box>
                </Link> 
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>ENT</Box>
                </Link> 
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Dentist</Box>
                </Link> 
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Gastro</Box>
                </Link>    
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{ mr:5, color: 'text.primary',fontWeight: 'bold' }}>Gynecologist</Box>
                </Link>        
              </Paper>
            </Box>  
            <Typography sx={{flexGrow:1}}>
            </Typography>
            <Box align='right' sx={{flexGrow:1, ml:5}}>
              <Link to="/login" style={{textDecoration: 'none'}}>
                <Button style={{backgroundColor: "#121313c8"}} type='submit' variant='contained'>Logout <ExitToAppOutlinedIcon/></Button>
              </Link>
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

export default DoctorList

