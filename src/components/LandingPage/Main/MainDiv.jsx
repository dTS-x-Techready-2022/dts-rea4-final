import './MainDiv.css'
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import imglogo from "../../../Logo/imglogo.png";
import { Box } from '@mui/material';
const MainDiv = () => {
  const navigate = useNavigate();

  return (
    <div className='maindiv'>
      <div className='bgdiv'>
        <img
          src={imglogo}
          alt="imglogo"
        />
      </div>
      <div className="headerdiv">
        {/* <img
            onClick={()=>navigate('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          /> */}

        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={imglogo}
        />
        <div className="buttonsdiv">
          <button>English</button>
          {/* <button onClick={()=>navigate('../login')}>Sign In</button> */}
          {/* <button to="/login" className="nav-link">Sign In</button> */}
          <Link to="/login">
            <Button variant="outlined" sx={{ position: "fixed", top: 42, right: 12, zIndex: 2000, backgroundColor: 'red' }}>Sign In</Button>
          </Link>

        </div>
      </div>
      <div className="bodydiv">
        <span className='large'>Unlimited movies, TV</span>
        <span className='large'>shows and more.</span>
        <span className='medium'>Watch anywhere. Cancel anytime.</span>
        <span className='small'>Ready to watch? Enter your email to create or restart your membership.</span>
        <div>
          <input placeholder='Email Address' type={'email'} name={'email'} />
          <button onClick={() => navigate('/home')}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default MainDiv;