import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';
import AuthServices from '../../services/AuthServices';

const  authServices = new AuthServices();
function redirectcontact()
{
  window.location="/login";
  window.localStorage.setItem('click',true);
}

export class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      firstNameFlag: false,
      lastNameFlag: false,
      emailAddressFlag: false,
      passwordFlag: false,
      confirmPasswordFlag: false,
    }
  }
  paperStyle = {padding:20, height:400, width:510, margin:"20px auto"}
  handleChange = e=>{
    const {name, value} = e.target
    this.setState({[name]:value});
  }
  CheckValidity(){
    this.setState({firstNameFlag: false, 
                  lastNameFlag: false, emailAddressFlag:false,
                   passwordFlag:false, confirmPasswordFlag: false})
    if(this.state.firstName === '')
      this.setState({firstNameFlag: true})
    if(this.state.lastName === '')
      this.setState({lastNameFlag: true})
    if(this.state.emailAddress === '')
      this.setState({emailAddressFlag: true})
    if(this.state.password === '')
      this.setState({passwordFlag: true})
      if(this.state.confirmPassword === '')
      this.setState({confirmPasswordFlag: true})
  }
  handleSubmit = e=>{
    this.CheckValidity()
    if(this.state.firstName !== '' && this.state.lastName !== '' &&
       this.state.emailAddress !== '' && this.state.confirmPassword !== '' &&
       this.state.confirmPassword !== '')
    {
      let data = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "emailid": this.state.emailAddress,
        "password": this.state.password,
        "confirmPassword": this.state.confirmPassword,
        "address": '',
        "age": 0,
      }
      authServices.SignUp(data).then((data)=>{
        console.log(data)
        if(data.data.isSuccess){
          redirectcontact()
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
                <h2>Sign Up</h2>
            </Grid>
            <Grid align='center'>
              <TextField sx={{m:2}} size="small" label="firstname"
                        name='firstName' 
                        placeholder='Enter firstname' value={this.state.firstName}
                        error={this.state.firstNameFlag}
                        onChange={this.handleChange} />
              <TextField sx={{m:2}} size="small" label="lastname" 
                        name='lastName'
                        placeholder='Enter lastname'value={this.state.lastName}
                        error={this.state.lastNameFlag}
                        onChange={this.handleChange}  />
            </Grid>
            <TextField sx={{ml: 2}} size="small" label="email address" 
                        name='emailAddress'
                        placeholder='Enter emailId'value={this.state.emailAddress}
                        error={this.state.emailAddressFlag}
                        onChange={this.handleChange} />
            <Grid align='center'>
              <TextField sx={{m:2}} size="small" label="password" type='password' 
                        name='password'
                        placeholder='Enter password' value={this.state.password}
                        error={this.state.passwordFlag}
                        onChange={this.handleChange} />
              <TextField sx={{m:2}} size="small" label="confirm password" type='password' 
                        name='confirmPassword'
                        placeholder='Enter confirm password'value={this.state.confirmPassword}
                        error={this.state.confirmPasswordFlag}
                        onChange={this.handleChange} />
            </Grid>

            <Grid align='center'>
                <Button onClick={this.handleSubmit} sx={{width: '35ch'}} align='center' type='submit' color='primary' variant='contained' fullWidth>
                  Sign Up
                </Button>
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
}

export default Register
