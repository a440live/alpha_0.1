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
                        {this.props.description} <br/>
                        <a href={this.props.artistlink}> Learn more </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Artist_short_bio