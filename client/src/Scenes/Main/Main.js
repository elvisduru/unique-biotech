import React, { Component } from 'react';
import styles from './Main.module.css';
import Unique from './Unique/Unique';

import arrowCircled from "../../images/left-circled.svg";
import Menu from '../../containers/Menu/Menu';
import Food from './Food/Food';
import Growth from './Growth/Growth';
import Footer from '../../containers/Footer/Footer';

import { Slide, Bounce } from 'react-reveal';
import ContactBox from '../../components/ContactBox/ContactBox';
import axios from 'axios';


export default class Main extends Component {
  state = {
    currentIndex: this.props.index ? this.props.index : 0,
    translateValue: this.props.location.mainProps ? this.props.location.mainProps : 0,
    aboutOverlayOpen: false,
    foodOverlayOpen: false,
    joinUsOpen: false,
    fields: {
      businessName: "",
      location: "",
      address: "",
      email: "",
      phone: "",
      outlets: ""
    },
    messageSent: false,
    error: false
  }

  handleInput = e => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields })
  }

  handleSubmit = () => {
    const fields = { ...this.state.fields };
    axios.post('/api/recycle', fields)
      .then(response => {
        if (response.data.err) {
          this.setState({ error: true })
        }
        this.setState({ messageSent: response.data.sent })
      })
      .catch(err => console.log(err))
  }

  handleForm = () => {
    this.setState(prevState => ({ joinUsOpen: !prevState.joinUsOpen }));
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
    const joinUsForm = this.state.joinUsOpen ? (
      <div className={styles.FormOverlay}>
        <div className={styles.joinUsBackdrop} onClick={this.handleForm}></div>
        <Slide bottom>
          <div className={styles.joinUsContent}>
            <div className={styles.header}>
              <h4>Join Us Now</h4>
              <p onClick={this.handleForm}>&times;</p>
            </div>
            {this.state.messageSent ? (
              <Bounce top>
                <div className={styles.success}>
                  <h2>Message Sent Successfully!</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path fill="cadetblue" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                </div>
              </Bounce>
            ) : (
                <div className={styles.form}>
                  <p>Please fill the form below: </p>
                  {this.state.error && <p className={styles.error}>Please fill the required fields!</p>}
                  <input name="businessName" onChange={this.handleInput} type="text" placeholder="Name of Business" />
                  <input name="location" onChange={this.handleInput} type="text" placeholder="Location" />
                  <input name="address" onChange={this.handleInput} type="text" placeholder="Address" />
                  <input style={this.state.error ? { borderColor: 'orangered' } : null} name="email" onChange={this.handleInput} type="text" placeholder="Contact Email" />
                  <input style={this.state.error ? { borderColor: 'orangered' } : null} name="phone" onChange={this.handleInput} type="text" placeholder="Phone Number" />
                  <input name="outlets" onChange={this.handleInput} type="text" placeholder="Number of Outlets" />
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
              )}
          </div>
        </Slide>
      </div>
    ) : null

    const aboutOverlay = this.state.aboutOverlayOpen ? (
      <div className={styles.Overlay}>
        <div className={styles.backdrop} onClick={this.handleAboutOverlay}></div>
        <div className={styles.content}>
          <p onClick={this.handleAboutOverlay} className={styles.close}>&times;</p>
          <h3>About Us</h3>
          <div>
            <p>Unique Biotechnology West Africa Ltd is a West African division/ Franchisee of Unique Biotechnology Co Ltd that was established in 2014 and located in Tianhe District, Guangzhou City.</p>
            <p>Our mission is encapsulated in these words “Achieving a unique planet by unique protein’’.</p>
            <p>According to <strong>Food and Agriculture Organization of United Nations (FAO)</strong>, global population will hit <strong>9.2 billion</strong> by <strong>2050</strong>. Developed countries would relatively remain around <strong>1.2 billion</strong> while developing countries will make up the <strong>8 billion</strong> of which Asia is expected to contribute <strong>41%</strong> and African <strong>47%</strong>.</p>
            <p>Feeding this expected huge population is a daunting challenge that has engaged researchers, technical experts and leaders all over the world.</p>
            <p>To meet up with this growing demand, <strong>FAO</strong> estimates that global agricultural production will have to increase by <strong>70%</strong> by <strong>2050</strong>. Urbanization and changes in consumer preferences has led to an increasing demand for food particularly of animal protein. This implies that there is even more need to produce food for aquaculture and livestock in general.</p>
            <p>Fish represents <strong>16.6%</strong> of all animal protein consumed globally and this proportion of the world’s food basket is likely to increase as consumers with rising income seeks higher value seafood. But supplying fish sustainably and producing it without depleting our aquatic environment is a huge challenge.</p>
            <p>According to <strong>World Bank</strong>, one third of wild fish harvested globally, are used for fish meal and the global stock of wild fish keeps declining. This practice is not sustainable therefore, an alternative source of protein <strong>(Black Soldier Fly larvae)</strong> that is equally nutritionally efficient is needed to ensure food security today and in the future.</p>
            <p>Insects are natural diet for many fish and livestock and black soldier flies <strong>(BSF)</strong> does the most magic!</p>
            <p>Black soldier fly <strong>(Hermetia illucens)</strong> our <strong>“unique fly”</strong> has drawn the attention of a lot of scientists, researchers and the agricultural sector globally. They are excellent source of protein for aquaculture, livestock and pet nutrition. The larvae in <strong>BSF</strong> has voracious appetite which makes it convert organic food waste into protein and can also be used for composting biodegradable wastes converting them into unique protein for livestock feeds.</p>
            <p>One-third of food produced for human consumption globally are wasted which is about <strong>1.3 Billion</strong> tons per year <strong>(FA0,2018)</strong>. These food waste amounts roughly to <strong>US$ 680 billion</strong> in industrialized countries and <strong>US$310 billion</strong> in developing countries. These statistics are expected to increase by a third in the year <strong>2030</strong>.</p>
            <p>Organic waste in Nigeria just like most developing countries are dumped in landfills unlike the developed countries who have sophisticated infrastructure for waste management this is why Unique Biotechnology West Africa have established technically simple yet innovative waste management alternative to up cycle organic waste into premium protein and fertilizer sources to meet our agricultural needs in Africa and beyond.</p>
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
        <ContactBox />

        <Menu fixed />
        <div className={styles.Wrapper}>
          <div style={{
            transform: `translateX(${this.state.translateValue}vw)`,
            transition: 'transform ease-out 0.45s'
          }}>
            <Unique click={this.handleAboutOverlay} aboutOverlayOpen={this.state.aboutOverlayOpen} />
            <Food click={this.handleFoodOverlay} joinUs={this.handleForm} foodOverlayOpen={this.state.foodOverlayOpen} />
            <Growth />
          </div>
        </div>

        {aboutOverlay}
        {foodOverlay}


        <Footer />

        {joinUsForm}
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
