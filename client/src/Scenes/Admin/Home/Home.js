import React, { Component } from 'react';
import styles from './Home.module.css';

import axios from 'axios';

export default class Home extends Component {
  state = {
    completedOrders: '...',
    pendingOrders: '...',
    declinedOrders: '...',
    contacts: '...',
    recycles: '...',
    subscribers: '...'
  }

  fetchCompletedOrders = () => {
    axios.get('/api/orders/completed')
      .then(response => {
        const completedOrders = response.data.length;
        this.setState({ completedOrders })
      })
      .catch(err => console.log(err));
  }

  fetchDeclinedOrders = () => {
    axios.get('/api/orders/declined')
      .then(response => {
        const declinedOrders = response.data.length;
        this.setState({ declinedOrders })
      })
      .catch(err => console.log(err));
  }

  fetchPendingOrders = () => {
    axios.get('/api/orders/pending')
      .then(response => {
        const pendingOrders = response.data.length;
        this.setState({ pendingOrders })
      })
      .catch(err => console.log(err));
  }

  fetchContactSubmissions = () => {
    axios.get('/api/contact')
      .then(response => {
        this.setState({ contacts: response.data.contacts.length })
      })
      .catch(err => console.log(err))
  }

  fetchRecycleSubmissions = () => {
    axios.get('/api/recycle')
      .then(response => {
        this.setState({ recycles: response.data.recycles.length })
      })
      .catch(err => console.log(err))
  }

  fetchSubscribers = () => {
    axios.get('/api/subscribe')
      .then(response => {
        this.setState({ subscribers: response.data.subscribers.length })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchPendingOrders();
    this.fetchCompletedOrders();
    this.fetchDeclinedOrders();
    this.fetchContactSubmissions();
    this.fetchRecycleSubmissions();
    this.fetchSubscribers();
  }

  render() {
    return (
      <div className={styles.Home}>
        <h1>Welcome Back, {this.props.username}!</h1>
        <div className={styles.content}>
          <div className={styles.widget}>
            <h4 style={{ color: '#ff9800' }}>{this.state.pendingOrders}</h4>
            <p>Pending Orders</p>
          </div>
          <div className={styles.widget}>
            <h4 style={{ color: '#2196f3' }}>{this.state.completedOrders}</h4>
            <p>Completed Orders</p>
          </div>
          <div className={styles.widget}>
            <h4 style={{ color: '#f44336' }}>{this.state.declinedOrders}</h4>
            <p>Declined Orders</p>
          </div>
          <div className={styles.widget}>
            <h4 style={{ color: '#4caf50' }}>{this.state.contacts}</h4>
            <p>Contact Submissions</p>
          </div>
          <div className={styles.widget}>
            <h4 style={{ color: '#4caf50' }}>{this.state.recycles}</h4>
            <p>Recycle Submissions</p>
          </div>
          <div className={styles.widget}>
            <h4 style={{ color: '#4caf50' }}>{this.state.subscribers}</h4>
            <p>Subscribers</p>
          </div>
        </div>
      </div >
    )
  }
}
