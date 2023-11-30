import { Component } from 'react';
import css from './App.module.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';

const BASE_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(BASE_CONTACTS));
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: localContacts });
  }

  addContact = newContact => {
    const isOnList = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isOnList) {
      window.alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addFilter = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter
          filter={filter}
          getFilter={this.addFilter}
        ></ContactFilter>
        <ContactList
          contacts={this.filterContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
