import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    // const signOut = async () => {
    //     // localStorage.removeItem("access_token");
    //     const loggedOut = await signingOut();
    //     if (!loggedOut) {
    //         navigate('/login');
    //     }
    //     setIsLoggedin(false);
    // };

    return (
        <nav
            className=" mt-0 fixed w-full z-10 top-0  flex justify-between items-center h-16 bg-black text-white shadow-sm font-mono"
            role="navigation"
        >
            <Link to="/" className="pl-8">
                Home
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link
                    to="/login"
                    className="p-4"
                    // style={{ display: isLoggedin ? 'none' : 'inline' }}
                >
                    Login
                </Link>
                <Link
                    to="/signup"
                    className="p-4"
                    // style={{ display: isLoggedin ? 'none' : 'inline' }}
                >
                    Signup
                </Link>
                <Link
                    to="/search"
                    className="p-4"
                    // style={{ display: isLoggedin ? 'inline' : 'none' }}
                >
                    Search games
                </Link>
                <Link to="/about" className="p-4">
                    About Us
                </Link>
                <Link
                    to="/login"
                    // style={{ display: isLoggedin ? 'inline' : 'none' }}
                >
                    Signout
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
