import styles from "./ToDo.module.css";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

export const ToDo = ({ todo, handleClick, handleCheck, overdue }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheck(todo.id)}
          />
          <div className={styles.icon}>
            {todo.completed ? <BsCheckCircleFill /> : <BsCheckCircle />}
          </div>
        </label>

        <div className={styles.text}>
          <span
            className={styles.content}
            style={
              todo.completed
                ? { marginLeft: "10px", textDecorationLine: "line-through" }
                : { marginLeft: "10px" }
            }
          >
            {todo.content.length > 30
              ? todo.content.substr(0, 29) + "..."
              : todo.content}
          </span>
          <span
            style={
              overdue
                ? { marginLeft: "11px", fontSize: "12px", color: "tomato" }
                : { marginLeft: "11px", fontSize: "12px", color: "gray" }
            }
          >
            {todo.date}
          </span>
        </div>
      </div>
      <button
        type="submit"
        style={{ marginRight: "10px" }}
        onClick={() => handleClick(todo.id)}
      >
        X
      </button>
    </div>
  );
};
