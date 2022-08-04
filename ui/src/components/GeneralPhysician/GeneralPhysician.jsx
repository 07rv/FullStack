import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom";
import Search from '../search/Search';

const GeneralPhysician = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <b sx={{color: 'text.primary'}}>
              <Box sx={{ color: 'text.primary' }}>General Physician</Box>
              </b>
            </Link>
          </Typography>
          <Box>
            <Link to="/login" style={{textDecoration: 'none'}}>
                <Button style={{backgroundColor: "#121313c8"}} type='submit' variant='contained'>Logout <ExitToAppOutlinedIcon/></Button>
            </Link>
          </Box>      
        </Toolbar>
      </AppBar>

      <Box sx={{mt:2, ml:4}}>
        <Search/>
      </Box>
    </Box>
  )
}

export default GeneralPhysician