import { createContext, useEffect, useState } from "react";
import { listener } from "../../utils/firebase/listener";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    listener((val) => {
      const pathname = window.location.pathname;
      if (val) {
        if (pathname !== "/") {
          window.location.replace("/");
        }
      } else {
        if (pathname === "/") {
          window.location.replace("/sign-in");
        }
      }
    });
  }, []);

  const onSetUser = (token) => {
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: onSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
