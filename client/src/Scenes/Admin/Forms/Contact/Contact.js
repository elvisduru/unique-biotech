import React, { Component } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';

export default class Contact extends Component {
  state = {
    contacts: [],
    filtered: [],
    selected: 0,
    status: ""
  }

  fetchSubmissions = () => {
    axios.get('/api/contact')
      .then(response => {
        this.setState({ contacts: response.data.contacts, filtered: response.data.contacts })
      })
      .catch(err => console.log(err))
  }


  filterSubmissions = (e) => {
    const filtered = this.state.contacts.filter(submission => {
      return submission.email.toLowerCase().includes(e.target.value.toLowerCase())
    })

    this.setState({ filtered })
  }

  deleteSubmission = (id) => {
    axios.delete(`/api/contact/${id}`)
      .then(response => {
        this.setState({ status: response.data });
        this.fetchSubmissions()
      })
      .catch(err => console.log(err));
  }

  setSelected = (id) => {
    const selected = this.state.contacts.findIndex(x => x._id === id);
    this.setState({ selected });
  }

  componentDidMount() {
    this.fetchSubmissions()
  }

  render() {
    const selected = this.state.contacts[this.state.selected];
    return (
      <div className={styles.Contact}>
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
                    <h4>Name</h4>
                    <p>{selected.firstName} {selected.lastName}</p>
                  </div>
                  <div>
                    <h4>Subject</h4>
                    <p>{selected.subject}</p>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>{selected.email}</p>
                  </div>
                  <div>
                    <h4>Company</h4>
                    <p>{selected.company}</p>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>{selected.phone}</p>
                  </div>
                  <div>
                    <h4>Message</h4>
                    <p>{selected.message}</p>
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
