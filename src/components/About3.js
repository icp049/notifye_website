import React from 'react';
import styles from "../stylesheets/About3.module.css";
import sc3 from '../images/sc3.PNG';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <img src={sc3} alt='ian' />
        <div className={styles['col-2']}>
        
        <div className = {styles.radialcontainer}></div>
          <h1 className={styles.title} align="center">Instant Capture</h1>
          <p align="center">With Notifye, capturing and sharing critical moments has never been easier. Our app features an instant camera function that allows you to take and upload photos quickly. Whether it's a warning, an event, or a local update, you can instantly document and share it with your community. Plus, you can effortlessly share these photos with your contacts and across your social media accounts, including Instagram Stories. This feature ensures that urgent information reaches others as soon as it happens, keeping everyone informed and connected in real time.</p>

        </div>
      </div>
    </div>
  );
}

export default About;