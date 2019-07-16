import React from "react";

//Styling Import
import "../../Assets/css/HomeCarousel.css";

class HomeCarousel extends React.Component {
  render() {
    return (
      <div className="HomeCarousel">
          <img className="HomeCarouselArticle" src={this.props.articleSrc} />
          <div className="HomeCarouselLivePosition">
              <iframe
                  className="HomeCarouselLive"
                  src={this.props.liveSrc}
                  allowFullScreen
              />
              <div className="HomeCarouselLiveInfo">
                  <h3 className="HomeCarouselLiveTitle">
                      {this.props.liveTitle}
                  </h3>
                  <div className="HomeCarouselLiveArtistRow">
                      <h4 className="HomeCarouselLiveArtistRow"> {this.props.liveArtist} </h4>
                      <div className="HomeCarouselLiveNow" style={this.props.liveNow? {backgroundColor: "var(--red)"}: {backgroundColor: "white"}}>
                          {this.props.liveNow? "LIVE NOW" : ""}
                      </div>
                  </div>
              </div>
          </div>
          <img className="HomeCarouselVideo" src={this.props.videoSrc} />

      </div>
    );
  }
}

export default HomeCarousel;
