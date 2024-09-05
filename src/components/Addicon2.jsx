"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./ParentComponent";
import WritePage from "./write/page";
import { useSession } from "next-auth/react"; // Import useSession
import styles from "./AddIcon.module.css";

const AddIcon = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { status } = useSession(); // Access session status

  const handleAddIconClick = () => {
    setModalOpen(true);
  };

  // Render nothing if the user is unauthenticated
  if (status === "unauthenticated") return null;

  return (
    <>
      <button
        className={styles.addIcon}
        onClick={handleAddIconClick}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <WritePage closeModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddIcon;
