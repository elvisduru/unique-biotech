import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { Slide } from 'react-reveal';

import logo from '../../images/logo.svg';
import shoppingCart from '../../images/shopping-cart.svg';

import facebook from '../../images/Facebook-white.svg';
import twitter from '../../images/Twitter-white.svg';
import instagram from '../../images/instagram-white.svg';
import linkedin from '../../images/linkedin-white.svg';
import pinterest from '../../images/pinterest-white.svg';

import facebookDark from '../../images/Facebook.svg';
import twitterDark from '../../images/Twitter.svg';
import instagramDark from '../../images/Instagram.svg';
import linkedinDark from '../../images/linkedin.svg';
import pinterestDark from '../../images/pinterest.svg';

export default class Menu extends Component {
  state = {
    openMenu: false
  }

  changeMobileColor = () => {
    const navbar = this.refs.navbar;
    const hamburger = this.refs.hamburger;

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        navbar.style.color = "#707070";
        navbar.style.backgroundColor = 'white';
        [...hamburger.children].forEach(child => {
          child.style.backgroundColor = "#000";
        })
      } else {
        navbar.style.color = "#ffffff";
        navbar.style.backgroundColor = 'transparent';
        [...hamburger.children].forEach(child => {
          child.style.backgroundColor = "#fff";
        })
      }
    });
  }

  changeColor = () => {
    const navbar = this.refs.navbar;
    const facebookLogo = navbar.children[1].children[1].children[0].children[0];
    const twitterLogo = navbar.children[1].children[1].children[1].children[0];
    const instagramLogo = navbar.children[1].children[1].children[2].children[0];
    const linkedinLogo = navbar.children[1].children[1].children[3].children[0];
    const pinterestLogo = navbar.children[1].children[1].children[4].children[0];

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 100) {
        navbar.style.color = "#707070";
        navbar.style.backgroundColor = 'white';
        navbar.style.top = "0";
        navbar.style.paddingTop = "25px";
        facebookLogo.src = facebookDark
        twitterLogo.src = twitterDark
        instagramLogo.src = instagramDark
        linkedinLogo.src = linkedinDark
        pinterestLogo.src = pinterestDark
      } else {
        navbar.style.color = "#ffffff";
        navbar.style.backgroundColor = 'transparent';
        navbar.style.top = "30px";
        navbar.style.paddingTop = "0";
        facebookLogo.src = facebook
        twitterLogo.src = twitter
        instagramLogo.src = instagram
        linkedinLogo.src = linkedin
        pinterestLogo.src = pinterest
      }
    })
  }

  handleOpenMenu = () => {
    this.setState(prevState => ({ openMenu: !prevState.openMenu }))
  }

  componentDidMount() {
    if (window.innerWidth > 768) {
      this.changeColor()
    } else {
      this.changeMobileColor()
    }
  }

  render() {
    const mobileMenu = this.state.openMenu ? (
      <Slide right>
        <div className={styles.MobileMenu}>
          <div onClick={this.handleOpenMenu} className={styles.backdrop}></div>
          <div className={styles.content}>
            <p onClick={this.handleOpenMenu}>&times;</p>
            <ul>
              <li><Link to="/shop">Our Product</Link></li>
              <li><Link to={{ pathname: "/main", mainProps: "-200" }}>Our Market</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.facebook.com/uniquebiotechnology.westafrica">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.twitter.com/uniquebiotechwa">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/uniquebiotechnologywa">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/unique-biotechnology-west-africa-limited/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.pinterest.com/uniquebiotechnologywestafrica/">
                <img src={pinterest} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Slide>
    ) : null
    return (
      <nav ref="navbar" className={styles.Menu} style={{
        position: `${this.props.fixed ? 'fixed' : null}`
      }}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {window.innerWidth > 768 ? (
          <div className={styles.nav} style={{ color: `${this.props.dark ? '#707070' : null}` }}>
            <ul>
              <li><Link to="/shop">Our Product</Link></li>
              <li><Link to={{ pathname: "/main", mainProps: "-200" }}>Our Market</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.facebook.com/uniquebiotechnology.westafrica">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.twitter.com/uniquebiotechwa">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/uniquebiotechnologywa">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/unique-biotechnology-west-africa-limited/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.pinterest.com/uniquebiotechnologywestafrica/">
                <img src={pinterest} alt="" />
              </a>
            </div>
            <Link to="/shop">
              Store
            <span>
                <img src={shoppingCart} alt="" />
              </span>
            </Link>
          </div>
        ) : (
            <div className={styles.mobilenav}>
              <Link to="/shop">
                Store
                <span>
                  <img src={shoppingCart} alt="" />
                </span>
              </Link>
              <button onClick={this.handleOpenMenu} ref="hamburger" className={styles.hamburger}>
                <span style={{ backgroundColor: `${this.props.dark ? '#000' : null}` }}></span>
                <span style={{ backgroundColor: `${this.props.dark ? '#000' : null}` }}></span>
                <span style={{ backgroundColor: `${this.props.dark ? '#000' : null}` }}></span>
              </button>
            </div>
          )}
        {mobileMenu}
      </nav>
    )
  }
}
