import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList.js';
import ContactFilter from './contactFilter/ContactFilter.js';
import Alert from './alert/Alert';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    alert: '',
  };

  componentDidMount() {
    const persistedTask = localStorage.getItem('contact');
    if (persistedTask) {
      this.setState({
        contacts: JSON.parse(persistedTask),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      this.showAlert(`${name}      is already in contact!!!`);
    } else if (name === '' || number === '') {
      this.showAlert(`Be calm and field all fields`);
    } else {
      const contact = {
        id: uuid(),
        name: name,
        number: number,
      };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  showAlert = message => {
    this.setState({ alert: message });
    clearTimeout(this.alertTimeout);
    this.alertTimeout = setTimeout(() => {
      this.setState({ alert: '' });
    }, 3000);
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter, alert } = this.state;
    return (
      <section className={style.sec}>
        <div className={style.box}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={1500}
          >
            <h1 className={style.mainTitle}>Phonebook</h1>
          </CSSTransition>
          {alert && <Alert title={alert} />}
          <ContactForm onSubmit={this.addContact} />
          <ContactFilter value={filter} onFilter={this.changeFilter} />
          <ContactList
            onRemoveContact={this.removeContact}
            contacts={this.getFilteredContacts()}
          />
        </div>
      </section>
    );
  }
}
