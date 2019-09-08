import React, { Component } from 'react';
import axios from "axios";
import styles from './Admin.module.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';
import Footer from './Footer/Footer';
import Completed from './Orders/Completed/Completed';
import Pending from './Orders/Pending/Pending';
import Declined from './Orders/Declined/Declined';
import Contact from './Forms/Contact/Contact';
import Recycle from './Forms/Recycle/Recycle';
import Home from './Home/Home';
import Subscribe from './Forms/Subscribe/Subscribe';


export default class Admin extends Component {
  state = {
    username: "",
    loggedIn: false,
    error: "",
    orders: []
  }

  authenticate = (route, user) => {
    axios.post(route, { ...user })
      .then(response => {
        const username = response.data.username;
        const loggedIn = true;
        this.setState({ username, loggedIn });
      })
      .catch(err => this.setState({ error: "There is an error in your input" }));
  }

  handleRegister = (user) => {
    this.authenticate("/api/admin/register", user);
  }

  handleLogin = (user) => {
    this.authenticate("/api/admin/login", user);
  }

  logout = () => {
    axios.get('/api/admin/logout')
      .then(() => {
        this.setState({ loggedIn: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={styles.Admin}>
        {this.state.loggedIn ? (
          <div className={styles.Dashboard}>
            <NavBar username={this.state.username} />
            <TopBar username={this.state.username} logout={this.logout} />
            <main>
              <Switch>
                <Route exact path="/admin/dashboard/home" render={props => <Home username={this.state.username} {...props} />} />
                <Route exact path="/admin/dashboard/pending" component={Pending} />
                <Route exact path="/admin/dashboard/completed" component={Completed} />
                <Route exact path="/admin/dashboard/declined" component={Declined} />
                <Route exact path="/admin/dashboard/contact" component={Contact} />
                <Route exact path="/admin/dashboard/recycle" component={Recycle} />
                <Route exact path="/admin/dashboard/subscribe" component={Subscribe} />
                <Redirect to="/admin/dashboard/home" />
              </Switch>
            </main>
            <Footer />
          </div>
        ) : (
            <Switch>
              <Route exact path="/admin/login" render={props => <Login error={this.state.error} handleLogin={this.handleLogin} {...props} />} />
              <Route exact path="/admin/register" render={props => <Register error={this.state.error} handleRegister={this.handleRegister} {...props} />} />
              <Redirect to="/admin/login" />
            </Switch>
          )}
      </div>
    )
  }
}
