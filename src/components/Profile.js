import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { auth } from "../myFirebase";
import { styled } from "styled-components";

const Profile = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  return (
    <UserProfile>
      <UserImg onClick={() => setUserModalOpen((prev) => !prev)}>
        <img
          src={auth.currentUser.photoURL}
          width="40"
          alt="profile"
          style={{ borderRadius: "50%" }}
        />
      </UserImg>
      {userModalOpen && <ProfileModal />}
    </UserProfile>
  );
};

export default Profile;

const UserProfile = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 10px 20px;
`;

const UserImg = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;
