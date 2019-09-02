import React, { Component } from 'react';
import styles from './Checkout.module.css';

export default class Checkout extends Component {
  render() {
    return (
      <div className={styles.Checkout}>
        <h1>SHOPPING CART</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>DESCRIPTION</th>
              <th>COLOUR</th>
              <th>QUANTITY</th>
              <th>UNIT PRICE</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}
