import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { InputForm } from "../components/InputForm";
import { ToDos } from "../components/ToDos";
import { SingleToDo } from "../components/SingleToDo";
import Profile from "../components/Profile";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../myFirebase";

const Home = () => {
  const [todo, setTodo] = useState([]); // todo 데이터
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // 스크린 사이즈

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    getToDoData();
  }, []);

  /* --------------- todo 가져오기 --------------- */
  const getToDoData = () => {
    const q = query(
      collection(db, auth.currentUser.uid),
      orderBy("createdAt", "asc")
    );
    onSnapshot(q, (snapshot) => {
      const todoData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        docID: doc.id,
      }));
      setTodo(todoData);
    });
  };

  /* --------------- todo 삭제 처리 --------------- */
  const handleClick = async (docId) => {
    const docRef = doc(db, auth.currentUser.uid, docId);
    await deleteDoc(docRef);
  };

  /* --------------- todo 완료 처리 --------------- */
  const handleCheck = async (docId) => {
    const docRef = doc(db, auth.currentUser.uid, docId);
    const docSnapShot = await getDoc(docRef);
    const currentValue = docSnapShot.data().completed;
    await updateDoc(docRef, { completed: !currentValue });
  };

  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.box}>
        <div className={styles.boxTop}>
          <div className={styles.title}>
            <h1>To do</h1>
            <h4>할 일 목록을 작성하고 관리하세요.</h4>
          </div>
          <InputForm innerWidth={innerWidth} />
        </div>
        {innerWidth >= 1024 ? (
          <div className={styles.boxBottom}>
            <ToDos
              title={"Overdue"}
              todo={todo}
              handleClick={handleClick}
              handleCheck={handleCheck}
            />
            <ToDos
              title={"In Progress"}
              todo={todo}
              handleClick={handleClick}
              handleCheck={handleCheck}
            />
            <ToDos
              title={"Completed"}
              todo={todo}
              handleClick={handleClick}
              handleCheck={handleCheck}
            />
          </div>
        ) : (
          <div>
            <SingleToDo
              todo={todo}
              innerWidth={innerWidth}
              handleClick={handleClick}
              handleCheck={handleCheck}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
