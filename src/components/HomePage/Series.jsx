// import Featured from './Featured/Featured';
import './HomePage.css';
// import List from './List/List';
import Navbar from './Navbar/Navbar';
import FooterDiv from '../LandingPage/Footer/FooterDiv';
// import AppCarousel from '../HomePage/cardfilm/AppCarousel';
import ListSeries from '../axios/ListSeries';


const Homepopular = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        {/* <Featured type={'movie'} /> */}
        <ListSeries />
        <FooterDiv />
      </div>
    </>
  )
}

export default Homepopular;