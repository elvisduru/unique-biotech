import React from "react";
import styles from "./Careers.module.css";
import Menu from "../../containers/Menu/Menu";
import Footer from "../../containers/Footer/Footer";
import ContactBox from "../../components/ContactBox/ContactBox";

const Careers = () => {
  return (
    <div className={styles.Careers}>
      <ContactBox />

      <div className={styles.nav}>
        <Menu dark fixed />
      </div>
      <main>
        <h1>Careers</h1>
        <div className={styles.content}>
          <div>
            <h2>Are you ready to make a difference today?</h2>
            <p>Unique Biotechnology is looking for leaders and excellence driven individuals seeking to build and impactful career in an ever dynamic high productivity driven environment. You’ll be constantly learning, and yours ideas will be accommodated in an atmosphere of collaboration and team spirit.</p>
          </div>
          <div>
            <h2>WHY JOIN UNIQUE BIOTECHNOLOGY</h2>
            <ol>
              <li>Unique Biotechnology is West Africa’s first fly farm with potentials of becoming one of the fastest growing in Africa.</li>
              <li>We place value with diversifying knowledge within our organization as a research based organization</li>
              <li>We are committed in ensuring the development of our employees as we value talents, dedication and team work.</li>
            </ol>
            <div>
              <h2>GET IN TOUCH WITH US!</h2>
              <p>To find out more about us, send an email to: humanresources@uniquebiotechnology.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
