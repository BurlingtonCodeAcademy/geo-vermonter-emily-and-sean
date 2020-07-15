import React from 'react'


function Display(props) {
    
        return (
        <div className='display' >
            <div id='lat'>Latitude: {props.latDisplay} </div>
            <div id='lng'>Longitude: {props.lngDisplay} </div>
            <div id='town' >Town: {props.town} </div>
            <div id='county'>County: {props.county} </div>
            <div id='scoreDisplay'> Score: {props.score}</div>
            <div id='highScore'>High Score: {props.highScore} {props.userName}</div>
        </div>)
    }


export default Display