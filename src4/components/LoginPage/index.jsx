import './index.css';
import LoginDiv from './Login/LoginDiv';
import FooterDiv from '../LandingPage/Footer/FooterDiv';
const LoginPage = () => {
  return (
    <div className='loginpage'>
      <LoginDiv/>
      <div className="divide">
        <FooterDiv />
      </div>
    </div>
  )
}

export default LoginPage