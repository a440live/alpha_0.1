import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Event_card from "./Event_card";

//Database Imports
import events_database from "./events_database";

//Styling Imports
import "../../Assets/css/artist/stream_tab_upcoming_events.css";

class Stream_tab_upcoming_events extends React.Component {
    constructor() {
        super();
        this.state = {
            events: events_database
        };
    }
    render() {
        const eventCards = this.state.events.map(event => (
            <Event_card
                key={event.id}
                type={event.type}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
            />
        ));
        return (
            <div className="stream_tab_upcoming_events">
                <h1 className="stream_tab_events_title">
                    Upcoming <em>Events</em>
                </h1>
                <div className = "stream_tab_upcoming_event_cards">
                    {eventCards}
                </div>
            </div>
        );
    }
}

export default Stream_tab_upcoming_events;
