import React from "react";
import { ToDo } from "./ToDo.js";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

export const ToDos = ({ title, todo, handleClick, handleCheck }) => {
  /* --------------- title에 맞게 렌더링 --------------- */
  switch (title) {
    case "Completed":
      return (
        <ToDoBox>
          <Title>
            <BsCheckCircleFill className="iconFill" />
            <h2>{title}</h2>
          </Title>
          <ToDoList>
            {todo.map((todoData) => {
              if (todoData.completed) {
                return (
                  <ToDo
                    key={todoData.docID}
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
      );
    case "Overdue":
      return (
        <ToDoBox>
          <Title>
            <BsCheckCircle className="iconRed" />
            <h2>{title}</h2>
          </Title>
          <ToDoList>
            {todo.map((todoData) => {
              if (
                todoData.dateValue <
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.docID}
                    todo={todoData}
                    handleClick={handleClick}
                    handleCheck={handleCheck}
                    overdue={true}
                  />
                );
              }
            })}
          </ToDoList>
        </ToDoBox>
      );
    case "In Progress":
      return (
        <ToDoBox>
          <Title>
            <BsCheckCircle className="icon" />
            <h2>{title}</h2>
          </Title>
          <ToDoList>
            {todo.map((todoData) => {
              if (
                todoData.dateValue >=
                  Math.floor(Date.now() / (24 * 60 * 60 * 1000)) &&
                !todoData.completed
              ) {
                return (
                  <ToDo
                    key={todoData.docID}
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
      );
    default:
      break;
  }
};

const ToDoBox = styled.div`
  width: 300px;
  height: 420px;

  display: block;
  border-radius: 10px;

  overflow-y: hidden;
  background-color: rgba(219, 219, 219, 0.282);

  h2 {
    text-align: center;
    font-size: 17px;
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
  height: 370px;
  margin-top: -8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
