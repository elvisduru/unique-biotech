import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';

import shopIcon from '../../../../../images/shopping-cart.svg';

const ProductItem = ({ name, image, url }) => {
  return (
    <div className={styles.ProductItem}>
      <a href={`/shop${url}`} className={styles.image}>
        <img src={image} alt="" />
      </a>
      <div className={styles.footer}>
        <p>{name}</p>
        <button>
          <Link to={`/shop${url}`}>
            <span><img src={shopIcon} alt="" /></span>
            <span>BUY NOW</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ProductItem
