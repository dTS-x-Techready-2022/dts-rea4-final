import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async () => {
    try {
      const data = {
        nama: "ini nama",
        link: "ini link"
      }

      if (user) {
        const uid = user.uid;
        await setDoc(doc(db, "readinglist", uid), data);
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      Home, {user ? <button onClick={handleLogout}>Sign out</button> : <></>}
      <div>
        add data by user <button onClick={addData}>Add</button>
      </div>
    </div>
  );
};

export default Home;
