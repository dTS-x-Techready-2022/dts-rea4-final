import {useState} from 'react'
import { Link } from 'react-router-dom'
//import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
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
  const forgotPasswordHandler = () => {
    //const email = emailRef.current.value;
    //const email = 'job.pangandaran@gmail.com';
    const email = document.getElementById("emailuser").value;
    if (email){
   
      forgotPassword(email).then(() => {
        alert('Silahkan Cek email untuk reset Password') 
        setShowModal(false)
      });
    }else{
      alert('Reset Password gagal') ;
      setShowModal(false)
  
    }
  };
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
                {error && <div className='auth__error'>{error}</div>}
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