import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { handleSignin } = useAuth();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await handleSignin(email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    [handleSignin, email, password]
  );

  return (
    <div>
      SignIn
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type={"email"}
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type={"password"}
            placeholder="Password"
          />
          <input type={"submit"} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
