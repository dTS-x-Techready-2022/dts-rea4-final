import { useNavigate } from "react-router-dom";
import { signingOut } from "../../utils/firebase/signout";

export const Home = () => {
  // protected route
  const navigate = useNavigate();

  const signOut = async () => {
    const loggedOut = await signingOut();
    if (!loggedOut.message) {
      navigate("/signup");
    }
  };

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
};
