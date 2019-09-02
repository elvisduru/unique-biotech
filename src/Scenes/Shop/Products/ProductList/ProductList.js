import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem/ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className={styles.ProductList}>
      {products.map(({ name, image, url }, index) => <ProductItem name={name} image={image} url={url} key={index} />)}
    </div>
  )
}

export default ProductList
