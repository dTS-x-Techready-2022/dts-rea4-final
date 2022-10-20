import React from 'react'
import Hero from '../components/Hero';
import Latest from '../components/Latest';
import Newsletter from '../components/Newsletter';
import SocialMedia from '../components/SocialMedia';
import TopNews from '../components/TopNews';

export default function Home() {

   return (
      <>
         <TopNews />
         <Hero />
         <div class="row">
            <div class="col-lg-8">
               <Latest />
            </div>

            <div className="col-lg-4 pt-3 pt-lg-0">
               <SocialMedia />
               <Newsletter />
            </div>

         </div>
      </>
   )
}
