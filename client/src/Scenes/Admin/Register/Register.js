import React, { Component } from 'react';
import styles from './Register.module.css';

import Logo from '../../../images/logo.svg';

import { Link } from 'react-router-dom';

export default class Register extends Component {
  state = {
    fields: {
      username: "",
      password: "",
      confPassword: ""
    }
  }

  handleInput = e => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields })
  }

  render() {
    return (
      <div className={styles.Register}>
        <div className={styles.header}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.body}>
          <form>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username" />
            <input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="Password" />
            <input type="password" name="confPassword" value={this.state.confPassword} onChange={this.handleInput} placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/admin/login">Sign in.</Link></p>
        </div>
      </div>
    )
  }
}
