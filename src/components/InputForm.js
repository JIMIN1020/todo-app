import { useState } from "react";
import styles from "../styles/InputForm.module.css";
import { Calendar } from "./Calendar";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../myFirebase";

export const InputForm = ({ innerWidth }) => {
  const [value, setValue] = useState(""); // 입력창 데이터
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜

  /* --------------- todo 추가 처리 --------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력값 없으면 종료
    if (value === "") return;

    // 새로운 todo 생성
    const newTodo = {
      createdAt: selectedDate.getTime(),
      dateValue: Math.floor(selectedDate.getTime() / (24 * 60 * 60 * 1000)),
      date: `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`,
      content: value,
      completed: false,
    };

    // firestore에 저장
    await addDoc(collection(db, auth.currentUser.uid), newTodo);

    // 리셋
    setValue("");
    setSelectedDate(new Date());
  };

  /* --------------- 입력 값 처리 --------------- */
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={value}
          placeholder="write your to do"
          onChange={handleChange}
        />
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          innerWidth={innerWidth}
        />
        <input className={styles.button} type="submit" value="add To Do" />
      </form>
    </div>
  );
};
