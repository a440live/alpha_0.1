import React from "react";

//Styling Import
import "../../Assets/css/homepage/stream_card.css";

class Stream_card extends React.Component {
  handleMouseOver() {
    console.log("hovering");
  }
  render() {
    return (
      <div className="stream_card" onMouseEnter={() => this.handleMouseOver()}>
        <a href={this.props.streamurl} style={{ textDecoration: "none" }}>
          <img
            className="stream_thumbnail"
            src={this.props.imgsrc}
            alt={this.props.imgalt}
          />
          <div className="stream_text">
            <h4 className="stream_artist"> {this.props.artist} </h4>
            <h5 className="stream_title"> {this.props.title} </h5>
            <p className="stream_date">
              {" "}
              {this.props.date} <br /> {this.props.time}{" "}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default Stream_card;
