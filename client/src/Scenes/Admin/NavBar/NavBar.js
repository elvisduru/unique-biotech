import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import userIcon from '../../../images/user.png';
import dashboardIcon from '../../../images/dashboard.svg';
import ordersIcon from '../../../images/orders.svg';
import timerIcon from '../../../images/timer.svg';
import undoIcon from '../../../images/undo.svg';
import doneIcon from '../../../images/done.svg';
import formsIcon from '../../../images/forms.svg';
import contactIcon from '../../../images/phone-contact.svg';
import recycleIcon from '../../../images/recycle.svg';
import rssIcon from '../../../images/rss.svg';

const NavBar = (props) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.title}>
        Admin Dashboard
      </div>
      <div className={styles.user}>
        <img src={userIcon} alt="" />
        <div>
          <p>{props.username}</p>
          <p>Administrator</p>
        </div>
      </div>
      <div className={styles.links}>
        <NavLink to="/admin/dashboard/home">
          <img src={dashboardIcon} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <div className={styles.section}>
          <img src={ordersIcon} alt="" />
          <p>Orders</p>
        </div>
        <NavLink to="/admin/dashboard/pending">
          <img src={timerIcon} alt="" />
          <p>Pending Orders</p>
        </NavLink>
        <NavLink to="/admin/dashboard/completed">
          <img src={doneIcon} alt="" />
          <p>Completed Orders</p>
        </NavLink>
        <NavLink to="/admin/dashboard/declined">
          <img src={undoIcon} alt="" />
          <p>Declined Orders</p>
        </NavLink>
        <div className={styles.section}>
          <img src={formsIcon} alt="" />
          <p>Form Submissions</p>
        </div>
        <NavLink to="/admin/dashboard/contact">
          <img src={contactIcon} alt="" />
          <p>Contact Form</p>
        </NavLink>
        <NavLink to="/admin/dashboard/recycle">
          <img src={recycleIcon} alt="" />
          <p>Recycle Form</p>
        </NavLink>
        <NavLink to="/admin/dashboard/subscribe">
          <img src={rssIcon} alt="" />
          <p>Subscribers</p>
        </NavLink>
      </div>
    </div >
  )
}

export default NavBar;
