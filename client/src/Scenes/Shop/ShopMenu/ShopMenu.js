import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopMenu.module.css';
import SearchBar from '../../../components/SearchBar/SearchBar';

import Logo from '../../../images/logo.svg';
import cartIcon from '../../../images/shopping-cart.svg';

export default class ShopMenu extends Component {
  render() {
    const items = this.props.items.filter(x => x.quantity > 0);
    return (
      <div className={styles.ShopMenu}>
        <div className={styles.Logo}>
          <Link to="/">
            <img src={Logo} alt="" />
            {window.innerWidth > 768 && <h1>Unique Store</h1>}
          </Link>
        </div>
        <div className={styles.right}>
          <ul>
            <li><Link to="/shop">Products</Link></li>
            <li>Support</li>
          </ul>
          <div className={styles.widgets}>
            {window.innerWidth > 768 && <SearchBar />}
            <div className={styles.cart}>
              <Link to="/shop/checkout">
                <img src={cartIcon} alt="" />
                {items.length > 0 ? (
                  <span>{items.length}</span>
                ) : null}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
