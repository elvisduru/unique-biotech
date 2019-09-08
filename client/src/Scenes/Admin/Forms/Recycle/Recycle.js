import React, { Component } from 'react';
import styles from './Recycle.module.css';
import axios from 'axios';

export default class Recycle extends Component {
  state = {
    recycles: [],
    filtered: [],
    selected: 0,
    status: ""
  }

  fetchSubmissions = () => {
    axios.get('/api/recycle')
      .then(response => {
        this.setState({ recycles: response.data.recycles, filtered: response.data.recycles })
      })
      .catch(err => console.log(err))
  }


  filterSubmissions = (e) => {
    const filtered = this.state.recycles.filter(submission => {
      return submission.email.toLowerCase().includes(e.target.value.toLowerCase())
    })

    this.setState({ filtered })
  }

  deleteSubmission = (id) => {
    axios.delete(`/api/recycle/${id}`)
      .then(response => {
        this.setState({ status: response.data });
        this.fetchSubmissions()
      })
      .catch(err => console.log(err));
  }

  setSelected = (id) => {
    const selected = this.state.recycles.findIndex(x => x._id === id);
    this.setState({ selected });
  }

  componentDidMount() {
    this.fetchSubmissions()
  }

  render() {
    const selected = this.state.recycles[this.state.selected];
    return (
      <div className={styles.Recycle}>
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
                  <li style={index === this.state.selected ? { backgroundColor: '#20C98B', color: '#fff' } : null} onClick={() => this.setSelected(submission._id)} key={index}><p>{submission.email}</p><p>{new Date(submission.createdAt).toDateString()}</p></li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            {selected ? (
              <div>
                <div className={styles.controls}>
                  <button onClick={() => this.deleteSubmission(selected._id)}>Delete</button>
                </div>
                <div className={styles.title}>
                  <div>
                    <p className={styles.avatar}>{selected.email[0].toUpperCase()}</p>
                    <p>{selected.email}</p>
                  </div>
                  <p>{new Date(selected.createdAt).toDateString()}</p>
                </div>
                <div className={styles.body}>
                  <div>
                    <h4>Business Name</h4>
                    <p>{selected.businessName}</p>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>{selected.location}</p>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>{selected.email}</p>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>{selected.address}</p>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>{selected.phone}</p>
                  </div>
                  <div>
                    <h4>Outlets</h4>
                    <p>{selected.outlets}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
