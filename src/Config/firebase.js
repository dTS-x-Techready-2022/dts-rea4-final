import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfIvmRFqTITBKXAuvJ-FElkIs4vPCLlCM",
  authDomain: "dts4c-23-final.firebaseapp.com",
  projectId: "dts4c-23-final",
  storageBucket: "dts4c-23-final.appspot.com",
  messagingSenderId: "528678390267",
  appId: "1:528678390267:web:58c10db6ebf00c886b235e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
