import { styled } from "styled-components";
import { BsCheckCircleFill, BsCheckCircle, BsXLg } from "react-icons/bs";

export const ToDo = ({ todo, handleClick, handleCheck, overdue }) => {
  return (
    <ToDoContainer>
      <CheckBox>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheck(todo.docID)}
          />
          <IconContainer>
            {todo.completed ? (
              <BsCheckCircleFill />
            ) : overdue ? (
              <BsCheckCircle style={{ color: "tomato" }} />
            ) : (
              <BsCheckCircle />
            )}
          </IconContainer>
        </label>

        <Text>
          <span
            style={
              todo.completed
                ? { marginLeft: "10px", textDecorationLine: "line-through" }
                : { marginLeft: "10px" }
            }
          >
            {todo.content.length > 26
              ? todo.content.substr(0, 25) + "..."
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
        </Text>
      </CheckBox>
      <Button type="submit" onClick={() => handleClick(todo.docID)}>
        <BsXLg />
      </Button>
    </ToDoContainer>
  );
};

const ToDoContainer = styled.div`
  background-color: white;
  width: 250px;
  height: 60px;
  border-radius: 1rem;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 1024px) {
    width: 350px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  label {
    cursor: pointer;
  }
  input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 0.8rem;
  color: #3f8d46;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
