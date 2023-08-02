import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { InputForm } from "./components/InputForm";
import { ToDos } from "./components/ToDos";
import { SingleToDo } from "./components/SingleToDo";

export const STORAGE_KEY = "todoData";

/* --------------- 이전 todo 데이터 불러오기 --------------- */
const initialData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : [];

function App() {
  const [todo, setTodo] = useState(initialData); // todo 데이터
  const [value, setValue] = useState(""); // 입력창 데이터
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // 스크린 사이즈

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  /* --------------- todo 추가 처리 --------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력값 없으면 종료
    if (value === "") return;

    // 새로운 todo 생성
    const newTodo = {
      id: selectedDate.getTime(),
      dateValue: Math.floor(selectedDate.getTime() / (24 * 60 * 60 * 1000)),
      date: `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`,
      content: value,
      completed: false,
    };

    // 새로운 todo 추가한 뒤 정렬하여 저장
    const newToDos = sortToDo(newTodo);
    setTodo(newToDos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newToDos));

    // 리셋
    setValue("");
    setSelectedDate(new Date());
  };

  /* --------------- todo 정렬 --------------- */
  const sortToDo = (newTodo) => {
    const copy = [...todo, newTodo];
    copy.sort((a, b) => {
      if (a.dateValue > b.dateValue) return 1;
      else if (a.dateValue < b.dateValue) return -1;
      else return 0;
    });
    return copy;
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.boxTop}>
          <div className={styles.title}>
            <h1>To do</h1>
            <h4>Write what you have to do</h4>
          </div>
          <InputForm
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            innerWidth={innerWidth}
          />
        </div>
        {innerWidth >= 1024 ? (
          <div className={styles.boxBottom}>
            <ToDos title={"Overdue"} todo={todo} setTodo={setTodo} />
            <ToDos title={"In Progress"} todo={todo} setTodo={setTodo} />
            <ToDos title={"Completed"} todo={todo} setTodo={setTodo} />
          </div>
        ) : (
          <div>
            <SingleToDo todo={todo} setTodo={setTodo} innerWidth={innerWidth} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
