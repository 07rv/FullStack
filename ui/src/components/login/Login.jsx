import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';
import AuthServices from '../../services/AuthServices';

const  authServices = new AuthServices();
function redirectToHome()
{
  window.location="/home";
  window.localStorage.setItem('click',true);
}

export class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      emailAddress: '',
      password: '',
      emailAddressFlag: false,
      passwordFlag: false,
    }
  }
  paperStyle = {padding:20, height:400, width:410, margin:"20px auto"}
  handleChange = e=>{
    const {name, value} = e.target
    this.setState({[name]:value});
  }
  CheckValidity(){
    this.setState({emailAddressFlag:false, passwordFlag:false})
    if(this.state.emailAddress === '')
      this.setState({emailAddressFlag: true})
    if(this.state.password === '')
      this.setState({passwordFlag: true})
  }
  handleSubmit = e=>{
    this.CheckValidity()
    if(this.state.firstName !== '' && this.state.emailAddress !== '' )
    {
      let data = {
        "emailid": this.state.emailAddress,
        "password": this.state.password,
      }
      authServices.SignIn(data).then((data)=>{
        if(data.data.isSuccess){
          redirectToHome()
        }
      }).catch((error)=>{
        console.log(error)
      })
    }
    else{
    }
  }

  render(){
    return (
      <div>
          <Navbar/>
          <Grid>
            <Paper elevation={10} style={this.paperStyle}>
              <Grid align='center'>       
                <Avatar> <AccountCircleIcon/> </Avatar>
                <h2>Sign In</h2> 
              </Grid>
              <Grid align='center' sx={{mt:5}}>
                <TextField size="small" sx={{mb:2, width: '35ch'}} label="email" placeholder='Enter email'
                  name='emailAddress'
                  value={this.state.emailAddress}
                  error={this.state.emailAddressFlag}
                  onChange={this.handleChange}  />
                <TextField sx={{m:2, width: '35ch'}} size="small" label="password" type='password' 
                        name='password'
                        placeholder='Enter password' value={this.state.password}
                        error={this.state.passwordFlag}
                        onChange={this.handleChange} />
              </Grid>
              
              <Grid align='center' sx={{mt:2}}>
                  <Button onClick={this.handleSubmit} sx={{width: '25ch'}} align='center' type='submit' color='primary' variant='contained' fullWidth>
                    Sign In
                  </Button>
              </Grid>
              <Grid align='center'>
                
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


  
}

export default Login
