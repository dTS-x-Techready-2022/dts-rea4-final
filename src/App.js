import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
// import Link from "components/Link";
import Nav from "components/Nav";
import HomePages from "pages/HomePages";
import Search from "pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
