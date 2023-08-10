import React, { useState } from "react";
import { ToDo } from "./ToDo.js";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import ButtonBox from "./ButtonBox";
import { styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

export const SingleToDo = ({ todo, innerWidth, handleClick, handleCheck }) => {
  const [selected, setSelected] = useState("All"); // 선택된 버튼

  /* --------------- 버튼 클릭 처리 --------------- */
  const handleSelect = (name) => {
    setSelected(name);
  };

  /* --------------- 렌더링 --------------- */
  return (
    <Container>
      <ToDoBox>
        <Title>
          {selected === "Completed" && (
            <BsCheckCircleFill className="iconFill" />
          )}
          {(selected === "All" || selected === "In Progress") && (
            <BsCheckCircle className="icon" />
          )}
          {selected === "Overdue" && <BsCheckCircle className="iconRed" />}
          <h2>{selected}</h2>
        </Title>
        <ToDoList>
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
        </ToDoList>
      </ToDoBox>
      <ButtonBox
        selected={selected}
        handleSelect={handleSelect}
        innerWidth={innerWidth}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 350px;
    align-items: center;
  }
`;

const ToDoBox = styled.div`
  width: 450px;
  height: 350px;

  display: block;
  border-radius: 10px;
  margin-top: 30px;

  overflow-y: hidden;
  background-color: rgba(219, 219, 219, 0.282);

  h2 {
    text-align: center;
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 370px;
    margin-top: 5px;
  }
`;

const Title = styled.div`
  ${flexCenter}
  .icon {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    color: #3f8d46;
    margin-top: 2px;
  }

  .iconFill {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    color: #3f8d46;
    margin-top: 2px;
  }

  .iconRed {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    color: tomato;
    margin-top: 2px;
  }
`;

const ToDoList = styled.div`
  height: 305px;
  margin-top: -8px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 325px;
  }
`;
