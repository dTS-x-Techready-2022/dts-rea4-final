import { createContext, useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useLocalStorage } from "../hooks/local-storage/useLocalStorage";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user',null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, createUser, handleSignin, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={{ pathname: "/unauthorized", state: { from: location } }}
        replace
      />
    );
  }
  return <Outlet />;
};

export const AlreadyAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return (
      <Navigate to={{ pathname: "/", state: { from: location } }} replace />
    );
  }

  return <Outlet />;
};
