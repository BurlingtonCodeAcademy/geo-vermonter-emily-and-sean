import React from "react"


//Creates a class of buttons. Allows use of props 
function Button(props) {



//Renders the page. Creates buttons 
    
        return ( 
       <div>
           <button className="button" id="startButton" disabled={props.startDisabled} onClick= {props.handleStart}> Start Game</button> {/* Create Start Button */}
           <button className="button" disabled={props.guessDisabled} id= "guessButton" onClick= {props.handleGuess}> Guess</button> {/* Create Guess Button */}
           <button className="button" disabled={props.quitDisabled} id= "quitButton" onClick= {props.handleQuit}> Quit</button> {/* Create Quit Button */}
       </div> 
    )}


//Export the file
export default Button