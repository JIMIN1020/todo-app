import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import LogIn from "../routes/LogIn";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
