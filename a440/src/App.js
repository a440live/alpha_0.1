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
            <Artist_short_bio imgsrc="https://www.autoblog.com/img/adblocker-interstitial.jpg" imgalt="LoremIpsum" artistlink="https://www1.9anime.nl/watch/fullmetal-alchemist-brotherhood.0r7/wv9oko"/>
        </div>
      </Router>
  );
}

export default App;
