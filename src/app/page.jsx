"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import SidebarCategoryList from "@/components/SidebarcategoryList/SidebarCategoryList";
import Menu from "@/components/Menu/Menu";
import CarouselList from "@/components/carouselList/CarouselList";
import Trending from "@/components/Trending";
import AddIcon from "@/components/Addicon";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams?.page || "1");

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isTrendingVisible, setIsTrendingVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.trendingWrapper} ${
          isTrendingVisible ? styles.visible : styles.hidden
        }`}
      >
        <Trending />
      </div>

      {isNavbarVisible && <Navbar />}
      <AddIcon />

      <div className={styles.menu}>
        <SidebarCategoryList />
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
