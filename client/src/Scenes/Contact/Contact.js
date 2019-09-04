import React, { Component } from 'react';
import styles from './Contact.module.css';
import Menu from '../../containers/Menu/Menu';
import Footer from '../../containers/Footer/Footer';

import phone from '../../images/phone.svg';
import speechBubble from '../../images/speech-bubbles.svg';
import ContactBox from '../../components/ContactBox/ContactBox';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <ContactBox />
        <main>
          <div style={{ paddingTop: '10px', width: '100%' }}>
            <Menu dark />
          </div>
          <h1>Get in touch</h1>
          <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
          <div className={styles.boxes}>
            <div>
              <img src={phone} alt="" />
              <h4>Talk to Sales</h4>
              <p>Interested in Unique Biotechnology? Just pick up the phone to chat with a member of our sales team.</p>
              <p style={{ fontWeight: '500', fontSize: '15px' }}>+234 810 776 3821</p>
            </div>
            <div>
              <img src={speechBubble} alt="" />
              <h4>Contact Customer Support</h4>
              <p>Sometimes you need a little help from your friends. Or a Unique support rep. Don’t worry… we’re here for you.</p>
              <button>Contact Support</button>
            </div>
          </div>
          <h1>Where we are located</h1>
          <div className={styles.mapBox}>
            <div className={styles.map}>
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.462976547453!2d3.472640884498448!3d6.445857396588012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44ef88bed29%3A0x3b90ee2bca12c693!2sUnique+Biotechnology!5e0!3m2!1sen!2sng!4v1566486934903!5m2!1sen!2sng" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
            <div className={styles.info}>
              <div className={styles.address}>
                <h3>Headquaters</h3>
                <p>3rd Floor Brassar's Place, <br />  16 Victoria Arobieke Street, <br /> Off Admiralty Way, <br /> Lekki Phase 1, Lagos. <br /> Nigeria.</p>
              </div>
              <div className={styles.phone}>
                <h3>Phone / Email</h3>
                <p>+234 810 776 3821</p>
                <p>01 4537 121</p>
                <p>info@uniquebiotechnology.com</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
