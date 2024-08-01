// Footer.js
import React from 'react';
import styles from '../stylesheets/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>




      <p className={styles.footerText}>
        Need to Contact us?
        
      </p>


      <p className={styles.footerEmail}>
         Reach us at <a href="mailto:vitt0mail2024@gmail.com" className={styles.footerLink}>vitt0mail2024@gmail.com</a>
         </p>
    </footer>
  );
};

export default Footer;
