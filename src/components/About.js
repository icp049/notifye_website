import React from 'react';
import styles from "../stylesheets/About.module.css";
import sc2 from '../images/sc2.png';

const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.container}>
        <img src={sc2} alt='ian' />
        <div className={styles['col-2']}>
         
          <h1 className = {styles.title} align="center">Real Time Updates, Real People</h1>
          <p align="center">Notifye keeps you effortlessly connected with a real-time social media feed that brings everything happening around you directly to your screen. From urgent warnings, impending dangers, finding a missing person or pet and everyrthing in between, you’ll see it all in one place. Stay engaged with the latest happenings and connect with your community through our dynamic feed, ensuring you’re always in the know.</p>

          

         

          
        </div>
      </div>
    </div>
  );
}

export default About;