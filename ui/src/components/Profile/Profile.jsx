import React from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {Link} from "react-router-dom";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Profile = () => {
  return (
        <Box sx={{m:2, width: 100,}}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent >
              <Typography  sx={{ display: 'flex',alignItems: 'center',flexWrap: 'wrap', }} color="text.secondary" gutterBottom>
                <AssignmentIndOutlinedIcon  fontSize="large"/>
                <b>Rohit</b>
              </Typography>
              <Typography >      
                <h5>Age: 22</h5>
              </Typography>
              <Typography sx={{mt:2}} color="text.secondary">
                Help?
              </Typography>
              <Typography sx={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',}} color="text.secondary">
                <ShareOutlinedIcon fontSize="small"/>Share
              </Typography>
              <Button size="small">More</Button>
              <Link to='/editprofile' style={{textDecoration: 'none'}}>Forget password?</Link>
            </CardContent>
          </Card>
      </Box>
  )
}

export default Profile