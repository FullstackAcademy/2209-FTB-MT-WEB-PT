import React from 'react';
import Favorite from './Favorite';

const SingleContact = props => {
  return (<div id='single-contact'>
    <div id='contact-info'>
      <p><b>Name:</b> {props.selectedContact.name}</p>
      <p><b>Email:</b> {props.selectedContact.email}</p>
      <p><b>Phone:</b> {props.selectedContact.phone}</p>
      <div>
        <b>Address:</b>
        <p>
          <b>Street:</b> {props.selectedContact.address.street}
          <br/>
          <b>City/Zip:</b> {props.selectedContact.address.city} {props.selectedContact.address.zipcode}
        </p>
      </div>
      <p><b>Company:</b> {props.selectedContact.company.name}</p>
      <Favorite contact={props.selectedContact} selectContact={props.selectContact} />
    </div>
  </div>);
}
export default SingleContact;
