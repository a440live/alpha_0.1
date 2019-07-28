import React from 'react'

// Component Import
import Artist_short_bio from './Artist_short_bio'
import Stream_tab_upcoming_events from './Stream_tab_upcoming_events'

//Styling Import
import '../../Assets/css/artist/stream_tab.css'

class Stream_tab extends React.Component {
    render() {
        return(
            <div className="stream_tab">
                {this.props.liveSrc ?
                    <iframe
                        className="stream_tab_live"
                        src={this.props.liveSrc}
                        allowFullScreen
                    /> :
                    <div className="offline_stream_box">
                        <h3 className="offline_stream"> Not currently streaming </h3>
                    </div>
                }
                <Artist_short_bio imgsrc="https://www.autoblog.com/img/adblocker-interstitial.jpg" imgalt="LoremIpsum" artistlink="https://www1.9anime.nl/watch/fullmetal-alchemist-brotherhood.0r7/wv9oko" description="The Shepherd School of Music is a music school located on the campus of Rice University in Houston, Texas. From its inception in 1974 under dean Samuel Jones, the Shepherd School has emphasized orchestral, chamber music, and opera as the central elements of its performing curriculum."/>
                <Stream_tab_upcoming_events/>
                {/*Props passed from js array*/}
            </div>
        )
    }
}

export default Stream_tab