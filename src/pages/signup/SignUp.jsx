import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { createUser } = useAuth();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        console.log([email, password]);
        await createUser(email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    [createUser, email, password]
  );

  return (
    <div>
      SignUp
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

export default SignUp;
