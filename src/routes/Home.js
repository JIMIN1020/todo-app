import { useEffect, useState } from "react";
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
import { styled } from "styled-components";
import { flexCenter } from "../GlobalStyles";

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
    <Container>
      <Profile />
      <Box>
        <BoxTop>
          <Title>
            <h1>To do</h1>
            <h4>할 일 목록을 작성하고 관리하세요.</h4>
          </Title>
          <InputForm innerWidth={innerWidth} />
        </BoxTop>
        {innerWidth >= 1024 ? (
          <BoxBottom>
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
          </BoxBottom>
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
      </Box>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 99.5vw;
  height: 95vh;
  position: relative;
  ${flexCenter}
`;

const Box = styled.div`
  width: 1000px;
  height: 600px;

  background-color: rgb(245, 245, 245);
  border-radius: 1rem;

  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.5s ease-in-out 0s;

  @media screen and (max-width: 1024px) {
    width: 550px;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

const BoxTop = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BoxBottom = styled.div`
  width: 94%;
  height: 450px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-left: 35px;
  padding-top: 10px;

  h4 {
    margin-top: -10px;
    font-size: 14px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      margin-top: 35px;
      margin-left: 10px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: -30px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: -20px;
    display: flex;
    align-items: center;
  }
`;
