import { useState } from "react";
import { Calendar } from "./Calendar";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../myFirebase";
import { styled } from "styled-components";

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
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
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
        <AddButton type="submit" value="add To Do" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  margin-right: 10px;
  padding: 0px 10px;
  font-size: 12px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

const AddButton = styled.input`
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  background-color: #3f8d46;
  color: white;
  padding: 0px 10px;
  font-size: 12px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;
