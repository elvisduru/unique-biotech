import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ title, description, image, color }) => {
  return (
    <div className={styles.Slide}>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'transparent',
        width: '240px',
        height: '301px',
      }} />
      <h4>{title}</h4>
      <p style={{
        color: color,
        cursor: "pointer"
      }}>{description}</p>
    </div>
  )
}

export default Slide;
