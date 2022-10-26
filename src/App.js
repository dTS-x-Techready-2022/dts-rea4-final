import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import { SignIn } from "./components/Auth/SignIn";
import { SignUp } from "./components/Auth/SignUp";
import { listener } from "./components/utils/listener";
import HeadlinePage from "./pages/HeadlinePage";
import HomePage from "./pages/HomePage";
import SciencePage from "./pages/SciencePage";
import SportPage from "./pages/SportPage";
 
function App() {
  useEffect(() => listener(console.log), []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/headline' element={<HeadlinePage />} />
          <Route path='/sport' element={<SportPage />} />
          <Route path='/science' element={<SciencePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
