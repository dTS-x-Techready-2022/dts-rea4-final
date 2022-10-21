import React from 'react'
import Footer from '../../Components/Footer/Footer'
import List from '../../Components/List/List'
import MovieSelectedheader from '../../Components/MovieSelectedHeader/MovieSelectedheader'
import NavbarMenu from '../../Components/NavbarMenu/NavbarMenu'
import './MovieSelected.scss'
const MovieSelected = () => {
  return (
    <div  className="MovieSelectedBody">
        <NavbarMenu />
        <MovieSelectedheader />
        <List title="Popular" variant="landscape" />
        <List title="Continue Watching" variant="landscape" />
        <List title="On the agenda" variant="landscape" />
        <List title="Original" variant="potrait" />
        <Footer />
    </div>
  )
}

export default MovieSelected