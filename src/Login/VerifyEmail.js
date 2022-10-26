//import './verifyEmail.css'
import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../Config/firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import registerLogo from "../Assets/register.png"
import LoginLogo from "../Assets/image 3.png"

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(120)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (

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
                <p className="mb-4">Please verify your email</p>
                  <div className="mb-4">
                  <p>A verification email has been sent to email :<br/>
                  <strong>{currentUser?.email}</strong> Please follow the verification instructions in your email</p><br/>
                <button  
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      style={{background: "linear-gradient(to right, #FD841F, #E14D2A )"}}
                      onClick={resendEmailVerification}
                      disabled={timeActive}
                      >Resend Email {timeActive && time}</button>
                  </div>
              </div>
            </div>
            <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                style={{
                backgroundImage: "url(" + registerLogo + ")",
                backgroundColor:"#4d4d4d",
                backgroundRepeat : 'no-repeat',
                
              }}
            >
              <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                <h1 className="text-xl font-semibold mb-6"></h1>
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

export default VerifyEmail
