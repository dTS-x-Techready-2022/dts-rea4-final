import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
//import './forms.css'
import {
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../Config/firebase'
import {useNavigate} from 'react-router-dom'
import {forgotPassword, useAuthValue} from './AuthContext'
import LoginPicture from "../Assets/ProfilePicture.png"
import LoginLogo from "../Assets/image 3.png"

function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
//-------untuk proses login
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  //--------untuk proses lupa password
  const forgotPasswordHandler = () => {
    //const email = 'job.pangandaran@gmail.com';
    const email = document.getElementById("emailuser").value;
    if (email){   
      forgotPassword(email).then(() => {
        alert('Please Check your email to reset Password !!!') 
        setShowModal(false)
      });
    }else{
      alert('Password Reset failed, please try again !!!') ;
      setShowModal(false)
    }
  };
  //--------proses login google 
  const provider = new GoogleAuthProvider();

const loginGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // untuk token google akses API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
           // console.log({ credential, token, user });
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            //console.log({ errorCode, errorMessage, email, credential });
        });
};
        useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  const uid = user.uid;
                  console.log({ uid });
              } else {
                  console.log("no user");
              }
          });
        }, []);
        
//-----------------end proses login google
  return(
<section className="h-full gradient-form bg-gray-200 md:h-screen">
  <div className="container py-12 px-6 h-full" >
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <img
                    className="mx-auto w-20"
                    src={LoginLogo}
                    alt="logo"
                  />
                 
                  <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">DTS4C-23-FINAL</h4>
                </div>
                <div className="flex justify-center">
                  <button type="button" 
                  onClick={loginGoogle}
                  data-mdb-ripple="true" 
                  data-mdb-ripple-color="light" 
                  className="inline-block p-3 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" 
                  style = {{background: "linear-gradient(to right, red , #bd0026)"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                    </svg>
                  </button>
                </div>

                {error && <div className='auth__error'>{/*error*/} 
                  <p style={{textAlign:"center", color:"red"}}>Wrong Username or Password !!! Please Try again</p></div>}
                  <form onSubmit={login} name='login_form'>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      value={email}
                      required
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      value={password}
                      required
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        background: "linear-gradient(to right, red , #bd0026)"
                      }}
                    >
                      Log in
                    </button>
                    {/*<Link to='/forget'><button
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        background: "linear-gradient(to right, #878787 , #4d4d4d)"
                      }}
                    >
                      Forgot Password
                    </button></Link>*/}

                    <button
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        background: "linear-gradient(to right, #878787 , #4d4d4d)"
                      }} 
                      onClick={() => setShowModal(true)}
                    >
                      Forgot Password
                    </button>
                    
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <Link to='/register'> <button
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Register
                    </button></Link>
                    
                   {/*----modal---*/}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h4 className="text-3m font-semibold">
                    Forgot Password
                  </h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <p className="mb-4">Please input your email </p>
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id='emailuser'
                  

                    />
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="button"
                    style={{
                      background: "linear-gradient(to right, #878787 , #4d4d4d)"
                    }} 
                    onClick={forgotPasswordHandler}
                   // onClick={() => setShowModal(false)}
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              style={{
                backgroundImage: "url(" + LoginPicture + ")"
              }}
            >
              <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 className="text-xl font-semibold mb-6"></h4>
                <p className="text-sm">   
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login