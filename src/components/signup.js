import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base";

export const signUp = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};
