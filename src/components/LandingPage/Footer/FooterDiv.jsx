import './FooterDiv.css';

const FooterDiv = () => {
  return (
    <div className='footerdiv'>
        <div className="listdiv">
            <div className="eachdiv">
                <span>Audio and Subtitles</span>
                <span>Media Center</span>
                <span>Security</span>
                <span>Contact Us</span>
            </div>
            <div className="eachdiv">
                <span>Audio Description</span>
                <span>Investor Relations</span>
                <span>Legal Provisions</span>
               
            </div>
            <div className="eachdiv">
            <span>Help Center </span>
                <span>Jobs</span>
                <span>Cookie Preferences</span>
            </div>
            <div className="eachdiv">
                <span>Gift Cards</span>
                <span>Terms of Use</span>
                <span>Corporate Information</span>
                <span>       </span>
            </div>
        </div>
        <button>Service Code</button>
        <span>© 2022 Movies, All Right Reserved</span>
    </div>
  )
}

export default FooterDiv