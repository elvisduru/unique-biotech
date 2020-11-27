import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import styles from "./Shipping.module.css";
import buyNow from "../../../images/buynow.svg";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

export default class Shipping extends Component {
  state = {
    error: false,
  };

  reset = () => {
    setTimeout(() => {
      this.setState({ error: false });
    }, 3000);
  };

  handleCheckout = () => {
    if (
      !this.props.fields.firstName ||
      !this.props.fields.lastName ||
      !this.props.fields.email ||
      !this.props.fields.address1 ||
      !this.props.fields.state ||
      !this.props.fields.telephone
    ) {
      this.setState({ error: true });
      this.reset();
    } else {
      this.props.history.push("/shop/billing");
    }
  };
  render() {
    return (
      <div className={styles.Shipping}>
        <h1>SHIPPING</h1>
        <hr />
        <div className={styles.progress}>
          <div>
            <p>SHIPPING</p>
            <span style={{ backgroundColor: "#2b2b2b" }}></span>
          </div>
          <div>
            <p>BILLING</p>
            <span></span>
          </div>
          <div>
            <p>CONFIRMATION</p>
            <span></span>
          </div>
        </div>
        <button className={styles.button} onClick={this.handleCheckout}>
          <span>
            <img src={buyNow} alt="" />
          </span>
          <span>NEXT</span>
        </button>

        <div className={styles.form}>
          <div className={styles.left}>
            <form action="#">
              <div className={styles.field}>
                <p>FIRST NAME *</p>
                <input
                  type="text"
                  name="firstName"
                  value={this.props.fields.firstName}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>LAST NAME *</p>
                <input
                  type="text"
                  name="lastName"
                  value={this.props.fields.lastName}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>BUSINESS NAME</p>
                <input
                  type="text"
                  name="businessName"
                  value={this.props.fields.lastName}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>FARM TYPE</p>
                <select
                  name="farmType"
                  onChange={this.props.handleInput}
                  value={this.props.fields.farmType}
                >
                  <option value="">- Choose Option -</option>
                  <option value="Fish Farm">Fish Farm</option>
                  <option value="Piggery">Piggery</option>
                  <option value="Pet">Pet</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Livestock">Livestock</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.field}>
                <p>EMAIL *</p>
                <input
                  type="email"
                  name="email"
                  value={this.props.fields.email}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>ADDRESS LINE 1 *</p>
                <input
                  type="text"
                  name="address1"
                  value={this.props.fields.address1}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>ADDRESS LINE 2</p>
                <input
                  type="text"
                  name="address2"
                  value={this.props.fields.address2}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>CITY *</p>
                <input
                  type="text"
                  name="city"
                  value={this.props.fields.city}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>STATE *</p>
                <input
                  type="text"
                  name="state"
                  value={this.props.fields.state}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>POSTCODE / ZIP *</p>
                <input
                  type="text"
                  name="postCode"
                  value={this.props.fields.postCode}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>TELEPHONE *</p>
                <input
                  type="text"
                  name="telephone"
                  value={this.props.fields.telephone}
                  onChange={this.props.handleInput}
                />
              </div>
              <div className={styles.field}>
                <p>MOBILE</p>
                <input
                  type="text"
                  name="mobile"
                  value={this.props.fields.mobile}
                  onChange={this.props.handleInput}
                />
              </div>
              <p>* REQUIRED FIELDS</p>
            </form>
          </div>
          <div className={styles.right}>
            <div>
              <h2>NEED HELP?</h2>
              <p>
                CALL US: <a href="tel:+234014537121">01 453 7121</a> |{" "}
                <a href="tel:+2348107763821">+234 810 776 3821</a>
              </p>
              <p>
                <a href="mailto:info@uniquebiotechnology.com">
                  EMAIL CUSTOMER CARE
                </a>{" "}
                | <a href="tel:+234014537121">SHIPPING INFORMATION</a>
              </p>
              <p>
                <a href="tel:+234014537121">RETURNS &amp; EXCHANGES</a>
              </p>
              <p>
                By Submitting this form, you agree to our{" "}
                <Link
                  to="/terms"
                  style={{ color: "#FF9800", fontWeight: "bold" }}
                >
                  terms and conditions
                </Link>
              </p>
            </div>
            {this.state.error ? (
              <Slide bottom>
                <p className={styles.error}>
                  Please Complete the Required Fields marked (*)
                </p>
              </Slide>
            ) : null}
          </div>
        </div>

        <button className={styles.button} onClick={this.handleCheckout}>
          <span>
            <img src={buyNow} alt="" />
          </span>
          <span>NEXT</span>
        </button>
      </div>
    );
  }
}
