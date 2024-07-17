import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ item, withImage }) => {
  return (
    <div className={styles.items}>
        <Link href={`/posts/${item.slug}`} className={styles.item} key={item.slug}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/profile.png" alt={item.title} fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>huberman</span>
              <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default MenuPosts;
