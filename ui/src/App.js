import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from './components/home/Home';
import DoctorList from './components/Doctorlist/DoctorList';
import GeneralPhysician from './components/GeneralPhysician/GeneralPhysician';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/doctorlist" element={<DoctorList />} />
          <Route exact path="/generalphysician" element={<GeneralPhysician />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
