"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faImage, faPoll, faVideo, faSmile } from "@fortawesome/free-solid-svg-icons"; // Import relevant icons
import Modal from "./ParentComponent";
import WritePage from "./write/page";
import { useSession } from "next-auth/react"; // Import useSession
import styles from "./AddIcon2.module.css";

const AddIcon2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { status } = useSession(); // Access session status

  const handleComponentClick = () => {
    setModalOpen(true);
  };

  // Render nothing if the user is unauthenticated
  if (status === "unauthenticated") return null;

  return (
    <>
      <div className={styles.createPostContainer} onClick={handleComponentClick}>
        <div className={styles.leftSection}>
          <span className={styles.trendingText}>What's trending?</span>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faCode} className={styles.icon} />
            <FontAwesomeIcon icon={faImage} className={styles.icon} />
            <FontAwesomeIcon icon={faPoll} className={styles.icon} />
            <FontAwesomeIcon icon={faVideo} className={styles.icon} />
            <FontAwesomeIcon icon={faSmile} className={styles.icon} />
          </div>
        </div>
        <button className={styles.shareButton}>Share</button>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <WritePage closeModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddIcon2;
