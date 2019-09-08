import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './TopBar.module.css';
import ordersIcon from '../../../images/orders.svg';
import userIcon from '../../../images/user.png';

const TopBar = props => {
  const path = props.location.pathname.substring(17);
  return (
    <div className={styles.TopBar}>
      <h2>{path === "pending" ? "Pending Orders" : path === "completed" ? "Completed Orders" : path === "declined" ? "Declined Orders" : path === "contact" ? "Contact Form" : path === "recycle" ? "Recycle Form" : path === "subscribe" ? "Subscribers" : "Dashboard"}</h2>
      <div>
        <div className={styles.order}>
          <img src={ordersIcon} alt="" />
          <span></span>
        </div>
        <div className={styles.user}>
          <img src={userIcon} alt="" />
          <p>{props.username}</p>
        </div>
        <button onClick={props.logout}>Log out</button>
      </div>
    </div>
  )
}

export default withRouter(TopBar);
