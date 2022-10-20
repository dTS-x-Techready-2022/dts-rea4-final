import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/auth";

function Navbar() {

   const { user: currentUser } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const logOut = useCallback(() => {
      dispatch(logout());
   }, [dispatch]);

   return (
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
   )
}

export default Navbar