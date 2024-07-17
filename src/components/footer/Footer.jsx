import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/profile.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>airnesy</h1>
        </div>
        <p className={styles.desc}>
      This blog is frequently ranked in the top 10 of all blogs globally and is often ranked #1 in the categories of Science, Education, and Health & Fitness.
        </p>
        <div className={styles.icons}>
        <Link href="https://www.tiktok.com/@hubermanlabblog">

          <Image src="/tiktok.png" alt="" width={45} height={28} /> </Link>
    
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=sleep">sleep</Link>
          <Link href="/blog?cat=fertility">fertility</Link>
          <Link href="/blog?cat=hormones">hormones</Link>
          <Link href="/blog?cat=memory">memory</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=well-being">well-being</Link>
          <Link href="/blog?cat=nutrition">nutrition</Link>
          <Link href="/blog?cat=fitness">fitness</Link>
          <Link href="/blog?cat=mental">mental</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.tiktok.com/@hubermanlabblog">Tiktok </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
