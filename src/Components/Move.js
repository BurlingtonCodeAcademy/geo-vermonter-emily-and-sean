import React from "react"

class Move extends React.Component{
    render(){
     return (
         <div id="movesContainer">
             <div id="moveNorth" onClick={this.props.moveNorth}>
                Move North
             </div>
             <div id="moveEast" onClick={this.props.moveEast}>
             Move East
             </div>
             <div id="moveSouth" onClick={this.props.moveSouth}>
             Move South
             </div>
             <div id="moveWest" onClick={this.props.moveWest}>
             Move West
             </div>
         </div>

     )  
    }
}

export default Move 