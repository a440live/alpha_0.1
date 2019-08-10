import React from 'react'

// Component Import
import Navbar from '../header/Navbar'
import Artist_stream from './Artist_stream'
import Artist_videos from './Artist_videos'
import Artist_writings from './Artist_writings'
import Artist_navbar from './Artist_navbar';


//Styling Import
import '../../Assets/css/artist/artist_page.css';

class Artist extends React.Component {
    constructor(){
        super();
        this.state = {
            tab: "Stream",
        };
    }
    handleClickStream(e){
        this.setState({
            tab: "Stream"
        })
    }
    handleClickVideos(e){
        this.setState({
            tab: "Videos"
        })
    }
    handleClickWritings(e){
        this.setState({
            tab: "Writings"
        })
    }
    artist_page() {
        if (this.state.tab === "Stream") {
            return( <Artist_stream/> )
        } else if (this.state.tab === "Videos") {
            return( <Artist_videos/> )
        } else if (this.state.tab === "Writings") {
            return( <Artist_writings/> )
        } else {
            return( <h1> Error. Try Refreshing. </h1> )
        }
    }

    render() {
        return(
            <div>
                <Navbar/>
                <div className="artist_page">
                    <div className="artist_navbar">
                        <Artist_navbar
                            artist="Shepherd School of Music"
                            stream={this.handleClickStream.bind(this)}
                            videos={this.handleClickVideos.bind(this)}
                            writings={this.handleClickWritings.bind(this)}/>
                    </div>
                    {this.artist_page()}
                </div>
            </div>
        )
    }
}

export default Artist