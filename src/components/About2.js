import React from 'react';
import styles from "../stylesheets/About2.module.css";
import sc1 from '../images/sc1.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles['col-2']}>
     
          <h1 className = {styles.title} align="center">Stay Informed, Stay Connected</h1>
          <p align="center">Notifye keeps you connected with real-time updates from genuine community members. Our app features an interactive map that continuously tracks your location, providing you with automatic updates. The map displays markers to indicate the proximity of events and alerts around you, ensuring you stay informed about what’s happening nearby at any given moment.</p>

          
        </div>
        <img src={sc1} alt='ian' />
      </div>
    </div>
  );
}

export default About;
