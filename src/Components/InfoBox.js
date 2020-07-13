import React from 'react'


class Display extends React.Component {
    
    render() {
        
        return (<div className='display' >
            <div id='lat'>Latitude: {this.props.latDisplay} </div>
            <div id='lng'>Longitude: {this.props.lngDisplay} </div>
            <div id='town' >Town: {this.props.town} </div>
            <div id='county'>County: {this.props.county} </div>
            <div id='scoreDisplay'> Score: {this.props.score}</div>
        </div>)
    }
}

export default Display