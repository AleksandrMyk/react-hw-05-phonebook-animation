import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={250} classNames={styles}>
          <ContactItem contact={contact} onRemoveContact={onRemoveContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
