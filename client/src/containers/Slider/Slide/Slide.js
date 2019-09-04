import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ caption, image, currentIndex, index }) => {
  return (
    <div className={styles.Slide} style={{
      transform: `scale(${currentIndex === index ? '1.2' : '1'})`
    }}>
      <h1>{caption}</h1>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'transparent',
        backgroundPositionX: '-7px',
        width: '221px',
        height: '303px',
        borderRadius: '4px',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.13)',
      }} />
    </div>
  )
}

export default Slide;
