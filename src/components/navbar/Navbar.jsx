"use client";

import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  const containerStyle = theme === "dark" ? { backgroundColor: "#020203" } : { backgroundColor: "#fcfeff" };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.wrapper}>
        <Link href="/">
          <div className={styles.logo}>Airnesi</div>
        </Link>
        <div className={styles.links}>
          <ThemeToggle />
          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="https://a.co/d/7yHmqai" className={styles.link}>Books</Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
