import React from "react"

class GuessBox extends React.Component{
    render(){
    const modal= this.props.modal;
    return(
       
  <div>
    {modal ? (
        <div id="modalcontainer">
                <div id="modal">
                    <h1>What County are we in?</h1>
                    <label for="counties">Choose and county:</label>

                    <select name="counties" id="countyList">
                      <option value="Addison County">Addison</option>
                      <option value="Bennington County">Bennington</option>
                      <option value="Caledonia County">Caledonia</option>
                      <option value="Chittenden County">Chittenden</option>
                      <option value="Essex County">Essex</option>
                      <option value="Franklin County">Franklin</option>
                      <option value="Grand Isle County">Grand Isle</option>
                      <option value="Lamoille County">Lamoille</option>
                      <option value="Orleans County">Orleans</option>
                      <option value="Rutland County">Rutland</option>
                      <option value="Washington County">Washington</option>
                      <option value="Windham County">Windham</option>
                      <option value="Windsor County">Windsor</option>
                    </select>

                    <button id="makeGuess" onClick={this.props.makeGuess}>Select County</button>
                    <button id="cancelGuess" onClick={this.props.closeModal}>Cancel</button>
                    {/* <ul>
                        <li>Addison</li>
                        <li>Bennington</li>
                        <li>Caledonia</li>
                        <li>Chittenden</li>
                        <li>Essex</li>
                        <li>Franklin</li>
                        <li>Grand Isle</li>
                        <li>Lamoille</li>
                        <li>Orange</li>
                        <li>Orleans</li>
                        <li>Rutland</li>
                        <li>Washington</li>
                        <li>Windham</li>
                        <li>Windsor</li>
                    </ul> */}
                </div>
                <button onClick={this.props.closeModal}>Close</button>  
        </div>
         ) : null}
  </div>
  )

}
}


export default GuessBox