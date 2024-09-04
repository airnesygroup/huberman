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


  <p className={styles.missionText}>
  Last updated [Date]

This privacy notice for [Company Name] (doing business as [Company Short Name]) (“Company,” “we,” “us,” or “our“), describes how and why we might collect, store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:

Visit our website at [Website URL], or any website of ours that links to this privacy notice
[Download and use our application(s), such as our mobile application — [Mobile App Name], our Facebook application — [Facebook App Name], or any other application of ours that links to this privacy notice]
Engage with us in other related ways ― including any sales, marketing, or events
Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at [Email Address].


  </p>

  <h2 className={styles.missionTitle}>SUMMARY OF KEY POINTS</h2>
  <p className={styles.missionText}>
  This summary provides key points from our privacy notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.

What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with [Company Name] and the Services, the choices you make, and the products and features you use.

Do we process any sensitive personal information? [We do not process sensitive personal information. / We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.]

Do you receive any information from third parties? We may receive information from public databases, marketing partners, social media platforms, and other outside sources.

How do you process my information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.

In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties.

How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.

What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.

How do I exercise my rights? The easiest way to exercise your rights is by filling out our data subject request form available here: [DSAR Form URL], or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.


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
