import { Avatar, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import ThreePIcon from '@mui/icons-material/ThreeP';
import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AuthServices from '../../services/AuthServices';
import Configuration from '../../configurations/Configuation';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import jwt_decode from "jwt-decode";

const  authServices = new AuthServices();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function redirectToHome()
{
  window.location="/";
}

export class EditProfile extends React.Component {
  constructor(){
    super();
    const token = localStorage.getItem('jwtToken');
    const decoded = jwt_decode(token);
    this.state = {
      firstName: decoded.FirstName,
      lastName: decoded.LastName,
      emailAddress: decoded.EmailId,
      address: decoded.Address,
      age: decoded.Age,
      firstNameFlag: false,
      lastNameFlag: false,
      emailAddressFlag: false,
      addressFlag: false,
      ageFlag: false,
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
                  addressFlag:false, ageFlag: false})
    if(this.state.firstName === '')
      this.setState({firstNameFlag: true})
    if(this.state.lastName === '')
      this.setState({lastNameFlag: true})
    if(this.state.emailAddress === '')
      this.setState({emailAddressFlag: true})
    if(this.state.address === '')
      this.setState({addressFlag: true})
    if(this.state.age === 0 || this.state.age === '')
      this.setState({ageFlag: true})
    if(!Configuration.validEmail.test(this.state.emailAddress))
      this.setState({emailAddressFlag: true})
  }
  handleLogout = e=>{
    redirectToHome();
  }
  handleSubmit = e=>{
    this.CheckValidity()
    if(this.state.firstName !== '' && this.state.lastName !== '' &&
       this.state.emailAddress !== '' && this.state.age !== 0 &&
       this.state.address !== '')
    {
      if(!Configuration.validEmail.test(this.state.emailAddress)){
        this.setState({message: 'Enter valid emailid'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      if(this.state.age <1){
        this.setState({message: 'Age should be greater than 0'})
        this.setState({severity: 'error'})
        this.handleClick()
      }
      else{
        let data = {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "emailid": this.state.emailAddress,
          "age": parseInt(this.state.age),
          "address": this.state.address,
          "password": 'NA',
          "confirmPassword": 'NA',
        }
        authServices.UpdateUser(data).then((data)=>{
          if(data.data.isSuccess){
            localStorage.setItem('jwtToken', data.data.token);
            this.setState({message: 'Details Sucessfully updated'})
            this.setState({severity: 'success'})
            this.handleClick()
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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              <Link to="/doctorlist" style={{textDecoration: 'none'}}>
                <b sx={{color: 'text.primary'}}>
                  <Box sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap', color: 'text.primary' }}>
                    <ArrowLeftIcon fontSize="large"/>
                    Edit Profile
                  </Box>
                </b>
              </Link>
            </Typography>
            <Box>
              <Button onClick={this.handleLogout} style={{backgroundColor: "#121313c8"}} type='submit' variant='contained'>
                Logout <ExitToAppOutlinedIcon/>
              </Button>
            </Box>      
        </Toolbar>
      </AppBar>
        <Grid>
          <Paper elevation={10} style={this.paperStyle}>
            <Grid sx={{pb:3, pt:2}} align='center'>
                <Avatar> <ThreePIcon/> </Avatar>
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
                        disabled
                        name='emailAddress'
                        placeholder='Enter emailId'value={this.state.emailAddress}
                        error={this.state.emailAddressFlag}
                        onChange={this.handleChange} />
            <Grid align='center'>
              <TextField sx={{m:2}} size="small" label="address" 
                        name='address'
                        placeholder='address' value={this.state.address}
                        error={this.state.addressFlag}
                        onChange={this.handleChange} />
              <TextField sx={{m:2}} size="small" label="age (years)" 
                        name='age'
                        placeholder='Age'value={this.state.age}
                        error={this.state.ageFlag}
                        onChange={this.handleChange} />
            </Grid>

            <Grid align='center'>
                <Button onClick={this.handleSubmit} sx={{width: '35ch'}} align='center' type='submit' color='primary' variant='contained' fullWidth>
                  Update
                </Button>
            </Grid>
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

export default EditProfile

