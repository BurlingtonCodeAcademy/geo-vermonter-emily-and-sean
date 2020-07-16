import React from "react"

function Move(props){
        const startDisabled= props.startDisabled;
     return (
         <div>
        {startDisabled ? ( 
         <div id="movesContainer">
             <button id="moveNorth" onClick={props.moveNorth}>
                Move North
             </button>
             <button id="moveEast" onClick={props.moveEast}>
             Move East
             </button>
             <button id="moveSouth" onClick={props.moveSouth}>
             Move South
             </button>
             <button id="moveWest" onClick={props.moveWest}>
             Move West
             </button>
             <button id="return" onClick={props.returnToStart}>
             Return to Start
             </button>
         </div>
        
         ) : null}
         </div>
     ) 
    }


export default Move 