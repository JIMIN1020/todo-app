import React from "react";
import styles from "./ToDos.module.css";
import { ToDo } from "./ToDo.js";
import { STORAGE_KEY } from "../App";

export const ToDos = ({ title, todo, setTodo }) => {
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

  /* --------------- title에 맞게 렌더링 --------------- */
  switch (title) {
    case "completed":
      return (
        <div className={styles.todoBox}>
          <h2>{title}</h2>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
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
      );
    case "overdue":
      return (
        <div className={styles.todoBox}>
          <h2>{title}</h2>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
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
          </div>
        </div>
      );
    case "working":
      return (
        <div className={styles.todoBox}>
          <h2>{title}</h2>
          <div className={styles.todoList}>
            {todo.map((todoData) => {
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
          </div>
        </div>
      );
    default:
      break;
  }
};
