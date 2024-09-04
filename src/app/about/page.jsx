import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroSubtitle}>We are passionate about what we do</p>
      </section>

      {/* Mission Statement Section */}
      <section className={styles.mission}>
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
            <h3 className={styles.teamName}>John Doe</h3>
            <p className={styles.teamRole}>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/profile.png" alt="Team Member 2" className={styles.teamImage} />
            <h3 className={styles.teamName}>Jane Smith</h3>
            <p className={styles.teamRole}>Chief Marketing Officer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/profile.png" alt="Team Member 3" className={styles.teamImage} />
            <h3 className={styles.teamName}>Emily Johnson</h3>
            <p className={styles.teamRole}>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 Your Company. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default About;
