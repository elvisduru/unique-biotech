import React, { Component } from "react";
import styles from "./MoreSlider.module.css";

import Slide from "./Slide/Slide";

export default class MoreSlider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.props.slides.length - 1,
        translateValue: (this.props.slides.length - 1) * -260
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 260
    }))
  }

  handleNextSlide = () => {
    console.log(this.state.translateValue, this.refs.slider.style.width)
    // Reset if at end of slider
    // if (this.state.currentIndex === this.props.slides.length - 1) {
    if (this.state.translateValue < -400) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - 260
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
          <div ref="slider" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {this.props.slides.map(
              ({ title, description, image }, index) => (
                <Slide
                  title={title}
                  description={description}
                  image={image}
                  key={index}
                  currentIndex={this.state.currentIndex}
                  index={index}
                  color={this.props.btnColor}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Controls}>
            <button className={styles.leftArrow} onClick={this.handlePrevSlide}>
              <img src={this.props.btnImg} alt="left-arrow" />
            </button>
            <button className={styles.leftArrow} onClick={this.handleNextSlide}>
              <img style={{ transform: 'rotate(180deg)' }} src={this.props.btnImg} alt="right-arrow" />
            </button>
          </div>
          <div className={styles.Indicator}>
            <div className={styles.IndicatorBar}>
              <div style={{ width: `${(indicator / 3) * 100}%`, backgroundColor: '#707070', height: '6px', transition: 'width 0.4s ease-out' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
