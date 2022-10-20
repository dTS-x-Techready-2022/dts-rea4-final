import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Row } from 'react-bootstrap';
import { options1 } from './CarouselOptions';
import Categories from './Categories';

export default function Hero() {
   return (
      <Row className='py-4'>
         <div className="col-lg-8 mb-3">
            <OwlCarousel className="position-relative" {...options1}>
               <div className="position-relative overflow-hidden" style={{ height: 435 }}>
                  <img className="img-fluid h-100" src="https://unsplash.it/500/500/?image=5" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay">
                     <div className="mb-1">
                        <a className="text-white" href>Technology</a>
                        <span className="px-2 text-white">/</span>
                        <a className="text-white" href>January 01, 2045</a>
                     </div>
                     <a className="h2 m-0 text-white font-weight-bold" href>Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</a>
                  </div>
               </div>
               <div className="position-relative overflow-hidden" style={{ height: 435 }}>
                  <img className="img-fluid h-100" src="https://unsplash.it/300/300/?image=6" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay">
                     <div className="mb-1">
                        <a className="text-white" href>Technology</a>
                        <span className="px-2 text-white">/</span>
                        <a className="text-white" href>January 01, 2045</a>
                     </div>
                     <a className="h2 m-0 text-white font-weight-bold" href>Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed</a>
                  </div>
               </div>
            </OwlCarousel>
         </div>

         <Categories />
      </Row>
   )
}
