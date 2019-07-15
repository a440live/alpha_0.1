import React from "react";
import "../Assets/css/Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeUpcomingStreams from "./HomeUpcomingStreams";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Welcome">
                    <h1 className="WelcomeTitle">
                        Welcome to{" "}
                        <en>
                            <em>A</em>440
                        </en>
                    </h1>
                    <p className="WelcomeText">
                        A440 is a new way for classical musicians and audiences to connect
                        outside the concert hall. Enjoy exclusive livestreams and get to know
                        your favorite artists through videos and blog posts. <br />
                        <a href="a440live.com">
                            {" "}
                            Learn More{" "}
                        </a>
                    </p>
                </div>
                <HomeCarousel
                    articleSrc="https://www.autoblog.com/img/adblocker-interstitial.jpg"
                    liveTitle="Tchaikovsky’s 5th Symphony, Shostakovich’s 6th Symphony"
                    liveArtist="Shepherd School of Music"
                    liveNow="True"
                    liveSrc="https://www.youtube.com/embed/2DYYVp4QXew"
                    videoSrc="https://www.autoblog.com/img/adblocker-interstitial.jpg"
                />
                <HomeUpcomingStreams />
            </div>
        );
    }
}

export default Home;
