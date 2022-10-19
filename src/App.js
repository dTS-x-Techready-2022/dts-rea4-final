import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { listener } from "./utils/firebase/listener";

function App() {
  useEffect(() => listener(console.log), []);

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
