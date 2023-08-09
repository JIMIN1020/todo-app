import React, { useState } from "react";
import styles from "../styles/Profile.module.css";
import ProfileModal from "./ProfileModal";
import { auth } from "../myFirebase";

const Profile = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  return (
    <div className={styles.profile}>
      <button
        className={styles.button}
        onClick={() => setUserModalOpen((prev) => !prev)}
      >
        <img
          src={auth.currentUser.photoURL}
          width="40"
          style={{ borderRadius: "50%" }}
        />
      </button>
      {userModalOpen && <ProfileModal />}
    </div>
  );
};

export default Profile;
