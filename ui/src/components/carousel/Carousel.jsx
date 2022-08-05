import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Navbar } from '../navbar/Navbar';

export default function Carousel() {
  return (
    <Box>
        <Navbar/>
        <Card sx={{ maxWidth: '100%', ml:20, mr:20, lt:2, mb:3 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                RV
            </Avatar>
            }
            title="Prevent heart diease"
            subheader="Auguest 8, 2022"
        />
        <CardMedia
            component="img"
            height="194"
            image="https://i.pinimg.com/736x/5c/e1/4e/5ce14e7f86c04e6c3a0c326bf883d6bf.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            High blood pressure is a major risk factor for heart disease. 
            It is important to get your blood pressure checked regularly - 
            at least once a year for most adults, and more often if you have 
            high blood pressure. Take steps, including lifestyle changes, 
            to prevent or control high blood pressure.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
        </Card>
    </Box>
  );
}
