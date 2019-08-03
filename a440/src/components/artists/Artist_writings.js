import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Writings_card from "./Writings_card";

//Database Imports
import writings_data from "./writings_database";

//Styling Imports
import "../../Assets/css/artist/artist_writings.css";

class Artist_writings extends React.Component {
    constructor() {
        super();
        this.state = {
            writings: writings_data
        };
    }
    render() {
        const writingsCard = this.state.writings.map(writing => (
            <Writings_card
                key={writing.id}
                title={writing.title}
                artist={writing.artist}
                date={writing.date}
                description={writing.description}
                writingurl={writing.writingurl}
                imgsrc={writing.imgsrc}
                imgalt={writing.imgalt}
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

export default Artist_writings;