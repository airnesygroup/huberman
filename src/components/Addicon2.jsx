"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPoll, faVideo, faSmile, faShareSquare } from "@fortawesome/free-solid-svg-icons"; // Import the required icons
import Modal from "./ParentComponent";
import WritePage from "./write/page";
import { useSession } from "next-auth/react";
import styles from "./AddIcon2.module.css";

const AddIcon2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { status } = useSession();

  const handleShareClick = () => {
    setModalOpen(true);
  };

  if (status === "unauthenticated") return null;

  return (
    <>
      <div className={styles.trendingBox}>
        <div className={styles.header}>
          What's trending?
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faImage} className={styles.icon} />
          <FontAwesomeIcon icon={faPoll} className={styles.icon} />
          <FontAwesomeIcon icon={faVideo} className={styles.icon} />
          <FontAwesomeIcon icon={faSmile} className={styles.icon} />
          <button className={styles.shareButton} onClick={handleShareClick}>
            <FontAwesomeIcon icon={faShareSquare} />
          </button>
        </div>
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
