import React from "react";
import GeneralList from "./GeneralList";
export default class General extends React.Component {
  render() {
    return (
      <div className="generalContainer">
        <h1>General</h1>
        {this.props.messages.length > 0 ? (
          this.props.messages.map(function (sender) {
            return (
              <GeneralList
                key={sender.name}
                name={sender.name}
                messages={sender.messages}
              />
            );
          })
        ) : (
          <div>Empty</div>
        )}
      </div>
    );
  }
}
