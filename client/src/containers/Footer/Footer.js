import React, { Component } from "react";
import styles from "./Footer.module.css";

import mastercard from "../../images/mastercard.svg";
import paypal from "../../images/paypal.svg";
import visa from "../../images/visa.svg";
import sendBtn from "../../images/send-button.svg";
import facebookDark from "../../images/Facebook.svg";
import twitterDark from "../../images/Twitter.svg";
import instagramDark from "../../images/Instagram.svg";
import linkedinDark from "../../images/linkedin.svg";
import pinterestDark from "../../images/pinterest.svg";

import axios from "axios";

export default class Footer extends Component {
  state = {
    sent: false,
    email: "",
  };

  handleSubscribe = () => {
    const email = this.state.email;
    axios
      .post("/api/subscribe", { email })
      .then((response) => {
        this.setState({ sent: response.data.sent });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className={styles.Footer}>
        <div className={styles.Top}>
          <div className={styles.widget}>
            <h1>Unique Biotech</h1>
            <div className={styles.language}>
              <div>En</div>
              <div>Fr</div>
            </div>
          </div>
          <div className={styles.widget}>
            <h2>Our Company</h2>
            <ul>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>Support</li>
              <li>Research</li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/careers">Join Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.widget}>
            <h2>More</h2>
            <ul>
              <li>Sponsorship</li>
              <li>Partners</li>
              <li>Affiliations</li>
            </ul>
          </div>
          <div className={styles.widget}>
            <h2>Get our Updates</h2>
            <p>
              Subscribe now to get news, updates and more information about our
              unique services
            </p>
            {this.state.sent && (
              <p style={{ color: "#2196f3" }}>
                You have subscribed successfully!
              </p>
            )}
            <form action="">
              <input
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
                placeholder="Your Email"
                maxLength="38"
              />
              <img onClick={this.handleSubscribe} src={sendBtn} alt="" />
            </form>
            <div className={styles.social}>
              <a href="https://www.facebook.com/uniquebiotechnology.westafrica">
                <img src={facebookDark} alt="facebook" />
              </a>
              <a href="https://www.twitter.com/uniquebiotechwa">
                <img src={twitterDark} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/uniquebiotechnologywa">
                <img src={instagramDark} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/company/unique-biotechnology-west-africa-limited/">
                <img src={linkedinDark} alt="linkedin" />
              </a>
              <a href="https://www.pinterest.com/uniquebiotechnologywestafrica/">
                <img src={pinterestDark} alt="pinterest" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Payment}>
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={paypal} alt="" />
          </div>
          <p>&copy; 2020 Unique Biotechnology West Africa Ltd.</p>
          <p>NGN</p>
        </div>
      </div>
    );
  }
}
