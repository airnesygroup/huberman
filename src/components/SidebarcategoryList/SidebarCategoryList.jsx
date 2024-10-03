"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./SidebarcategoryList.module.css";
import Link from "next/link";
import AddIcon2 from "../Addicon2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular, faCompass as faCompassRegular } from "@fortawesome/free-regular-svg-icons";
import { InfoOutlined, WorkOffOutlined, ShieldOutlined,  GavelOutlined }from "@mui/icons-material";
import { ThemeContext } from "@/context/ThemeContext";
import {
  faCircle,
  faNewspaper,
  faRobot,
  faGamepad,
  faFilm,
  faVrCardboard,
  faCoins,
  faGlasses,
  faPrint,
  faPiggyBank,
  faWatch,
  faBullhorn,
  faShoppingCart,
  faBrain,
  faDatabase,
  faCode,
  faCloud,
  faAtom,
  faLock,
  faWifi,
  faNetworkWired,
  faTshirt,
  faUtensils,
  faBolt,
  faDesktop,
  faCar,
  faRocket,
  faBatteryHalf,
  faFlask,
  faSquareRootAlt,
  faDna,
  faMapMarkedAlt,
  faCogs,
  faHammer,
  faHeartbeat,
  faSeedling,
  faLeaf,
  faAnchor,
  faFighterJet,
  faBoxes,
  faCity,
  faHandPaper,
  faThread,
  faFootballBall,
  faPaintBrush,
} from "@fortawesome/free-regular-svg-icons";

// Map of icon strings to actual FontAwesome icons
const iconMap = {
  "fa-regular fa-circle": faCircle,
  "fa-regular fa-newspaper": faNewspaper,
  "fa-regular fa-robot": faRobot,
  "fa-regular fa-gamepad": faGamepad,
  "fa-regular fa-film": faFilm,
  "fa-regular fa-vr-cardboard": faVrCardboard,
  "fa-regular fa-coins": faCoins,
  "fa-regular fa-glasses": faGlasses,
  "fa-regular fa-print": faPrint,
  "fa-regular fa-piggy-bank": faPiggyBank,
  "fa-regular fa-watch": faWatch,
  "fa-regular fa-bullhorn": faBullhorn,
  "fa-regular fa-shopping-cart": faShoppingCart,
  "fa-regular fa-brain": faBrain,
  "fa-regular fa-database": faDatabase,
  "fa-regular fa-code": faCode,
  "fa-regular fa-cloud": faCloud,
  "fa-regular fa-atom": faAtom,
  "fa-regular fa-lock": faLock,
  "fa-regular fa-wifi": faWifi,
  "fa-regular fa-network-wired": faNetworkWired,
  "fa-regular fa-tshirt": faTshirt,
  "fa-regular fa-utensils": faUtensils,
  "fa-regular fa-bolt": faBolt,
  "fa-regular fa-desktop": faDesktop,
  "fa-regular fa-car": faCar,
  "fa-regular fa-rocket": faRocket,
  "fa-regular fa-battery-half": faBatteryHalf,
  "fa-regular fa-flask": faFlask,
  "fa-regular fa-square-root-alt": faSquareRootAlt,
  "fa-regular fa-dna": faDna,
  "fa-regular fa-map-marked-alt": faMapMarkedAlt,
  "fa-regular fa-cogs": faCogs,
  "fa-regular fa-hammer": faHammer,
  "fa-regular fa-heartbeat": faHeartbeat,
  "fa-regular fa-seedling": faSeedling,
  "fa-regular fa-leaf": faLeaf,
  "fa-regular fa-anchor": faAnchor,
  "fa-regular fa-fighter-jet": faFighterJet,
  "fa-regular fa-boxes": faBoxes,
  "fa-regular fa-city": faCity,
  "fa-regular fa-hand-paper": faHandPaper,
  "fa-regular fa-thread": faThread,
  "fa-regular fa-football-ball": faFootballBall,
  "fa-regular fa-paint-brush": faPaintBrush,
};

const getData = async () => {
  try {
    const res = await fetch("https://www.airnesy.com/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

const SidebarCategoryList = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [showAllCategories, setShowAllCategories] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getData();
        setData(categories);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = (slug) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const displayedCategories = showAllCategories ? data : data.slice(0, 10);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.sidebarButton} ${router.pathname === "/" ? styles.active : ""}`}
        onClick={() => router.push("/")}
      >
        <Image
          src={theme === "light" ? "/home2.png" : "/home.png"} // Adjust icon paths based on theme
          alt="home"
          className={styles.icon}
          height={25}
          width={25}
        />
        Home
      </button>
      <button
        className={`${styles.sidebarButton} ${router.pathname === "/popular" ? styles.active : ""}`}
        onClick={() => router.push("/popular")}
      >
        
        <FontAwesomeIcon icon={faStarRegular} className={styles.icon} size="lg" />
        Popular
        <span className={styles.chevron2}>⌄</span>
      </button>


      <button
        className={`${styles.sidebarButton} ${router.pathname === "/hooliconnews" ? styles.active : ""}`}
        onClick={() => router.push("/hooliconnews")}
      >
        
        <FontAwesomeIcon icon={faStarRegular} className={styles.icon} size="lg" />
        Hoolicon News
        <span className={styles.chevron2}>⌄</span>
      </button>

      <button
        className={`${styles.sidebarButton} ${router.pathname === "/explore" ? styles.active : ""}`}
        onClick={() => router.push("/explore")}
      >
        <FontAwesomeIcon icon={faCompassRegular} className={styles.icon} size="lg" />
        Explore
        <span className={styles.chevron2}>⌄</span>
      </button>
      <div className={styles.separator}></div>
      <div className={styles.sectionTitle}>Categories</div>
      {displayedCategories.map((item) => (
        <div key={item._id} className={styles.categoryWrapper}>
          <button
            className={styles.categoryButton}
            onClick={() => router.push(`/blog?cat=${item.slug}`)}>

            <span>
              <FontAwesomeIcon className={styles.icon} size="lg" icon={iconMap[item.icon]} />
            </span>
            
            {item.title}
            <span>⌄</span>
          </button>
          {openDropdowns[item.slug] && (
            <div className={styles.subcategories}>
              {item.subcategories.map((sub) => (
                <Link
                  href={`/blog?cat=${sub.slug}`}
                  className={styles.subcategory}
                  key={sub._id}
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      {data.length > 10 && (
        <button
          className={styles.showMoreButton}
          onClick={() => setShowAllCategories((prev) => !prev)}
        >
          {showAllCategories ? "Show Less" : "Show More"}
        </button>
      )}
      <div className={styles.separator}></div>
      <AddIcon2 />
      <div className={styles.separator}></div>

      <div className={styles.sectionTitle}>Resources</div>
      <button
        className={`${styles.sidebarButton} ${router.pathname === "/about" ? styles.active : ""}`}
        onClick={() => router.push("/about")}
      >
        <InfoOutlined className={styles.icon} size="lg" />
        About Us
      </button>

      <button
        className={`${styles.sidebarButton} ${router.pathname === "/careers" ? styles.active : ""}`}
        onClick={() => router.push("/careers")}
      >
        <WorkOffOutlined className={styles.icon} size="lg" />
        Careers
      </button>

      <button
        className={`${styles.sidebarButton} ${router.pathname === "/privacy" ? styles.active : ""}`}
        onClick={() => router.push("/privacy")}
      >
        <ShieldOutlined className={styles.icon} size="lg" />
        Privacy Policy
      </button>
      <button
        className={`${styles.sidebarButton} ${router.pathname === "/agreement" ? styles.active : ""}`}
        onClick={() => router.push("/agreement")}
      >
        <GavelOutlined className={styles.icon} size="lg" />
        User Agreement
      </button>
    </div>
  );
};

export default SidebarCategoryList;
