import React, { Component, Fragment } from 'react';
import styles from './Unique.module.css';
import IntroSection from '../../../components/IntroSection/IntroSection';

import uniqueBg from '../../../images/unique_bg.png';
import AboutSection from '../../../components/AboutSection/AboutSection';

import aboutImg from '../../../images/red_chicken.png';

import img01 from '../../../images/chick1.png';
import img02 from '../../../images/chick2.png';
import ImgSection from '../../../components/ImgSection/ImgSection';

export default class Unique extends Component {

  render() {
    return (
      <div className={styles.Unique}>
        <IntroSection title="01. Unique" description="We are Unique" bgImage={uniqueBg} />
        <AboutSection
          btnColor="rgba(0, 175, 174, 1)"
          cardImg={aboutImg}
          more
          heading="About Unique Biotechnology West Africa Limited."
          content={(
            <Fragment>
              <p>Unique Biotechnology West Africa Ltd is a West African division/ Franchisee of Unique Biotechnology Co Ltd that was established in 2014 and located in Tianhe District, Guangzhou City.</p>
              <p>Our mission is encapsulated in these words “Achieving a unique planet by unique protein’’. With the rapid expansion of overseas projects in 2017, Unique Biotechnology West Africa Ltd caters for the West Africa market; engage in trade and project development on a global scale.</p>
            </Fragment>
          )}
          click={this.props.click}
        />
        <div className={styles.MoreSection}>
          <h1 style={{
            backgroundColor: "rgba(0, 175, 174, 1)"
          }}>Our Products</h1>
          <div className={styles.Intro}>
            <h2>Our Products</h2>
            <p>
              You can order for any of our products in the store section
            </p>
          </div>
        </div>
        <ImgSection
          heading="Proganics Meal"
          image={img01}
          text="Proganics Meal contains microbial properties that helps in the development of animals which feed on it. Rich in premium proteins (70%+), fibers and healthy fats, the meal is gotten from the larvae of dried black soldier fly. Our highly nutritious proganics meal serves as good food for chickens, birds and other animals."
        />
        <ImgSection
          right
          heading="Proganics Oil"
          image={img02}
          text="Proganics Oil is composed of high quality fatty acids with a high acid content which contains antimicrobial properties. Proganics oil is a healthy fat ingredient which is made from the black soldier fly larvae. Our proganics oil can also be blended with other ingredients in formulated pet food, aquaculture and animal feeds. Our proganics Oil is mechanically pressed out of the dry larvae, to provide a high fat oil rich lauric acid, which is only found in coconut and palm kernels oils."
        />
        <ImgSection
          heading="Proganics Soil"
          image={img02}
          text="Our proganics Soil is rich in primary and secondary nutrients and is essential in promoting plant growth and it improves the natural qualities of soil for agriculture. Calcium, nitrogen and magnesium makes our proganics soil perfect for root development and crop management."
        />
        <ImgSection
          right
          heading="Proganics Larvae"
          image={img02}
        />
      </div>
    )
  }
}
