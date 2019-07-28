import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//Styling Import
import "../../Assets/css/homepage/home_carousel.css";

class Home_carousel extends React.Component {
  render() {
    return (
      <div className="home_carousel">
          <img className="home_carousel_article" src={this.props.articleSrc} />
          <div className="home_carousel_live_position">
              <iframe
                  className="home_carousel_live"
                  src={this.props.liveSrc}
                  allowFullScreen
              />
              <Link to={'/artist'} style={{ textDecoration: 'none', color: 'black'}}>
                  <div className="home_carousel_live_info">
                      <h3 className="home_carousel_live_title">
                          {this.props.liveTitle}
                      </h3>
                      <div className="home_carousel_live_artist_row">
                          <h4 className="home_carousel_live_artist_row"> {this.props.liveArtist} </h4>
                          <div className="home_carousel_live_now" style={this.props.liveNow? {backgroundColor: "var(--red)"}: {backgroundColor: "white"}}>
                              {this.props.liveNow? "LIVE NOW" : ""}
                          </div>
                      </div>
                  </div>
              </Link>
          </div>
          <img className="home_carousel_video" src={this.props.videoSrc} />

      </div>
    );
  }
}

export default Home_carousel;
