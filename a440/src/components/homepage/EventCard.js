import React from "react";

//Styling Import
import "../../Assets/css/EventCard.css";

class EventCard extends React.Component {
    handleMouseOver() {
        console.log("hovering");
    }
    render() {
        return (
            <div className="EventCard" onMouseEnter={() => this.handleMouseOver()}>
                <a /*href={this.props.streamurl} style={{ textDecoration: "none" }}*/>
                    <div className="EventText">
                        <h4 className="EventType"> {this.props.type} </h4>
                        <h5 className="EventTitle"> {this.props.title} </h5>
                        <p className="EventDate">
                            {" "}
                            {this.props.date} <br /> {this.props.time}{" "}
                        </p>
                        <p className="EventDesc"> {this.props.description} </p>
                    </div>
                </a>
            </div>
        );
    }
}

export default EventCard;
