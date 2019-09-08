import React from 'react';
import styles from './ImgSection.module.css';

import Slide from 'react-reveal/Slide';

const ImgSection = props => (
  <section className={styles.imgSection} style={{
    flexDirection: `${props.right ? 'row-reverse' : 'row'}`,
    height: props.height
  }}>
    <div className={styles.imgWrapperLeft}>
      {
        props.content ? (
          <Slide right>
            {props.content}
          </Slide>
        ) : (
            <Slide left={props.right ? false : true} right={props.right ? true : false}>
              <img style={{
                position: 'absolute',
                left: `${props.right ? '-60%' : '60%'}`
              }} src={props.image} alt="catfish" />
            </Slide>
          )
      }
    </div>
    <div className={styles.description} style={props.right && window.innerWidth > 768 ? {
      marginLeft: 'none',
      marginRight: 'auto'
    } : null}>
      <div>
        {props.title ? <h1>{props.title}</h1> : null}
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  </section>
)

export default ImgSection;