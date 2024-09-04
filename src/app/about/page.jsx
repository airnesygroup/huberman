import React from 'react';
import styles from './aboutPage.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroSubtitle}>Discover what’s trending now</p>
      </section>

      {/* Mission Statement Section */}
      <section className={styles.mission}>

      <h2 className={styles.missionTitle}>Who we are</h2>

<p className={styles.missionText}>
 Discover what’s trending now. From viral sensations to breaking news,
join millions of viewers and stay in tune with the moments that matter most.
Explore the hottest trends with all the live commentary.
</p>

        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          Our mission is to empower individuals and organizations through innovative solutions and
          unparalleled service. We strive to make a positive impact in everything we do.
        </p>

      
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.teamTitle}>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/profile.png" alt="Team Member 1" className={styles.teamImage} />
            <h3 className={styles.teamName}>Mbelenzi Alexander</h3>
            <p className={styles.teamRole}>CEO & Founder</p>
          </div>
    
       
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 Airnesy. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default About;
