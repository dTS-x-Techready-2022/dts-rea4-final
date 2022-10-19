import { auth } from "../utils/firebase";

const register = async (username, email, password) => {
   const response = await auth.createUserWithEmailAndPassword(email, password);
   console.log(response);
   if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      return response.user;
   } else {
      return response;
   }

};

const login = async (email, password) => {
   const response = await auth.signInWithEmailAndPassword(email, password);
   console.log(response.user.email);
   if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      return response.user;
   } else {
      return response;
   }
};

const logout = async () => {
   localStorage.removeItem("user");

   try {
      const response = await auth.signOut();
      console.log(response);
   } catch (error) {
      console.log(error);
   }
};

const getCurrentUser = () => {
   return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
   register,
   login,
   logout,
   getCurrentUser,
}

export default AuthService;
