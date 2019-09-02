import React, { Component } from 'react';
import styles from './SearchBar.module.css';

import searchIcon from '../../images/magnifying-glass.svg';

export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.SearchBar}>
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="" />
      </div>
    )
  }
}
