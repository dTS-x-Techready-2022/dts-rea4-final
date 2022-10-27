import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import imglogo from "../../../Logo/imglogo.png";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const navigate = useNavigate();
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return ()=> (window.onscroll = null);
    }
  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
        <div className='left'>
           
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
          
            <span><Link to="/home" className="nav-link">Home</Link></span>
            <span>
            
                 <Link to="/popular" className="nav-link">Series</Link>            
            </span>
            <span>Movies</span>
            <span><Link to="/popular" className="nav-link">New and Popular</Link></span>
            <span>My List</span>
        </div>
        <div className='right'>
            <Search/>
            <span>Kids</span>
            <Notifications/>
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="profile">
                <ArrowDropDown className="icon" />
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar