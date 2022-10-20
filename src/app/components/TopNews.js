import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options3 } from '../components/CarouselOptions';

export default function TopNews() {
   return (
      <OwlCarousel className="py-4 position-relative" {...options3}>
         <div className="d-flex">
            <img src="https://unsplash.it/400/300/?image=1" style={{ width: 80, height: 80, objectFit: 'cover' }} alt="" />
            <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
               <a className="text-secondary font-weight-semi-bold" href>Lorem ipsum dolor sit amet consec adipis elit</a>
            </div>
         </div>
         <div className="d-flex">
            <img src="https://unsplash.it/400/300/?image=2" style={{ width: 80, height: 80, objectFit: 'cover' }} alt="" />
            <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
               <a className="text-secondary font-weight-semi-bold" href>Lorem ipsum dolor sit amet consec adipis elit</a>
            </div>
         </div>
         <div className="d-flex">
            <img src="https://unsplash.it/400/300/?image=3" style={{ width: 80, height: 80, objectFit: 'cover' }} alt="" />
            <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
               <a className="text-secondary font-weight-semi-bold" href>Lorem ipsum dolor sit amet consec adipis elit</a>
            </div>
         </div>
         <div className="d-flex">
            <img src="https://unsplash.it/400/300/?image=4" style={{ width: 80, height: 80, objectFit: 'cover' }} alt="" />
            <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
               <a className="text-secondary font-weight-semi-bold" href>Lorem ipsum dolor sit amet consec adipis elit</a>
            </div>
         </div>
      </OwlCarousel>
   )
}
