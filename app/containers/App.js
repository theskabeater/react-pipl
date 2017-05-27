import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../css/app.css';

import { piplRequest } from '../actions/pipl';

function mapDispatchToProps(dispatch) {
  return {
    request: email => dispatch(piplRequest(email)),
  };
}

@connect(null, mapDispatchToProps)
export default class App extends Component {
  static propTypes ={
    request: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.input = null;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.request(this.input.value);
  };

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmit}>
          <label className={styles.block} htmlFor="email" >Enter an email address</label>
          <input className={styles.block} type="text" name="email" ref={el => (this.input = el)} />
          <button className={styles.block} type="submit">Submit</button>
        </form>
      </main>
    );
  }
}
