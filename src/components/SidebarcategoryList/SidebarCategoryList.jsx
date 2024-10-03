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
  faCircle as farCircle,
  faNewspaper as farNewspaper,
  faRobot as farRobot,
  faGamepad as farGamepad,
  faFilm as farFilm,
  faVrCardboard as farVrCardboard,
  faCoins as farCoins,
  faGlasses as farGlasses,
  faPrint as farPrint,
  faPiggyBank as farPiggyBank,
  faWatch as farWatch,
  faBullhorn as farBullhorn,
  faShoppingCart as farShoppingCart,
  faBrain as farBrain,
  faDatabase as farDatabase,
  faCode as farCode,
  faCloud as farCloud,
  faAtom as farAtom,
  faLock as farLock,
  faWifi as farWifi,
  faNetworkWired as farNetworkWired,
  faTshirt as farTshirt,
  faUtensils as farUtensils,
  faBolt as farBolt,
  faDesktop as farDesktop,
  faCar as farCar,
  faRocket as farRocket,
  faBatteryHalf as farBatteryHalf,
  faFlask as farFlask,
  faSquareRootAlt as farSquareRootAlt,
  faDna as farDna,
  faMapMarkedAlt as farMapMarkedAlt,
  faCogs as farCogs,
  faHammer as farHammer,
  faHeartbeat as farHeartbeat,
  faSeedling as farSeedling,
  faLeaf as farLeaf,
  faAnchor as farAnchor,
  faFighterJet as farFighterJet,
  faBoxes as farBoxes,
  faCity as farCity,
  faHandPaper as farHandPaper,
  faThread as farThread,
  faFootballBall as farFootballBall,
  faPaintBrush as farPaintBrush,
} from "@fortawesome/free-regular-svg-icons"; // Change to free-regular-svg-icons

// Map of icon strings to actual FontAwesome icons


const iconMap = {
  "far fa-circle": farCircle,
  "far fa-newspaper": farNewspaper,
  "far fa-robot": farRobot,
  "far fa-gamepad": farGamepad,
  "far fa-film": farFilm,
  "far fa-vr-cardboard": farVrCardboard,
  "far fa-coins": farCoins,
  "far fa-glasses": farGlasses,
  "far fa-print": farPrint,
  "far fa-piggy-bank": farPiggyBank,
  "far fa-watch": farWatch,
  "far fa-bullhorn": farBullhorn,
  "far fa-shopping-cart": farShoppingCart,
  "far fa-brain": farBrain,
  "far fa-database": farDatabase,
  "far fa-code": farCode,
  "far fa-cloud": farCloud,
  "far fa-atom": farAtom,
  "far fa-lock": farLock,
  "far fa-wifi": farWifi,
  "far fa-network-wired": farNetworkWired,
  "far fa-tshirt": farTshirt,
  "far fa-utensils": farUtensils,
  "far fa-bolt": farBolt,
  "far fa-desktop": farDesktop,
  "far fa-car": farCar,
  "far fa-rocket": farRocket,
  "far fa-battery-half": farBatteryHalf,
  "far fa-flask": farFlask,
  "far fa-square-root-alt": farSquareRootAlt,
  "far fa-dna": farDna,
  "far fa-map-marked-alt": farMapMarkedAlt,
  "far fa-cogs": farCogs,
  "far fa-hammer": farHammer,
  "far fa-heartbeat": farHeartbeat,
  "far fa-seedling": farSeedling,
  "far fa-leaf": farLeaf,
  "far fa-anchor": farAnchor,
  "far fa-fighter-jet": farFighterJet,
  "far fa-boxes": farBoxes,
  "far fa-city": farCity,
  "far fa-hand-paper": farHandPaper,
  "far fa-thread": farThread,
  "far fa-football-ball": farFootballBall,
  "far fa-paint-brush": farPaintBrush,
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
