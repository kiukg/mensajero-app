import React from "react";
import ReactDOM from "react-dom";

export default class MessageInput extends React.Component {
  render() {
    return (
      <div className="messageInput">
        <input type="text" id="InpMsg"></input>
        <button id="BtnMsg" onClick={this.props.sendMessage}>
          Enviar
        </button>
      </div>
    );
  }
}
