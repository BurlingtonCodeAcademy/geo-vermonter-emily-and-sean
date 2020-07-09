import React from 'react';
import ReactDOM from 'react-dom';
import VTMap from './Components/VTMap.js'
import Button from "./Components/Buttons.js"
import Display from "./Components/InfoBox.js"
import borderData from "./Components/border.js"
import leafletPip from 'leaflet-pip'
import L from 'leaflet'
import {Map, Marker, TileLayer, Polygon} from 'react-leaflet'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialLat: 43.900,
      initialLng: -72.7317,
      currentLat: 43.900,
      currentLng: -72.7317,
      town: '',
      county: '',
      startEnabled: false,
      guessDisabled: true, 
      quitDisabled: true, 
      zoom: 8
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

    //Disables the start button and enable the guess and quit button
    startButton.disabled =true;
    guessButton.disabled =false;
    quitButton.disabled= false;

    //Creates the array of location lat and lng
    let start = randomLocation();
    this.setState({
      currentLat: start[1],
      currentLng: start[0],
      initialLat: start[1],
      initialLng: start[0],
      zoom: 18
    })


  //Gives a random lat and lng between the max and min lat and lng of Vermont. 
    function randomLocation() { 
    let randomLng = -1 * (Math.random() * (71.510225 - 73.352182 ) +73.352182)
    let randomLat = (Math.random()*( 45.005419-42.730315)+42.730315 );
  
    let stateBorder = L.geoJson(borderData)
    console.log(stateBorder)

    let results = leafletPip.pointInLayer([randomLng, randomLat], stateBorder)
    console.log(results)
  
    while(results.length === 0) {
     randomLng = -1 * (Math.random() * (71.510225 - 73.352182 ) +73.352182)
     randomLat = (Math.random()*( 45.005419-42.730315)+42.730315 );
     results = leafletPip.pointInLayer([randomLng, randomLat], stateBorder)
    }
  
    return [randomLng, randomLat]

   
  }
 }



render() {
    console.log(this.state)
    return (
    <>
     <VTMap currentLat={this.state.initialLat} currentLng={this.state.initialLng} zoomFactor= {this.state.zoom}/>

     <Button handleStart= {this.handleStart} startEnabled ={this.startEnabled} guessDisabled= {this.guessDisabled}quitDisabled= {this.quitDisabled}/>

     <Display initialLat={this.state.initialLat} initialLng={this.state.initialLng} town={this.state.town} county={this.state.county} />
    </>
    )
  }
  }

ReactDOM.render(<App />, document.getElementById('root'))

