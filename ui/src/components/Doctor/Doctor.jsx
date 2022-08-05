import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IosShareIcon from '@mui/icons-material/IosShare';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';

const Doctor = ({name, degree, hospital, experience, award, img}) => {
    return (
        <Box sx={{width: 400, m:2,}}>
            <Card component="form"sx={{ mb:2, p: '2px 4px', display: 'flex',justifyContent: 'center', alignItems: 'center', width: 400 }}>
                <Box sx={{flexDirection: 'column' }}>
                    <CardContent sx={{  width:175  }}>
                        <Typography component="div" variant="h7" sx={{display: 'flex', justifyContent: 'center', }}>
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display: 'flex', justifyContent: 'center', }}>
                            {degree}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display: 'flex', justifyContent: 'center', }}>
                            {hospital}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display: 'flex', justifyContent: 'center', }}>
                            {experience}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display: 'flex', justifyContent: 'center', }}>
                            {award} 
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151, height: 175, bgcolor: 'warning.main' }}
                    image={img}
                    alt="Live from space album cover"
                />
            </Card>
            <Divider><InboxIcon/></Divider>
            <CardActions sx={{display: 'flex', justifyContent: 'center', }}>
                <Button size="small">Share <IosShareIcon/></Button>
                <Button size="small">More</Button>
            </CardActions>
        </Box>       
  );
}

export default Doctor
