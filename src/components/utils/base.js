import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCp7_Nfu_Ep-BzhJpPxIwglXXppa0kgUAM",
    authDomain: "dts4c-28-final.firebaseapp.com",
    projectId: "dts4c-28-final",
    storageBucket: "dts4c-28-final.appspot.com",
    messagingSenderId: "718901425827",
    appId: "1:718901425827:web:6884e25c089ed1fbb07116"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);