import React from "react";
import ReactDOM from "react-dom";

export default class MessageSenderList extends React.Component {
  render() {
    
    const newProps =this.props;
    return (
      <ul className="messageSenderList">
        {this.props.messageList.map(function (item) {
          return (
            <li name={newProps.from} key={item.id} id={item.id}>{item.text} 
                <span onClick={newProps.deleteMessage}>💣</span>
                <span onClick={newProps.seenMessage}>👀</span>
            </li>
           )
        })}
      </ul>
    );
  }
}
