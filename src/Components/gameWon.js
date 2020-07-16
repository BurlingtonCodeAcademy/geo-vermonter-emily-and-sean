import React from "react";


function GameWon(props) {
  
    const modal = props.winModal;
    return (
      <div>
        {modal ? (
          <div className="modalcontainer">
            <div className="modal">
              You've won! Please enter your name to save your high score!
              <form id="nameForm">
                <input id="userName" placeholder="Enter your name here" onChange={props.handleChange} value={props.userName}></input>
                <button id="submitName" onClick={props.submitName}>Submit</button>
              </form>
            </div>
            <button onClick={props.closeModal}>Close</button>
          </div>
        ) : null}
      </div>
    );
  }


export default GameWon;
