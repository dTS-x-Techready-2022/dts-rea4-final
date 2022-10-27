// import Featured from './Featured/Featured';
import './HomePage.css';
import List from './List/List';
import Navbar from './Navbar/Navbar';
import FooterDiv from '../LandingPage/Footer/FooterDiv';
import AppCarousel from '../HomePage/cardfilm/AppCarousel';
import Popular from '../axios/Popular';


const Homepopular = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        {/* <Featured type={'movie'} /> */}
        <Popular  popular = 'movie/popular?'/>       
        <FooterDiv />
      </div>
    </>
  )
}

export default Homepopular;