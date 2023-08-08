import React, { useState } from "react";
import AppRouter from "./AppRouter";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRouter isLoggedIn={isLoggedIn} />;
};

export default App;
