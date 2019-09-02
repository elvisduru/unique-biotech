import React, { Component, Fragment } from 'react';
import styles from './Food.module.css';
import IntroSection from '../../../components/IntroSection/IntroSection';

import foodBg from '../../../images/wasteBg2.jpg';
import AboutSection from '../../../components/AboutSection/AboutSection';

import aboutImg from '../../../images/aboutWaste.jpg';

import foodwaste from '../../../images/foodwaste.jpg';
import vegetablewaste from '../../../images/vegetablewaste.jpg';
import fruitwaste from '../../../images/fruitwaste.jpg';

import unLogo from "../../../images/un-logo.svg";
import sdgLogo from '../../../images/sdg_logo.png';
import lawmaLogo from '../../../images/lawma_logo.jpg';
import logo from '../../../images/logo.svg';

import ImgSection from '../../../components/ImgSection/ImgSection';

export default class Food extends Component {
  render() {
    return (
      <div className={styles.Food}>
        <IntroSection title="02. Waste" description="Organic Waste Processing" bgImage={foodBg} />
        <AboutSection
          btnColor="#288BA5"
          cardImg={aboutImg}
          heading="We Convert Organic Waste"
          more
          content={(
            <Fragment>
              <p>Our goal is to reduce food waste in landfills, restaurants, hotels, fast food, etc., across the country and increase the overall efficiency of organic recycling. With our exclusive technology we are able to bio-convert organic waste rapidly, thereby enhancing sustainability.</p>
              <p>Black Soldier Fly larvae feed on existing organic waste and convert into a sustainable source of natural protein. The bio-conversion process takes organic waste streams from consumer’s food, markets (i.e. fruits and vegetables), farms (Poultry droppings),  restaurants &amp; fast foods (food waste), etc. and recycles these into valuable products: such as Larvae Meal, Dried insect larvae rich in protein which can be fed to livestock and fish, an extracted oil from larvae is used as a livestock additive for healthy immune systems and what is left behind is a rich and powerful fertilizer and soil additive with natural pest repellent properties. </p>
            </Fragment>
          )}
          click={this.props.click}
        />
        <div className={styles.MoreSection}>
          <h1 style={{
            backgroundColor: "#288BA5"
          }}>Waste Processing</h1>
          <div className={styles.Intro}>
            <h2>Waste Processing</h2>
            <p>
              We process Organic Waste through bio-conversion, with the help of the Black Soldier Fly and our bio-technological know-how.
            </p>
          </div>
        </div>
        <ImgSection
          heading="Food Waste"
          image={foodwaste}
        />
        <ImgSection
          right
          heading="Vegetable Waste"
          image={vegetablewaste}
        />
        <ImgSection
          heading="Fruit Waste"
          image={fruitwaste}
        />
        <div className={styles.brands}>
          <img src={logo} alt="" />
          <img src={unLogo} alt="" />
          <img src={lawmaLogo} alt="" />
          <img style={{ width: '400px' }} src={sdgLogo} alt="" />
        </div>
      </div>
    )
  }
}
