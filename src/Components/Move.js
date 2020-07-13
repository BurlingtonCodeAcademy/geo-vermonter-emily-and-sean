import React from "react"

class Move extends React.Component{
    render(){
        const startDisabled= this.props.startDisabled;
     return (
         <div>
        {startDisabled ? ( 
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
             <div id="return" onClick={this.props.returnToStart}>
             Return to Start
             </div>
         </div>
        
         ) : null}
         </div>
     ) 
    }
}

export default Move 