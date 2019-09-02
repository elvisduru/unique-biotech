import React from 'react';
import styles from './IntroSection.module.css';

import downArrow from '../../images/down.svg';

const IntroSection = ({ title, description, bgImage }) => {
  return (
    <div className={styles.IntroSection} style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={downArrow} alt="scroll down" onClick={() => {
        console.log("scrolling")
        window.scrollTo({
          top: 750,
          behavior: "smooth"
        })
      }} />
    </div>
  )
}

export default IntroSection
