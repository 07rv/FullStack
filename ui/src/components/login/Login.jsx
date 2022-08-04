import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';

const Login = () => {
  const paperStyle = {padding:20, height:'70vh', width:310, margin:"20px auto"}
  return (
    <div>
        <Navbar/>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>       
              <Avatar> <AccountCircleIcon/> </Avatar>
              <h2>Sign In</h2> 
            </Grid>
            <TextField sx={{mb:2}} label="username" placeholder='Enter username' fullWidth/>
            <TextField label="password" placeholder='Enter password' type="password" fullWidth/>
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary' 
                />
              }
              label = "Remember me"
            />
            <Link to="/home" style={{textDecoration: 'none'}}>
              <Button type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
            </Link>
            <Typography sx={{mt:1}}>
              <Link to='' style={{textDecoration: 'none'}}>Forget password?</Link>
            </Typography>
            <Typography style={{color:'black'}}>
              Do you have an account?
              <Link to="/register" style={{textDecoration: 'none'}}>Sign up</Link>
            </Typography>
          </Paper>
        </Grid>
    </div>
  )
}

export default Login
