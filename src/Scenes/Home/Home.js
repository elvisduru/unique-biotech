import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/wasteBg.jpg';
import bg3 from '../../images/bg3.jpg';
import slide01 from '../../images/slide01.jpg';
import slide02 from '../../images/slide02.jpg';
import slide03 from '../../images/slide03.png';
import slide04 from '../../images/wasteBg2.jpg';
import slide05 from '../../images/fruitwaste.jpg';
import slide06 from '../../images/vegetablewaste.jpg';
import slide07 from '../../images/slide07.jpg';
import slide08 from '../../images/slide08.jpg';
import slide09 from '../../images/bg2-1.jpg';
import fruitWaste from '../../images/fruitwaste2.jpg';

import longArrowRight from '../../images/long-arrow-right.svg';
import Slider from "../../containers/Slider/Slider";
import Menu from "../../containers/Menu/Menu";

export default class Home extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0,
    slides: [
      {
        title: "Unique Planet, Unique Protein",
        description:
          "Welcome to Unique Biotechnology West Africa Limited. We are West Africa's first commercial fly farm.",
        bgImage: bg1,
        link: "/unique",
        btnColor: "rgba(0, 175, 174, 1)",
        mainValue: "0",
        miniSlider: [
          { caption: "The Black Soldier Fly", image: slide01 },
          { caption: "Black Soldier Fly Larvae", image: slide08 },
          { caption: "Black Soldier Fly Eggs", image: slide02 },
        ]
      },
      {
        title: "Organic Waste Processing",
        description:
          "We process organic Waste through bio-conversion, with the help of the Black Soldier Fly and our bio-technological know-how.",
        // bgImage: slide05,
        bgImage: fruitWaste,
        link: "/food",
        btnColor: "rgba(48, 87, 101, 1)",
        mainValue: "-100",
        miniSlider: [
          { caption: "Food Waste", image: slide04 },
          { caption: "Fruit Waste", image: bg2 },
          { caption: "Vegetable Waste", image: slide06 },
        ]
      },
      {
        title: "Our Market",
        description:
          'Our focus is in securing the best yield for fish farmers, poultry farmers, pig farmers and livestock farmers in general. "We farm the insect, farmers make the profit"',
        bgImage: bg3,
        link: "/growth",
        btnColor: "rgba(0, 49, 32, 1)",
        mainValue: "-200",
        miniSlider: [
          { caption: "A Healthy Piglet", image: slide07 },
          { caption: "Chickens Eating Larvae", image: slide09 },
          { caption: "Catfish Ready for Harvest", image: slide03 },
        ]
      }
    ]
  };

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.slides.length - 1,
        translateValue: (this.state.slides.length - 1) * -100
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 100
    }))
  }

  handleNextSlide = () => {
    // Reset if at end of slider
    if (this.state.currentIndex === this.state.slides.length - 1) {
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

  componentDidMount() {
    var timeout;
    timeout = setInterval(this.handleNextSlide, 5000);
    document.addEventListener('onmousemove', function (e) {
      if (timeout) {
        clearInterval(timeout);
      }
      setTimeout(() => {
        timeout = setInterval(this.handleNextSlide, 5000);
      }, 3000);
    }, false)
  }

  render() {
    return (
      <ReactScrollWheelHandler
        upHandler={this.handlePrevSlide}
        downHandler={this.handleNextSlide}
        customStyle={{
          width: '100%',
          height: '100vh',
          overflowY: 'hidden'
        }}
      >
        <Menu fixed />
        <div className={styles.Indicator}>
          <div className={styles.IndicatorBar}>
            {this.state.slides.map((_, index) => (
              <div style={{
                width: '5px',
                height: '5px',
                transform: `scale(${index === this.state.currentIndex ? '8' : '1'})`,
                backgroundColor: '#F0F1F6',
                borderRadius: '50%'
              }} key={index} />
            ))}
          </div>
          <p className={styles.Counter}>
            0{this.state.currentIndex + 1} / 0{this.state.slides.length}
          </p>
        </div>
        <div style={{
          transform: `translateY(${this.state.translateValue}vh)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {this.state.slides.map((slide, index) => (
            <div className={styles.Slide} key={index} style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className={styles.Left}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to={{ pathname: "/main", mainProps: slide.mainValue }} style={{ backgroundColor: slide.btnColor }}>Learn more <img src={longArrowRight} alt="" /></Link>
              </div>
              <div className={styles.Right}>
                <Slider slides={slide.miniSlider} btnColor={slide.btnColor} />
              </div>
            </div>
          ))}
        </div>

      </ReactScrollWheelHandler>
    );
  }
}
