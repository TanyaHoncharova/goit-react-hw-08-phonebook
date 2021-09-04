
import PropTypes from 'prop-types';
import React from 'react';
import Title from './Components/Title';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}


App.defaultProps = {
  totalContactsCount: null,
  visibleContactsCount: null
}
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      })
  ),
  filter: PropTypes.string,
  totalContactsCount: PropTypes.number,
  visibleContacts: PropTypes.number,
};
