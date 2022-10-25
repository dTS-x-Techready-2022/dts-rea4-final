import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base";

export const signIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};
