// src/app/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import CarouselList from "@/components/carouselList/CarouselList";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


export default function Home({ searchParams }) {
  const [isClient, setIsClient] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isTrendingVisible, setIsTrendingVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const page = parseInt(searchParams.page) || 1;

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  // Ensure that the component is only using router after the client is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("popupShown")) {
      setIsPopupVisible(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 720) {
        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
          setIsTrendingVisible(true);
        } else {
          setIsNavbarVisible(true);
          setIsTrendingVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!isClient) {
    return null; // Ensure the component doesn't render until mounted
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.trendingWrapper} ${
          isTrendingVisible ? styles.visible : styles.hidden
        }`}
      >
      </div>

      {isNavbarVisible && <Navbar />}

      <div className={styles.menu}>
      </div>
      <div className={styles.mainContent}>
        <CategoryList />

        <CarouselList page={page} />
        
        <div className={styles.content1}>
          <CardList page={page} />

          <Menu />
        </div>
        <Footer />
      </div>

   
    </div>
  );
}