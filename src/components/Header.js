import React from "react";
import "./Header.css";

import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import News from "./News";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Header() {
	return (
		<Container maxWidth="xl">
			<div className="header-wrap">
				<img src={logo} alt="Logo" height={50} />
				<div className="header-menu-wrap">
					<InputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
					<SearchIcon />
					<MenuIcon />
				</div>
			</div>
			<Router>
				<ul className="menu">
					<li>
						<Link to={"/"}>Terbaru</Link>
					</li>
					<li>
						<Link to={"/olahraga"}>Olahraga</Link>
					</li>
					<li>
						<Link to={"/ekonomi"}>Ekonomi</Link>
					</li>
					<li>
						<Link to={"/tekno"}>Teknologi</Link>
					</li>
					<li>
						<Link to={"/hiburan"}>Hiburan</Link>
					</li>
					<li>
						<Link to={"/lifestyle"}>Lifestyle</Link>
					</li>
				</ul>
				<Routes>
					<Route exact path="/" element={<News />} />
					<Route exact path="/:category" element={<News />} />
				</Routes>
			</Router>
		</Container>
	);
}
