import React from "react";
import styles from "../styles/LogIn.module.css";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import checkLottie from "../assets/checkLottie.json";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../myFirebase";

const LogIn = () => {
  const onLogInClick = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>
            <h2>To Do App</h2>
            <span>할 일 목록을 작성하고 관리하세요.</span>
          </div>
          <div className={styles.lottieBox}>
            <Lottie animationData={checkLottie} className={styles.lottie} />
          </div>

          <div className={styles.btnContainer}>
            <button onClick={onLogInClick}>
              <FcGoogle className={styles.icon} /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
