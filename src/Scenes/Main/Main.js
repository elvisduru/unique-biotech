import React, { Component } from 'react';
import styles from './Main.module.css';
import Unique from './Unique/Unique';

import arrowCircled from "../../images/left-circled.svg";
import Menu from '../../containers/Menu/Menu';
import Food from './Food/Food';
import Growth from './Growth/Growth';
import Footer from '../../containers/Footer/Footer';


export default class Main extends Component {
  state = {
    currentIndex: this.props.index ? this.props.index : 0,
    translateValue: this.props.location.mainProps ? this.props.location.mainProps : 0,
    aboutOverlayOpen: false,
    foodOverlayOpen: false
  }

  handleAboutOverlay = () => {
    this.setState(prevState => ({ aboutOverlayOpen: !prevState.aboutOverlayOpen }))
  }

  handleFoodOverlay = () => {
    this.setState(prevState => ({ foodOverlayOpen: !prevState.foodOverlayOpen }))
  }

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 2,
        translateValue: (2) * -100
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 100
    }))
  }

  handleNextSlide = () => {
    // Reset if at end of slider
    if (this.state.currentIndex === 2) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - 100
    }))
  }


  render() {
    const aboutOverlay = this.state.aboutOverlayOpen ? (
      <div className={styles.Overlay}>
        <div className={styles.backdrop} onClick={this.handleAboutOverlay}></div>
        <div className={styles.content}>
          <p onClick={this.handleAboutOverlay} className={styles.close}>&times;</p>
          <h3>About Us</h3>
          <div>
            <p>Unique Biotechnology West Africa Ltd is a West African division/ Franchisee of Unique Biotechnology Co Ltd that was established in 2014 and located in Tianhe District, Guangzhou City.</p>
            <p>Our mission is encapsulated in these words “Achieving a unique planet by unique protein’’.</p>
            <p>With the rapid expansion of overseas projects in 2017, Unique Biotechnology West Africa Ltd caters for the West Africa market; engage in trade and project development on a global scale.</p>
            <p>Our passion sterns from the fact that we have so much waste here in Lagos, Nigeria and West Africa as an extension and the need to harness the opportunities that lies before us in form of these untapped resources with the use of biotechnology is more imperative.
            Our commitment is to ensure that we harness the potentials the Black Soldier Fly (BSF) provides by creating sustainable economic growth and development in the renewable energy space while ensuring we contribute our own quota in achieving the Sustainable Development Goals for 2030.</p>
            <p>In line with this, we have constructed a fully functional processing site for BSF here in Epe, Lagos state Nigeria which would serve as our operational base in providing full support for our operations both locally and globally. Our decision to embark in this field is defined by several factors and also from our competence in key research findings which has justified our business model, growth and sustainability.
Our goal for the next 10 years, is to cover major markets globally with the volume of production achieved, collaborations and persistent successes in research which would serve as an enabler in capturing Sub-Saharan Africa as a whole.</p>
            <p>In West Africa, the population is about 372,344,168 according to a United Nations 2017 estimates. West Africa population is equivalent to 4.96% of the total world population. West Africa ranks number 2 in Africa among sub regions ranked by population. There has been an annual GDP growth of 5.89%. This raise in GDP will be sustain in the future because of three main factors; its predominately a young population, with an average age of 18. This is a highly valuable asset in an ageing world.</p>
            <p>By 2034, Africa is expected to have the world’s largest working-age population of 1.1 billion. Africa is undergoing rapid urbanization, which is contributing to rapid growth in consumption by households and businesses. Household consumption grew at a 4.2% compound annual rate between 2010 and 2015 – faster than the continent’s GDP growth rate – to reach $1.3 trillion in 2015. Nigerian consumers alone may account for up to 30% of Africa’s consumption growth over the next decade, according to a Mckinsey report. Africa in general and West Africa to be exact can take advantage of the rapid advancements in technology, that was otherwise limited by the costs of setting up physical infrastructure, to unlock economic growth.</p>
          </div>
        </div>
      </div>
    ) : null;

    const foodOverlay = this.state.foodOverlayOpen ? (
      <div className={styles.Overlay}>
        <div className={styles.backdrop} onClick={this.handleFoodOverlay}></div>
        <div className={styles.content}>
          <p onClick={this.handleFoodOverlay} className={styles.close}>&times;</p>
          <h3>We Convert Organic Waste</h3>
          <div>
            <p>Our goal is to reduce food waste in landfills, restaurants, hotels, fast food, etc., across the country and increase the overall efficiency of organic recycling. With our exclusive technology we are able to bio-convert organic waste rapidly, thereby enhancing sustainability.</p>
            <p>Black Soldier Fly larvae feed on existing organic waste and convert into a sustainable source of natural protein. The bio-conversion process takes organic waste streams from consumer’s food, markets (i.e. fruits and vegetables), farms (Poultry droppings),  restaurants &amp; fast foods (food waste), etc. and recycles these into valuable products: such as Larvae Meal, Dried insect larvae rich in protein which can be fed to livestock and fish, an extracted oil from larvae is used as a livestock additive for healthy immune systems and what is left behind is a rich and powerful fertilizer and soil additive with natural pest repellent properties. </p>
            <p>We are focused on achieving a unique plant with our unique protein and also aligned with the Sustainable Development goals of the United nation in the following areas:</p>
            <ul>
              <li>Affordable and clean energy</li>
              <li>Clean water and Sanitation</li>
              <li>Responsible consumption and production</li>
            </ul>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <div className={styles.Main}>
        <Menu fixed />
        <div className={styles.Wrapper}>
          <div style={{
            transform: `translateX(${this.state.translateValue}vw)`,
            transition: 'transform ease-out 0.45s'
          }}>
            <Unique click={this.handleAboutOverlay} aboutOverlayOpen={this.state.aboutOverlayOpen} />
            <Food click={this.handleFoodOverlay} foodOverlayOpen={this.state.foodOverlayOpen} />
            <Growth />
          </div>
        </div>

        {aboutOverlay}
        {foodOverlay}

        <Footer />

        <button className={styles.leftArrow} onClick={this.handlePrevSlide}>
          <img src={arrowCircled} alt="left-arrow" />
        </button>
        <button className={styles.rightArrow} onClick={this.handleNextSlide}>
          <img style={{ transform: 'rotate(180deg)' }} src={arrowCircled} alt="right-arrow" />
        </button>
      </div>
    )
  }
}
