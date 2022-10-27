import './LoginDiv.css'
import { useNavigate } from 'react-router-dom';

const LoginDiv = () => {
  const navigate=useNavigate();

  return (
    <div className='logindiv'>
        <div className='bgdiv'>
            <img
            src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"
            alt="lool"
          />
        </div>
        <div className="headerdiv">
          <img
            onClick={()=>navigate('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="logincarddiv">
          <div className="logincard">
              <div className="loginbg"></div>
              <span className='signin'>Sign In</span>
              <input type="text" placeholder='Email Address' />
              <input type="password" placeholder='Password' />
              <button onClick={()=>navigate('/home')}>Sign In</button>
              <div className="helpdiv">
                <span>
                    <input type="checkbox" name="check" id="1" />
                    Remember me
                </span>
                <span>Need help?</span>
              </div>
              <span className='text1' >New to Netflix?    <span  className='text2'>   Sign up now.</span></span>
          </div>
        </div>
      </div>
  )
}

export default LoginDiv