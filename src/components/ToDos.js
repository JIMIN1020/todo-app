import React from "react";
import styles from "../styles/ToDos.module.css";
import { ToDo } from "./ToDo.js";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

export const ToDos = ({ title, todo, handleClick, handleCheck }) => {
  /* --------------- title에 맞게 렌더링 --------------- */
  switch (title) {
    case "Completed":
      return (
        <div className={styles.todoBox}>
          <div className={styles.title}>
            <BsCheckCircleFill className={styles.iconFill} />
            <h2>{title}</h2>
          </div>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
              if (todoData.completed) {
                return (
                  <ToDo
                    key={todoData.docID}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={false}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    case "Overdue":
      return (
        <div className={styles.todoBox}>
          <div className={styles.title}>
            <BsCheckCircle className={styles.iconRed} />
            <h2>{title}</h2>
          </div>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
              if (
                todoData.dateValue <
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.docID}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={true}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    case "In Progress":
      return (
        <div className={styles.todoBox}>
          <div className={styles.title}>
            <BsCheckCircle className={styles.icon} />
            <h2>{title}</h2>
          </div>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
              if (
                todoData.dateValue >=
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.docID}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={false}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    default:
      break;
  }
};
