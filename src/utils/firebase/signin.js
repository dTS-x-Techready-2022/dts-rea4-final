import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base";

export const signingIn = async (email, password) => {
  try {
    const userClient = await signInWithEmailAndPassword(auth, email, password);
    return userClient.user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
