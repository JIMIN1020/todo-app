import React from "react";
import styles from "../styles/ProfileModal.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../myFirebase";
import { BiLogOut, BiDoorOpen } from "react-icons/bi";

const ProfileModal = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/");
  };
  const onQuitClick = () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      auth.currentUser.delete();
      navigate("/");
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.title}>
        <h5>{auth.currentUser.displayName}</h5>
        <span>
          {auth.currentUser.email ? auth.currentUser.email : "Github Account"}
        </span>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={onLogOutClick}>
          <BiLogOut style={{ marginRight: "5px" }} />
          로그아웃
        </button>
        <button onClick={onQuitClick}>
          <BiDoorOpen style={{ marginRight: "5px" }} />
          회원탈퇴
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
