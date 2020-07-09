import React from 'react'


class Display extends React.Component {
    
    render() {
        
        return (<div className='display' >
            <div id='lat' lat={this.props.latDisplay}>Latitude: {this.props.latDisplay} </div>
            <div id='lng'lng={this.props.lngDisplay}>Longitude: {this.props.lngDisplay} </div>
            <div id='town' town={this.props.town}>Town: {this.props.town} </div>
            <div id='county' county={this.props.county}>County: {this.props.county} </div>
        </div>)
    }
}

export default Display