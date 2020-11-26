import React, { Component } from "react";
import styles from "./Confirm.module.css";
import { Link } from "react-router-dom";

export default class Confirm extends Component {
  render() {
    const items = this.props.items.filter((item) => item.quantity > 0);
    return (
      <div className={styles.Confirm}>
        <h1>CONFIRMATION</h1>
        <hr />
        <div className={styles.progress}>
          <div>
            <p>SHIPPING</p>
            <span style={{ backgroundColor: "#2b2b2b" }}></span>
          </div>
          <div>
            <p>BILLING</p>
            <span style={{ backgroundColor: "#2b2b2b" }}></span>
          </div>
          <div>
            <p>CONFIRMATION</p>
            <span style={{ backgroundColor: "#2b2b2b" }}></span>
          </div>
        </div>
        <div className={styles.thanks}>
          <h2>
            THANK YOU {this.props.firstName} {this.props.lastName}
          </h2>
          <p>
            Thank you for your order. Your order number is {this.props.orderID}.
          </p>
        </div>

        <div className={styles.order}>
          <h2>ORDER CONFIRMATION</h2>
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th className={styles.name}>DESCRIPTION</th>
                <th className={styles.quantity}>QUANTITY</th>
                <th className={styles.price}>UNIT PRICE</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className={styles.image}>
                    <img src={item.image} alt="" />
                  </td>
                  <td className={styles.name}>
                    <Link to={`/shop/${item.id}`}>
                      {item.name}
                      <span>{item.weight}</span>
                    </Link>
                  </td>
                  <td className={styles.quantity}>
                    <p>{item.quantity}</p>
                  </td>
                  <td className={styles.price}>
                    <p>&#8358; {item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.summary}>
            <div>
              <div>
                <h4>SHIPPING</h4>
                <p>&#8358; {this.props.shipping}</p>
              </div>
              <div>
                <h4>TOTAL</h4>
                <p className={styles.total}>&#8358; {this.props.total}</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.help}>
          NEED HELP? CALL US: <a href="tel:+234014537121">01 453 7121</a> OR{" "}
          <a href="tel:+2348107763821">+234 810 776 3821</a> | EMAIL CUSTOMER
          CARE | SHIPPING INFORMATION | RETURNS &amp; EXCHANGES
        </p>
      </div>
    );
  }
}
