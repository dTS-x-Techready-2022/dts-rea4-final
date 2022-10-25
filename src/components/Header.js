import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";


export default function Header(props) {
  const news = props.data;

  const [q, setQ] = useState(""); //fitur search

  // console.log('header', props.data);
  return (
    <div className="header-wrap">
      <Container maxWidth="lg">
        <div className="header-menu-wrap">
          <img src={logo} alt="Logo" height={50} />
          <div>
            <InputBase
              type="search"
              name="search-form"
              className="search-input"
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <IconButton sx={{ p: '10px' }} aria-label="menu">
            <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="menu">
          <Link to="/" className="nav-link">
            <h3>Home</h3>
          </Link>
          <Link to="/headline" className="nav-link">
            <h3>Headline</h3>
          </Link>
          <Link to="/sport" className="nav-link">
            <h3>Sport</h3>
          </Link>
          <Link to="/science" className="nav-link">
            <h3>Science</h3>
          </Link>
        </div>
      </Container>
    </div>
  );
}
