import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';

const Login = () => {
  const paperStyle = {padding:20, height:'70%', width:410, margin:"20px auto"}
  return (
    <div>
        <Navbar/>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>       
              <Avatar> <AccountCircleIcon/> </Avatar>
              <h2>Sign In</h2> 
            </Grid>
            <Grid align='center' sx={{mt:5}}>
              <TextField size="small" sx={{mb:2, width: '35ch'}} label="email" placeholder='Enter email'  />
              <TextField size="small" sx={{width: '35ch'}} label="password" placeholder='Enter password' type="password" />
            </Grid>
            
            <Grid align='center' sx={{mt:2}}>
              <Link to="/home" style={{textDecoration: 'none'}}>
                <Button sx={{width: '25ch'}} align='center' type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
              </Link>
            </Grid>

            <Typography sx={{mt:1}}>
              <Link to='' style={{textDecoration: 'none'}}>Forget password?</Link>
            </Typography>
            <Typography style={{color:'black'}}>
              Don't you have an account?
              <Link to="/register" style={{textDecoration: 'none'}}>Sign up</Link>
            </Typography>
          </Paper>
        </Grid>
    </div>
  )
}

export default Login
