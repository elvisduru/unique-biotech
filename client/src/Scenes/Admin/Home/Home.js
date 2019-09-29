import React, { Component } from 'react';
import styles from './Home.module.css';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';

import axios from 'axios';
import moment from 'moment';

export default class Home extends Component {
  state = {
    completedOrders: '...',
    pendingOrders: '...',
    declinedOrders: '...',
    contacts: '...',
    recycles: '...',
    subscribers: '...',
    timeline: {
      doughTimeline: 'Today',
      barTimeline: 'Today',
    },
    pieData: "",
    barData: ""
  }

  fetchAllOrders = () => {
    axios.get('/api/orders/*')
      .then(response => {
        const orders = response.data;
        var data = {
          'Today': [],
          'Yesterday': [],
          'Last 7 days': [],
          'Last 28 days': [],
          'Last 90 days': []
        }
        var today = moment();
        const findAverage = (order) => {
          let oil = 0, soil = 0, meal = 0, larvae = 0;
          order.items.forEach(item => {
            if (item.id === "oil") {
              oil = oil + item.quantity;
            }
            if (item.id === "soil") {
              soil = soil + item.quantity;
            }
            if (item.id === "meal") {
              meal = meal + item.quantity;
            }
            if (item.id === "larvae") {
              larvae = larvae + item.quantity;
            }
          })
          return [oil, soil, meal, larvae];
        }
        const sum = (r, a) => r.map((b, i) => a[i] + b);

        orders.forEach(order => {
          if (today.diff(moment(order.created), 'days') === 0) {
            data['Today'].push(findAverage(order));
          } else if (today.diff(moment(order.created), 'days') < 1) {
            data['Yesterday'].push(findAverage(order))
          } else if (today.diff(moment(order.created), 'days') < 7) {
            data['Last 7 days'].push(findAverage(order))
          } else if (today.diff(moment(order.created), 'days') < 28) {
            data['Last 28 days'].push(findAverage(order))
          } else if (today.diff(moment(order.created), 'days') < 90) {
            data['Last 90 days'].push(findAverage(order))
          }
        })

        for (var x in data) {
          if (data[x].length > 0) {
            data[x] = [{ data: data[x].reduce(sum) }];
          } else {
            data[x] = [{ data: [0, 0, 0, 0] }]
          }
        }

        this.setState({ pieData: data });
      })
      .catch(err => console.log(err))
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
    this.fetchAllOrders();
    this.fetchPendingOrders();
    this.fetchCompletedOrders();
    this.fetchDeclinedOrders();
    this.fetchContactSubmissions();
    this.fetchRecycleSubmissions();
    this.fetchSubscribers();
  }

  handleTimeline = (time, name) => {
    const timeline = { ...this.state.timeline };
    timeline[name] = time;
    this.setState({ timeline })
  }

  render() {
    let fakeData = {
      'Today': [
        {
          data: [92.8, 6.1, 1.1, 3.2],
        }
      ],
      'Yesterday': [
        {
          data: [77.2, 8.4, 14.4, 9.7],
        }
      ],
      'Last 7 days': [
        {
          data: [88.2, 9.2, 2.6, 4.4],
        }
      ],
      'Last 28 days': [
        {
          data: [65.2, 2.6, 32.2, 1.1],
        }
      ],
      'Last 90 days': [
        {
          data: [93.5, 4.2, 2.3, 15.5],
        }
      ]
    }

    let fakeBarData = {
      'Today': [
        {
          data: [15000, 15000, 45000, 100000],
        }
      ],
      'Yesterday': [
        {
          data: [77200, 8400, 14400, 9700],
        }
      ],
      'Last 7 days': [
        {
          data: [88200, 9200, 2600, 4400],
        }
      ],
      'Last 28 days': [
        {
          data: [65200, 2600, 32200, 11000],
        }
      ],
      'Last 90 days': [
        {
          data: [93500, 4200, 23000, 15500],
        }
      ]
    }

    if (this.state.pieData) {
      fakeData = this.state.pieData
    }

    let doughdata = {
      labels: [
        'Proganics Oil',
        'Proganics Soil',
        'Proganics Meal',
        'Proganics Larvae',
      ],
      datasets: fakeData,
    }

    let bardata = {
      labels: [
        'Proganics Oil',
        'Proganics Soil',
        'Proganics Meal',
        'Proganics Larvae',
      ],
      datasets: fakeBarData,
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false
      }
    }
    return (
      <div className={styles.Home}>
        <h1>Welcome Back, {this.props.username}!</h1>
        <div className={styles.charts}>
          <div className={styles.doughnut}>
            <h2>What product do your customers order most?</h2>
            <div>
              <Doughnut height={180} width={200} data={{
                labels: doughdata.labels,
                datasets: doughdata.datasets[this.state.timeline.doughTimeline].map(obj => ({
                  ...obj,
                  borderColor: '#fff',
                  backgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                    '#36A2EB'
                  ],
                  hoverBackgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                    '#36A2EB'
                  ]
                }))
              }} />
            </div>
            <div>
              <select value={this.state.timeline.doughTimeline} name="doughTimeline" onChange={(ev) => this.handleTimeline(ev.target.value, ev.target.name)}>
                {Object.keys(doughdata.datasets).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.barchart}>
            <h2>How much sales have you made?</h2>
            <div>
              <HorizontalBar height={300} width={800} data={{
                labels: bardata.labels,
                datasets: bardata.datasets[this.state.timeline.barTimeline].map(obj => ({
                  ...obj,
                  borderColor: '#fff',
                  backgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                    '#36A2EB'
                  ],
                  hoverBackgroundColor: [
                    '#FF6384',
                    '#FFCE56',
                    '#36A2EB'
                  ],
                }))
              }} options={bardata.options} />
            </div>
            <div>
              <select value={this.state.timeline.barTimeline} name="barTimeline" onChange={(ev) => this.handleTimeline(ev.target.value, ev.target.name)}>
                {Object.keys(doughdata.datasets).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
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
