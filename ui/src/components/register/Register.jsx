import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {Link} from "react-router-dom";
import { Navbar } from '../navbar/Navbar';
import AuthServices from '../../services/AuthServices';
import Configuration from '../../configurations/Configuation';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const  authServices = new AuthServices();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function redirectToLogin()
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
      open: false,
      message: '',
      severity : 'info'
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
    if(!Configuration.validEmail.test(this.state.emailAddress))
      this.setState({emailAddressFlag: true})
    if(this.state.password.length < 7)
      this.setState({passwordFlag: true})
    if(this.state.confirmPassword.length < 7)
      this.setState({confirmPasswordFlag: true})
    if(this.state.password !== this.state.confirmPassword){
      this.setState({confirmPasswordFlag: true})
      this.setState({passwordFlag: true})
    }
  }
  handleSubmit = e=>{
    this.CheckValidity()
    if(this.state.firstName !== '' && this.state.lastName !== '' &&
       this.state.emailAddress !== '' && this.state.password !== '' &&
       this.state.confirmPassword !== '')
    {
      if(!Configuration.validEmail.test(this.state.emailAddress)){
        this.setState({message: 'Enter valid emailid'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      else if(this.state.password.length < 7){
        this.setState({message: 'Length of password should be atleast 7 character'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      else if(this.state.confirmPassword.length < 7){
        this.setState({message: 'Length of confirm password should be atleast 7 character'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      else if(this.state.password !== this.state.confirmPassword){
        this.setState({message: 'Password & confirm password should be same'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      else{
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
          if(data.data.isSuccess){
            redirectToLogin()
          }
          else{
            this.setState({message: data.data.message})
            this.setState({severity: 'error'})
            this.handleClick()
          }
        }).catch((error)=>{
          this.setState({message: data.data.message})
          this.handleClick()
        })
      }
    }
    else{
      this.setState({message: 'Please enter all the details'})
      this.setState({severity: 'error'})
      this.handleClick()
    }
  }

  handleClick = () => {
    this.setState({open: true})
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false})
  };

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

        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity={this.state.severity} sx={{ width: '100%' }}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </div>
    )
  }
}

export default Register
