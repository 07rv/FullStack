import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from './components/home/Home';
import DoctorList from './components/Doctorlist/DoctorList';
import GeneralPhysician from './components/GeneralPhysician/GeneralPhysician';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import EditProfile from './components/EditProfile/EditProfile';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";




const App = () => {
  const auth = localStorage.getItem('jwtToken');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>

          {auth &&
             <Route exact path="/home" element={<Home />} />
          }
          {auth &&
             <Route exact path="/doctorlist" element={<DoctorList />} />
          }
          { auth &&
            <Route exact path="/generalphysician" element={<GeneralPhysician />} />
          }
          { auth &&
            <Route exact path="/editprofile" element={<EditProfile/>}/>
          }
          <Route exact path="*" 
                  element=
                  {
                    <Typography component="div">
                      <Box className='center'>
                        <Link to="/login">
                          <ReplyAllIcon sx={{pr:1}} style={{ color: "black" }} fontSize="large"/>
                        </Link>
                        404: Page unreachable or not found <br/>
                      </Box>
                    </Typography>
                  }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
