import React from "react";

//Styling Import
import "../../Assets/css/artist/video_card.css";

class Video_card extends React.Component {
  handleMouseOver() {
    console.log("hovering");
  }
  render() {
    return (
      <div className="video_card" onMouseEnter={() => this.handleMouseOver()}>
        <a href={this.props.videourl} style={{ textDecoration: "none" }}>
          <img
            className="video_card_thumbnail"
            src={this.props.imgsrc}
            alt={this.props.imgalt}
          />
          <div className="video_card_text">
            <h5 className="video_card_title"> {this.props.title} </h5>
            <h4 className="video_card_artist"> {this.props.artist} </h4>
            <p className="video_card_views">
              {this.props.views}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default Video_card;
