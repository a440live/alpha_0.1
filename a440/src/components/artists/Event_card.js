import React from "react";

//Styling Import
import "../../Assets/css/homepage/event_card.css";

class Event_card extends React.Component {
    handleMouseOver() {
        console.log("hovering");
    }
    render() {
        return (
            <div className="event_card" onMouseEnter={() => this.handleMouseOver()}>
                <a /*href={this.props.streamurl} style={{ textDecoration: "none" }}*/>
                    <div className="event_text">
                        <h4 className="event_type"> {this.props.type} </h4>
                        <h5 className="event_title"> {this.props.title} </h5>
                        <p className="event_date">
                            {" "}
                            {this.props.date} <br /> {this.props.time}{" "}
                        </p>
                        <p className="event_desc"> {this.props.description} </p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Event_card;
