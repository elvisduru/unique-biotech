import React, { Component } from "react";
import styles from "./Growth.module.css";
import IntroSection from "../../../components/IntroSection/IntroSection";
import ImgSection from "../../../components/ImgSection/ImgSection";

import growthBg from "../../../images/growth_bg.png";

import poultry from "../../../images/poultry.jpg";
import livestocks from "../../../images/livestocks.jpg";
import fertilizer from "../../../images/fertilizer.jpg";
import pets from '../../../images/pets.jpg';
import aqualife from '../../../images/aqualife.jpg';

export default class Growth extends Component {
  render() {
    return (
      <div className={styles.Growth}>
        <IntroSection
          title="03. Market"
          description="Our Market"
          bgImage={growthBg}
        />
        <ImgSection
          heading="Poultry"
          image={poultry}
          text="Chickens will naturally forage for insects given the opportunity. Many backyard chickens are kept in northern climates or in coops where insect exposure is limited. BSFL meal and oil, or whole dried larvae provide a natural insect ingredient to chickens and other backyard flock. BSFL ingredients are more sustainable than many other protein ingredients used in chicken feeds, high in calcium and protein, and palatable to birds in many forms."

        />
        <ImgSection
          right
          heading="Aqua Life"
          image={aqualife}
          text="Global stocks of forage fish are decreasing and there is not enough to meet the growing demand for fish meal needed to sustain aquaculture systems that support food production. BSFL can extend fish meals supplies to feed more fish and, ultimately, more people."

        />
        <ImgSection
          heading="Pets"
          image={pets}
          text="Looking for a novel protein source? Unique Biotech® products are up to the challenge. Proganics Meal and Proganics Oil are both palatable and nutritious as an ingredient in pet food. Dogs and cats will benefit from the high lauric acid content and rich amino acid make up."

        />
        <ImgSection
          right
          heading="Fertilizer"
          image={fertilizer}
          text="Ideal for flowers, vegetables, fruits, lawns, and anyone looking for a natural, chemical free fertilizer. Frass made from Uniuque Biotechnology® Premium dried black soldier fly larvae (BSFL) is an all-natural fertilizer containing a nutrient dense blend of N-P-K and minerals. Fertilizer is produced in the U.S. with U.S. sourced ingredients."

        />
        <ImgSection
          heading="Livestocks"
          image={livestocks}
          text="Digestible and nutritious. Unique Biotechnology® BSFL products will provide quality high protein, palatable energy and fiber to help young growing livestock thrive."
        />
        <div className={styles.callout}>
          <h4>Lorem ipsum dolor sit.?</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, earum! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button onClick={this.props.joinUs}>Contact Us Today</button>
        </div>
      </div>
    );
  }
}
