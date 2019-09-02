import React from 'react';
import styles from './IntroSection.module.css';

const IntroSection = ({ title, description, bgImage }) => {
  return (
    <div className={styles.IntroSection} style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default IntroSection
