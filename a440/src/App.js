import React from 'react';

//Library imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component imports
import Navbar from './components/header/navbar';

//Styling imports
import './Assets/css/default.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
        </div>
      </Router>
  );
}

export default App;
