import React, { useState } from "react";
import styles from "../styles/SingleToDo.module.css";
import { ToDo } from "./ToDo.js";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import ButtonBox from "./ButtonBox";

export const SingleToDo = ({ todo, innerWidth, handleClick, handleCheck }) => {
  const [selected, setSelected] = useState("All"); // 선택된 버튼

  /* --------------- 버튼 클릭 처리 --------------- */
  const handleSelect = (name) => {
    setSelected(name);
  };

  /* --------------- 렌더링 --------------- */
  return (
    <div className={styles.container}>
      <div className={styles.todoBox}>
        <div className={styles.title}>
          {selected === "Completed" && (
            <BsCheckCircleFill className={styles.iconFill} />
          )}
          {(selected === "All" || selected === "In Progress") && (
            <BsCheckCircle className={styles.icon} />
          )}
          {selected === "Overdue" && (
            <BsCheckCircle className={styles.iconRed} />
          )}
          <h2>{selected}</h2>
        </div>
        <div className={styles.todoList}>
          {selected === "All" &&
            todo.map((todoData) => {
              if (
                todoData.dateValue <
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.id}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={true}
                  />
                );
              } else {
                return (
                  <ToDo
                    key={todoData.id}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={false}
                  />
                );
              }
            })}
          {selected === "Overdue" &&
            todo.map((todoData) => {
              if (
                todoData.dateValue <
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.id}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={true}
                  />
                );
              }
            })}
          {selected === "In Progress" &&
            todo.map((todoData) => {
              if (
                todoData.dateValue >=
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.id}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={false}
                  />
                );
              }
            })}
          {selected === "Completed" &&
            todo.map((todoData) => {
              if (todoData.completed) {
                return (
                  <ToDo
                    key={todoData.id}
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
      <ButtonBox
        selected={selected}
        handleSelect={handleSelect}
        innerWidth={innerWidth}
      />
    </div>
  );
};
