import React from "react";

//Styling Import
import "../../Assets/css/artist/writings_card.css";

class Writings_card extends React.Component {
    handleMouseOver() {
        console.log("hovering");
    }
    render() {
        return (
            <a href={this.props.writingurl} style={{ textDecoration: "none" }}>
                <div className="writings_card" onMouseEnter={() => this.handleMouseOver()}>
                    <img
                        className="writings_thumbnail"
                        src={this.props.imgsrc}
                        alt={this.props.imgalt}
                    />
                    <div className="writings_text">
                        <h4 className="writings_title"> {this.props.title} </h4>
                        <h5 className="writings_artist"> {this.props.artist} </h5>
                        <p className="writings_date">
                            {" "}
                            {this.props.date} <br /> {this.props.time}{" "}
                        </p>
                        <p className="writings_description"> {this.props.description} </p>
                    </div>
                </div>
            </a>
        );
    }
}

export default Writings_card;