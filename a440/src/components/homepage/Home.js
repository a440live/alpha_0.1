import React from "react";

//Styling Import
import "../../Assets/css/homepage/home.css";

//Component Imports
import Home_carousel from "./Home_carousel";
import Home_upcoming_streams from "./Home_upcoming_streams.js";
import Footer from "../footer/Footer"

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="welcome">
                    <h1 className="welcome_title">
                        Welcome to{" "}
                        <en>
                            <em>A</em>440
                        </en>
                    </h1>
                    <h2 className="welcome_text">
                        Your hub for classical music. <br />
                        <a href="a440live.com">
                            {" "}
                            Learn More{" "}
                        </a>
                    </h2>
                </div>
                <Home_carousel
                    articleSrc="https://www.autoblog.com/img/adblocker-interstitial.jpg"
                    liveTitle="Tchaikovsky’s 5th Symphony, Shostakovich’s 6th Symphony"
                    liveArtist="Shepherd School of Music"
                    liveNow="True"
                    liveSrc="https://www.youtube.com/embed/w2JBT0HC98I"
                    videoSrc="https://www.autoblog.com/img/adblocker-interstitial.jpg"
                />

                <Home_upcoming_streams/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
