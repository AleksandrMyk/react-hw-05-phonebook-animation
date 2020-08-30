import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './Alert.module.css';

const Alert = ({ title }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={250}
    classNames={style}
    unmountOnExit
  >
    <div className={style.alert}>
      {title}
    </div>
  </CSSTransition>
);
export default Alert;