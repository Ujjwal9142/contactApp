import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main_header">
        <h1>Contact Manager</h1>
      </div>
    );
  }
}

export default Header;
