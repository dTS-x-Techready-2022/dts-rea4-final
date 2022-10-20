import React from "react";
import "./Header.css";

import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <div className="header-wrap">
      <Container maxWidth="lg">
        <div className="header-menu-wrap">
          <img src={logo} alt="Logo" height={50} />
          <div>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon />
            <MenuIcon />
          </div>
        </div>
        <ul className="menu">
          <li>News</li>
          <li>Sport</li>
          <li>Sains</li>
          <li>Tech</li>
          <li>Entertainment</li>
          <li>Life Style</li>
        </ul>
      </Container>
    </div>
  );
}
