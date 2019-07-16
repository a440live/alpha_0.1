import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Writings_Card from "./writings_card";

//Database Imports
import writings_data from "./writings_database";

//Styling Imports
import "../../Assets/css/artists/writings.css";

class Artist_Writings extends React.Component {
    constructor() {
        super();
        this.state = {
            streams: writings_data
        };
    }
    render() {
        const writingsCard = this.state.streams.map(stream => (
            <Writings_Card
                key={stream.id}
                title={stream.title}
                artist={stream.artist}
                date={stream.date}
                description={stream.description}
                streamurl={stream.streamurl}
            />
        ));

        return (
            <div className="artist_writings">
                <div className = "artist_writings_card">
                    {writingsCard}
                </div>
            </div>
        );
    }
}

export default Artist_Writings;