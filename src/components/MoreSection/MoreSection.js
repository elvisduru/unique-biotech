import React from "react";
import styles from "./MoreSection.module.css";
import MoreSlider from "../../containers/MoreSlider/MoreSlider";

const MoreSection = ({ slides, btnColor, btnImg, heading, description }) => {
  return (
    <div className={styles.MoreSection}>
      <h1 style={{
        backgroundColor: btnColor
      }}>More About</h1>
      <div className={styles.Intro}>
        <h2>{heading}</h2>
        <p>
          {description}
        </p>
      </div>
      <MoreSlider btnColor={btnColor} slides={slides} btnImg={btnImg} />
    </div>
  );
};

export default MoreSection;
