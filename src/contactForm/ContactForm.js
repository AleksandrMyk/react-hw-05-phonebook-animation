import React, { Component } from 'react';
import style from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';

export default class App extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label className={style.labelForm}>
          Name
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={700}
          >
            <input
              className={style.contactInput}
              name="name"
              type="text"
              autoComplete="off"
              value={name}
              onChange={this.changeHandler}
            />
          </CSSTransition>
        </label>
        <label className={style.labelForm}>
          Number
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={700}
          >
            <input
              className={style.contactInput}
              name="number"
              type="text"
              autoComplete="off"
              value={number}
              onChange={this.changeHandler}
            />
          </CSSTransition>
        </label>

        <button className={style.btnAdd} type="submit">
          Add {name}
        </button>
      </form>
    );
  }
}
