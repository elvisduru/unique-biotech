import React, { Component } from 'react';
import styles from './Admin.module.css';
import { Switch, Route } from "react-router-dom";
import Register from './Register/Register';


export default class Admin extends Component {
  state = {
    username: "",
    loggedIn: false
  }


  render() {
    return (
      <div className={styles.Admin}>
        {this.state.loggedIn ? (
          <Switch>

          </Switch>
        ) : (
            <Switch>
              <Route exact path="/admin/login" component={Admin} />
              <Route exact path="/admin/register" component={Register} />
            </Switch>
          )}
      </div>
    )
  }
}
