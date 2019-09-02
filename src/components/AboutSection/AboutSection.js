import React from 'react';
import styles from './AboutSection.module.css';

import longArrowRight from '../../images/long-arrow-right.svg';

const AboutSection = ({ cardImg, btnColor, more, heading, content, click }) => {
  return (
    <div className={styles.AboutSection}>
      <div className={styles.Left}>
        <h1 style={{ backgroundColor: btnColor }}>About</h1>
        <h2>{heading}</h2>
        {content}
        {more ? <button style={{
          backgroundColor: btnColor
        }} onClick={click}>Read More <img src={longArrowRight} alt="" /></button>
          : null}
      </div>
      <div className={styles.Right}>
        <div className={styles.Card} style={{
          backgroundImage: `url(${cardImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
