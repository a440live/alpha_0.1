import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Artists_card from "./Artists_cards";
import Navbar from '../header/Navbar'

//Database Imports
import artists_list_database from "./artists_list_database";

//Styling Imports
import "../../Assets/css/artist/artists_list.css";

class Artists_list extends React.Component {
    constructor() {
        super();
        this.state = {
            artist: artists_list_database
        };
    }
    render() {
        const artists = this.state.artist.map(artist => (
            <Artists_card
                key={artist.id}
                imgsrc={artist.imgsrc}
                imgalt={artist.imgalt}
                artist={artist.artist}
                description={artist.description}
                artistsurl={artist.artistsurl}
            />
        ));
        return (
            <div>
                <Navbar/>
                <div className="artists_list_page">
                    <div className="all_artists">
                        <div className = "artists_page_card">
                            {artists}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Artists_list;
