import React from 'react';

//Library imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component imports
import Navbar from './components/header/navbar';
import Home from './components/Home'

//Styling imports
import './Assets/css/Navbar.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
            <Home/>
        </div>
      </Router>
  );
}

export default App;
