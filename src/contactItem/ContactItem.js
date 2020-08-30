import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { id, name, number }, onRemoveContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        className={styles.itemBtn}
        onClick={() => onRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;
