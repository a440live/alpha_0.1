import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Stream_card from "./Stream_card";

//Database Imports
import upcoming_streams from "./upcoming_streams";

//Styling Imports
import "../../Assets/css/homepage/home_upcoming_streams.css";

class Home_upcoming_streams extends React.Component {
    constructor() {
        super();
        this.state = {
            streams: upcoming_streams
        };
    }
    render() {
        const streamCards = this.state.streams.map(stream => (
            <Stream_card
                key={stream.id}
                imgsrc={stream.imgsrc}
                imgalt={stream.imgalt}
                artist={stream.artist}
                title={stream.title}
                date={stream.date}
                time={stream.time}
                streamurl={stream.streamurl}
            />
        ));
        return (
            <div className="home_upcoming_streams">
                <h1 className="home_upcoming_streams_title">
                    Upcoming <em>Streams</em>
                </h1>
                <div className = "home_upcoming_stream_cards">
                    {streamCards}
                </div>
            </div>
        );
    }
}

export default Home_upcoming_streams;
