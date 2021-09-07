import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import api from "./api/contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  //const LOCAL_STORAGE_KEY = "contacts";

  // Retrieve contacts from db.json server
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // const retrievedContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // setContacts(retrievedContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactToList = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const deleteContact = async (ID) => {
    await api.delete(`/contacts/${ID}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== ID;
    });
    setContacts(newContactList);
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                deleteContactHandler={deleteContact}
              />
            )}
          ></Route>
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContactToList={addContactToList} />
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
