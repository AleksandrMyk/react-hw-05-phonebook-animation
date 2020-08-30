import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import style from './ContactFilter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <form className={style.filterForm}>
      <label className={style.filterLabel}>
        Find contacts by name
        <br />
        <CSSTransition in={true} appear={true} classNames={style} timeout={700}>
          <input
            className={style.filterInput}
            type="text"
            autoComplete="off"
            value={value}
            onChange={e => onFilter(e.target.value)}
          ></input>
        </CSSTransition>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
