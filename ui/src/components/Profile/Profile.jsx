import React from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {Link} from "react-router-dom";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import jwt_decode from "jwt-decode";

export class Profile extends React.Component {
  constructor(){
    super();
    const token = localStorage.getItem('jwtToken');
    const decoded = jwt_decode(token);
    this.state = {
      firstName: decoded.FirstName,
      lastName: decoded.LastName,
      emailAddress: decoded.EmailId,
      age: decoded.Age,
      address: decoded.Address,
    }
  }
  render(){
    return (
      <Box sx={{m:2, width: 100,}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent >
            <Typography  sx={{ display: 'flex',alignItems: 'center',flexWrap: 'wrap', }} color="text.secondary" gutterBottom>
              <AssignmentIndOutlinedIcon  fontSize="large"/>
              <b>{this.state.firstName} {this.state.lastName}</b>
            </Typography>
            <Typography >      
              <h5>Email: {this.state.emailAddress}</h5>
              <h5>Age: {this.state.age}</h5>
              <h5>Address: {this.state.address}</h5>
            </Typography>
            <Typography sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',}} color="text.secondary">
              <ShareOutlinedIcon fontSize="small"/>Share
            </Typography>
            <Link to='/editprofile' style={{textDecoration: 'none'}}>
              <Button size="small">More</Button>
            </Link>
          </CardContent>
        </Card>
    </Box>
  )
  }

}

export default Profile