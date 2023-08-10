import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { auth } from "../myFirebase";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : undefined}
    </>
  );
};

export default App;
