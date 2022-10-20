import React from 'react'

export default function Latest() {
   return (
      <div className="row">
         <div className="col-12">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Latest</h3>
               <a className="text-secondary font-weight-medium text-decoration-none" href>View All</a>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="position-relative mb-3">
               <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=12" style={{ objectFit: 'cover' }} />
               <div className="overlay position-relative bg-light">
                  <div className="mb-2" style={{ fontSize: 14 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h4" href>Est stet amet ipsum stet clita rebum duo</a>
                  <p className="m-0">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
               </div>
            </div>
            <div className="d-flex mb-3">
               <img src="https://unsplash.it/500/300/?image=13" style={{ width: 100, height: 100, objectFit: 'cover' }} />
               <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: 100 }}>
                  <div className="mb-1" style={{ fontSize: 13 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
               </div>
            </div>
            <div className="d-flex mb-3">
               <img src="https://unsplash.it/500/300/?image=14" style={{ width: 100, height: 100, objectFit: 'cover' }} />
               <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: 100 }}>
                  <div className="mb-1" style={{ fontSize: 13 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
               </div>
            </div>
         </div>

         <div className="col-lg-6">
            <div className="position-relative mb-3">
               <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=15" style={{ objectFit: 'cover' }} />
               <div className="overlay position-relative bg-light">
                  <div className="mb-2" style={{ fontSize: 14 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h4" href>Est stet amet ipsum stet clita rebum duo</a>
                  <p className="m-0">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
               </div>
            </div>
            <div className="d-flex mb-3">
               <img src="https://unsplash.it/500/300/?image=16" style={{ width: 100, height: 100, objectFit: 'cover' }} />
               <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: 100 }}>
                  <div className="mb-1" style={{ fontSize: 13 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
               </div>
            </div>
            <div className="d-flex mb-3">
               <img src="https://unsplash.it/500/300/?image=17" style={{ width: 100, height: 100, objectFit: 'cover' }} />
               <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: 100 }}>
                  <div className="mb-1" style={{ fontSize: 13 }}>
                     <a href>Technology</a>
                     <span className="px-1">/</span>
                     <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href>Lorem ipsum dolor sit amet consec adipis elit</a>
               </div>
            </div>
         </div>
      </div>

   )
}
