import React from 'react'

// Component Import
import Navbar from '../header/Navbar'

//Styling Import
import '../../Assets/css/artist/artist.css'

class Artist extends React.Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="artist"></div>

            </div>
        )
    }
}

export default Artist