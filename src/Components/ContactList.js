import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";
import ContactImage from "./contact.ico";
import TrashImage from "./trash.png";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteFromList = (id) => {
    this.props.deleteContactHandler(id);
  };

  render() {
    const myContactList = this.props.contacts.map((contact) => {
      return (
        <div className="contacts_showListmain">
          <div className="contacts_showList">
            <img
              src={ContactImage}
              alt="ContactImage"
              height="62"
              width="62"
            ></img>
            <div className="contact_details">
              <h5>{contact.name}</h5>
              <h5>{contact.email}</h5>
            </div>
          </div>
          <img
            src={TrashImage}
            alt="TrashImage"
            height="55"
            width="55"
            className="TrashImage"
            onClick={() => {
              this.deleteFromList(contact.id);
            }}
          ></img>
        </div>
      );
    });
    return (
      <div className="contact_main">
        <h2>Contact List</h2>
        {this.props.contacts.length === 0 ? (
          <div className="no_contacts">You have no contacts yet!</div>
        ) : (
          ""
        )}
        {myContactList}
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
      </div>
    );
  }
}

export default ContactList;
