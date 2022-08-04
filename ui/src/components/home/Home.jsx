import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import { Paper } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Search from '../search/Search';


const Home = () => {
  const paperStyle = {padding:10,  margin:"20px auto"}
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar sx={{flexDirection: 'row'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0}}>
            <Link to="" style={{textDecoration: 'none'}}>
              <b sx={{color: 'text.primary'}}>
              <Box sx={{ color: 'text.primary' }}>HealthXOXO</Box>
              </b>
            </Link>
          </Typography>  
          <Box sx={{ml:30 ,alignItems: 'center',}}>
            <Paper sx={{display: 'flex', flexDirection: 'row'}}  elevation={10} style={paperStyle}>
              <Link to="" style={{textDecoration: 'none'}}>
                <Box sx={{ mr:10, color: 'text.primary', fontWeight: 'bold' }}>24/7 Doctor</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none'}}>
                <Box sx={{ mr:10, color: 'text.primary',fontWeight: 'bold' }}>Medicine</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none'}}>
                <Box sx={{ mr:10, color: 'text.primary',fontWeight: 'bold' }}>Lab Text</Box>
              </Link>
              <Link to="" style={{textDecoration: 'none'}}>
                <Box sx={{ mr:10, color: 'text.primary',fontWeight: 'bold' }}>Remainder</Box>
              </Link>           
              <div style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
                <AddShoppingCart />
                <Link to="" style={{textDecoration: 'none'}}>
                  <Box sx={{color: 'text.primary',fontWeight: 'bold' }}>Cart</Box>
                </Link>
              </div>
            </Paper>
          </Box>  
        </Toolbar>
      </AppBar>
      <Box sx={{mt:2, ml:5}}>
        <Search/>
      </Box>
      <Box sx={{display: 'flex',justifyContent: 'flex-end',m:2}}>
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
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Home
