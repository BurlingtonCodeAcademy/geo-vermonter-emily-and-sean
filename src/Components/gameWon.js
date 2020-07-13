import React from "react";


class GameWon extends React.Component {
  render() {
    const modal = this.props.winModal;
    return (
      <div>
        {modal ? (
          <div class="modalcontainer">
            <div class="modal">
              You've won! Please enter your name to save your high score!
              <form id="nameForm">
                <input id="userName" placeholder="Enter your name here" onChange={this.props.handleChange} value={this.props.userName}></input>
                <button id="submitName" onClick={this.props.submitName}>Submit</button>
              </form>
            </div>
            <button onClick={this.props.closeModal}>Close</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GameWon;
