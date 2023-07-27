import React, { useState } from "react";
import styles from "./SingleToDo.module.css";
import { ToDo } from "./ToDo.js";
import { STORAGE_KEY } from "../App";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

export const SingleToDo = ({ todo, setTodo }) => {
  const [selected, setSelected] = useState("All"); // 선택된 버튼

  /* --------------- 버튼 클릭 처리 --------------- */
  const handleSelect = (name) => {
    setSelected(name);
  };

  /* --------------- todo 삭제 처리 --------------- */
  const handleClick = (id) => {
    const newTodo = todo.filter((data) => data.id !== id);
    setTodo(newTodo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodo));
  };

  /* --------------- todo 완료 처리 --------------- */
  const handleCheck = (id) => {
    let newTodo = todo.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodo(newTodo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodo));
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
                    setTodo={setTodo}
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
                    setTodo={setTodo}
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
                    setTodo={setTodo}
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
                    setTodo={setTodo}
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
                    setTodo={setTodo}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={false}
                  />
                );
              }
            })}
        </div>
      </div>
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
          All
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
          <span>Overdue</span>
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
          <span>In Progress</span>
        </label>
        <label
          className={
            selected === "Completed" ? styles.selected : styles.radioBtn
          }
          style={{ borderRadius: "0px 15px 15px 0px" }}
        >
          <input
            type="radio"
            className={styles.input}
            checked={selected === "Completed"}
            onClick={() => handleSelect("Completed")}
          />
          <span>Completed</span>
        </label>
      </div>
    </div>
  );
};