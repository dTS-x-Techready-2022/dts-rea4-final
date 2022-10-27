import React from 'react'

import FaqDiv from './Faq/FaqDiv';
import FooterDiv from './Footer/FooterDiv';
import './index.css';
import MainDiv from './Main/MainDiv';
import data from '../data';
import CardDiv from './Card/CardDiv';

const LandingPage = () => {
  // function LandingPage extends Component{ 

  return (
    <div className='landingpage'>
      <MainDiv />
      <div className="divider"> </div>
      {
        data.map(item=>
        <>
          <CardDiv data={item}/>
          <div className="divider"> </div>
        </>
        )
      }
      <FaqDiv/>
      <div className="divider"> </div>
      <FooterDiv/>
    </div>
  )
}

export default LandingPage