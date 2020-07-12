import React from "react";
import ReactDOM from "react-dom";
import VTMap from "./Components/VTMap.js";
import Button from "./Components/Buttons.js";
import Display from "./Components/InfoBox.js";
import borderData from "./Components/border.js";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import { Map, Marker, TileLayer, Polygon } from "react-leaflet";
import GuessBox from "./Components/guessBox.js"
import "./CSS/index.css" 
import Move from "./Components/Move.js"

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      initialLat: 43.9,
      initialLng: -72.7317,
      currentLat: 43.9,
      currentLng: -72.7317,
      town: "?",
      county: "?",
      latDisplay: "?",
      lngDisplay: "?",
      startDisabled: false,
      guessDisabled: true,
      quitDisabled: true,
      zoom: 8,
      modal: false,
      score: 100
    };
  }

  //When user clicks on start, the start button is disabled and the guess and quit button are enabled
  handleStart = (evt) => {
    evt.preventDefault();
    let start = randomLocation();
    this.setState({
      startDisabled: true,
      guessDisabled: false,
      quitDisabled: false,
      currentLat: start[1],
      currentLng: start[0],
      initialLat: start[1],
      initialLng: start[0],
      zoom: 18,
    });

    //Gives a random lat and lng between the max and min lat and lng of Vermont.
    function randomLocation() {
      let randomLng =
        -1 * (Math.random() * (71.510225 - 73.352182) + 73.352182);
      let randomLat = Math.random() * (45.005419 - 42.730315) + 42.730315;

      let stateBorder = L.geoJson(borderData);

      let results = leafletPip.pointInLayer(
        [randomLng, randomLat],
        stateBorder
      );

      while (results.length === 0) {
        randomLng = -1 * (Math.random() * (71.510225 - 73.352182) + 73.352182);
        randomLat = Math.random() * (45.005419 - 42.730315) + 42.730315;
        results = leafletPip.pointInLayer([randomLng, randomLat], stateBorder);
      }

      return [randomLng, randomLat];
    }
  };

//Opens the modal
  handleGuess=(evt)=>{
    evt.preventDefault();
    this.setState({
      modal: true,

    })
  }

//This function closes the modal
  closeModal = (evt) => {
    evt.preventDefault();
    this.setState(() => {
      return { modal: false };
    })};


  //This function allows user to make a guess. Fetches the county, if the guess is the same county displays score. If guess is incorrect, subtracts ten from score and displays score
  makeGuess = (evt) => {
    evt.preventDefault()

    let selectedCounty = document.getElementById("countyList").value
    let currentScore = this.state.score;
    

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${this.state.initialLat}&lon=${this.state.initialLng}&format=geojson`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.features[0].properties.address.county)
      if (selectedCounty === json.features[0].properties.address.county) {
        this.setState({
          startDisabled: false,
          guessDisabled: true,
          quitDisabled: true,
          town:
            (json.features[0].properties.address.city ||
            json.features[0].properties.address.town ||
            json.features[0].properties.address.village ||
            json.features[0].properties.address.hamlet),
          county: json.features[0].properties.address.county,
          latDisplay: this.state.initialLat,
          lngDisplay: this.state.initialLng,
          modal: false
        })

        alert(`You are correct! Your score is: ${currentScore}`)

      } else {
        currentScore = currentScore - 10;
        this.setState({
          score: currentScore,
          modal: false
        })
      }  
      alert(`You are wrong! Your score is now: ${currentScore}`)
    })

  }

  //Function handles a quit, displays the lat/long, town and county
  handleQuit = (evt) => {
    evt.preventDefault();

    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${this.state.initialLat}&lon=${this.state.initialLng}&format=geojson`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          startDisabled: false,
          guessDisabled: true,
          quitDisabled: true,
          town:
            (json.features[0].properties.address.city ||
            json.features[0].properties.address.town ||
            json.features[0].properties.address.village ||
            json.features[0].properties.address.hamlet),
          county: json.features[0].properties.address.county,
          latDisplay: this.state.initialLat,
          lngDisplay: this.state.initialLng,
        });
      });
    //Sets the state of the buttons

  };
  
  //Movement function
  //Moves the map to the North
  moveNorth =(evt)=>{
    evt.preventDefault();
    let currentLat= this.state.currentLat + 0.002;
    let score= this.state.score -1

    this.setState({
      currentLat: currentLat,
      score: score
    })
  }

  //Moves the map to the East
  moveEast =(evt)=>{
    evt.preventDefault();
    let currentLng= this.state.currentLng + 0.002;
    let score= this.state.score -1

    this.setState({
      currentLng: currentLng,
      score: score
    })
  }

  //Moves the map to the South
  moveSouth =(evt)=>{
    evt.preventDefault();
    let currentLat= this.state.currentLat - 0.002;
    let score= this.state.score -1

    this.setState({
      currentLat: currentLat, 
      score: score
    })
  }

  moveWest =(evt)=>{
    evt.preventDefault();
    let currentLng= this.state.currentLng - 0.002;
    let score = this.state.score
    score = score - 1
    this.setState({
      currentLng: currentLng,
      score: score
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <VTMap 
          currentLat={this.state.currentLat}
          currentLng={this.state.currentLng}
          zoomFactor={this.state.zoom}
        />

        <Button
          //Adds methods to the start function
          handleStart={this.handleStart}
          startDisabled={this.state.startDisabled}
          //Adds methods to the guess function
          guessDisabled={this.state.guessDisabled}
          handleGuess={this.handleGuess}
          //Adds methods to the quit button
          quitDisabled={this.state.quitDisabled}
          handleQuit={this.handleQuit}
        />

        <Display
          initialLat={this.state.initialLat}
          initialLng={this.state.initialLng}
          town={this.state.town}
          county={this.state.county}
          latDisplay={this.state.latDisplay}
          lngDisplay={this.state.lngDisplay}
        />

        <GuessBox modal={this.state.modal} closeModal={this.closeModal} makeGuess={this.makeGuess}/>

        <Move moveNorth={this.moveNorth} moveEast={this.moveEast} moveSouth={this.moveSouth} moveWest={this.moveWest}/>

      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
