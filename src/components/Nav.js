import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { db, auth } from "components/firebase";

const navListlinks = [
  {
    name: "Search",
    path: "/search",
    auth: true,
  },
  {
    name: "Login",
    path: "/login",
    auth: false,
  },
  {
    name: "Signup",
    path: "/signup",
    auth: false,
  },
  {
    name: "Filter",
    path: "/filter",
    auth: true,
  },
  {
    name: "About Us",
    path: "/",
    auth: false,
  },
];

const Nav = () => {
  const [user, setUser] = useState(null);

  // is the user logged in?
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  console.log(user);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav
      className="px-4 mt-0 fixed w-full z-10 top-0  flex justify-between items-center h-16 bg-black text-white shadow-sm font-mono bg-opacity-30 backdrop-blur-lg"
      role="navigation"
    >
      {user && (
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
          <p className="ml-2">{user.displayName}</p>
        </div>
      )}

      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        {navListlinks.map((link) => (
          <Link
            to={link.path}
            className="p-4"
            style={{
              display:
                user && link.auth
                  ? "inline"
                  : !user && !link.auth
                  ? "inline"
                  : "none",
            }}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          style={{
            display: user ? "inline" : "none",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
