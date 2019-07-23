import React from 'react'

// Component Import
import Navbar from '../header/Navbar'
import Artist_short_bio from './Artist_short_bio'

//Styling Import
import '../../Assets/css/artist/artist.css'

class Artist extends React.Component {
    constructor(){
        super();
        this.state = {
            tab: "Stream",
            stream: false
        };
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div className="artist">
                    <Artist_short_bio imgsrc="https://www.autoblog.com/img/adblocker-interstitial.jpg" imgalt="LoremIpsum" artistlink="https://www1.9anime.nl/watch/fullmetal-alchemist-brotherhood.0r7/wv9oko" description="The Shepherd School of Music is a music school located on the campus of Rice University in Houston, Texas. From its inception in 1974 under dean Samuel Jones, the Shepherd School has emphasized orchestral, chamber music, and opera as the central elements of its performing curriculum."/>
                </div>
            </div>
        )
    }
}

export default Artist