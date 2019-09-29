import React, { Component } from 'react';
import styles from './Login.module.css';

import Logo from '../../../images/logo.svg';

export default class Login extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    }
  }

  handleInput = e => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields })
  }

  render() {
    return (
      <div className={styles.Login}>
        <div className={styles.header}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.body}>
          <div className={styles.form}>
            {this.props.error ? <p className={styles.error}>{this.props.error}</p> : null}
            <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username" />
            <input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="Password" />
            <button onClick={(e) => {
              this.props.handleLogin(this.state.fields)
              e.target.innerText = "Logging you in..."
            }}>Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}
