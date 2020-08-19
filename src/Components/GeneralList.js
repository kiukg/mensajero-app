import React from "react";
import { v4 as uuid } from "uuid";

export default class GeneralList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {this.props.messages.length > 0 ? (
          this.props.messages.map(function (sender) {
            return <div key={uuid()}>{sender.text}</div>;
          })
        ) : (
          <div>Empty</div>
        )}
      </div>
    );
  }
}
