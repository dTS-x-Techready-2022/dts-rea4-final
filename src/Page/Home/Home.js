import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import List from "../../Components/List/List";
import NavbarMenu from "../../Components/NavbarMenu/NavbarMenu";
import Top10List from "../../Components/Top10List/Top10List";
import "./Home.scss";
function Home() {
  return (
    <div className="HomeBody">
      <NavbarMenu />
      <Banner />
      <List title="Popular" variant="landscape" />
      <List title="Continue Watching" variant="landscape" />
      <List title="On the agenda" variant="landscape" />
      <List title="Original" variant="potrait" />
      <Top10List title="Top 10 Indonesian Movies" />
      <List title="Watch Again" variant="landscape" />
      <List title="My List" variant="landscape" />
      <Footer />
    </div>
  );
}

export default Home;
