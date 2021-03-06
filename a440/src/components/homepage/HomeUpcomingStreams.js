import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import StreamCard from "./StreamCard";

//Database Imports
import upcomingStreams from "./upcomingStreams";

//Styling Imports
import "../../Assets/css/homepage/HomeUpcomingStreams.css";

class HomeUpcomingStreams extends React.Component {
    constructor() {
        super();
        this.state = {
            streams: upcomingStreams
        };
    }
    render() {
        const streamCards = this.state.streams.map(stream => (
            <StreamCard
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
            <div className="HomeUpcomingStreams">
                <h1 className="HomeUpcomingStreamsTitle">
                    Upcoming <em>Streams</em>
                </h1>
                <div className = "HomeUpcomingStreamCards">
                    {streamCards}
                </div>
            </div>
        );
    }
}

export default HomeUpcomingStreams;
