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
      county: ''
    }
  }

  render() {
    console.log(this.state)
    return (
    <>
     <VTMap currentLat={this.state.currentLat} currentLng={this.state.currentLng}/>
     <Button />
     <Display initialLat={this.state.initialLat} initialLng={this.state.initialLng} town={this.state.town} county={this.state.county} />
    </>
    )
  }
  }

ReactDOM.render(<App />, document.getElementById('root'))

