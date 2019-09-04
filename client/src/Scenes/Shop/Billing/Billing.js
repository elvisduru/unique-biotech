import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Billing.module.css';

export default class Billing extends Component {

  handleCompletePurphase = () => {
    this.props.processOrder();
    this.props.history.push("/shop/confirm");
  }

  render() {

    const items = this.props.items.filter(item => item.quantity > 0)

    return (
      <div className={styles.Billing}>
        <h1>BILLING</h1>
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
            <span></span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.order}>
            <h2>1. YOUR ORDER SUMMARY</h2>
            <div className={styles.wrapper}>
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
                      <td className={styles.image}><img src={item.image} alt="" /></td>
                      <td className={styles.name}><Link to={`/shop/${item.id}`}>{item.name}</Link></td>
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
          </div>
          <div className={styles.shipping}>
            <h2>2. REVIEW SHIPPING ADDRESS</h2>
            <div className={styles.wrapper}>
              <h4>SHIPPING ADDRESS</h4>
              <div>
                <p>{this.props.fields.firstName} {this.props.fields.lastName}</p>
                <p>{this.props.fields.address1}</p>
                <p>{this.props.fields.address2}</p>
                <p>{this.props.fields.city}</p>
                <p>{this.props.fields.state}</p>
                <p>{this.props.fields.postalCode}</p>
                <p>{this.props.fields.telephone}</p>
                <p>{this.props.fields.mobile}</p>
              </div>
              <Link to="/shop/shipping">CHANGE SHIPPING ADDRESS</Link>
            </div>
          </div>
          <div className={styles.delivery}>
            <h2>3. DELIVERY METHOD</h2>
            <div className={styles.wrapper}>
              <h4>EXPRESS DELIVERY (&#8358; {this.props.shipping})</h4>
              <p>Delivered in 3-4 business days</p>
            </div>
          </div>
          <div className={styles.purchase}>
            <button onClick={this.handleCompletePurphase}>COMPLETE PURCHASE</button>
          </div>
        </div>
      </div>
    )
  }
}
