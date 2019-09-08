import React from 'react';
import styles from './ContactBox.module.css';
import mailIcon from '../../images/message-closed-envelope.svg';
import phoneIcon from '../../images/phone.svg';

const ContactBox = () => {
  return (
    <div className={styles.ContactBox}>
      <p><img src={mailIcon} alt="" /> <a href="mailto:info@uniquebiotechnology.com">info@uniquebiotechnology.com</a></p>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <p><img src={phoneIcon} alt="" /> <span><a href="tel:+234014537121">01-453 7121, </a><a href="tel:+2348107763821">+234 810 776 3821</a></span></p>
    </div>
  )
}

export default ContactBox
