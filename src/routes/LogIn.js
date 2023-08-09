import React from "react";
import styles from "../styles/LogIn.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import checkLottie from "../assets/checkLottie.json";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../myFirebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Google login successful");
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const onGithubClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("GitHub login successful");
      navigate("/");
    } catch (error) {
      console.error("GitHub login error:", error);
    }
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
            <button onClick={onGoogleClick}>
              <FcGoogle className={styles.icon} /> Continue with Google
            </button>
            <button onClick={onGithubClick}>
              <FaGithub className={styles.icon} /> Continue with Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
