import { signOut } from "firebase/auth";
import { auth } from "./base";

export const signingOut = async () => {
  try {
    const signedOut = await signOut(auth);
    return signedOut;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
