import React from 'react';

//Styling Import
import '../../Assets/css/navbar.css';
import {Link} from "react-router-dom";

//Library Imports
// import { Link } from "react-scroll";


function Header() {
    return (

        <nav className="navbar">
            <ul className="navbar_list">
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black'}} className="blank">
                    <img className='logo' src='/logo.png' alt='A440 Logo'/>
                </Link>
                <Link to={'/artists'} style={{ textDecoration: 'none', color: 'black'}} className="navbar_link">
                    Artists
                </Link>
                <a href="#0" className="navbar_link">
                    About
                </a>
                <a href="#0" className="navbar_link">
                    Contact Us
                </a>
                <form className="join_movement" action="http://google.com" target="_blank">
                    <button className="btn movement" href="www.google.com">
                        Join the movement!
                    </button>
                </form>
            </ul>
        </nav>

    );
}

export default Header;