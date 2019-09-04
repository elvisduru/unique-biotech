import React from "react";
import styles from "./Terms.module.css";
import Menu from "../../containers/Menu/Menu";
import Footer from "../../containers/Footer/Footer";

const Terms = () => {
  return (
    <div className={styles.Terms}>
      <div className={styles.nav}>
        <Menu dark />
      </div>
      <main>
        <h1>Terms and Conditions</h1>
        <p>Last modified: August 20, 2019</p>
        <div className={styles.content}>
          <div>
            <p>
              These Terms and Conditions apply to Unique biotechnology West
              Africa website www.uniquebiotechnology.com. By using this website,
              you consent to this Terms and Conditions. Unique biotechnology
              West Africa is a wholly owned franchise of Unique biotechnology Co
              ltd, Guangzhou China. Unique biotechnology West Africa maintains
              this website for itself. This website and any other services
              provided in connection with this website are provided expressly
              subject to these terms and conditions, which governs the use of
              this site.{" "}
            </p>
            <p>
              Please read these terms and conditions carefully, by accessing this website you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark laws.
            </p>
          </div>
          <div>
            <h2>1. Copyright and use of website materials</h2>
            <p>All of the pages and screens on the Website are owned and controlled by Unique biotechnology West Africa except as otherwise expressly stated. You are authorized to view the information available on the Website for your informational purposes only. </p>
            <p>Unique biotechnology West Africa maintains this website to serve the Users who wish to connect to it. Website Materials may only be reproduced, distributed, published or otherwise publicly presented based on a prior written consent by Unique biotechnology West Africa. Should you have additional questions on the use of the Website Materials, please contact us through the Contact Form.</p>
          </div>
          <div>
            <h2>2. Disclaimer</h2>
            <p>The Content on this website are offered on an “as is”, “where is” and “where available” basis with no warranties of any kind- whether express, implied or Statutory, including, but not limited to, warranties of Title or the implied warranties of Merchantability or fitness for a particular purpose and non-infringement of intellectual property or other violation of rights.</p>
            <p>In particular, Unique biotechnology West Africa makes no warranties or representations as to the accuracy or completeness of the Content. We do not warrant that this website is free from viruses or other components that may be harmful to equipment or software.</p>
            <p>Unique biotechnology West Africa does not guarantee that the Unique Biotechnology Website will be compatible with the equipment and software which you may use and does not guarantee that the Unique biotechnology West Africa Website will be available all the time or at any specific time.</p>
          </div>
          <div>
            <h2>3. Limitation of liability</h2>
            <p>To the extent permitted by applicable law, neither Unique biotechnology West Africa nor its affiliates shall be liable for any direct, indirect, consequential or other damages whatsoever, including but not limited to property damage, loss of use, loss of business, economic loss, loss of data or loss of profits, including liability associated with any computer viruses arising out of or in connection with your use or access to, or inability to use or access the Unique biotechnology West Africa Website or its content even if Unique biotechnology West Africa or a Unique biotechnology representative authorized representative has been notified orally or in writing of the possibility of such damage. The User operates the Site at his own risk.</p>
          </div>
          <div>
            <h2>4. Indemnification</h2>
            <p>By using this site, you agree to indemnify, defend and hold harmless Unique biotechnology West Africa and their respective directors, officers, employees and agents from and against all claims and expenses, including attorney’s fee related to either your violation of these website Terms and conditions or misuse of the service or this website.</p>
          </div>
          <div>
            <h2>5. Accuracy of materials</h2>
            <p>Unique biotechnology West Africa will use reasonable efforts to ensure that the information and materials provided on this Website are correct. However, Unique biotechnology West Africa cannot guarantee the accuracy of all information and materials and does not assume any responsibility or liability for the accuracy, completeness or authenticity of any information and materials contained on this Website. We do not warrant that the operation of this Website will be uninterrupted or error-free.</p>
          </div>
          <div>
            <h2>6. Links</h2>
            <p>The Website may contain links to Websites controlled or offered by third parties. Unique biotechnology West Africa is not responsible or liable for the information or materials made available by such third party websites. We encourage you to read the terms of use and privacy statements of all third party websites before using such websites or submitting any personal data or any other information on or through such websites. Your participation in any linked site, is based solely on the agreement, if any, between you and the linked site provider.</p>
          </div>
          <div>
            <h2>7. Links from other website to Unique Biotechnology West Africa Website</h2>
            <p>Inserting links from a third-party website to www.uniquebiotechnology.com requires prior written consent from Unique biotechnology West Africa. If you would like to link from other websites, please contact us through the Contact Form.</p>
          </div>
          <div>
            <h2>8. Restricting or blocking access to the Unique Biotechnology website for violations of the website terms of use</h2>
            <p>In case of a violation of these Website Terms and condition, particularly in case of use of the Unique biotechnology West Africa Website or individual elements of the Unique biotechnology West Africa Website for other than its intended use, access to the Unique biotechnology West Africa Website may be restricted or blocked. Unique biotechnology West Africa generally reserves the right to partially or entirely alter, block, or discontinue the Unique biotechnology West Africa Website or its content at any time and for any reason.</p>
          </div>
          <div>
            <h2>9. Modifications</h2>
            <p>Unique biotechnology West Africa may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of Use.</p>
          </div>
          <div>
            <h2>10. Governing law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
