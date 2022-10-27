import React from 'react';
import { Notifications, Search } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import imglogo from "../../../Logo/imglogo.png";
import { Link } from "react-router-dom";
import { keluarDariApps } from '../../authentication/firebase';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const buttonLogoutOnClickHandler = () => {
    keluarDariApps();
    navigate("/login");
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
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

        <span><Link to="/home" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></span>
        <span>

          <Link to="/series" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>Series</Link>
        </span>
        <span>Movies</span>
        <span><Link to="/popular" className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>New and Popular</Link></span>
        <span>My List</span>
      </div>
      <div className='right'>
        <Search />
        <span>Kids</span>
        <Notifications />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {/* <div className="profile">
          <ArrowDropDown className="icon" />
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div> */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, my: 2, mx: 2 }}>
              <Typography textAlign="center" sx={{ color: 'white' }}>
                User
              </Typography>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={buttonLogoutOnClickHandler}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </div>
  )
}

export default Navbar