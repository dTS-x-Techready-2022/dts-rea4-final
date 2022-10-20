import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import { SignIn } from "./Components/SignIn/SignIn";
import { SignUp } from "./Components/SignUp/SignUp";
import { listener } from "./utils/firebase/listener";
import MovieSelected from "./Page/MovieSelected/MovieSelected";

function App() {
  useEffect(() => listener(console.log), []);

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/movie-selected" element={<MovieSelected />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
