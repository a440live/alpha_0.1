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
import Artist_writings from './components/artists/Artist_writings';
import Artist_short_bio from './components/artists/Artist_short_bio'

//Styling imports
import './Assets/css/navbar.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
            <Home/>
            <Artist_writings/>

        </div>
      </Router>
  );
}

export default App;
