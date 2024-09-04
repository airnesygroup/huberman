import React from 'react';
import styles from './privacyPage.module.css';

const privacy = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>PRIVACY POLICY</h1>
        <p className={styles.heroSubtitle}>Discover what’s trending now</p>
      </section>

      {/* Mission Statement Section */}
      <section className={styles.mission}>


      <h2 className={styles.missionTitle}>Who We Are</h2>
  <p className={styles.missionText}>
  Last updated [Date]

This privacy notice for [Company Name] (doing business as [Company Short Name]) (“Company,” “we,” “us,” or “our“), describes how and why we might collect, store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:

Visit our website at [Website URL], or any website of ours that links to this privacy notice
[Download and use our application(s), such as our mobile application — [Mobile App Name], our Facebook application — [Facebook App Name], or any other application of ours that links to this privacy notice]
Engage with us in other related ways ― including any sales, marketing, or events
Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at [Email Address].


  </p>

  <h2 className={styles.missionTitle}>Our Mission</h2>
  <p className={styles.missionText}>
    Our mission? To make your voice heard in the buzz of what's trending. 
    We’re here to turn every comment into a conversation and every share into something bigger.
     Let’s keep the energy up and the connections strong—together, we make trends happen.
  </p>

      
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.teamTitle}>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/alex1.png" alt="Team Member 1" className={styles.teamImage} />
            <h3 className={styles.teamName}>Mbelenzi Alexander</h3>
            <p className={styles.teamRole}>CEO & Founder</p>
          </div>
    
       
        </div>
      </section>


      <section className={styles.mission2}>


      <h2 className={styles.missionTitle}> Contact Us</h2>
  <p className={styles.missionText}>
  Email: info@airnesy.com <br />
  contact: +254 703394794
  </p>



      
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

export default privacy;
