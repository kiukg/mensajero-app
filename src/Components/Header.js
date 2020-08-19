import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/Left">
                <button className="">Left</button>
              </Link>
            </li>
            <li>
              <Link to="/Center">
                <button className="">Center</button>
              </Link>
            </li>
            <li>
              <Link to="/Right">
                <button className="">Right</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
