import React from 'react';

//Library Imports
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MediaQuery from 'react-responsive';

//Component Imports
import Video_card from "./Video_card";

//Database Imports
import uploaded_videos from "./uploaded_videos";

//Styling Imports
import "../../Assets/css/artist/video_tab.css";

class Video_tab extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: uploaded_videos
        };
    }
    render() {
        const videoCards = this.state.videos.map(video => (
            <Video_card
                key={video.id}
                imgsrc={video.imgsrc}
                imgalt={video.imgalt}
                title={video.title}
                view={video.view}
                videourl={video.videourl}
            />
        ));
        return (
            <div className="video_tab_uploaded_videos">
                <div className = "video_tab_uploaded_video_cards">
                    {videoCards}
                </div>
            </div>
        );
    }
}

export default Video_tab;
