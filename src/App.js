import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Profile from "./MainPage/Profile"
import VerifyEmail from './Login/VerifyEmail';
import PrivateRoute from './Route/PrivateRoute'
import Forget from './Login/ForgotPassword';
import {Navigate} from 'react-router-dom'
import {useState} from 'react'
import Login from "./Login/Login";

import {AuthProvider} from './Login/AuthContext'
import Register from "./Login/Register"




function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  const [timeActive, setTimeActive] = useState(false)
  
  return (
    <div >
      <Navbar />
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path='/' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/forget" element={
            !currentUser?.emailVerified 
            ? <Forget/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
