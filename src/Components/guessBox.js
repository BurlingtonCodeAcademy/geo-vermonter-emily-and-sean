import React from "react"

function GuessBox(props) {
    
    const modal= props.modal;
    return(
       
  <div>
    {modal ? (
        <div class="modalcontainer">
                <div className="modal">
                    <h1>What County are we in?</h1>
                    <label htmlFor="counties">Choose and county:</label>

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

                    <button id="makeGuess" onClick={props.makeGuess}>Select County</button>
                    <button id="cancelGuess" onClick={props.closeModal}>Cancel</button>
                </div>
                <button onClick={props.closeModal}>Close</button>  
        </div>
         ) : null}
  </div>
  )

}



export default GuessBox