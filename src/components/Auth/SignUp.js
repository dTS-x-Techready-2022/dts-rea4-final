import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { signingUp } from "../utils/signup";
import { signingIn } from "../utils/signin";

export const SignUp = () => {
  const setUser  = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    console.log(email, password);
    const response = await signingUp(email, password);
    console.log(response);
    if (!response.message) {
      setUser(response.accessToken);
      // signingIn
      const signedIn = await signingIn(email, password);
      if (!signedIn.message) {
        navigate("/");
      }
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>SIGN UP</button>
    </div>
  );
};