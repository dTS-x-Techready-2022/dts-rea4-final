import { sendPasswordResetEmail } from 'firebase/auth';
import React, {useContext} from 'react'
import { auth } from '../Config/firebase';

const AuthContext = React.createContext()

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}
//---- untuk lupa password
export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
