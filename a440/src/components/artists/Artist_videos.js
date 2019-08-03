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
import videos_database from "./videos_database";

//Styling Imports
import "../../Assets/css/artist/artist_videos.css";

class Artist_videos extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: videos_database
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
            <div className="artist_videos_uploaded_videos">
                <div className = "artist_videos_uploaded_video_cards">
                    {videoCards}
                </div>
            </div>
        );
    }
}

export default Artist_videos;
