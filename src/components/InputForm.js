import "../App.css";
import styles from "./InputForm.module.css";
import { Calendar } from "./Calendar";

export const InputForm = ({
  handleSubmit,
  setValue,
  value,
  selectedDate,
  setSelectedDate,
}) => {
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
          placeholder="what do you need to do?"
          onChange={handleChange}
        />
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <input className={styles.button} type="submit" value="add To Do" />
      </form>
    </div>
  );
};
