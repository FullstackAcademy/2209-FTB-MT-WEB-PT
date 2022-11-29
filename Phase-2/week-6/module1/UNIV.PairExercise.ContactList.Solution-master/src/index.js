import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import ContactList from './ContactList';
import SingleContact from './SingleContact';

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  const getContacts = async () => {
    const response = await fetch('http://jsonplace-univclone.herokuapp.com/users');
    const contacts = await response.json();
    setContacts(contacts);
  }
  
  const selectContact = async (contactId, favoriteData) => {
    const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`);
    const contact = await response.json();
    setSelectedContact({...contact, ...favoriteData});
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {
          selectedContact.id ? <SingleContact selectedContact={selectedContact} selectContact={selectContact}/> : <ContactList contacts={contacts} selectContact={selectContact}/>
        }
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
