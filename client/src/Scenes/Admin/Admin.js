import React, { Component } from 'react';
import styles from './Admin.module.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';


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
            <Route exact path="/admin/dashboard" render={props => <Dashboard username={this.state.username} {...props} />} />
            <Redirect to="/admin/dashboard" />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/admin/login" component={Login} />
              <Route exact path="/admin/register" component={Register} />
              <Redirect to="/admin/login" />
            </Switch>
          )}
      </div>
    )
  }
}
