import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarWeek } from "react-icons/bs";
import styled from "styled-components";

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const ExampleCustomInput = ({ onClick }) => (
    <DatePickerDiv
      style={{
        width: "120px",
        height: "32px",
        backgroundColor: "white",
        borderRadius: "10px",
        fontSize: "13px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      {`${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`}
      <BsCalendarWeek onClick={onClick} style={{ marginLeft: "20px" }} />
    </DatePickerDiv>
  );
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
      }}
      customInput={<ExampleCustomInput />}
    />
  );
};

const DatePickerDiv = styled.div`
  width: 120px,
  height: 32px,
  backgroundColor: white,
  borderRadius: 10px,
  fontSize: 13px,
  display: flex,
  justifyContent: space-between,
  alignItems: center,
  padding: 0px 10px,
`;
