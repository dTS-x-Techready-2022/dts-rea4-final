import './index.css';
import LoginDiv from './Login/LoginDiv';
import FooterDiv from '../LandingPage/Footer/FooterDiv';
const RegisterPage = () => {
  return (
    <div className='loginpage'>
      <LoginDiv loginOrRegister={"register"} />
      <div className="divide">
        <FooterDiv />
      </div>
    </div>
  )
}

export default RegisterPage