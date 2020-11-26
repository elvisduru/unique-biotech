import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";
import buyNow from "../../../images/buynow.svg";

export default class Checkout extends Component {
  handleCheckout = () => {
    console.log(this.props.items);
    if (this.props.items.every((item) => item.quantity === 0)) {
      return;
    }
    this.props.history.push("/shop/shipping");
    this.props.updateTotal();
  };
  render() {
    const items = this.props.items.filter((item) => item.quantity > 0);
    const subtotal = items.reduce((a, b) => {
      return a + (b.price * b.quantity || 0);
    }, 0);

    const total = subtotal + this.props.shipping;

    return (
      <div className={styles.Checkout}>
        <h1>SHOPPING CART</h1>
        <hr />
        <button className={styles.button} onClick={this.handleCheckout}>
          <span>
            <img src={buyNow} alt="" />
          </span>
          <span>BUY NOW</span>
        </button>
        <Link to="/shop">
          <span>&#8592;</span>SHOP MORE
        </Link>
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th className={styles.name}>DESCRIPTION</th>
              <th className={styles.quantity}>QUANTITY</th>
              <th className={styles.control}>UNIT PRICE</th>
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
                    {item.name}{" "}
                    {item.weight && (
                      <span style={{ fontWeight: 300 }}>({item.weight})</span>
                    )}
                  </Link>
                </td>
                <td className={styles.quantity}>
                  <div className={styles.widget}>
                    <span onClick={() => this.props.handleDecrease(item.id)}>
                      -
                    </span>
                    <p>{item.quantity}</p>
                    <span onClick={() => this.props.handleIncrease(item.id)}>
                      +
                    </span>
                  </div>
                </td>
                <td className={styles.control}>
                  <p>&#8358; {item.price}</p>
                  <button onClick={() => this.props.handleRemoveItem(item.id)}>
                    {window.innerWidth > 768 ? "REMOVE THIS ITEM" : "REMOVE"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className={styles.summary}>
          <div>
            <div>
              <h6>SUBTOTAL</h6>
              <p>&#8358; {subtotal}</p>
            </div>
            <div>
              <h6>SHIPPING</h6>
              <p>&#8358; {this.props.shipping}</p>
            </div>
            <div>
              <h6>TOTAL</h6>
              <p className={styles.total}>
                &#8358; {subtotal === 0 ? 0 : total}
              </p>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={this.handleCheckout}>
          <span>
            <img src={buyNow} alt="" />
          </span>
          <span>BUY NOW</span>
        </button>
        <p className={styles.help}>
          NEED HELP? CALL US: <a href="tel:+234014537121">01 453 7121</a> OR{" "}
          <a href="tel:+2348107763821">+234 810 776 3821</a> | EMAIL CUSTOMER
          CARE | SHIPPING INFORMATION | RETURNS &amp; EXCHANGES
        </p>
      </div>
    );
  }
}
