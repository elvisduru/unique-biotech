import React from "react";
import styles from "./index.module.css";
import bannerImg from "../../images/blackfriday.png";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

export const Banner = ({ close }) => {
  return (
    <div className={styles.Banner}>
      <Zoom top>
        <div className={styles.imgWrapper}>
          <span onClick={close}>&times;</span>
          <Link to="/shop/larvae">
            <img src={bannerImg} alt="black friday banner" />
          </Link>
        </div>
      </Zoom>
    </div>
  );
};
