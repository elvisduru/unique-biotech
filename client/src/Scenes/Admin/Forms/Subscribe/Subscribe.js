import React, { Component } from 'react';
import styles from './Subscribe.module.css';
import axios from 'axios';

export default class Subscribe extends Component {
  state = {
    subscribers: [],
    filtered: [],
    status: ""
  }

  fetchSubmissions = () => {
    axios.get('/api/subscribe')
      .then(response => {
        this.setState({ subscribers: response.data.subscribers, filtered: response.data.subscribers })
      })
      .catch(err => console.log(err))
  }


  filterSubmissions = (e) => {
    const filtered = this.state.subscribers.filter(submission => {
      return submission.email.toLowerCase().includes(e.target.value.toLowerCase())
    })

    this.setState({ filtered })
  }

  deleteSubmission = (id) => {
    axios.delete(`/api/subscribe/${id}`)
      .then(response => {
        this.setState({ status: response.data });
        this.fetchSubmissions()
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchSubmissions()
  }

  render() {
    return (
      <div className={styles.Subscribe}>
        {this.state.status && <div className={styles.alert}>
          <p>{this.state.status}</p>
          <p onClick={() => this.setState({ status: "" })}>&times;</p>
        </div>}
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.search}>
              <input type="text" placeholder="Search Submissions" onChange={this.filterSubmissions} />
              <p>{this.state.filtered.length || '0'} submissions</p>
            </div>
            <div className={styles.submissions}>
              <ul>
                {this.state.filtered.map((submission, index) => (
                  <li
                    key={index}>
                    <p>{submission.email}</p>
                    <p>
                      {new Date(submission.createdAt).toDateString()}
                      <button onClick={() => this.deleteSubmission(submission._id)} title="Delete">&times;</button>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
