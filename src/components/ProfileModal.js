import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../myFirebase";
import { BiLogOut, BiDoorOpen } from "react-icons/bi";
import { keyframes, styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

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
    <Modal>
      <Title>
        <h5>{auth.currentUser.displayName}</h5>
        <span>
          {auth.currentUser.email ? auth.currentUser.email : "Github Account"}
        </span>
      </Title>
      <BtnContainer>
        <button onClick={onLogOutClick}>
          <BiLogOut style={{ marginRight: "5px" }} />
          로그아웃
        </button>
        <button onClick={onQuitClick}>
          <BiDoorOpen style={{ marginRight: "5px" }} />
          회원탈퇴
        </button>
      </BtnContainer>
    </Modal>
  );
};

export default ProfileModal;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  width: 200px;
  height: 130px;
  background-color: rgb(245, 245, 245);
  z-index: 999;
  position: absolute;
  top: 130px;
  left: -45px;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.16);
  animation: ${fadeIn} 0.5s;
  word-break: break-all;

  h5 {
    font-size: 17px;
    font-weight: 500;
    height: 20px;
    margin: 0;
  }

  span {
    font-size: 12px;
    margin-top: 10px;
    width: 180px;
    display: line-block;
    text-align: center;
  }

  &:after {
    content: "";
    position: absolute;
    top: 3%;
    left: 83%;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-bottom-color: rgb(245, 245, 245);
    border-top: 0;
    margin-left: -18px;
    margin-top: -18px;
  }
`;

const Title = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin: 20px 0px;
  height: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    width: 85px;
    height: 35px;

    ${flexCenter}
    margin: 0px 2px;
    cursor: pointer;

    &:hover {
      background-color: rgb(226, 226, 226);
      border-radius: 10px;
    }
  }
`;
