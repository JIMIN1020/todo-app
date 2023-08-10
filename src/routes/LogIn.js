import React from "react";
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
import { styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

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
    <Container>
      <Box>
        <Title>
          <h2>To Do App</h2>
          <span>할 일 목록을 작성하고 관리하세요.</span>
        </Title>
        <LottieBox>
          <Lottie animationData={checkLottie} className="lottie" />
        </LottieBox>
        <BtnContainer>
          <button onClick={onGoogleClick}>
            <FcGoogle className="icon" /> Continue with Google
          </button>
          <button onClick={onGithubClick}>
            <FaGithub className="icon" /> Continue with Github
          </button>
        </BtnContainer>
      </Box>
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 95vh;
`;

const Box = styled.div`
  width: 350px;
  height: 450px;

  border-radius: 1rem;
  background-color: rgb(245, 245, 245);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  ${flexCenter}
  flex-direction: column;

  span {
    font-size: 13px;
    margin-top: -10px;
  }
`;

const LottieBox = styled.div`
  ${flexCenter}
  width: 100%;
  height: 150px;
  margin-top: 30px;

  .lottie {
    width: 250px;
    height: 250px;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 150px;
  flex-direction: column;
  ${flexCenter}

  button {
    width: 220px;
    height: 40px;
    background: none;
    border: 1.5px solid rgb(168, 168, 168);
    border-radius: 7px;
    font-size: 13px;
    margin: 5px 0px;
    cursor: pointer;
    ${flexCenter}

    &:hover {
      background-color: rgb(255, 255, 255);
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }
`;
