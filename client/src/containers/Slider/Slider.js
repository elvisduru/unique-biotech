import React, { Component } from "react";
import styles from "./Slider.module.css";

import arrowCircled from "../../images/left-chevron.svg";

import Slide from "./Slide/Slide";

export default class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.props.slides.length - 1,
        translateValue: (this.props.slides.length - 1) * -251
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 251
    }))
  }

  handleNextSlide = () => {
    // Reset if at end of slider
    if (this.state.currentIndex === this.props.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - 251
    }))
  }

  // componentDidMount() {
  //   setInterval(this.handleNextSlide, 5000);
  // }

  render() {
    let indicator = this.state.currentIndex + 1;
    return (
      <div className={styles.Slider}>
        <div className={styles.SliderWrapper}>
          <div style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {this.props.slides.map(
              ({ caption, image }, index) => (
                <Slide
                  caption={caption}
                  image={image}
                  key={index}
                  currentIndex={this.state.currentIndex}
                  index={index}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Controls}>
            <button style={{
              backgroundColor: this.props.btnColor,
              borderRadius: '50%',
              width: '50px',
              height: '50px'
            }} className={styles.leftArrow} onClick={this.handlePrevSlide}>
              <img src={arrowCircled} alt="left-arrow" />
            </button>
            <button style={{
              backgroundColor: this.props.btnColor,
              borderRadius: '50%',
              width: '50px',
              height: '50px'
            }} className={styles.leftArrow} onClick={this.handleNextSlide}>
              <img style={{ transform: 'rotate(180deg)' }} src={arrowCircled} alt="right-arrow" />
            </button>
          </div>
          <div className={styles.Indicator}>
            <p>0{indicator}</p>
            <div className={styles.IndicatorBar}>
              <div style={{ width: `${(indicator / 3) * 100}%`, backgroundColor: 'white', height: '6px', transition: 'width 0.4s ease-out' }}></div>
            </div>
            <p>03</p>
          </div>
        </div>
      </div>
    );
  }
}
