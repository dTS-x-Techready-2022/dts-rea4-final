import React from 'react'
import Hero from '../components/Hero';
import IconFavorite from '../components/IconFavorite';
import Latest from '../components/Latest';
import Newsletter from '../components/Newsletter';
import SocialMedia from '../components/SocialMedia';
import TopNews from '../components/TopNews';
import Trending from '../components/Trending';

export default function Home() {

   return (
      <>
         <TopNews />
         <Hero />
         <div className="row">
            <div className="col-lg-8">
               <Latest />
            </div>

            <div className="col-lg-4 pt-3 pt-lg-0">
               <Trending />
               <SocialMedia />
               <Newsletter />
            </div>
         </div>
      </>
   )
}
