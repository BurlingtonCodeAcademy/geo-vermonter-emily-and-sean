import React from 'react';
import ReactDOM from 'react-dom';
import VTMap from './Components/VTMap.js'
import Button from "./Components/Buttons.js"
import Display from "./Components/InfoBox.js"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialLat: '',
      initialLng: '',
      currentLat: [],
      currentLng: [],
      town: '',
      county: '',
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

  //Gives a random lat and lng between the max and min lat and lng of Vermont. 
   let randomLng=  -(Math.random() * (73.40975057247658 - 71.51752027568435 ) +71.51752027568435 )
   let randomLat =(Math.random()*(45.007561302382754-42.730315121762715  )+42.730315121762715 );
 
 

   
};


  render() {
    console.log(this.state)
    return (
    <>
     <VTMap currentLat={this.state.currentLat} currentLng={this.state.currentLng}/>

     <Button handleStart= {this.handleStart} startEnabled ={this.startEnabled} guessDisabled= {this.guessDisabled}quitDisabled= {this.quitDisabled}/>

     <Display initialLat={this.state.initialLat} initialLng={this.state.initialLng} town={this.state.town} county={this.state.county} />
    </>
    )
  }
  }

ReactDOM.render(<App />, document.getElementById('root'))

