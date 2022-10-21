import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search, CaretDownFill, BellFill, Gift } from "react-bootstrap-icons";
import { signingOut } from "../../utils/firebase/signout";
import logo from "../../assets/img/logo.png";
import "./NavbarMenu.scss";

function NavbarMenu() {
  const navigate = useNavigate();

  const signOut = async () => {
    const loggedOut = await signingOut();
    if (!loggedOut.message) {
      navigate("/signup");
    }
  };

  const [isSrolled, setIsSrolled] = useState(false);
  window.onscroll = () => {
    setIsSrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  return (
    <div>
      <Navbar expand="lg" className={isSrolled ? "navbar scrolled" : "navbar"}>
        <ContainerFluid className="container">
          <div className="left">
            <img src={logo} alt="" />
            <div className="d-none d-sm-block">
              <span><Link to="/" className="navLink">Homepage</Link></span>
              <span>Series</span>
              <span>Movie</span>
              <span>Popular</span>
              <span>My List</span>
            </div>
          </div>
          <div className="right">
            <Search className="icon" />
            <span className="d-none d-sm-block">KID</span>
            <Gift className="icon d-none d-sm-block" />
            <BellFill className="icon d-none d-sm-block" />
            <img
              className="d-none d-sm-block"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div className="profile d-none d-sm-block">
              <CaretDownFill className="icon" />
              <div className="options">
                <span>Setting</span>
                <span onClick={signOut}>Logout</span>
              </div>
            </div>
          </div>
        </ContainerFluid>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
