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
                    <ul>
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
                    </ul>
                </div>
                <button onClick={this.closeModal}>Close</button>  
        </div>
         ) : null}
  </div>
  )

}
}


export default GuessBox