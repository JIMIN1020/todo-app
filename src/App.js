import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { ToDos } from "./components/ToDos";

export const STORAGE_KEY = "todoData";

/* --------------- 이전 todo 데이터 불러오기 --------------- */
const initialData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : [];

function App() {
  const [todo, setTodo] = useState(initialData); // todo 데이터
  const [value, setValue] = useState(""); // 입력창 데이터
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜

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
    <div className="container">
      <div className="box">
        <div className="box-top">
          <div className="title">
            <h1>To do</h1>
            <p>Write what you have to do</p>
          </div>
          <InputForm
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="box-bottom">
          <ToDos title={"overdue"} todo={todo} setTodo={setTodo} />
          <ToDos title={"working"} todo={todo} setTodo={setTodo} />
          <ToDos title={"completed"} todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
