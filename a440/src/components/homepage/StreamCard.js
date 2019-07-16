import React from "react";

//Styling Import
import "../../Assets/css/StreamCard.css";

class StreamCard extends React.Component {
  handleMouseOver() {
    console.log("hovering");
  }
  render() {
    return (
      <div className="StreamCard" onMouseEnter={() => this.handleMouseOver()}>
        <a /*href={this.props.streamurl} style={{ textDecoration: "none" }}*/>
          <img
            className="StreamThumbnail"
            src={this.props.imgsrc}
            alt={this.props.imgalt}
          />
          <div className="StreamText">
            <h4 className="StreamArtist"> {this.props.artist} </h4>
            <h5 className="StreamTitle"> {this.props.title} </h5>
            <p className="StreamDate">
              {" "}
              {this.props.date} <br /> {this.props.time}{" "}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default StreamCard;
