import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { auth } from "../myFirebase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return <AppRouter isLoggedIn={isLoggedIn} />;
};

export default App;
