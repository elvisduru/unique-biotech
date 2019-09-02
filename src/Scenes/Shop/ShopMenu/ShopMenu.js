import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopMenu.module.css';
import SearchBar from '../../../components/SearchBar/SearchBar';

import Logo from '../../../images/logo.svg';
import cartIcon from '../../../images/shopping-cart.svg';

export default class ShopMenu extends Component {
  render() {
    return (
      <div className={styles.ShopMenu}>
        <div className={styles.Logo}>
          <img src={Logo} alt="" />
          <h1>Unique Store</h1>
        </div>
        <div className={styles.right}>
          <ul>
            <li><Link to="/shop">Products</Link></li>
            <li>Support</li>
          </ul>
          <div className={styles.widgets}>
            <SearchBar />
            <div className={styles.cart}>
              <img src={cartIcon} alt="" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
