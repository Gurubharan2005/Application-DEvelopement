import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Rewards from './components/Rewards';
import Register from'./components/Register';
import VideoCall from './components/App';
import Calender from './components/MyCalendar';
function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Crypto" element={<Rewards />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
    </Router>
  );
}

export default App;
