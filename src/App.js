import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./app/components/forms/FormLogin";
import Register from "./app/components/forms/FormRegister";
import Home from "./app/pages/Home";
import Profile from "./app/pages/Profile";
import BoardUser from "./app/components/boards/BoardUser";
import BoardModerator from "./app/components/boards/BoardModerator";
import BoardAdmin from "./app/components/boards/BoardAdmin";

import { logout } from "./app/slices/auth";

const App = () => {
   const { user: currentUser } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const logOut = useCallback(() => {
      dispatch(logout());
   }, [dispatch]);

   return (
      <Router>
         <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
               <Link to={"/"} className="navbar-brand">
                  My NEWS
               </Link>
               <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <Link to={"/home"} className="nav-link">
                        Home
                     </Link>
                  </li>

                  {currentUser && (
                     <li className="nav-item">
                        <Link to={"/user"} className="nav-link">
                           User
                        </Link>
                     </li>
                  )}
               </div>

               {currentUser ? (
                  <div className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link to={"/profile"} className="nav-link">
                           {currentUser.email}
                        </Link>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link" onClick={logOut}>
                           LogOut
                        </a>
                     </li>
                  </div>
               ) : (
                  <div className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                           Login
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                           Sign Up
                        </Link>
                     </li>
                  </div>
               )}
            </nav>

            <div className="container mt-3">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/user" element={<BoardUser />} />
                  <Route path="/mod" element={<BoardModerator />} />
                  <Route path="/admin" element={<BoardAdmin />} />
                  <Route path="*" element={<h1>404 Not Found</h1>} />
               </Routes>
            </div>
         </div>
      </Router>
   );
};

export default App;
