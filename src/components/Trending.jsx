"use client";

import React, { useEffect, useState } from "react";
import styles from "./Trending.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Trending = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("https://huberman-azure.vercel.app/api/postsimg?page=1&cat=");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const images = data.posts.slice(0, 3).map(post => post.user.image);
        setProfileImages(images);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.trending}>
      <FontAwesomeIcon
        icon={faArrowUp}
        className={styles.arrow}
        onClick={handleScrollToTop}
      />
      <Link href="/popular">
        <div className={styles.imagesContainer}>
          {profileImages.map((src, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Image src={src} alt={`Profile ${index + 1}`} width={20} height={20} />
            </div>
          ))}
        </div>
        <span className={styles.text}>Trends</span>
      </Link>
    </div>
  );
};

export default Trending;
