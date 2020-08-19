import React from "react";
import Header from "./Components/Header";
import MessageSender from "./Components/MessageSender";
import General from "./Components/General";
import { Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";

export default class App extends React.Component {
  state = {
    senders: [
      {
        name: "Left",
        messages: [],
      },
      {
        name: "Center",
        messages: [],
      },
      {
        name: "Right",
        messages: [],
      },
    ],
  };

  handleDeleteMessage = (e) => {
    let id = e.target.parentElement.id
    let name = e.target.parentElement.getAttribute('name')
    
    const found = this.state.senders.find(
      (sender) => sender.name === name
    )
    
    const message= found.messages.filter(
      (message) => message.id !== id
    )
    const filtered = found.messages = message;

    this.setState({filtered});
  }

  handleSeenMessage = (e) => {

  }

  handleSendMessage = (e) => {
    let senderName = document
      .querySelector("#" + e.target.id)
      .parentElement.parentElement.querySelector("h1").textContent;
    let msgInput = document
      .querySelector("#" + e.target.id)
      .parentElement.querySelector("input");

    const find = this.state.senders.find(
      (sender) => sender.name === senderName
    );

    find.messages.push({
      id: uuid(),
      text: msgInput.value,
      status: "visible",
      from: senderName,
    });

    this.setState({ find });
    msgInput.value = "";
  };

  render() {
    return (
      <div className="mainContainer">
        <Header></Header>
        <Switch>
          <Route
            path="/:id"
            render={({ match }) => {
              const senderH = this.state.senders.find(
                (sender) => sender.name === match.params.id
              );
              return (
                <MessageSender
                  id={senderH.name}
                  messages={senderH.messages}
                  sendMessage={this.handleSendMessage}
                  seenMessage={this.handleSeenMessage}
                  deleteMessage={this.handleDeleteMessage}
                />
              );
            }}
          />
        </Switch>
        <General messages={this.state.senders}></General>
      </div>
    );
  }
}
