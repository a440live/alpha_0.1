import React from 'react';

//Styling Import
import '../../Assets/css/navbar.css';
import {Link} from "react-router-dom";

//Library Imports
// import { Link } from "react-scroll";


class Artist_navbar extends React.Component{
    handleClickStream(){
        this.props.stream();
    }
    handleClickVideos(){
        this.props.videos();
    }
    handleClickWritings(){
        this.props.writings();
    }
    render(){
        return (

            <nav className="navbar">
                <ul className="navbar_list">
                    <a style={{ textDecoration: 'none', color: 'black'}} className="navbar_link" onClick={this.handleClickStream.bind(this)}>
                        {this.props.artist}
                    </a>
                    <a style={{ textDecoration: 'none', color: 'black'}} className="navbar_link" onClick={this.handleClickVideos.bind(this)}>
                        Videos
                    </a>
                    <a style={{ textDecoration: 'none', color: 'black'}} className="navbar_link" onClick={this.handleClickWritings.bind(this)}>
                        Writings
                    </a>
                </ul>
            </nav>

        );
    }

}

export default Artist_navbar;