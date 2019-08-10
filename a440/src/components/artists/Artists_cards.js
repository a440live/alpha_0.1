import React from "react";

//Styling Import
import "../../Assets/css/artist/artist_card.css";

class Artists_cards extends React.Component {
    handleMouseOver() {
        console.log("hovering");
    }
    render() {
        return (
            <div className="artist_card" onMouseEnter={() => this.handleMouseOver()}>
                <a href={this.props.artistsurl} style={{ textDecoration: "none" }}>
                    <img
                        className="artist_thumbnail"
                        src={this.props.imgsrc}
                        alt={this.props.imgalt}
                    />
                    <div className="artist_text">
                        <h4 className="artist_name"> {this.props.artist} </h4>
                        <p className="artist_description">
                            {" "}
                            {this.props.description}
                        </p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Artists_cards;