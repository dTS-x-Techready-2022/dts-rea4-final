import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from "./logo.svg";
import './App.css';
// import Link from "components/Link";
import Nav from 'components/Nav';
import HomePages from 'pages/HomePages';
import Search from 'pages/Search';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import FilterGames from 'pages/FilterGames';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route exact path="/" element={<HomePages />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/filter" element={<FilterGames />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
