import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from './components/home/Home';
import DoctorList from './components/Doctorlist/DoctorList';
import GeneralPhysician from './components/GeneralPhysician/GeneralPhysician';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import EditProfile from './components/EditProfile/EditProfile';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/doctorlist" element={<DoctorList />} />
          <Route exact path="/generalphysician" element={<GeneralPhysician />} />
          <Route exact path="/editprofile" element={<EditProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
