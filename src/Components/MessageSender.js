import React from "react";
import ReactDOM from "react-dom";
import MessageSenderList from "./MessageSenderList";
import MessageInput from "./MessageInput";

export default class MessageSender extends React.Component {
  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
      console.log(this.props)
    return (
      <div className="messageSender">
        <h1>{this.props.id}</h1>
        <MessageInput sendMessage={this.props.sendMessage}></MessageInput>
        <MessageSenderList
          from={this.props.id}
          deleteMessage={this.props.deleteMessage}
          seenMessage={this.props.seenMessage}
          messageList={this.props.messages}
        ></MessageSenderList>
      </div>
    );
  }
}
