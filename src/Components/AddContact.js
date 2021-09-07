import React, { Component } from "react";
import "./AddContact.css";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Both fields are Manadatory");
      return;
    }
    this.props.addContactToList(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="add_main">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div className="add_main_name">
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <br />
          <div className="add_main_email">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
          </div>
          <button className="addContact_button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
