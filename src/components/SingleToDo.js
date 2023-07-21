import React from "react";
import styles from "./SingleToDo.module.css";
import { ToDo } from "./ToDo.js";
import { STORAGE_KEY } from "../App";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

export const SingleToDo = ({ todo, setTodo }) => {
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
          <BsCheckCircleFill className={styles.iconFill} />
          <h2>All</h2>
        </div>
        <div className={styles.todoList}>
          {todo.map((todoData) => {
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
          })}
        </div>
      </div>
      <div className={styles.buttonBox}>
        <label className={styles.radioBtn}>
          <input type="checkbox" className={styles.input} />
          All
        </label>
        <label className={styles.radioBtn}>
          <input type="checkbox" className={styles.input} />
          <span>Overdue</span>
        </label>
        <label className={styles.radioBtn}>
          <input type="checkbox" className={styles.input} />
          <span>In Progress</span>
        </label>
        <label className={styles.radioBtn}>
          <input type="checkbox" className={styles.input} />
          <span>Completed</span>
        </label>
      </div>
    </div>
  );
};
