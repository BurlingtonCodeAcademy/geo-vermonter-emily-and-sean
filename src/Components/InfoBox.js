import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            lat: '',
            lng: '',
            town: '',
            county: '',
            
        }
    }
    render() {
        
        return (<div class='display' >
            <div id='lat'>Latitude: </div>
            <div id='lng'>Longitude: </div>
            <div id='town'>Town: </div>
            <div id='county'>County: </div>
        </div>)
    }
}

export default Display