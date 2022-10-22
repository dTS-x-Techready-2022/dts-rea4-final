//import './verifyEmail.css'
import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../Config/firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

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
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Silahkan verifikasi email anda</h1>
        <p>
          <strong>Email verifikasi telah dikirim ke email :</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Silahkan ikuti petujuk verifikasi di email anda</span>       
        <button 
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Resend Email {timeActive && time}</button>
      </div>
    </div>
  )
}

export default VerifyEmail
