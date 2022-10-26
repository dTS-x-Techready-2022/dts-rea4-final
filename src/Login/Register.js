import {useState} from 'react'
//import './forms.css'
import {auth} from '../Config/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'
import registerLogo from "../Assets/register.png"
import LoginLogo from "../Assets/image 3.png"

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  //-------- proses validasi password
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Prose membuat user baru di firebase firebase (email/password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
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
                {error && <div className='auth__error' style={{textAlign:"center", color:"red"}}>{error}</div>}
                <form onSubmit={register} name='registration_form'>
                  <p className="mb-4">Please Register for your account</p>
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
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      value={confirmPassword} 
                      required
                      placeholder='Confirm password'
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                     className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                     type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        background: "linear-gradient(to right, #878787 , #4d4d4d)"
                      }}
                    >
                      REGISTER
                    </button>    
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">already have an account ?</p>
                    <Link to='/login'> <button
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Login
                    </button></Link>
                  </div>
                </form>
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

export default Register