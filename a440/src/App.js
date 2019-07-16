import React from 'react';

//Library imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component imports
import Navbar from './components/header/Navbar';
import Home from './components/homepage/Home';
import Artist_Writings from './components/artists/writings';

//Styling imports
import './Assets/css/Navbar.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
            <Home/>
            <Artist_Writings/>
        </div>
      </Router>
  );
}

export default App;
