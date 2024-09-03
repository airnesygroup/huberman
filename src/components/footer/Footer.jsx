import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <Link href="/">
          <div className={styles.logo}>
            <Image src="/logo1.png" alt="airnesy logo" layout="fill" className={styles.logoImage} />
            <h1 className={styles.logoText}>Reddit</h1>
          </div>
        </Link>
        <p className={styles.desc}>
        Airnesy – Discover what’s trending now. From viral sensations to breaking news,
         join millions of viewers and stay in tune with the moments that matter most.
          Explore the hottest trends with all the live commentary.
        </p>
    
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Top </span>
          <Link href="/blog?cat=politics">politics</Link>
          <Link href="/blog?cat=news">news</Link>
          <Link href="/blog?cat=technology">technology</Link>
          <Link href="/blog?cat=business">business</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">About</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">User Agreement</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.tiktok.com/@Airnesy">Tiktok </Link>
          <Link href="https://www.youtube.com/@Airnesy">Youtube </Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;
