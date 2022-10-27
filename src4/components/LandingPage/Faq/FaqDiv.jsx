import { Add } from '@mui/icons-material';
import './FaqDiv.css';
const FaqDiv = () => {
  return (
    <div className='faqdiv'>
        <div className="topdiv">
            <span className='large'>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <div className="faq">
            <div className="question">
                <span>What is Netflix?</span>
                <Add/>
            </div>
            <div className="question">
                <span>What is Netflix?</span>
                <Add/>
            </div>
            <div className="question">
                <span>What is Netflix?</span>
                <Add/>
            </div>
            <div className="question">
                <span>What is Netflix?</span>
                <Add/>
            </div>
            <div className="question">
                <span>What is Netflix?</span>
                <Add/>
            </div>
        </div>
        <div className="bottomdiv">
            <span className='small'>Ready to watch? Enter your email to create or restart your membership.</span>
          <div>
            <input placeholder='Email Address' type={'email'} name={'email'}/>
            <button>Get Started</button>
          </div>
        </div>
    </div>
  )
}


export default FaqDiv