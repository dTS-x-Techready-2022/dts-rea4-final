import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";

import HeadlinePage from "./pages/HeadlinePage";
import HomePage from "./pages/HomePage";
import SciencePage from "./pages/SciencePage";
import SportPage from "./pages/SportPage";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/headline' element={<HeadlinePage />} />
          <Route path='/sport' element={<SportPage />} />
          <Route path='/science' element={<SciencePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
