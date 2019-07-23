import React from 'react'

// Component Import
import Navbar from '../header/Navbar'
import Stream_tab from './Stream_tab'
import Video_tab from './Video_tab'

//Styling Import
import '../../Assets/css/artist/artist.css'

class Artist extends React.Component {
    constructor(){
        super();
        this.state = {
            tab: "Stream"
        };
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div className="artist">
                    {() => {if (this.state.tab == "Stream") {
                        return(<Stream_tab/>)
                    } else if (this.state.tab == "Video") {
                        return(<Video_tab/>)
                    }
                    }}
                </div>
            </div>
        )
    }
}

export default Artist