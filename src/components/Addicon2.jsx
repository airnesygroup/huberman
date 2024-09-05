"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faImage, faPoll, faVideo, faSmile, faShare } from "@fortawesome/free-solid-svg-icons"; // Import relevant icons
import Modal from "./ParentComponent";
import WritePage from "./write/page";
import { useSession } from "next-auth/react"; // Import useSession
import styles from "./AddIcon2.module.css";

const AddIcon2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { status } = useSession(); // Access session status

  const handleShareClick = () => {
    setModalOpen(true);
  };

  // Render nothing if the user is unauthenticated
  if (status === "unauthenticated") return null;

  return (
    <div className={styles.createPostContainer}>
      <div className={styles.postContent}>
        <span className={styles.trendingText}>What's trending?</span>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <FontAwesomeIcon icon={faImage} className={styles.icon} />
          <FontAwesomeIcon icon={faPoll} className={styles.icon} />
          <FontAwesomeIcon icon={faVideo} className={styles.icon} />
          <FontAwesomeIcon icon={faSmile} className={styles.icon} />
        </div>
        <button
          className={styles.shareButton}
          onClick={handleShareClick}
        >
          <FontAwesomeIcon icon={faShare} /> Share
        </button>
      </div>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <WritePage closeModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddIcon2;
