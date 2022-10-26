import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { signingIn } from "../utils/signin";

export const SignIn = () => {
  const  setUser  = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const signedIn = await signingIn(email, password);
    if (!signedIn.message) {
      setUser(signedIn.accessToken);
    } else {
      console.log(signedIn.message);
    }
  };

  return (
    <div>
      <h1>SIGN IN</h1>
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
      <button onClick={signIn}>SIGN IN</button>
    </div>
  );
};
