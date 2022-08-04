import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';

const Register = () => {
  const paperStyle = {padding:20, height:'70vh', width:510, margin:"20px auto"}
  return (
    <div>
      <Navbar/>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
              <Avatar> <AccountCircleIcon/> </Avatar>
              <h2>Sign Up</h2>
          </Grid>
          <Grid align='center'>
            <TextField sx={{m:2}} size="small" label="firstname" placeholder='Enter firstname' />
            <TextField sx={{m:2}} size="small" label="lastname" placeholder='Enter lastname' />
          </Grid>
          <TextField sx={{ml: 2}} size="small" label="email address" placeholder='Enter emailId'/>
          <Grid align='center'>
            <TextField sx={{m:2}} size="small" label="password" type='password' placeholder='Enter password' />
            <TextField sx={{m:2}} size="small" label="confirm password" type='password' placeholder='Enter confirm password' />
          </Grid>

          <Grid align='center'>
            <Link to="/home" style={{textDecoration: 'none'}}>
              <Button sx={{width: '35ch'}} align='center' type='submit' color='primary' variant='contained' fullWidth>Sign Up</Button>
            </Link>
          </Grid>
          <Typography sx={{ml:2, mt:1 }} style={{color:'black'}}>
            Already hace an account?
            <Link to="/login" style={{textDecoration: 'none'}}>Sign in</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  )
}

export default Register
