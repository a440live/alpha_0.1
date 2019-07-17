import React from "react"

import '../../Assets/css/artist/artist_short_bio.css'

class Artist_short_bio extends React.Component{
    render() {
        return(
            <div className="artist_short_bio">
                <div className="artist_short_bio_centered">
                    <img className="artist_short_bio_profile_picture"
                         src={this.props.imgsrc}
                         alt={this.props.imgalt}
                    />
                    <p className="artist_short_bio_text">
                        The Shepherd School of Music is a music school located on the campus of Rice University in Houston, Texas. From its inception in 1974 under dean Samuel Jones, the Shepherd School has emphasized orchestral, chamber music, and opera as the central elements of its performing curriculum. <br/>
                        <a href={this.props.artistlink}> Learn more </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Artist_short_bio