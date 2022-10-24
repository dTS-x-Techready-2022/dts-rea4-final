import React from "react";
import { forgotPassword } from "./AuthContext";


function ForgotPassword() {

  const forgotPasswordHandler = () => {
    //const email = emailRef.current.value;
    //const email = 'job.pangandaran@gmail.com';
    const email = document.getElementById("emailuser").value;
    if (email){
   
      forgotPassword(email).then(() => {
        alert('Silahkan Cek email untuk reset Password') 
      });
    }else{
      alert('Reset Password gagal') ;
  
    }
  };

    return (
      <div>
      <input type="email" id="emailuser"></input>
      <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </div>
    )
  }


export default ForgotPassword