import React from "react";
import styles from "./ButtonBox.module.css";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

const ButtonBox = ({ selected, handleSelect, innerWidth }) => {
  return (
    <div className={styles.buttonBox}>
      <label
        className={selected === "All" ? styles.selected : styles.radioBtn}
        style={{
          borderRadius: "15px 0px 0px 15px",
          borderRight: "0.5px dotted gray",
        }}
      >
        <input
          type="radio"
          className={styles.input}
          checked={selected === "All"}
          onClick={() => handleSelect("All")}
        />
        <span>All</span>
      </label>
      <label
        className={selected === "Overdue" ? styles.selected : styles.radioBtn}
        style={{
          borderRight: "0.5px dotted gray",
        }}
      >
        <input
          type="radio"
          className={styles.input}
          checked={selected === "Overdue"}
          onClick={() => handleSelect("Overdue")}
        />
        {innerWidth >= 786 ? (
          <span>Overdue</span>
        ) : (
          <BsCheckCircle className={styles.iconRed} />
        )}
      </label>
      <label
        className={
          selected === "In Progress" ? styles.selected : styles.radioBtn
        }
        style={{
          borderRight: "0.5px dotted gray",
        }}
      >
        <input
          type="radio"
          className={styles.input}
          checked={selected === "In Progress"}
          onClick={() => handleSelect("In Progress")}
        />
        {innerWidth >= 786 ? (
          <span>In Progress</span>
        ) : (
          <BsCheckCircle className={styles.icon} />
        )}
      </label>
      <label
        className={selected === "Completed" ? styles.selected : styles.radioBtn}
        style={{ borderRadius: "0px 15px 15px 0px" }}
      >
        <input
          type="radio"
          className={styles.input}
          checked={selected === "Completed"}
          onClick={() => handleSelect("Completed")}
        />
        {innerWidth >= 786 ? (
          <span>Completed</span>
        ) : (
          <BsCheckCircleFill className={styles.iconFill} />
        )}
      </label>
    </div>
  );
};

export default ButtonBox;
