import React from "react"


//Creates a class of buttons. Allows use of props 
class Button extends React.Component{


//Renders the page. Creates buttons 
    render(){
        return ( 
       <div>
           <button className="button" id="startButton" onClick= {this.props.handleStart}> Start Game</button> {/* Create Start Button */}
           <button disabled={true} className="button" id= "guessButton" onClick= {this.props.handleGuess}> Guess</button> {/* Create Guess Button */}
           <button disabled={true} className="button" id= "quitButton" onClick= {this.props.handleQuit}> Quit</button> {/* Create Quit Button */}
       </div> 
    )}
}

//Export the file
export default Button