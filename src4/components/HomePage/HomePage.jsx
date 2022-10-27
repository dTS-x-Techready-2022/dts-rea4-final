import Featured from './Featured/Featured';
import './HomePage.css';
import List from './List/List';
import Navbar from './Navbar/Navbar';
import FooterDiv from '../LandingPage/Footer/FooterDiv';
// import Carousel from './cardfilm/Carousel';
import AppCarousel from '../HomePage/cardfilm/AppCarousel';
import ListSeries from '../axios/ListSeries';


// Karena kita ingin track auth, harus menggunakan useEffect
// import React, { useEffect } from "react";

// import NavBar from "../components/NavBar";
// import HomePage from "../containers/HomePage";

// Sekarang kita akan membutuhkan useNavigate untuk memaksa pindah rute apabila user belum ada
// import { useNavigate } from "react-router-dom";

// Dan juga harus menggunakan useAuthState untuk mengecek apakah sedang ada user yang login
// import { useAuthState } from "react-firebase-hooks/auth";

// Dan membutuhkan auth dari authentication/firebase.js karena dibutuhkan oleh useAuthState
// import { auth } from "./authentication/firebase";



const HomePagee = () => {

  // const navigate = useNavigate();
  // const [user, isLoading, error] = useAuthState(auth);

  // useEffect(
  //   () => {
  //     // Bila ada logic / Component login
  //     if (isLoading) {
  //       return;
  //     }

  //     // Bila Authnya null, kita kembalikan ke halaman login
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   },
  //   // dependency list
  //   [user, isLoading, navigate]
  // );

  
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={'movie'} />
        <ListSeries/>
        <AppCarousel/>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
          {/* <Carousel show={3}> */}
            {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
            {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
            {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
         
          {/* </Carousel> */}
          {/* <Carousel/> */}
        </div>

        {/* <List/> */}
        <FooterDiv />
      </div>
    </>
  )
}

export default HomePagee;