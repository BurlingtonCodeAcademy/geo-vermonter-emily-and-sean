import React from 'react'


class Display extends React.Component {
    
    render() {
        
        return (<div className='display' >
            <div id='lat' lat={this.props.initialLat}>Latitude: </div>
            <div id='lng'lng={this.props.initialLng}>Longitude: </div>
            <div id='town' town={this.props.town}>Town: </div>
            <div id='county' county={this.props.county}>County: </div>
        </div>)
    }
}

export default Display