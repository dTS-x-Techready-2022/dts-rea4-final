import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./base";

export const listener = (cb) => {
  onAuthStateChanged(auth, (user) => cb(user ? user.uid : false));
};
