import React, { createContext, useEffect, useState } from "react";
import { listener } from "../utils/listener";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    // const authenticated = localStorage.getItem("access_token");
    // if (user || authenticated) {
    //   console.log(user);
    //   if (window.location.pathname !== "/") {
    //     window.location.replace("/");
    //   }
    // } else {
    //   console.log(user);
    //   if (window.location.pathname === "/") {
    //     window.location.replace("/signup");
    //   }
    // }

    listener((val) => {
      const pathname = window.location.pathname;
      if (val) {
        if (pathname !== "/") {
          window.location.replace("/");
        }
      } else {
        if (pathname === "/") {
          window.location.replace("/signup");
        }
      }
    });
  }, []);

  const onSetUser = (token) => {
    // localStorage.setItem("access_token", token);
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: onSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};