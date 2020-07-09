import React from "react"


//Creates a class of buttons. Allows use of props 
class Button extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            startEnabled: false,
            guessDisabled: true, 
            quitDisabled: true 
        }
    }
//When user clicks on start, the start button is disabled and the guess and quit button are enabled
    handleStart= (evt)=>{
        
        evt.preventDefault();
        this.setState({
            startEnabled: true,
            guessDisabled: false,
            quitDisabled: false
        })
        //Declare Variables 
        let startButton = document.getElementById("startButton");
        let guessButton = document.getElementById("guessButton");
        let quitButton = document.getElementById("quitButton");

        startButton.disabled =true;
        guessButton.disabled =false;
        quitButton.disabled= false;

       
    };
//Renders the page. Creates buttons 
    render(){
        return ( 
       <div>
           <button className="button" id="startButton" onClick= {this.handleStart}> Start Game</button> {/* Create Start Button */}
           <button disabled={true} className="button" id= "guessButton" onClick= {this.handleGuess}> Guess</button> {/* Create Guess Button */}
           <button disabled={true} className="button" id= "quitButton" onClick= {this.handleQuit}> Quit</button> {/* Create Quit Button */}
       </div> 
    )}
}

//Export the file
export default Button