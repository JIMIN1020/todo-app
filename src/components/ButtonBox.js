import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

const ButtonBox = ({ selected, handleSelect, innerWidth }) => {
  return (
    <BtnContainer>
      <label
        className={selected === "All" ? "selected" : "radioBtn"}
        style={{
          borderRadius: "15px 0px 0px 15px",
          borderRight: "0.5px dotted gray",
        }}
      >
        <StyledInput
          type="radio"
          checked={selected === "All"}
          onClick={() => handleSelect("All")}
        />
        <span>All</span>
      </label>
      <label
        className={selected === "Overdue" ? "selected" : "radioBtn"}
        style={{
          borderRight: "0.5px dotted gray",
        }}
      >
        <StyledInput
          type="radio"
          checked={selected === "Overdue"}
          onClick={() => handleSelect("Overdue")}
        />
        {innerWidth >= 786 ? (
          <span>Overdue</span>
        ) : (
          <BsCheckCircle className="iconRed" />
        )}
      </label>
      <label
        className={selected === "In Progress" ? "selected" : "radioBtn"}
        style={{
          borderRight: "0.5px dotted gray",
        }}
      >
        <StyledInput
          type="radio"
          checked={selected === "In Progress"}
          onClick={() => handleSelect("In Progress")}
        />
        {innerWidth >= 786 ? (
          <span>In Progress</span>
        ) : (
          <BsCheckCircle className="icon" />
        )}
      </label>
      <label
        className={selected === "Completed" ? "selected" : "radioBtn"}
        style={{ borderRadius: "0px 15px 15px 0px" }}
      >
        <StyledInput
          type="radio"
          checked={selected === "Completed"}
          onClick={() => handleSelect("Completed")}
        />
        {innerWidth >= 786 ? (
          <span>Completed</span>
        ) : (
          <BsCheckCircleFill className="iconFill" />
        )}
      </label>
    </BtnContainer>
  );
};

export default ButtonBox;

const BtnContainer = styled.div`
  ${flexCenter}
  margin: 0 auto;
  margin-top: 15px;
  width: 400px;
  height: 40px;
  border-radius: 13px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }

  .radioBtn {
    background-color: rgba(219, 219, 219, 0.52);
    color: rgb(57, 57, 57);
    font-weight: 550;
    width: 90px;
    height: 30px;
    text-align: center;
    ${flexCenter}
    transition: all 0.1s ease-in;

    &:hover {
      background-color: rgba(188, 188, 188, 0.52);
    }
    @media screen and (max-width: 768px) {
      width: 70px;
      color: #3f8d46;
    }
    span {
      font-size: 13px;
      @media screen and (max-width: 768px) {
        color: rgb(57, 57, 57);
      }
    }
  }

  .selected {
    background-color: #3f8d46;
    color: white;
    font-size: 13px;
    font-weight: 550;
    width: 90px;
    height: 30px;
    text-align: center;
    ${flexCenter}
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
    @media screen and (max-width: 768px) {
      width: 70px;
    }
  }

  .icon {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    margin-top: 2px;
  }

  .iconFill {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    margin-top: 2px;
  }

  .iconRed {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    color: tomato;
    margin-top: 2px;
  }
`;

const StyledInput = styled.input`
  width: 0px;
  height: 0px;
  display: none;
  font-size: 13px;
`;

styled.label`
  display: inline-block;
  font-size: 13px;
`;
